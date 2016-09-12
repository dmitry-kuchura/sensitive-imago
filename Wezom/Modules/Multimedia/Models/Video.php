<?php

namespace Wezom\Modules\Multimedia\Models;

use Core\Arr;
use Core\Message;
use Core\QB\DB;

class Video extends \Core\CommonI18n {

    public static $table = 'video';
    public static $table_ = 'video_images';
    public static $image = 'video';
    public static $rules = array(
        'alias' => array(
            array(
                'error' => 'Алиас не может быть пустым!',
                'key' => 'not_empty',
            ),
        ),
    );

    public static function getVideoRows($parent_id) {
        $result = DB::select()
                ->from(static::$table_)
                ->where('video_id', '=', $parent_id)
                ->order_by('id', 'DESC');
        return $result->find_all();
    }

}
