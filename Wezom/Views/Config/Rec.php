<?php foreach(\Core\Arr::get($pages, $current, array()) AS $p): ?>
    <?php $link = \Core\HTML::link($p->alias); ?>
    <option value="<?php echo $link; ?>" <?php echo $obj->zna == $link ? 'selected' : NULL; ?>><?php echo $nbsp.$p->name; ?></option>
    <?php if(isset($pages[$p->id])): ?>
        <?php echo \Core\View::tpl(array('pages' => $pages, 'current' => $p->id, 'nbsp' => $nbsp.'&nbsp;&nbsp;&nbsp;&nbsp;'), 'Config/Rec'); ?>
    <?php endif; ?>
<?php endforeach; ?>