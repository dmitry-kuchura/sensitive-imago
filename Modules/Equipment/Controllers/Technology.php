<?php

namespace Modules\Equipment\Controllers;

use Core\HTML;
use Core\QB\DB;
use Core\Route;
use Core\View;
use Core\Config;
use Core\Widgets;
use Modules\Equipment\Models\Technology AS Model;

class Technology extends \Modules\Base
{

    public $current;
    public $page = 1;
    public $limit;
    public $offset;
    public $model;

    public function before()
    {
        parent::before();
        $this->setBreadcrumbs(__('Оборудование'), 'equipment');
        $this->setBreadcrumbs(__('Технология метода'), 'equipment/technology');
        $this->page = !(int)Route::param('page') ? 1 : (int)Route::param('page');
        $this->offset = ($this->page - 1) * $this->limit;
        $this->_template = 'Text';
    }

    public function innerAction()
    {
        $result = Model::getRowSimple(Route::param('alias'), 'alias', 1);
        $kids = Model::getKids($result->id);
        // SEO
        $this->seo($result);
        if (!$result) {
            return Config::error();
        }
        // Render
        $this->_content = View::tpl(['result' => $result, 'kids' => $kids], 'Equipment/Technology');
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
