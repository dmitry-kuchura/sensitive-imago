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
                                <input name="status" value="1" type="radio" <?php echo ($obj->status OR !$obj) ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_name">E-Mail</label>
                        <div class="">
                            <input id="f_name" class="form-control" name="FORM[email]" type="text" value="<?php echo $obj->email; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_city"><?php echo __('Город'); ?></label>
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
                        <label class="control-label" for="f_name"><?php echo __('Имя'); ?></label>
                        <div class="">
                            <input id="f_name" class="form-control valid" name="FORM[name]" type="text" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_date"><?php echo __('Дата'); ?></label>
                        <div class="">
                            <input id="f_date" type="text" name="FORM[date]" value="<?php echo strtotime($obj->date) ? $obj->date : ($obj->date ? date('d.m.Y', $obj->date) : date('d.m.Y')); ?>" class="myPicker valid form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Отзыв'); ?></label>
                        <div class="">
                            <textarea class="form-control valid" rows="10" name="FORM[text]"><?php echo $obj->text; ?></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_date_answer"><?php echo __('Дата ответа администратора'); ?></label>
                        <div class="">
                            <input class="form-control myPicker2" id="f_date_answer" type="text" name="FORM[date_answer]" value="<?php echo $obj->date_answer ? date('d.m.Y', $obj->date_answer) : NULL; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_text"><?php echo __('Ответ администратора'); ?></label>
                        <div class="">
                            <textarea name="FORM[answer]" id="f_text" rows="10" class="form-control"><?php echo $obj->answer; ?></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    $(function(){
        var pickerInit = function( selector ) {
            var date = $(selector).val();
            $(selector).datepicker({
                showOtherMonths: true,
                selectOtherMonths: false
            });
            $(selector).datepicker('option', $.datepicker.regional['ru']);
            var dateFormat = $(selector).datepicker( "option", "dateFormat" );
            $(selector).datepicker( "option", "dateFormat", 'dd.mm.yy' );
            $(selector).val(date);
        };
        pickerInit('.myPicker');
        pickerInit('.myPicker2');
    });
</script>