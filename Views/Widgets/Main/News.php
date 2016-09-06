<section class="pageSection _bg-white">
    <div class="pageSize">
        <div class="sectionTitle"><?php echo __('Свежие новости'); ?></div>
        <div class="grid grid--1 grid--sm-2 grid--space-x2 grid--items-start">
            <?php foreach ($result as $news): ?>
                <div class="grid__cell mediaBlock">
                    <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="mediaBlock__image" style="background-image: url('<?php echo Core\HTML::media('images/news/main/' . $news->image); ?>');">
                        <div class="mediaBlock__date"><?php echo date('d', $news->date); ?><small><?php echo Core\Text::russianDate($news->date)?></small></div>
                    </a>
                    <div class="mediaBlock__content">
                        <div class="mediaBlock__title">
                            <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="mediaBlock__overflow"><?php echo $news->name; ?></a>
                        </div>
                        <div class="mediaBlock__text">
                            <div class="mediaBlock__textInner"><?php echo Core\Text::limit_words($news->text, 150); ?></div>
                        </div>
                        <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="button button--inverse"><?php echo __('Подробнее'); ?></a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="pageSection__footer">
            <a href="<?php echo Core\HTML::link('news'); ?>" class="button button--primary button--in-sectionFooter"><?php echo __('Смотреть больше'); ?></a>
        </div>
    </div>
</section>