<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space mfi-gallery">
    <?php foreach ($result as $photo): ?>
        <div class="grid__cell">
            <?php if (is_file(HOST . Core\HTML::media('images/gallery_images/big/' . $photo->image))) {
                $image = Core\HTML::media('images/gallery_images/main/' . $photo->image);
                $original = Core\HTML::media('images/gallery_images/big/' . $photo->image);
            } else {
                $image = Core\HTML::media('pic/no-image.png');
                $original = Core\HTML::media('pic/no-image.png');
            } ?>
            <a href="<?php echo $original; ?>" class="categoryLink" style="background-image: url('<?php echo $image; ?>');"></a>
        </div>
    <?php endforeach; ?>
</div>