<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="col-md-<?php echo $obj->id ? 7 : 12; ?>">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Личные данные'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-actions" style="display: none;">
                        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Опубликовано'); ?></label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="status" value="0" type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                <?php echo __('Нет'); ?>
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="status" value="1" type="radio" <?php echo ($obj->status OR !$obj) ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Роль'); ?></label>
                        <div class="">
                            <select name="FORM[role_id]" class="form-control valid">
                                <?php foreach( $roles AS $id => $name ): ?>
                                    <option value="<?php echo $id; ?>" <?php echo $id == $obj->role_id ? 'selected' : NULL; ?>><?php echo $name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Имя'); ?></label>
                        <div class="">
                            <input class="form-control valid" name="FORM[name]" type="text" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Логин'); ?></label>
                        <div class="">
                            <input class="form-control valid" name="FORM[login]" type="text" value="<?php echo $obj->login; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">
                            <?php echo __('Пароль'); ?>
                            <?php if( $obj->id ): ?>
                                <i class="fa-info-circle text-info bs-tooltip nav-hint liTipLink" title="<?php echo __('Если нет необходимости менять пароль, просто оставьте это поле пустым, тогда он не изменится'); ?>" style="white-space: nowrap;"></i>
                            <?php endif; ?>
                        </label>
                        <div class="">
                            <input class="form-control <?php echo $obj->id ? NULL : 'valid'; ?>" name="password" type="password" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php if( $obj->id ): ?>
        <div class="col-md-5">
            <div class="widget">
                <div class="widgetHeader myWidgetHeader">
                    <div class="widgetTitle">
                        <i class="fa-reorder"></i>
                        <?php echo __('Статистика'); ?>
                    </div>
                </div>
                <div class="pageInfo alert alert-info">
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Опубликован'); ?></strong></div>
                        <div class="col-md-6"><?php echo $obj->status == 1 ? 'Да' : 'Нет'; ?></div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Дата создания аккаунта'); ?></strong></div>
                        <div class="col-md-6"><?php echo $obj->created_at ? date('d.m.Y H:i:s', $obj->created_at) : '---'; ?></div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Дата последней авторизации'); ?></strong></div>
                        <div class="col-md-6"><?php echo $obj->last_login ? date('d.m.Y H:i:s', $obj->last_login) : '---'; ?></div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Количество авторизаций на сайте'); ?></strong></div>
                        <div class="col-md-6"><?php echo (int) $obj->logins; ?></div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
</form>