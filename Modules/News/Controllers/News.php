<?php

namespace Modules\News\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\News\Models\News AS Model;
use Modules\Content\Models\Control;

class News extends \Modules\Base {

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
        
        $this->setBreadcrumbs($this->current->name, $this->current->alias);
        $this->page = !(int) Route::param('page') ? 1 : (int) Route::param('page');
        $this->limit = 4;
//        $this->limit = (int) Config::get('basic.limit-news');
        $this->offset = ($this->page - 1) * $this->limit;
    }

    public function indexAction() {
        if (Config::get('error')) {
            return false;
        }
        $this->_template = 'News';
        // Seo
        $this->_seo['h1'] = $this->current->h1 ? $this->current->h1 : $this->current->name;
        $this->_seo['title'] = $this->current->title ? $this->current->title : $this->current->name;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        $this->_seo['seo_text'] = $this->current->text;
        // Get Rows
        $result = Model::getRows(1, 'date', 'DESC', $this->limit, $this->offset);
        // Get full count of rows
        $count = Model::countRows(1);
        // Generate pagination
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        // Render template
        $this->_content = View::tpl(['result' => $result, 'pager' => $pager, 'h1' => $this->current->h1], 'News/List');
    }

    public function innerAction() {
        if (Config::get('error')) {
            return false;
        }
        $this->_template = 'News';
        $news = Model::getRowSimple(Route::param('alias'), 'alias', 1);
        if (!$news) {
            return Config::error();
        }
        // Seo
        $this->_seo['h1'] = $news->h1 ? $news->h1 : $news->name;
        $h1 = $news->h1 ? $news->h1 : $news->name;
        $this->_seo['title'] = $news->title ? $news->title : $news->name;
        $this->_seo['keywords'] = $news->keywords;
        $this->_seo['description'] = $news->description;
        $this->setBreadcrumbs($news->name);
        // Add plus one to views
        Model::addView($news);
        // Render
        $this->_content = View::tpl(['news' => $news, 'h1' => $h1], 'News/Inner');
    }

}
