<form id="myForm" class="rowSection validat" method="post" action="">
    <div class="col-md-12">
        <div class="widget">
            <div class="widgetContent">
                <div class="form-horizontal row-border">
                    <div class="form-actions" style="display: none;">
                        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
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
                    <?php if ($obj->created_at): ?>
                        <div class="form-group">
                            <label style="padding-top:0;" class="col-md-2 control-label"><?php echo __('Дата'); ?></label>
                            <div class="col-md-10">
                                <?php echo date( 'd.m.Y H:i:s', $obj->created_at ); ?>
                            </div>
                        </div>
                    <?php endif ?>
                    <div class="form-group">
                        <label style="padding-top:0;" class="col-md-2 control-label"><?php echo __('Имя'); ?></label>
                        <div class="col-md-10">
                            <?php echo html_entity_decode($obj->name); ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="padding-top:0;" class="col-md-2 control-label">E-Mail</label>
                        <div class="col-md-10">
                            <a href="mailto:<?php echo $obj->email; ?>"><?php echo $obj->email; ?></a>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="padding-top:0;" class="col-md-2 control-label"><?php echo __('Город'); ?></label>
                        <div class="col-md-10">
                            <?php echo $obj->city; ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="padding-top:0;" class="col-md-2 control-label"><?php echo __('Тема обращения'); ?></label>
                        <div class="col-md-10">
                            <?php echo $obj->other; ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label style="padding-top:0;" class="col-md-2 control-label"><?php echo __('Региональное предстваительсво'); ?></label>
                        <div class="col-md-10">
                            <?php echo $branch->name; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>