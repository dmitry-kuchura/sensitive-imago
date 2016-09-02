<form id="myForm" class="rowSection validat" method="post" action="" data-tab="<?php echo \Core\Arr::get($_GET, 'tab', 0); ?>" enctype="multipart/form-data" data-current="<?php echo '/wezom/services/edit/'.\Core\Route::param('id'); ?>">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-6">
        <div class="widget">
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <table class="table table-hover table-condensed faq" style="color: #aaa;">
                            <thead>
                            <tr>
                                <th style="width: 45%;"><?php echo __('Сумма от'); ?> ($)</th>
                                <th style="width: 45%;"><?php echo __('Процент скидки'); ?> (%)</th>
                                <th width="50"><img src="<?php echo \Core\HTML::bmedia('pic/plus.png'); ?>" class="rowNav plus" /></th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php foreach($result AS $key => $value): ?>
                                <tr>
                                    <td style="width: 45%;"><input class="form-control" name="AMOUNT[]" type="text" value="<?php echo $value->amount; ?>" /></td>
                                    <td style="width: 45%;"><input class="form-control" name="PERCENT[]" type="text" value="<?php echo $value->percent; ?>" /></td>
                                    <td width="50"><img src="<?php echo \Core\HTML::bmedia('pic/minus.png'); ?>" class="rowNav minus" /></td>
                                </tr>
                            <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
<script>
    $(function(){
        var faq = '<tr><td><input class="form-control" name="AMOUNT[]" type="text" /></td><td><input class="form-control" name="PERCENT[]" type="text" /></td><td width="50"><img src="<?php echo \Core\HTML::bmedia('pic/minus.png'); ?>" class="rowNav minus" /></td></tr>';

        $('.rowNav.plus').on('click', function(){
            var table = $(this).closest('table');
            $(faq).appendTo(table.find('tbody'));
        });

        $('table').on('click', '.rowNav.minus', function(){
            $(this).closest('tr').remove();
        });
    });
</script>