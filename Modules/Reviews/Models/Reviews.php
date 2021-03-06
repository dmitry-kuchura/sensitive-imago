<?php

namespace Modules\Reviews\Models;

use Core\QB\DB;

class Reviews extends \Core\Common {

    public static $table = 'reviews';

    public static function getRows($status = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL) {

        $lang = \I18n::$lang;

        $result = DB::select()->from(static::$table);
        $result->where('language', 'LIKE', '%"'.$lang.'"%');
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

    public static function countRows($status = NULL, $filter = true) {
        
        $lang = \I18n::$lang;

        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))->from(static::$table);
        $result->where('language', 'LIKE', '%"'.$lang.'"%');
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($filter) {
            $result = static::setFilter($result);
        }
        return $result->count_all();
    }

}
