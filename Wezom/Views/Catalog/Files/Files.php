<?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
    <?php $langs = []; ?>
    <?php foreach ($languages AS $key => $lang): ?>
        <?php $langs[$key] = $obj->$key; ?>
        <?php unset($obj->$key); ?>
    <?php endforeach; ?>
<?php else: ?>
    <?php $langs = \Core\Arr::get($obj, 'langs', []); ?>
    <?php $obj = \Core\Arr::get($obj, 'obj', []); ?>
<?php endif; ?>
<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Основные данные'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <ul class="liTabs t_wrap">
                    <?php foreach ($languages AS $key => $lang): ?>
                        <?php $public = \Core\Arr::get($langs, $key, []); ?>
                        <?php echo $lang['default'] == 1 ? '<input type="hidden" class="default_lang" value="' . $lang['name'] . '">' : ''; ?>
                        <li class="t_item">
                            <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                            <div class="t_content">
                                <div class="form-group">
                                    <label class="control-label"><?php echo __('Описание'); ?></label>
                                    <div class="">
                                        <textarea class="form-control" rows="5" name="FORM[<?php echo $key; ?>][text]" valid><?php echo $public->text; ?></textarea>
                                    </div>
                                </div>
                                <input class="form-control valid" name="FORM[item_id]" type="hidden" value="<?php echo $id; ?>" />
                            </div>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Файл'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-group">
                    <label class="control-label"><?php echo __('Файл'); ?></label>
                    <div class="">
                        <?php if ($obj->filename): ?>
                            <a href="/wezom/<?php echo Core\Route::controller(); ?>/<?php echo Core\Route::param('item_id'); ?>/delete/<?php echo $obj->id; ?>"><?php echo __('Удалить файл'); ?></a>
                            <br>
                            <a href="<?php echo Core\HTML::media('items/'.$obj->filename)?>"><?php echo __('Скачать файл'); ?></a>
                        <?php else: ?>
                            <input type="file" name="file" />
                        <?php endif ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>