<div class="rowSection">
    <div class="col-md-12">
        <div class="widget">
            <div class="widgetHeader" style="padding-bottom: 10px;">
                <form class="widgetContent filterForm" action="/wezom/<?php echo Core\Route::controller(); ?>/index" method="get">
                    <div class="col-md-2">
                        <label class="control-label"><?php echo __('Имя'); ?></label>
                        <div class="">
                            <div class="controls">
                                <input name="name" class="form-control" value="<?php echo urldecode(Core\Arr::get($_GET, 'name', NULL)); ?>">
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
                                    <?php for ($i = 1; $i <= 5; $i++): ?>
                                        <?php $number = $i * Core\Config::get('basic.limit_backend'); ?>
                                        <option value="<?php echo $number; ?>" <?php echo Core\Arr::get($_GET, 'limit', Core\Config::get('basic.limit_backend')) == $number ? 'selected' : ''; ?>><?php echo $number; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <label class="control-label"><?php echo __('Подобрать'); ?></label>
                        <div class="">
                            <div class="controls">
                                <button type="submit" class="btn btn-primary" style="width: 100%;"><i class="fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <label class="control-label"><?php echo __('Сбросить'); ?></label>
                        <div class="">
                            <div class="controls">
                                <a class='btn' href="/wezom/<?php echo Core\Route::controller(); ?>/index" style="width: 100%;">
                                    <i class="fa-refresh"></i>
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
                                <th><?php echo __('Имя'); ?></th>
                                <th><?php echo __('Возраст'); ?></th>
                                <th><?php echo __('Город'); ?></th>
                                <th><?php echo __('Язык'); ?></th>
                                <th><?php echo __('Статус'); ?></th>
                                <th class="nav-column textcenter">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($result as $obj): ?>
                                <tr data-id="<?php echo $obj->id; ?>">
                                    <td class="checkbox-column">
                                        <label><input type="checkbox"></label>
                                    </td>
                                    <td>
                                        <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>">
                                            <?php echo $obj->name; ?>
                                        </a>
                                    </td>
                                    <td><?php echo $obj->title; ?></td>
                                    <td><?php echo $obj->city ? $obj->city : '----'; ?></td>
                                    <td><?php echo substr(str_replace('","', ', ', $obj->language), 2, -2); ?></td>
                                    <td width="45" valign="top" class="icon-column status-column">
                                        <?php echo Core\View::widget(array('status' => $obj->status, 'id' => $obj->id), 'StatusList'); ?>
                                    </td>
                                    <td class="nav-column">
                                        <ul class="table-controls">
                                            <li>
                                                <a class="bs-tooltip dropdownToggle" href="javascript:void(0);" title="<?php echo __('Управление'); ?>"><i class="fa-cog size14"></i></a>
                                                <ul class="dropdownMenu pull-right">
                                                    <li>
                                                        <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>" title="<?php echo __('Редактировать'); ?>"><i class="fa-pencil"></i> <?php echo __('Редактировать'); ?></a>
                                                    </li>
                                                    <li class="divider"></li>
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