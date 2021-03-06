<?php
namespace Wezom\Modules\Ajax\Controllers;

use Core\Arr;
use Core\HTML;
use Core\View;
use Core\Config;
use Core\Files;
use Wezom\Modules\Multimedia\Models\PartnersImages;

class Partners extends \Wezom\Modules\Ajax
{

    public function uploadPhotoAction()
    {
        if (empty($this->files['file'])) die('No File!');
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $parent_id = (int)end($arr);
        $headers = HTML::emu_getallheaders();
        if (array_key_exists('Upload-Filename', $headers)) {
            $name = $headers['Upload-Filename'];
        } else {
            $name = $this->files['file']['name'];
        }
        $name = explode('.', $name);
        $ext = strtolower(end($name));
        if (!in_array($ext, Config::get('images.types'))) die('Not image!');
        $filename = Files::uploadImage(PartnersImages::$image);
        PartnersImages::insert(array(
            'gallery_id' => $parent_id,
            'image' => $filename,
            'sort' => PartnersImages::getSortForThisParent($parent_id),
        ));
        $this->success(array(
            'confirm' => true,
        ));
    }

    public function getUploadedPhotosAction()
    {
        $arr = explode('/', Arr::get($_SERVER, 'HTTP_REFERER'));
        $parent_id = (int)end($arr);
        if (!$parent_id) die('Error!');
        $images = PartnersImages::getRows($parent_id);
        $show_images = View::tpl(array('images' => $images), 'Multimedia/Partners/UploadedImages');
        $this->success(array(
            'images' => $show_images,
            'count' => count($images),
        ));
    }

    public function deleteUploadedPhotosAction()
    {
        $id = (int)Arr::get($this->post, 'id');
        if (!$id) die('Error!');
        $image = PartnersImages::getRow($id)->image;
        PartnersImages::deleteImage($image);
        PartnersImages::delete($id);
        $this->success();
    }

    public function setPhotoAsMainAction()
    {
        $id = (int)Arr::get($this->post, 'id');
        if (!$id) die('Error!');
        $obj = PartnersImages::getRow($id);
        if ($obj->main) {
            $main = 0;
            PartnersImages::updateDefault(['image' => null], $obj->gallery_id);
        } else {
            $main = 1;
            PartnersImages::updateDefault(['image' => $obj->image], $obj->gallery_id);
        }
        PartnersImages::update(['main' => $main], $id);
        $this->success();
    }

    public function sortPhotosAction()
    {
        $order = Arr::get($this->post, 'order');
        if (!is_array($order)) die('Error!');
        $updated = 0;
        foreach ($order as $key => $value) {
            $value = (int)$value;
            $order = $key + 1;
            PartnersImages::update(array('sort' => $order), $value);
            $updated++;
        }
        $this->success(array(
            'updated' => $updated,
        ));
    }

}