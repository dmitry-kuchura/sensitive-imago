<div class="rowSection">
    <div class="col-md-12">


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
                                                <?php if ($obj->url): ?>
                                                    <div class="size11 nowrap">(<span class="gray">URL:</span> <?php echo $obj->url; ?>)</div>
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
                                <td width="45" valign="top" class="icon-column status-column">
                                    <?php echo Core\View::widget(array('status' => $obj->status, 'id' => $obj->id), 'StatusList'); ?>
                                </td>
                                <td class="nav-column">
                                    <ul class="table-controls">
                                        <li>
                                            <a class="bs-tooltip dropdownToggle" href="javascript:void(0);" title="Управление"><i class="fa-cog size14"></i></a>
                                            <ul class="dropdownMenu pull-right">
                                                <li>
                                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/edit/<?php echo $obj->id; ?>" title="Редактировать"><i class="fa-pencil"></i> Редактировать</a>
                                                </li>
                                                <li class="divider"></li>
                                                <li>
                                                    <a onclick="return confirm('Это действие необратимо. Продолжить?');" href="/wezom/<?php echo Core\Route::controller(); ?>/delete/<?php echo $obj->id; ?>" title="Удалить"><i class="fa-trash-o text-danger"></i> Удалить</a>
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