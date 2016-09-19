<div class="wTxt">
    <div class="modelPreviews grid mfi-gallery">
        <div class="grid__cell grid__cell--12">
            <a href="<?php echo Core\HTML::media('images/equipment/original/' . $result->image); ?>" class="modelPreview"
               style="background-image: url('<?php echo Core\HTML::media('images/equipment/main/' . $result->image); ?>');"></a>
        </div>
        <?php foreach ($images as $im): ?>
            <div class="grid__cell grid__cell--4">
                <a href="<?php echo Core\HTML::media('images/equipment/original/' . $im->image); ?>" class="modelPreview"
                   style="background-image: url('<?php echo Core\HTML::media('images/equipment/main/' . $im->image); ?>');"></a>
            </div>
        <?php endforeach; ?>
        <div class="_hide">
            <a href="images/index_new1.jpg"></a>
            <a href="images/index_new2.jpg"></a>
            <a href="images/index_new3.jpg"></a>
            <a href="images/index_new4.jpg"></a>
        </div>
    </div>
    <?php echo str_replace('<ol>', '<ol class="customList">', $result->text); ?>
</div>
<hr>
<div class="grid grid--justify-center grid--md-justify-between grid--items-end">
    <div class="grid__cell grid__cell--grow grid__cell--sm-nogrow">
        <div class="shareBlock">
            <div class="shareBlock__title"><?php echo __('Понравилась страница'); ?>?</div>
            <div class="shareBlock__text"><?php echo __('Расскажите друзьям'); ?></div>
            <svg class="shareBlock__arrow">
                <use xlink:href="<?php echo Core\HTML::media('hidden/sprite.svg#share_arrow'); ?>"></use>
            </svg>
            <img src="<?php echo Core\HTML::media('css/pic/share.png'); ?>" alt="">
        </div>
    </div>
    <div class="grid__cell buttonsArray">
        <a href="#" class="button button--primary button--in-sectionFooter _mb">УЗНАТЬ ПРАЙС</a>
        <a href="#" class="button button--link button--in-sectionFooter">ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</a>
    </div>
</div>
