<?php
namespace Wezom\Modules\Content\Models;

class Articles extends \Core\Common
{

    public static $table = 'articles';
    public static $image = 'articles';
    public static $filters = array(
        'name' => array(
            'table' => NULL,
            'action' => 'LIKE',
        ),
    );
    public static $rules = array();

    public static function valid($data = array())
    {
        static::$rules = array(
            'name' => array(
                array(
                    'error' => __('Название статьи не может быть пустым!'),
                    'key' => 'not_empty',
                ),
            ),
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
            ),
        );
        return parent::valid($data);
    }

}