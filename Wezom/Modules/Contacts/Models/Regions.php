<?php
namespace Wezom\Modules\Contacts\Models;

use Core\QB\DB;

class Regions extends \Core\CommonI18n
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
        static::$rules = array(
            'url' => array(
                array(
                    'error' => __('Ссылка не может быть пустой!'),
                    'key' => 'not_empty',
                ),
                array(
                    'error' => __('Ссылка должна содержать только латинские буквы в нижнем регистре, цифры, "/", "?", "&", "=", "-" или "_"!'),
                    'key' => 'regex',
                    'value' => '/^[a-z0-9\-_\/\?\=\&]*$/',
                ),
            ),
        );
    }

    public static function getRegion()
    {
        $lang = \I18n::$lang;

        static::$tableI18n = static::$table . '_i18n';

        $result = DB::select(
            static::$tableI18n . '.*',
            static::$table . '.*'
        )
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->where(static::$tableI18n . '.language', '=', $lang);

        $result->order_by(static::$table . '.id', 'DESC');

        return $result->find_all();
    }

}