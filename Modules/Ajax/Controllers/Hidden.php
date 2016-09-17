<?php

namespace Modules\Ajax\Controllers;

use Core\View;
use Core\QB\DB;
use Core\Arr;

class Hidden extends \Modules\Ajax
{

    public function priceAction()
    {
        echo View::tpl([], 'Hidden/Price');
        die;
    }

    public function regionAction()
    {
        echo View::tpl([], 'Hidden/Region');
        die;
    }

}
