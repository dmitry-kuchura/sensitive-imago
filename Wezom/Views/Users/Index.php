<div class="rowSection">
    <div class="col-md-12">
        <div class="widget">
            <div class="widgetHeader" style="padding-bottom: 10px;">
                <form class="widgetContent filterForm" action="/wezom/<?php echo Core\Route::controller(); ?>/index" method="get">
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
                        <label class="control-label"><?php echo __('Статус'); ?></label>
                        <div class="">
                            <div class="controls">
                                <select name="status" class="form-control">
                                    <option value=""><?php echo __('Все'); ?></option>
                                    <option value="0" <?php echo Core\Arr::get($_GET, 'status', 2) == '0' ? 'selected' : ''; ?>><?php echo __('Неопубликованы'); ?></option>
                                    <option value="1" <?php echo Core\Arr::get($_GET, 'status') == '1' ? 'selected' : ''; ?>><?php echo __('Опубликованы'); ?></option>
                                </select>
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
                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/index">
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
                                <th class="checkbox-head">
                                    <label><input type="checkbox"></label>
                                </th>
                                <th><?php echo __('Имя'); ?> <?php echo __('Фамилия'); ?></th>
                                <th>E-Mail</th>
                                <th><?php echo __('Номер телефона'); ?></th>
                                <th><?php echo __('Дата регистрации'); ?></th>
                                <th><?php echo __('Статус'); ?></th>
                                <th class="nav-column textcenter">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ( $result as $obj ): ?>
                                <tr data-id="<?php echo $obj->id; ?>">
                                    <td class="checkbox-column">
                                        <label><input type="checkbox"></label>
                                    </td>
                                    <td>
                                        <?php $n = array(); ?>
                                        <?php if($obj->name): ?>
                                            <?php $n[] = $obj->name; ?>
                                        <?php endif; ?>
                                        <?php if($obj->last_name): ?>
                                            <?php $n[] = $obj->last_name; ?>
                                        <?php endif; ?>
                                        <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>">
                                            <?php echo implode(' ', $n) ? implode(' ', $n) : '---'; ?>
                                        </a>
                                    </td>
                                    <td>
                                        <?php if( $obj->email ): ?>
                                            <a href="mailto:<?php echo $obj->email; ?>" target="_blank"><?php echo $obj->email; ?></a>
                                        <?php else: ?>
                                            ----
                                        <?php endif ?>
                                    </td>
                                    <td><?php echo $obj->phone ? $obj->phone : '----'; ?></td>
                                    <td><?php echo $obj->created_at ? date( 'd.m.Y', $obj->created_at ) : '----'; ?></td>
                                    <td width="45" valign="top" class="icon-column status-column">
                                        <?php echo Core\View::widget(array( 'status' => $obj->status, 'id' => $obj->id ), 'StatusList'); ?>
                                    </td>
                                    <td class="nav-column">
                                        <ul class="table-controls">
                                            <li>
                                                <a class="bs-tooltip dropdownToggle" href="javascript:void(0);" title="<?php echo __('Управление'); ?>"><i class="fa-cog size14"></i></a>
                                                <ul class="dropdownMenu pull-right">
                                                    <li>
                                                        <a href="<?php echo \Core\HTML::link('wezom/orders/index?uid='.$obj->id); ?>" title="<?php echo __('Посмотреть список заказов этого пользователя'); ?>"><?php echo __('Заказы'); ?></a>
                                                    </li>
                                                    <li>
                                                        <a href="<?php echo \Core\HTML::link('auth-like-regular-user/'.\Core\Encrypt::instance()->encode($obj->id)); ?>" title="<?php echo __('Авторизоваться на сайте как этот пользователь'); ?>" target="_blank"><?php echo __('Авторизоваться'); ?></a>
                                                    </li>
                                                    <li class="divider"></li>
                                                    <li>
                                                        <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>" title="<?php echo __('Редактировать'); ?>"><i class="fa-pencil"></i> <?php echo __('Редактировать'); ?></a>
                                                    </li>
                                                    <li>
                                                        <a onclick="return confirm('<?php echo __('Это действие необратимо. Продолжить?'); ?>');" href="/wezom/<?php echo Core\Route::controller(); ?>/delete/<?php echo $obj->id; ?>" title="<?php echo __('Удалить'); ?>"><i class="fa-trash-o text-danger"></i> <?php echo __('Удалить'); ?></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
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