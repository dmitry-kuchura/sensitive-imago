<div class="grid__cell grid__cell grid__cell--12 grid__cell--md-auto grid__cell--grow grid__cell--md-nogrow">
    <section class="pageAside">
        <div class="grid grid--justify-around grid--space grid--md-nospace">
            <div class="asideMenu__cell grid__cell grid__cell--grow">
                <?php if (Core\Arr::get($menu, 2, [])): ?>
                    <?php if($bussines): ?>
                    <ul class="asideMenu js-multiLevelMenu">
                        <?php foreach ($bussinesMenu[0] as $value): ?>
                            <li class="<?php echo $alias == str_replace('/', '', $value->url) ? 'is-active' : ''; ?> <?php echo isset($bussinesMenu[$value->id]) ? 'has-subMenu' : ''; ?>">
                                <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                                <?php if (isset($bussinesMenu[$value->id])): ?>
                                    <ul>
                                        <?php foreach ($bussinesMenu[$value->id] as $obj): ?>
                                            <li class="<?php echo $alias == str_replace('/', '', $obj->url) ? 'is-active' : ''; ?> <?php echo isset($bussinesMenu[$obj->id]) ? 'has-subMenu' : ''; ?>">
                                                <a href="<?php echo Core\HTML::link($obj->url); ?>"><?php echo $obj->name; ?></a>
                                                <?php if (isset($bussinesMenu[$obj->id])): ?>
                                                    <ul>
                                                        <?php foreach ($bussinesMenu[$obj->id] as $sameObj): ?>
                                                            <li <?php echo $alias == str_replace('/', '', $sameObj->url) ? 'class="is-active"' : ''; ?>>
                                                                <a href="<?php echo Core\HTML::link($sameObj->url); ?>"><?php echo $sameObj->name; ?></a>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php endif; ?>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <?php else: ?>
                        <ul class="asideMenu js-multiLevelMenu">
                            <?php $alias = Core\HTML::activeUrl(); ?>
                            <?php foreach ($menu[2] AS $key => $value): ?>
                                <li <?php echo $alias == $value->url ? 'class="is-active"' : ''; ?>>
                                    <a href="<?php echo Core\HTML::link($value->url); ?>"><?php echo $value->name; ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                <?php endif; ?>
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