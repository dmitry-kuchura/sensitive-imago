<div class="mfiModal mfiModal--md">
    <div class="mfiModal__header">
        <div class="mfiModal__title">
            <p><?php echo __('Для того, чтобы предоставить Вам детальную информацию заполните,пожалуйста форму ниже'); ?></p>
        </div>
        <div class="mfiModal__subtitle">
            <p><?php echo __('Прайс на приборы зависит от страны, в которой Вы находитесь'); ?></p>
        </div>
    </div>
    <div class="mfiModal__body">
        <div class="priceForm js-form form" data-form="true" data-ajax="price">
            <div class="grid grid--space grid--items-center">
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваше имя, фамилия'); ?>:</label>
                    <div class="form__dib">
                        <input class="form__input" type="text" data-name="name" name="name"
                               data-msg="<?php echo __('Введите корректное имя'); ?>"
                               placeholder="<?php echo __('Пример: Иванов Иван'); ?>" data-rule-word="true"
                               data-rule-minlength="2">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваша страна'); ?> <span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" type="text" name="country" data-name="country"
                               data-msg="<?php echo __('Введите корректную страну'); ?>"
                               placeholder="<?php echo __('Пример: Украина'); ?>" required data-rule-word="true">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваш город'); ?> <span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" type="text" name="city" data-name="city"
                               data-msg="<?php echo __('Введите корректный город'); ?>"
                               placeholder="<?php echo __('Пример: Киев'); ?>"
                               required data-rule-word="true">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваш e-mail'); ?><span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" id="demo_equalTo_email" type="email" name="email" data-name="email"
                               data-msg="<?php echo __('Укажите корректный email'); ?>"
                               placeholder="<?php echo __('Пример: myemail@mail.com'); ?>" required
                               data-rule-email="true">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Повторите Ваш e-mail'); ?><span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" type="email" name="confirm" data-name="confirm"
                               data-msg="<?php echo __('Подтвердите email'); ?>"
                               id="demo_equalTo_email_to" placeholder="<?php echo __('Пример: myemail@mail.com'); ?>"
                               data-rule-email="true" required
                               data-rule-equalTo="#demo_equalTo_email">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Примечания'); ?>:</label>
                    <div class="form__dib">
                        <textarea class="form__input--textarea" data-name="text"
                                  data-msg="<?php echo __('Примечание должно быть длиннее 10 символов'); ?>"
                                  placeholder="<?php echo __('Введите ваши примечания'); ?>"
                                  data-rule-minlength="10"></textarea>
                    </div>
                </div>
                <?php /*
                <div class="grid__cell">
                    <label for=""
                           class="description_range"><?php echo __('Перетащите ползунок, если Вы не робот'); ?></label>
                    <!--<input type="text" id="slider-toggle">-->
                    <div class="form__dib">
                        <div id="slider-connect" class="range-slider"></div>
                    </div>
                </div> */ ?>
                <input type="hidden" data-name="current_lang" value="<?php echo \I18n::$lang; ?>" />
                <?php if(array_key_exists('token', $_SESSION)): ?>
                    <input type="hidden" data-name="token" value="<?php echo $_SESSION['token']; ?>" />
                <?php endif; ?>
                <?php if (isset($_POST['id'])): ?>
                    <input type="hidden" data-name="item" value="<?php echo $_POST['id']; ?>" />
                <?php endif; ?>
                <div class="notate_mfi">« <span>*</span> » <?php echo __('Обязательны поля для заполнения'); ?></div>
                <div class="grid__cell">
                    <span class="js-form-submit button button--primary"><?php echo __('Отправить'); ?></span>
                </div>
            </div>
        </div>
    </div>
</div>