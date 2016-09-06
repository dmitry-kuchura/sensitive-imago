<div class="sectionTitle sectionTitle--inner"><?php echo $h1; ?></div>
<div class="article__image">
    <div class="mediaBlock__date">
        <?php echo date('d', $news->date); ?>
        <small>фев</small>
    </div>
    <img src="<?php echo Core\HTML::media('images/news/popup/' . $news->image); ?>" alt="">
</div>
<div class="wTxt"><?php echo $news->text; ?></div>
<div class="pageSection__footer ">
    <a href="<?php echo Core\HTML::link('news'); ?>" class="button--in-sectionFooter button button--inverse"><?php echo __('К списку новостей'); ?></a>
    <a href="#" class="button--in-sectionFooter button button--primary"><?php echo __('Узнать прайс'); ?></a>
</div>