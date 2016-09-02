<?php if (count($images)): ?>
    <?php foreach ($images as $im): ?>
        <?php if (is_file(HOST . Core\HTML::media('images/projects/main/' . $im->image))): ?>
            <div class="loadedBlock <?= $im->status == 1 ? 'chk' : ''; ?>" data-image="<?= $im->id; ?>">
                <div class="loadedImage">
                    <img src="<?php echo Core\HTML::media('images/projects/main/' . $im->image); ?>" />
                </div>
                <div class="loadedControl">
                    <div class="loadedCtrl loadedView">
                        <button class="btn btn-primary btnImage otherBtn" alt="<?php echo __('Просмотр'); ?>" href="<?php echo Core\HTML::media('images/projects/original/' . $im->image); ?>"><i class="fa-zoom-in"></i></button>
                    </div>
                    <div class="loadedCtrl">
                        <button class="btn btn-warning otherBtn" alt="<?php echo __('Редактировать'); ?>" href="<?php echo \Core\General::crop('projects', 'main', $im->image, $_SERVER['HTTP_REFERER']); ?>"><i class="fa-pencil"></i></button>
                    </div>
                    <div class="loadedCtrl loadedDelete">
                        <button class="btn btn-danger otherBtn" data-id="<?php echo $im->id; ?>" alt="<?php echo __('Удалить'); ?>"><i class="fa-remove"></i></button>
                    </div>
                </div>
                <div class="loadedDrag"></div>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
<?php else: ?>
    <div class="alert alert-warning"><?php echo __('Нет загруженных фото!'); ?></div>
<?php endif; ?>