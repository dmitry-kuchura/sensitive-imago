<?php

namespace Modules\Reviews\Controllers;

use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Modules\Reviews\Models\Reviews AS Model;
use Modules\Reviews\Models\Video;
use Modules\Content\Models\Control;

class Reviews extends \Modules\Base {

    public $current;
    public $page = 1;
    public $limit_video;
    public $limit_reviews;
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
        $this->limit_reviews = (int) Config::get('basic.limit_reviews');
        $this->limit_video = (int) Config::get('basic.limit_video');
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
        $this->_seo['seo_text'] = $this->current->text;
        // Get Rows
        $result = Model::getRows(1, 'id', 'DESC', $this->limit_reviews, $this->offset);
        $video = Video::getRows(1, 'id', 'DESC', $this->limit_video, $this->offset);
        // Get full count of rows
        $count_reviews = Model::countRows(1);
        $count_video = Video::countRows(1);
        // Generate pagination
        $pager_reviews = Pager::factory($this->page, $count_reviews, $this->limit_reviews, 'reviews')->create();
        $pager_video = Pager::factory($this->page, $count_video, $this->limit_video, 'video')->create();
        // Render template
        $this->_content = View::tpl(['result' => $result, 'video' => $video, 'pager_reviews' => $pager_reviews, 'pager_video' => $pager_video], 'Reviews/List');
    }

}
