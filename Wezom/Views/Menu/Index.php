<div class="dd pageList" id="myNest">
    <ol class="dd-list">
        <?php foreach (\Core\Config::get('menu.groups') AS $key => $value): ?>
            <h1><?php echo $value; ?></h1>
            <?php echo Core\View::tpl(['result' => $result, 'tpl_folder' => $tpl_folder, 'cur' => 0, 'key' => $key], $tpl_folder . '/Menu'); ?>
        <?php endforeach; ?>
    </ol>
</div>
<span id="parameters" data-table="<?php echo $tablename; ?>"></span>
<input type="hidden" id="myNestJson">