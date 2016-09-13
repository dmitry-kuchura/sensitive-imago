<?php

namespace Modules\News\Models;

use Core\QB\DB;

class News extends \Core\CommonI18n {

    public static $table = 'news';

    /**
     * @param mixed $value - value
     * @param string $field - field
     * @param null/integer $status - 0 or 1
     * @return object
     */
    public static function getRowSimple($value, $field = 'id', $status = NULL) {
        static::$tableI18n = static::$table . '_i18n';
        $row = DB::select(static::$tableI18n . '.*', static::$table . '.*')
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$table . '.' . $field, '=', $value)
                ->where(static::$table . '.date', '<=', time());
        if ($status <> NULL) {
            $row->where(static::$table . '.status', '=', $status);
        }
        return $row->where(static::$tableI18n . '.language', '=', \I18n::$lang)->find();
    }

    /**
     * @param null/integer $status - 0 or 1
     * @return int
     */
    public static function countRows($status = NULL) {
        static::$tableI18n = static::$table . '_i18n';
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$lang)
                ->where(static::$table . '.date', '<=', time());
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        return $result->count_all();
    }

    public static function getSlider($news_id) {
        return DB::select('image')
                        ->from('news_images')
                        ->where('news_id', '=', $news_id)
                        ->order_by('sort')
                        ->find_all();
    }

    public static function getItems($news_id) {
        $res = DB::select('catalog_id')->from('news_items')->where('news_id', '=', $news_id)->find_all();
        if (!sizeof($res)) {
            return array();
        }
        $ids = array();
        foreach ($res AS $key => $value) {
            $ids[] = $value->catalog_id;
        }

        $offset = 0;
        if (count($ids) > 5) {
            $offset = rand(0, count($ids) - 5);
        }

        $table = 'catalog';
        $tableI18n = $table . '_i18n';
        $result = DB::select(
                        $tableI18n . '.*', $table . '.*'
                )
                ->from($table)
                ->join($tableI18n, 'LEFT')->on($tableI18n . '.row_id', '=', $table . '.id')
                ->where($tableI18n . '.language', '=', \I18n::$lang)
                ->where($table . '.status', '=', 1)
                ->where($table . '.id', 'IN', $ids)
                ->order_by($table . '.sort')
                ->order_by($table . '.id', 'DESC')
                ->limit(5)
                ->offset($offset)
                ->find_all();
        return $result;
    }

}
