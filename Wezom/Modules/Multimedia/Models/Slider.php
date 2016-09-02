<?php

namespace Wezom\Modules\Multimedia\Models;

use Core\Common;
use Core\Files;
use Core\QB\DB;

class Slider extends \Core\CommonI18n {

    public static $table = 'slider';
    public static $image = 'slider';
    public static $emblem = 'emblem';
    public static $rules;

    public function __construct() {
        static::$rules = array(
            'name' => array(
                array(
                    'error' => __('Название не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

    public static function uploadBg($id, $name = 'bg', $field = 'bg') {
        if (!static::$image OR ! $id) {
            return false;
        }
        $filename = Files::uploadImage(static::$image, $name);
        if (!$filename) {
            return false;
        }
        if (!Common::checkField(static::$table, $field)) {
            return true;
        }
        return DB::update(static::$table)->set(array($field => $filename))->where(static::$table . '.id', '=', $id)->execute();
    }

    public static function deleteBg($filename, $id = NULL, $field = 'bg') {
        if (!static::$image OR ! $filename) {
            return false;
        }
        $result = Files::deleteImage(static::$image, $filename);
        if ($result) {
            return false;
        }
        if (!Common::checkField(static::$table, $field)) {
            return true;
        }
        if ($id !== NULL) {
            return DB::update(static::$table)->set(array($field => NULL))->where(static::$table . '.id', '=', $id)->execute();
        }
        return true;
    }

}
