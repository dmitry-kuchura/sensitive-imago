<div class="mfiModal mfiModal--md">
    <div class="mfiModal__header">
        <div class="mfiModal__title">
            <p><?php echo __('Контактная форма'); ?></p>
        </div>
    </div>
    <div class="mfiModal__body">
        <div class="priceForm js-form form" data-form="true" data-ajax="contact">
            <div class="grid grid--space grid--items-center">
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваше имя'); ?>:</label>
                    <div class="form__dib">
                        <input class="form__input" type="text" name="name"
                               data-name="name"
                               placeholder="<?php echo __('Пример: Иванов Иван'); ?>"
                               data-rule-word="true"
                               data-rule-minlength="2" required>
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваш город'); ?> <span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" type="text" name="city"
                               data-name="city"
                               placeholder="<?php echo __('Пример: Киев'); ?>"
                               required data-rule-word="true">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Ваш e-mail'); ?><span>*</span></label>
                    <div class="form__dib">
                        <input class="form__input" id="demo_equalTo_email" type="email" name="email"
                               data-name="email"
                               placeholder="<?php echo __('Пример: myemail@mail.com'); ?>" required
                               data-rule-email="true">
                    </div>
                </div>
                <div class="grid__cell">
                    <label for=""><?php echo __('Примечания'); ?>:</label>
                    <div class="form__dib">
                        <textarea class="form__input--textarea"
                                  data-name="other"
                                  placeholder="<?php echo __('Введите ваши примечания'); ?>"
                                  data-rule-minlength="10" required></textarea>
                    </div>
                </div>
                <input type="hidden" data-name="branch" value="<?php echo $_POST['branch']; ?>"/>
                <?php if (array_key_exists('token', $_SESSION)): ?>
                    <input type="hidden" data-name="token" value="<?php echo $_SESSION['token']; ?>"/>
                <?php endif; ?>
                <div class="notate_mfi">« <span>*</span> » <?php echo __('Обязательны поля для заполнения'); ?></div>
                <div class="grid__cell">
                    <span class="js-form-submit button button--primary"><?php echo __('Отправить'); ?></span>
                </div>
            </div>
        </div>
    </div>
</div>