<?php
namespace Wezom\Modules\Ajax\Controllers;

use Core\Common;
use Wezom\Modules\Catalog\Models\CatalogImages;
use Core\Arr;
use Core\HTML;
use Core\QB\DB;
use Core\View;
use Core\Config;
use Core\Files;

class Catalog extends \Wezom\Modules\Ajax
{

    public function setPositionAction()
    {
        $id = Arr::get($this->post, 'id');
        $sort = Arr::get($this->post, 'sort');
        Common::factory('catalog')->update(array('sort' => $sort), $id);
        $this->success();
    }


    /**
     * Switch flag between 0 & 1 (field "main" in this case)
     * $this->post['id'] => photo ID to work with
     */
    public function set_default_imageAction()
    {
        $id = (int)Arr::get($this->post, 'id');
        if (!$id) die('Error!');
        $obj = CatalogImages::getRow($id);
        if ($obj->main != 1) {
            DB::update('catalog_images')->set(array('main' => 0))->where('catalog_id', '=', $obj->catalog_id)->execute();
            CatalogImages::update(array('main' => 1), $id);
            Common::factory('catalog')->update(array('image' => $obj->image), $obj->catalog_id);
        }
        die(json_encode(array('status' => true,)));
    }


    /**
     * Delete uploaded item photo
     * $this->post['id'] => ID from gallery images table in DB
     */
    public function delete_catalog_photoAction()
    {
        $id = (int)Arr::get($this->post, 'id');
        if (!$id) die('Error!');

        $image = DB::select('image')->from('catalog_images')->where('id', '=', $id)->find()->image;
        DB::delete('catalog_images')->where('id', '=', $id)->execute();

        Files::deleteImage('catalog', $image);

        die(json_encode(array('status' => true,)));
    }


    /**
     * Sort photos in current album
     * $this->post['order'] => array with photos IDs in right order
     */
    public function sort_imagesAction()
    {
        $order = Arr::get($this->post, 'order');
        if (!is_array($order)) die('Error!');
        $updated = 0;
        foreach ($order as $key => $value) {
            $value = (int)$value;
            $order = $key + 1;
            DB::update('catalog_images')->set(array('sort' => $order))->where('id', '=', $value)->execute();
            $updated++;
        }
        die(json_encode(array('updated' => $updated,)));
    }


    /**
     * Get item photos list
     */
    public function get_uploaded_imagesAction()
    {
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $id = (int)end($arr);
        if (!$id) die('Error!');
        $images = DB::select()->from('catalog_images')->where('catalog_id', '=', $id)->order_by('sort')->find_all();
        if ($images) {
            $show_images = View::tpl(array('images' => $images), 'Catalog/Items/UploadedImages');
        } else {
            $show_images = 0;
        }
        die(json_encode(array('images' => $show_images,)));
    }


    /**
     * Upload photo
     * $this->files['file'] => incoming image
     */
    public function upload_imagesAction()
    {
        if (empty($this->files['file'])) die('No File!');
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $id_good = (int)end($arr);

        $headers = HTML::emu_getallheaders();
        if (array_key_exists('Upload-Filename', $headers)) {
            $name = $headers['Upload-Filename'];
        } else {
            $name = $this->files['file']['name'];
        }

        $name = explode('.', $name);
        $ext = strtolower(end($name));

        if (!in_array($ext, Config::get('images.types'))) die('Not image!');

        $filename = Files::uploadImage('equipment');

        $has_main = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('catalog_images')->where('catalog_id', '=', $id_good)->where('main', '=', 1)->count_all();
        $data = array('catalog_id' => $id_good, 'image' => $filename,);
        if (!$has_main) {
            $data['main'] = 1;
        }
        Common::factory('catalog_images')->insert($data);
        if ($data['main']) {
            Common::factory('catalog')->update(array('image' => $filename), $id_good);
        }

        die(json_encode(array('confirm' => true,)));
    }


    /**
     * Get one item information
     * $this->post['id'] => item ID
     */
    public function getItemAction()
    {
        $id = Arr::get($this->post, 'id', 0);
        $item = DB::select('catalog.id', 'catalog_i18n.name', 'catalog.price', 'catalog.image', array('brands.id', 'brand_id'), array('brands_i18n.name', 'brand_name'))->from('catalog')->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')->where('catalog_i18n.language', '=', \I18n::$default_lang)->join('brands', 'LEFT')->on('brands.alias', '=', 'catalog.brand_alias')->join('brands_i18n', 'LEFT')->on('brands_i18n.row_id', '=', 'brands.id')->on('brands_i18n.language', '=', DB::expr('"' . \I18n::$default_lang . '"'))->where('catalog.id', '=', $id)->find();

        $__res = DB::select('sizes.alias', 'sizes.name')->from('catalog_sizes')->join('sizes')->on('catalog_sizes.size_alias', '=', 'sizes.alias')->where('catalog_sizes.catalog_id', '=', $id)->order_by('sizes.sort', 'ASC')->find_all();
        $iSizes = array();
        foreach ($__res AS $value) {
            $iSizes[] = array('alias' => $value->alias, 'name' => $value->name,);
        }

        $__res = DB::select('colors.alias', 'colors_i18n.name')->from('catalog_colors')->join('colors')->on('catalog_colors.color_alias', '=', 'colors.alias')->join('colors_i18n')->on('colors_i18n.row_id', '=', 'colors.id')->where('catalog_colors.catalog_id', '=', $id)->where('colors_i18n.language', '=', \I18n::$default_lang)->order_by('colors.sort', 'ASC')->find_all();
        $iColors = array();
        foreach ($__res AS $value) {
            $iColors[] = array('alias' => $value->alias, 'name' => $value->name,);
        }

        die(json_encode(array('success' => true, 'item' => array('id' => $item->id, 'link' => HTML::link('wezom/items/edit/' . $item->id), 'brand_link' => HTML::link('wezom/brands/edit/' . $item->brand_id), 'name' => $item->name, 'cost' => $item->price, 'brand_id' => $item->brand_id, 'brand_name' => $item->brand_name, 'image' => is_file(HOST . HTML::media('images/catalog/small/' . $item->image)) ? HTML::media('images/catalog/small/' . $item->image) : NULL, 'image_big' => is_file(HOST . HTML::media('images/catalog/big/' . $item->image)) ? HTML::media('images/catalog/big/' . $item->image) : NULL,), 'sizes' => $iSizes, 'colors' => $iColors,)));
    }


    /**
     * Get items list by some parameters
     * $this->post['id'] => current item ID
     * $this->post['parent_id'] => search item group ID
     * $this->post['search'] => search item artikul or name (or part of it)
     */
    public function searchItemsAction()
    {
        $current_id = (int)Arr::get($this->post, 'id');
        $parent_id = (int)Arr::get($this->post, 'parent_id');
        $search = Arr::get($this->post, 'search');
        $limit = (int)Arr::get($this->post, 'limit', 1);
        $page = (int)Arr::get($this->post, 'page', 1);
        $offset = ($page - 1) * $limit;
        if (!$parent_id && !trim($search)) {
            $this->error(array('items' => array(),));
        }

        $sop = DB::select(array('with_id', 'id'))->from('catalog_related')->where('who_id', '=', $current_id)->find_all();
        $related = array();
        foreach ($sop as $key => $value) {
            $related[] = $value->id;
        }
        $related[] = $current_id;

        $result = DB::select('catalog.*', 'catalog_i18n.name')->from('catalog')->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')->where('catalog_i18n.language', '=', \I18n::$default_lang);
        if ($parent_id > 0) {
            $result->where('catalog.parent_id', '=', $parent_id);
        }
        if (trim($search)) {
            $result->and_where_open()->or_where('catalog_i18n.name', 'LIKE', '%' . $search . '%')->or_where('catalog.artikul', 'LIKE', '%' . $search . '%')->and_where_close();
        }

        $result = $result->where('catalog.id', 'NOT IN', $related)->group_by('catalog.id')->limit($limit)->offset($offset)->find_all();

        $count = DB::select(array(DB::expr('COUNT(DISTINCT catalog.id)'), 'count'))->from('catalog')->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')->where('catalog_i18n.language', '=', \I18n::$default_lang);
        if ($parent_id > 0) {
            $count->where('catalog.parent_id', '=', $parent_id);
        }
        if (trim($search)) {
            $count->and_where_open()->or_where('catalog_i18n.name', 'LIKE', '%' . $search . '%')->or_where('catalog.artikul', 'LIKE', '%' . $search . '%')->and_where_close();
        }
        $count = $count->where('catalog.id', 'NOT IN', $related)->count_all();

        $items = array();
        foreach ($result AS $obj) {
            $items[] = array('id' => $obj->id, 'cost' => $obj->price, 'name' => $obj->name, 'image' => is_file(HOST . HTML::media('images/catalog/small/' . $obj->image)) ? HTML::media('images/catalog/small/' . $obj->image) : NULL,);
        }
        $this->success(array('count' => $count, 'items' => $items,));
    }


    /**
     * Adding item to related for current item
     * $this->post['who_id'] => current item ID
     * $this->post['with_id'] => adding item ID
     */
    public function addItemToRelatedAction()
    {
        $who_id = (int)Arr::get($this->post, 'who_id');
        $with_id = (int)Arr::get($this->post, 'with_id');
        $row = DB::select('id')->from('catalog_related')->where('who_id', '=', $who_id)->where('with_id', '=', $with_id)->find();
        if ($row) {
            die(json_encode(array('success' => false, 'msg' => __('Выбранный товар уже сопутствующий для текущего!'),)));
        }
        Common::factory('catalog_related')->insert(array('who_id' => $who_id, 'with_id' => $with_id,));
        $row = DB::select('id')->from('catalog_related')->where('who_id', '=', $with_id)->where('with_id', '=', $who_id)->find();
        if (!$row) {
            Common::factory('catalog_related')->insert(array('who_id' => $with_id, 'with_id' => $who_id,));
        }
        die(json_encode(array('success' => true,)));
    }


    /**
     * Remove item from current item related
     * $this->post['who_id'] => current item ID
     * $this->post['with_id'] => adding item ID
     */
    public function removeItemFromRelatedAction()
    {
        $who_id = Arr::get($this->post, 'who_id');
        $with_id = Arr::get($this->post, 'with_id');
        DB::delete('catalog_related')->where('who_id', '=', $who_id)->where('with_id', '=', $with_id)->execute();
        DB::delete('catalog_related')->where('who_id', '=', $with_id)->where('with_id', '=', $who_id)->execute();
        die(json_encode(array('success' => true,)));
    }

}