<?php

namespace Wezom\Modules\Catalog\Models;

use Core\Files;
use Core\Common;
use Core\QB\DB;

class Advan extends \Core\CommonI18n
{

    public static $table = 'advantage';
    public static $image = 'advantage';
    public static $rules;

    public function __counstruct()
    {
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
