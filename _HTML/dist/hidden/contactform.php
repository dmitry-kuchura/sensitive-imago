<div class="mfiModal mfiModal--md">
    <div class="mfiModal__header">
        <div class="mfiModal__title">
            <p>Контактная форма</p>
        </div>
    </div>
    <div class="mfiModal__body">
        <div class="priceForm js-form form" data-form="true">
            <div class="grid grid--space grid--items-center">
                <div class="grid__cell">
                    <label for="">Ваше имя:</label>
                    <div class="form__dib"><input class="form__input" type="text" name="name" placeholder="Пример: Иванов Иван" data-rule-word="true" data-rule-minlength="2" required></div>
                </div>
                <div class="grid__cell">
                    <label for="">Ваш город <span>*</span></label>
                    <div class="form__dib"><input class="form__input" type="text" name="city" placeholder="Пример: Киев" required data-rule-word="true"></div>
                </div>
                <div class="grid__cell">
                    <label for="">Ваш e-mail<span>*</span></label>
                    <div class="form__dib"><input class="form__input" id="demo_equalTo_email" type="email" name="email" placeholder="Пример: myemail@mail.com" required data-rule-email="true"></div>
                </div>
                <div class="grid__cell">
                    <label for="">Примечания:</label>
                    <div class="form__dib"><textarea class="form__input--textarea" placeholder="Введите ваши примечания" data-rule-minlength="10" required></textarea></div>
                </div>
                <div class="notate_mfi">« <span>*</span> » Обязательны поля для заполнения</div>
                <div class="grid__cell">
                    <span class="js-form-submit button button--primary">Отправить</span>
                </div>
            </div>
        </div>
    </div>
</div>