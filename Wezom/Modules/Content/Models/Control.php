<?php
    namespace Wezom\Modules\Content\Models;

    class Control extends \Core\CommonI18n {

        public static $table = 'control';
        public static $rulesI18n;

        public function __counstruct() {
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