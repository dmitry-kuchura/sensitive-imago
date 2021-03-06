<?php
    namespace Core;

    class Support {

        public static function price($price, $number = false, $discount = true) {
            if($discount) {
                $price = number_format($price * (1 - User::discount() / 100), 2, '.', '');
            }
            if(Cookie::get('currency') == 'BGN' || Cookie::get('currency') == 'UAH') {
                $price *= Config::get('basic.'.Cookie::get('currency'));
                $price = number_format($price, 2, '.', '');
            }
            if($number) {
                return $price;
            }
            return static::pricePretty($price);
        }
        public static function usd($price, $currency, $number = false) {
            if($currency != '$') {
                if(!Config::get('basic.'.static::getCurrency($currency))) {
                    $price = 0;
                } else {
                    $price /= Config::get('basic.'.static::getCurrency($currency));
                }
                $price = number_format($price, 2, '.', '');
            }
            if($number) {
                return $price;
            }
            return static::pricePretty($price);
        }
        public static function pricePretty($price, $sign = NULL) {
            if($sign === NULL) {
                $sign = static::getSign();
            }
            switch($sign) {
                case 'грн':
                    $price = number_format($price, 2, ',', '').' грн.';
                    break;
                default:
                    $price = $sign.number_format($price, 2, ',', '');
                    break;
            }
            return $price;
        }
        public static function getSign() {
            return Config::get('order.currency.'.Cookie::get('currency', 'USD'));
        }
        public static function getCurrency($currency) {
            $all = Config::get('order.currency');
            foreach($all AS $key => $value) {
                if($value == $currency) {
                    return $key;
                }
            }
            return 'USD';
        }
        public static function sort_link() {
            $link = $_SERVER['REQUEST_URI'];
            $arr = explode('?', $link);
            $get = array();
            $__arr = explode('&', $arr[1]);
            foreach($__arr AS $key => $value) {
                if($value) {
                    $ppp = explode('=', $value);
                    $get[$ppp[0]] = $ppp[1];
                }
            }
            if(isset($get['order-by-new'])) {
                unset($get['order-by-new']);
            } else {
                $get['order-by-new'] = 1;
            }
            if(!count($get)) {
                return HTML::link($arr[0]);
            }
            $__arr = array();
            foreach($get AS $key => $value) {
                $__arr[] = $key.'='.$value;
            }
            return HTML::link($arr[0].'?'.implode('&', $__arr));
        }




        public static function addItemTag($obj) {
            if( $obj->sale ) {
                return '<div class="splash2"><span>акция</span></div>';
            }
            if( $obj->top ) {
                return '<div class="splash3"><span>популярное</span></div>';
            }
            if( $obj->new AND time() - (int) $obj->new_from < Config::get('basic.new_days') * 24 * 60 * 60 ) {
                return '<div class="splash"><span>новинка</span></div>';
            }
        }

        public static function getRootParent( $result, $id ) {
            if( !$id ) {
                return 0;
            }
            foreach( $result AS $obj ) {
                if( $obj->id == $id ) {
                    if( $obj->parent_id == 0 ) {
                        return $obj->id;
                    } else {
                        return Support::getRootParent( $result, $obj->parent_id);
                    }
                }
            }
        }

        public static function addZero( $number ) {
            $string = (string) $number;
            if( strlen( $string ) == 2 ) {
                return $string;
            }
            return '0' . $string;
        }

        public static function getHumanDateRange( $from, $to ) {
            if( $from == $to ) {
                return date( 'd', $from ) . '&nbsp;' . Dates::month( date( 'm', $from ) );
            }
            if( date( 'm', $from ) == date( 'm', $to ) ) {
                return date( 'd', $from ) . ' — ' . date( 'd', $to ) . '&nbsp;' . Dates::month( date( 'm', $from ) );
            }
            return date( 'd', $from ) . '&nbsp;' . Dates::month( date( 'm', $from ) ) . ' — ' . date( 'd', $to ) . '&nbsp;' . Dates::month( date( 'm', $to ) );
        }

        public static function firstWordInSpan( $string ) {
            $words = explode( ' ', $string );
            $words[ 0 ] = '<span>' . $words[ 0 ] . '</span>';
            $string = implode( ' ', $words );
            return $string;
        }

        public static function firstWordWithBr( $string ) {
            $words = explode( ' ', $string );
            $words[ 0 ] = $words[ 0 ] . '<br />';
            $string = implode( ' ', $words );
            return $string;
        }

        public static function firstWordInSpanWithBr( $string ) {
            $words = explode( ' ', $string );
            $words[ 0 ] = '<span>' . $words[ 0 ] . '</span><br />';
            $string = implode( ' ', $words );
            return $string;
        }

        // Options/optgroups tree for tag select
        public static function getSelectOptions( $filename, $table, $parentID = NULL, $currentElement = 0, $sort = 'sort', $parentAlias = 'parent_id' ) {
            if ($filename != 'Catalog/Items/Select') {
                $current = Route::param('id');
            } else {
                $current = 0;
            }
            $tree = array();
//            $result = DB::select()->from($table)->order_by($sort)->as_object()->execute();
            $result = CommonI18n::factory($table, $table.'_i18n')->getRows(NULL, $sort);
            foreach( $result AS $obj ) {
                if ( !$current ) {
                    $tree[$obj->$parentAlias][] = $obj;
                } else if ( $obj->parent_id != $current AND $obj->id != $current ) {
                    $tree[$obj->$parentAlias][] = $obj;
                }
            }
            return View::tpl( array( 
                    'result' => $tree,
                    'currentParent' => 0,
                    'space' => '',
                    'filename' => $filename,
                    'parentID' => $parentID,
                    'parentAlias' => $parentAlias,
                    'currentID' => $currentElement,
            ), $filename );
        }

        // Get human readable date range for admin filter widget
        public static function getWidgetDatesRange() {
            $dates = array();
            if( Arr::get($_GET, 'date_s') ) {
                $dates[] = Support::getWidgetDate( Arr::get($_GET, 'date_s') );
            }
            if( Arr::get($_GET, 'date_po') AND Arr::get($_GET, 'date_s') != Arr::get($_GET, 'date_po') ) {
                $dates[] = Support::getWidgetDate( Arr::get($_GET, 'date_po') );
            }
            return implode(' - ', $dates);
        }

        // Get human readable date range
        public static function getWidgetDate( $date ) {
            $time = strtotime($date);
            return date('j', $time) . ' ' . Dates::month(date('m', $time)) . ' ' . date('Y', $time);
        }

        // Generate link for filters in wezom
        public static function generateLink( $key, $value = NULL, $fakeLink = NULL ) {
            $link = $fakeLink ? $fakeLink : Arr::get($_SERVER, 'REQUEST_URI');
            $uri = explode('?', $link);

            $__get = array();
            if(count($uri) > 1) {
                $arr  = explode('&', $uri[1]);
                foreach($arr AS $_a) {
                    $g   = urldecode($_a);
                    $g   = strip_tags($g);
                    $g   = stripslashes($g);
                    $g   = trim($g);
                    $___get = explode('=', $g);
                    $__get[$___get[0]] = $___get[1];
                }
            }

            if( $value === NULL ) {
                if( !isset($__get[$key]) ) {
                    return $link;
                }
                $arr = explode('&', $uri[1]);
                $get = array();
                foreach( $arr AS $el ) {
                    $h = explode( '=', $el );
                    if( $key != $h[0] ) {
                        $get[] = $h[0].'='.$h[1];
                    }
                }
                $uri[1] = implode('&', $get);
                if( $uri[1] ) {
                    return $uri[0].'?'.$uri[1];
                }
                return $uri[0];
            }
            
            if( !isset( $__get[$key] ) ) {
                if( isset($uri[1]) ) {
                    return Arr::get($uri, 0).'?'.Arr::get($uri, 1).'&'.$key.'='.$value;
                }
                return Arr::get($uri, 0).'?'.$key.'='.$value;
            }
            if( Arr::get($__get, $key) == $value ) {
                return $link;
            }
            $arr = explode('&', $uri[1]);
            $get = array();
            foreach( $arr AS $el ) {
                $h = explode( '=', $el );
                if( $key == $h[0] ) {
                    $get[] = $key.'='.$value;
                } else {
                    $get[] = $h[0].'='.$h[1];
                }
            }

            $uri[1] = implode('&', $get);
            return $uri[0].'?'.$uri[1];
        }

    }