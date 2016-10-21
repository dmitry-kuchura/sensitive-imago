<?php
namespace Wezom\Modules\Content\Models;

class Langs extends \Core\Common
{

    public static $table = 'i18n';
    public static $rulesI18n;
    public static $rules;

    public function __counstruct()
    {
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