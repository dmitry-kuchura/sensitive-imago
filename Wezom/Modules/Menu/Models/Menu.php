<?php
    namespace Wezom\Modules\Menu\Models;

    class Menu extends \Core\CommonI18n {

        public static $table = 'sitemenu';
        public static $rulesI18n;
        public static $rules;

        public function __counstruct() {
            static::$rulesI18n = array(
                'name' => array(
                    array(
                        'error' => __('Название не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ),
                ),
            );
            static::$rules = array(
                'url' => array(
                    array(
                        'error' => __('Ссылка не может быть пустой!'),
                        'key' => 'not_empty',
                    ),
                    array(
                        'error' => __('Ссылка должна содержать только латинские буквы в нижнем регистре, цифры, "/", "?", "&", "=", "-" или "_"!'),
                        'key' => 'regex',
                        'value' => '/^[a-z0-9\-_\/\?\=\&]*$/',
                    ),
                ),
            );
        }

    }