<div class="grid grid--1 grid--lg-2 grid--space-x2">
    <?php foreach ($result as $news): ?>
        <?php
        if (is_file(HOST . Core\HTML::media('images/news/main/' . $news->image))) {
            $image = Core\HTML::media('images/news/main/' . $news->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        }
        ?>
        <div class="grid__cell">
            <div class="mediaBlock mediaBlock--air">
                <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="mediaBlock__image" style="background-image: url('<?php echo $image; ?>');"></a>
                <div class="mediaBlock__date">
                    <?php echo date('d', $news->date); ?>
                    <small><?php echo Core\Text::russianDate($news->date) ?></small>
                </div>
                <div class="mediaBlock__content">
                    <div class="mediaBlock__title">
                        <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>"><?php echo $news->name; ?></a>
                    </div>
                    <div class="mediaBlock__text">
                        <div class="mediaBlock__textInner"><?php echo Core\Text::limit_words($news->text, 150); ?></div>
                    </div>
                    <a href="<?php echo Core\HTML::link('news/' . $news->alias); ?>" class="button button--inverse"><?php echo __('Подробнее'); ?></a>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<?php echo $pager; ?>