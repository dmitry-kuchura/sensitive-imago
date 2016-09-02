<div class="rowSection">
    <div class="col-md-12">
        <div class="widget">
            <div class="widgetHeader" style="padding-bottom: 10px;">
                <form class="widgetContent filterForm" action="/wezom/statistic/users" method="get">
                    <div class="col-md-2">
                        <label class="control-label"><?php echo __('Имя'); ?></label>
                        <div class="">
                            <div class="controls">
                                <input name="name" class="form-control" value="<?php echo Core\Arr::get($_GET, 'name', NULL); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label class="control-label"><?php echo __('Фамилия'); ?></label>
                        <div class="">
                            <div class="controls">
                                <input name="last_name" class="form-control" value="<?php echo Core\Arr::get($_GET, 'last_name', NULL); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label class="control-label">E-Mail</label>
                        <div class="">
                            <div class="controls">
                                <input name="email" class="form-control" value="<?php echo Core\Arr::get($_GET, 'email', NULL); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label class="control-label"><?php echo __('Номер телефона'); ?></label>
                        <div class="">
                            <div class="controls">
                                <input name="phone" class="form-control" value="<?php echo Core\Arr::get($_GET, 'phone', NULL); ?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label class="control-label"><?php echo __('Выводить по'); ?></label>
                        <div class="">
                            <div class="controls">
                                <select name="limit" class="form-control">
                                    <?php for($i = 1; $i <= 5; $i++): ?>
                                        <?php $number = $i * Core\Config::get('basic.limit_backend'); ?>
                                        <option value="<?php echo $number; ?>" <?php echo Core\Arr::get($_GET, 'limit', Core\Config::get('basic.limit_backend')) == $number ? 'selected' : ''; ?>><?php echo $number; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <label class="control-label" style="height:13px;"></label>
                        <div class="">
                            <div class="controls">
                                <input type="submit" class="btn btn-primary" value="<?php echo __('Подобрать'); ?>" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1 stable105">
                        <label class="control-label" style="height:19px;"></label>
                        <div class="">
                            <div class="controls">
                                <a href="/wezom/statistic/users">
                                    <i class="fa-refresh"></i>
                                    <span class="hidden-xx"><?php echo __('Сбросить'); ?></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="widget">
                <div class="widgetContent">
                    <table class="table table-striped table-hover checkbox-wrap ">
                        <thead>
                        <tr>
                            <th><?php echo __('Клиент'); ?></th>
                            <th>E-Mail</th>
                            <th><?php echo __('Номер телефона'); ?></th>
                            <th><?php echo __('Дата регистрации'); ?></th>
                            <th><?php echo __('Количество заказов'); ?></th>
                            <th><?php echo __('Поледний заказ'); ?></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ( $result as $obj ): ?>
                            <tr data-id="<?php echo $obj->id; ?>">
                                <?php $name = trim($obj->last_name.' '.$obj->name); ?>
                                <td>
                                    <a href="/wezom/users/edit/<?php echo $obj->id; ?>"><?php echo $name; ?></a>
                                </td>
                                <td>
                                    <?php if( $obj->email ): ?>
                                        <a href="mailto:<?php echo $obj->email; ?>" target="_blank"><?php echo $obj->email; ?></a>
                                    <?php else: ?>
                                        ----
                                    <?php endif ?>
                                </td>
                                <td>
                                    <?php if( $obj->phone ): ?>
                                        <a href="tel:<?php echo preg_replace('/[^0-9]*/', '', $obj->phone); ?>" target="_blank"><?php echo $obj->phone; ?></a>
                                    <?php else: ?>
                                        ----
                                    <?php endif ?>
                                </td>
                                <td><?php echo $obj->created_at ? date( 'd.m.Y', $obj->created_at ) : __('Неизвестно'); ?></td>
                                <td>
                                    <?php if($obj->orders_count): ?>
                                        <a href="<?php echo \Core\HTML::link('wezom/orders/index?uid='.$obj->id); ?>"><?php echo (int) $obj->orders_count; ?></a>
                                    <?php else: ?>
                                        <?php echo (int) $obj->orders_count; ?>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <?php if($obj->orders_last_id && $obj->orders_last): ?>
                                        <a href="<?php echo \Core\HTML::link('wezom/orders/edit/'.$obj->orders_last_id); ?>"><?php echo date('d.m.Y, H:i', $obj->orders_last); ?></a>
                                    <?php else: ?>
                                        ----
                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach ?>
                        </tbody>
                    </table>
                    <?php echo $pager; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<span id="parameters" data-table="<?php echo $tablename; ?>"></span>