<!-- (c) студия Wezom | www.wezom.com.ua -->
<!-- sensitive-imago | v#1.0 -->
<!-- sensitive-imago -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo isset($title) ? $title : NULL; ?></title>
<meta name="description" lang="en-us" content="<?php echo isset($description) ? $description : NULL; ?>">
<meta name="keywords" lang="en-us" content="<?php echo isset($keywords) ? $keywords : NULL; ?>">
<!-- Open Graph -->
<meta property="og:title" content="<?php echo isset($title) ? $title : NULL; ?>">
<meta property="og:type" content="website">
<meta property="og:site_name" content="<?php echo $_SERVER['HTTP_HOST']; ?>">
<meta property="og:url" content="<?php echo $_SERVER['HTTP_HOST']; ?>">
<meta property="og:description" content="<?php echo isset($description) ? $description : NULL; ?>">
<!-- Touch -->
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="address=no">
<!-- Responsive -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="target-densitydpi=device-dpi">
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<!-- Favicons -->
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo Core\HTML::media('favicons/apple-touch-icon.png'); ?>">
<link rel="icon" type="image/png" href="<?php echo Core\HTML::media('favicons/favicon-32x32.png'); ?>" sizes="32x32">
<link rel="icon" type="image/png" href="<?php echo Core\HTML::media('favicons/favicon-16x16.png'); ?>" sizes="16x16">
<link rel="manifest" href="<?php echo Core\HTML::media('manifest.json'); ?>">
<link rel="mask-icon" href="<?php echo Core\HTML::media('favicons/safari-pinned-tab.svg'); ?>" color="#5bbad5">
<meta name="msapplication-config" content="browserconfig.xml">
<meta name="theme-color" content="#ffffff">
<!-- saved from url=(0014)about:internet -->

<!--[if IE]><meta http-equiv="imagetoolbar" content="no"><![endif]-->
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->