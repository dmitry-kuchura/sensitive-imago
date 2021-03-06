<?php if (count($images)): ?>
    <?php foreach($images as $im): ?>
        <?php if (is_file(HOST.Core\HTML::media('images/equipment/main/'.$im->image))): ?>
            <div class="loadedBlock <?= $im->status == 1 ? 'chk' : ''; ?>" data-image="<?=$im->id; ?>">
                <div class="loadedImage">
                    <img src="<?php echo Core\HTML::media('images/equipment/main/'.$im->image); ?>" />
                </div>
                <div class="loadedControl">
                    <?php if(\Core\User::god() || \Core\User::get_access_for_controller('items') == 'edit'): ?>
                        <div class="loadedCtrl loadedCover">
                            <label>
                                <input id="def-img-<?=$im->id; ?>" type="radio" <?= $im->main == 1 ? 'checked="checked"' : ''; ?> name="default_image" value="<?=$im->id; ?>" />
                                <ins></ins>
                                <span class="btn btn-success" alt="<?php echo __('Обложка'); ?>"><i class="fa-bookmark-empty"></i></span>
                                <div class="checkCover"></div>
                            </label>
                        </div>
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
                        <button class="btn btn-primary btnImage" alt="<?php echo __('Просмотр'); ?>" href="<?php echo Core\HTML::media('images/equipment/main/'.$im->image); ?>"><i class="fa-zoom-in"></i></button>
                    </div>
                    <?php if(\Core\User::god() || \Core\User::get_access_for_controller('items') == 'edit'): ?>
                        <div class="loadedCtrl">
                            <button class="btn btn-warning" alt="<?php echo __('Редактировать'); ?>" href="<?php echo \Core\General::crop('equipment', 'main', $im->image, $_SERVER['HTTP_REFERER']); ?>"><i class="fa-pencil"></i></button>
                        </div>
                        <div class="loadedCtrl loadedDelete">
                            <button class="btn btn-danger" data-item="<?php echo Core\Route::param('id'); ?>" data-id="<?php echo $im->id; ?>" alt="Удалить"><i class="fa-remove"></i></button>
                        </div>
                    <?php endif; ?>
                </div>
                <?php if(\Core\User::god() || \Core\User::get_access_for_controller('items') == 'edit'): ?>
                    <div class="loadedDrag"></div>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    <?php endforeach; ?>
<?php else: ?>
    <div class="alert alert-warning"><?php echo __('Нет загруженных фото!'); ?></div>
<?php endif; ?>
