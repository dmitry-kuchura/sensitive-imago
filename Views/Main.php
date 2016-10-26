<!DOCTYPE html>
<html lang="<?php echo Core\HTML::langHead(\I18n::$lang); ?>" dir="ltr" class="no-js">
    <head>
        <?php echo Core\Widgets::get('Head', $_seo); ?>
        <?php foreach ($_seo['scripts']['head'] as $script): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <?php echo $GLOBAL_MESSAGE; ?>
    </head>
    <body class="indexPage">
        <?php foreach ( $_seo['scripts']['body'] as $script ): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <div class="pageWrapper">
            <?php echo Core\Widgets::get('Header'); ?>
            <div class="pageContainer">
                <?php echo Core\Widgets::get('Main_Side'); ?>
                <?php echo Core\Widgets::get('Main_Capabilities'); ?>
                <?php echo Core\Widgets::get('Main_Video'); ?>
                <?php echo Core\Widgets::get('Main_Advantage'); ?>
                <?php echo Core\Widgets::get('Main_Price'); ?>
                <?php echo Core\Widgets::get('Main_Team'); ?>
                <?php echo Core\Widgets::get('Main_Review'); ?>
                <?php echo Core\Widgets::get('Main_Clients'); ?>
                <?php echo Core\Widgets::get('Main_Devices'); ?>
                <?php echo Core\Widgets::get('Main_News'); ?>
            </div>
            <?php echo Core\Widgets::get('Footer'); ?>
        </div>
        <?php echo Core\Widgets::get('HiddenData'); ?>
    </body>
</html>