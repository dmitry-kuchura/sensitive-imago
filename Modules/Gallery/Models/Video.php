<?php

namespace Modules\Gallery\Models;

use Core\QB\DB;

class Video extends \Core\CommonI18n
{

    public static $table = 'video';
    public static $table_image = 'video_images';

    public static function getVideos($value, $field = 'parent_id', $status = NULL)
    {
        $lang = \I18n::$lang;

        static::$tableI18n = static::$table . '_i18n';
        $row = DB::select(static::$tableI18n . '.*', static::$table . '.*')
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->where(static::$table . '.' . $field, '=', $value);
        if ($status <> NULL) {
            $row->where(static::$table . '.status', '=', $status);
        }
        return $row->where(static::$tableI18n . '.language', '=', $lang)->find_all();
    }

}
