<?php

namespace Modules\Ajax\Controllers;

use Core\View;
use Core\QB\DB;
use Core\Arr;

class General extends \Modules\Ajax {

    public function getMoreNewsAction() {

        $lang = Arr::get($this->post, 'lang');
        $page = Arr::get($this->post, 'page');
        $limit = 4;
        $html = '';

        if ($page == 1) {
            $offset = 7;
        } else {
            $offset = (($page - 1) * $limit) + 7;
        }
        
//        var_dump($offset);
//        die;
        $result = DB::select('news.*', 'news_i18n.*')
                ->from('news')
                ->join('news_i18n', 'LEFT')->on('news_i18n.row_id', '=', 'news.id')
                ->where('news_i18n.language', '=', $lang)
                ->where('news.status', '=', 1)
                ->where('news.date', '<=', time())
                ->order_by('news.date', 'DESC')
                ->limit(4)
                ->offset($offset)
                ->find_all();

        foreach ($result as $news) {
            $html .= View::tpl(['news' => $news], 'News/List');
        }

        $more = count($result);

        $this->success(['html' => $html, 'more' => $more]);
    }

    public function getMoreProjectsAction() {

        $lang = Arr::get($this->post, 'lang');
        $page = Arr::get($this->post, 'page');
        $html = '';
        $limit = 3;

        if ($page == 1) {
            $offset = 5;
        } else {
            $offset = (($page - 1) * $limit) + 5;
        }

        $result = DB::select('projects.*', 'projects_i18n.*', ['category_i18n.name', 'cat_name'], ['projects.id', 'proj_id'])
                        ->from('projects')
                        ->join('projects_i18n', 'LEFT')->on('projects_i18n.row_id', '=', 'projects.id')
                        ->join('category_i18n', 'LEFT')->on('category_i18n.row_id', '=', 'projects.category_id')
                        ->where('projects_i18n.language', '=', $lang)
                        ->where('category_i18n.language', '=', $lang)
                        ->where('projects.status', '=', 1)
                        ->order_by('projects.id', 'ASC')
                        ->limit(3)
                        ->offset($offset)
                        ->find_all()->as_array();

        foreach ($result as $obj) {
            $obj->images = DB::select()->from('projects_images')->where('projects_id', '=', $obj->row_id)->find_all();
        }

        foreach ($result as $project) {
            $html .= View::tpl(['project' => $project], 'Projects/List');
        }

        $more = count($result);

        $this->success(['html' => $html, 'more' => $more]);
    }

}
