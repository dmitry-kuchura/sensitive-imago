<?php
    namespace Wezom\Modules\Multimedia\Models;

    use Core\Arr;
    use Core\Message;

    class Simple extends \Core\CommonI18n {

        public static $table = 'slider_simple';
        public static $image = 'slider_simple';
        public static $rules;

        public function __counstruct() {
            static::$rules = array(
                'name' => array(
                    array(
                        'error' => __('Название не может быть пустым!'),
                        'key' => 'not_empty',
                    ),
                ),
            );
        }

    }