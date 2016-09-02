<?php
    namespace Wezom\Modules\Visitors\Models;

    use Core\QB\DB;

    class Hits extends \Core\Common {

        public static $table = 'visitors_hits';
        public static $filters;

        public function __counstruct() {
            static::$filters = array(
                'ip' => array(
                    'action' => 'LIKE',
                ),
                'status' => array(
                    'action' => '=',
                ),
                'device' => array(
                    'action' => '=',
                ),
            );
        }

    }