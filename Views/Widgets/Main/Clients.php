<section class="pageSection _bg-white">
    <div class="pageSize">
        <div class="sectionTitle"><?php echo __('Отзывы наших пациентов'); ?></div>
        <div class="grid grid--1 grid--sm-2 grid--md-3 grid--justify-center textReviews textReviews--small">
            <?php foreach ($result as $review): ?>
                <div class="grid__cell textReview">
                    <svg class="textReview__icon">
                        <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes'); ?>"></use>
                    </svg>
                    <div class="textReview__name"><?php echo $review->name; ?></div>
                    <div class="textReview__subtitle"><?php echo $review->title; ?></div>
                    <div class="textReview__divider"></div>
                    <div class="textReview__text"><?php echo Core\Text::limit_words($review->text, 370); ?></div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="pageSection__footer">
            <a href="<?php echo Core\HTML::link('reviews'); ?>" class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?></a>
        </div>
    </div>
</section>