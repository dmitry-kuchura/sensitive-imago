<?php

namespace Modules\Partners\Models;

use Core\QB\DB;

class Partners extends \Core\CommonI18n {

    public static $table = 'partners';
    public static $table_image = 'partners_images';

    /**
     * @param mixed $value - value
     * @param string $field - field
     * @param null/integer $status - 0 or 1
     * @return object
     */
    public static function getRowSimple($value, $field = 'id', $status = NULL) {

        $row = DB::select(static::$table . '.*')
                ->from(static::$table)
                ->where(static::$table . '.' . $field, '=', $value);
        if ($status <> NULL) {
            $row->where(static::$table . '.status', '=', $status);
        }
        return $row->find();
    }

    /**
     * @param null/integer $status - 0 or 1
     * @param null/string $sort
     * @param null/string $type - ASC or DESC. No $sort - no $type
     * @param null/integer $limit
     * @param null/integer $offset - no $limit - no $offset
     * @return object
     */
    public static function getRows($status = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL) {
        static::$tableI18n = static::$table . '_i18n';
        $result = DB::select(static::$tableI18n . '.*', static::$table . '.*')
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$lang);
        if ($status <> NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($sort <> NULL) {
            if ($type <> NULL) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        $result->order_by(static::$table . '.id', 'DESC');
        if ($limit <> NULL) {
            $result->limit($limit);
            if ($offset <> NULL) {
                $result->offset($offset);
            }
        }
        return $result->find_all();
    }

    /**
     * @param null/integer $status - 0 or 1
     * @return int
     */
    public static function countRows($status = NULL, $type = NULL) {
        static::$tableI18n = static::$table . '_i18n';
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$lang);

        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($type !== NULL) {
            $result->where(static::$table . '.status', '=', $type);
        }
        return $result->count_all();
    }

    public static function countImages($gallery_id = NULL, $type = NULL) {
        $result = DB::select(array(DB::expr('COUNT(' . static::$table_image . '.id)'), 'count'))
                ->from(static::$table_image)
                ->where('gallery_id', '=', $gallery_id);

        return $result->count_all();
    }

    public static function getGallery($value = NULL, $field = NULL, $status = NULL) {
        static::$tableI18n = static::$table . '_i18n';
        $result = DB::select(static::$tableI18n . '.*', static::$table . '.*')
                ->from(static::$table)
                ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
                ->where(static::$tableI18n . '.language', '=', \I18n::$lang)
                ->where($field, '=', $value);
        if ($status <> NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }

        return $result->find();
    }

    public static function getImage($gallery_id = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL) {
        $result = DB::select()
                ->from(static::$table_image)
                ->where('gallery_id', '=', $gallery_id);

        if ($sort <> NULL) {
            if ($type <> NULL) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        $result->order_by(static::$table_image . '.id', 'DESC');
        if ($limit <> NULL) {
            $result->limit($limit);
            if ($offset <> NULL) {
                $result->offset($offset);
            }
        }
        return $result->find_all();
    }

}
