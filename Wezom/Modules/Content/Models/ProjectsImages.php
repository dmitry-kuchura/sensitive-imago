<?php
    namespace Wezom\Modules\Content\Models;

    use Core\QB\DB;

    class ProjectsImages extends \Core\Common {

        public static $table = 'projects_images';
        public static $image = 'projects';

        public static function getSortForThisParent($parent_id) {
            $row = DB::select(array(DB::expr('MAX('.static::$table.'.sort)'), 'max'))
                ->from(static::$table)
                ->where(static::$table.'.projects_id', '=', $parent_id)
                ->find();
            if( !$row ) {
                return 0;
            }
            return (int) $row->max + 1;
        }

        public static function getRows($parent_id) {
            $result = DB::select()
                ->from(static::$table)
                ->where('projects_id', '=', $parent_id)
                ->order_by('sort', 'ASC');
            return $result->find_all();
        }

    }