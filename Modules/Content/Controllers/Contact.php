<?php

namespace Modules\Content\Controllers;

use Core\View;
use Core\Config;
use Core\Widgets;
use Modules\Content\Models\Control;

class Contact extends \Modules\Base {

    public $current;

    public function before() {
        parent::before();
        $this->current = Control::getRowSimple('contacts', 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }
        $this->setBreadcrumbs($this->current->name, $this->current->alias);
        $this->_template = 'Text';
    }

    public function indexAction() {
        if (Config::get('error')) {
            return false;
        }
        // Seo
        $this->_seo['h1'] = $this->current->h1;
        $this->_seo['title'] = $this->current->title;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        // Render template
        $this->_content = View::tpl(array('obj' => json_decode($this->current->other)), 'Contact/Index');

        $this->_page_name = $this->current->name;
    }

}
