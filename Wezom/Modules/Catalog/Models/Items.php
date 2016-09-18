<?php
    namespace Wezom\Modules\Catalog\Models;

    class Items extends \Core\CommonI18n {

        public static $table = 'catalog';
        public static $image = 'equipment';
        public static $filters;
        public static $rulesI18n;
        public static $rules;

        public function __counstruct() {
            static::$filters = array(
                'name' => array(
                    'table' => 'catalog_i18',
                    'action' => 'LIKE',
                ),
                'artikul' => array(
                    'table' => NULL,
                    'action' => 'LIKE',
                ),
                'parent_id' => array(
                    'table' => NULL,
                    'action' => '=',
                ),
                'new' => array(
                    'table' => NULL,
                    'action' => '=',
                ),
                'top' => array(
                    'table' => NULL,
                    'action' => '=',
                ),
                'sale' => array(
                    'table' => NULL,
                    'action' => '=',
                ),
                'brand' => array(
                    'field' => 'brand_alias',
                    'table' => NULL,
                    'action' => '=',
                ),
            );
            static::$rulesI18n = array(
                'name' => array(
                    array(
                        'error' => __('Название товара не может быть пустым! (:lang)'),
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
                        'error' => __('Алиас должен быть уникальным!'),
                        'key' => 'unique',
                        'value' => 'catalog',
                    ),
                ),
                'price' => array(
                    array(
                        'error' => __('Укажите корректную цену!'),
                        'key' => 'numeric',
                    ),
                ),
                'parent_id' => array(
                    array(
                        'error' => __('Выберите группу из списка!'),
                        'key' => 'pos_numeric',
                    ),
                ),
            );
        }

    }