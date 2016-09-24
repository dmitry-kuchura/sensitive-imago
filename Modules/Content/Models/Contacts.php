<?php
namespace Modules\Content\Models;

use Core\QB\DB;

class Contacts extends \Core\CommonI18n
{

    public static $table = 'regions';

    public static function getRegions()
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