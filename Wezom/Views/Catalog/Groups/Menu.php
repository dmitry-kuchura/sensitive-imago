<?php if ( isset($result[$cur]) AND count($result[$cur]) ): ?>
    <?php if ($cur > 0): ?>
        <ol>
    <?php endif ?>
    <?php foreach ($result[$cur] as $obj): ?>
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
                                        <div class="size11 nowrap">(<span class="gray"><?php echo __('Алиас'); ?>:</span> <?php echo $obj->alias; ?>)</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <?php if ($obj->image){
                            $image = Core\HTML::media('images/catalog_tree/main/' . $obj->image);
                        } else {
                            $image = Core\HTML::media('images/no-image.png');
                        }?>
                            <td><img src="<?php echo $image; ?>" style="max-width: 60px;"></td>
                        <td width="45" valign="top" class="icon-column status-column">
                            <?php echo Core\View::widget(array( 'status' => $obj->status, 'id' => $obj->id ), 'StatusList'); ?>
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
            <?php echo Core\View::tpl(array('result' => $result, 'tpl_folder' => $tpl_folder, 'cur' => $obj->id), $tpl_folder.'/Menu'); ?>
        </li>
    <?php endforeach; ?>
    <?php if ($cur > 0): ?>
        </ol>
    <?php endif ?>
<?php endif ?>