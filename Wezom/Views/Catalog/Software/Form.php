<?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
    <?php $langs = array(); ?>
    <?php foreach ($languages AS $key => $lang): ?>
        <?php $langs[$key] = $obj->$key; ?>
        <?php unset($obj->$key); ?>
    <?php endforeach; ?>
<?php else: ?>
    <?php $langs = \Core\Arr::get($obj, 'langs', array()); ?>
    <?php $obj = \Core\Arr::get($obj, 'obj', array()); ?>
<?php endif; ?>
<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="<?php echo __('Отправить'); ?>">
    </div>
    <div class="col-md-7">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Основные данные'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="widgetContent">
                        <ul class="liTabs t_wrap">
                            <?php foreach ($languages AS $key => $lang): ?>
                                <?php $public = \Core\Arr::get($langs, $key, array()); ?>
                                <?php echo $lang['default'] == 1 ? '<input type="hidden" class="default_lang" value="' . $lang['name'] . '">' : ''; ?>
                                <li class="t_item">
                                    <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                                    <div class="t_content">
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_name"><?php echo __('Наименование'); ?></label>
                                            <div class="">
                                                <input id="f_name"
                                                       class="form-control <?php echo $lang['default'] == 1 ? 'translitSource' : ''; ?> valid"
                                                       name="FORM[<?php echo $key; ?>][name]" type="text"
                                                       value="<?php echo $public->name; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"><?php echo __('Краткое содержание'); ?></label>
                                            <div class="">
                                                <textarea class="form-control"
                                                          rows="5"
                                                          name="FORM[<?php echo $key; ?>][short]"><?php echo $public->short; ?></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"><?php echo __('Контент'); ?></label>
                                            <div class="">
                                                <textarea style="height:350px;" class="tinymceEditor form-control"
                                                          rows="15"
                                                          name="FORM[<?php echo $key; ?>][text]"><?php echo $public->text; ?></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-5">
        <div class="widget">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Основное'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Опубликовано'); ?></label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="status" value="0"
                                       type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                <?php echo __('Нет'); ?>
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="status" value="1"
                                       type="radio" <?php echo ($obj->status OR !$obj) ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_alias">
                            <?php echo __('Алиас'); ?>
                        </label>
                        <div class="">
                            <div class="input-group">
                                <input id="f_alias" class="form-control translitConteiner valid" name="FORM[alias]"
                                       type="text" value="<?php echo $obj->alias; ?>"/>
                                <span class="input-group-btn">
                                    <button class="btn translitAction"
                                            type="button"><?php echo __('Заполнить автоматически'); ?></button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Изображение'); ?></label>
                        <div class="">
                            <?php if (is_file(HOST . Core\HTML::media('images/software/original/' . $obj->image))): ?>
                                <a href="<?php echo Core\HTML::media('images/software/original/' . $obj->image); ?>"
                                   rel="lightbox">
                                    <img src="<?php echo Core\HTML::media('images/software/main/' . $obj->image); ?>"
                                         style="max-height: 100px;"/>
                                </a>
                                <br>
                                <div class="contentImageControl">
                                    <a class="btn btn-danger otherBtn"
                                       href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image/<?php echo $obj->id; ?>">
                                        <i class="fa-remove"></i>
                                        <?php echo __('Удалить изображение'); ?>
                                    </a>
                                    <a class="btn btn-info otherBtn"
                                       href="<?php echo \Core\General::crop('software', 'main', $obj->image); ?>">
                                        <i class="fa-edit"></i>
                                        <?php echo __('Редактировать изображение'); ?>
                                    </a>
                                </div>
                            <?php else: ?>
                                <input type="file" name="file"/>
                            <?php endif ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pageInfo alert alert-info">
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Опубликовано'); ?></strong></div>
                    <div class="col-md-6"><?php echo $obj->status == 1 ? 'Да' : 'Нет'; ?></div>
                </div>
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Дата создания'); ?></strong></div>
                    <div
                        class="col-md-6"><?php echo $obj->created_at ? date('d.m.Y H:i:s', $obj->created_at) : '---'; ?></div>
                </div>
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Дата последнего изменения'); ?></strong></div>
                    <div
                        class="col-md-6"><?php echo $obj->updated_at ? date('d.m.Y H:i:s', $obj->updated_at) : '---'; ?></div>
                </div>
            </div>
        </div>
    </div>
</form>