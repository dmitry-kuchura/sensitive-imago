<?php

namespace Wezom\Modules\Content\Models;

use Core\QB\DB;

class Category extends \Core\CommonI18n {

    public static $table = 'category';
    public static $filters;
    public static $rulesI18n;
    public static $rules;

    public function __counstruct() {
        static::$filters = array(
            'name' => array(
                'table' => 'сategory_i18n',
                'action' => 'LIKE',
            ),
        );
        static::$rulesI18n = array(
            'name' => array(
                array(
                    'error' => __('Название не может быть пустым! (:lang)'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

    public static function getRows($status = NULL, $date_s = NULL, $date_po = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL, $filter = true) {
        if (!static::$tableI18n) {
            static::$tableI18n = static::$table . '_i18n';
        }
        $result = DB::select(
                        static::$tableI18n . '.*', static::$table . '.*'
                )
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$default_lang);
        if ($date_s) {
            $result->where(static::$table . '.date', '>=', $date_s);
        }
        if ($date_po) {
            $result->where(static::$table . '.date', '<=', $date_po + 24 * 60 * 60 - 1);
        }
        if ($filter) {
            $result = static::setFilter($result);
        }
        if ($status <> NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        $result->order_by(static::$table . '.id', 'DESC');
        if ($sort <> NULL) {
            if ($type <> NULL) {
                $result->order_by(static::$table . '.' . $sort, $type);
            } else {
                $result->order_by(static::$table . '.' . $sort);
            }
        }
        if ($limit <> NULL) {
            $result->limit($limit);
        }
        if ($offset <> NULL) {
            $result->offset($offset);
        }
        return $result->find_all();
    }

    public static function countRows($status = NULL, $date_s = NULL, $date_po = NULL, $filter = true) {
        if (!static::$tableI18n) {
            static::$tableI18n = static::$table . '_i18n';
        }
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$default_lang);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($date_s) {
            $result->where(static::$table . '.date', '>=', $date_s);
        }
        if ($date_po) {
            $result->where(static::$table . '.date', '<=', $date_po + 24 * 60 * 60 - 1);
        }

        if ($filter) {
            $result = static::setFilter($result);
        }

        return $result->count_all();
    }

}
