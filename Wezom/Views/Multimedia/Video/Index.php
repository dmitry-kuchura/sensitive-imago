<div class="rowSection">
    <div class="col-md-12">

        <div class="widgetHeader" style="padding-bottom: 10px;">
            <form class="widgetContent filterForm" action="/wezom/<?php echo Core\Route::controller(); ?>/index"
                  method="get">
                <div class="col-md-2">
                    <label class="control-label"><?php echo __('Наименование'); ?></label>
                    <div class="">
                        <div class="controls">
                            <input name="name" class="form-control"
                                   value="<?php echo urldecode(Core\Arr::get($_GET, 'name', NULL)); ?>">
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="control-label"><?php echo __('Группа'); ?></label>
                    <div class="">
                        <div class="controls">
                            <select name="group" class="form-control">
                                <option value=""><?php echo __('Все'); ?></option>
                                <?php foreach ($groups as $group): ?>
                                    <option value="<?php echo $group->row_id; ?>" <?php echo $group->row_id == $_GET['group'] ? 'selected' : ''; ?>><?php echo $group->name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="control-label"><?php echo __('Статус'); ?></label>
                    <div class="">
                        <div class="controls">
                            <select name="status" class="form-control">
                                <option value=""><?php echo __('Все'); ?></option>
                                <option
                                    value="0" <?php echo Core\Arr::get($_GET, 'status', 2) == '0' ? 'selected' : ''; ?>><?php echo __('Неопубликованы'); ?></option>
                                <option
                                    value="1" <?php echo Core\Arr::get($_GET, 'status') == '1' ? 'selected' : ''; ?>><?php echo __('Опубликованы'); ?></option>
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
                                    <option
                                        value="<?php echo $number; ?>" <?php echo Core\Arr::get($_GET, 'limit', Core\Config::get('basic.limit_backend')) == $number ? 'selected' : ''; ?>><?php echo $number; ?></option>
                                <?php endfor; ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-1">
                    <label class="control-label" style="height:13px;"></label>
                    <div class="">
                        <div class="controls">
                            <input type="submit" class="btn btn-primary" value="<?php echo __('Подобрать'); ?>"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-1">
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
                        <th>Ссылка</th>
                        <th>Название</th>
                        <th>Изображение</th>
                        <th>Группа</th>
                        <th>Статус</th>
                        <th class="nav-column textcenter">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($result as $obj): ?>
                        <tr data-id="<?php echo $obj->id; ?>">
                            <td class="checkbox-column">
                                <label><input type="checkbox"></label>
                            </td>
                            <td valign="<?php echo $obj->url ? 'top' : 'middle'; ?>" class="pagename-column">
                                <div class="clearFix">
                                    <div class="pull-left">
                                        <div class="pull-left">
                                            <?php if ($obj->alias): ?>
                                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>">
                                                    <div class="size11 nowrap"><?php echo $obj->alias; ?></div>
                                                </a>
                                            <?php endif ?>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>">
                                    <?php echo $obj->name; ?>
                                </a>
                            </td>
                            <?php $link = explode('?v=', $obj->alias); ?>
                            <td>
                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>">
                                    <img src="//img.youtube.com/vi/<?php echo $link[1]; ?>/mqdefault.jpg"
                                         style="max-width: 95px;">
                                </a>
                            </td>
                            <td><?php echo $obj->group_name; ?></td>
                            <td width="45" valign="top" class="icon-column status-column">
                                <?php echo Core\View::widget(array('status' => $obj->status, 'id' => $obj->id), 'StatusList'); ?>
                            </td>
                            <td class="nav-column">
                                <ul class="table-controls">
                                    <li>
                                        <a class="bs-tooltip dropdownToggle" href="javascript:void(0);"
                                           title="Управление"><i class="fa-cog size14"></i></a>
                                        <ul class="dropdownMenu pull-right">
                                            <li>
                                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>"
                                                   title="Редактировать"><i class="fa-pencil"></i> Редактировать</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a onclick="return confirm('Это действие необратимо. Продолжить?');"
                                                   href="/wezom/<?php echo Core\Route::controller(); ?>/delete/<?php echo $obj->id; ?>"
                                                   title="Удалить"><i class="fa-trash-o text-danger"></i> Удалить</a>
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
<span id="parameters" data-table="<?php echo $tablename; ?>"></span>