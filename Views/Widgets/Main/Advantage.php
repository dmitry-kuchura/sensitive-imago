<section class="pageSection _bg-white">
    <div class="pageSize">
        <div class="sectionTitle"><?php echo __('Наши приемущества'); ?></div>
        <div class="grid grid--1 grid--sm-2 grid--md-3 grid--lg-4 grid--justify-center grid--items-stretch">
            <?php foreach ($result as $obj): ?>
                <div class="grid__cell advantage">
                    <div class="advantage__icon">
                        <img src="pic/advantage-icon8.svg" alt="">
                    </div>
                    <div class="advantage__title"><?php echo $obj->name; ?></div>
                    <div class="advantage__text">Возможность покупки в рассрочку</div>
                    <a href='#' class="button button--inverse">Подробнее</a>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>