<header class="pageHeader">
    <div class="pageHeader">
        <div class="pageHeader__mobile">
            <div class="grid">
                <a href="index.html" class="logo">
                    <div class="logo__image logo__image--phone">
                        <svg>
                        <use xlink:href="hidden/sprite.svg#logo"></use>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="grid">
                <p class="mobile__text">Сенситив Имаго</p>
            </div>
            <div class="grid">
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                            <use xlink:href="hidden/sprite.svg#language"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="dropdown__content dropdown__content--wide dropdown__content--right">
                        <div class="languageLinks">
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>" class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon" style="background-image: url('css/pic/flag-spa.jpg');"></div>
                                <span class="languageLink__text">spa</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('ru'); ?>" class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon" style="background-image: url('css/pic/flag-fra.jpg');"></div>
                                <span class="languageLink__text">fra</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>" class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon" style="background-image: url('css/pic/flag-ru.jpg');"></div>
                                <span class="languageLink__text">ru</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('en'); ?>" class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon" style="background-image: url('css/pic/flag-eng.jpg');"></div>
                                <span class="languageLink__text">eng</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('de'); ?>" class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon" style="background-image: url('css/pic/flag-deu.jpg');"></div>
                                <span class="languageLink__text">deu</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                            <use xlink:href="hidden/sprite.svg#phone"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="dropdown__content dropdown__content--wide dropdown__content--right">
                        <div class="contactItem">
                            <div class="contactItem__key">Skype:</div>
                            <div class="contactItem__value"></div>
                        </div>
                        <div class="contactItem">
                            <div class="contactItem__key">
                                <svg>
                                <use xlink:href="hidden/sprite.svg#phone"></use>
                                </svg>
                            </div>
                            <div class="contactItem__value">
                                <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information" data-information="12-34">XX-XX</span></a>
                                <br>
                                <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information" data-information="12-34">XX-XX</span></a></div>
                        </div>
                        <div class="contactItem">
                            <div class="contactItem__key">
                                <svg>
                                <use xlink:href="hidden/sprite.svg#mail"></use>
                                </svg>
                            </div>
                            <div class="contactItem__value">
                                <a href="mailto:XXXXXX@gmail.com"><span class="js-hidden-information" data-information="elsead">XXXXXX</span>@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                            <use xlink:href="hidden/sprite.svg#icon_burger"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="dropdown__content dropdown__content--wide">
                        <ul class="asideMenu">
                            <li class="is-active"><a href="index.html">Главная</a></li>
                            <li ><a href="about.html">О компании</a></li>
                            <li ><a href="equipment.html">Оборудование</a></li>
                            <li ><a href="business.html">Бизнес под ключ</a></li>
                            <li ><a href="gallery_photo.html">Галерея</a></li>
                            <li ><a href="contacts.html">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="pageHeader__top">
            <div class="pageSize">
                <div class="grid grid--justify-between grid--items-center">
                    <div class="grid__cell">
                        <div class="copyright">ТОВ Альфа-Мед Юкрейн</div>
                    </div>
                    <div class="grid__cell">
                        <div class="languageLinks">
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>" class="languageLink">
                                <div class="languageLink__icon" style="background-image: url('<?php echo Core\HTML::media('css/pic/flag-spa.jpg'); ?>');"></div>
                                <span class="languageLink__text">spa</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('fr'); ?>" class="languageLink">
                                <div class="languageLink__icon" style="background-image: url('<?php echo Core\HTML::media('css/pic/flag-fra.jpg'); ?>');"></div>
                                <span class="languageLink__text">fra</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('ru'); ?>" class="languageLink">
                                <div class="languageLink__icon" style="background-image: url('<?php echo Core\HTML::media('css/pic/flag-ru.jpg'); ?>');"></div>
                                <span class="languageLink__text">ru</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('en'); ?>" class="languageLink">
                                <div class="languageLink__icon" style="background-image: url('<?php echo Core\HTML::media('css/pic/flag-eng.jpg'); ?>');"></div>
                                <span class="languageLink__text">eng</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('de'); ?>" class="languageLink">
                                <div class="languageLink__icon" style="background-image: url('<?php echo Core\HTML::media('css/pic/flag-deu.jpg'); ?>');"></div>
                                <span class="languageLink__text">deu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pageHeader__main">
            <div class="pageSize">
                <div class="grid grid--justify-around grid--lg-justify-between">
                    <div class="grid__cell">
                        <a href="index.html" class="logo">
                            <div class="logo__image">
                                <svg>
                                <use xlink:href="hidden/sprite.svg#logo"></use>
                                </svg>
                            </div>
                            <div class="logo__text">
                                <big>Сенситив Имаго</big>
                                <small>Медицинское оборудование</small>
                            </div>
                        </a>
                    </div>
                    <div class="grid__cell">
                        <div class="grid__box">
                            <div class="grid grid--space contactsBlock">
                                <div class="grid__cell">
                                    <div class="contactItem">
                                        <div class="contactItem__key">Skype:</div>
                                        <div class="contactItem__value"><span class="js-hidden-information" data-information="qwee">XXXX</span></div>
                                    </div>
                                </div>
                                <div class="grid__cell">
                                    <div class="contactItem">
                                        <div class="contactItem__key">
                                            <svg>
                                            <use xlink:href="hidden/sprite.svg#phone"></use>
                                            </svg>
                                        </div>
                                        <div class="contactItem__value">
                                            <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information" data-information="12-34">XX-XX</span></a>
                                            <br>
                                            <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information" data-information="12-34">XX-XX</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid__cell">
                                    <div class="contactItem">
                                        <div class="contactItem__key">
                                            <svg>
                                            <use xlink:href="hidden/sprite.svg#mail"></use>
                                            </svg>
                                        </div>
                                        <div class="contactItem__value">
                                            <a href="mailto:XXXXXX@gmail.com"><span class="js-hidden-information" data-information="qqqqqq">XXXXXX</span>@gmail.com</a>
                                        </div>
                                    </div>
                                    <button class="button button--primary _mt js-show-information">Показать контакты</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid--justify-around grid--lg-justify-end heroBlock">
                    <div class="grid__cell grid__cell--12 grid__cell--lg-7">
                        <div class="heroBlock__text">
                            <small>Лучшее решение</small>
                            <br class="_hide _lg-show">
                            Для<br class="_hide _lg-show"> медицинского<br class="_hide _lg-show"> бизнеса
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pageHeader__menu">
            <div class="pageSize">
                <ul class="topMenu">
                    <li class="is-active"><a href="index.html">Главная</a></li>
                    <li ><a href="about.html">О компании</a></li>
                    <li ><a href="equipment.html">Оборудование</a></li>
                    <li ><a href="business.html">Бизнес под ключ</a></li>
                    <li ><a href="gallery_photo.html">Галерея</a></li>
                    <li ><a href="contacts.html">Контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
</header>