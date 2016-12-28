<?php if (count($slider)): ?>
    <div class="slider-wrapper" id="slider_else_universal" data-duration="<?php echo $speed; ?>">
        <?if (count($slider) > 4): ?>
            <div class="slider-arrow slider-arrow--prev"></div>
            <div class="slider-arrow slider-arrow--next"></div>
        <?php endif; ?>
        <div class="slider_else_universal">
            <?php foreach ($slider as $kid): ?>
                <?php
                if (is_file(HOST . Core\HTML::media('images/advantage/main/' . $kid->image))) {
                    $image = Core\HTML::media('images/advantage/main/' . $kid->image);
                } else {
                    $image = Core\HTML::media('pic/no-image.png');
                }
                ?>
                <div class="items_universal">
                    <div class="advantage advantage--lite">
                        <div class="advantage__icon">
                            <img src="<?php echo Core\HTML::media('images/slider_simple/main/' . $kid->image) ?>" alt="">
                        </div>
                        <div class="advantage__title"><?php echo $kid->title; ?></div>
                        <div class="advantage__text"><?php echo $kid->text; ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>
<div class="wTxt"><?php echo $text; ?></div>
<div class="pageSection__footer">
    <a href="<?php echo Core\HTML::link('hidden/price'); ?>" data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
       class="button--in-sectionFooter button button--primary js-mfp-ajax"><?php echo __('Узнать прайс'); ?></a>
</div>