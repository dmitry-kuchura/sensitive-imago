<?php
    namespace Wezom\Modules\Config\Models;

    class Emails extends \Core\Common {

        public static $table = 'contacts_emails';
        public static $rules;

        public function __counstruct() {
            static::$rules = array(
                'name' => array(
                    array(
                        'error' => __('Укажите корректный E-Mail!'),
                        'key' => 'email',
                    ),
                ),
            );
        }

    }