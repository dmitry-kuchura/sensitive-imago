<?php if (count($video)): ?>
    <div class="sectionTitle sectionTitle--inner"><?php echo __('Отзывы наших пользователей'); ?></div>
    <div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space grid--justify-center content" id="video">
        <?php foreach ($video as $review): ?>
            <?php $link = explode('?v=', $review->youtube); ?>
            <div class="grid__cell" data-page="1">
                <a href="<?php echo $review->youtube; ?>" class="videoLink"
                   style='background-image: url("//img.youtube.com/vi/<?php echo $link[1]; ?>/maxresdefault.jpg");'></a>
            </div>
        <?php endforeach; ?>
    </div>
    <?php echo $pager_video; ?>
<?php endif; ?>

<?php if (count($result)): ?>
    <div class="sectionTitle sectionTitle--inner _mt-x3"><?php echo __('Отзывы наших пациентов'); ?></div>
    <div class="textReviews textReviews--full content" id="reviews">
        <?php foreach ($result as $obj): ?>
            <div class="textReview" data-page="1">
                <svg class="textReview__icon">
                    <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes') ?>"></use>
                </svg>
                <div class="textReview__rating">
                    <span class="rating__stars" data-rating="<?php echo $obj->mark; ?>">
                        <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                        <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                        <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                        <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                        <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                    </span>
                </div>
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
    <?php echo $pager_reviews; ?>
<?php endif; ?>

<div class="sectionTitle sectionTitle--inner _mt-x2"><?php echo __('Оставить отзыв'); ?>
    <svg class="reviewsForm__decor">
        <use xlink:href="<?php echo Core\HTML::media('sprite.svg#quotes'); ?>"></use>
    </svg>
</div>
<div class="reviewsForm js-form form" data-form="true" data-ajax="review">
    <div class="grid grid--space grid--items-center">
        <div class="grid__cell">
            <input class="form__input" type="text" name="name" data-name="name"
                   data-msg="<?php echo __('Введите корректное имя'); ?>"
                   placeholder="<?php echo __('Ваше имя'); ?>"
                   data-rule-word="true" data-rule-minlength="2">
        </div>
        <div class="grid__cell">
            <input class="form__input numbers_only" type="text" name="tel" data-name="tel"
                   data-msg="<?php echo __('Введите корректный номер телефона'); ?>"
                   placeholder="<?php echo __('Ваш телефон'); ?>" data-rule-phone="true">
        </div>
        <div class="grid__cell">
            <input class="form__input" type="text" name="age" data-name="age"
                   data-msg="<?php echo __('Введите корректный возраст'); ?>"
                   placeholder="<?php echo __('Возраст'); ?>"  data-rule-minlength="2">
        </div>
        <div class="grid__cell">
            <input class="form__input" type="text" name="country" data-name="country"
                   placeholder="<?php echo __('Страна'); ?>*"
                   data-msg="<?php echo __('Введите корректную страну'); ?>"
                   data-rule-word="true" data-rule-minlength="2" required>
        </div>
        <div class="grid__cell grid__cell--grow"></div>
        <div class="grid__cell ">
            <span class="form__label">Оцените предоставляемую услугу</span>
            <div class="rating">
                <span class="rating__stars">
                    <input type="radio" name="rating" data-name="rating" value="5">
                    <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                    <input type="radio" name="rating" data-name="rating" value="4">
                    <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                    <input type="radio" name="rating" data-name="rating" value="3">
                    <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                    <input type="radio" name="rating" data-name="rating" value="2">
                    <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                    <input type="radio" name="rating" data-name="rating" value="1">
                    <i><svg><use xlink:href="<?php echo Core\HTML::media('css/pic/sprite.svg#star'); ?>"/></svg></i>
                </span>
            </div>
        </div>
        <div class="grid__cell grid__cell--12">
            <textarea class="form__input form__input--textarea" type="text" data-name="text"
                      data-msg="<?php echo __('Введите корректный комментарий'); ?>"
                      placeholder="<?php echo __('Ваш комментарий'); ?>*" required></textarea>
        </div>
        <input type="hidden" name="lang" data-name="lang" value="<?php echo \I18n::$lang; ?>">
        <div class="grid__cell grid__cell--grow"></div>
        <?php if(array_key_exists('token', $_SESSION)): ?>
            <input type="hidden" data-name="token" value="<?php echo $_SESSION['token']; ?>" />
        <?php endif; ?>
        <div class="grid__cell">
            <button class="js-form-submit button button--primary"><?php echo __('Отправить отзыв'); ?></button>
        </div>
    </div>
</div>