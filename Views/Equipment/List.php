<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space">
    <?php foreach ($result as $obj): ?>
        <?php
        if (is_file(HOST . Core\HTML::media('images/catalog_tree/main/' . $obj->image))) {
            $image = Core\HTML::media('images/catalog_tree/main/' . $obj->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        }
        ?>
        <?php switch ($obj->param) {
            case '0':
                $link = Core\HTML::link('equipment/' . $obj->alias);
                break;
            case '1':
                $link = Core\HTML::link($obj->alias);
                break;
        } ?>
        <div class="grid__cell">
            <a href="<?php echo $link; ?>" class="categoryLink"
               style="background-image: url('<?php echo $image; ?>');">
                <div class="categoryLink__content categoryLink__content--bigger">
                    <div class="categoryLink__title">
                        <p class="categoryLink__overflow"><?php echo $obj->name; ?></p>
                    </div>
                </div>
            </a>
        </div>
    <?php endforeach; ?>
</div>
