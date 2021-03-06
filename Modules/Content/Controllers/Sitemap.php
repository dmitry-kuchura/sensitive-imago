<?php
    namespace Modules\Content\Controllers;

    use Core\Common;
    use Core\CommonI18n;
    use Core\Config;
    use Core\Route;
    use Core\View;

    use Modules\Content\Models\Content;
    use Modules\Content\Models\Control;
    use Modules\News\Models\News;

    class Sitemap extends \Modules\Base {

        public $current;

        public function before() {
            parent::before();
            $this->current = Control::getRowSimple(Route::controller(), 'alias', 1);
            if( !$this->current ) {
                return Config::error();
            }
            $this->setBreadcrumbs( $this->current->name, $this->current->alias );
        }

        // Search list
        public function indexAction() {
            if( Config::get('error') ) {
                return false;
            }
            // Seo
            $this->_seo['h1'] = $this->current->h1;
            $this->_seo['title'] = $this->current->title;
            $this->_seo['keywords'] = $this->current->keywords;
            $this->_seo['description'] = $this->current->description;
            $this->_seo['seo_text'] = $this->current->text;

            // Get system pages
            $result = Control::getRows(1, 'sort');
            $control = array();
            foreach ($result as $obj) {
                $control[] = $obj;
            }

            // Get pages
            $result = Content::getRows(1, 'sort');
            $pages = array();
            foreach ($result as $obj) {
                $pages[$obj->parent_id][] = $obj;
            }

            // Get catalog groups
            $result = CommonI18n::factory('catalog_tree')->getRows(1, 'sort');
            $groups = array();
            foreach ($result as $obj) {
                $groups[$obj->parent_id][] = $obj;
            }

            // Get catalog groups
            $brands = CommonI18n::factory('brands')->getRows(1, 'sort');

            // Get news
            $news = News::getRows(1, 'date', 'DESC');

            // Render page
            $this->_content = View::tpl( array('pages' => $pages, 'groups' => $groups, 'news' => $news, 'brands' => $brands, 'control' => $control), 'Sitemap/Index' );
        }

    }