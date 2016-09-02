<?php

namespace Wezom\Modules\Ajax\Controllers;

use Core\Common;
use Core\CommonI18n;
use Core\Config;
use Core\Cookie;
use Core\Cron;
use Core\Email;
use Core\HTML;
use Core\Text;
use Core\Arr;
use Core\Message;
use Core\QB\DB;
use Core\Support;
use Core\Files;
use Core\User;
use Core\Validation\Rules;
use Wezom\Modules\Catalog\Models\Items;

class General extends \Wezom\Modules\Ajax {

    public function changeLanguageAction() {
        $lang = Arr::get($_POST, 'lang', Config::get('i18n.default'));
        Cookie::set('backend_lang', $lang, 7 * 24 * 60 * 60);
        $this->success();
    }

    public function askForReturnsAction() {
        $catalog_id = Arr::get($_POST, 'id');
        $item = Items::getRow($catalog_id);
        if (!$item) {
            $this->error(__('Такого товара не существует!'));
        }
        $__res = DB::select('color_alias')->from('catalog_colors')->where('catalog_id', '=', $catalog_id)->find_all();
        if (!sizeof($__res)) {
            $this->error(__('В очередь добавлено N писем!', array(':count' => 0)));
        }
        $iColors = array();
        foreach ($__res AS $value) {
            $iColors[] = $value->color_alias;
        }
        $__res = DB::select('size_alias')->from('catalog_sizes')->where('catalog_id', '=', $catalog_id)->find_all();
        if (!sizeof($__res)) {
            $this->error(__('В очередь добавлено N писем!', array(':count' => 0)));
        }
        $iSizes = array();
        foreach ($__res AS $value) {
            $iSizes[] = $value->size_alias;
        }
        $count = 0;
        $mail = CommonI18n::factory('mail_templates')->getRow(27, 'id', 1);
        if ($mail) {
            $result = DB::select()->from('catalog_returns')->where('catalog_id', '=', $catalog_id)->where('status', '=', 0)->order_by('id', 'DESC')->find_all();
            foreach ($result AS $obj) {
                if (!Rules::email($obj->email)) {
                    Common::factory('catalog_returns')->delete($obj->id);
                    continue;
                }
                if (in_array($obj->size_alias, $iSizes) && in_array($obj->color_alias, $iColors)) {
                    $from = array('{{site}}', '{{ip}}', '{{date}}', '{{item_name}}', '{{email}}', '{{price}}');
                    $to = array(
                        Arr::get($_SERVER, 'HTTP_HOST'), $obj->ip, date('d.m.Y H:i'),
                        Arr::get($item['langs'], $obj->language, new \stdClass())->name, $obj->email,
                        Arr::get($item, 'obj', new \stdClass())->price
                    );
                    $subject = str_replace($from, $to, Arr::get($mail['langs'], $obj->language, new \stdClass())->subject);
                    $text = str_replace($from, $to, Arr::get($mail['langs'], $obj->language, new \stdClass())->text);
                    Common::factory('cron')->insert(array(
                        'email' => $obj->email,
                        'subject' => $subject,
                        'text' => $text,
                    ));
                    Common::factory('catalog_returns')->update(array('status' => 1), $obj->id);
                    $count++;
                }
            }
        }
        $this->success(__('В очередь добавлено N писем!', array(':count' => $count)));
    }

    public function sendNewPasswordAction() {
        $password = trim(Arr::get($_POST, 'password'));
        if (!$password) {
            $password = Text::random('alnum', 12);
        }
        $user_id = Arr::get($_POST, 'uid');
        $user = Common::factory('users')->getRow($user_id);
        if (!$user) {
            $this->error(__('К сожалению, произошла ошибка. Пожалуйста обновите страницу и попробуйте еще раз!'));
        }

        User::factory()->update_password($user_id, $password);

        $mail = CommonI18n::factory('mail_templates')->getRowSimple(26, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{date}}', '{{password}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), date('d.m.Y'), $password);
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text, $user->email);
        } else {
            $this->error(__('Пароль был изменен, но не был отправлен на почту пользователя. Причина: отключен шаблон в разделе "Шаблоны писем"'));
        }

        $this->success(__('Пароль успешно отправлен!'));
    }

    public function sendCouponEmailAction() {
        $coupon_id = Arr::get($_POST, 'id');
        $coupon = Common::factory('coupons')->getRow($coupon_id);
        if (!$coupon) {
            $this->error(__('К сожалению, произошла ошибка. Пожалуйста обновите страницу и попробуйте еще раз!'));
        }
        $user = Common::factory('users')->getRow($coupon->user_id);
        if (!$user) {
            $this->error(__('К этому купону не подвязан ни один пользователь!'));
        }

        $mail = CommonI18n::factory('mail_templates')->getRowSimple(31, 'id', 1);
        if ($mail) {
            $from = array('{{site}}', '{{date}}', '{{discount}}', '{{amount}}', '{{code}}', '{{date_from}}', '{{date_to}}');
            $to = array(Arr::get($_SERVER, 'HTTP_HOST'), date('d.m.Y'), Support::pricePretty($coupon->amount, '$'), Support::pricePretty($coupon->start_amount, '$'), $coupon->code, date('d.m.Y', $coupon->date_from), date('d.m.Y', $coupon->date_to));
            $subject = str_replace($from, $to, $mail->subject);
            $text = str_replace($from, $to, $mail->text);
            Email::send($subject, $text, $user->email);
        } else {
            $this->error(__('Письмо не было отправлено, так как отключен шаблон в разделе "Шаблоны писем"'));
        }

        $this->success(__('E-Mail успешно отправлен!'));
    }

    public function generateCodeAction() {
        $this->success(array(
            'code' => Text::random('distinct', 12),
        ));
    }

    /**
     * Get count of orders for last 12 months
     */
    public function ordersChartAction() {
        $months = array(NULL, 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек');
        $month = date('n');
        $date = strtotime('01.' . Support::addZero($month) . '.' . (date('Y') - 1));
        $result = DB::select(array(DB::expr('COUNT(`id`)'), 'count'), array(DB::expr('FROM_UNIXTIME(`created_at`, "%c")'), 'month'))
                ->from('orders')
                ->where('created_at', '>=', $date)
                ->order_by('created_at')
                ->group_by(DB::expr('month'))
                ->find_all();
        $orders = array();
        foreach ($result AS $obj) {
            $orders[(int) $obj->month] = $obj->count;
        }
        $chart = array();
        if ($month > 0) {
            for ($i = $month + 1; $i <= 12; $i++) {
                $chart['months'][] = $months[$i] . ' ' . (date('Y') - 1);
                $chart['count'][] = (int) Arr::get($orders, $i, 0);
            }
        }
        for ($i = 1; $i <= $month; $i++) {
            $chart['months'][] = $months[$i] . ' ' . date('Y');
            $chart['count'][] = (int) Arr::get($orders, $i, 0);
        }
        $this->success($chart);
    }

    /**
     * Get data for visitors chart on main page
     */
    public function visitorsMainDataAction() {
        $days = 14;
        $now = strtotime(date('d.m.Y'));
        $today = date('j');
        $month = date('n');
        $year = date('Y');
        $chart = array();
        if ($today > $days) {
            for ($i = $today - $days + 1; $i <= $today; $i ++) {
                $chart[Support::addZero($i) . '.' . Support::addZero($month) . '.' . $year] = array(
                    'visits' => 0,
                    'visitors' => 0,
                );
            }
        } else {
            $days1 = $today;
            $days2 = $days - $today + 1;
            $last_month = $month - 1;
            $last_year = $year;
            $countDays = date('t', strtotime('01.' . $last_month . '.' . $last_year));
            if (!$last_month) {
                $last_month = 12;
                $last_year = $year - 1;
            }
            for ($i = $countDays - $days2 + 1; $i <= $countDays; $i ++) {
                $chart[Support::addZero($i) . '.' . Support::addZero($last_month) . '.' . $last_year] = array(
                    'visits' => 0,
                    'visitors' => 0,
                    'hits' => 0,
                    'unique_hits' => 0,
                );
            }
            for ($i = $today - $days1 + 1; $i <= $today; $i ++) {
                $chart[Support::addZero($i) . '.' . Support::addZero($month) . '.' . $year] = array(
                    'visits' => 0,
                    'visitors' => 0,
                    'hits' => 0,
                    'unique_hits' => 0,
                );
            }
        }
        $result = DB::select(array(DB::expr('COUNT(ip)'), 'visits'), 'ip', array(DB::expr('FROM_UNIXTIME(`created_at`, "%d.%m.%Y")'), 'date'))
                ->from('visitors_hits')
                ->where('created_at', '>=', $now - $days * 24 * 60 * 60)
                ->group_by(DB::expr('date'))
                ->find_all();
        foreach ($result AS $obj) {
            $chart[$obj->date]['visits'] += $obj->visits;
        }
        $result = DB::select(array(DB::expr('COUNT(DISTINCT ip)'), 'visitors'), array(DB::expr('FROM_UNIXTIME(`created_at`, "%d.%m.%Y")'), 'date'))
                ->from('visitors_hits')
                ->where('created_at', '>=', $now - $days * 24 * 60 * 60)
                ->group_by(DB::expr('date'))
                ->find_all();
        foreach ($result AS $obj) {
            $chart[$obj->date]['visitors'] += $obj->visitors;
        }
        $result = array();
        foreach ($chart AS $date => $row) {
            $result['dates'][] = $date;
            $result['visits'][] = $row['visits'];
            $result['visitors'][] = $row['visitors'];
        }
        $chart = $result;
        $result = DB::select(array(DB::expr('COUNT(ip)'), 'hits'), array(DB::expr('COUNT(DISTINCT ip)'), 'unique'))
                ->from('visitors_hits')
                ->where('created_at', '>=', $now - $days * 24 * 60 * 60)
                ->find_all();
        foreach ($result AS $obj) {
            $chart['hits'] += $obj->hits;
            $chart['unique_hits'] += $obj->unique;
        }
        $result = DB::select(array(DB::expr('COUNT(ip)'), 'hits'), array(DB::expr('COUNT(DISTINCT ip)'), 'unique'))
                ->from('visitors_hits')
                ->where('created_at', '>=', time() - 24 * 60 * 60)
                ->find_all();
        foreach ($result AS $obj) {
            $chart['hits_tf'] += $obj->hits;
            $chart['unique_hits_tf'] += $obj->unique;
        }
        $chart['hits'] = number_format($chart['hits'], 0, '.', ',');
        $chart['unique_hits'] = number_format($chart['unique_hits'], 0, '.', ',');
        $chart['hits_tf'] = number_format($chart['hits_tf'], 0, '.', ',');
        $chart['unique_hits_tf'] = number_format($chart['unique_hits_tf'], 0, '.', ',');
        $this->success($chart);
    }

    /**
     * Remove ALL minified files from /Media/cache folder
     */
    public function clearMinifyCacheAction() {
        \Minify_Core::clearCache();
        $this->success();
    }

    /**
     * Transliterate incoming string
     * $this->post['source'] => incoming string
     */
    public function translitAction() {
        $this->success(array(
            'result' => Text::translit(Arr::get($this->post, 'source')),
        ));
    }

    /**
     * Set status to chosen row
     * $this->post['id'] => row ID
     * $this->post['table'] => table where status will be change
     * $this->post['current'] => current status 0/1
     */
    public function setStatusAction() {
        if (!isset($this->post['id'])) {
            die('Не указаны данные записи');
        }
        $status = (int) Arr::get($this->post, 'current', 0);
        if ($status) {
            $status = 0;
        } else {
            $status = 1;
        }
        $id = Arr::get($this->post, 'id', 0);
        $table = Arr::get($this->post, 'table', 0);
        DB::update($table)->set(array('status' => $status))->where('id', '=', $id)->execute();
        $this->success(array(
            'status' => $status
        ));
    }

    /**
     * Delete rows from table
     * $this->post['ids'] => array with IDs of rows we want to delete
     * $this->post['table'] => table where we want to delete rows
     */
    public function deleteMassAction() {
        if (!isset($this->post['ids'])) {
            die(__('Не указаны данные записи'));
        }
        $ids = Arr::get($this->post, 'ids', 0);
        $table = Arr::get($this->post, 'table', 0);
        if ($ids && is_array($ids) && count($ids)) {
            if ($table == 'catalog') {
                $images = DB::select('image')->from('catalog_images')->where('catalog_id', 'IN', $ids)->find_all();
                foreach ($images AS $im) {
                    Files::deleteImage($table, $im->image);
                }
            } else if ($table == 'catalog_tree') {
                $images = DB::select('image', 'menu')->from($table)->where('id', 'IN', $ids)->find_all();
                foreach ($images AS $im) {
                    Files::deleteImage('catalog-tree', $im->image);
                    Files::deleteImage('catalog-tree-menu', $im->menu);
                }
            } else if ($table == 'news') {
                $images = DB::select('image')->from($table)->where('id', 'IN', $ids)->find_all();
                foreach ($images AS $im) {
                    Files::deleteImage($table, $im->image);
                }
            } else if (Config::get('images.' . $table) && is_array(Config::get('images.' . $table))) {
                if (Common::checkField($table, 'image')) {
                    $images = DB::select('image')->from($table)->where('id', 'IN', $ids)->find_all();
                    foreach ($images AS $im) {
                        Files::deleteImage($table, $im->image);
                    }
                }
            }
            DB::delete($table)->where('id', 'IN', $ids)->execute();
            Message::GetMessage(1, __('Данные удалены!'));
        }
        $this->success();
    }

    /**
     * Set status to chosen rows
     * $this->post['ids'] => array with IDs of rows where we want to update status
     * $this->post['table'] => table where status will be change
     * $this->post['status'] => status we want
     */
    public function setStatusMassAction() {
        if (!isset($this->post['ids'])) {
            die(__('Не указаны данные записи'));
        }
        $status = (int) Arr::get($this->post, 'status', 0);
        $ids = Arr::get($this->post, 'ids', 0);
        $table = Arr::get($this->post, 'table', 0);
        if (!empty($ids)) {
            DB::update($table)->set(array('status' => $status))->where('id', 'IN', $ids)->execute();
            Message::GetMessage(1, __('Статусы изменены!'));
        }
        $this->success();
    }

    /**
     * Method to get uri with date parameters (filter widget in some lists)
     * $this->post["uri"] => current URL
     * $this->post["from"] => date from
     * $this->post["to"] => date to
     */
    public function getURIAction() {
        $uri = Arr::get($this->post, "uri");
        $date_s = Arr::get($this->post, "from");
        $date_po = Arr::get($this->post, "to");
        $uri = Support::generateLink('date_s', $date_s, $uri);
        $uri = Support::generateLink('date_po', $date_po, $uri);
        $this->success(array(
            'uri' => $uri,
        ));
    }

    /**
     * Set sortable in some table
     * $this->post['table'] => table where we want to sort rows
     * $this->post['json'] => tree with IDs in right order and depth in JSON format
     */
    public function sortableAction() {
        $table = Arr::get($this->post, 'table');
        $json = Arr::get($this->post, 'json');
        $arr = json_decode(stripslashes($json), true);

        function saveSort($arr, $table, $parentID, $i = 0) {
            foreach ($arr AS $a) {
                $inner = Common::checkField($table, 'parent_id');
                if ($inner) {
                    $data = array('sort' => $i, 'parent_id' => $parentID);
                } else {
                    $data = array('sort' => $i);
                }
                $id = Arr::get($a, 'id');
                Common::factory($table)->update($data, $id);
                $i++;
                $children = Arr::get($a, 'children', array());
                if (count($children)) {
                    if (!$inner) {
                        $i = saveSort($children, $table, $id, $i);
                    } else {
                        saveSort($children, $table, $id);
                    }
                }
            }
            return $i;
        }

        saveSort($arr, $table, 0);
        $this->success();
    }

    /**
     * Authorization to admin panel
     * $this->post['login'] => user login
     * $this->post['password'] => user password
     * $this->post['remember'] => does user want to remember his password
     */
    public function loginAction() {
        $login = Arr::get($this->post, 'login');
        $password = Arr::get($this->post, 'password');
        $remember = Arr::get($this->post, 'remember');
        $u = User::factory();
        $user = $u->get_user_if_isset($login, $password, 1);
        if (!$user OR $user->role == 'user') {
            $this->error(array(
                'msg' => __('Логин или пароль введены неверно!'),
            ));
        }
        $u->auth($user, $remember);
        $this->success();
    }

    /**
     * Switch any field between 0 & 1
     * $this->post['id'] => row ID
     * $this->post['table'] => table where field will be change
     * $this->post['field'] => field to change
     */
    public function change_fieldAction() {
        $id = (int) Arr::get($this->post, 'id');
        $field = Arr::get($this->post, 'field');
        $table = Arr::get($this->post, 'table');
        if (!$id) {
            die(__('Не указаны данные записи'));
        }
        $old = DB::select($field)->from($table)->where('id', '=', $id)->find();
        if (!$old) {
            die('No data to change!');
        }
        $old = $old->$field;
        $new = $old == 1 ? 0 : 1;
        $data = array();
        $data[$field] = $new;
        Common::factory($table)->update($data, $id);
        $this->success(array(
            'current' => $new
        ));
    }

    public function saveTranslationAction() {
        $lang = Arr::get($_POST, 'lang');
        $key = Arr::get($_POST, 'key');
        $value = Arr::get($_POST, 'value');
        $filename = Arr::get($_POST, 'filename');

        $path = HOST . '/Plugins/I18n/Translates/' . $lang . '/' . $filename . '.php';

        if (!is_file($path)) {
            die(json_encode(array(
                'success' => false,
                'msg' => 'No such file!',
            )));
        }

        $array = include $path;
        $array[$key] = $value;

        $text = "<?php";
        $text .= "\n\treturn array(";
        foreach ($array AS $key => $value) {
            $text .= "\n\t\t'" . str_replace("'", "\'", $key) . "' => '" . str_replace("'", "\'", $value) . "',";
        }
        $text .= "\n\t);";
        file_put_contents($path, $text);
        die(json_encode(array(
            'success' => true,
            'msg' => 'Done!',
        )));
    }

    public function addTranslationAction() {
        $_key = Arr::get($_POST, 'key');
        $filename = Arr::get($_POST, 'filename');
        foreach ($this->_languages AS $lang) {
            $path = HOST . '/Plugins/I18n/Translates/' . $lang['alias'] . '/' . $filename . '.php';
            if (!is_file($path)) {
                continue;
            }
            $array = include $path;
            $array[$_key] = Arr::get($_POST, $lang['alias']);
            $text = "<?php";
            $text .= "\n\treturn array(";
            foreach ($array AS $key => $value) {
                $text .= "\n\t\t'" . str_replace("'", "\'", $key) . "' => '" . str_replace("'", "\'", $value) . "',";
            }
            $text .= "\n\t);";
            file_put_contents($path, $text);
        }
        die(json_encode(array(
            'success' => true,
            'msg' => 'Done!',
        )));
    }

    public function saveTranslationBackendAction() {
        $lang = Arr::get($_POST, 'lang');
        $key = Arr::get($_POST, 'key');
        $value = Arr::get($_POST, 'value');

        $path = HOST . '/Plugins/I18n/TranslatesBackend/' . $lang . '/general.php';

        if (!is_file($path)) {
            die(json_encode(array(
                'success' => false,
                'msg' => 'No such file!',
            )));
        }

        $array = include $path;
        $array[$key] = $value;

        $text = "<?php";
        $text .= "\n\treturn array(";
        foreach ($array AS $key => $value) {
            $text .= "\n\t\t'" . str_replace("'", "\'", $key) . "' => '" . str_replace("'", "\'", $value) . "',";
        }
        $text .= "\n\t);";
        file_put_contents($path, $text);
        die(json_encode(array(
            'success' => true,
            'msg' => 'Done!',
        )));
    }

    public function addTranslationBackendAction() {
        $_key = Arr::get($_POST, 'key');
        foreach (Config::get('i18n.languages') AS $lang) {
            $path = HOST . '/Plugins/I18n/TranslatesBackend/' . $lang['alias'] . '/general.php';
            if (!is_file($path)) {
                continue;
            }
            $array = include $path;
            $array[$_key] = Arr::get($_POST, $lang['alias']);
            $text = "<?php";
            $text .= "\n\treturn array(";
            foreach ($array AS $key => $value) {
                $text .= "\n\t\t'" . str_replace("'", "\'", $key) . "' => '" . str_replace("'", "\'", $value) . "',";
            }
            $text .= "\n\t);";
            file_put_contents($path, $text);
        }
        die(json_encode(array(
            'success' => true,
            'msg' => 'Done!',
        )));
    }

}
