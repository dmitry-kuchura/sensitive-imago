<?php

namespace Modules\Equipment\Models;

use Core\QB\DB;

class Items extends \Core\CommonI18n
{
    public static $table = 'catalog';

    public static function getModels($sort = NULL, $type = NULL, $limit = NULL, $offset = NULL) {

        static::$tableI18n = static::$table.'_i18n';
        if($sort) {
            $arr = explode('.', $sort);
            if(count($arr) < 2) {
                $sort = static::$table.'.'.$sort;
            }
        }
        $result = DB::select(
            static::$tableI18n.'.*',
            static::$table.'.*'
        )
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n.'.row_id', '=', static::$table.'.id')
            ->where(static::$tableI18n.'.language', '=', \I18n::$lang)
            ->where(static::$table.'.status', '=', 1);
        if( $sort <> NULL ) {
            if( $type <> NULL ) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        $result->order_by(static::$table.'.id', 'DESC');
        if( $limit <> NULL ) {
            $result->limit($limit);
            if( $offset <> NULL ) {
                $result->offset($offset);
            }
        }
        return $result->find_all();
    }
}