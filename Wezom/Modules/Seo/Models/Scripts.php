<?php
    namespace Wezom\Modules\Seo\Models;

    class Scripts extends \Core\Common {

        public static $table = 'seo_scripts';
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