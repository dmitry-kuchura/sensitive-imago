<?php $link = explode('?v=', $video->youtube); ?>
<div class="grid__cell" data-page="<?php echo $page; ?>">
    <a href="<?php echo $video->youtube; ?>" class="videoLink"
       style='background-image: url("//img.youtube.com/vi/<?php echo $link[1]; ?>/maxresdefault.jpg");'></a>
</div>