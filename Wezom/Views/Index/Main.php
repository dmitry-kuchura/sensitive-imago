<div class="rowSection clearFix row-bg">
    <div class="col-sm-6 col-md-3">
        <div class="statbox widget box box-shadow">
            <div class="widgetContent">
                <div class="visual cyan">
                    <i class="fa-shopping-cart"></i>
                </div>
                <div class="title">
                    <?php echo __('Заказы подробного отчета'); ?>
                </div>
                <div class="value">
                    <?php echo $count_orders; ?>
                </div>
                <a href="/wezom/feedback/index" class="more"><?php echo __('Подробнее'); ?> <i class="pull-right fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-3">
        <div class="statbox widget box box-shadow">
            <div class="widgetContent">
                <div class="visual green">
                    <i class="fa-comments-o"></i>
                </div>
                <div class="title">
                    <?php echo __('Обратная связь'); ?>
                </div>
                <div class="value">
                    <?php echo $count_contacts; ?>
                </div>
                <a href="/wezom/contacts/index" class="more"><?php echo __('Подробнее'); ?> <i class="pull-right fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-3">
        <div class="statbox widget box box-shadow">
            <div class="widgetContent">
                <div class="visual yellow">
                    <i class="fa-check-square-o"></i>
                </div>
                <div class="title">
                    <?php echo __('Проекты'); ?>
                </div>
                <div class="value">
                    <?php echo $count_projects; ?>
                </div>
                <a href="/wezom/projects/index" class="more"><?php echo __('Подробнее'); ?> <i class="pull-right fa-angle-right"></i></a>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-3">
        <div class="statbox widget box box-shadow">
            <div class="widgetContent">
                <div class="visual black">
                    <i class="fa-rss"></i>
                </div>
                <div class="title">
                    <?php echo __('Новости'); ?>
                </div>
                <div class="value">
                    <?php echo $count_news; ?>
                </div>
                <a href="/wezom/news/index" class="more"><?php echo __('Подробнее'); ?> <i class="pull-right fa-angle-right"></i></a>
            </div>
        </div>
    </div>
</div>

<?php echo \Core\Widgets::get('Index_Visitors'); ?>

<?php if (\Core\User::god()): ?>
    <div class="rowSection clearFix">
        <div class="col-md-6">
            <div class="widget">
                <?php echo \Core\Widgets::get('Index_Log'); ?>
            </div>
        </div>
        <div class="col-md-6">
            <div class="widget">
                <?php echo \Core\Widgets::get('Index_News'); ?>
            </div>
        </div>
    </div>
    <?php echo \Core\Widgets::get('Index_Readme'); ?>
<?php else: ?>
    <div class="rowSection clearFix">
        <div class="col-md-6">
            <div class="widget">
                <?php echo \Core\Widgets::get('Index_News'); ?>
            </div>
        </div>
    </div>
<?php endif; ?>