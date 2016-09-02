<?php
    namespace Wezom\Modules\Promo\Models;

    use Core\Arr;
    use Core\Message;
    use Core\Route;

    class Coupons extends \Core\Common {

        public static $table = 'coupons';
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
                'amount' => array(
                    array(
                        'error' => __('Укажите сумму скидки!'),
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
                'user_id' => array(
                    array(
                        'error' => __('Выберите пользователя!'),
                        'key' => 'pos_numeric',
                    ),
                ),
            );
        }


        public static function valid($post) {
            if(!Route::param('id')) {
                static::$rules['code'] = array(
                    array(
                        'error' => 'Укажите уникальный код купона!',
                        'key' => 'unique',
                        'value' => 'promo',
                    ),
                    array(
                        'error' => 'Укажите уникальный код купона!',
                        'key' => 'unique',
                        'value' => 'coupons',
                    ),
                );
            }
            return parent::valid($post);
        }

    }