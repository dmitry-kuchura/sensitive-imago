<?php
    namespace Wezom\Modules\Seo\Models;

    class Templates extends \Core\CommonI18n {

        public static $table = 'seo_templates';
        public static $rulesI18n;

        public function __counstruct() {
            static::$rulesI18n = array(
                'h1' => array(
                    array(
                        'error' => __('H1 не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ),
                ),
                'title' => array(
                    array(
                        'error' => __('Title не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ),
                ),
            );
        }

    }