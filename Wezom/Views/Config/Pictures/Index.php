<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <input type="hidden" value="Отправить" name="test">
    <div class="red col-md-12"><b><?php echo __('Внимание!'); ?></b> <?php echo __('Так как изображение не изменяет свое название, необходимо нажать комбинацию клавиш Ctrl+F5 для обновления отображения нового изображения после загрузки.'); ?></div>
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Доставка'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <?php foreach (\Core\Config::get('order.delivery-images') as $key => $value): ?>
                        <div class="form-group">
                            <label class="control-label"><?php echo \Core\Config::get('order.delivery.'.$key); ?></label>
                            <div class="">
                                <img src="<?php echo $value; ?>" />
                                <br />
                                <input type="file" name="delivery<?php echo $key; ?>" accept=".png" />
                            </div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader myWidgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Оплата'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <?php foreach (\Core\Config::get('order.payment-images') as $key => $value): ?>
                        <div class="form-group">
                            <label class="control-label"><?php echo \Core\Config::get('order.payment.'.$key); ?></label>
                            <div class="">
                                <img src="<?php echo $value; ?>" />
                                <br />
                                <input type="file" name="payment<?php echo $key; ?>" accept=".png" />
                            </div>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </div>
</form>