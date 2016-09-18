<?php

namespace Modules\Equipment\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\Equipment\Models\Equipment AS Model;
use Modules\Content\Models\Control;

class Equipment extends \Modules\Base
{

    public $current;
    public $page = 1;
    public $limit;
    public $offset;
    public $model;

    public function before()
    {
        parent::before();
        $this->current = Control::getRowSimple(Route::controller(), 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }

        $this->setBreadcrumbs($this->current->name, $this->current->alias);
        $this->page = !(int)Route::param('page') ? 1 : (int)Route::param('page');
//        $this->limit = (int)Config::get('basic.limit_news');
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
        $this->_seo['seo_text'] = $this->current->text;
        // Get Rows
        $result = Model::getTree(1, 'sort', 'ASC', $this->limit, $this->offset);
        // Get full count of rows
        $count = Model::countRows(1);
        // Generate pagination
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        // Render template
        $this->_content = View::tpl(['result' => $result, 'pager' => $pager], 'Equipment/List');
    }

    public function innerAction()
    {
        if (Config::get('error')) {
            return false;
        }
        $item = Model::getRowSimple(Route::param('alias'), 'alias', 1);
        if (!$item) {
            return Config::error();
        }
        // Seo
        $this->_seo['h1'] = $item->h1 ? $item->h1 : $item->name;
        $this->_seo['title'] = $item->title ? $item->title : $item->name;
        $this->_seo['keywords'] = $item->keywords;
        $this->_seo['description'] = $item->description;
        $this->setBreadcrumbs($item->name);
        // Add plus one to views
        Model::addView($item);
        // Render
        $this->_content = View::tpl(['item' => $item], 'Equipment/Inner');
    }

}
