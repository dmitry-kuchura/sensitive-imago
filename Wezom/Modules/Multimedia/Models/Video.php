<?php

namespace Wezom\Modules\Multimedia\Models;

use Core\Arr;
use Core\Message;
use Core\QB\DB;

class Video extends \Core\CommonI18n
{

    public static $table = 'video';
    public static $table_ = 'video_images';
    public static $image = 'video';
    public static $rules = array(
        'alias' => array(
            array(
                'error' => 'Алиас не может быть пустым!',
                'key' => 'not_empty',
            ),
        ),
    );

    public static function getVideoRows($parent_id)
    {
        $result = DB::select()
            ->from(static::$table_)
            ->where('video_id', '=', $parent_id)
            ->order_by('id', 'DESC');
        return $result->find_all();
    }

    public static function getTree()
    {
        $lang = \I18n::$lang;

        $table = 'video_tree';
        $tableI18n = $table . '_i18n';

        $result = DB::select(
            $tableI18n . '.*',
            $table . '.*'
        )
            ->from($table)
            ->join($tableI18n, 'LEFT')->on($tableI18n . '.row_id', '=', $table . '.id')
            ->where($tableI18n . '.language', '=', $lang);

        $result->order_by($table . '.id', 'DESC');

        return $result->find_all();
    }

    public static function getRows($status = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL, $name = NULL, $group = NULL, $filter = true)
    {

        $lang = \I18n::$default_lang;

        static::$tableI18n = static::$table . '_i18n';
        if ($sort) {
            $arr = explode('.', $sort);
            if (count($arr) < 2) {
                $sort = static::$table . '.' . $sort;
            }
        }
        $result = DB::select(
            static::$tableI18n . '.*',
            static::$table . '.*',
            ['video_tree_i18n.name', 'group_name']
        )
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->join('video_tree_i18n', 'LEFT')->on('video_tree_i18n.row_id', '=', static::$table . '.parent_id')
            ->where(static::$tableI18n . '.language', '=', $lang)
            ->where('video_tree_i18n.language', '=', $lang);
        if ($filter) {
            $result = static::setFilter($result);
        }
        if ($status <> NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($name <> NULL) {
            $result->where(static::$tableI18n . '.name', 'LIKE', '%' . $name . '%');
        }
        if ($group <> NULL) {
            $result->where(static::$table . '.parent_id', '=', $group);
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

}
