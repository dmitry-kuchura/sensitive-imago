<?php
    namespace Wezom\Modules\Config\Controllers;

    use Core\Route;
    use Core\Widgets;
    use Core\Message;
    use Core\Arr;
    use Core\HTTP;
    use Core\View;

    class Pictures extends \Wezom\Modules\Base {

        public $tpl_folder = 'Config/Pictures';

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Изображения доставки / оплаты');
            $this->_seo['title'] = __('Изображения доставки / оплаты');
            $this->setBreadcrumbs(__('Изображения доставки / оплаты'), 'wezom/'.Route::controller().'/index');
        }

        function indexAction () {
            if ($_POST) {
                foreach (\Core\Config::get('order.delivery-images') as $key => $value) {
                    if (isset($_FILES['delivery'.$key]) && \Core\Upload::image($_FILES['delivery'.$key]) && \Core\Upload::type($_FILES['delivery'.$key], array('png'))) {
                        $arr = explode('/', $value);
                        unset($arr[count($arr) - 1]);
                        \Core\Files::createFolder(HOST.trim(implode('/', $arr), '/'));
                        @move_uploaded_file($_FILES['delivery'.$key]['tmp_name'], HOST.$value);
                    }
                }
                foreach (\Core\Config::get('order.payment-images') as $key => $value) {
                    if (isset($_FILES['payment'.$key]) && \Core\Upload::image($_FILES['payment'.$key]) && \Core\Upload::type($_FILES['payment'.$key], array('png'))) {
                        $arr = explode('/', $value);
                        unset($arr[count($arr) - 1]);
                        \Core\Files::createFolder(HOST.trim(implode('/', $arr), '/'));
                        @move_uploaded_file($_FILES['payment'.$key]['tmp_name'], HOST.$value);
                    }
                }
                \Core\HTTP::redirect($_SERVER['REQUEST_URI']);
            }

            $this->_toolbar = Widgets::get( 'Toolbar_EditSaveOnly' );
            $this->_content = View::tpl(
                array(
                    'tpl_folder' => $this->tpl_folder,
                ), $this->tpl_folder.'/Index');
        }

    }