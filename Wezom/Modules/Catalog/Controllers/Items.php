<?php
    namespace Wezom\Modules\Catalog\Controllers;

    use Core\Common;
    use Core\Config;
    use Core\HTML;
    use Core\Image\Image;
    use Core\QB\DB;
    use Core\Route;
    use Core\Widgets;
    use Core\Message;
    use Core\Arr;
    use Core\Support;
    use Core\HTTP;
    use Core\View;
    use Core\Pager\Pager;

    use Wezom\Modules\Catalog\Models\Groups;
    use Wezom\Modules\Catalog\Models\File;
    use Wezom\Modules\Catalog\Models\Items AS Model;
    use Wezom\Modules\Catalog\Models\CatalogImages AS Images;

    class Items extends \Wezom\Modules\Base {

        public $tpl_folder = 'Catalog/Items';
        public $page;
        public $limit;
        public $offset;
        public $groups = [];

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Модели приборов');
            $this->_seo['title'] = __('Модели приборов');
            $this->setBreadcrumbs(__('Модели приборов'), 'wezom/'.Route::controller().'/index');
            $this->page = (int) Route::param('page') ? (int) Route::param('page') : 1;
            $this->limit = (int) Arr::get($_GET, 'limit', Config::get('basic.limit_backend')) < 1 ?: Arr::get($_GET, 'limit', Config::get('basic.limit_backend'));
            $this->offset = ($this->page - 1) * $this->limit;
            $result = Groups::getRows(NULL, NULL, NULL, NULL, NULL, false);
            foreach($result AS $key => $value) {
                $this->groups[$value->id] = $value->name;
            }
        }

        function indexAction () {
            $status = NULL;
            if ( isset($_GET['status']) && $_GET['status'] != '' ) { $status = Arr::get($_GET, 'status', 1); }
            $page = (int) Route::param('page') ? (int) Route::param('page') : 1;
            $count = Model::countRows($status);
            $result = Model::getRows($status, 'sort', 'ASC', $this->limit, ($page - 1) * $this->limit);
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
                    'tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree', Arr::get($_GET, 'parent_id')),
                    'groups' => $this->groups,
                ), $this->tpl_folder.'/Index');
        }

        function editAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['sort'] = (int) Arr::get($post, 'sort');
                $post['main'] = (int) Arr::get($post, 'main');
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
                $result = Model::getRow(Route::param('id'));
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Редактирование');
            $this->_seo['title'] = __('Редактирование');
            $this->setBreadcrumbs(__('Редактирование'), 'wezom/'.Route::controller().'/edit/'.Route::param('id'));

            $rel = DB::select('catalog.*', 'catalog_i18n.name')
                ->from('catalog')
                ->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')
                ->join('catalog_related')->on('catalog_related.with_id', '=', 'catalog.id')
                ->where('catalog_i18n.language', '=', \I18n::$default_lang)
                ->where('catalog_related.who_id', '=', Route::param('id'))
                ->find_all();

            $files = File::getFiles(Route::param('id'));

            $this->_content = View::tpl(
                [
                    'count' => count($files),
                    'languages' => $this->_languages,
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'files' => View::tpl(['files' => $files, 'item_id' => Route::param('id')], '/Catalog/Files/FilesList'),
                    'tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree', $result['obj']->parent_id),
                    'uploader' => View::tpl(array(), $this->tpl_folder.'/Upload'),
                    'related' => View::tpl(array('tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree'), 'itemID' => Route::param('id'), 'items' => $rel), $this->tpl_folder.'/Related'),
                ], $this->tpl_folder.'/Form');
        }

        function addAction () {
            if ($_POST) {
                $post = $_POST['FORM'];
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['sort'] = (int) Arr::get($post, 'sort');
                $post['main'] = (int) Arr::get($post, 'main');
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
                $parent_id = $result->parent_id;
            } else {
                $result = [];
                $parent_id = 0;
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Добавление');
            $this->_seo['title'] = __('Добавление');
            $this->setBreadcrumbs(__('Добавление'), 'wezom/'.Route::controller().'/add');
            $this->_content = View::tpl(
                [
                    'languages' => $this->_languages,
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree', $parent_id),
                    'hide' => true,
                ], $this->tpl_folder.'/Form');
        }

        function deleteAction() {
            $id = (int) Route::param('id');
            $page = Model::getRow($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            Model::delete($id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/index');
        }

        function deleteImageAction()
        {
            $id = (int)Route::param('id');
            $page = Model::getRowSimple($id);
            if (!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/' . Route::controller() . '/index');
            }
            Model::deleteImage($page->image, $page->id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/' . Route::controller() . '/edit/' . $id);
        }

    }