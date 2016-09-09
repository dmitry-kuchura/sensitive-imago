<?php if(isset($result[$current]) && is_array($result[$current])): ?>
    <?php foreach($result[$current] AS $obj): ?>
        <?php if(isset($result[$obj->id]) && is_array($result[$obj->id])): ?>
            <optgroup label="<?php echo $obj->name; ?>">
                <?php echo \Core\View::tpl(array('result' => $result, 'current' => $obj->id, 'iGroups' => $iGroups), 'Catalog/Tags/Rec'); ?>
            </optgroup>
        <?php else: ?>
            <option value="<?php echo $obj->id; ?>" <?php echo in_array($obj->id, $iGroups) ? 'selected' : NULL; ?>><?php echo $obj->name; ?></option>
        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>