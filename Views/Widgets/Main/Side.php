<section class="pageSection">
    <div class="pageSize bg-doctor">
        <div class="pageSection__topText">
            <?php echo str_replace(['<p>', '</p>'], '', Core\Config::get('index.top_' . I18n::$lang)); ?>
            <br>
            <b><?php echo Core\Config::get('index.title_' . I18n::$lang); ?></b>
        </div>
        <div class="layeredBlock">
            <div class="layeredBlock__bottom"></div>
            <svg class="layeredBlock__arrow">
            <use xlink:href="<?php echo Core\HTML::media('sprite.svg#curve_arrow'); ?>"></use>
            </svg>
            <div class="layeredBlock__top">
                <p class="layeredBlock__description"><?php echo Core\Config::get('index.description_' . I18n::$lang); ?></p>
            </div>
        </div>
    </div>
</section>