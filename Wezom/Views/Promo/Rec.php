<?php foreach( \Core\Arr::get($result, $current, array()) AS $key => $val ): ?>
    <div class="checkboxesGroup groupThisCheckboxes">
        <label class="checkerWrap ckbxWrap">
            <input name="GROUPS[]" value="<?php echo $val->id; ?>" type="checkbox" class="mainGroup" <?php echo in_array($val->id, $thisGroups) ? 'checked' : NULL; ?>>
            <span class=""><?php echo $val->name; ?></span>
        </label>
        <?php echo \Core\View::tpl(array('result' => $result, 'current' => $val->id, 'thisGroups' => $thisGroups), 'Promo/Rec'); ?>
    </div>
<?php endforeach; ?>