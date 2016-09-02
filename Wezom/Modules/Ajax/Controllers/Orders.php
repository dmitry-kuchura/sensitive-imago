<?php
    namespace Wezom\Modules\Ajax\Controllers;

    use Core\Arr;
    use Core\Common;
    use Core\Email;
    use Core\HTML;
    use Core\Message;
    use Core\QB\DB;
    use Core\Config;
    use Core\Support;
    use Core\Validation\Rules;
    use Core\View;
    use Core\CommonI18n;
    use Wezom\Modules\Orders\Models\OrdersItems;
    use Wezom\Modules\User\Models\Users;
    use Wezom\Modules\Orders\Models\OrdersCert;
    use Wezom\Modules\Catalog\Models\Cert;

    class Orders extends \Wezom\Modules\Ajax {

        public function sendEmailCertAction() {
            $id = Arr::get($_POST, 'id');
            $obj = OrdersCert::getRow($id);
            $item = Cert::getRowSimple($obj->certificate_id);
            $mail = CommonI18n::factory('mail_templates')->getRowSimple(9, 'id');
            if( $mail ) {
                $d = Config::get('order.delivery.'.$obj->delivery);
                $p = Config::get('order.payment.'.$obj->payment);
                $from = array( '{{site}}', '{{ip}}', '{{date}}', '{{name}}', '{{last_name}}', '{{email}}', '{{city}}', '{{comment}}', '{{phone}}', '{{payment}}', '{{delivery}}', '{{item_name}}', '{{price}}', '{{count}}', '{{code}}' );
                $to = array(
                    Arr::get( $_SERVER, 'HTTP_HOST' ), $obj->ip, date('d.m.Y H:i'),
                    $obj->name, $obj->last_name, $obj->email, $obj->city, $obj->comment, $obj->phone, $p, $d, $item->name, $item->price, 1, $obj->code
                );
                $subject = str_replace($from, $to, $mail->subject);
                $text = str_replace($from, $to, $mail->text);
                Email::send( $subject, $text, $obj->email );
            }
            $this->success();
        }


        /**
         * Generate associative array from serializeArray data
         * @param $data
         * @return array
         */
        public function getDataFromSerialize( $data ) {
            $arr = array();
            foreach( $data AS $el ) {
                $arr[ $el['name'] ] = $el['value'];
            }
            return $arr;
        }


        /**
         * Change status of the order
         * $this->post['id'] => order ID
         * $this->post['data'] => incoming serialized data
         */
        public function orderStatusAction(){
            if( !Arr::get($this->post, 'id') ) {
                $this->error(array(
                    'msg' => __('Выберите заказ!'),
                ));
            }

            $__order = \Wezom\Modules\Orders\Models\Orders::getRow(Arr::get($this->post, 'id')); // Old older. We need status of this order

            $post = $this->getDataFromSerialize(Arr::get($this->post, 'data'));
            $statuses = Config::get('order.statuses');
            if( !isset($statuses[Arr::get($post, 'status')]) OR !isset($post['status']) ) {
                $this->error(array(
                    'msg' => __('Укажите статус!'),
                ));
            }

            if(Arr::get($post, 'status') != $__order->status) {
                Common::factory('orders')->update(array('status' => Arr::get($post, 'status')), Arr::get($this->post, 'id'));

                if((int) Arr::get($post, 'sendEmail', 0)) {
                    $order = \Wezom\Modules\Orders\Models\Orders::getRow(Arr::get($this->post, 'id'));
                    $mail = false;
                    if(Arr::get($post, 'status') == 1) {
                        $mail = DB::select('mail_templates_i18n.*')
                            ->from('mail_templates')
                            ->join('mail_templates_i18n')->on('mail_templates_i18n.row_id', '=', 'mail_templates.id')
                            ->where('mail_templates_i18n.language', '=', $order->language)
                            ->where('mail_templates.id', '=', 21)
                            ->where('mail_templates.status', '=', 1)
                            ->find();
                    } else if(Arr::get($post, 'status') == 3) {
                        $mail = DB::select('mail_templates_i18n.*')
                            ->from('mail_templates')
                            ->join('mail_templates_i18n')->on('mail_templates_i18n.row_id', '=', 'mail_templates.id')
                            ->where('mail_templates_i18n.language', '=', $order->language)
                            ->where('mail_templates.id', '=', 20)
                            ->where('mail_templates.status', '=', 1)
                            ->find();
                    }
                    if( $mail && filter_var($order->email, FILTER_VALIDATE_EMAIL) ) {
                        $from = array( '{{site}}', '{{name}}', '{{last_name}}', '{{amount}}', '{{id}}' );
                        $to = array(
                            Arr::get( $_SERVER, 'HTTP_HOST' ), $order->name, $order->last_name,
                            Support::pricePretty($order->amount, $order->currency), $order->id
                        );
                        $subject = str_replace($from, $to, $mail->subject);
                        $text = str_replace($from, $to, $mail->text);
                        Email::send( $subject, $text, $order->email );
                    }
                }

                if($__order->user_id) {
                    $user = Users::getForOrder($__order->user_id);
                    if($user && $user->partner) {
                        if(Arr::get($post, 'status') == 1) {
                            Common::factory('orders')->update(array('done' => time()), Arr::get($this->post, 'id'));
                        } else if(Arr::get($post, 'status') != 1 && $__order->status == 1) {
                            Common::factory('orders')->update(array('done' => NULL), Arr::get($this->post, 'id'));
                        }
                    }
                }
            }

            Message::GetMessage(1, __('Данные сохранены!'));
            $this->success(array('reload' => 1));
        }


        /**
         * Change delivery settings
         * $this->post['id'] => order ID
         * $this->post['data'] => incoming serialized data
         */
        public function orderDeliveryAction() {
            if( !Arr::get($this->post, 'id') ) {
                $this->error(array(
                    'msg' => __('Выберите заказ!'),
                ));
            }
            $post = $this->getDataFromSerialize(Arr::get($this->post, 'data'));
            $delivery = Config::get('order.delivery');
            if( !isset($delivery[Arr::get($post, 'delivery')]) OR !isset($post['delivery']) ) {
                $this->error(array(
                    'msg' => __('Укажите способ доставки!'),
                ));
            }
            $data = array('delivery' => Arr::get($post, 'delivery'));
            Common::factory('orders')->update($data, Arr::get($this->post, 'id'));
            $this->success(array(
                'msg' => __('Данные сохранены!'),
            ));
        }


        /**
         * Change payment settings
         * $this->post['id'] => order ID
         * $this->post['data'] => incoming serialized data
         */
        public function orderPaymentAction(){
            if( !Arr::get($this->post, 'id') ) {
                $this->error(array(
                    'msg' => __('Выберите заказ!'),
                ));
            }
            $post = $this->getDataFromSerialize(Arr::get($this->post, 'data'));
            $payment = Config::get('order.payment');
            if( !isset($payment[Arr::get($post, 'payment')]) OR !isset($post['payment']) ) {
                $this->error(array(
                    'msg' => __('Неверные данные!'),
                ));
            }
            Common::factory('orders')->update(array('payment' => Arr::get($post, 'payment')), Arr::get($this->post, 'id'));
            $this->success(array(
                'msg' => __('Данные сохранены!'),
            ));
        }


        public function orderCommentAction(){
            if( !Arr::get($this->post, 'id') ) {
                $this->error(array(
                    'msg' => __('Выберите заказ!'),
                ));
            }
            $post = $this->getDataFromSerialize(Arr::get($this->post, 'data'));
            Common::factory('orders')->update(array('admin_comment' => Arr::get($post, 'admin_comment')), Arr::get($this->post, 'id'));
            $this->success(array(
                'msg' => __('Данные сохранены!'),
            ));
        }


        /**
         * Change user information
         * $this->post['id'] => order ID
         * $this->post['data'] => incoming serialized data
         */
        public function orderUserAction(){
            if( !Arr::get($this->post, 'id') ) {
                $this->error(array(
                    'msg' => __('Выберите заказ!'),
                ));
            }
            $post = $this->getDataFromSerialize(Arr::get($this->post, 'data'));
            if(!Arr::get($post, 'phone')) {
                $this->error(array(
                    'msg' => __('Укажите номер телефона!'),
                ));
            }
            if(!Arr::get($post, 'name')) {
                $this->error(array(
                    'msg' => __('Укажите имя!'),
                ));
            }
            if(!Arr::get($post, 'last_name')) {
                $this->error(array(
                    'msg' => __('Укажите фамилию!'),
                ));
            }
            if(!Rules::email(Arr::get($post, 'email'))) {
                $this->error(array(
                    'msg' => __('Укажите E-Mail!'),
                ));
            }
            if(!Arr::get($post, 'city')) {
                $this->error(array(
                    'msg' => __('Укажите город доставки!'),
                ));
            }
            if(!Arr::get($post, 'comment')) {
                $this->error(array(
                    'msg' => __('Укажите склади или адрес доставки!'),
                ));
            }
            Common::factory('orders')->update(array(
                'name' => Arr::get($post, 'name'),
                'last_name' => Arr::get($post, 'last_name'),
                'email' => Arr::get($post, 'email'),
                'phone' => Arr::get($post, 'phone'),
                'city' => Arr::get($post, 'city'),
                'comment' => Arr::get($post, 'comment'),
                'region' => Arr::get($post, 'region'),
                'country' => Arr::get($post, 'country'),
            ), Arr::get($this->post, 'id'));
            $this->success(array(
                'msg' => __('Данные сохранены!'),
            ));
        }


        /**
         * Change items information
         * $this->post['id'] => order ID
         * $this->post['catalog_id'] => item ID
         * $this->post['count'] => new item count in order
         * $this->post['size_id'] => item size ID
         */
        public function orderItemsAction() {
            if( !Arr::get($this->post, 'id') ) {
                $this->error();
            }
            if( !Arr::get($this->post, 'catalog_id') ) {
                $this->error();
            }
            if( !Arr::get($this->post, 'size_alias') ) {
                $this->error();
            }
            if( !Arr::get($this->post, 'color_alias') ) {
                $this->error();
            }
            $res = DB::update('orders_items')->set(array(
                'count' => Arr::get($this->post, 'count'),
                'price' => (float) Arr::get($this->post, 'price'),
            ))
                ->where('order_id', '=', Arr::get($this->post, 'id'))
                ->where('catalog_id', '=', Arr::get($this->post, 'catalog_id'))
                ->where('size_alias', '=', Arr::get($this->post, 'size_alias'))
                ->where('color_alias', '=', Arr::get($this->post, 'color_alias'))
                ->execute();
            if($res) {
                Common::factory('orders')->update(array('changed' => 1), Arr::get($this->post, 'id'));
                $this->success(array('email_button' => true));
            }
            $this->success(array('email_button' => false));
        }


        /**
         * TODO update this method without "size_id"
         * Delete item position from the order
         * $this->post['id'] => order ID
         * $this->post['catalog_id'] => item ID
         * $this->post['size_id'] => item size ID
         */
        public function orderPositionDeleteAction() {
            $post = $this->post;
            if( !Arr::get($post, 'id') ) {
                $this->error();
            }
            if( !Arr::get($post, 'catalog_id') ) {
                $this->error();
            }
            if( !Arr::get($post, 'size_alias') ) {
                $this->error();
            }
            if( !Arr::get($post, 'color_alias') ) {
                $this->error();
            }
            $res = DB::delete('orders_items')
                ->where('order_id', '=', Arr::get($post, 'id'))
                ->where('catalog_id', '=', Arr::get($post, 'catalog_id'))
                ->where('size_alias', '=', Arr::get($post, 'size_alias'))
                ->where('color_alias', '=', Arr::get($post, 'color_alias'))
                ->execute();
            if($res) {
                Common::factory('orders')->update(array('changed' => 1), Arr::get($post, 'id'));
            }
            $this->success();
        }


        public function sendEmailAction() {
            $id = (int) Arr::get($this->post, 'id');
            if( ! $id ) {
                $this->error(__('Такого заказа не существует!'));
            }
            $order = \Wezom\Modules\Orders\Models\Orders::getRow($id);
            if($order->changed != 1) {
                $this->error(__('Содержимое заказа не было изменено!'));
            }
            $lang = \I18n::$lang;
            \I18n::lang($order->language);
            $items = \Modules\Cart\Models\Orders::getOrderItems($id);
            \I18n::lang($lang);
            if(!$items) {
                $this->error(__('Невозможно отправить оповещение о пустом заказе!'));
            }
            $mail = DB::select('mail_templates_i18n.*')
                ->from('mail_templates')
                ->join('mail_templates_i18n')->on('mail_templates_i18n.row_id', '=', 'mail_templates.id')
                ->where('mail_templates_i18n.language', '=', $order->language)
                ->where('mail_templates.id', '=', 15)
                ->where('mail_templates.status', '=', 1)
                ->find();
            if( $mail ) {
                $from = array( '{{site}}', '{{name}}', '{{last_name}}', '{{id}}', '{{amount}}', '{{items}}' );
                $to = array(
                    Arr::get( $_SERVER, 'HTTP_HOST' ), $order->name, $order->last_name, $order->id, $order->amount,
                    View::tpl(array('cart' => $items, 'order' => $order), 'Catalog/ItemsMail')
                );
                $subject = str_replace($from, $to, $mail->subject);
                $text = str_replace($from, $to, $mail->text);
                Email::send( $subject, $text, $order->email );
            }
            Common::factory('orders')->update(array('changed' => 0), $order->id);
            $this->success();
        }


        public function changeDiscountAction() {
            $order_id = Arr::get($_POST, 'order_id');
            $discount = Arr::get($_POST, 'discount');
            Common::factory('orders')->update(array('discount' => $discount), $order_id);
            $this->success();
        }

    }