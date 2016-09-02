<div class="contacts">
    <div class="wSize">
        <div class="title_block">
            <div class="title_small"><?php echo __('Контакты'); ?></div>
        </div>
        <div data-form="true" class="form_block wForm" data-ajax="contacts">
            <div class="form_inner"><?php echo __('Меня зовут'); ?>
                <div class="form_input">
                    <input type="text" name="my_name" data-name="name" data-msg-word="<?php echo __('Введите кооректное имя'); ?>" required data-rule-word="true" data-msg-required="<?php echo __('Введите кооректное имя'); ?>" data-rule-minlength="2" data-msg-word="<?php echo __('Введите кооректное имя'); ?>" data-msg-minlength="<?php echo __('Минимальное кол-во'); ?>" placeholder="<?php echo __('полное имя'); ?>">
                </div>,  <?php echo __('я хотел бы поговорить о'); ?>  
                <div class="form_input">
                    <input type="text" name="my_theme" data-name="theme" required data-msg-required="<?php echo __('Укажите корректную тему'); ?>" data-rule-minlength="2" data-msg-minlength="<?php echo __('Минимальное кол-во'); ?>" placeholder="Web Development">
                </div>.  <?php echo __('Мой адрес электронной почты'); ?>: 
                <div class="form_input">
                    <input type="email" name="my_mail" data-name="email" data-msg-required="<?php echo __('Укажите корректный email'); ?>" data-msg-email="<?php echo __('Укажите корректный email'); ?>" required data-rule-email="true" placeholder="email@mail.com">
                </div>,  <?php echo __('мой номер'); ?>:
                <div class="form_input">
                    <input type="tel" class="phoneMask" data-rule-phoneUA="true" name="my_phone" data-name="phone" required data-msg-phoneUA="<?php echo __('Укажите корректный телефон'); ?>" data-msg-required="<?php echo __('Укажите корректный телефон'); ?>" placeholder="<?php echo __('номер телефона'); ?>">
                </div>
            </div>
            <input type="hidden" data-name="lang" value="<?php echo I18n::$lang;?>" />
            <?php if (array_key_exists('token', $_SESSION)): ?>
                <input type="hidden" data-name="token" value="<?php echo $_SESSION['token']; ?>" />
            <?php endif; ?>
            <button class="wSubmit"><span><?php echo __('связаться с нами'); ?></span></button>
        </div>
        <div class="contacts_map_block">
            <div class="contacts_map_left">
                <div class="contacts_place"><?php echo Core\Config::get('basic.city-' . \I18n::$lang); ?>, <br><?php echo Core\Config::get('basic.street-' . \I18n::$lang); ?></div>
                <div class="contacts_phones">
                    <p><?php echo __('Телефоны'); ?>:</p>
                    <?php foreach ($phones as $phone): ?>
                        <div class="phones_item"><a href="tel:<?php echo preg_replace('/[^0-9]/', '', $phone->name); ?>?call"><?php echo $phone->name; ?></a></div>
                    <?php endforeach; ?>
                </div>
                <div class="contacts_mail">
                    <p><?php echo __('Отдел по работе с клиентами'); ?>:</p>
                    <a href="mailto:<?php echo Core\Config::get('basic.email'); ?>"><?php echo Core\Config::get('basic.email'); ?></a>
                    <br>
                    <?php if(Core\Config::get('basic.email_2') != NULL): ?>
                        <a href="mailto:<?php echo Core\Config::get('basic.email_2'); ?>"><?php echo Core\Config::get('basic.email_2'); ?></a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="contacts_map">
                <script src="http://maps.google.com/maps/api/js?key=AIzaSyCgXvMv62Gbm3IegGV4EDeEL9_dNNO1rdc"></script>
                <div class="bg_map"></div>
                <div id="js-map" data-map-x="50.3793932" data-map-y="30.4448846" data-map-z="17" data-map-icon="<?php echo Core\HTML::media('pic/marker.png'); ?>" class="css-map"></div>
            </div>
        </div>
        <div class="soc_block">
            <a href="<?php echo Core\Config::get('socials.facebook'); ?>" target="_blank" class="soc_link">
                <svg>
                <use xlink:href="#icon_face"/>
                </svg>
            </a>
            <a href="<?php echo Core\Config::get('socials.youtube'); ?>" target="_blank" class="soc_link">
                <svg>
                <use xlink:href="#icon_you"/>
                </svg>
            </a>
            <a href="<?php echo Core\Config::get('socials.twitter'); ?>" target="_blank" class="soc_link">
                <svg>
                <use xlink:href="#icon_twit"/>
                </svg>
            </a>
            <a href="<?php echo Core\Config::get('socials.google'); ?>" target="_blank" class="soc_link">
                <svg>
                <use xlink:href="#icon_google"/>
                </svg>
            </a>
        </div>
    </div>
</div>