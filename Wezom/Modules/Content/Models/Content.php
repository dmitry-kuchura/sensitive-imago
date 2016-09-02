<?php

namespace Wezom\Modules\Content\Models;

use Core\Files;
use Core\Common;
use Core\QB\DB;

class Content extends \Core\CommonI18n {

    public static $table = 'content';
    public static $image = 'services';
    public static $image_slider = 'slider_about';
    public static $rules;

    public function __counstruct() {
        static::$rules = array(
            'en/name' => array(
                array(
                    'error' => __('Название страницы на английском не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
            'ru/name' => array(
                array(
                    'error' => __('Название страницы на русском не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

    // Upload
    public static function uploadImageFirst($id, $name = 'file_1', $field = 'image_first') {
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

    public static function uploadImageSecond($id, $name = 'file_2', $field = 'image_second') {
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

    public static function uploadImageThird($id, $name = 'file_3', $field = 'image_third') {
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

    public static function uploadImageFour($id, $name = 'file_4', $field = 'image_four') {
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

    // Slider

    public static function uploadSliderFirst($id, $name = 'slider_1', $field = 'slider_first') {
        if (!static::$image_slider OR ! $id) {
            return false;
        }
        $filename = Files::uploadImage(static::$image_slider, $name);
        if (!$filename) {
            return false;
        }
        if (!Common::checkField(static::$table, $field)) {
            return true;
        }
        return DB::update(static::$table)->set(array($field => $filename))->where(static::$table . '.id', '=', $id)->execute();
    }

    public static function uploadSliderSecond($id, $name = 'slider_2', $field = 'slider_second') {
        if (!static::$image_slider OR ! $id) {
            return false;
        }
        $filename = Files::uploadImage(static::$image_slider, $name);
        if (!$filename) {
            return false;
        }
        if (!Common::checkField(static::$table, $field)) {
            return true;
        }
        return DB::update(static::$table)->set(array($field => $filename))->where(static::$table . '.id', '=', $id)->execute();
    }

    public static function uploadSliderThird($id, $name = 'slider_3', $field = 'slider_third') {
        if (!static::$image_slider OR ! $id) {
            return false;
        }
        $filename = Files::uploadImage(static::$image_slider, $name);
        if (!$filename) {
            return false;
        }
        if (!Common::checkField(static::$table, $field)) {
            return true;
        }
        return DB::update(static::$table)->set(array($field => $filename))->where(static::$table . '.id', '=', $id)->execute();
    }

    // Delete
    public static function deleteImageFirst($filename, $id = NULL, $field = 'image_first') {
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

    public static function deleteImageSecond($filename, $id = NULL, $field = 'image_second') {
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

    public static function deleteImageThird($filename, $id = NULL, $field = 'image_third') {
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

    public static function deleteImageFour($filename, $id = NULL, $field = 'image_four') {
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

    // Delete Slider
    public static function deleteSliderFirst($filename, $id = NULL, $field = 'slider_first') {
        if (!static::$image OR ! $filename) {
            return false;
        }
        $result = Files::deleteImage(static::$image_slider, $filename);
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

    public static function deleteSliderSecond($filename, $id = NULL, $field = 'slider_second') {
        if (!static::$image OR ! $filename) {
            return false;
        }
        $result = Files::deleteImage(static::$image_slider, $filename);
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

    public static function deleteSliderThird($filename, $id = NULL, $field = 'slider_third') {
        if (!static::$image OR ! $filename) {
            return false;
        }
        $result = Files::deleteImage(static::$image_slider, $filename);
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
