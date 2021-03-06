<?php

namespace Wezom\Modules\Multimedia\Controllers;

use Core\Config;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\Image;
use Core\HTTP;
use Core\View;
use Wezom\Modules\Multimedia\Models\Video AS Model;

class Video extends \Wezom\Modules\Base
{

    public $tpl_folder = 'Multimedia/Video';
    public $page;
    public $limit;
    public $offset;

    function before()
    {
        parent::before();
        $this->_seo['h1'] = 'Видео';
        $this->_seo['title'] = 'Видео';
        $this->setBreadcrumbs('Видео', 'wezom/' . Route::controller() . '/index');
        $this->page = (int)Route::param('page') ? (int)Route::param('page') : 1;
        $this->limit = Config::get('basic.limit_backend');
        $this->offset = ($this->page - 1) * $this->limit;
    }

    function indexAction()
    {
        // Filter
        $name = NULL;
        $group = NULL;
        $status = NULL;
        if (Arr::get($_GET, 'name')) {
            $name = urldecode(Arr::get($_GET, 'name'));
        }
        if (Arr::get($_GET, 'group')) {
            $group = Arr::get($_GET, 'group');
        }
        if (isset($_GET['status']) && $_GET['status'] != '') {
            $status = Arr::get($_GET, 'status', 1);
        }
        $count = Model::countRows();
        $result = Model::getRows($status, 'id', 'DESC', $this->limit, $this->offset, $name, $group);
        $this->_filter = Widgets::get('Filter_Pages');
        $this->_toolbar = Widgets::get('Toolbar_List', array('add' => 1, 'delete' => 1));
        $groups = Model::getTree();
        $this->_content = View::tpl(array(
            'result' => $result,
            'count' => $count,
            'groups' => $groups,
            'tpl_folder' => $this->tpl_folder,
            'tablename' => Model::$table,
        ), $this->tpl_folder . '/Index');
    }

    function editAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Message::GetMessage(1, 'Вы успешно изменили данные!');
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/' . Route::controller() . '/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/' . Route::controller() . '/add');
                    } else {
                        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . Route::param('id'));
                    }
                } else {
                    Message::GetMessage(0, 'Не удалось изменить данные!');
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = Model::getRow(Route::param('id'));
        }
        $tree = Model::getTree();
        $this->_toolbar = Widgets::get('Toolbar_Edit');
        $this->_seo['h1'] = 'Редактирование';
        $this->_seo['title'] = 'Редактирование';
        $this->setBreadcrumbs('Редактирование', 'wezom/' . Route::controller() . '/edit/' . Route::param('id'));
        $this->_content = View::tpl(
            [
                'tree' => $tree,
                'obj' => $result,
                'tpl_folder' => $this->tpl_folder,
                'languages' => $this->_languages,
            ], $this->tpl_folder . '/Form');
    }

    function addAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if (Model::valid($post)) {
                $res = Model::insert($post);
                if ($res) {
                    Message::GetMessage(1, 'Вы успешно добавили данные!');
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/' . Route::controller() . '/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/' . Route::controller() . '/add');
                    } else {
                        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $res);
                    }
                } else {
                    Message::GetMessage(0, 'Не удалось добавить данные!');
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = array();
        }
        $tree = Model::getTree();
        $this->_toolbar = Widgets::get('Toolbar_Edit');
        $this->_seo['h1'] = 'Добавление';
        $this->_seo['title'] = 'Добавление';
        $this->setBreadcrumbs('Добавление', 'wezom/' . Route::controller() . '/add');
        $this->_content = View::tpl(
            [
                'tree' => $tree,
                'obj' => $result,
                'languages' => $this->_languages,
                'tpl_folder' => $this->tpl_folder,
            ], $this->tpl_folder . '/Form');
    }

    function deleteAction()
    {
        $id = (int)Route::param('id');
        $page = Model::getRow($id);
        if (!$page) {
            Message::GetMessage(0, 'Данные не существуют!');
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::delete($id);
        Message::GetMessage(1, 'Данные удалены!');
        HTTP::redirect('wezom/' . Route::controller() . '/index');
    }

    function deleteImageAction()
    {
        $id = (int)Route::param('id');
        $page = Model::getRowSimple($id);;
        if (!$page) {
            Message::GetMessage(0, 'Данные не существуют!');
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImage($page->image);
        Message::GetMessage(1, 'Данные удалены!');
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

}
