<header class="wHeader">
    <div class="wHeaderLeft w_fll">
        <div data-anchor="wContainer" class="logo js-anchor">
            <div class="logo_svg">
                <svg>
                <use xlink:href="#icon_logo"/>
                </svg>
            </div>
            <div class="logo_text"><img src="<?php echo Core\HTML::media('pic/logo.png'); ?>" alt=""></div>
        </div>
        <div class="menu_btn">
            <svg>
            <use xlink:href="#icon_menu"/>
            </svg>
        </div>
    </div>
    <div class="wHeaderRight w_flr">
        <a href="tel:<?php echo preg_replace('/[^0-9]/', '', $phone->name); ?>?call" class="phone">
            <div class="phone_svg">
                <svg>
                <use xlink:href="#icon_phone"/>
                </svg>
            </div>
            <div class="phone_text"><?php echo $phone->name; ?></div>
        </a>
        <div data-anchor="contacts" class="callback js-anchor">
            <div class="callback_svg">
                <svg>
                <use xlink:href="#icon_phone"/>
                </svg>
            </div>
            <div class="callback_text"><?php echo __('Связаться'); ?></div>
        </div>
        <div class="language">
            <div class="language_select--cur">
                <svg>
                <use xlink:href="#icon_arrow"/>
                </svg>
                <?php switch (I18n::$lang):
                    case 'en': ?>
                        <span>Eng</span>
                    <?php break; ?>
                    <?php case 'ru': ?>
                        <span>Рус</span>
                    <?php break; ?>
                <?php endswitch; ?>

            </div>
            <div class="language_drop">
                <a href="<?php echo \Core\HTML::changeLanguage('ru'); ?>"><span data-lang="Рус" <?php echo I18n::$lang == 'ru' ? 'class="cur"' : NULL; ?>>Рус</span></a>
                <a href="<?php echo \Core\HTML::changeLanguage('en'); ?>"><span data-lang="Eng" <?php echo I18n::$lang == 'en' ? 'class="cur"' : NULL; ?>>Eng</span></a>
            </div>
        </div>
    </div>
    <div class="wHeaderCenter w_ovh">
        <div class="menu">
            <?php foreach ($menu as $link): ?>
                <span data-anchor="<?php echo $link->url; ?>" class="js-anchor"><?php echo $link->name; ?></span>
<?php endforeach; ?>
        </div>
    </div>
</header>