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
use Modules\Equipment\Models\Items;
use Modules\Equipment\Models\Features;
use Modules\Equipment\Models\Advantages;
use Modules\Equipment\Models\Technology;
use Modules\Equipment\Models\Mechanism;
use Modules\Equipment\Models\Software;
use Modules\Equipment\Models\Results;
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
        switch (Route::param('alias')) {
            case 'models':
                $seo = Model::getSeo('models', 'alias', 1);
                $result = Items::getModels('sort', 'ASC', $this->limit, $this->offset);
                $template = 'Equipment/Models';
                $this->seo($seo);
                break;
            case 'features':
                $result = Features::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Features';
                $kids = Features::getKids($result->id);
                $this->seo($result);
                break;
            case 'advantages':
                $result = Advantages::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Advantages';
                $kids = Advantages::getKids($result->id);
                $this->seo($result);
                break;
            case 'technology':
                $result = Technology::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Technology';
                $kids = Technology::getKids($result->id);
                $this->seo($result);
                break;
            case 'mechanism':
                $result = Mechanism::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Mechanism';
                $kids = Mechanism::getKids($result->id);
                $this->seo($result);
                break;
            case 'software':
                $result = Software::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Software';
                $kids = Software::getKids($result->id);
                $this->seo($result);
                break;
            case 'results':
                $result = Results::getRowSimple(1, 'id', 1);
                $template = 'Equipment/Results';
                $kids = Results::getKids($result->id);
                $this->seo($result);
                break;
        }
        if (!$result AND !$template) {
            return Config::error();
        }

        // Render
        $this->_content = View::tpl(['result' => $result, 'kids' => $kids], $template);
    }

    public function seo($data)
    {
        // Seo
        $this->_seo['h1'] = $data->h1 ? $data->h1 : $data->name;
        $this->_seo['title'] = $data->title ? $data->title : $data->name;
        $this->_seo['keywords'] = $data->keywords;
        $this->_seo['description'] = $data->description;
        $this->setBreadcrumbs($data->name);
    }

}
