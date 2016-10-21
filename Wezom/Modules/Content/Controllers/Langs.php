<?php

namespace Wezom\Modules\Content\Controllers;

use Core\HTML;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Wezom\Modules\Content\Models\Langs AS Model;

class Langs extends \Wezom\Modules\Base {

    public $tpl_folder = 'Content/Langs';

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Языки сайта');
        $this->_seo['title'] = __('Языки сайта');
        $this->setBreadcrumbs(__('Языки сайта'), 'wezom/' . Route::controller() . '/index');
    }

    function indexAction() {
        $result = Model::getRows(NULL, 'sort', 'ASC');
        $this->_filter = Widgets::get('Filter_Pages');
        $this->_toolbar = Widgets::get('Toolbar_List', array('add' => 0, 'delete' => 0));
        $this->_content = View::tpl(
                        array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                        ), $this->tpl_folder . '/Index');
    }

}
