<?php

namespace Modules\Content\Controllers;

use Core\Route;
use Core\Config;
use Core\Widgets;
use Modules\Content\Models\Control;

class Index extends \Modules\Base {

    public $current;

    public function before() {
        parent::before();
        $this->current = Control::getRowSimple(Route::controller(), 'alias', 1);
        if (!$this->current) {
            return Config::error();
        }
    }

    public function indexAction() {
        $this->_template = 'Main';
        // Check for existance
        if (Config::get('error')) {
            return false;
        }
        // Seo
        $this->_seo['h1'] = $this->current->h1;
        $this->_seo['title'] = $this->current->title;
        $this->_seo['keywords'] = $this->current->keywords;
        $this->_seo['description'] = $this->current->description;
        // Render template
        $this->_seo['seo_text'] = $this->current->text;

        $this->_widgets['Index_Slider'] = Widgets::get('Index_Slider');
        $this->_widgets['Index_Groups'] = Widgets::get('Index_Groups');
        $this->_widgets['Index_NoveltyItems'] = Widgets::get('Index_NoveltyItems');
        $this->_widgets['Index_BlackBanner'] = Widgets::get('Index_BlackBanner');
        $this->_widgets['Index_Brands'] = Widgets::get('Index_Brands');
    }

}
