<!DOCTYPE html>
<html lang="<?php echo \I18n::$lang; ?>" dir="ltr">
    <head>
        <?php echo Core\Widgets::get('Head'); ?>
        <?php foreach ($_seo['scripts']['head'] as $script): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <?php echo $GLOBAL_MESSAGE; ?>
    </head>
    <body>
        <?php foreach ($_seo['scripts']['body'] as $script): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <div class="wWrapper">
            <?php echo Core\Arr::get($_widgets, 'Header'); ?>
            <div class="wContainer">
                <?php echo Core\Widgets::get('Main_Slider'); ?>
                <?php echo Core\Widgets::get('Main_About'); ?>
                <?php echo Core\Widgets::get('Main_Services'); ?>
                <?php echo Core\Widgets::get('Main_Works'); ?>
                <?php echo Core\Widgets::get('Main_News'); ?>
                <?php echo Core\Widgets::get('Main_Contacts'); ?>
            </div>
        </div>
        <?php echo Core\Widgets::get('Footer'); ?>
        <?php echo Core\Widgets::get('HiddenData'); ?>
    </body>
</html>