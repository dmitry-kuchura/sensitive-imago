<footer class="pageFooter">
    <div class="pageSize">
        <div class="grid grid--justify-around grid--xl-justify-between">
            <div class="grid__cell _mr _mb-x2">
                <a href="<?php echo Core\HTML::link(); ?>" class="logo__link">
                    <div class="logo logo--small">
                        <div class="logo__image">
                            <svg>
                                <use xlink:href="<?php echo Core\HTML::media('sprite.svg#logo'); ?>"></use>
                            </svg>
                        </div>
                        <div class="logo__text">
                            <big><?php echo __('Сенситив Имаго'); ?></big>
                            <small><?php echo __('Медицинское оборудование'); ?></small>
                            <span
                                class="logo__copyright"><?php echo Core\Config::get('basic.copy-' . \I18n::$lang); ?></span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="grid__cell grid__cell--grow">
                <div class="grid grid--2 grid--md-4 grid--space">
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Меню'); ?></div>
                        <div class="columnContent">
                            <?php if (Core\Arr::get($menu, 1, [])): ?>
                                <ul>
                                    <?php foreach ($menu[1] AS $key => $value): ?>
                                        <li>
                                            <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Адрес'); ?></div>
                        <div
                            class="columnContent"><?php echo str_replace(['<p>', '</p>'], '', $contacts->location); ?></div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Время работы'); ?></div>
                        <div
                            class="columnContent"><?php echo str_replace(['<p>', '</p>'], '', $contacts->time); ?></div>
                    </div>
                    <div class="grid__cell">
                        <div class="columnCaption"><?php echo __('Наши контакты'); ?></div>
                        <div class="columnContent">
                            <?php if (\I18n::$lang == 'ru'): ?>
                                <a class="js-hidden-information" href="tel:<?php echo Core\Config::get('contacts.phone_1'); ?>">
                                    <span><?php echo substr(Core\Config::get('contacts.phone_1'), 0, -5); ?></span><span  data-information="<?php echo substr(Core\Config::get('contacts.phone_1'), 14); ?>">XX-XX</span>
                                </a>
                                <br>
                                <a class="js-hidden-information" href="tel:<?php echo Core\Config::get('contacts.phone_2'); ?>">
                                    <span><?php echo substr(Core\Config::get('contacts.phone_2'), 0, -5); ?></span><span  data-information="<?php echo substr(Core\Config::get('contacts.phone_2'), 14); ?>">XX-XX</span>
                                </a>
                            <?php endif; ?>
                            <?php $mail = explode('@', Core\Config::get('contacts.email')); ?>
                            <a class="js-hidden-information" href="mailto:<?php echo Core\Config::get('contacts.email'); ?>">
                                <span data-information="<?php echo $mail[0]; ?>">XXXXXX</span>@<?php echo $mail[1]; ?>
                            </a><br>
                            <a class="js-hidden-information"  href="skype:<?php echo Core\Config::get('contacts.skype'); ?>?call">
                            Skype: <span data-information="<?php echo Core\Config::get('contacts.skype'); ?>">XXXXXX</span>
                            </a>
                            <br>
                            <a class="inverseLink showContacts__link _color-white js-show-information"
                               href="#"><?php echo __('Показать контакты'); ?></a>
                            <button
                                data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
                                class="button button--inverse-white button--expand _mt js-mfp-ajax"><?php echo __('Оставить заявку'); ?></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="scrollerUp" class="scrollerUp"></div>