<div class="textReview" data-page="<?php echo $page; ?>">
    <svg class="textReview__icon">
        <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes') ?>"></use>
    </svg>
    <div class="textReview__rating">
        <span class="rating__stars" data-rating="<?php echo $review->mark; ?>">
            <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
            <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
            <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
            <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
            <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
        </span>
    </div>
    <div class="textReview__name"><?php echo $review->name; ?></div>
    <div class="textReview__subtitle"><?php echo $review->title; ?></div>
    <div class="textReview__divider"></div>
    <div class="textReview__text">
        <div class="textReview__textInner"><?php echo $review->text; ?></div>
    </div>
    <div class="textReview__footer">
        <div class="textReview__moreLink"
             data-text="<?php echo __('Скрыть'); ?>"><?php echo __('Читать отзыв полностью'); ?> <span
                class="textReview__arrow"></span></div>
        <div class="textReview__place"><?php echo $review->city; ?></div>
    </div>
</div>