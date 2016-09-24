<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space">
    <?php foreach ($result as $photo): ?>
        <div class="grid__cell">
            <?php if (is_file(HOST . Core\HTML::media('images/gallery_images/main/' . $photo->image))) {
                $image = Core\HTML::media('images/gallery_images/main/' . $photo->image);
            } else {
                $image = Core\HTML::media('pic/no-image.png');
            } ?>
            <span class="categoryLink" style="background-image: url('<?php echo $image; ?>');"></span>
        </div>
    <?php endforeach; ?>
</div>