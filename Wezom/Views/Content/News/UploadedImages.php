<?php if (count($images)): ?>
    <?php foreach($images as $im): ?>
        <?php if (is_file(HOST.Core\HTML::media('images/news-slider/big/'.$im->image))): ?>
            <div class="loadedBlock <?= $im->status == 1 ? 'chk' : ''; ?>" data-image="<?=$im->id; ?>">
                <div class="loadedImage">
                    <img src="<?php echo Core\HTML::media('images/news-slider/big/'.$im->image); ?>" />
                </div>
                <div class="loadedControl">
                    <?php if(\Core\User::god() || \Core\User::get_access_for_controller('news') == 'edit'): ?>
                        <div class="loadedCtrl loadedCheck">
                            <label>
                                <input type="checkbox">
                                <ins></ins>
                                <span class="btn btn-info" alt="<?php echo __('Отметить'); ?>"><i class="fa-check-empty"></i></span>
                                <div class="checkInfo"></div>
                            </label>
                        </div>
                    <?php endif; ?>
                    <div class="loadedCtrl loadedView">
                        <button class="btn btn-primary btnImage otherBtn" alt="<?php echo __('Просмотр'); ?>" href="<?php echo Core\HTML::media('images/news-slider/big/'.$im->image); ?>"><i class="fa-zoom-in"></i></button>
                    </div>
                    <?php if(\Core\User::god() || \Core\User::get_access_for_controller('news') == 'edit'): ?>
                        <div class="loadedCtrl">
                            <button class="btn btn-warning otherBtn" alt="<?php echo __('Редактировать'); ?>" href="<?php echo \Core\General::crop('news-slider', 'big', $im->image, $_SERVER['HTTP_REFERER']); ?>"><i class="fa-pencil"></i></button>
                        </div>
                        <div class="loadedCtrl loadedDelete">
                            <button class="btn btn-danger otherBtn" data-id="<?php echo $im->id; ?>" alt="<?php echo __('Удалить'); ?>"><i class="fa-remove"></i></button>
                        </div>
                    <?php endif; ?>
                </div>
                <?php if(\Core\User::god() || \Core\User::get_access_for_controller('news') == 'edit'): ?>
                    <div class="loadedDrag"></div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
<?php else: ?>
    <div class="alert alert-warning"><?php echo __('Нет загруженных фото!'); ?></div>
<?php endif; ?>