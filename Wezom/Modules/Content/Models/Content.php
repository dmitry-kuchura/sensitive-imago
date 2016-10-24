<?php

namespace Wezom\Modules\Content\Models;

class Content extends \Core\CommonI18n {

    public static $table = 'content';
    public static $image = 'content';
    public static $image_slider = 'slider_about';
    public static $rules;

    public function __counstruct() {
        static::$rules = array(
            'en/name' => array(
                array(
                    'error' => __('Название страницы на английском не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
            'ru/name' => array(
                array(
                    'error' => __('Название страницы на русском не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

}
