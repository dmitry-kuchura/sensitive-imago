<?php

namespace Modules\Equipment\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Pager\Pager;
use Core\Widgets;
use Modules\Equipment\Models\Models AS Model;
use Modules\Equipment\Models\Items;
use Modules\Content\Models\Control;

class Models extends \Modules\Base
{

    public $current;
    public $page = 1;
    public $limit;
    public $offset;
    public $model;

    public function before()
    {
        parent::before();
        $this->setBreadcrumbs('Оборудование', 'equipment');
        $this->setBreadcrumbs('Модели приборов', 'equipment/models');
        $this->page = !(int)Route::param('page') ? 1 : (int)Route::param('page');
        $this->offset = ($this->page - 1) * $this->limit;
        $this->_template = 'Text';
    }

    public function innerAction()
    {
        if (Config::get('error')) {
            return false;
        }
        $result = Items::getRowSimple(Route::param('alias'), 'alias', 1);
        $images = Items::getItemImages($result->row_id);
        // SEO
        $this->seo($result);
        if (!$result) {
            return Config::error();
        }
        // Render
        $this->_content = View::tpl(['result' => $result, 'images' => $images], 'Equipment/Inner');
    }

    public function seo($data)
    {
        $this->_seo['h1'] = $data->h1 ? $data->h1 : $data->name;
        $this->_seo['title'] = $data->title ? $data->title : $data->name;
        $this->_seo['keywords'] = $data->keywords;
        $this->_seo['description'] = $data->description;
        $this->setBreadcrumbs($data->name);
    }

}
