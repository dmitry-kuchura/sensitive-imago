<?php

namespace Wezom\Modules\Index\Controllers;

use Core\QB\DB;
use Core\View;

class Index extends \Wezom\Modules\Base {

    function indexAction() {
        $this->_seo['h1'] = __('Панель управления');
        $this->_seo['title'] = __('Панель управления');
        
        $count_orders = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('projects_info')->count_all();
        $count_contacts = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('contacts')->count_all();
        $count_projects = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('projects')->count_all();
        $count_news = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('news')->count_all();
        
        $this->_content = View::tpl(compact('count_orders', 'count_contacts', 'count_projects', 'count_news'), 'Index/Main');
    }

}
