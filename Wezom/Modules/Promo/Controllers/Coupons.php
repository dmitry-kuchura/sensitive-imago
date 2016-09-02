<?php
    namespace Wezom\Modules\Promo\Controllers;

    use Core\Common;
    use Core\Config;
    use Core\Pager\Pager;
    use Core\QB\DB;
    use Core\Route;
    use Core\Widgets;
    use Core\Message;
    use Core\Arr;
    use Core\HTTP;
    use Core\View;

    use Wezom\Modules\Catalog\Models\Groups;
    use Wezom\Modules\Promo\Models\Coupons AS Model;

    class Coupons extends \Wezom\Modules\Base {

        public $tpl_folder = 'Promo/Coupons';
        public $page;
        public $limit;
        public $offset;

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Персональные купоны на скидку');
            $this->_seo['title'] = __('Персональные купоны на скидку');
            $this->setBreadcrumbs(__('Персональные купоны на скидку'), 'wezom/'.Route::controller().'/index');
            $this->page = (int) Route::param('page') ? (int) Route::param('page') : 1;
            $this->limit = (int) Arr::get($_GET, 'limit', Config::get('basic.limit_backend')) < 1 ?: Arr::get($_GET, 'limit', Config::get('basic.limit_backend'));
            $this->offset = ($this->page - 1) * $this->limit;
        }

        function indexAction () {
            $status = NULL;
            if ( isset($_GET['status']) && $_GET['status'] != '' ) { $status = Arr::get($_GET, 'status', 1); }
            $page = (int) Route::param('page') ? (int) Route::param('page') : 1;
            $count = Model::countRows($status);
            $result = Model::getRows($status, 'id', 'DESC', $this->limit, ($page - 1) * $this->limit);
            $pager = Pager::factory( $page, $count, $this->limit )->create();
            $this->_toolbar = Widgets::get( 'Toolbar_List', array( 'add' => 1, 'delete' => 1 ) );
            $this->_content = View::tpl(
                array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                    'count' => $count,
                    'pager' => $pager,
                    'pageName' => $this->_seo['h1'],
                ), $this->tpl_folder.'/Index');
        }

        function editAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get($_POST, 'status', 0);
                if( Model::valid($post) ) {
                    $post['date_from'] = strtotime(Arr::get($post, 'date_from'));
                    $post['date_to'] = strtotime(Arr::get($post, 'date_to'));
                    if(!Arr::get($post, 'max_uses')) {
                        $post['max_uses'] = NULL;
                    }
                    $res = Model::update($post, Route::param('id'));
                    if($res) {
                        DB::delete('coupons_groups')->where('coupon_id', '=', Route::param('id'))->execute();
                        foreach (Arr::get($_POST, 'GROUPS', array()) as $gr) {
                            Common::factory('coupons_groups')->insert(array(
                                'group_id' => $gr,
                                'coupon_id' => Route::param('id'),
                            ));
                        }
                        Message::GetMessage(1, __('Вы успешно изменили данные!'));
                        if(Arr::get($_POST, 'button', 'save') == 'save-close') {
                            HTTP::redirect('wezom/'.Route::controller().'/index');
                        } else if(Arr::get($_POST, 'button', 'save') == 'save-add') {
                            HTTP::redirect('wezom/'.Route::controller().'/add');
                        } else {
                            HTTP::redirect('wezom/' . Route::controller() . '/edit/' . Route::param('id'));
                        }
                    } else {
                        Message::GetMessage(0, __('Не удалось изменить данные!'));
                    }
                }
                $post['date_from'] = strtotime(Arr::get($post, 'date_from'));
                $post['date_to'] = strtotime(Arr::get($post, 'date_to'));
                $result = Arr::to_object($post);
            } else {
                $result = Model::getRow(Route::param('id'));
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Редактирование');
            $this->_seo['title'] = __('Редактирование');
            $this->setBreadcrumbs(__('Редактирование'), 'wezom/'.Route::controller().'/edit/'.(int) Route::param('id'));

            $promoGroups = array();
            $res = DB::select('group_id')->from('coupons_groups')->where('coupon_id', '=', Route::param('id'))->find_all();
            foreach ($res as $obj) {
                $promoGroups[] = $obj->group_id;
            }

            $groups = array();
            $res =  Groups::getRows(NULL, 'sort', 'ASC');
            foreach ($res as $r) {
                $groups[$r->parent_id][] = $r;
            }

            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'groups' => $groups,
                    'thisGroups' => $_POST ? Arr::get($_POST, 'GROUPS', array()) : $promoGroups,
                    'groupsObject' => $res,
                    'user' => Common::factory('users')->getRow($result->user_id),
                ), $this->tpl_folder.'/Form');
        }

        function addAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get($_POST, 'status', 0);
                if( Model::valid($post) ) {
                    $post['date_from'] = strtotime(Arr::get($post, 'date_from'));
                    $post['date_to'] = strtotime(Arr::get($post, 'date_to'));
                    if(!Arr::get($post, 'max_uses')) {
                        $post['max_uses'] = NULL;
                    }
                    $res = Model::insert($post);
                    if($res) {
                        foreach (Arr::get($_POST, 'GROUPS', array()) as $gr) {
                            Common::factory('coupons_groups')->insert(array(
                                'group_id' => $gr,
                                'coupon_id' => $res,
                            ));
                        }
                        Message::GetMessage(1, __('Вы успешно добавили данные!'));
                        if(Arr::get($_POST, 'button', 'save') == 'save-close') {
                            HTTP::redirect('wezom/'.Route::controller().'/index');
                        } else if(Arr::get($_POST, 'button', 'save') == 'save-add') {
                            HTTP::redirect('wezom/'.Route::controller().'/add');
                        } else {
                            HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $res);
                        }
                    } else {
                        Message::GetMessage(0, __('Не удалось добавить данные!'));
                    }
                }
                $post['date_from'] = strtotime(Arr::get($post, 'date_from'));
                $post['date_to'] = strtotime(Arr::get($post, 'date_to'));
                $result = Arr::to_object($post);
            } else {
                $result = array();
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Добавление');
            $this->_seo['title'] = __('Добавление');
            $this->setBreadcrumbs(__('Добавление'), 'wezom/'.Route::controller().'/add');

            $groups = array();
            $res =  Groups::getRows(NULL, 'sort', 'ASC');
            foreach ($res as $r) {
                $groups[$r->parent_id][] = $r;
            }

            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'groups' => $groups,
                    'thisGroups' => Arr::get($_POST, 'GROUPS', array()),
                    'groupsObject' => $res,
                ), $this->tpl_folder.'/Add');
        }

        function deleteAction() {
            $id = (int) Route::param('id');
            $page = Model::getRow($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
//            Model::update(array('deleted' => 1), $id);
            Model::delete($id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/index');
        }

    }