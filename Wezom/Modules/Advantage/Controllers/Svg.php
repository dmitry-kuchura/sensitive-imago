<?php

namespace Wezom\Modules\Advantage\Controllers;

use Core\HTML;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Wezom\Modules\Advantage\Models\Svg AS Model;

class Svg extends \Wezom\Modules\Base
{

    public $tpl_folder = 'Svg';

    function before()
    {
        parent::before();
        $this->_seo['h1'] = __('Наборы иконок');
        $this->_seo['title'] = __('Наборы иконок');
        $this->setBreadcrumbs(__('Наборы иконок'), 'wezom/' . Route::controller() . '/index');
    }

    function indexAction()
    {
        $result = Model::getRows(NULL, 'sort', 'ASC');
        $this->_filter = Widgets::get('Filter_Pages');
        $this->_toolbar = Widgets::get('Toolbar_List', array('add' => 1, 'delete' => 1));

        $this->_content = View::tpl(array('result' => $result, 'tpl_folder' => $this->tpl_folder, 'tablename' => Model::$table,), $this->tpl_folder . '/Index');
    }

    function editAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно изменили данные!'));
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/' . Route::controller() . '/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/' . Route::controller() . '/add');
                    } else {
                        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . Route::param('id'));
                    }
                } else {
                    Message::GetMessage(0, __('Не удалось изменить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = Model::getRow(Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar_Edit');
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/' . Route::controller() . '/edit/' . (int)Route::param('id'));
        $this->_content = View::tpl(['obj' => $result, 'tpl_folder' => $this->tpl_folder, 'languages' => $this->_languages], $this->tpl_folder . '/Form');
    }

    function addAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if (Model::valid($post)) {
                $res = Model::insert($post);
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно добавили данные!'));
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/' . Route::controller() . '/index');
                    } else if (Arr::get($_POST, 'button', 'save') == 'save-add') {
                        HTTP::redirect('wezom/' . Route::controller() . '/add');
                    } else {
                        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $res);
                    }
                } else {
                    Message::GetMessage(0, __('Не удалось добавить данные!'));
                }
            }
            $result = Arr::to_object($post);
        } else {
            $result = [];
        }
        $this->_toolbar = Widgets::get('Toolbar/Edit');
        $this->_seo['h1'] = __('Добавление');
        $this->_seo['title'] = __('Добавление');
        $this->setBreadcrumbs(__('Добавление'), 'wezom/' . Route::controller() . '/add');
        $this->_content = View::tpl(['obj' => $result, 'tpl_folder' => $this->tpl_folder, 'languages' => $this->_languages,], $this->tpl_folder . '/Form');
    }

    function deleteAction()
    {
        $id = (int)Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/index');
    }

}
