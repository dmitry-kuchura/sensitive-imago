<!DOCTYPE html>
<html lang="ru-RU" dir="ltr" class="no-js">
    <head>
        <?php echo Core\Widgets::get('Head'); ?>
        <?php foreach ($_seo['scripts']['head'] as $script): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <?php echo $GLOBAL_MESSAGE; ?>
    </head>
    <body class="innerPage">
        <div class="pageWrapper">
            <?php echo Core\Widgets::get('Header'); ?>
            <div class="pageContainer">
                <div class="pageSection">
                    <div class="pageSize">
                        <div class="grid grid--md-nowrap">
                            <?php echo Core\Widgets::get('Page_Aside'); ?>
                            <div class="grid__cell grid__cell--grow grid__cell--order-start grid__cell--md-noorder">
                                <section class="pageCenter">
                                    <?php echo $_breadcrumbs; ?>
                                    <?php echo $_content; ?>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            <?php echo Core\Widgets::get('Page_Devices'); ?>
            </div>
            <?php echo Core\Widgets::get('Footer'); ?>
        </div>
        <?php echo Core\Widgets::get('HiddenData'); ?>
    </body>
</html>
