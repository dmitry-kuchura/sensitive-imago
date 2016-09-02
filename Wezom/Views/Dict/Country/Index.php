<div class="dd pageList" id="myNest" data-depth="1">
    <ol class="dd-list">
        <?php foreach($groups AS $value): ?>
            <h1><?php echo __('Зона EMS'); ?> <?php echo $value; ?></h1>
            <?php foreach (\Core\Arr::get($result, $value, array()) as $obj): ?>
                <li class="dd-item dd3-item" data-id="<?php echo $obj->id; ?>">
                    <div title="<?php echo __('Переместить строку'); ?>" class="dd-handle dd3-handle"><?php echo __('Переместить строку'); ?></div>
                    <div class="dd3-content">
                        <table>
                            <tr>
                                <td class="column-drag" width="1%"></td>
                                <td width="1%" class="checkbox-column">
                                    <label><input type="checkbox" /></label>
                                </td>
                                <td valign="top" class="pagename-column">
                                    <div class="clearFix">
                                        <div class="pull-left">
                                            <div class="pull-left">
                                                <div><a class="pageLinkEdit" href="<?php echo '/wezom/'.Core\Route::controller().'/edit/'.$obj->id; ?>"><?php echo $obj->name; ?></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="nav-column icon-column" valign="top">
                                    <ul class="table-controls">
                                        <li>
                                            <a title="<?php echo __('Управление'); ?>" href="javascript:void(0);" class="bs-tooltip dropdownToggle"><i class="fa-cog"></i> </a>
                                            <ul class="dropdownMenu pull-right">
                                                <li>
                                                    <a title="<?php echo __('Редактировать'); ?>" href="<?php echo '/wezom/'.Core\Route::controller().'/edit/'.$obj->id; ?>"><i class="fa-pencil"></i> <?php echo __('Редактировать'); ?></a>
                                                </li>
                                                <li class="divider"></li>
                                                <li>
                                                    <a title="<?php echo __('Удалить'); ?>" onclick="return confirm('<?php echo __('Это действие необратимо. Продолжить?'); ?>');" href="<?php echo '/wezom/'.Core\Route::controller().'/delete/'.$obj->id; ?>"><i class="fa-trash-o text-danger"></i> <?php echo __('Удалить'); ?></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </li>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </ol>
</div>
<span id="parameters" data-table="<?php echo $tablename; ?>"></span>
<input type="hidden" id="myNestJson">