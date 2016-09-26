<?php
namespace Modules\Content\Models;

use Core\QB\DB;

class Contacts extends \Core\CommonI18n
{

    public static $table = 'region';

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

        $result->order_by(static::$table . '.sort', 'DESC');

        return $result->find_all();
    }

    public static function getBranches()
    {
        $lang = \I18n::$lang;

        $table = 'regions';
        $tableI18n = $table . '_i18n';

        $result = DB::select(
            $tableI18n . '.*',
            $table . '.*'
        )
            ->from($table)
            ->join($tableI18n, 'LEFT')->on($tableI18n . '.row_id', '=', $table . '.id')
            ->where($tableI18n . '.language', '=', $lang);

        $result->order_by($table . '.sort', 'DESC');

        return $result->find_all();
    }

}