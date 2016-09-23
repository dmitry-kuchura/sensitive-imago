<?php if (count($result)): ?>
    <section class="pageSection">
        <div class="pageSize">
            <div class="sectionTitle"><?php echo __('Отзывы наших пользователей'); ?></div>
            <div class="grid grid--2 grid--md-3 grid--space grid--justify-center">
                <?php foreach ($result as $obj): ?>
                    <?php $link = explode('?v=', $obj->youtube); ?>
                    <div class="grid__cell">
                        <a href="<?php echo $obj->youtube; ?>"
                           class="videoLink"
                           style='background-image: url("//img.youtube.com/vi/<?php echo $link[1]; ?>/maxresdefault.jpg");'></a>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="pageSection__footer">
                <a href="<?php echo Core\HTML::link('reviews'); ?>"
                   class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?></a>
            </div>
        </div>
    </section>
<?php endif; ?>