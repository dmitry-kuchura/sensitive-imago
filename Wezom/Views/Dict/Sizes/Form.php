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
                        <label class="control-label" for="f_group"><?php echo __('Группа'); ?></label>
                        <div class="">
                            <select class="form-control valid" name="FORM[group]" id="f_group">
                                <?php foreach($groups AS $value): ?>
                                    <option value="<?php echo $value->id; ?>" <?php echo $value->id == $obj->group ? 'selected' : NULL; ?>><?php echo $value->name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                        <div class="">
                            <input id="f_name" class="form-control translitSource valid" type="text" name="FORM[name]" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_alias">
                            <?php echo __('Алиас'); ?>
                        </label>
                        <div class="">
                            <div class="input-group">
                                <input id="f_alias" class="form-control translitConteiner valid" name="FORM[alias]" type="text" value="<?php echo $obj->alias; ?>" />
                                <span class="input-group-btn">
                                    <button class="btn translitAction" type="button"><?php echo __('Заполнить автоматически'); ?></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>