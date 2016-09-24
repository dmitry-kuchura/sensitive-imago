<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space">
    <?php foreach ($result as $gallery): ?>
        <?php
        if (is_file(HOST . Core\HTML::media('images/gallery/main/' . $gallery->image))) {
            $image = Core\HTML::media('images/gallery/main/' . $gallery->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        }
        ?>
        <div class="grid__cell">
            <a href="<?php echo Core\HTML::link('gallery/' . $gallery->alias); ?>" class="categoryLink"
               style="background-image: url('<?php echo $image; ?>');">
                <div class="categoryLink__content">
                    <div class="categoryLink__title"><p
                            class="categoryLink__overflow--photo"><?php echo $gallery->name; ?></p></div>
                </div>
            </a>
        </div>
    <?php endforeach; ?>
</div>
<?php echo $pager; ?>