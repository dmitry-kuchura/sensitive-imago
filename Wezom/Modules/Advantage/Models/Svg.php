<?php
    namespace Wezom\Modules\Advantage\Models;

    class Svg extends \Core\CommonI18n {

        public static $table = 'svg';
        public static $rulesI18n;
        public static $rules;

        public function __counstruct() {
            static::$rulesI18n = [
                'name' => [
                    [
                        'error' => __('Название не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ],
                ],
            ];
        }

    }