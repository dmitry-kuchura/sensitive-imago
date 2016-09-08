<div class="sectionTitle sectionTitle--inner">Отзывы наших пользователей</div>
<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space grid--justify-center	">
    <div class="grid__cell">
        <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
           style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
    </div>

    <div class="grid__cell">
        <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
           style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
    </div>

    <div class="grid__cell">
        <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
           style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
    </div>

</div>
<div class="pagination">
    <a class="pagination__link pagination__link--prev" href="#">&lt;</a>
    <span class="pagination__link is-active">1</span>
    <a class="pagination__link" href="#">2</a>
    <a class="pagination__link" href="#">3</a>
    <a class="pagination__link" href="#">4</a>
    <a class="pagination__link" href="#">5</a>
    <a class="pagination__link" href="#">6</a>
    <a class="pagination__link" href="#">7</a>
    <a class="pagination__link pagination__link--next" href="#">&gt;</a>
</div>
<div class="sectionTitle sectionTitle--inner _mt-x3"><?php echo __('Отзывы наших пациентов'); ?></div>

<div class="textReviews textReviews--full">
    <?php foreach ($result as $obj): ?>
        <div class="textReview">
            <svg class="textReview__icon">
                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes') ?>"></use>
            </svg>
            <div class="textReview__name"><?php echo $obj->name; ?></div>
            <div class="textReview__subtitle"><?php echo $obj->title; ?></div>
            <div class="textReview__divider"></div>
            <div class="textReview__text">
                <div class="textReview__textInner"><?php echo $obj->text; ?></div>
            </div>
            <div class="textReview__footer">
                <div class="textReview__moreLink"
                     data-text="<?php echo __('Скрыть'); ?>"><?php echo __('Читать отзыв полностью'); ?> <span
                        class="textReview__arrow"></span></div>
                <div class="textReview__place"><?php echo $obj->city; ?></div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<div class="pagination">
    <a class="pagination__link pagination__link--prev" href="#">&lt;</a>
    <span class="pagination__link is-active">1</span>
    <a class="pagination__link" href="#">2</a>
    <a class="pagination__link" href="#">3</a>
    <a class="pagination__link" href="#">4</a>
    <a class="pagination__link" href="#">5</a>
    <a class="pagination__link" href="#">6</a>
    <a class="pagination__link" href="#">7</a>
    <a class="pagination__link pagination__link--next" href="#">&gt;</a>
</div>
<div class="sectionTitle sectionTitle--inner _mt-x2"><?php echo __('Оставить отзыв'); ?>
    <svg class="reviewsForm__decor">
        <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes') ?>"></use>
    </svg>
</div>
<div class="reviewsForm js-form form" data-form="true" data-ajax="review">
    <div class="grid grid--space grid--items-center">
        <div class="grid__cell">
            <input class="form__input" type="text" name="name" data-name="name" placeholder="<?php echo __('Ваше имя'); ?>*"
                   data-rule-word="true" data-rule-minlength="2" required>
        </div>
        <div class="grid__cell">
            <input class="form__input numbers_only" type="text" name="tel" data-name="tel"
                   placeholder="<?php echo __('Ваш телефон'); ?>" required data-rule-phone="true">
        </div>
        <div class="grid__cell grid__cell--grow"></div>
        <div class="grid__cell ">
            <span class="form__label"><?php echo __('Оцените предоставляемую услугу'); ?></span>
            <div class="rating">
                <div class="rating-vote">
                    <span class="rating-vote_stars">
                        <input type="radio" name="rating" value="5" required>
                        <i><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"/></svg></i>
                        <input type="radio" name="rating" value="4" required>
                        <i><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"/></svg></i>
                        <input type="radio" name="rating" value="3" required>
                        <i><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"/></svg></i>
                        <input type="radio" name="rating" value="2" required>
                        <i><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"/></svg></i>
                        <input type="radio" name="rating" value="1" required>
                        <i><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"/></svg></i>
                </div>
            </div>
        </div>
        <div class="grid__cell grid__cell--12">
            <textarea class="form__input form__input--textarea" type="text" data-name="text"
                      placeholder="<?php echo __('Ваш комментарий'); ?>*" required></textarea>
        </div>
        <input type="hidden" name="lang" data-name="lang" value="<?php echo \I18n::$lang; ?>">
        <div class="grid__cell grid__cell--grow"></div>
        <div class="grid__cell">
            <button class="js-form-submit button button--primary"><?php echo __('Отправить отзыв'); ?></button>
        </div>
    </div>
</div>