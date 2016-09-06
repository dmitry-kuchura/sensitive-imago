<?php

namespace Core;

use Core\QB\DB;

class Widgets {

    static $_instance; // Constant that consists self class
    public static $_brands = array();
    public static $_menu = array();
    public static $_emails = array();
    public static $_phones = array();

    static function factory() {
        if (self::$_instance == NULL) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public static function get($name, $array = array(), $save = true, $cache = false) {
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
//            Profiler::stop($token);
        return $w->_data[$name] = $w->common($viewpath, $array);
    }

    public function common($viewpath, $array) {
        if (file_exists(HOST . '/Views/Widgets/' . $viewpath . '.php')) {
            return View::widget($array, $viewpath);
        }
        return NULL;
    }

    public function Head() {
        $styles = array(
            HTML::media('css/components.css'),
            HTML::media('css/style.css'),
            HTML::media('css/responsive.css'),
            HTML::media('css/wnoty/jquery.wnoty-2.0.css'),
            HTML::media('css/wnoty/jquery.wnoty-theme-default.css'),
            HTML::media('css/programmer/fpopup.css'),
        );
        $scripts = array(
            HTML::media('js/libs.js'),
            HTML::media('js/inputmask.js'),
            HTML::media('js/jquery.inputmask.js'),
            HTML::media('js/components.js'),
            HTML::media('js/wnoty/jquery.wnoty-2.0.js'),
            HTML::media('js/inits.js'),
            HTML::media('js/validation.js'),
            HTML::media('js/programmer/my.js'),
        );
        return array('scripts' => $scripts, 'styles' => $styles);
    }

    public function HiddenData() {
        $styles = array(
            HTML::media('css/vendor/normalize.css'),
            HTML::media('css/vendor/magnific-popup.css'),
            HTML::media('css/style.css'),
            HTML::media('css/wnoty/jquery.wnoty-2.0.css'),
            HTML::media('css/wnoty/jquery.wnoty-theme-default.css'),
            HTML::media('css/programmer/my.css'),
        );
        $scripts = array(
            HTML::media('js/vendor/jquery.js'),
            HTML::media('js/vendor/jquery.carouFredSel-6.2.1.js'),
            HTML::media('js/vendor/jquery.mousewheel.min.js'),
            HTML::media('js/vendor/jquery.touchSwipe.min.js'),
            HTML::media('js/vendor/nouislider.min.js'),
            HTML::media('js/vendor/jquery.transit.min.js'),
            HTML::media('js/vendor/svgeverybody.min.js'),
            HTML::media('js/vendor/jquery-validate.js'),
            HTML::media('js/wnoty/jquery.wnoty-2.0.js'),
            HTML::media('js/validation.js'),
            HTML::media('js/programmer/my.js'),
        );
        return ['scripts' => $scripts, 'styles' => $styles];
    }

    public function Main_News() {

        $lang = \I18n::$lang;

        $result = DB::select('news.*', 'news_i18n.*')
                ->from('news')
                ->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')
                ->where('news_i18n.language', '=', $lang)
                ->where('news.status', '=', 1)
                ->where('news.date', '<=', time())
                ->order_by('news.date', 'DESC')
                ->limit(4)
                ->find_all();

        return compact('result');
    }
    
    public function Page_Aside() {

        $lang = \I18n::$lang;

        $result = DB::select('news.*', 'news_i18n.*')
                ->from('news')
                ->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')
                ->where('news_i18n.language', '=', $lang)
                ->where('news.status', '=', 1)
                ->where('news.date', '<=', time())
                ->order_by('news.date', 'DESC')
                ->limit(2)
                ->find_all();

        return compact('result');
    }

}
