<?php

namespace Wezom\Modules\Content\Controllers;

use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Wezom\Modules\Content\Models\Control AS Model;

class Control extends \Wezom\Modules\Base {

    public $tpl_folder = 'Content/Control';

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Системные страницы');
        $this->_seo['title'] = __('Системные страницы');
        $this->setBreadcrumbs(__('Системные страницы'), 'wezom/' . Route::controller() . '/index');
    }

    function indexAction() {
        $result = Model::getRows(1, 'sort', 'ASC');
        $this->_content = View::tpl(
                        array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                        ), $this->tpl_folder . '/Index');
    }

    function editAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            if (isset($_POST['longitude']) || isset($_POST['latitude']) || isset($_POST['text'])) {
                $post['other'] = json_encode(array(
                    'longitude' => Arr::get($_POST, 'longitude'),
                    'latitude' => Arr::get($_POST, 'latitude'),
                    'text' => Arr::get($_POST, 'text'),
                ));
            }
            if (Model::valid($post)) {
                $res = Model::update($post, Route::param('id'));
                if ($res) {
                    Message::GetMessage(1, __('Вы успешно изменили данные!'));
                    if (Arr::get($_POST, 'button', 'save') == 'save-close') {
                        HTTP::redirect('wezom/' . Route::controller() . '/index');
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
        $this->_toolbar = Widgets::get('Toolbar/EditSaveOnly');
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/' . Route::controller() . '/index');
        $this->_content = View::tpl(
                        array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'languages' => $this->_languages,
                        ), $this->tpl_folder . '/Form');
    }

}
