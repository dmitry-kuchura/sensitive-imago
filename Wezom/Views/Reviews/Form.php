<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
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
                                <input name="status" value="1" type="radio" <?php echo ($obj->status OR ! $obj) ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_name"><?php echo __('Имя'); ?></label>
                        <div class="">
                            <input id="f_name" class="form-control valid" name="FORM[name]" type="text" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_title"><?php echo __('Возраст'); ?></label>
                        <div class="">
                            <input id="f_title" class="form-control" name="FORM[title]" type="text" value="<?php echo $obj->title; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_title"><?php echo __('Телефон'); ?></label>
                        <div class="">
                            <input id="f_title" class="form-control" name="FORM[phone]" type="text" value="<?php echo $obj->phone; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_city"><?php echo __('Страна'); ?></label>
                        <div class="">
                            <input id="f_city" class="form-control" name="FORM[city]" type="text" value="<?php echo $obj->city; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_mark"><?php echo __('Оценка'); ?></label>
                        <div class="">
                            <select id="f_mark" class="form-control valid" name="FORM[mark]">
                                <option value="5" <?php echo $obj->mark == 5 ? 'selected' : NULL; ?>>5</option>
                                <option value="4" <?php echo $obj->mark == 4 ? 'selected' : NULL; ?>>4</option>
                                <option value="3" <?php echo $obj->mark == 3 ? 'selected' : NULL; ?>>3</option>
                                <option value="2" <?php echo $obj->mark == 2 ? 'selected' : NULL; ?>>2</option>
                                <option value="1" <?php echo $obj->mark == 1 ? 'selected' : NULL; ?>>1</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Отзыв'); ?></label>
                        <div class="">
                            <textarea class="form-control valid" rows="10" name="FORM[text]"><?php echo $obj->text; ?></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_language"><?php echo __('Язык'); ?></label>
                        <div class="">
                            <select id="f_language" multiple class="form-control valid" name="FORM[language][]" value='' style="min-height: 120px;">
                                <option value="ru">Русский</option>
                                <option value="en">Английский</option>
                                <option value="sp">Испанский</option>
                                <option value="de">Немецкий</option>
                                <option value="fr">Французкий</option>
                            </select>
                        </div>
                        <input type="hidden" value='<?php echo $obj->language; ?>' id="h_language">
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    $(function(){
        $('#f_language').val(JSON.parse($('#h_language').val()));
    });
</script>