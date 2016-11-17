<?php

namespace Core;

use Core\QB\DB;
use Modules\Content\Models\Control;

class Widgets
{

    static $_instance; // Constant that consists self class
    public static $_menu = [];

    static function factory()
    {
        if (self::$_instance == NULL) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public static function get($name, $array = [], $save = true, $cache = false)
    {
        $arr = explode('_', $name);
        $viewpath = implode('/', $arr);

        if (APPLICATION && !Config::get('error')) {
            $w = WidgetsBackend::factory();
        } else {
            $w = Widgets::factory();
        }

        $_cache = Cache::instance();
        if ($cache) {
            if (!$_cache->get($name)) {
                $data = NULL;
                if ($save && isset($w->_data[$name])) {
                    $data = $w->_data[$name];
                } else {
                    if ($save && isset($w->_data[$name])) {
                        $data = $w->_data[$name];
                    } else if (method_exists($w, $name)) {
                        $result = $w->$name($array);
                        if ($result !== NULL && $result !== FALSE) {
                            $array = array_merge($array, $result);
                            $data = View::widget($array, $viewpath);
                        } else {
                            $data = NULL;
                        }
                    } else {
                        $data = $w->common($viewpath, $array);
                    }
                }
                $_cache->set($name, HTML::compress($data, true));
                return $w->_data[$name] = $data;
            } else {
                return $_cache->get($name);
            }
        }
        if ($_cache->get($name)) {
            $_cache->delete($name);
        }
        if ($save && isset($w->_data[$name])) {
            return $w->_data[$name];
        }
        if (method_exists($w, $name)) {
            $result = $w->$name($array);
            if ($result !== NULL && $result !== FALSE) {
                if (is_array($result)) {
                    $array = array_merge($array, $result);
                }
                return $w->_data[$name] = View::widget($array, $viewpath);
            } else {
                return $w->_data[$name] = NULL;
            }
        }
        return $w->_data[$name] = $w->common($viewpath, $array);
    }

    public function common($viewpath, $array)
    {
        if (file_exists(HOST . '/Views/Widgets/' . $viewpath . '.php')) {
            return View::widget($array, $viewpath);
        }
        return NULL;
    }

    public function Header()
    {

        if (!static::$_menu) {
            $result = CommonI18n::factory('sitemenu')->getRows(1, 'sort', 'ASC');
            foreach ($result AS $key => $value) {
                static::$_menu[$value->group][] = $value;
            }
        }
        $languages = Common::factory('i18n')->getRows(1, 'sort', 'ASC');

        $lang = \I18n::$lang;
        $result = DB::select('slider.*', 'slider_i18n.*')
            ->from('slider')->join('slider_i18n', 'LEFT')
            ->on('slider_i18n.row_id', '=', 'slider.id')
            ->where('slider_i18n.language', '=', $lang)
            ->where('slider.status', '=', 1)
            ->order_by('slider.sort', 'DESC')
            ->find_all();

        $slider = [];
        foreach ($result AS $key => $value) {
            if (is_file(HOST . HTML::media('images/slider/main/' . $value->image))) {
                $slider[] = $value;
            }
        }

        return ['menu' => static::$_menu, 'slider' => $slider, 'languages' => $languages];
    }

    public function Footer()
    {

        if (!static::$_menu) {
            $result = CommonI18n::factory('sitemenu')->getRows(1, 'sort', 'ASC');
            foreach ($result AS $key => $value) {
                static::$_menu[$value->group][] = $value;
            }
        }

        $contacts = Control::getRowSimple('contacts', 'alias', 1);

        return ['menu' => static::$_menu, 'contacts' => $contacts];
    }

    public function HiddenData()
    {
        $styles = [
            HTML::media('css/vendor/normalize.css'),
            HTML::media('css/vendor/magnific-popup.css'),
            HTML::media('css/style.css'),
            HTML::media('css/wnoty/jquery.wnoty-2.0.css'),
            HTML::media('css/wnoty/jquery.wnoty-theme-default.css'),
            HTML::media('css/programmer/my.css')
        ];
        $scripts = [
            HTML::media('js/vendor/jquery.js'),
            HTML::media('js/vendor/jquery.carouFredSel-6.2.1.js'),
            HTML::media('js/vendor/jquery.mousewheel.min.js'),
            HTML::media('js/vendor/jquery.touchSwipe.min.js'),
            HTML::media('js/vendor/nouislider.min.js'),
            HTML::media('js/vendor/jquery.transit.min.js'),
            HTML::media('js/vendor/svgeverybody.min.js'),
            HTML::media('js/vendor/jquery-validate.js'),
            HTML::media('js/wnoty/jquery.wnoty-2.0.js'),
            'http://maps.google.com/maps/api/js?key=AIzaSyD1ZFkcClQJYuZVq_y84oiqtNnpxeX2ieg',
            HTML::media('js/bundle.js'),
            HTML::media('js/programmer/my.js')
        ];
        return ['scripts' => $scripts, 'styles' => $styles];
    }

    public function Main_News()
    {

        $lang = \I18n::$lang;

        $result = DB::select('news.*', 'news_i18n.*')->from('news')->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')->where('news_i18n.language', '=', $lang)->where('news.status', '=', 1)->where('news.date', '<=', time())->order_by('news.date', 'DESC')->limit(4)->find_all();

        return compact('result');
    }

    public function Main_Clients()
    {

        $lang = \I18n::$lang;

        $result = DB::select()
            ->from('reviews')
            ->where('language', '=', $lang)
            ->where('status', '=', 1)
            ->order_by(DB::expr('RAND()'))
            ->limit(3)
            ->find_all();

        return compact('result');
    }

    public function Main_Review()
    {

        $lang = \I18n::$lang;

        $result = DB::select()
            ->from('video_reviews')
            ->where('language', '=', $lang)
            ->where('status', '=', 1)
            ->order_by(DB::expr('RAND()'))
            ->limit(3)
            ->find_all();
        return compact('result');
    }

    public function Main_Team()
    {

        $lang = \I18n::$lang;

        $result = DB::select('team.*', 'team_i18n.*')
            ->from('team')
            ->join('team_i18n', 'LEFT')->on('team_i18n.row_id', '=', 'team.id')
            ->where('team_i18n.language', '=', $lang)
            ->where('team.status', '=', 1)
            ->where('team.main', '=', 1)
            ->order_by('sort', 'ASC')
            ->limit(5)
            ->find_all();

        return compact('result');
    }

    public function Main_Advantage()
    {

        $lang = \I18n::$lang;

        $result = DB::select('advantages.*', 'advantages_i18n.*', 'svg.svg')
            ->from('advantages')
            ->join('advantages_i18n', 'LEFT')->on('advantages_i18n.row_id', '=', 'advantages.id')
            ->join('svg', 'LEFT')->on('advantages.svg', '=', 'svg.id')
            ->where('advantages_i18n.language', '=', $lang)
            ->where('svg.status', '=', 1)
            ->where('advantages.status', '=', 1)
            ->find_all();

        return compact('result');
    }

    public function Main_Video()
    {
        $result = DB::select('video_i18n.*', 'video.*')
            ->from('video')
            ->join('video_i18n', 'LEFT')->on('video_i18n.row_id', '=', 'video.id')
            ->where('video_i18n.language', '=', \I18n::$lang)
            ->where('video.status', '=', 1)
            ->limit(3)
            ->order_by('video.id', 'DESC')
            ->find_all();

        return ['result' => $result];
    }

    public function Main_Devices()
    {
        $result = DB::select('catalog_i18n.*', 'catalog.*')
            ->from('catalog')
            ->join('catalog_i18n', 'LEFT')->on('catalog_i18n.row_id', '=', 'catalog.id')
            ->where('catalog_i18n.language', '=', \I18n::$lang)
            ->where('catalog.status', '=', 1)
            ->limit(4)
            ->order_by('catalog.sort', 'DESC')
            ->find_all();

        return ['result' => $result];
    }

    public function Page_Devices()
    {
        $result = DB::select('catalog_i18n.*', 'catalog.*')
            ->from('catalog')
            ->join('catalog_i18n', 'LEFT')->on('catalog_i18n.row_id', '=', 'catalog.id')
            ->where('catalog_i18n.language', '=', \I18n::$lang)
            ->where('catalog.status', '=', 1)
            ->limit(4)
            ->order_by('catalog.sort', 'DESC')
            ->find_all();

        return ['result' => $result];
    }

    public function Main_Capabilities()
    {
        $vista = [];
        $result = CommonI18n::factory('vista')->getRows(1, 'sort', 'ASC');
        foreach ($result AS $key => $value) {
            $vista[$value->group][] = $value;
        }
        return ['vista' => $vista];
    }

    public function Page_Aside()
    {

        if (!static::$_menu) {
            $result = CommonI18n::factory('sitemenu')->getRows(1, 'sort', 'ASC');
            foreach ($result AS $key => $value) {
                static::$_menu[$value->group][] = $value;
            }
        }

        $lang = \I18n::$lang;

        $bussinesMenu = [];
        foreach(static::$_menu[4] AS $obj) {
            $bussinesMenu[$obj->parent_id][] = $obj;
        }

        $result = DB::select('news.*', 'news_i18n.*')->from('news')->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')->where('news_i18n.language', '=', $lang)->where('news.status', '=', 1)->where('news.date', '<=', time())->order_by('news.date', 'DESC')->limit(2)->find_all();

        return ['result' => $result, 'menu' => static::$_menu, 'bussinesMenu' => $bussinesMenu];
    }

    public function Page_AsideContacts()
    {

        $lang = \I18n::$lang;

        $result = DB::select('news.*', 'news_i18n.*')->from('news')->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')->where('news_i18n.language', '=', $lang)->where('news.status', '=', 1)->where('news.date', '<=', time())->order_by('news.date', 'DESC')->limit(2)->find_all();

        return compact('result');
    }

    public function Page_AsideGallery()
    {

        $lang = \I18n::$lang;

        $result = DB::select('news.*', 'news_i18n.*')->from('news')->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')->where('news_i18n.language', '=', $lang)->where('news.status', '=', 1)->where('news.date', '<=', time())->order_by('news.date', 'DESC')->limit(2)->find_all();

        return compact('result');
    }

    public function Page_AsideEquipment()
    {
        $lang = \I18n::$lang;

        $catalog = DB::select('catalog_tree.*', 'catalog_tree_i18n.*')
            ->from('catalog_tree')
            ->join('catalog_tree_i18n', 'LEFT')->on('catalog_tree_i18n.row_id', '=', 'catalog_tree.id')
            ->where('catalog_tree_i18n.language', '=', $lang)
            ->where('catalog_tree.status', '=', 1)
            ->where('catalog_tree.parent_id', '=', 0)
            ->order_by('catalog_tree.sort', 'ASC')
            ->find_all();

        $result = DB::select('news.*', 'news_i18n.*')
            ->from('news')
            ->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')
            ->where('news_i18n.language', '=', $lang)
            ->where('news.status', '=', 1)
            ->where('news.date', '<=', time())
            ->order_by('news.date', 'DESC')
            ->limit(2)
            ->find_all();

        $features = DB::select('features.alias', 'features.parent_id', 'features.id', 'features_i18n.name')
            ->from('features')
            ->join('features_i18n', 'LEFT')->on('features_i18n.row_id', '=', 'features.id')
            ->where('features_i18n.language', '=', $lang)
            ->where('features.status', '=', 1)
            ->where('features_i18n.row_id', '!=', 1)
            ->order_by('features.sort', 'ASC')
            ->find_all();
        $arr = [];
        foreach ($features AS $obj) {
            $arr[$obj->parent_id][] = $obj;
        }

        $advantages = DB::select('advantage.alias', 'advantage.parent_id', 'advantage.id', 'advantage_i18n.name')
            ->from('advantage')
            ->join('advantage_i18n', 'LEFT')->on('advantage_i18n.row_id', '=', 'advantage.id')
            ->where('advantage_i18n.language', '=', $lang)
            ->where('advantage.status', '=', 1)
            ->where('advantage_i18n.row_id', '!=', 1)
            ->order_by('advantage.sort', 'ASC')
            ->find_all();
        $adv = [];
        foreach ($advantages AS $obj) {
            $adv[$obj->parent_id][] = $obj;
        }

        $software = DB::select('software.alias', 'software.parent_id', 'software.id', 'software_i18n.name')
            ->from('software')
            ->join('software_i18n', 'LEFT')->on('software_i18n.row_id', '=', 'software.id')
            ->where('software_i18n.language', '=', $lang)
            ->where('software.status', '=', 1)
            ->where('software_i18n.row_id', '!=', 1)
            ->order_by('software.sort', 'ASC')
            ->find_all();
        $soft = [];
        foreach ($software AS $obj) {
            $soft[$obj->parent_id][] = $obj;
        }

        $models = DB::select('catalog.*', 'catalog_i18n.*')
            ->from('catalog')
            ->join('catalog_i18n', 'LEFT')->on('catalog_i18n.row_id', '=', 'catalog.id')
            ->where('catalog_i18n.language', '=', $lang)
            ->where('catalog.status', '=', 1)
            ->order_by('catalog.sort', 'ASC')
            ->find_all();

        $kids = DB::select('catalog_tree.*', 'catalog_tree_i18n.*')
            ->from('catalog_tree')
            ->join('catalog_tree_i18n', 'LEFT')->on('catalog_tree_i18n.row_id', '=', 'catalog_tree.id')
            ->where('catalog_tree_i18n.language', '=', $lang)
            ->where('catalog_tree.status', '=', 1)
            ->where('catalog_tree.parent_id', '=', 46)
            ->order_by('catalog_tree.sort', 'ASC')
            ->find_all();

        $menu = [];
        $sitemenu = CommonI18n::factory('sitemenu')->getRows(1, 'sort', 'ASC');
        foreach ($sitemenu AS $key => $value) {
            $menu[$value->group][] = $value;
        }

        return ['catalog' => $catalog, 'result' => $result, 'features' => $arr, 'models' => $models, 'kids' => $kids, 'menu' => $menu, 'advantages' => $adv, 'software' => $soft];
    }


}
