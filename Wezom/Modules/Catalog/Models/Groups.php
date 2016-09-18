<?php
    namespace Wezom\Modules\Catalog\Models;

    use Core\QB\DB;

    class Groups extends \Core\CommonI18n {

        public static $table = 'catalog_tree';
        public static $image = 'catalog_tree';
        public static $rulesI18n;
        public static $rules;

        public function __counstruct() {
            static::$rulesI18n = array(
                'name' => array(
                    array(
                        'error' => __('Название группы товаров не может быть пустым! (:lang)'),
                        'key' => 'not_empty',
                    ),
                ),
            );
            static::$rules = array(
                'alias' => array(
                    array(
                        'error' => __('Алиас не может быть пустым!'),
                        'key' => 'not_empty',
                    ),
                    array(
                        'error' => __('Алиас должен содержать только латинские буквы в нижнем регистре, цифры, "-" или "_"!'),
                        'key' => 'regex',
                        'value' => '/^[a-z0-9\-_]*$/',
                    ),
                    array(
                        'error' => __('Алиас должен быть уникален!'),
                        'key' => 'unique',
                        'value' => 'catalog_tree',
                    ),
                ),
            );
        }


        public static function countKids($id) {
            $result = DB::select(array(DB::expr('COUNT(id)'), 'count'))
                ->from('catalog_tree')
                ->where('parent_id', '=', $id);
            return $result->count_all();
        }


        public static function countItems($id) {
            $result = DB::select(array(DB::expr('COUNT(id)'), 'count'))
                ->from('catalog')
                ->where('parent_id', '=', $id);
            return $result->count_all();
        }


        public static function getParentRows($status = NULL, $sort = NULL, $type = NULL) {
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
                ->where(static::$tableI18n.'.language', '=', \I18n::$default_lang)
                ->where('parent_id', '=', 0);
            if( $status <> NULL ) {
                $result->where(static::$table.'.status', '=', $status);
            }
            if( $sort <> NULL ) {
                if( $type <> NULL ) {
                    $result->order_by($sort, $type);
                } else {
                    $result->order_by($sort);
                }
            }
            $result->order_by(static::$table.'.id', 'DESC');
            return $result->find_all();
        }

    }