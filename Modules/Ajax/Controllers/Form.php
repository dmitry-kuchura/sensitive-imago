<?php

namespace Modules\Ajax\Controllers;

use Core\CommonI18n;
use Core\GeoIP;
use Core\QB\DB;
use Core\Arr;
use Core\System;
use Core\Log;
use Core\Email;

class Form extends \Modules\Ajax
{

    protected $post;
    protected $files;

    function before()
    {
        parent::before();
        // Check for bans in blacklist
        $ip = GeoIP::ip();
        $ips = array();
        $ips[] = $ip;
        $ips[] = $this->ip($ip, array(0));
        $ips[] = $this->ip($ip, array(1));
        $ips[] = $this->ip($ip, array(1, 0));
        $ips[] = $this->ip($ip, array(2));
        $ips[] = $this->ip($ip, array(2, 1));
        $ips[] = $this->ip($ip, array(2, 1, 0));
        $ips[] = $this->ip($ip, array(3));
        $ips[] = $this->ip($ip, array(3, 2));
        $ips[] = $this->ip($ip, array(3, 2, 1));
        $ips[] = $this->ip($ip, array(3, 2, 1, 0));
        if (count($ips)) {
            $bans = DB::select('date')->from('blacklist')->where('status', '=', 1)->where('ip', 'IN', $ips)->and_where_open()->or_where('date', '>', time())->or_where('date', '=', NULL)->and_where_close()->find_all();
            if (sizeof($bans)) {
                $this->error(__('Сообщение о блокировке по IP'));
            }
        }
    }

    private function ip($ip, $arr)
    {
        $_ip = explode('.', $ip);
        foreach ($arr AS $pos) {
            $_ip[$pos] = 'x';
        }
        $ip = implode('.', $_ip);
        return $ip;
    }

    public function reviewAction()
    {

        $name = Arr::get($this->post, 'name');
        $age = Arr::get($this->post, 'age');
        $country = Arr::get($this->post, 'country');
        $tel = Arr::get($this->post, 'tel');
        $rating = Arr::get($this->post, 'rating');
        $text = Arr::get($this->post, 'text');
        $lang = Arr::get($this->post, 'lang');

        if (!$country) {
            $this->error(__('Введенная страна слишком короткая!'));
        }
        if (!$text) {
            $this->error(__('Нужно ввести отзыв!'));
        }
        if (!$rating) {
            $this->error(__('Необходимо указать рейтинг!'));
        }

        $data = [];
        $data['name'] = $name;
        $data['phone'] = $tel;
        $data['mark'] = $rating;
        $data['title'] = $age;
        $data['city'] = $country;
        $data['language'] = $lang;
        $data['text'] = $text;
        $data['ip'] = System::getRealIP();
        $data['created_at'] = time();

        $check = DB::select([DB::expr('COUNT(reviews.id)'), 'count'])->from('reviews')->where('ip', '=', Arr::get($data, 'ip'))->where('created_at', '>', time() - 60)->as_object()->execute()->current();
        if (is_object($check) AND $check->count) {
            $this->error(__('Частая отправка сообщений'));
        }

        $keys = [];
        $values = [];
        foreach ($data as $key => $value) {
            $keys[] = $key;
            $values[] = $value;
        }
        $lastID = DB::insert('reviews', $keys)->values($values)->execute();
        $lastID = Arr::get($lastID, 0);

        $qName = 'Публикация нового отзыва';
        $url = '/wezom/reviews/edit/' . $lastID;
        Log::add($qName, $url, 2);

//        // Send E-Mail to admin
//        $mail = CommonI18n::factory('mail_templates')->getRowSimple(1, 'id', 1);
//        if ($mail) {
//            $from = array('{{site}}', '{{name}}', '{{email}}', '{{theme}}', '{{ip}}', '{{phone}}');
//            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name, $email, $theme, System::getRealIP(), $phone);
//            $subject = str_replace($from, $to, $mail->subject);
//            $text = str_replace($from, $to, $mail->text);
//            Email::send($subject, $text);
//        }
//
//        // Пользователю
//        $mail = CommonI18n::factory('mail_templates')->getRowSimple(36, 'id', 1);
//        if ($mail) {
//            $from = array('{{site}}', '{{name}}');
//            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name);
//            $subject = str_replace($from, $to, $mail->subject);
//            $text = str_replace($from, $to, $mail->text);
//            Email::send($subject, $text, $email);
//        }

        $this->success(__('Спасибо за сообщение!'));
    }

    public function priceAction()
    {
        $name = Arr::get($this->post, 'name');
        $country = Arr::get($this->post, 'country');
        $city = Arr::get($this->post, 'city');
        $confirm = Arr::get($this->post, 'confirm');
        $email = Arr::get($this->post, 'email');
        $text = Arr::get($this->post, 'text');
        $item = Arr::get($this->post, 'item');

        if (!$country) {
            $this->error(__('Введенная страна слишком короткая!'));
        }
        if (!$city) {
            $this->error(__('Введенный город слишком короткий!'));
        }
        if ($email != $confirm OR !$email) {
            $this->error(__('Email не соотвествует подтверждению, либо введен не корректно!'));
        }

        $check = DB::select([DB::expr('COUNT(prices.id)'), 'count'])->from('prices')->where('ip', '=', System::getRealIP())->where('created_at', '>', time() - 60)->as_object()->execute()->current();
        if (is_object($check) AND $check->count) {
            $this->error(__('Частая отправка сообщений'));
        }

        $data = [];
        $data['name'] = $name;
        $data['country'] = $country;
        $data['city'] = $city;
        $data['email'] = $email;
        $data['other'] = $text;
        $data['item'] = $item;
        $data['created_at'] = time();

        $keys = [];
        $values = [];
        foreach ($data as $key => $value) {
            $keys[] = $key;
            $values[] = $value;
        }

        $price_id = DB::insert('prices', $keys)->values($values)->execute();
        $price_id = Arr::get($price_id, 0);

        $qName = 'Заказ прайса';
        $url = '/wezom/prices/edit/' . $price_id;
        Log::add($qName, $url, 2);

        // Send E-Mail to admin
        $mail = CommonI18n::factory('mail_templates')->getRowSimple(1, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{name}}', '{{country}}', '{{city}}', '{{email}}', '{{text}}', '{{item}}', '{{ip}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name, $country, $city, $email, $text, $item, System::getRealIP());
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text);
        }

        $this->success(__('Запрос на прайс отпрален!'));
    }

    public function contactAction()
    {
        $name = Arr::get($this->post, 'name');
        $city = Arr::get($this->post, 'city');
        $email = Arr::get($this->post, 'email');
        $other = Arr::get($this->post, 'other');
        $branch = Arr::get($this->post, 'branch');

        if (!$branch) {
            $this->error(__('Что то пошло не так =('));
        }
        if (!$city) {
            $this->error(__('Введенный город слишком короткий!'));
        }
        if (!$email) {
            $this->error(__('Email введен не корректно!'));
        }

        $data = [];
        $data['name'] = $name;
        $data['city'] = $city;
        $data['email'] = $email;
        $data['other'] = $other;
        $data['branch'] = $branch;
        $data['created_at'] = time();

        $keys = [];
        $values = [];
        foreach ($data as $key => $value) {
            $keys[] = $key;
            $values[] = $value;
        }

        $last_id = DB::insert('contacts', $keys)->values($values)->execute();
        $last_id = Arr::get($last_id, 0);

        $qName = 'Сообщение в контактную форму';
        $url = '/wezom/prices/edit/' . $last_id;
        Log::add($qName, $url, 2);

        // Send E-Mail to admin
        $mail = CommonI18n::factory('mail_templates')->getRowSimple(1, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{name}}', '{{city}}', '{{email}}', '{{other}}', '{{branch}}', '{{ip}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name, $city, $email, $other, $branch, System::getRealIP());
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text);
        }

        $this->success(__('Ваше сообщение отправлено!'));
    }

}
