<?php

namespace Modules\Equipment\Models;

use Core\QB\DB;
use Core\HTML;

class Items extends \Core\CommonI18n
{
    public static $table = 'catalog';
    public static $tableImages = 'catalog_images';

    public static function getModels($sort = NULL, $type = NULL, $limit = NULL, $offset = NULL)
    {

        static::$tableI18n = static::$table . '_i18n';
        if ($sort) {
            $arr = explode('.', $sort);
            if (count($arr) < 2) {
                $sort = static::$table . '.' . $sort;
            }
        }
        $result = DB::select(static::$tableI18n . '.*', static::$table . '.*')
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->where(static::$tableI18n . '.language', '=', \I18n::$lang)
            ->where(static::$table . '.status', '=', 1);
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

    public static function getKids($id)
    {
        $table = 'catalog_tree';
        $tableI18n = $table . '_i18n';
        $result = DB::select(
            $tableI18n . '.*',
            $table . '.*'
        )
            ->from($table)
            ->join($tableI18n, 'LEFT')->on($tableI18n . '.row_id', '=', $table . '.id')
            ->where($tableI18n . '.language', '=', \I18n::$lang);
        $result->where($table . '.status', '=', 1);
        $result->where($table . '.parent_id', '=', $id);
        $result->order_by($table . '.sort', 'ASC');
        $result->order_by($table . '.id', 'DESC');
        return $result->find_all();
    }

    public static function getItemImages($id)
    {
        $result = DB::select('image')
            ->from(static::$tableImages)
            ->where(static::$tableImages . '.catalog_id', '=', $id)
            ->where(static::$tableImages . '.main', '!=', 1)
            ->order_by(static::$tableImages . '.sort')
            ->find_all();

        $images = [];
        foreach ($result as $key => $value) {
            if (is_file(HOST . HTML::media('images/equipment/main/' . $value->image))) {
                $images[] = $value;
            }
        }

        return $images;
    }

    public static function getFiles($id = NULL)
    {
        $lang = \I18n::$lang;
        $file = 'files';
        $fileI18n = $file . '_i18n';
        $result = DB::select(
            $fileI18n . '.*', $file . '.*'
        )
            ->from($file)
            ->join($fileI18n, 'LEFT')->on($fileI18n . '.row_id', '=', $file . '.id')
            ->where($fileI18n . '.language', '=', $lang)
            ->where($file . '.item_id', '=', $id);
        $result->order_by($file . '.id', 'DESC');
        return $result->find_all();
    }
}