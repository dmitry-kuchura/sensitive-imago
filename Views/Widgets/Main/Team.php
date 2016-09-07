<section class="pageSection _bg-white">
    <div class="pageSize">
        <div class="sectionTitle"><?php echo __('Наша команда'); ?></div>
        <div class="grid grid--2 grid--sm-3 grid--lg-5 grid--justify-center personal personal--graphics">
            <?php foreach ($result as $doctor): ?>
                <?php
                if (is_file(HOST . Core\HTML::media('images/team/main/' . $doctor->image))) {
                    $image = Core\HTML::media('images/team/main/' . $doctor->image);
                } else {
                    $image = Core\HTML::media('pic/no-image.png');
                }
                ?>
                <div class="grid__cell person">
                    <div class="person__image" style="background-image: url('<?php echo $image; ?>');"></div>
                    <div class="person__name"><?php echo $doctor->name; ?></div>
                    <div class="person__position"><?php echo $doctor->position; ?></div>
                </div>
            <?php endforeach; ?>

        </div>
        <div class="pageSection__footer">
            <a href="<?php echo Core\HTML::link('team'); ?>" class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть всех'); ?></a>
        </div>
    </div>
</section>