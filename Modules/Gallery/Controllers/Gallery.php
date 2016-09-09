<?php

namespace Modules\Gallery\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\Gallery\Models\Gallery AS Model;
use Modules\Content\Models\Control;

class Gallery extends \Modules\Base {

    public $current;
    public $page = 1;
    public $limit;
    public $offset;
    public $model;

    public function before() {
        parent::before();
        $this->current = Control::getRowSimple(Route::controller(), 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }
        $this->setBreadcrumbs(__('Фото'), 'gallery/gallery');

        $this->page = !(int)Route::param('page') ? 1 : (int) Route::param('page');
        $this->limit = (int)Config::get('basic.limit-photo');
        $this->offset = ($this->page - 1) * $this->limit;
        $this->_template = 'Text';
    }

    public function indexAction() {
        if (Config::get('error')) {
            return false;
        }
        // Seo
        $this->_seo['h1'] = $this->current->h1 ? $this->current->h1 : $this->current->name;
        $this->_seo['title'] = $this->current->title ? $this->current->title : $this->current->name;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        $this->_seo['seo_text'] = $this->current->seo_text;

        Config::set('content_class', 'w_df jc-sb');

        // Get Rows
        $result = Model::getRows(1, 'sort', 'ASC', $this->limit, $this->offset);

        // Get full count of rows
        $count = Model::countRows(1);
        // Generate pagination
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        // Render template
        $this->_content = View::tpl(array(
            '_seo' => $this->_seo,
            'result' => $result,
            'pager' => $pager
        ), 'Gallery/List');

        $this->_page_name = $this->current->name;
    }

    public function innerAction() {
        if (Config::get('error')) {
            return false;
        }
        // Check for existence
        $gallery = Model::getGallery(Route::param('alias'), 'alias', 1);
        $result = Model::getImage($gallery->id, 'sort', 'ASC', $this->limit, $this->offset);
        $count = Model::countImages($gallery->id);
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        if (!$result) {
            return Config::error();
        }
        // Seo
        $this->_seo['h1'] = $gallery->h1 ? $gallery->h1 : $gallery->name;
        $this->_seo['title'] = $gallery->title ? $gallery->title : $gallery->name;
        $this->_seo['keywords'] = $gallery->keywords;
        $this->_seo['description'] = $gallery->description;
        $this->_seo['seo_text'] = $gallery->seo_text;
        $this->setBreadcrumbs($gallery->name);
        // Render template
        $this->_content = View::tpl(array(
            '_seo' => $this->_seo,
            'result' => $result,
            'pager' => $pager
        ), 'Gallery/Inner');
    }

}
