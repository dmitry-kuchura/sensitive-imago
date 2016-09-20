<?php

namespace Wezom\Modules\Index\Controllers;

use Core\QB\DB;
use Core\View;

class Index extends \Wezom\Modules\Base
{

    function indexAction()
    {
        $this->_seo['h1'] = __('Панель управления');
        $this->_seo['title'] = __('Панель управления');

        $count_orders = DB::select([DB::expr('COUNT(id)'), 'count'])->from('prices')->count_all();
        $count_reviews = DB::select([DB::expr('COUNT(id)'), 'count'])->from('reviews')->count_all();
        $count_equipment = DB::select([DB::expr('COUNT(id)'), 'count'])->from('catalog')->count_all();
        $count_news = DB::select([DB::expr('COUNT(id)'), 'count'])->from('news')->count_all();

        $this->_content = View::tpl(compact('count_orders', 'count_reviews', 'count_equipment', 'count_news'), 'Index/Main');
    }

}
