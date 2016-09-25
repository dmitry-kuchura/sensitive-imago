<?php

namespace Wezom\Modules\Reviews\Models;

use Core\QB\DB;

class Reviews extends \Core\Common
{

    public static $table = 'reviews';
    public static $filters;
    public static $rules;

    public function __counstruct()
    {
        static::$filters = array(
            'name' => array(
                'table' => NULL,
                'action' => 'LIKE',
            ),
        );
        static::$rules = array(
            'name' => array(
                array(
                    'error' => __('Название новости не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
            'text' => array(
                array(
                    'error' => __('Отзыв не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
            'mark' => array(
                array(
                    'error' => __('Оставьте оценку обслуживанию от 1 до 5!'),
                    'key' => 'regex',
                    'value' => '/^1|2|3|4|5$/',
                ),
            ),
        );
    }

    public static function getRows($status = NULL, $name = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL, $filter = true)
    {
        $result = DB::select()->from(static::$table);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($name) {
            $result->where(static::$table . '.name', 'LIKE', '%' . $name . '%');
        }
        if ($filter) {
            $result = parent::setFilter($result);
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

    public static function countRows($status = NULL, $name = NULL, $filter = true)
    {
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))->from(static::$table);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($name) {
            $result->where(static::$table . '.name', 'LIKE', '%' . $name . '%');
        }
        if ($filter) {
            $result = parent::setFilter($result);
        }
        return $result->count_all();
    }

}
