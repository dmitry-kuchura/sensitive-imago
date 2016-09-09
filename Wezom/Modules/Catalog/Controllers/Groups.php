<?php
    namespace Wezom\Modules\Catalog\Controllers;

    use Core\Files;
    use Core\Support;
    use Core\Route;
    use Core\Widgets;
    use Core\Message;
    use Core\Arr;
    use Core\HTTP;
    use Core\View;

    use Wezom\Modules\Catalog\Models\Groups AS Model;

    class Groups extends \Wezom\Modules\Base {

        public $tpl_folder = 'Catalog/Groups';

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Группы товаров');
            $this->_seo['title'] = __('Группы товаров');
            $this->setBreadcrumbs(__('Группы товаров'), 'wezom/'.Route::controller().'/index');
        }

        function indexAction () {
            $result = Model::getRows(NULL, 'sort', 'ASC');
            $arr = array();
            foreach($result AS $obj) {
                $arr[$obj->parent_id][] = $obj;
            }
            $this->_filter = Widgets::get( 'Filter_Pages', array( 'open' => 1 ) );
            $this->_toolbar = Widgets::get( 'Toolbar_List', array( 'add' => 1 ) );
            $this->_content = View::tpl(
                array(
                    'result' => $arr,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                    'pageName' => $this->_seo['h1'],
                ), $this->tpl_folder.'/Index');
        }

        function editAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get($_POST, 'status', 0);
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'), Route::param('id'));
                    $res = Model::update($post, Route::param('id'));
                    if($res) {
                        Model::uploadImage(Route::param('id'));

                        $filename = Files::uploadImage('catalog-tree-menu', 'menu');
                        if($filename) {
                            Model::update(array('menu' => $filename), Route::param('id'));
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
                $result = Arr::to_object($post);
            } else {
                $result = Model::getRow(Route::param('id'));
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Редактирование');
            $this->_seo['title'] = __('Редактирование');
            $this->setBreadcrumbs(__('Редактирование'), 'wezom/'.Route::controller().'/edit/'.(int) Route::param('id'));
            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Catalog/Groups/Select', 'catalog_tree', $result->parent_id, $result->id),
                    'languages' => $this->_languages,
                ), $this->tpl_folder.'/Form');
        }

        function addAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get($_POST, 'status', 0);
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'));
                    $res = Model::insert($post);
                    if($res) {
                        Model::uploadImage($res);

                        $filename = Files::uploadImage('catalog-tree-menu', 'menu');
                        if($filename) {
                            Model::update(array('menu' => $filename), $res);
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
                $result = Arr::to_object($post);
            } else {
                $result = array();
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Добавление');
            $this->_seo['title'] = __('Добавление');
            $this->setBreadcrumbs(__('Добавление'), 'wezom/'.Route::controller().'/add');
            $this->_content = View::tpl(
                array(
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Catalog/Groups/Select', 'catalog_tree', $result->parent_id, $result->id),
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
            $countChildGroups = Model::countKids($id);
            if ( $countChildGroups ) {
                Message::GetMessage(0, __('Нельзя удалить эту группу, так как у нее есть подгруппы!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            $countChildItems = Model::countItems($id);
            if ( $countChildItems ) {
                Message::GetMessage(0, __('Нельзя удалить эту группу, так как в ней содержатся товары!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            Model::deleteImage($page->image);
            Files::deleteImage('catalog-tree-menu', $page->menu);
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

        function deleteImageMenuAction() {
            $id = (int) Route::param('id');
            $page = Model::getRowSimple($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            Files::deleteImage('catalog-tree-menu', $page->menu);
            Model::update(array('menu' => NULL), $page->id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/edit/'.$id);
        }

    }