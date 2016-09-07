<div class="sectionTitle sectionTitle--inner"><?php echo $h1; ?></div>
<div class="article__image">
    <div class="mediaBlock__date">
        <?php echo date('d', $news->date); ?>
        <small><?php echo Core\Text::russianDate($news->date)?></small>
    </div>
    <?php if (is_file(HOST . Core\HTML::media('images/news/popup/' . $news->image))): ?>
        <img src="<?php echo Core\HTML::media('images/news/popup/' . $news->image); ?>" alt="">
    <?php else: ?>
        <img src="<?php echo Core\HTML::media('pic/no-image.png'); ?>" alt="">
    <?php endif; ?>
</div>
<div class="wTxt"><?php echo $news->text; ?></div>
<div class="pageSection__footer ">
    <a href="<?php echo Core\HTML::link('news'); ?>" class="button--in-sectionFooter button button--inverse"><?php echo __('К списку новостей'); ?></a>
    <a href="#" class="button--in-sectionFooter button button--primary"><?php echo __('Узнать прайс'); ?></a>
</div>