<?php if($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
    <?php $langs = array(); ?>
    <?php foreach($languages AS $key => $lang): ?>
        <?php $langs[$key] = $obj->$key; ?>
        <?php unset($obj->$key); ?>
    <?php endforeach; ?>
<?php else: ?>
    <?php $langs = \Core\Arr::get($obj, 'langs', array()); ?>
    <?php $obj = \Core\Arr::get($obj, 'obj', array()); ?>
<?php endif; ?>
<form id="myForm" class="rowSection validat" method="post" action="">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-12">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Основные данные'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="rowSection">
                        <div class="form-group col-md-3">
                            <label class="control-label"><?php echo __('Опубликовано'); ?></label>
                            <div class="">
                                <label class="checkerWrap-inline">
                                    <input name="status" value="0" type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                    <?php echo __('Нет'); ?>
                                </label>
                                <label class="checkerWrap-inline">
                                    <input name="status" value="1" type="radio" <?php echo ($obj->status OR !$obj) ? 'checked' : ''; ?>>
                                    <?php echo __('Да'); ?>
                                </label>
                            </div>
                        </div>
                    </div>
                    <?php foreach( $languages AS $key => $lang ): ?>
                        <?php $public = \Core\Arr::get($langs, $key, array()); ?>
                        <?php echo $lang['default'] == 1 ? '<input type="hidden" class="default_lang" value="'.$lang['name'].'">' : ''; ?>
                        <div class="form-group">
                            <label class="control-label" for="f_<?php echo $key; ?>_name"><?php echo __('Название'); ?> (<?php echo $lang['name']; ?>)</label>
                            <div class="">
                                <input id="f_<?php echo $key; ?>_name" class="form-control valid" type="text" name="FORM[<?php echo $key; ?>][name]" value="<?php echo $public->name; ?>" />
                            </div>
                        </div>
                    <?php endforeach; ?>
                    <div class="form-group">
                        <label class="control-label" for="f_link"><?php echo __('Ссылка'); ?></label>
                        <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<b><?php echo __('Данная ссылка ведет на соответсвующий блок, если такого блока нет, то сслыка будет в никуда!'); ?></b>"></i>
                        <div class="">
                            <input id="f_link" class="form-control valid" type="text" name="FORM[url]" value="<?php echo $obj->url; ?>"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>