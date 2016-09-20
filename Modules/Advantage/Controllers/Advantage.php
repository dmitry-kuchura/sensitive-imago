<?php

namespace Modules\Advantage\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\Advantage\Models\Advantage AS Model;
use Modules\Content\Models\Control;

class Advantage extends \Modules\Base
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
        $this->limit = (int)Config::get('basic.limit_news');
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
        $result = Model::getRows(1, 'id', 'DESC', $this->limit, $this->offset);
        // Get full count of rows
        $count = Model::countRows(1);
        // Generate pagination
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        // Render template
        $this->_content = View::tpl(['result' => $result, 'pager' => $pager], 'Advantage/List');
    }

    public function innerAction()
    {
        if (Config::get('error')) {
            return false;
        }
        $advantage = Model::getRowSimple(Route::param('alias'));
        if (!$advantage) {
            return Config::error();
        }
        // Seo
        $this->_seo['h1'] = $advantage->h1 ? $advantage->h1 : $advantage->name;
        $h1 = $advantage->h1 ? $advantage->h1 : $advantage->name;
        $this->_seo['title'] = $advantage->title ? $advantage->title : $advantage->name;
        $this->_seo['keywords'] = $advantage->keywords;
        $this->_seo['description'] = $advantage->description;
        $this->setBreadcrumbs($advantage->name);
        // Add plus one to views
        Model::addView($advantage);
        // Render
        $this->_content = View::tpl(['advantage' => $advantage], 'Advantage/Inner');
    }

}
