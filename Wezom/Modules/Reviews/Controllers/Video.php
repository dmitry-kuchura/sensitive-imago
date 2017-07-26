<?php

namespace Wezom\Modules\Reviews\Controllers;

use Core\Config;
use Core\Pager\Pager;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\HTML;
use Core\View;
use Wezom\Modules\Reviews\Models\Video AS Model;

class Video extends \Wezom\Modules\Base {

    public $tpl_folder = 'Reviews/Video';
    public $page;
    public $limit;
    public $offset;

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Отзывы пользователей');
        $this->_seo['title'] = __('Отзывы пользователей');
        $this->setBreadcrumbs(__('Отзывы пользователей'), 'wezom/video_review/index');
        $this->page = (int) Route::param('page') ? (int) Route::param('page') : 1;
        $this->limit = Arr::get($_GET, 'limit') > 0 ? (int) $_GET['limit'] : Config::get('basic.limit_backend');
        $this->offset = ($this->page - 1) * $this->limit;
    }

    function indexAction() {
        $status = NULL;
        if (isset($_GET['status']) && $_GET['status'] != '') {
            $status = Arr::get($_GET, 'status', 1);
        }
        $name = NULL;
        if (isset($_GET['name']) && $_GET['name'] != '') {
            $name = urldecode(Arr::get($_GET, 'name', 1));
        }
        $count = Model::countRows($status, $name);
        $result = Model::getRows($status, $name, 'id', 'DESC', $this->limit, $this->offset);
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        $this->_toolbar = Widgets::get('Toolbar_List', ['delete' => 1, 'addLink' => HTML::link('/wezom/video_review/add')]);
        $this->_content = View::tpl(
                        [
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                    'count' => $count,
                    'pager' => $pager,
                    'pageName' => $this->_seo['h1'],
                        ], $this->tpl_folder . '/Index');
    }

    function editAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            $post['main'] = Arr::get($_POST, 'main', 0);
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно изменили данные!'));
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/video_review/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/video_review/add');
                    } else {
                        HTTP::redirect('wezom/video_review/edit/' . Route::param('id'));
                    }
                } else {
                    Message::GetMessage(0, __('Не удалось изменить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = Model::getRow((int) Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit', ['list_link' => HTML::link('/wezom/video_review/index')]);
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/video_review/edit/' . Route::param('id'));
        $this->_content = View::tpl(
                        [
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                        ], $this->tpl_folder . '/Form');
    }

    function addAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            $post['main'] = Arr::get($_POST, 'main', 0);
            if (Model::valid($post)) {
                $res = Model::insert($post);
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно добавили данные!'));
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/video_review/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/video_review/add');
                    } else {
                        HTTP::redirect('wezom/video_review/edit/' . $res);
                    }
                } else {
                    Message::GetMessage(0, __('Не удалось добавить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = [];
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit', ['list_link' => HTML::link('/wezom/video_review/index')]);
        $this->_seo['h1'] = __('Добавление');
        $this->_seo['title'] = __('Добавление');
        $this->setBreadcrumbs(__('Добавление'), 'wezom/video_review/add');
        $this->_content = View::tpl(
                        [
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                        ], $this->tpl_folder . '/Form');
    }

    function deleteAction() {
        $id = (int) Route::param('id');
        $page = Model::getRow($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/video_review/index');
        }
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/video_review/index');
    }

}
