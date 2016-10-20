<div class="grid grid--justify-center grid--2 grid--sm-3 grid--lg-4">
    <?php foreach ($result as $obj): ?>
        <?php
        if (is_file(HOST . Core\HTML::media('images/team/main/' . $obj->image))) {
            $image = Core\HTML::media('images/team/main/' . $obj->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        }
        ?>
        <div class="grid__cell">
            <span href="#" class="person">
                <div class="person__image"
                     style="background-image: url('<?php echo $image; ?>');"></div>
                <div class="person__name"><?php echo $obj->name; ?></div>
                <div class="person__position"><?php echo $obj->position; ?></div>
            </span>
        </div>
    <?php endforeach; ?>
</div>
<?php echo $pager; ?>