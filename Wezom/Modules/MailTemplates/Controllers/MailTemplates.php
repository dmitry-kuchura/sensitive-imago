<?php

namespace Wezom\Modules\MailTemplates\Controllers;

use Core\CommonI18n;
use Core\HTML;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;

class MailTemplates extends \Wezom\Modules\Base {

    public $tpl_folder = 'MailTemplates';
    public $model;

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Шаблоны писем');
        $this->_seo['title'] = __('Шаблоны писем');
        $this->setBreadcrumbs(__('Шаблоны писем'), 'wezom/' . Route::controller() . '/index');
        $this->model = CommonI18n::factory('mail_templates');
    }

    function indexAction() {
        $result = $this->model->getRows(NULL, 'sort', 'ASC');
        $this->_filter = Widgets::get('Filter_Pages');
        $this->_toolbar = Widgets::get('Toolbar_List');
        $this->_content = View::tpl(
                        array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => $this->model->table(),
                        ), $this->tpl_folder . '/Index');
    }

    function editAction() {
        if ($_POST) {
            $post = $_POST['FORM'];
            $post['status'] = Arr::get($_POST, 'status', 0);
            $res = $this->model->update($post, Route::param('id'));
            if ($res) {
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
            $result = Arr::to_object($post);
        } else {
            $result = $this->model->getRow(Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar_Edit', array('noAdd' => true));
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/' . Route::controller() . '/edit/' . (int) Route::param('id'));
        $this->_content = View::tpl(
                        array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'languages' => $this->_languages,
                        ), $this->tpl_folder . '/Form');
    }

}
