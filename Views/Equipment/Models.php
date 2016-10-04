<div class="grid grid--1 grid--sm-2  grid--lg-1 grid--xl-2 grid--space-x2">
    <?php foreach ($result as $item): ?>
        <?php if (is_file(HOST . Core\HTML::media('images/equipment/main/' . $item->image))) {
            $image = Core\HTML::media('images/equipment/main/' . $item->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        } ?>
        <div class="grid__cell mediaBlock mediaBlock--equipment">
            <a href="<?php echo Core\HTML::link('models/' . $item->alias); ?>" class="mediaBlock__image"
               style="background-image: url('<?php echo $image; ?>');"></a>
            <div class="mediaBlock__content">
                <div class="mediaBlock__title">
                    <a href="<?php echo Core\HTML::link('models/' . $item->alias); ?>"
                       class="mediaBlock__overflow"><?php echo $item->name; ?></a>
                </div>
                <div class="mediaBlock__text">
                    <div class="mediaBlock__textInner"><?php echo $item->short; ?></div>
                </div>
                <a href="<?php echo Core\HTML::link('models/' . $item->alias); ?>"
                   class="button button--primary"><?php echo __('Подробнее'); ?></a>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<hr>
<div class="grid grid--1 grid--sm-2 grid--space-x2">
    <?php foreach ($kids as $kid): ?>
        <?php if (is_file(HOST . Core\HTML::media('images/catalog_tree/main/' . $kid->image))) {
            $image = Core\HTML::media('images/catalog_tree/main/' . $kid->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        } ?>

        <?php switch ($kid->param) {
            case '0':
                $link = Core\HTML::link('equipment/' . $kid->alias);
                break;
            case '1':
                $link = Core\HTML::link($kid->alias);
                break;
        } ?>
        <div class="grid__cell">
            <div class="mediaBlock mediaBlock--air">
                <div class="mediaBlock__image"
                     style="background-image: url('<?php echo $image; ?>');">
                </div>
                <div class="mediaBlock__content ">
                    <div class="categoryLink__title"><?php echo $kid->name; ?></div>

                    <a href="<?php echo $link; ?>" class="button button--inverse"><?php echo __('Подробнее'); ?></a>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<div class="sectionTitle sectionTitle--inner _mt-x3"><?php echo $seo->h1; ?></div>
<div class="wTxt"><?php echo $seo->text; ?></div>
