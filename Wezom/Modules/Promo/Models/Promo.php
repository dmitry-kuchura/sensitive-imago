<?php
    namespace Wezom\Modules\Promo\Models;

    use Core\Arr;
    use Core\HTML;
    use Core\Message;
    use Core\QB\DB;
    use Core\Route;

    class Promo extends \Core\Common {

        public static $table = 'promo';
        public static $filters;
        public static $rules;

        public function __counstruct() {
            static::$filters = array(
                'name' => array(
                    'table' => NULL,
                    'action' => 'LIKE',
                ),
            );
            static::$rules = array(
                'name' => array(
                    array(
                        'error' => __('Укажите название купона!'),
                        'key' => 'not_empty',
                    ),
                ),
                'percent' => array(
                    array(
                        'error' => __('Укажите процент от суммы для скидки!'),
                        'key' => 'pos_numeric',
                    ),
                ),
                'start_amount' => array(
                    array(
                        'error' => __('Укажите минимальную сумму действия купона!'),
                        'key' => 'not_empty',
                    ),
                    array(
                        'error' => __('Укажите минимальную сумму действия купона! Только цифры'),
                        'key' => 'digits',
                    ),
                ),
                'date_from' => array(
                    array(
                        'error' => __('Укажите верную дату начала акции!'),
                        'key' => 'date',
                    ),
                ),
                'date_to' => array(
                    array(
                        'error' => __('Укажите верную дату конца акции!'),
                        'key' => 'date',
                    ),
                ),
            );
        }


        public static function valid($post) {
            if(!Arr::get($_POST, 'GROUPS', array())) {
                Message::GetMessage(0, __('Вы не выбрали ниодной группы!'), FALSE);
                return FALSE;
            }
            if(!Route::param('id')) {
                static::$rules['code'] = array(
                    array(
                        'error' => __('Укажите уникальный код купона!'),
                        'key' => 'unique',
                        'value' => 'promo',
                    ),
                    array(
                        'error' => __('Укажите уникальный код купона!'),
                        'key' => 'unique',
                        'value' => 'coupons',
                    ),
                );
            }
            return parent::valid($post);
        }

    }