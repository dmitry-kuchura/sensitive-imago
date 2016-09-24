<?php
namespace Wezom\Modules\Contacts\Models;

class Region extends \Core\CommonI18n
{

    public static $table = 'region';
    public static $rulesI18n;
    public static $rules;

    public function __counstruct()
    {
        static::$rulesI18n = array(
            'name' => array(
                array(
                    'error' => __('Название не может быть пустым! (:lang)'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

}