<?php
    namespace Wezom\Modules\Catalog\Controllers;

    use Core\Config;
    use Core\Route;
    use Core\Widgets;
    use Core\Message;
    use Core\Arr;
    use Core\HTTP;
    use Core\View;
    use Core\Pager\Pager;

    use Wezom\Modules\Catalog\Models\Brands AS Model;

    class Brands extends \Wezom\Modules\Base {

        public $tpl_folder = 'Catalog/Brands';
        public $limit;
        public $name;

        function before() {
            parent::before();
            $this->name = __('Производители');
            $this->_seo['h1'] = $this->_seo['title'] = $this->name;
            $this->setBreadcrumbs($this->name, 'wezom/'.Route::controller().'/index');
            $this->limit = (int) Arr::get($_GET, 'limit', Config::get('basic.limit_backend')) < 1 ?: Arr::get($_GET, 'limit', Config::get('basic.limit_backend'));
        }

        function indexAction () {
            $status = NULL;
            if ( isset($_GET['status']) && $_GET['status'] != '' ) { $status = Arr::get($_GET, 'status', 1); }
            $result = Model::getRows($status, 'sort', 'ASC');
            $this->_toolbar = Widgets::get( 'Toolbar/List', array( 'add' => 1, 'delete' => 1 ) );
            $this->_content = View::tpl(
                array(
                    'result' => $result,
                    'tablename' => Model::$table,
                    'pageName' => $this->name,
                ), $this->tpl_folder.'/Index');
        }

        function editAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['main_page'] = Arr::get( $_POST, 'main_page', 0 );
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'), Route::param('id'));
                    $res = Model::update($post, Route::param('id'));
                    if($res) {
                        Model::uploadImage(Route::param('id'));
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
                $result = Arr::to_object($post);
            } else {
                $result = Model::getRow((int) Route::param('id'));
            }
            $this->_toolbar = Widgets::get( 'Toolbar/Edit' );
            $this->_seo['h1'] = __('Редактирование');
            $this->_seo['title'] = __('Редактирование');
            $this->setBreadcrumbs(__('Редактирование'), 'wezom/'.Route::controller().'/edit/'.(int) Route::param('id'));
            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'languages' => $this->_languages,
                ), $this->tpl_folder.'/Form');
        }

        function addAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['main_page'] = Arr::get( $_POST, 'main_page', 0 );
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'));
                    $res = Model::insert($post);
                    if($res) {
                        Model::uploadImage($res);
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
                $result = Arr::to_object($post);
            } else {
                $result = array();
            }
            $this->_toolbar = Widgets::get( 'Toolbar/Edit' );
            $this->_seo['h1'] = __('Добавление');
            $this->_seo['title'] = __('Добавление');
            $this->setBreadcrumbs(__('Добавление'), 'wezom/'.Route::controller().'/add');
            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'languages' => $this->_languages,
                ), $this->tpl_folder.'/Form');
        }

        function deleteAction() {
            $id = (int) Route::param('id');
            $page = Model::getRowSimple($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            Model::deleteImage($page->image);
            Model::delete($id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/index');
        }

        function deleteImageAction() {
            $id = (int) Route::param('id');
            $page = Model::getRowSimple($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            Model::deleteImage($page->image, $page->id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/edit/'.$id);
        }

    }