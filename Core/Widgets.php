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

        $result = Common::factory('slider')->getRows(1, 'sort', 'ASC');
        $slider = [];
        foreach ($result AS $key => $value) {
            if (is_file(HOST . HTML::media('images/slider/main/' . $value->image))) {
                $slider[] = $value;
            }
        }
        if (!sizeof($slider)) {
            return null;
        }
        return ['menu' => static::$_menu, 'slider' => $slider];
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
        $styles = array(HTML::media('css/vendor/normalize.css'), HTML::media('css/vendor/magnific-popup.css'), HTML::media('css/style.css'), HTML::media('css/wnoty/jquery.wnoty-2.0.css'), HTML::media('css/wnoty/jquery.wnoty-theme-default.css'), HTML::media('css/programmer/my.css'),);
        $scripts = array(HTML::media('js/vendor/jquery.js'), HTML::media('js/vendor/jquery.carouFredSel-6.2.1.js'), HTML::media('js/vendor/jquery.mousewheel.min.js'), HTML::media('js/vendor/jquery.touchSwipe.min.js'), HTML::media('js/vendor/nouislider.min.js'), HTML::media('js/vendor/jquery.transit.min.js'), HTML::media('js/vendor/svgeverybody.min.js'), HTML::media('js/vendor/jquery-validate.js'), 'http://maps.google.com/maps/api/js?key=AIzaSyD1ZFkcClQJYuZVq_y84oiqtNnpxeX2ieg', HTML::media('js/bundle.js'), HTML::media('js/programmer/my.js'),);
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

        $result = DB::select()->from('reviews')->where('language', '=', $lang)->where('status', '=', 1)->limit(3)->find_all();

        return compact('result');
    }

    public function Main_Review()
    {

        $lang = \I18n::$lang;

        $result = DB::select()->from('video_reviews')->where('language', '=', $lang)->where('status', '=', 1)->limit(3)->find_all();

        return compact('result');
    }

    public function Main_Team()
    {

        $lang = \I18n::$lang;

        $result = DB::select('team.*', 'team_i18n.*')->from('team')->join('team_i18n', 'LEFT')->on('team_i18n.row_id', '=', 'team.id')->where('team_i18n.language', '=', $lang)->where('team.status', '=', 1)->limit(5)->find_all();

        return compact('result');
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

        $result = DB::select('news.*', 'news_i18n.*')->from('news')->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')->where('news_i18n.language', '=', $lang)->where('news.status', '=', 1)->where('news.date', '<=', time())->order_by('news.date', 'DESC')->limit(2)->find_all();

        return ['result' => $result, 'menu' => static::$_menu];
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

    public function Main_Advantage()
    {

        $lang = \I18n::$lang;

        $result = DB::select('advantages.*', 'advantages_i18n.*', 'svg.svg')->from('advantages')->join('advantages_i18n', 'LEFT')->on('advantages_i18n.row_id', '=', 'advantages.id')->join('svg', 'LEFT')->on('advantages.svg', '=', 'svg.id')->where('advantages_i18n.language', '=', $lang)->find_all();

        return compact('result');
    }

    public function Main_Video()
    {
        $result = DB::select('video_i18n.*', 'video.*')
            ->from('video')
            ->join('video_i18n', 'LEFT')->on('video_i18n.row_id', '=', 'video.id')
            ->where('video_i18n.language', '=', \I18n::$lang)
            ->where('video.status', '=', 1)
            ->order_by('video.id', 'DESC');
        return $result->find_all();
    }

}
