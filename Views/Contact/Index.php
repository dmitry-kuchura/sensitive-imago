<div class="grid grid--justify-between">
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Адрес'); ?></div>
        <div class="contactColumn__content"><?php echo $obj->location; ?></div>
    </div>
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Свяжитесь с нами'); ?></div>
        <div class="contactColumn__content">
            <span>Email:</span>
            <a class="_wb" href="mailto:ХХХХХХХ@gmail.com">ХХХХХХХ@gmail.com</a><br>
            Skype: ХХХХХХ<br>
            <a href="#"><?php echo __('Показать контакты'); ?></a>
        </div>
    </div>
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Телефоны'); ?></div>
        <div class="contactColumn__content">
            <a href="tel:+38 (068) 201-ХХ-ХХ">+38 (068) 201-ХХ-ХХ</a><br>
            <a href="tel:+38 (044) 227-ХХ-ХХ">+38 (044) 227-ХХ-ХХ</a><br>
            <a href="#"><?php echo __('Показать контакты'); ?></a>

        </div>
    </div>
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Время работы'); ?></div>
        <div class="contactColumn__content"><?php echo $obj->time; ?></div>
    </div>
</div>
<hr>
<p style="font-size:0.75rem"><b><?php echo __('Главный торговый офис в Украине'); ?></b></p>
<div class="googlemap"
     id="map"
     data-lat="<?php echo Core\Config::get('maps.lat'); ?>"
     data-lng="<?php echo Core\Config::get('maps.lng'); ?>"
     data-zoom=18
     data-marker="<?php echo Core\HTML::media('pic/marker_icon.png'); ?>">
</div>
<hr>
<div class="grid grid--justify-between">
    <div class="grid__cell">
        <div class="shareBlock">
            <div class="shareBlock__title"><?php echo __('Понравилась страница'); ?>?</div>
            <div class="shareBlock__text"><?php echo __('Расскажите друзьям'); ?></div>
            <svg class="shareBlock__arrow">
                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#share_arrow'); ?>"></use>
            </svg>
            <img src="<?php echo Core\HTML::media('pic/share.png'); ?>" alt="">
        </div>
    </div>
</div>