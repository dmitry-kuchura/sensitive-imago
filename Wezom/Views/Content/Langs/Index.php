<div class="dd pageList" id="myNest" data-depth="1">
    <ol class="dd-list">
        <?php foreach ($result as $obj): ?>
            <li class="dd-item dd3-item" data-id="<?php echo $obj->id; ?>">
                <div title="<?php echo __('Переместить строку'); ?>"
                     class="dd-handle dd3-handle"><?php echo __('Переместить строку'); ?></div>
                <div class="dd3-content">
                    <table>
                        <tr>
                            <td class="column-drag" width="1%"></td>
                            <td width="1%" class="checkbox-column">
                                <label><input type="checkbox"/></label>
                            </td>
                            <td>
                                <div class="clearFix">
                                    <?php echo $obj->name; ?>
                                </div>
                            </td>
                            <td width="45" valign="top" class="icon-column status-column">
                                <?php echo Core\View::widget(array('status' => $obj->status, 'id' => $obj->id), 'StatusList'); ?>
                            </td>
                        </tr>
                    </table>
                </div>
            </li>
        <?php endforeach; ?>
    </ol>
</div>
<span id="parameters" data-table="<?php echo $tablename; ?>"></span>
<input type="hidden" id="myNestJson">