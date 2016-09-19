<?php

namespace Wezom\Modules\Ajax\Controllers;

use Core\Arr;
use Core\Common;
use Core\HTML;
use Core\QB\DB;
use Core\View;
use Core\Config;
use Core\Files;
use Wezom\Modules\Content\Models\ProjectsImages;

class Projects extends \Wezom\Modules\Ajax {

    public function uploadPhotoAction() {
        if (empty($this->files['file']))
            die('No File!');
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $parent_id = (int) end($arr);
        $headers = HTML::emu_getallheaders();
        if (array_key_exists('Upload-Filename', $headers)) {
            $name = $headers['Upload-Filename'];
        } else {
            $name = $this->files['file']['name'];
        }
        $name = explode('.', $name);
        $ext = strtolower(end($name));
        if (!in_array($ext, Config::get('images.types')))
            die('Not image!');
        $filename = Files::uploadImage(ProjectsImages::$image);
        ProjectsImages::insert(array(
            'projects_id' => $parent_id,
            'image' => $filename,
            'sort' => ProjectsImages::getSortForThisParent($parent_id),
        ));
        $this->success(array(
            'confirm' => true,
        ));
    }

    /**
     * Get album photos list
     */
    public function getUploadedPhotosAction() {
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $parent_id = (int) end($arr);
        if (!$parent_id)
            die('Error!');
        $images = ProjectsImages::getRows($parent_id);
        $show_images = View::tpl(array('images' => $images), 'Content/Prices/UploadedImages');
        $this->success(array(
            'images' => $show_images,
            'count' => sizeof($images),
        ));
    }

    /**
     * Delete uploaded photo from album
     * $this->post['id'] => ID from gallery images table in DB
     */
    public function deleteUploadedPhotosAction() {
        $id = (int) Arr::get($this->post, 'id');
        if (!$id)
            die('Error!');
        $image = ProjectsImages::getRow($id)->image;
        ProjectsImages::deleteImage($image);
        ProjectsImages::delete($id);
        $this->success();
    }

    /**
     * Sort photos in current album
     * $this->post['order'] => array with photos IDs in right order
     */
    public function sortPhotosAction() {
        $order = Arr::get($this->post, 'order');
        if (!is_array($order))
            die('Error!');
        $updated = 0;
        foreach ($order as $key => $value) {
            $value = (int) $value;
            $order = $key + 1;
            ProjectsImages::update(array('sort' => $order), $value);
            $updated++;
        }
        $this->success(array(
            'updated' => $updated,
        ));
    }

    /**
     * Get items list by some parameters
     * $this->post['id'] => current item ID
     * $this->post['parent_id'] => search item group ID
     * $this->post['search'] => search item artikul or name (or part of it)
     */
    public function searchItemsAction() {
        $current_id = (int) Arr::get($this->post, 'id');
        $parent_id = (int) Arr::get($this->post, 'parent_id');
        $search = Arr::get($this->post, 'search');
        $limit = (int) Arr::get($this->post, 'limit', 1);
        $page = (int) Arr::get($this->post, 'page', 1);
        $offset = ($page - 1) * $limit;
        if (!$parent_id && !trim($search)) {
            $this->error(array(
                'items' => array(),
            ));
        }

        $sop = DB::select(array('catalog_id', 'id'))->from('news_items')->where('news_id', '=', $current_id)->find_all();
        $related = array();
        foreach ($sop as $key => $value) {
            $related[] = $value->id;
        }
        $related[] = $current_id;

        $result = DB::select('catalog.*', 'catalog_i18n.name')
                ->from('catalog')
                ->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')
                ->where('catalog_i18n.language', '=', \I18n::$default_lang);
        if ($parent_id > 0) {
            $result->where('catalog.parent_id', '=', $parent_id);
        }
        if (trim($search)) {
            $result
                    ->and_where_open()
                    ->or_where('catalog_i18n.name', 'LIKE', '%' . $search . '%')
                    ->or_where('catalog.artikul', 'LIKE', '%' . $search . '%')
                    ->and_where_close();
        }

        $result = $result
                ->where('catalog.id', 'NOT IN', $related)
                ->group_by('catalog.id')
                ->limit($limit)
                ->offset($offset)
                ->find_all();

        $count = DB::select(array(DB::expr('COUNT(DISTINCT catalog.id)'), 'count'))
                ->from('catalog')
                ->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')
                ->where('catalog_i18n.language', '=', \I18n::$default_lang);
        if ($parent_id > 0) {
            $count->where('catalog.parent_id', '=', $parent_id);
        }
        if (trim($search)) {
            $count
                    ->and_where_open()
                    ->or_where('catalog_i18n.name', 'LIKE', '%' . $search . '%')
                    ->or_where('catalog.artikul', 'LIKE', '%' . $search . '%')
                    ->and_where_close();
        }
        $count = $count
                ->where('catalog.id', 'NOT IN', $related)
                ->count_all();

        $items = array();
        foreach ($result AS $obj) {
            $items[] = array(
                'id' => $obj->id,
                'cost' => $obj->price,
                'name' => $obj->name,
                'image' => is_file(HOST . HTML::media('images/catalog/small/' . $obj->image)) ? HTML::media('images/catalog/small/' . $obj->image) : NULL,
            );
        }
        $this->success(array(
            'count' => $count,
            'items' => $items,
        ));
    }

    /**
     * Adding item to related for current item
     * $this->post['who_id'] => current item ID
     * $this->post['with_id'] => adding item ID
     */
    public function addItemToRelatedAction() {
        $news_id = (int) Arr::get($this->post, 'who_id');
        $catalog_id = (int) Arr::get($this->post, 'with_id');
        $row = DB::select('id')
                ->from('news_items')
                ->where('news_id', '=', $news_id)
                ->where('catalog_id', '=', $catalog_id)
                ->find();
        if ($row) {
            die(json_encode(array(
                'success' => false,
                'msg' => __('Выбранный товар уже сопутствующий для текущего!'),
            )));
        }
        Common::factory('news_items')->insert(array(
            'news_id' => $news_id,
            'catalog_id' => $catalog_id,
        ));
        $row = DB::select('id')
                ->from('news_items')
                ->where('news_id', '=', $news_id)
                ->where('catalog_id', '=', $catalog_id)
                ->find();
        if (!$row) {
            Common::factory('news_items')->insert(array(
                'news_id' => $news_id,
                'catalog_id' => $catalog_id,
            ));
        }
        die(json_encode(array(
            'success' => true,
        )));
    }

    /**
     * Remove item from current item related
     * $this->post['who_id'] => current item ID
     * $this->post['with_id'] => adding item ID
     */
    public function removeItemFromRelatedAction() {
        $news_id = Arr::get($this->post, 'who_id');
        $catalog_id = Arr::get($this->post, 'with_id');
        DB::delete('news_items')->where('news_id', '=', $news_id)->where('catalog_id', '=', $catalog_id)->execute();
        DB::delete('news_items')->where('catalog_id', '=', $catalog_id)->where('news_id', '=', $news_id)->execute();
        die(json_encode(array(
            'success' => true,
        )));
    }

}
