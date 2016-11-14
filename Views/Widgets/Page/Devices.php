<section class="pageSection _bg-white">
    <div class="pageSize">
        <div class="sectionTitle"><?php echo __('Модели приборов'); ?></div>
        <div class="grid grid--1 grid--sm-2 grid--space-x2">
            <?php foreach ($result as $obj): ?>
                <?php
                if (is_file(HOST . Core\HTML::media('images/equipment/main/' . $obj->image))) {
                    $image = Core\HTML::media('images/equipment/main/' . $obj->image);
                } else {
                    $image = Core\HTML::media('pic/no-image.png');
                }
                ?>
                <div class="grid__cell mediaBlock">
                    <a href="<?php echo Core\HTML::link('models/' . $obj->alias); ?>" class="mediaBlock__image" style="background-image: url('<?php echo $image; ?>');"></a>
                    <div class="mediaBlock__content">
                        <div class="mediaBlock__title"><a
                                href="<?php echo Core\HTML::link('equipment/' . $obj->alias); ?>"
                                class="mediaBlock__overflow"><?php echo $obj->name; ?></a>
                        </div>
                        <div class="mediaBlock__text">
                            <div class="mediaBlock__textInner"><?php echo $obj->short; ?></div>
                        </div>
                        <a href="<?php echo Core\HTML::link('hidden/price'); ?>"
                           data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
                           data-param='{"id": <?php echo $obj->row_id; ?>}'
                           class="button button--inverse js-mfp-ajax"><?php echo __('Узнать прайс'); ?></a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="pageSection__footer">
            <a
                href="<?php echo Core\HTML::link('equipment/models'); ?>"
                class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?>
            </a>
        </div>
        <?php
        /*
         * http://wezom.worksection.com/project/138481/4100712/4112247/
         * <hr>
        <div class="grid grid--justify-center grid--md-justify-between grid--items-end">
            <div class="grid__cell grid__cell--grow grid__cell--sm-nogrow">
                <div class="shareBlock">
                    <div class="shareBlock__title"><?php echo __('Понравилась страница'); ?>?</div>
                    <div class="shareBlock__text"><?php echo __('Расскажите друзьям'); ?></div>
                    <svg class="shareBlock__arrow">
                        <use xlink:href="<?php echo Core\HTML::media('sprite.svg#share_arrow'); ?>"></use>
                    </svg>
                    <img src="<?php echo Core\HTML::media('pic/share.png'); ?>" alt="">
                </div>
            </div>
            <div class="grid__cell">

            </div>
        </div>*/
        ?>
    </div>
</section>