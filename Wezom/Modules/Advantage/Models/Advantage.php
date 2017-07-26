<?php

namespace Wezom\Modules\Advantage\Models;

use Core\QB\DB;

class Advantage extends \Core\CommonI18n
{

    public static $table = 'advantages';
    public static $filters;
    public static $rulesI18n;
    public static $rules;

    public function __counstruct()
    {
        static::$filters = array('name' => array('table' => 'advantages_i18n', 'action' => 'LIKE',),);
        static::$rulesI18n = array('name' => array(array('error' => __('Название не может быть пустым! (:lang)'), 'key' => 'not_empty',),),);
        static::$rules = array('alias' => array(array('error' => __('Алиас не может быть пустым!'), 'key' => 'not_empty',), array('error' => __('Алиас должен содержать только латинские буквы в нижнем регистре, цифры, "-" или "_"!'), 'key' => 'regex', 'value' => '/^[a-z0-9\-_]*$/',), array('error' => __('Алиас должен быть уникальным!'), 'key' => 'unique', 'value' => 'news',),), 'date' => array(array('error' => __('Дата не может быть пустой!'), 'key' => 'not_empty',), array('error' => __('Укажите правильную дату!'), 'key' => 'date',),),);
    }

    public static function getRows($status = NULL, $name = NULL, $sort = NULL, $type = NULL, $limit = NULL, $offset = NULL, $filter = true)
    {
        if (!static::$tableI18n) {
            static::$tableI18n = static::$table . '_i18n';
        }
        $result = DB::select(static::$tableI18n . '.*', static::$table . '.*', 'svg.svg')
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->join('svg', 'LEFT')->on(static::$table . '.svg', '=', 'svg.id')
            ->where(static::$tableI18n . '.language', '=', \I18n::$default_lang);
        if ($name) {
            $result->where(static::$tableI18n . '.name', 'LIKE', '%' . $name . '%');
        }
        if ($filter) {
            $result = static::setFilter($result);
        }
        if ($status <> NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        $result->order_by(static::$table . '.id', 'DESC');
        if ($sort <> NULL) {
            if ($type <> NULL) {
                $result->order_by(static::$table . '.' . $sort, $type);
            } else {
                $result->order_by(static::$table . '.' . $sort);
            }
        }
        if ($limit <> NULL) {
            $result->limit($limit);
        }
        if ($offset <> NULL) {
            $result->offset($offset);
        }
        return $result->find_all();
    }

    public static function getSvg($status)
    {
        $result = DB::select('svg.*', 'svg_i18n.*')->from('svg')->join('svg_i18n', 'LEFT')->on('svg_i18n.row_id', '=', 'svg.id')->where('svg_i18n.language', '=', 'ru')->where('svg.status', '=', $status)->order_by('svg.sort', 'ASC')->find_all();
        return $result;
    }

    public static function countRows($status = NULL, $name = NULL, $filter = true)
    {
        if (!static::$tableI18n) {
            static::$tableI18n = static::$table . '_i18n';
        }
        $result = DB::select(array(DB::expr('COUNT(' . static::$table . '.id)'), 'count'))->from(static::$table)->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')->where(static::$tableI18n . '.language', '=', \I18n::$default_lang);
        if ($status !== NULL) {
            $result->where(static::$table . '.status', '=', $status);
        }
        if ($name) {
            $result->where(static::$tableI18n . '.name', 'LIKE', '%' . $name . '%');
        }

        if ($filter) {
            $result = static::setFilter($result);
        }

        return $result->count_all();
    }

}
