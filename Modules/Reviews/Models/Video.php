<?php

namespace Modules\Reviews\Models;

use Core\QB\DB;

class Video extends \Core\Common {

    public static $table = 'video_reviews';

    public static function getRows($status = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL) {

        $lang = \I18n::$lang;

        $result = DB::select()->from(static::$table);
        $result->where('language', '=', $lang);
        if ($status !== NULL) {
            $result->where('status', '=', $status);
        }
        if ($sort !== NULL) {
            if ($type !== NULL) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        $result->order_by('id', 'DESC');
        if ($limit !== NULL) {
            $result->limit($limit);
            if ($offset !== NULL) {
                $result->offset($offset);
            }
        }
        return $result->find_all();
    }

}
