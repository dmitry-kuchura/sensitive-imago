<div class="works_item">
    <div class="works_item_wrap">
        <div class="works_item_img">
            <?php if (is_file(HOST . Core\HTML::media('images/projects/main/' . $project->image))): ?>
                <img src="<?php echo Core\HTML::media('/images/projects/main/' . $project->image); ?>" alt="">
            <?php else: ?>
                <img src="<?php echo Core\HTML::media('pic/no-image.png'); ?>" alt="">
            <?php endif; ?>
        </div>
        <div class="works_opus">
            <?php
            $imgs = [];
            foreach ($project->images as $img) {
                if (is_file(HOST . Core\HTML::media('/images/projects/popup/' . $img->image))) {
                    $imgs[] = Core\HTML::media('/images/projects/popup/' . $img->image);
                }
            }
            ?>
            <div class="works_category"><?php echo $project->cat_name; ?></div>
            <div class="works_name"><?php echo $project->name; ?></div>
            <?php $from = ['p class="text-justify"', '\n', chr(10), chr(13)]; ?>
            <?php $to = ['p', '', '', '']; ?>
            <?php $text = strip_tags($project->text, '<p></p>'); ?>
            <div data-markup='{"prev":"<?php echo __('Предыдущий проект'); ?>","next":"<?php echo __('Следующий проект'); ?>","name": "<?php echo $project->name; ?>","share":"<?php echo __('Поделиться'); ?>","text":"<?php echo str_replace($from, $to, $text) ?>","id":"<?php echo $project->proj_id; ?>","img":<?php echo json_encode($imgs); ?>}' class="works_link mfiW"><?php echo __("Подробнее"); ?></div>
        </div>
    </div>
</div>