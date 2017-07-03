<div class="grid grid--2 grid--sm-3 grid--md-2 grid--lg-3 grid--space">
    <?php foreach ($result as $video): ?>
        <?php $link = explode('?v=', $video->alias); ?>
        <div class="grid__cell">
            <a href="<?php echo $video->alias; ?>" class="videoLink"
               style='background-image: url("//img.youtube.com/vi/<?php echo $link[1]; ?>/mqdefault.jpg");'></a>
        </div>
    <?php endforeach; ?>

</div>
<?php echo $pager; ?>
