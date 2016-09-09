<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space">
    <?php foreach ($result as $gallery): ?>
        <div class="grid__cell">
            <a href="<?php echo Core\HTML::link('gallery/' . $gallery->alias); ?>" class="categoryLink" style="background-image: url('<?php echo Core\HTML::media('images/gallery/main/' . $gallery->image); ?>');">
                <div class="categoryLink__content">
                    <div class="categoryLink__title"><p class="categoryLink__overflow--photo"><?php echo $gallery->name; ?></p></div>
                </div>
            </a>
        </div>
    <?php endforeach; ?>
</div>
<?php echo $pager; ?>