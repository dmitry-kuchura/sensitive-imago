<?php $lang = \I18n::$lang; ?>
<?php \I18n::lang($order->language); ?>
<table align="left" border="1" cellpadding="5" cellspacing="0" width="100%">
    <thead>
    <tr>
        <th></th>
        <th><?php echo __('Наименование'); ?></th>
        <th><?php echo __('Цена'); ?></th>
        <th><?php echo __('Количество'); ?></th>
        <th><?php echo __('Итог'); ?></th>
    </tr>
    </thead>
    <tbody>
    <?php foreach( $cart as $obj ): ?>
        <tr>
            <td>
                <?php if( is_file(HOST.Core\HTML::media('images/catalog/small/'.$obj->image)) ): ?>
                    <img src="<?php echo Core\HTML::link('Media/images/catalog/small/'.$obj->image, true); ?>" width="80" />
                <?php endif; ?>
            </td>
            <td>
                <?php echo $obj->name; ?>
                <br>
                <?php echo __('Размер'); ?>: <?php echo $obj->size_name; ?>
                <br>
                <?php echo __('Цвет'); ?>: <?php echo $obj->color_name; ?>
            </td>
            <td><?php echo \Core\Support::pricePretty($obj->price, $order->currency); ?></td>
            <td><?php echo $obj->count; ?></td>
            <td><?php echo \Core\Support::pricePretty($obj->count * $obj->price, $order->currency); ?></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
<?php \I18n::lang($lang); ?>