<div class="grid__cell grid__cell grid__cell--12 grid__cell--md-auto grid__cell--grow grid__cell--md-nogrow">
    <section class="pageAside js-multiLevelMenu">
        <div class="grid grid--justify-around grid--space grid--md-nospace">
            <div class="asideMenu__cell grid__cell grid__cell--grow">
                <ul class="asideMenu">
                    <li class="is-active"><a href="contacts.html">Главный торговый офис</a></li>
                    <li class="has-subMenu">
                        <a href="contacts_regions.html">региональные представительства</a>
                        <ul>
                            <li><a href="#">Австралия</a></li>
                            <li><a href="#">Барбадос</a></li>
                            <li><a href="#">Бразилия</a></li>
                            <li><a href="#">Венгрия</a></li>
                            <li><a href="#">Германия</a></li>
                            <li><a href="#">Греция</a></li>
                            <li><a href="#">Доминиканская Республика</a></li>
                            <li><a href="#">Египет</a></li>
                            <li><a href="#">Канада</a></li>
                            <li><a href="#">Китай</a></li>
                            <li><a href="#">Кувейт</a></li>
                            <li><a href="#">Мексика</a></li>
                            <li><a href="#">Норвегия</a></li>
                            <li><a href="#">ОАЭ</a></li>
                            <li><a href="#">Панама</a></li>
                            <li><a href="#">Перу</a></li>
                            <li><a href="#">Саудовская Аравия</a></li>
                            <li><a href="#">США</a></li>
                            <li><a href="#">Тринидад и Тобаго</a></li>
                            <li><a href="#">Турция</a></li>
                            <li><a href="#">Уругвай</a></li>
                            <li><a href="#">Чили</a></li>
                            <li><a href="#">Швеция</a></li>
                            <li><a href="#">И прочие представители</a></li>
                        </ul>
                    </li>
                </ul>
                <span data-url="./hidden/callback.php" class="button button--primary button--expand button--in-aside js-mfp-ajax"><?php echo __('Узнать прайс'); ?></span>
            </div>
            <div class="grid__cell">
                <div class="sectionTitle sectionTitle--in-aside"><?php echo __('Последние новости'); ?></div>
                <div class="lastNews">
                    <?php foreach ($result as $news): ?>
                        <div class="mediaBlock mediaBlock--in-aside">
                            <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>">
                                <div class="mediaBlock__image" style="background-image: url('<?php echo Core\HTML::media('images/news/main/' . $news->image); ?>');">
                                    <div class="mediaBlock__date">
                                        <?php echo date('d', $news->date); ?>
                                        <small><?php echo Core\Text::russianDate($news->date) ?></small>
                                    </div>
                                </div>
                            </a>
                            <div class="mediaBlock__content">
                                <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="mediaBlock__title"><?php echo $news->name; ?></a>
                                <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="mediaBlock__link"><?php echo __('Подробнее'); ?></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <a href="<?php echo Core\HTML::link('news'); ?>" class="button button--primary button--expand"><?php echo __('Смотреть больше'); ?></a>
                </div>
            </div>
        </div>
    </section>
</div>
