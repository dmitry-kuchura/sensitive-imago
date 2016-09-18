<?php

namespace Modules\Equipment\Models;

use Core\QB\DB;

class Equipment extends \Core\CommonI18n
{

    public static $table = 'catalog';

    public static function getTree($status = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL, $filter = true) {
        $lang = \I18n::$lang;

        $tree = 'catalog_tree';
        $treeI18n = 'catalog_tree_i18n';
        $result = DB::select(
            $tree.'.*',
            $treeI18n.'.*'
        )
            ->from($tree)
            ->join($treeI18n, 'LEFT')->on($treeI18n.'.row_id', '=', $tree.'.id')
            ->where($treeI18n.'.language', '=', $lang);
        if( $filter ) {
            $result = static::setFilter($result);
        }
        if( $status <> NULL ) {
            $result->where($tree.'.status', '=', $status);
        }
        if( $sort <> NULL ) {
            if( $type <> NULL ) {
                $result->order_by($sort, $type);
            } else {
                $result->order_by($sort);
            }
        }
        $result->order_by($tree.'.id', 'DESC');
        if( $limit <> NULL ) {
            $result->limit($limit);
            if( $offset <> NULL ) {
                $result->offset($offset);
            }
        }
        return $result->find_all();
    }
}
