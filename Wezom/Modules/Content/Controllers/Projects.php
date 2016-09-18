<?php

namespace Wezom\Modules\Content\Controllers;

use Core\Config;
use Core\QB\DB;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Core\Pager\Pager;
use Wezom\Modules\Content\Models\Projects AS Model;

class Projects extends \Wezom\Modules\Base {

    public $tpl_folder = 'Content/Prices';
    public $limit;

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Наши проекты');
        $this->_seo['title'] = __('Наши проекты');
        $this->setBreadcrumbs(__('Наши проекты'), 'wezom/' . Route::controller() . '/index');
        $this->limit = (int) Arr::get($_GET, 'limit', Config::get('basic.limit_backend')) < 1 ? : Arr::get($_GET, 'limit', Config::get('basic.limit_backend'));
    }

    function indexAction() {
        $status = NULL;
        $name = NULL;

        if (Arr::get($_GET, 'name')) {
            $name = Arr::get($_GET, 'name');
        }
        if (isset($_GET['status']) && $_GET['status'] != '') {
            $status = Arr::get($_GET, 'status', 1);
        }

        $page = (int) Route::param('page') ? (int) Route::param('page') : 1;
        $count = Model::countRows($status, $name);
        $result = Model::getRows($status, $name, 'id', 'DESC', $this->limit, ($page - 1) * $this->limit);
        $pager = Pager::factory($page, $count, $this->limit)->create();
        $this->_toolbar = Widgets::get('Toolbar/List', array('add' => 1, 'delete' => 1));
        $this->_content = View::tpl(
                        array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                    'count' => $count,
                    'pager' => $pager,
                    'pageName' => $this->_seo['h1'],
                        ), $this->tpl_folder . '/Index');
    }

    function editAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if ($post['category_id'] == '') {
                Message::GetMessage(0, __('Необходимо выбрать категорию!'));
            } else {
                if (Model::valid($post)) {
                    $post['date'] = strtotime($post['date']);
                    $res = Model::update($post, Route::param('id'));
                    if ($res) {
                        Model::uploadImage(Route::param('id'));
                        Message::GetMessage(1, __('Вы успешно изменили данные!'));

                        switch (Arr::get($_POST, 'button', 'save')) {
                            case 'save-close':
                                HTTP::redirect('wezom/' . Route::controller() . '/index');
                                break;
                            case 'save-add':
                                HTTP::redirect('wezom/' . Route::controller() . '/add');
                                break;
                            default :
                                HTTP::redirect('wezom/' . Route::controller() . '/edit/' . Route::param('id'));
                                break;
                        }
                    } else {
                        Message::GetMessage(0, __('Не удалось изменить данные!'));
                    }
                }
                $result = Arr::to_object($post);
            }
        } else {
            $result = Model::getRow((int) Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit');
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/' . Route::controller() . '/edit/' . Route::param('id'));

        $categories = Model::getCategories(1);
        $this->_content = View::tpl(
                        [
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'languages' => $this->_languages,
                    'uploader' => View::tpl([], $this->tpl_folder . '/Upload'),
                    'categories' => $categories
                        ], $this->tpl_folder . '/Form');
    }

    function addAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if ($post['category_id'] == '') {
                Message::GetMessage(0, __('Необходимо выбрать категорию!'));
            } else {
                if (Model::valid($post)) {
                    $res = Model::insert($post);
                    if ($res) {
                        Model::uploadImage($res);
                        Message::GetMessage(1, __('Вы успешно добавили данные!'));

                        switch (Arr::get($_POST, 'button', 'save')) {
                            case 'save-close':
                                HTTP::redirect('wezom/' . Route::controller() . '/index');
                                break;
                            case 'save-add':
                                HTTP::redirect('wezom/' . Route::controller() . '/add');
                                break;
                            default :
                                HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $res);
                                break;
                        }
                    } else {
                        Message::GetMessage(0, __('Не удалось добавить данные!'));
                    }
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = array();
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit');
        $this->_seo['h1'] = __('Добавление');
        $this->_seo['title'] = __('Добавление');
        $this->setBreadcrumbs(__('Добавление'), 'wezom/' . Route::controller() . '/add');
        $categories = Model::getCategories(1);
        $this->_content = View::tpl(
                        [
                    'obj' => $result,
                    'categories' => $categories,
                    'tpl_folder' => $this->tpl_folder,
                    'languages' => $this->_languages,
                        ], $this->tpl_folder . '/Form');
    }

    function deleteAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImage($page->image);
        $images = DB::select('image')->from('news_images')->where('news_id', '=', $page->id)->find_all();
        foreach ($images AS $key => $value) {
            NewsImages::deleteImage($value->image);
        }
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/index');
    }

    function deleteImageAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImage($page->image, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

}
