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
    use Wezom\Modules\Catalog\Models\Items AS Model;
    use Wezom\Modules\Catalog\Models\CatalogImages AS Images;
    use Wezom\Modules\Catalog\Models\Brands;
    use Wezom\Modules\Catalog\Models\Specifications;
    use Wezom\Modules\Catalog\Models\SpecificationsValues;
    use Wezom\Modules\Catalog\Models\Models;

    class Items extends \Wezom\Modules\Base {

        public $tpl_folder = 'Catalog/Items';
        public $page;
        public $limit;
        public $offset;
        public $groups = array();

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Товары');
            $this->_seo['title'] = __('Товары');
            $this->setBreadcrumbs(__('Товары'), 'wezom/'.Route::controller().'/index');
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
                    'brands' => Brands::getRows(NULL, 'sort', 'ASC'),
                    'groups' => $this->groups,
                ), $this->tpl_folder.'/Index');
        }

        function editAction () {
            if ($_POST) {
                $iColors = Arr::get($_POST, 'COLORS', array());
                $iSizes = Arr::get($_POST, 'SIZES', array());
                $post = $_POST['FORM'];
                // Set default settings for some fields
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['best_price'] = Arr::get( $_POST, 'best_price', 0 );
                $post['top'] = Arr::get( $_POST, 'top', 0 );
                $post['sale'] = Arr::get( $_POST, 'sale', 0 );
                $post['available'] = Arr::get( $_POST, 'available', 0 );
                $post['price'] = (float) Arr::get( $post, 'price', 0 );
                $post['price_old'] = (float) Arr::get( $post, 'price_old', 0 );
                $post['brand_alias'] = Arr::get($post, 'brand_alias') ?: NULL;
                $post['sort'] = (int) Arr::get($post, 'sort');
                // Check form for rude errors
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'), Route::param('id'));
                    $res = Model::update($post, Route::param('id'));
                    if($res) {
                        Common::factory('catalog_colors')->delete(Route::param('id'), 'catalog_id');
                        foreach($iColors AS $color_alias) {
                            Common::factory('catalog_colors')->insert(array(
                                'catalog_id' => Route::param('id'),
                                'color_alias' => $color_alias,
                            ));
                        }
                        Common::factory('catalog_sizes')->delete(Route::param('id'), 'catalog_id');
                        foreach($iSizes AS $size_alias) {
                            Common::factory('catalog_sizes')->insert(array(
                                'catalog_id' => Route::param('id'),
                                'size_alias' => $size_alias,
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
                $result = Arr::to_object($post);
            } else {
                $result = Model::getRow(Route::param('id'));
                $__res = DB::select('color_alias')->from('catalog_colors')->where('catalog_id', '=', Route::param('id'))->find_all();
                $iColors = array();
                foreach($__res AS $value) {
                    $iColors[] = $value->color_alias;
                }
                $__res = DB::select('size_alias')->from('catalog_sizes')->where('catalog_id', '=', Route::param('id'))->find_all();
                $iSizes = array();
                foreach($__res AS $value) {
                    $iSizes[] = $value->size_alias;
                }
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Редактирование');
            $this->_seo['title'] = __('Редактирование');
            $this->setBreadcrumbs(__('Редактирование'), 'wezom/'.Route::controller().'/edit/'.Route::param('id'));
            $brands = Brands::getRows(NULL, 'sort', 'ASC');

            $rel = DB::select('catalog.*', 'catalog_i18n.name')
                ->from('catalog')
                ->join('catalog_i18n')->on('catalog_i18n.row_id', '=', 'catalog.id')
                ->join('catalog_related')->on('catalog_related.with_id', '=', 'catalog.id')
                ->where('catalog_i18n.language', '=', \I18n::$default_lang)
                ->where('catalog_related.who_id', '=', Route::param('id'))
                ->find_all();

            $colors = Colors::getRows(NULL, 'sort', 'ASC');
            $sizesGroups = SizesGroups::getRows(NULL, 'sort', 'ASC');
            $__res = Sizes::getRows(NULL, 'sort', 'ASC');
            $sizes = array();
            foreach($__res AS $key => $value) {
                $sizes[$value->group][] = $value;
            }
            $this->_content = View::tpl(
                array(
                    'languages' => $this->_languages,
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree', $result['obj']->parent_id),
                    'brands' => $brands,
                    'uploader' => View::tpl(array(), $this->tpl_folder.'/Upload'),
                    'related' => View::tpl(array('tree' => Support::getSelectOptions('Catalog/Items/Select', 'catalog_tree'), 'itemID' => Route::param('id'), 'items' => $rel), $this->tpl_folder.'/Related'),
                    'colors' => $colors,
                    'sizes' => $sizes,
                    'sizesGroups' => $sizesGroups,
                    'iColors' => $iColors,
                    'iSizes' => $iSizes,
                ), $this->tpl_folder.'/Form');
        }

        function addAction () {
            $iColors = Arr::get($_POST, 'COLORS', array());
            $iSizes = Arr::get($_POST, 'SIZES', array());
            if ($_POST) {
                $post = $_POST['FORM'];
                // Set default settings for some fields
                $post['status'] = Arr::get( $_POST, 'status', 0 );
                $post['best_price'] = Arr::get( $_POST, 'best_price', 0 );
                $post['top'] = Arr::get( $_POST, 'top', 0 );
                $post['sale'] = Arr::get( $_POST, 'sale', 0 );
                $post['available'] = Arr::get( $_POST, 'available', 0 );
                $post['price'] = (float) Arr::get( $post, 'price', 0 );
                $post['price_old'] = (float) Arr::get( $post, 'price_old', 0 );
                $post['brand_alias'] = Arr::get($post, 'brand_alias') ?: NULL;
                $post['sort'] = (int) Arr::get($post, 'sort');
                // Check form for rude errors
                if( Model::valid($post) ) {
                    $post['alias'] = Model::getUniqueAlias(Arr::get($post, 'alias'));
                    $res = Model::insert($post);
                    if($res) {
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
                $result = array();
                $parent_id = 0;
            }
            $this->_toolbar = Widgets::get( 'Toolbar_Edit' );
            $this->_seo['h1'] = __('Добавление');
            $this->_seo['title'] = __('Добавление');
            $this->setBreadcrumbs(__('Добавление'), 'wezom/'.Route::controller().'/add');

            $this->_content = View::tpl(
                array(
                    'languages' => $this->_languages,
                    'obj' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'uploader' => NULL,
                    'related' => NULL,
                ), $this->tpl_folder.'/Form');
        }

        function deleteAction() {
            $id = (int) Route::param('id');
            $page = Model::getRow($id);
            if(!$page) {
                Message::GetMessage(0, __('Данные не существуют!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            }
            $images = Images::getRows($id);
            foreach ( $images AS $im ) {
                Images::deleteImage($im->image);
            }
            Model::delete($id);
            Message::GetMessage(1, __('Данные удалены!'));
            HTTP::redirect('wezom/'.Route::controller().'/index');
        }

    }