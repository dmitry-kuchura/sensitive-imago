<?php
    namespace Wezom\Modules\Seo\Models;

    class Links extends \Core\CommonI18n {

        public static $table = 'seo_links';
        public static $filters;
        public static $rulesI18n;

        public function __counstruct() {
            static::$filters = array(
                'name' => array(
                    'table' => 'seo_links_i18n',
                    'action' => 'LIKE',
                ),
                'link' => array(
                    'table' => NULL,
                    'action' => 'LIKE',
                ),
            );
            static::$rulesI18n = array(
                'name' => array(
                    array(
                        'error' => __('Название не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ),
                ),
            );
        }

    }