<?php
namespace Modules\Content\Controllers;

use Core\Route;
use Core\View;
use Core\Config;
use Core\HTML;
use Core\CommonI18n as Common;

use Modules\Content\Models\Content AS Model;
use Modules\Content\Models\Control;

class Content extends \Modules\Base
{

    public function indexAction()
    {
        $simple = true;
        $page = Model::getRowSimple(Route::param('alias'), 'alias', 1);
        if (!$page) {
            $simple = false;
            $page = Control::getRowSimple(Route::param('alias'), 'alias', 1);
            if (!$page) {
                return Config::error();
            }
        }
        // Layot
        $this->_template = 'Text';
        // Seo
        $this->_seo['h1'] = $page->h1 ? $page->h1 : $page->name;
        $this->_seo['title'] = $page->title ? $page->title : $page->name;
        $this->_seo['keywords'] = $page->keywords;
        $this->_seo['description'] = $page->description;
        $this->generateParentBreadcrumbs($page->parent_id, 'content', 'parent_id');
        $this->setBreadcrumbs($page->name);

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

        $this->_content = View::tpl(['text' => $page->text, 'slider' => $slider], $template);
    }

}
