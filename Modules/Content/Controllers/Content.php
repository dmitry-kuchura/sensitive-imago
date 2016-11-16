<?php
namespace Modules\Content\Controllers;

use Modules\Base;
use Core\Route;
use Core\View;
use Core\Config;
use Core\HTML;
use Core\CommonI18n as Common;

use Modules\Content\Models\Content AS Model;
use Modules\Content\Models\Control;

class Content extends Base
{

    public function indexAction()
    {
        $page = Model::getRowSimple(Route::param('alias'), 'alias', 1);
        if (!$page) {
            $page = Control::getRowSimple(Route::param('alias'), 'alias', 1);
            if (!$page) {
                return Config::error();
            }
        }

        if ($page->id == '10' OR $page->id == '9') {
            $this->setBreadcrumbs(__('Оборудование'), 'equipment');
            $this->setBreadcrumbs(__('Модели приборов'), 'equipment/models');
            $this->setBreadcrumbs($page->name);
        } else {
            $this->generateParentBreadcrumbs($page->parent_id, 'content', 'parent_id');
            $this->setBreadcrumbs($page->name);
        }
        $this->_template = 'Text';
        // Seo
        $this->_seo['h1'] = $page->h1 ? $page->h1 : $page->name;
        $this->_seo['title'] = $page->title ? $page->title : $page->name;
        $this->_seo['keywords'] = $page->keywords;
        $this->_seo['description'] = $page->description;

        // Slider
        $result = Common::factory('slider_simple')->getRows(1, 'sort', 'ASC');
        $slider = [];
        foreach ($result AS $key => $value) {
            if (is_file(HOST . HTML::media('images/slider_simple/main/' . $value->image))) {
                $slider[] = $value;
            }
        }

        switch (Route::param('alias')) {
            case 'about':
                $template = 'Content/About';
                break;
            default:
                $template = 'Content/Page';
                break;
        }

        if ($page->parent_id == '8') {
            $this->_business = true;
        } elseif ($page->alias == 'bussines') {
            $this->_business = true;
        } else {
            $this->_business = false;
        }

        if ($page->id == '10' OR $page->id == '9') {
            $this->_controller = 'models';
        } else {
            $this->_controller = Route::controller();
        }

        $kids = Model::getKids($page->id);

        $this->_content = View::tpl(['text' => $page->text, 'slider' => $slider, 'kids' => $kids], $template);
    }

}
