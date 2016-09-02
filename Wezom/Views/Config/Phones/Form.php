<form id="myForm" class="rowSection validat" method="post" action="">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-12">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Основные данные'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
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
                        <label class="control-label" for="f_group"><?php echo __('Группа'); ?></label>
                        <div class="">
                            <select class="form-control valid" name="FORM[group]" id="f_group">
                                <?php foreach(\Core\Config::get('contacts.groups') AS $group_id => $group_name): ?>
                                    <option value="<?php echo $group_id; ?>" <?php echo $group_id == $obj->group ? 'selected' : NULL; ?>><?php echo $group_name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <?php if ($obj->group == 0):?>
                        <div class="form-group">
                            <label class="control-label" for="f_group"><?php echo __('Язык'); ?></label>
                            <div class="">
                                <select class="form-control valid" name="FORM[lang]" id="f_group">
                                    <option value="">Выберите язык</option>
                                    <option value="ru" <?php echo $obj->lang == 'ru' ? 'selected' : NULL; ?>>Руский</option>
                                    <option value="en" <?php echo $obj->lang == 'en' ? 'selected' : NULL; ?>>English</option>
                                </select>
                            </div>
                        </div>
                    <?php endif; ?>
                    <div class="form-group">
                        <label class="control-label" for="f_name"><?php echo __('Номер телефона'); ?></label>
                        <div class="">
                            <input id="f_name" class="form-control valid" type="text" name="FORM[name]" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>