<?php

namespace Wezom\Modules\Catalog\Models;

use Core\QB\DB;
use Core\Arr;
use Core\Files;
use Core\HTML;

class File extends \Core\CommonI18n
{

    public static $table = 'files';
    public static $filters;
    public static $rulesI18n;
    public static $rules;

    public function __counstruct()
    {
        static::$rulesI18n = array(
            'name' => array(
                array(
                    'error' => __('Название не может быть пустым! (:lang)'),
                    'key' => 'not_empty',
                ),
            ),
        );
    }

    public static function uploadFile($id, $name = 'file')
    {
        if (!Arr::get($_FILES[$name], 'name')) {
            return false;
        }
        $folder = 'Media/items';
        $file_name = Arr::get($_FILES[$name], 'name');
//        $type = substr($file_name, -3);
//        if ($type != in_array('pdf', 'docx', 'xlsx')) {
//            return false;
//        }
        Files::createFolder(HOST . $folder, 0777);
        move_uploaded_file(Arr::get($_FILES[$name], 'tmp_name'), HOST . $folder . "/" . $file_name);

        return DB::update(static::$table)->set(['filename' => $file_name])->where(static::$table . '.id', '=', $id)->execute();
    }

    public static function deleteFile($filename, $id)
    {
        $file = HOST . HTML::media('/items/' . $filename);
        @unlink($file);
        DB::update(static::$table)->set(array('filename' => NULL))->where(static::$table . '.id', '=', $id)->execute();

        return true;
    }

    public static function getFiles($id = NULL)
    {
        $lang = \I18n::$lang;
        if (APPLICATION) {
            $lang = \I18n::$default_lang;
        }
        static::$tableI18n = static::$table . '_i18n';
        $result = DB::select(
            static::$tableI18n . '.*', static::$table . '.*'
        )
            ->from(static::$table)
            ->join(static::$tableI18n, 'LEFT')->on(static::$tableI18n . '.row_id', '=', static::$table . '.id')
            ->where(static::$tableI18n . '.language', '=', $lang)
            ->where(static::$table . '.item_id', '=', $id);
        $result->order_by(static::$table . '.id', 'DESC');
        return $result->find_all();
    }

}