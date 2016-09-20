<div class="grid grid--1 grid--sm-2 grid--md-3 grid--lg-4 grid--justify-center grid--items-stretch">
    <?php foreach ($result as $obj): ?>
        <div class="grid__cell advantage">
            <div class="advantage__icon">
                <?php echo $obj->svg; ?>
            </div>
            <div class="advantage__title"><?php echo $obj->name; ?></div>
            <div class="advantage__text"><?php echo $obj->text; ?></div>
            <a href="<?php echo Core\HTML::link('advantage/' . $obj->alias) ?>"
               class="button button--inverse"><?php echo __('Подробнее'); ?></a>
        </div>
    <?php endforeach; ?>
</div>