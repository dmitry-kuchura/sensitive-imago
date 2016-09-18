<?php
    namespace Wezom\Modules\Catalog\Models;

    class Cert extends \Core\CommonI18n {

        public static $table = 'certificates';
        public static $image = 'cert';
        public static $filters;
        public static $rulesI18n;
        public static $rules;

        public function __counstruct() {
            static::$filters = array(
                'name' => array(
                    'table' => 'certificates_i18n',
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
            static::$rules = array(
                'alias' => array(
                    array(
                        'error' => __('Алиас не может быть пустым!'),
                        'key' => 'not_empty',
                    ),
                    array(
                        'error' => __('Алиас должен содержать только латинские буквы в нижнем регистре, цифры, "-" или "_"!'),
                        'key' => 'regex',
                        'value' => '/^[a-z0-9\-_]*$/',
                    ),
                    array(
                        'error' => __('Алиас должен быть уникален!'),
                        'key' => 'unique',
                        'value' => 'certificates',
                    ),
                ),
            );
        }
    }