<?php use Core\Config; ?>
<?php $speed = Config::get('media.speed_info') * 1000; ?>
<?php if (count($kids)): ?>
<div class="slider-wrapper" id="slider_else_universal" data-duration="<?php echo $speed; ?>">
    <?php if (count($kids) > 4): ?>
        <div class="slider-arrow slider-arrow--prev"></div>
        <div class="slider-arrow slider-arrow--next"></div>
    <?php endif; ?>
    <?php foreach ($kids as $kid): ?>
        <?php
        if (is_file(HOST . Core\HTML::media('images/mechanism/main/' . $kid->image))) {
            $image = Core\HTML::media('images/mechanism/main/' . $kid->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        }
        ?>
        <div class="items_universal">
            <a href="<?php echo Core\HTML::link('mechanism/' . $kid->alias); ?>" class="advantage advantage--mini">
                <div class="advantage__icon" style="background-image: url('<?php echo $image; ?>');"></div>
                <div class="advantage__title"><span><?php echo $kid->name; ?></span></div>
                <div class="advantage__text"><?php echo $kid->short; ?></div>
            </a>
        </div>
    <?php endforeach; ?>
</div>
<?php endif; ?>

<div class="wTxt"><?php echo $result->text; ?></div>
<div class="pageSection__footer">
    <a href="<?php echo Core\HTML::link('hidden/price'); ?>"
       class="button--in-sectionFooter button button--primary js-mfp-ajax"><?php echo __('Узнать прайс'); ?></a>
</div>
