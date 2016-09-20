<header class="pageHeader">
    <div class="pageHeader">
        <div class="pageHeader__mobile">
            <div class="grid">
                <a href="<?php echo Core\HTML::link(); ?>" class="logo">
                    <div class="logo__image logo__image--phone">
                        <svg>
                            <use xlink:href="<?php echo Core\HTML::media('sprite.svg#logo'); ?>"></use>
                        </svg>
                    </div>
                </a>
            </div>
            <div class="grid">
                <p class="mobile__text"><?php echo __('Сенситив Имаго'); ?></p>
            </div>
            <div class="grid">
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#language'); ?>"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="dropdown__content dropdown__content--wide dropdown__content--right">
                        <div class="languageLinks">
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>"
                               class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-spa.jpg'); ?>');"></div>
                                <span class="languageLink__text">spa</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('ru'); ?>"
                               class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-fra.jpg'); ?>');"></div>
                                <span class="languageLink__text">fra</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>"
                               class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-ru.jpg'); ?>');"></div>
                                <span class="languageLink__text">ru</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('en'); ?>"
                               class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-eng.jpg'); ?>');"></div>
                                <span class="languageLink__text">eng</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('de'); ?>"
                               class="languageLink languageLink--adaptive">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-deu.jpg'); ?>');"></div>
                                <span class="languageLink__text">deu</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                                <?php echo Core\HTML::media('sprite.svg#phone'); ?>
                                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#phone'); ?>"></use>
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
                                    <use xlink:href="<?php echo Core\HTML::media('sprite.svg#phone'); ?>"></use>
                                </svg>
                            </div>
                            <div class="contactItem__value">
                                <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information"
                                                                                      data-information="12-34">XX-XX</span></a>
                                <br>
                                <a href="tel:+38 (050) 227-XX-XX">+38 (050) 227-<span class="js-hidden-information"
                                                                                      data-information="12-34">XX-XX</span></a>
                            </div>
                        </div>
                        <div class="contactItem">
                            <div class="contactItem__key">
                                <svg>
                                    <use xlink:href="<?php echo Core\HTML::media('sprite.svg#mail'); ?>"></use>
                                </svg>
                            </div>
                            <div class="contactItem__value">
                                <a href="mailto:XXXXXX@gmail.com"><span class="js-hidden-information"
                                                                        data-information="elsead">XXXXXX</span>@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-dropdown class="dropdown dropdown--dib">
                    <div class="dropdown-header">
                        <button data-dropdown-toggle class="button button--in-header">
                            <svg>
                                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#icon_burger'); ?>"></use>
                            </svg>
                        </button>
                    </div>
                    <?php if (Core\Arr::get($menu, 0, [])): ?>
                        <div class="dropdown__content dropdown__content--wide">
                            <ul class="asideMenu">
                                <li class="is-active"><a
                                        href="<?php echo Core\HTML::link($value->url); ?>"><?php echo __('Главная'); ?></a>
                                </li>
                                <?php foreach ($menu[0] AS $key => $value): ?>
                                    <li>
                                        <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="pageHeader__top">
            <div class="pageSize">
                <div class="grid grid--justify-between grid--items-center">
                    <div class="grid__cell">
                        <div class="copyright"><?php echo __('ТОВ Альфа-Мед Юкрейн'); ?></div>
                    </div>
                    <div class="grid__cell">
                        <div class="languageLinks">
                            <a href="<?php echo Core\HTML::changeLanguage('sp'); ?>" class="languageLink">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-spa.jpg'); ?>');"></div>
                                <span class="languageLink__text">spa</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('fr'); ?>" class="languageLink">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-fra.jpg'); ?>');"></div>
                                <span class="languageLink__text">fra</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('ru'); ?>" class="languageLink">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-ru.jpg'); ?>');"></div>
                                <span class="languageLink__text">ru</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('en'); ?>" class="languageLink">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-eng.jpg'); ?>');"></div>
                                <span class="languageLink__text">eng</span>
                            </a>
                            <a href="<?php echo Core\HTML::changeLanguage('de'); ?>" class="languageLink">
                                <div class="languageLink__icon"
                                     style="background-image: url('<?php echo Core\HTML::media('pic/flag-deu.jpg'); ?>');"></div>
                                <span class="languageLink__text">deu</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pageHeader__main" style="background-image: url('<?php echo Core\HTML::media('css/pic/header-bg.jpg'); ?>');">
            <?php if (Core\Route::controller() == 'index'): ?>
                <div id="headerSlider" class="headerSlider">
                    <?php foreach ($slider as $slide): ?>
                        <div class="headerSlider__slide"
                             style="background-image: url('<?php echo Core\HTML::media('images/slider/main/' . $slide->image) ?>');"></div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <div class="pageSize">
                <div class="grid grid--justify-around grid--lg-justify-between">
                    <div class="grid__cell">
                        <a href="<?php echo Core\HTML::link(); ?>" class="logo">
                            <div class="logo__image">
                                <svg>
                                    <use xlink:href="<?php echo Core\HTML::media('sprite.svg#logo'); ?>"></use>
                                </svg>
                            </div>
                            <div class="logo__text">
                                <big><?php echo __('Сенситив Имаго'); ?></big>
                                <small><?php echo __('Медицинское оборудование'); ?></small>
                            </div>
                        </a>
                    </div>
                    <div class="grid__cell">
                        <div class="grid__box">
                            <div class="grid grid--space contactsBlock">
                                <div class="grid__cell">
                                    <div class="contactItem">
                                        <div class="contactItem__key">Skype:</div>
                                        <div class="contactItem__value">
                                            <span class="js-hidden-information"
                                                  data-information="<?php echo Core\Config::get('contacts.skype'); ?>">XXXXXX</span>
                                        </div>
                                    </div>
                                </div>
                                <?php if (\I18n::$lang == 'ru'): ?>
                                    <div class="grid__cell">
                                        <div class="contactItem">
                                            <div class="contactItem__key">
                                                <svg>
                                                    <use
                                                        xlink:href="<?php echo Core\HTML::media('sprite.svg#phone'); ?>"></use>
                                                </svg>
                                            </div>
                                            <div class="contactItem__value">
                                                <a href="tel:<?php echo substr(Core\Config::get('contacts.phone_1'), 0, -5); ?>XX-XX"><?php echo substr(Core\Config::get('contacts.phone_1'), 0, -5); ?>
                                                    <span
                                                        class="js-hidden-information"
                                                        data-information="<?php echo substr(Core\Config::get('contacts.phone_1'), 14); ?>">XX-XX</span></a>
                                                <br>
                                                <a href="tel:<?php echo substr(Core\Config::get('contacts.phone_2'), 0, -5); ?>XX-XX"><?php echo substr(Core\Config::get('contacts.phone_2'), 0, -5); ?>
                                                    <span
                                                        class="js-hidden-information"
                                                        data-information="<?php echo substr(Core\Config::get('contacts.phone_2'), 14); ?>">XX-XX</span></a>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                <div class="grid__cell">
                                    <div class="contactItem">
                                        <div class="contactItem__key">
                                            <svg>
                                                <use
                                                    xlink:href="<?php echo Core\HTML::media('sprite.svg#mail'); ?>"></use>
                                            </svg>
                                        </div>
                                        <?php $mail = explode('@', Core\Config::get('contacts.email')); ?>
                                        <div class="contactItem__value">
                                            <a href="mailto:XXXXXX@<?php echo $mail[1]; ?>"><span
                                                    class="js-hidden-information"
                                                    data-information="<?php echo $mail[0]; ?>">XXXXXX</span>@<?php echo $mail[1]; ?>
                                            </a>
                                        </div>
                                    </div>
                                    <button
                                        class="button button--primary _mt js-show-information"><?php echo __('Показать контакты'); ?></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid--justify-around grid--lg-justify-end heroBlock">
                    <div class="grid__cell grid__cell--12 grid__cell--lg-7">
                        <div class="heroBlock__text">
                            <?php $word = explode(' ', __('Для медицинского бизнеса')); ?>
                            <small><?php echo __('Лучшее решение'); ?></small>
                            <br class="_hide _lg-show">
                            <?php echo $word[0]; ?><br class="_hide _lg-show"> <?php echo $word[1]; ?><br class="_hide _lg-show"> <?php echo $word[2]; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php if (Core\Arr::get($menu, 0, [])): ?>
            <div class="pageHeader__menu">
                <div class="pageSize">
                    <ul class="topMenu">
                        <?php $alias = Core\HTML::activeUrl(); ?>
                        <li <?php echo Core\Route::controller() == 'index' ? 'class="is-active"' : ''; ?>>
                            <a href="<?php echo Core\HTML::link(); ?>"><?php echo __('Главная'); ?></a>
                        </li>
                        <?php foreach ($menu[0] AS $key => $value): ?>
                            <li <?php echo $alias == $value->url ? 'class="is-active"' : ''; ?>>
                                <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
    </div>
</header>