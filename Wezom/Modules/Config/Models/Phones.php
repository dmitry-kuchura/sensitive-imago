<?php
    namespace Wezom\Modules\Config\Models;

    class Phones extends \Core\Common {

        public static $table = 'contacts_phones';
        public static $rules;

        public function __counstruct() {
            static::$rules = array(
                'name' => array(
                    array(
                        'error' => __('Укажите номер телефона!'),
                        'key' => 'not_empty',
                    ),
                ),
            );
        }

    }