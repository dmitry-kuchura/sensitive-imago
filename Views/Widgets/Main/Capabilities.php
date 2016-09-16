<section class="pageSection _bg-white">
    <div class="pageSize" style="position: relative;">
        <div class="sectionTitle"><?php echo __('Основные возможности оборудования'); ?></div>
        <div class="grid grid--space grid--1 grid--sm-2 grid--lg-3">
            <div class="grid__cell">
                <p><b><?php echo __('Диагностика у пациента'); ?>:</b></p>
                <ul class="customList">
                    <?php foreach ($vista[0] AS $key => $value): ?>
                        <li><?php echo $value->name; ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="grid__cell _pr-x3">
                <p><b><?php echo __('Лечебные возможности'); ?>:</b></p>
                <ul class="customList">
                    <?php foreach ($vista[1] AS $key => $value): ?>
                        <li><?php echo $value->name; ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
        <img class="compatibilityImage" src="<?php echo Core\HTML::media('pic/complex.png'); ?>" alt="">
    </div>
</section>