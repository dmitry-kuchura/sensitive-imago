<?php

namespace Wezom\Modules\Contacts\Controllers;

use Core\Config;
use Core\Route;
use Core\Widgets;
use Core\Message;
use Core\Arr;
use Core\HTTP;
use Core\View;
use Core\Pager\Pager;
use Core\QB\DB;
use Wezom\Modules\Contacts\Models\Feedback AS Model;

class Feedback extends \Wezom\Modules\Base {

    public $tpl_folder = 'Contacts/Projects';
    public $page;
    public $limit;
    public $offset;

    function before() {
        parent::before();
        $this->_seo['h1'] = __('Заказы подробного отчета');
        $this->_seo['title'] = __('Заказы подробного отчета');
        $this->setBreadcrumbs(__('Заказы подробного отчета'), 'wezom/' . Route::controller() . '/index');
        $this->page = (int) Route::param('page') ? (int) Route::param('page') : 1;
        $this->limit = Config::get('basic.limit_backend');
        $this->offset = ($this->page - 1) * $this->limit;
    }

    function indexAction() {
        $date_s = NULL;
        $date_po = NULL;
        $status = NULL;
        if (Arr::get($_GET, 'date_s')) {
            $date_s = strtotime(Arr::get($_GET, 'date_s'));
        }
        if (Arr::get($_GET, 'date_po')) {
            $date_po = strtotime(Arr::get($_GET, 'date_po'));
        }
        if (isset($_GET['status'])) {
            $status = Arr::get($_GET, 'status', 1);
        }
        $count = Model::countRows($status, $date_s, $date_po);
        $result = Model::getRows($status, $date_s, $date_po, 'created_at', 'DESC', $this->limit, $this->offset);
        $pager = Pager::factory($this->page, $count, $this->limit)->create();
        $this->_toolbar = Widgets::get('Toolbar_List', array('delete' => 1));
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
            $res = Model::update($post, Route::param('id'));
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
            $result = Model::getRow(Route::param('id'));
        }
        $this->_toolbar = Widgets::get('Toolbar_Edit', array('noAdd' => true));
        $this->_seo['h1'] = __('Редактирование');
        $this->_seo['title'] = __('Редактирование');
        $this->setBreadcrumbs(__('Редактирование'), 'wezom/' . Route::controller() . '/edit/' . (int) Route::param('id'));
        $item = DB::select()->from('projects_i18n')->where('row_id', '=', $result->project)->and_where('language', '=', 'ru')->find();
        $this->_content = View::tpl(
                        [
                    'obj' => $result,
                    'item' => $item,
                    'tpl_folder' => $this->tpl_folder,
                        ], $this->tpl_folder . '/Form');
    }

    function deleteAction() {
        $id = (int) Route::param('id');
        $page = Model::getRow($id);
        if (!$page) {
            Message::GetMessage(0, __('Данные не существуют!'));
            HTTP::redirect('wezom/' . Route::controller() . '/index');
        }
        Model::delete($id);
        Message::GetMessage(1, __('Данные удалены!'));
        HTTP::redirect('wezom/' . Route::controller() . '/index');
    }

}
