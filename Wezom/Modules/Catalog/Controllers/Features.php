<?php
namespace Wezom\Modules\Catalog\Controllers;

use Core\HTML;
use Core\Route;
use Core\Widgets;
use Core\View;
use Core\Message;
use Core\HTTP;
use Core\Support;
use Core\Arr;

use Wezom\Modules\Catalog\Models\Features AS Model;

class Features extends \Wezom\Modules\Base
{

    public $tpl_folder = 'Catalog/Features';

    function before()
    {
        parent::before();
        $this->_seo['h1'] = __('Возможности оборудования');
        $this->_seo['title'] = __('Возможности оборудования');
        $this->setBreadcrumbs(__('Возможности оборудования'), 'wezom/' . Route::controller() . '/index');
    }

    function indexAction()
    {
        $result = Model::getRows(NULL, 'sort', 'ASC');
        $arr = [];
        foreach ($result AS $obj) {
            $arr[$obj->parent_id][] = $obj;
        }
        $this->_filter = Widgets::get('Filter/Pages', array('open' => 1));
        $this->_toolbar = Widgets::get('Toolbar/List', array('add' => 1, 'delete' => 1));
        $this->_content = View::tpl(
            array(
                'result' => $arr,
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
                $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'), Route::param('id'));
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Model::uploadImage(Route::param('id'));
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
            $result = Model::getRow((int)Route::param('id'));
        }

        $this->_toolbar = Widgets::get('Toolbar/Edit');
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

    function addAction()
    {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            if (Model::valid($post)) {
                $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'));
                $res = Model::insert($post);
                if ($res) {
                    Model::uploadImage($res);
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
        $this->setBreadcrumbs('Добавление', 'wezom/' . Route::controller() . '/' . Route::action());

        $this->_content = View::tpl(
            array(
                'obj' => $result,
                'tpl_folder' => $this->tpl_folder,
                'tree' => Support::getSelectOptions('Content/Pages/Select', 'content', $result->parent_id),
                'languages' => $this->_languages,
            ), $this->tpl_folder . '/Form');
    }

    function deleteAction()
    {
        $id = (int)Route::param('id');
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
}