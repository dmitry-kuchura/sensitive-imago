<form id="myForm" data-id="<?php echo \Core\Route::param('id'); ?>" class="rowSection validat" method="post" action="" enctype="multipart/form-data" data-action="users">
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
                    <div class="rowSection">
                        <div class="form-group col-md-3">
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
                        <div class="form-group col-md-3">
                            <label class="control-label"></label>
                            <div class="">
                                <a id="sendTheEmail" data-id="<?php echo \Core\Route::param('id'); ?>" class="btn btn-info bs-tooltip" title="<?php echo __('Отправить уведомление на почту'); ?>"><?php echo __('Уведомить пользователя'); ?></a>
                            </div>
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
                            <input class="form-control" id="f_code" type="text" value="<?php echo $obj->code; ?>" disabled />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_amount"><?php echo __('Сумма скидки'); ?> $</label>
                        <div class="">
                            <input class="form-control valid" id="f_amount" name="FORM[amount]" type="text" value="<?php echo $obj->amount ? $obj->amount : NULL; ?>" />
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
        <div class="widget box">
            <div class="widgetHeader myWidgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Выбор пользователя'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div id="itemPlace" class="form-vertical row-border">
                        <?php if( $user ): ?>
                            <div class="someBlock">
                                <a target="_blank" href="/wezom/users/edit/<?php echo $user->id; ?>"><?php echo $user->last_name.' '.$user->name; ?></a>
                            </div>
                            <div class="someBlock"><b>E-Mail:</b> <a href="mailto:<?php echo $user->email; ?>"><?php echo $user->email; ?></a></div>
                            <div class="someBlock"><b><?php echo __('Номер телефона'); ?>:</b> <?php echo $user->phone; ?></div>
                        <?php else: ?>
                            <p class="relatedMessage"><?php echo __('Для того, чтобы привязать пользователя к сертификату, найдите и выберите его в списке ниже!'); ?></p>
                        <?php endif; ?>
                    </div>
                    <input type="hidden" name="FORM[user_id]" value="<?php echo $user->id; ?>" id="orderItemId" />
                    <div class="clear"></div>
                    <div id="orderItemsBlock" class="usersSearchBlock">
                        <div class="form-group" style="margin-top: 10px;">
                            <div class="col-md-12">
                                <input data-name="search" class="form-control" type="text" placeholder="<?php echo __('Начните вводить название Фамилию и Имя, E-Mail или ID нужного пользователя'); ?>" />
                            </div>
                        </div>
                        <div class="widgetContent" style="min-height: 150px;">
                            <div id="orderItemsList" class="form-vertical row-border" data-id="<?php echo \Core\Route::param('id'); ?>" data-limit="16">
                                <p class="relatedMessage"><?php echo __('Начните писать Фамилию и Имя, E-Mail или ID пользователя в поле для ввода расположенном выше. После чего на этом месте появится список отфильтрованных записей'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
<div id="sendTheEmailForm" style="display: none;">
    <form class="rowSection validat" method="post" action="<?php echo \Core\HTML::link('wezom/coupons/sendEmail/'.\Core\Route::param('id')); ?>" enctype="multipart/form-data" data-action="users">
        <div class="form-vertical row-border">
            <div class="form-group">
                <label class="control-label" for="f_subject"><?php echo __('Заголовок письм'); ?>а</label>
                <div class="">
                    <input class="form-control valid" id="f_subject" name="subject" type="text" />
                </div>
            </div>
            <div class="form-group">
                <label class="control-label"><?php echo __('Тело письма'); ?></label>
                <div class="">
                    <textarea style="height: 350px;" class="Editor form-control" rows="15" name="text"></textarea>
                </div>
            </div>
        </div>
    </form>
</div>
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
    $('#sendTheEmail').on('click', function(e){
        e.preventDefault();
        preloader();
        $.ajax({
            url: '/wezom/ajax/sendCouponEmail',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: $('#myForm').data('id')
            },
            success: function(data){
                preloader();
                if(data.success) {
                    generate('<?php echo _('Письмо отправлено!'); ?>', 'success', 3000);
                } else {
                    generate('<?php echo __('Письмо не отправлено! Повторите попытку позднее'); ?>', 'warning', 3000);
                }
            },
            error: function(){
                generate('<?php echo __('Письмо не отправлено! Повторите попытку позднее'); ?>', 'warning', 3000)
                preloader();
            }
        });
    });
</script>