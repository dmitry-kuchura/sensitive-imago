<div class="grid__cell grid__cell grid__cell--12 grid__cell--md-auto grid__cell--grow grid__cell--md-nogrow">
    <section class="pageAside js-multiLevelMenu">
        <div class="grid grid--justify-around grid--space grid--md-nospace">
            <div class="asideMenu__cell grid__cell grid__cell--grow">
                <ul class="asideMenu">
                    <?php foreach ($catalog as $obj): ?>
                        <?php switch ($obj->param) {
                            case '0':
                                $link = Core\HTML::link('equipment/' . $obj->alias);
                                break;
                            case '1':
                                $link = Core\HTML::link($obj->alias);
                                break;
                        } ?>
                        <li class="<?php echo in_array($obj->alias, ['models', 'features']) ? 'has-subMenu' : ''; ?> <?php if (Core\Route::param('alias') == $obj->alias) { echo 'is-active is-open'; } ?>">
                            <a href="<?php echo $link; ?>"><?php echo $obj->name; ?></a>
                            <?php if ($obj->alias == 'models'): ?>
                                <ul>
                                    <?php foreach ($models as $model): ?>
                                        <li <?php echo Core\Route::param('alias') == $model->alias ? 'class="is-active"' : ''; ?>><a href="<?php echo Core\HTML::link('models/' . $model->alias); ?>"><?php echo $model->name; ?></a></li>
                                    <?php endforeach; ?>
                                    <?php foreach ($kids as $kid): ?>
                                        <li <?php echo Core\Route::param('alias') == $kid->alias ? 'class="is-active"' : ''; ?>><a href="<?php echo Core\HTML::link($kid->alias); ?>"><?php echo $kid->name; ?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                            <?php if ($obj->alias == 'features'): ?>
                                <ul>
                                    <?php foreach ($features[1] as $link): ?>
                                        <li class="<?php if (isset($features[$link->id])) { echo 'has-subMenu'; } ?> <?php if (Core\Route::param('alias') == $link->alias) { echo 'is-active is-open'; } ?>">
                                            <a href="<?php echo Core\HTML::link('features/' . $link->alias); ?>"><?php echo $link->name; ?></a>
                                            <?php if (isset($features[$link->id])): ?>
                                                <ul>
                                                    <?php foreach ($features[$link->id] as $sub): ?>
                                                        <li <?php echo Core\Route::param('alias') == $sub->alias ? 'class="is-active"' : ''; ?>><a href="<?php echo Core\HTML::link('features/' . $sub->alias); ?>"><?php echo $sub->name; ?></a></li>
                                                    <?php endforeach; ?>
                                                </ul>
                                            <?php endif; ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                    <?php if (Core\Arr::get($menu, 3, [])): ?>
                        <?php foreach ($menu[3] AS $key => $value): ?>
                            <li>
                                <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
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