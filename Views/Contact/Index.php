<div class="grid grid--justify-between">
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Адрес'); ?></div>
        <div class="contactColumn__content"><?php echo $obj->location; ?></div>
    </div>
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Свяжитесь с нами'); ?></div>
        <div class="contactColumn__content">
            <span>Email:</span>
            <?php $mail = explode('@', Core\Config::get('contacts.email')); ?>
            <div class="contactItem__value">
                <a href="mailto:XXXXXX@<?php echo $mail[1]; ?>"><span
                        class="js-hidden-information"
                        data-information="<?php echo $mail[0]; ?>">XXXXXX</span>@<?php echo $mail[1]; ?>
                </a>
            </div>
            <span>Skype:</span>
            <span class="js-hidden-information"
                  data-information="<?php echo Core\Config::get('contacts.skype'); ?>">XXXXXX</span>
            <br>
            <a href="#" class="js-show-information"><?php echo __('Показать контакты'); ?></a>
        </div>
    </div>
    <div class="grid__cell grid__cell--contacts grid__cell--grow">
        <div class="contactColumn__caption"><?php echo __('Телефоны'); ?></div>
        <div class="contactItem__value contactColumn__content">
            <a href="tel:<?php echo substr(Core\Config::get('contacts.phone_1'), 0, -5); ?>XX-XX"><?php echo substr(Core\Config::get('contacts.phone_1'), 0, -5); ?>
                <span
                    class="js-hidden-information"
                    data-information="<?php echo substr(Core\Config::get('contacts.phone_1'), 14); ?>">XX-XX</span></a>
            <br>
            <a href="tel:<?php echo substr(Core\Config::get('contacts.phone_2'), 0, -5); ?>XX-XX"><?php echo substr(Core\Config::get('contacts.phone_2'), 0, -5); ?>
                <span
                    class="js-hidden-information"
                    data-information="<?php echo substr(Core\Config::get('contacts.phone_2'), 14); ?>">XX-XX</span></a>
            <br>
            <a href="#" class="js-show-information"><?php echo __('Показать контакты'); ?></a>
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