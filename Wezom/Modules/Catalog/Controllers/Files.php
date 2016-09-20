<?php

namespace Wezom\Modules\Catalog\Controllers;

use Core\Config;
use Core\QB\DB;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Wezom\Modules\Catalog\Models\File as Model;

class Files extends \Wezom\Modules\Base
{

    public $tpl_folder = 'Catalog/Files';
    public $limit;

    function before()
    {
        parent::before();
        $this->_seo['h1'] = __('Редактирование ссылки');
        $this->_seo['title'] = __('Редактирование ссылки');
        $this->setBreadcrumbs(__('Редактирование ссылки'), 'wezom/' . Route::controller() . '/index');
        $this->limit = (int)Arr::get($_GET, 'limit', Config::get('basic.limit_backend')) < 1 ?: Arr::get($_GET, 'limit', Config::get('basic.limit_backend'));
    }

    function editAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно изменили данные!'));
                    HTTP::redirect('wezom/items/edit/' . Route::param('item_id'));
                } else {
                    Message::GetMessage(0, __('Не удалось изменить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = Model::getRow((int)Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit');
        $this->_seo['h1'] = __('Редактирование ссылки');
        $this->_seo['title'] = __('Редактирование ссылки');
        $this->setBreadcrumbs(__('Редактирование ссылки'), 'wezom/' . Route::controller() . '/edit/' . Route::param('id'));

        $this->_content = View::tpl(
            [
                'obj' => $result,
                'tpl_folder' => $this->tpl_folder,
                'languages' => $this->_languages,
                'id' => Route::param('item_id')
            ], $this->tpl_folder . '/Files');
    }

    function addAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            if (Model::valid($post)) {
                $res = Model::insert($post);
                if ($res) {
                    Model::uploadFile($res);
                    Message::GetMessage(1, __('Вы успешно добавили данные!'));
                    HTTP::redirect('wezom/items/edit/' . Route::param('item_id'));
                } else {
                    Message::GetMessage(0, __('Не удалось добавить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = [];
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit');
        $this->_seo['h1'] = __('Добавление спецификации');
        $this->_seo['title'] = __('Добавление спецификации');
        $this->setBreadcrumbs(__('Добавление спецификации'), 'wezom/' . Route::controller() . '/add');
        $this->_content = View::tpl(
            [
                'obj' => $result,
                'tpl_folder' => $this->tpl_folder,
                'languages' => $this->_languages,
                'id' => Route::param('item_id')
            ], $this->tpl_folder . '/Files');
    }

    function deleteAction()
    {
        $id = (int)Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/items/edit/' . Route::param('item_id'));
        }
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/items/edit/' . Route::param('item_id'));
    }

    function deleteApkAction()
    {
        $id = (int)Route::param('id');
        $apk = Model::getRowSimple($id);
        Model::deleteApk($apk->filename, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/items/edit/' . Route::param('item_id'));
    }

}