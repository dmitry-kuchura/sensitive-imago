<section class="pageSection _bg-secondary">
    <div class="pageSize">
        <div class="sectionTitle sectionTitle--white"><?php echo __('Модели приборов'); ?></div>
        <div class="grid grid--1 grid--sm-2 grid--space-x2">
            <?php foreach ($result as $obj): ?>
                <?php
                if (is_file(HOST . Core\HTML::media('images/equipment/main/' . $obj->image))) {
                    $image = Core\HTML::media('images/equipment/main/' . $obj->image);
                } else {
                    $image = Core\HTML::media('pic/no-image.png');
                }
                ?>
                <div class="grid__cell mediaBlock mediaBlock--inverse">
                    <a href="#" class="mediaBlock__image" style="background-image: url('<?php echo $image; ?>');"></a>
                    <div class="mediaBlock__content">
                        <div class="mediaBlock__title">
                            <a href="<?php echo Core\HTML::link('equipment/' . $obj->alias); ?>"
                               class="mediaBlock__overflow"><?php echo $obj->name; ?></a>
                        </div>
                        <div class="mediaBlock__text">
                            <div class="mediaBlock__textInner"><?php echo $obj->short; ?></div>
                        </div>
                        <span data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
                              data-param='{"id": <?php echo $obj->row_id; ?>}'
                              class="button button--inverse-white js-mfp-ajax"><?php echo __('Узнать прайс'); ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="pageSection__footer">
            <a href="<?php echo Core\HTML::link('equipment/models'); ?>"
               class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?></a>
        </div>
    </div>
</section>