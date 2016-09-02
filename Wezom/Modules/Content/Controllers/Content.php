<?php

namespace Wezom\Modules\Content\Controllers;

use Core\HTML;
use Core\Route;
use Core\Widgets;
use Core\View;
use Core\Message;
use Core\HTTP;
use Core\Support;
use Core\Arr;
use Wezom\Modules\Content\Models\Content AS Model;

class Content extends \Wezom\Modules\Base {

    public $tpl_folder = 'Content/Pages'; // Tpl folder

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Информационные блоки');
        $this->_seo['title'] = __('Информационные блоки');
        $this->setBreadcrumbs(__('Информационные блоки'), 'wezom/' . Route::controller() . '/index');
    }

    function indexAction() {
        $result = Model::getRows(NULL, 'sort', 'ASC');
        $arr = array();
        foreach ($result AS $obj) {
            $arr[$obj->parent_id][] = $obj;
        }
        $this->_content = View::tpl(
                        array(
                    'result' => $arr,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                        ), $this->tpl_folder . '/Index');
    }

    function editAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Model::uploadImageFirst(Route::param('id'));
                    Model::uploadImageSecond(Route::param('id'));
                    Model::uploadImageThird(Route::param('id'));
                    Model::uploadImageFour(Route::param('id'));
                    Model::uploadSliderFirst(Route::param('id'));
                    Model::uploadSliderSecond(Route::param('id'));
                    Model::uploadSliderThird(Route::param('id'));
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
        } else {
            $result = Model::getRow((int) Route::param('id'));
        }

        $this->_toolbar = Widgets::get('Toolbar/EditSaveOnly');
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs('Редактирование', 'wezom/' . Route::controller() . '/' . Route::action() . '/' . Route::param('id'));

        $this->_content = View::tpl(
                        array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Content/Pages/Select', 'content', $result['obj']->parent_id),
                    'languages' => $this->_languages,
                        ), $this->tpl_folder . '/Form');
    }

    function addAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            if (Model::valid($post)) {
                $res = Model::insert($post);
                if ($res) {
                    Model::uploadImageFirst($res);
                    Model::uploadImageSecond($res);
                    Model::uploadImageThird($res);
                    Model::uploadImageFour($res);
                    Model::uploadSliderFirst($res);
                    Model::uploadSliderSecond($res);
                    Model::uploadSliderThird($res);
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
            $result = Arr::to_object($post);
        } else {
            $result = array();
        }

        $this->_toolbar = Widgets::get('Toolbar/EditSaveOnly');
        $this->_seo['h1'] = __('Добавление');
        $this->_seo['title'] = __('Добавление');
        $this->setBreadcrumbs('Добавление', 'wezom/' . Route::controller() . '/' . Route::action());

        $this->_content = View::tpl(
                        array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Content/Pages/Select', 'content', $result->parent_id),
                    'languages' => $this->_languages,
                        ), $this->tpl_folder . '/Form');
    }

    function deleteAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::update(array('parent_id' => $page->parent_id), $id, 'parent_id');
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/index');
    }

    function deleteImageFirstAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImageFirst($page->image_first, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteImageSecondAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImageSecond($page->image_second, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteImageThirdAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImageThird($page->image_third, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteImageFourAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteImageFour($page->image_four, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteSliderFirstAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteSliderFirst($page->slider_first, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteSlideSecondAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteSliderSecond($page->slider_second, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

    function deleteSliderThirdAction() {
        $id = (int) Route::param('id');
        $page = Model::getRowSimple($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::deleteSliderThird($page->slider_third, $id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
    }

}
