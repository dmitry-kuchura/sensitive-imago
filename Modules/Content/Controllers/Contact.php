<?php

namespace Modules\Content\Controllers;

use Core\View;
use Core\Config;
use Core\Widgets;
use Modules\Content\Models\Control;
use Modules\Content\Models\Contacts;

class Contact extends \Modules\Base
{

    public $current;

    public function before()
    {
        parent::before();
        $this->current = Control::getRowSimple('contacts', 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }
        $this->setBreadcrumbs($this->current->name, $this->current->alias);
        $this->_template = 'Text';
    }

    public function indexAction()
    {
        if (Config::get('error')) {
            return false;
        }
        // Seo
        $this->_seo['h1'] = $this->current->h1;
        $this->_seo['title'] = $this->current->title;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        // Render template
        $this->_content = View::tpl(['obj' => $this->current], 'Contact/Index');
    }

    public function regionAction()
    {
        if (Config::get('error')) {
            return false;
        }
        $regions = Contacts::getRegions();
        var_dump($regions[0]);
        die;
        $branch = Contacts::getBranches();
        // Seo
        $this->_seo['h1'] = __('Региональные представительства');
        $this->_seo['title'] = __('Региональные представительства');
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        // Render template
        $this->_content = View::tpl(['$regions' => $regions, 'branch' => $branch], 'Contact/Region');
    }

}
