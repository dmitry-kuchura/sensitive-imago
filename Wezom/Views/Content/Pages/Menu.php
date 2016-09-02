<?php if (isset($result[$cur]) AND count($result[$cur])): ?>
    <?php if ($cur > 0): ?>
        <ol>
        <?php endif ?>
        <?php foreach ($result[$cur] as $obj): ?>
            <li class="dd-item dd3-item" data-id="<?php echo $obj->id; ?>">
                <div class="dd3-content">
                    <table>
                        <tr>
                            <td class="pagename-column">
                                <a class="pageLinkEdit" href="<?php echo '/wezom/' . Core\Route::controller() . '/edit/' . $obj->id; ?>"><?php echo $obj->name; ?></a>
                            </td>
                            <td class="hidden-xs" valign="middle">
                                <div>
                                    <?php echo Core\Text::limit_words(strip_tags($obj->text), 25); ?>
                                </div>
                            </td>
                            <td width="45" valign="top" class="icon-column status-column">
                                <?php echo Core\View::widget(array('status' => $obj->status, 'id' => $obj->id), 'StatusList'); ?>
                            </td>
                            <td class="nav-column icon-column" valign="top">
                                <ul class="table-controls">
                                    <li>
                                        <a title="<?php echo __('Управление'); ?>" href="javascript:void(0);" class="bs-tooltip dropdownToggle"><i class="fa-cog"></i> </a>
                                        <ul class="dropdownMenu pull-right">
                                            <li>
                                                <a title="<?php echo __('Редактировать'); ?>" href="<?php echo '/wezom/' . Core\Route::controller() . '/edit/' . $obj->id; ?>"><i class="fa-pencil"></i> <?php echo __('Редактировать'); ?></a>
                                            </li>
                                            <li class="divider"></li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
                <?php echo Core\View::tpl(array('result' => $result, 'tpl_folder' => $tpl_folder, 'cur' => $obj->id), $tpl_folder . '/Menu'); ?>
            </li>
        <?php endforeach; ?>
        <?php if ($cur > 0): ?>
        </ol>
    <?php endif ?>
    <?php

 endif ?>