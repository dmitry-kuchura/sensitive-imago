<?php

namespace Modules;

use Core\Arr;
use Core\Config;
use Core\Cookie;
use Core\Encrypt;
use Core\GeoIP;
use Core\HTTP;
use Core\Route;
use Core\View;
use Core\System;
use Core\Cron;
use Core\HTML;
use Core\QB\DB;
use Core\User;
use Core\Widgets;

class Base {

    protected $_template = 'Main';
    protected $_content;
    protected $_config = array();
    protected $_seo = array();
    protected $_breadcrumbs = array();
    protected $_method;
    protected $_languages = array();
    protected $_currency;
    protected $_widgets = array();
    protected $_seo_text = false;
    protected $_page_name = NULL;
    protected $_bg = true;

    public function before() {
        $this->setLanguage();
//        $this->setCurrency();
        $this->_languages = Config::get('languages') ? Config::get('languages') : array();
        $_POST = Arr::clearArray($_POST);
        $_GET = Arr::clearArray($_GET);
        $this->CSRF();
        $this->_method = $_SERVER['REQUEST_METHOD'];
        $this->config();
        $this->access();
        $this->redirects();
        User::factory()->is_remember();
        $cron = new Cron;
        $cron->check();
    }

    private function setLanguage() {
        \I18n::lang(Route::param('lang'));
    }

    public function after() {
        $this->seo();
        $this->visitors();
        $this->render();
    }

    private function CSRF() {
        $_SESSION['token'] = Encrypt::instance()->encode(hash('sha256', Config::get('main.token')));
        if (Route::controller() != 'form') {
            return true;
        }
        if ($_POST) {
            if (!array_key_exists('token', $_POST)) {
                die('Error!');
            }
            $token = Encrypt::instance()->decode($_POST['token']);
            if ($token != hash('sha256', Config::get('main.token'))) {
                die('Error!');
            }
        }
    }

    private function access() {
        if (!Config::get('security.auth') || !Config::get('security.username') || !Config::get('security.password')) {
            return false;
        }
        if (
                Arr::get($_SERVER, 'PHP_AUTH_USER') != Config::get('security.username') ||
                Arr::get($_SERVER, 'PHP_AUTH_PW') != Config::get('security.password')
        ) {
            header('HTTP/1.0 401 Unauthorized');
            header('WWW-Authenticate: Basic realm="My Realm"');
            echo "<h1>Authorization Required</h1><p>This server could not verify that you are authorized to access the document requested.  Either you supplied the wrong credentials (e.g., bad password), or your browser doesn't understand how to supply the credentials required.</p>";
            exit;
        }
    }

    public function redirects() {
        $row = DB::select('link_to', 'type')->from('seo_redirects')->where('link_from', '=', $_SERVER['REQUEST_URI'])->where('status', '=', 1)->find();
        if ($row) {
            HTTP::redirect($row->link_to, $row->type);
        }
    }

    public function visitors() {
        if (!Config::get('main.visitor')) {
            return false;
        }
        GeoIP::factory()->save();
    }

    private function config() {
        $result = DB::select('key', 'zna', 'group')
                ->from('config')
                ->join('config_groups')->on('config.group', '=', 'config_groups.alias')
                ->where('config.status', '=', 1)
                ->where('config_groups.status', '=', 1)
                ->find_all();
        $groups = array();
        foreach ($result AS $obj) {
            $groups[$obj->group][$obj->key] = $obj->zna;
        }
        foreach ($groups AS $key => $value) {
            Config::set($key, $value);
        }
        $result = DB::select('script', 'place')->from('seo_scripts')->where('status', '=', 1)->as_object()->execute();
        $this->_seo['scripts'] = array('body' => array(), 'head' => array(), 'counter' => array());
        foreach ($result AS $obj) {
            $this->_seo['scripts'][$obj->place][] = $obj->script;
        }
        $this->setBreadcrumbs(__('Главная страница'), '');
    }

    private function seo() {
        if (!Config::get('error')) {
            $seo = DB::select('seo_links_i18n.h1', 'seo_links_i18n.title', 'seo_links_i18n.keywords', 'seo_links_i18n.description', 'seo_links_i18n.text')
                    ->from('seo_links')
                    ->join('seo_links_i18n')->on('seo_links_i18n.row_id', '=', 'seo_links.id')
                    ->where('seo_links_i18n.language', '=', \I18n::$lang)
                    ->where('seo_links.status', '=', 1)
                    ->where('seo_links.link', '=', Arr::get($_SERVER, 'REQUEST_URI'))
                    ->find();
            if ($seo) {
                $this->_seo['h1'] = $seo->h1;
                $this->_seo['title'] = $seo->title;
                $this->_seo['keywords'] = $seo->keywords;
                $this->_seo['description'] = $seo->description;
                $this->_seo['seo_text'] = $seo->text;
            }
        } else {
            $this->_seo['h1'] = __('Ошибка 404! Страница не найдена');
            $this->_seo['title'] = __('Ошибка 404! Страница не найдена');
            $this->_seo['keywords'] = __('Ошибка 404! Страница не найдена');
            $this->_seo['description'] = __('Ошибка 404! Страница не найдена');
            $this->_seo['seo_text'] = NULL;
        }

        if ((int) Route::param('page') > 1) {
            $this->_seo['seo_text'] = NULL;
        }
    }

    private function render() {
        $this->_widgets['Head'] = Widgets::get('Head', $this->_seo);
        $this->_widgets['Header'] = Widgets::get('Header', array('config' => $this->_config, '_currency' => $this->_currency));
        $this->_widgets['Footer'] = Widgets::get('Footer', array('counters' => Arr::get($this->_seo, 'counters'), 'config' => $this->_config));
        $this->_widgets['HiddenData'] = Widgets::get('HiddenData');

        if (Config::get('error')) {
//                $this->_content = Widgets::get('404');
            $this->_template = '404';
        }

        if (isset($this->_seo['seo_text']) && trim(strip_tags($this->_seo['seo_text']))) {
            $this->_seo_text = true;
        }

        $this->_breadcrumbs = HTML::breadcrumbs($this->_breadcrumbs);
        $data = array();
        foreach ($this as $key => $value) {
            $data[$key] = $value;
        }
        $data['GLOBAL_MESSAGE'] = System::global_massage();
        echo HTML::compress(View::tpl($data, $this->_template));
    }

    protected function setBreadcrumbs($name, $link = NULL) {
        $this->_breadcrumbs[] = array('name' => $name, 'link' => $link);
    }

    protected function generateParentBreadcrumbs($id, $table, $parentAlias, $pre = '/') {
        $bread = $this->generateParentBreadcrumbsElement($id, $table, $parentAlias, array());
        if ($bread) {
            $bread = array_reverse($bread);
        }
        foreach ($bread as $obj) {
            $this->setBreadcrumbs($obj->name, $pre . $obj->alias);
        }
    }

    protected function generateParentBreadcrumbsElement($id, $table, $parentAlias, $bread) {
        $tableI18n = $table . '_i18n';
        $page = DB::select($table . '.id', $table . '.' . $parentAlias, $table . '.alias', $table . '.status', $tableI18n . '.name')
                ->from($table)
                ->join($tableI18n)->on($table . '.id', '=', $tableI18n . '.row_id')
                ->where($tableI18n . '.language', '=', \I18n::$lang)
                ->where($table . '.id', '=', $id)
                ->find();
        if (is_object($page) AND $page->status) {
            $bread[] = $page;
        }
        if (is_object($page) AND (int) $page->$parentAlias > 0) {
            return $this->generateParentBreadcrumbsElement($page->$parentAlias, $table, $parentAlias, $bread);
        }
        return $bread;
    }

}
