<?php
    namespace Wezom\Modules\Promo\Controllers;

    use Core\Arr;
    use Core\HTTP;
    use Core\Message;
    use Core\QB\DB;
    use Core\Route;
    use Core\View;

    use Core\Widgets;
    use Wezom\Modules\Promo\Models\Prog AS Model;

    class Prog extends \Wezom\Modules\Base {

        public $tpl_folder = 'Promo/Prog';
        public $page;
        public $limit;
        public $offset;

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Накопительная программа');
            $this->_seo['title'] = __('Накопительная программа');
            $this->setBreadcrumbs(__('Накопительная программа'), 'wezom/'.Route::controller().'/index');
        }

        function indexAction () {
            $result = array();
            if ($_POST) {
                DB::delete('prog')->execute();
                foreach(Arr::get($_POST, 'AMOUNT', array()) AS $key => $amt) {
                    Model::insert(array(
                        'amount' => (float) $amt,
                        'percent' => (float) Arr::get(Arr::get($_POST, 'PERCENT', array()), $key, 0),
                    ));
                }
                Message::GetMessage(1, __('Вы успешно изменили данные!'));
                HTTP::redirect('wezom/'.Route::controller().'/index');
            } else {
                $result = Model::getRows(NULL, 'id', 'ASC');
            }
            $this->_toolbar = Widgets::get( 'Toolbar_EditSaveOnly' );
            $this->_content = View::tpl(
                array(
                    'result' => $result,
                    'tpl_folder' => $this->tpl_folder,
                    'tablename' => Model::$table,
                ), $this->tpl_folder.'/Index');
        }

    }