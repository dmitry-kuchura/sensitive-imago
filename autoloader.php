<?php
    // Uncomment next row if multilang needs
    // require_once 'Plugins/I18n/I18n.php';

    // Autoload
    function autoload($className) {
        if(strpos($className, 'PHPExcel') !== FALSE || strpos($className, 'Minify') !== FALSE) {
            if( $className == 'PHPExcel' ) {
                $className = 'PHPExcel_PHPExcel';
            }
            $fileName = HOST.'/Plugins/'.str_replace('_', DIRECTORY_SEPARATOR, $className).'.php';
            if(file_exists($fileName)) {
                require_once $fileName;
                return false;
            }
        }
        // If I18n
        $arr = explode('\\', $className);
        if (end($arr) == 'I18n') {
            require HOST.'/Plugins/I18n/I18n.php';
            return false;
        }
        // else
        $className = ltrim($className, '\\');
//        echo '<br/><br/>';
//        var_dump($className);
        $fileName  = '';
        if ($lastNsPos = strrpos($className, '\\')) {
            $namespace = substr($className, 0, $lastNsPos);
            $className = substr($className, $lastNsPos + 1);
            $fileName  = str_replace('\\', DIRECTORY_SEPARATOR, $namespace) . DIRECTORY_SEPARATOR;
        }
//        var_dump($className);
//        var_dump($fileName);
        $fileName .= str_replace('_', DIRECTORY_SEPARATOR, $className).'.php';
//        var_dump($fileName);
        require $fileName;
    }
    spl_autoload_register('autoload');