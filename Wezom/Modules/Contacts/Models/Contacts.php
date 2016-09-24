<?php
namespace Wezom\Modules\Contacts\Models;

use Core\QB\DB;

class Contacts extends \Core\Common
{

    public static $table = 'contacts';

    public static function getRows($status = NULL, $date_s = NULL, $date_po = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL)
    {
        $result = DB::select()->from(static::$table);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($date_s) {
            $result->where(static::$table . '.created_at', '>=', $date_s);
        }
        if ($date_po) {
            $result->where(static::$table . '.created_at', '<=', $date_po + 24 * 60 * 60 - 1);
        }
        if ($sort !== NULL) {
            if ($type !== NULL) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        if ($limit !== NULL) {
            $result->limit($limit);
        }
        if ($offset !== NULL) {
            $result->offset($offset);
        }
        return $result->find_all();
    }

    public static function getBranch($id)
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
            ->where($tableI18n . '.language', '=', $lang)
            ->where($table . '.id', '=', $id);

        $result->order_by($table . '.id', 'DESC');

        return $result->find();
    }

    public static function countRows($status = NULL, $date_s = NULL, $date_po = NULL)
    {
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))->from(static::$table);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($date_s) {
            $result->where(static::$table . '.created_at', '>=', $date_s);
        }
        if ($date_po) {
            $result->where(static::$table . '.created_at', '<=', $date_po + 24 * 60 * 60 - 1);
        }
        return $result->count_all();
    }

}