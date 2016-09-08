<?php

namespace Modules\Ajax\Controllers;

use Core\CommonI18n;
use Core\GeoIP;
use Core\QB\DB;
use Core\Arr;
use Core\System;
use Core\Log;
use Core\Email;

class Form extends \Modules\Ajax {

    protected $post;
    protected $files;

    function before() {
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
            $bans = DB::select('date')
                    ->from('blacklist')
                    ->where('status', '=', 1)
                    ->where('ip', 'IN', $ips)
                    ->and_where_open()
                    ->or_where('date', '>', time())
                    ->or_where('date', '=', NULL)
                    ->and_where_close()
                    ->find_all();
            if (sizeof($bans)) {
                $this->error(__('Сообщение о блокировке по IP'));
            }
        }
    }

    private function ip($ip, $arr) {
        $_ip = explode('.', $ip);
        foreach ($arr AS $pos) {
            $_ip[$pos] = 'x';
        }
        $ip = implode('.', $_ip);
        return $ip;
    }

    public function reviewsAction() {

        $name = Arr::get($this->post, 'name');
        $theme = Arr::get($this->post, 'theme');
        $email = Arr::get($this->post, 'email');
        $phone = Arr::get($this->post, 'phone');

        if (!$name) {
            $this->error(__('Введенное имя слишком короткое!'));
        }
        if (!$theme) {
            $this->error(__('Не указана тема!'));
        }
        if (!$phone) {
            $this->error(__('Не указан номер телефона!'));
        }
        if (!$email) {
            $this->error(__('E-Mail введен неверно!'));
        }

        // Create data for saving
        $data = array();
        $data['name'] = $name;
        $data['theme'] = $theme;
        $data['email'] = $email;
        $data['phone'] = $phone;
        $data['ip'] = System::getRealIP();
        $data['created_at'] = time();

        // Chec for bot
        $check = DB::select(array(DB::expr('COUNT(contacts.id)'), 'count'))
                        ->from('contacts')
                        ->where('ip', '=', Arr::get($data, 'ip'))
                        ->where('created_at', '>', time() - 60)
                        ->as_object()->execute()->current();
        if (is_object($check) AND $check->count) {
            $this->error(__('Частая отправка сообщений'));
        }

        // Save contact message to database
        $keys = array();
        $values = array();
        foreach ($data as $key => $value) {
            $keys[] = $key;
            $values[] = $value;
        }
        $lastID = DB::insert('contacts', $keys)->values($values)->execute();
        $lastID = Arr::get($lastID, 0);

        // Save log
        $qName = 'Сообщение из контактной формы';
        $url = '/wezom/contacts/edit/' . $lastID;
        Log::add($qName, $url, 2);

        // Send E-Mail to admin
        $mail = CommonI18n::factory('mail_templates')->getRowSimple(1, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{name}}', '{{email}}', '{{theme}}', '{{ip}}', '{{phone}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name, $email, $theme, System::getRealIP(), $phone);
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text);
        }
        
        // Пользователю
        $mail = CommonI18n::factory('mail_templates')->getRowSimple(36, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{name}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), $name);
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text, $email);
        }

        $this->success(__('Спасибо за сообщение!'));
    }

}
