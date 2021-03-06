<?php
namespace Wezom\Modules\Catalog\Models;

use Core\QB\DB;

class CatalogImages extends \Core\Common
{

    public static $table = 'catalog_images';

    public static function getSortForThisParent($parent_id)
    {
        $row = DB::select(array(DB::expr('MAX(' . static::$table . '.sort)'), 'max'))->from(static::$table)->where(static::$table . '.catalog_id', '=', $parent_id)->find();
        if (!$row) {
            return 0;
        }
        return (int)$row->max + 1;
    }


    public static function issetMain($parent_id)
    {
        return DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))->from(static::$table)->where(static::$table . '.catalog_id', '=', $parent_id)->where(static::$table . '.main', '=', '1')->count_all();
    }

}
