<?php if (count($kids)): ?>
    <div id="slider_else_universal" class="slider_else_universal">
        <?php foreach ($kids as $kid): ?>
            <?php
            if (is_file(HOST . Core\HTML::media('images/technology/main/' . $kid->image))) {
                $image = Core\HTML::media('images/technology/main/' . $kid->image);
            } else {
                $image = Core\HTML::media('pic/no-image.png');
            }
            ?>
            <div class="items_universal">
                <a href="<?php echo Core\HTML::link('technology/' . $kid->alias); ?>" class="advantage advantage--mini">
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
    <a href="<?php echo Core\HTML::link('hidden/price'); ?>" data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
       class="button--in-sectionFooter button button--primary js-mfp-ajax"><?php echo __('Узнать прайс'); ?></a>
</div>
