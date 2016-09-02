<?php
    namespace Wezom\Modules\Translates\Controllers;

    use Core\Config;
    use Core\HTML;
    use Core\Route;
    use Core\Image;
    use Core\View;

    class Translates extends \Wezom\Modules\Base {

        public $tpl_folder = 'Translates';

        function before() {
            parent::before();
            $this->_seo['h1'] = __('Переводы');
            $this->_seo['title'] = __('Переводы');
            $this->setBreadcrumbs(__('Переводы'), 'backend/'.Route::controller().'/index');
        }

        function indexAction () {
            $result = array();
            $key = '';
            foreach( $this->_languages AS $key => $lang ) {
                $filename = HOST.'/Plugins/I18n/Translates/'.$lang['alias'].'/'.Route::param('filename').'.php';
                if(is_file($filename)) {
                    $result[$key] = include $filename;
                }
            }
            if(!$result) {
                return Config::error();
            }
            $this->_content = View::tpl(
                array(
                    'result' => $result,
                    'pageName' => __('Переводы'),
                    'count' => count($result[$key]),
                    'languages' => $this->_languages,
                ), $this->tpl_folder.'/Index');
        }

    }