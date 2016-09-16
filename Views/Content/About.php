<div id="slider_else" class="slider_about">
    <?php foreach ($slider as $slide): ?>
        <div class="items_about">
            <div class="advantage advantage--lite">
                <div class="advantage__icon">
                    <img src="<?php echo Core\HTML::media('images/slider_simple/main/' . $slide->image) ?>" alt="">
                </div>
                <div class="advantage__title"><?php echo $slide->title; ?></div>
                <div class="advantage__text"><?php echo $slide->text; ?></div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<div class="wTxt"><?php echo $text; ?></div>
<div class="pageSection__footer">
    <a href="<?php echo Core\HTML::link('hidden/price'); ?>" class="button--in-sectionFooter button button--primary"><?php echo __('Узнать прайс'); ?></a>
</div>
