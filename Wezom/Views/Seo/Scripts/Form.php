<form id="myForm" class="rowSection validat" method="post" action="">
    <div class="col-md-12">
        <div class="widget">
            <div class="widgetContent">
                <div class="form-horizontal row-border">
                    <div class="form-actions" style="display: none;">
                        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="f_place"><?php echo __('Место расположения'); ?></label>
                        <div class="col-md-10">
                            <select id="f_place" name="FORM[place]" class="valid">
                                <option value="head" <?php echo $obj->place == 'head' ? 'selected' : '' ?>><?php echo __('Вставить перед'); ?> <?php echo htmlspecialchars('</head>') ?></option>
                                <option value="body" <?php echo $obj->place == 'body' ? 'selected' : '' ?>><?php echo __('Вставить после'); ?> <?php echo htmlspecialchars('<body>') ?></option>
                                <option value="counter" <?php echo $obj->place == 'counter' ? 'selected' : '' ?>><?php echo __('Счетчик (в футере)'); ?></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label" for="f_name"><?php echo __('Название'); ?></label>
                        <div class="col-md-10">
                            <input id="f_name" class="form-control valid" type="text" name="FORM[name]" value="<?php echo $obj->name; ?>"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-2 control-label"><?php echo __('Опубликовано'); ?></label>
                        <div class="col-md-10">
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
                        <label class="col-md-2 control-label" for="f_script"><?php echo __('Код'); ?></label>
                        <div class="col-md-10">
                            <textarea id="f_script" class="form-control" name="FORM[script]" rows="20"><?php echo $obj->script; ?></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>