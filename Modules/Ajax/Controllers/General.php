<?php

namespace Modules\Ajax\Controllers;

use Core\View;
use Core\QB\DB;
use Core\Arr;

class General extends \Modules\Ajax {

    public function getMoreVideoReviewsAction() {

        $lang = Arr::get($this->post, 'lang');
        $page = Arr::get($this->post, 'page');
        $limit = 3;
        $html = '';

        if ($page == 1) {
            $offset = 3;
        } else {
            $offset = (($page - 1) * $limit);
        }

        $result = DB::select()->from('video_reviews')
                ->where('language', '=', $lang)
                ->where('status', '=', 1)
                ->limit(3)
                ->offset($offset)
                ->order_by('id', 'DESC')
                ->find_all();
        
        foreach ($result as $video) {
            $html .= View::tpl(['video' => $video, 'page' => $page], 'Reviews/Ajax');
        }
        
//        print_r($html);
//        die;

        $more = count($result);

        $this->success(['html' => $html, 'more' => $more]);
    }

}
