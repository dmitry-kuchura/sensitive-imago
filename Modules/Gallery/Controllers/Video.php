<?php

namespace Modules\Gallery\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\Gallery\Models\Video AS Model;
use Modules\Gallery\Models\Tree;
use Modules\Content\Models\Control;

class Video extends \Modules\Base
{

    public $current;
    public $page = 1;
    public $limit;
    public $offset;
    public $model;

    public function before()
    {

        parent::before();
        $this->current = Control::getRowSimple('video', 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }
        $this->setBreadcrumbs($this->current->name, 'video');

        $this->page = !(int)Route::param('page') ? 1 : (int)Route::param('page');
        $this->limit = (int)Config::get('basic.limit_video');
        $this->offset = ($this->page - 1) * $this->limit;
        $this->_template = 'Text';
    }

    public function indexAction()
    {
        if (Config::get('error')) {
            return false;
        }
        // Seo
        $this->_seo['h1'] = $this->current->h1 ? $this->current->h1 : $this->current->name;
        $this->_seo['title'] = $this->current->title ? $this->current->title : $this->current->name;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        $this->_seo['seo_text'] = $this->current->seo_text;

        // Get Rows
        $result = Tree::getRows(1, 'id', 'DESC', $this->limit, $this->offset);
        // Get full count of rows
        $count = count($result);
        // Generate pagination
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        // Render template
        $this->_content = View::tpl(['result' => $result, 'pager' => $pager], 'Gallery/VideoList');

    }

    public function innerAction()
    {
        if (Config::get('error')) {
            return false;
        }
        // Check for existence
        $category = Tree::getRowSimple(Route::param('alias'), 'alias', 1);
        $result = Model::getVideos($category->row_id, 'parent_id', 1);
        if (!$result) {
            return Config::error();
        }
        // Seo
        $this->_seo['h1'] = $category->h1 ? $category->h1 : $category->name;
        $this->_seo['title'] = $category->title ? $category->title : $category->name;
        $this->_seo['keywords'] = $category->keywords;
        $this->_seo['description'] = $category->description;
        $this->_seo['seo_text'] = $category->seo_text;
        $this->setBreadcrumbs($category->name);
        // Render template
        $this->_content = View::tpl(['result' => $result], 'Gallery/VideoInner');
    }

}
