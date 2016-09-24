<?php
    namespace Wezom\Modules\Multimedia\Models;

    use Core\QB\DB;
    use Core\Common;

    class PartnersImages extends \Core\Common {

        public static $table = 'partners_images';
        public static $image = 'partners_images';

        public static function getSortForThisParent($parent_id) {
            $row = DB::select(array(DB::expr('MAX('.static::$table.'.sort)'), 'max'))
                ->from(static::$table)
                ->where(static::$table.'.gallery_id', '=', $parent_id)
                ->find();
            if( !$row ) {
                return 0;
            }
            return (int) $row->max + 1;
        }

        public static function getRows($parent_id) {
            $result = DB::select()
                ->from(static::$table)
                ->where('gallery_id', '=', $parent_id)
                ->order_by('sort', 'ASC');
            return $result->find_all();
        }

        public static function updateDefault($data, $value, $field = 'id') {
            if (!isset($data['updated_at']) AND Common::checkField(static::$table, 'updated_at')) {
                $data['updated_at'] = time();
            }
            return DB::update('partners')->set($data)->where($field, '=', $value)->execute();
        }

    }