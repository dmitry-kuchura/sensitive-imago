<footer class="pageFooter">
    <div class="pageSize">
        <div class="grid grid--justify-around grid--xl-justify-between">
            <div class="grid__cell _mr-x2 _mb-x2">
                <a href="index.html" class="logo__link">
                    <div class="logo logo--small">
                        <div class="logo__image">
                            <svg><use xlink:href="<?php echo Core\HTML::media('sprite.svg#logo'); ?>"></use></svg>
                        </div>
                        <div class="logo__text">
                            <big>Сенситив Имаго</big>
                            <small>Медицинское оборудование</small>
                            <span class="logo__copyright"><?php echo Core\Config::get('basic.copy-'.\I18n::$lang);?></span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="grid__cell grid__cell--grow">
                <div class="grid grid--2 grid--md-4 grid--space">
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Меню'); ?></div>
                        <div class="columnContent">
                            <ul>
                                <li><a href="#">Главная</a></li>
                                <li><a href="#">Оборудование</a></li>
                                <li><a href="#">Бизнес под ключ</a></li>
                                <li><a href="#">Новости</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Адрес'); ?></div>
                        <div class="columnContent">
                            02091, Украина, город Киев,<br>
                            улица Харьковское шоссе 164,<br>
                            ООО "Альфа-Мед Юкрейн
                        </div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Время работы'); ?></div>
                        <div class="columnContent">
                            ПН - Пт : 10:00 -18:00<br>
                            Сб : 10:00 - 15:00<br>
                            Вс - выходной
                        </div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Наши контакты'); ?></div>
                        <div class="columnContent">
                            <a href="tel:+38 (068) 201-ХХ-ХХ">+38 (068) 201-ХХ-ХХ</a><br>
                            <a href="tel:+38 (044) 227-ХХ-ХХ">+38 (044) 227-ХХ-ХХ</a><br>
                            <a href="mailto:ХХХХХХХ@gmail.com">ХХХХХХХ@gmail.com</a><br>
                            Skype: ХХХХХХ<br>
                            <a class="inverseLink showContacts__link _color-white" href="#"><?php echo __('Показать контакты'); ?></a>
                            <button class="button button--inverse-white button--expand _mt"><?php echo __('Обратная связь'); ?></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</footer>