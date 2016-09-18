<div class="grid__cell grid__cell grid__cell--12 grid__cell--md-auto grid__cell--grow grid__cell--md-nogrow">
    <section class="pageAside js-multiLevelMenu">
        <div class="grid grid--justify-around grid--space grid--md-nospace">
            <div class="asideMenu__cell grid__cell grid__cell--grow">
                <ul class="asideMenu">
                    <li <?php echo Core\Route::controller() == 'gallery' ? 'class="is-active"' : ''; ?>>
                        <a href="<?php echo Core\HTML::link('gallery'); ?>"><?php echo __('Фото'); ?></a>
                    </li>
                    <li <?php echo Core\Route::controller() == 'video' ? 'class="is-active"' : ''; ?>>
                        <a href="<?php echo Core\HTML::link('video'); ?>"><?php echo __('Видео'); ?></a>
                    </li>
                </ul>
                <span data-url="<?php echo Core\HTML::link('hidden/price'); ?>"
                      class="button button--primary button--expand button--in-aside js-mfp-ajax"><?php echo __('Узнать прайс'); ?></span>
            </div>
            <div class="grid__cell">
                <div class="sectionTitle sectionTitle--in-aside"><?php echo __('Последние новости'); ?></div>
                <div class="lastNews">
                    <?php foreach ($result as $news): ?>
                        <?php
                        if (is_file(HOST . Core\HTML::media('images/news/main/' . $news->image))) {
                            $image = Core\HTML::media('images/news/main/' . $news->image);
                        } else {
                            $image = Core\HTML::media('pic/no-image.png');
                        }
                        ?>
                        <div class="mediaBlock mediaBlock--in-aside">
                            <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>">
                                <div class="mediaBlock__image" style="background-image: url('<?php echo $image; ?>');">
                                    <div class="mediaBlock__date">
                                        <?php echo date('d', $news->date); ?>
                                        <small><?php echo Core\Text::russianDate($news->date) ?></small>
                                    </div>
                                </div>
                            </a>
                            <div class="mediaBlock__content">
                                <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>"
                                   class="mediaBlock__title"><?php echo $news->name; ?></a>
                                <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>"
                                   class="mediaBlock__link"><?php echo __('Подробнее'); ?></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <a href="<?php echo Core\HTML::link('news'); ?>"
                       class="button button--primary button--expand"><?php echo __('Смотреть больше'); ?></a>
                </div>
            </div>
        </div>
    </section>
</div>