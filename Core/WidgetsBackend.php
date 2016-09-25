<?php

namespace Core;

use Core\QB\DB;
use Wezom\Modules\Contacts\Models\Contacts;

class WidgetsBackend
{

    static $_instance; // Constant that consists self class
    public $_data = array(); // Array of called widgets
    public $_tree = array(); // Only for catalog menus on footer and header. Minus one query

    // Instance method

    static function factory()
    {
        if (self::$_instance == NULL) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function common($viewpath, $array)
    {
        if (file_exists(HOST . APPLICATION . '/Views/Widgets/' . $viewpath . '.php')) {
            return View::widget($array, $viewpath);
        }
        return NULL;
    }

    public function Sidebar()
    {
        $result = DB::select()->from('menu')->where('status', '=', 1)->order_by('sort')->find_all();
        $arr = array();
        if (User::god()) {
            foreach ($result AS $obj) {
                $arr[$obj->id_parent][] = $obj;
            }
        } else {
            $access = User::access();
            $_arr = array();
            foreach ($result AS $obj) {
                $r = explode('/', trim($obj->link, '/'));
                if (!$obj->link || Arr::get($access, $r[0], 'no') == 'edit' || (Arr::get($access, $r[0]) == 'view' && Arr::get($r, 1) == 'index')) {
                    $_arr[$obj->id_parent][] = $obj;
                } else if (!$obj->link || Arr::get($access, str_replace('seo_', '', $r[0]), 'no') == 'edit' || (Arr::get($access, str_replace('seo_', '', $r[0])) == 'view' && Arr::get($r, 1) == 'index')) {
                    $_arr[$obj->id_parent][] = $obj;
                }
            }
            foreach ($_arr[0] AS $el) {
                if (($el->link || count(Arr::get($_arr, $el->id, array())))) {
                    $arr[0][] = $el;
                }
            }
            foreach ($_arr AS $key => $el) {
                if ($key != 0) {
                    $arr[$key] = $el;
                }
            }
        }

        $counts = array();
        $counts['contacts'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('contacts')->where('status', '=', 0)->count_all();
        $counts['orders'] = (int)Common::factory('orders')->countRows(0);
        $counts['cert'] = (int)Common::factory('orders_certificates')->countRows(0);
        $counts['simple'] = (int)Common::factory('orders_simple')->countRows(0);
        $counts['only'] = (int)Common::factory('orders_only')->countRows(0);
        $counts['all_orders'] = $counts['orders'] + $counts['cert'] + $counts['simple'] + $counts['only'];
        $counts['reviews'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('reviews')->where('status', '=', 0)->count_all();
        $counts['users'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('users')->where('status', '=', 0)->where('role_id', '=', 1)->count_all();
        $counts['admins'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('users')->where('status', '=', 0)->where('role_id', '!=', 1)->count_all();
        $counts['projects'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('projects_info')->where('status', '=', 0)->count_all();
        $counts['prices'] = (int)DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('prices')->where('status', '=', 0)->count_all();
        $counts['all_users'] = $counts['users'] + $counts['admins'];

        return array('result' => $arr, 'counts' => $counts);
    }

    public function Crumbs()
    {
        $count_orders = 0;
        $result = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('orders')->where('status', '=', 0)->as_object()->execute()->current();
        if ($result) {
            $count_orders = $result->count;
        }
        $count_comments = 0;
        $result = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('catalog_comments')->where('status', '=', 0)->as_object()->execute()->current();
        if ($result) {
            $count_comments = $result->count;
        }
        return array('cc' => $count_comments, 'co' => $count_orders);
    }

    public function Header_Contacts()
    {
        $contacts = Contacts::getRows(0, NULL, NULL, 'id', 'DESC', 5);
        $cContacts = Contacts::countRows(0);
        return array('contacts' => $contacts, 'cContacts' => $cContacts,);
    }

    public function Header_Log()
    {
        $count = DB::select(array(DB::expr('COUNT(id)'), 'count'))->from('log')->where('deleted', '=', 0)->count_all();
        $result = DB::select()->from('log')->where('deleted', '=', 0)->order_by('id', 'DESC')->limit(7)->find_all();
        return array('count' => $count, 'result' => $result,);
    }

    public function Index_Visitors()
    {
        if (!Config::get('main.visitor')) {
            return NULL;
        }
        return array();
    }

    public function Index_Readme()
    {
        if (!is_file(HOST . '/README.md')) {
            return NULL;
        }
        return array('readme' => Parsedown::instance()->text(file_get_contents(HOST . '/README.md')),);
    }

    public function Index_News()
    {
        if (function_exists('curl_init')) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://wezom.com.ua/api/get_news');
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            $html = curl_exec($ch);
            curl_close($ch);
            $news = json_decode($html, true);

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://wezom.com.ua/api/get_blog');
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
            $html = curl_exec($ch);
            curl_close($ch);
            $blog = json_decode($html, true);
        } else if (function_exists('file_get_contents')) {
            $html = file_get_contents('http://wezom.com.ua/api/get_news');
            $news = json_decode($html, true);

            $html = file_get_contents('http://wezom.com.ua/api/get_blog');
            $blog = json_decode($html, true);
        } else {
            return NULL;
        }
        return array('news' => $news, 'blog' => $blog,);
    }

    public function Index_Log()
    {
        $log = DB::select()->from('log')->where('deleted', '=', 0)->order_by('id', 'DESC')->limit(20)->find_all();
        return array('log' => $log,);
    }

    public function Index_Orders()
    {
        $result = DB::select()->from('prices')->limit(8)->order_by('id', 'DESC')->find_all();

        return ['prices' => $result];
    }
}
