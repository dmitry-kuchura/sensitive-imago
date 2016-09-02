<!DOCTYPE html>
<html lang="ru-RU" dir="ltr" class="no-js">
    <head>
        <!-- (c) студия Wezom | www.wezom.com.ua-->
        <!-- wTPL | v#{locals.version}-->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Страница | Верстка | (c) студия Wezom | www.wezom.com.ua</title>
        <meta name="description" lang="ru-ru" content="">
        <meta name="keywords" lang="ru-ru" content="студия wezom, разработка сайтов">
        <meta name="keywords" lang="en-us" content="studio wezom, web development">
        <meta name="author" lang="ru-ru" content="">
        <!-- Open Graph -->
        <meta property="og:title" content="Заголовок страницы">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="site.com">
        <meta property="og:url" content="http://site.com/current-page">
        <meta property="og:description" content="краткий текст (новости, товара и т.д)">
        <!-- Touch -->
        <meta name="format-detection" content="telephone=no">
        <meta name="format-detection" content="address=no">
        <!--Responsive-->
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport" content="target-densitydpi=device-dpi">
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <!-- saved from url=(0014)about:internet -->
        <!--[if IE]><meta http-equiv="imagetoolbar" content="no"><![endif]-->
        <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
        <!-- localStorage test -->
        <script>
            !function (t) {
                function r() {
                    var t = navigator.userAgent, r = !window.addEventListener || t.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !t.match(/Chrome/);
                    if (r)
                        return!1;
                    var e = "test";
                    try {
                        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                    } catch (o) {
                        return!1
                    }
                }
                t.localSupport = r(), t.localWrite = function (t, r) {
                    try {
                        localStorage.setItem(t, r)
                    } catch (e) {
                        if (e == QUOTA_EXCEEDED_ERR)
                            return!1
                    }
                }
            }(window);
        </script>
        <!-- Favicons -->
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="manifest.json">
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="favicons/mstile-144x144.png">
        <meta name="msapplication-config" content="browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
    </head>
    <body class="errorPage">
        <div class="errorWrapper">
            <div class="errorHolder">
                <div class="errorContent">
                    <div class="errorHeader">404</div>
                    <div class="wTxt">
                        <h3><?php echo __('Страница не найдена'); ?></h3>
                        <p><em><?php echo __('К сожалению');?></em> <br> <?php echo __('Перейти'); ?> <a href="<?php echo Core\HTML::link(); ?>"><?php echo __('главную страницу'); ?></a></p>
                    </div>
                </div>
            </div>
        </div>

<?php echo \Core\Widgets::get('HiddenData'); ?>
        <link rel="stylesheet" href="<?php echo \Core\HTML::media('css/components.css'); ?>">
        <link rel="stylesheet" href="<?php echo \Core\HTML::media('css/error.css'); ?>">
        <script src="<?php echo \Core\HTML::media('js/libs.js'); ?>"></script>
    </body>
</html>