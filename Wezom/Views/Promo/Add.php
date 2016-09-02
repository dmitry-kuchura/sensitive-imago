<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-6">
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
                        <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                        <div class="">
                            <input class="form-control valid" id="f_name" name="FORM[name]" type="text" value="<?php echo $obj->name; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_code"><?php echo __('Код'); ?></label>
                        <div class="">
                            <div class="input-group">
                                <input class="form-control valid" id="f_code" name="FORM[code]" type="text" value="<?php echo $obj->code; ?>" />
                                <span class="input-group-btn">
                                    <button class="btn codeAction" type="button"><?php echo __('Сгенерировать автоматически'); ?></button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_percent"><?php echo __('Величина скидки'); ?> %</label>
                        <div class="">
                            <input class="form-control valid" id="f_percent" name="FORM[percent]" type="text" value="<?php echo $obj->percent ? number_format($obj->percent, 4, '.', '') : NULL; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_start_amount">
                            <?php echo __('Итого'); ?>
                            <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<?php echo __('Минимальная сумма, начиная с которой купон действителен'); ?>"></i>
                        </label>
                        <div class="">
                            <input class="form-control valid" id="f_start_amount" name="FORM[start_amount]" type="text" value="<?php echo (int) $obj->start_amount; ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_date_from"><?php echo __('Дата начала акции'); ?></label>
                        <div class="">
                            <input class="form-control valid fPicker" id="f_date_from" name="FORM[date_from]" type="text" value="<?php echo $obj->date_from ? date('d.m.Y', $obj->date_from) : date('d.m.Y'); ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_date_to"><?php echo __('Дата конца акции'); ?></label>
                        <div class="">
                            <input class="form-control valid fPicker" id="f_date_to" name="FORM[date_to]" type="text" value="<?php echo $obj->date_to ? date('d.m.Y', $obj->date_to) : date('d.m.Y'); ?>" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_max_uses">
                            <?php echo __('Количество применений купона'); ?>
                            <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<?php echo __('Сколько раз максимально может использоваться один купон. Для бесконечного использования оставить пустым'); ?>"></i>
                        </label>
                        <div class="">
                            <input class="form-control" id="f_max_uses" name="FORM[max_uses]" type="text" value="<?php echo $obj->max_uses; ?>" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="widget">
            <div class="widgetHeader myWidgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Категории и товары'); ?>
                </div>
            </div>

            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <label class="control-label" for="f_groups">
                            <?php echo __('Категория'); ?>
                            <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<?php echo __('Выбрать все товары в выбранных категориях'); ?>"></i>
                        </label>
                        <div class="">
                            <label class="checkerWrap ckbxWrap">
                                <input type="checkbox" class="allGroups" <?php echo sizeof($thisGroups) == sizeof($groupsObject) ? 'checked' : NULL; ?>>
                                <span class=""><?php echo __('Выбрать все'); ?></span>
                            </label>
                            <?php echo \Core\View::tpl(array('result' => $groups, 'current' => 0, 'thisGroups' => $thisGroups), 'Promo/Rec'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>


<style>
    .groupThisCheckboxes {
        padding-left: 50px;
    }
</style>
<script>
    $('.codeAction').on('click', function(){
        var it = $(this);
        $.ajax({
            url: '/wezom/ajax/generateCode',
            type: 'POST',
            dataType: 'JSON',
            success: function(data) {
                if(data.success) {
                    $('#f_code').val(data.code);
                }
            }
        });
    });
    $('.mainGroup').on('click', function(){
        if($(this).prop('checked')) {
            $(this).closest('.checkboxesGroup').find('input[type="checkbox"]').prop('checked', true).closest('label').addClass('checked');
        } else {
            $(this).closest('.checkboxesGroup').find('input[type="checkbox"]').prop('checked', false).closest('label').removeClass('checked');
        }
    });
    $('.allGroups').on('click', function(){
        if($(this).prop('checked')) {
            $('.checkboxesGroup').find('input[type="checkbox"]').prop('checked', true).closest('label').addClass('checked');
        } else {
            $('.checkboxesGroup').find('input[type="checkbox"]').prop('checked', false).closest('label').removeClass('checked');
        }
    });
</script>