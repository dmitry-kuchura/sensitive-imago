<?php if (count($result)): ?>
    <section class="pageSection _p-none pageSection--partialBg">
        <div class="pageSize">
            <div
                class="sectionTitle sectionTitle--small _color-white"><?php echo __('Смотрите видео о Сенситив Имаго'); ?></div>
            <div class="grid grid--2 grid--md-3 grid--space grid--justify-center">
                <?php foreach ($result as $video): ?>
                    <?php $link = explode('?v=', $video->alias); ?>
                    <div class="grid__cell">
                        <a href="<?php echo $video->alias; ?>" class="videoLink"
                           style='background-image: url("//img.youtube.com/vi/<?php echo $link[1]; ?>/mqdefault.jpg");'></a>
                    </div>
                <?php endforeach; ?>
            </div>
            <div class="pageSection__footer">
                <a href="<?php echo Core\HTML::link('video'); ?>" class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?></a>
            </div>
        </div>
    </section>
<?php endif; ?>