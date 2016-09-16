<?php

namespace Modules\Advantage\Models;

use Core\QB\DB;

class Advantage extends \Core\CommonI18n
{

    public static $table = 'advantages';

    public static function getRows()
    {

        $lang = \I18n::$lang;

        $result = DB::select('advantages.*', 'advantages_i18n.*', 'svg.svg')
            ->from('advantages')
            ->join('advantages_i18n', 'LEFT')->on('advantages_i18n.row_id', '=', 'advantages.id')
            ->join('svg', 'LEFT')->on('advantages.svg', '=', 'svg.id')
            ->where('advantages_i18n.language', '=', $lang)
            ->find_all();

        return $result;
    }

    public static function getRowSimple($alias) {
        $lang = \I18n::$lang;

        $result = DB::select('advantages.*', 'advantages_i18n.*', 'svg.svg')
            ->from('advantages')
            ->join('advantages_i18n', 'LEFT')->on('advantages_i18n.row_id', '=', 'advantages.id')
            ->join('svg', 'LEFT')->on('advantages.svg', '=', 'svg.id')
            ->where('advantages_i18n.language', '=', $lang)
            ->where('advantages.alias', '=', $alias)
            ->find();

        return $result;
}

}
