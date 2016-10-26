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
                                <li class="t_item">
                                    <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                                    <div class="t_content">
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_name"><?php echo __('Название'); ?></label>
                                            <div class="">
                                                <input id="f_name"
                                                       class="form-control <?php echo $key == 'ru' ? 'translitSource' : ''; ?> valid"
                                                       name="FORM[<?php echo $key; ?>][name]" type="text"
                                                       value="<?php echo $public->name; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_name"><?php echo __('Превая строка'); ?></label>
                                            <div class="">
                                                <input id="f_name"
                                                       class="form-control"
                                                       name="FORM[<?php echo $key; ?>][first]" type="text"
                                                       value="<?php echo $public->first; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_name"><?php echo __('Втроая строка'); ?></label>
                                            <div class="">
                                                <input id="f_name"
                                                       class="form-control"
                                                       name="FORM[<?php echo $key; ?>][second]" type="text"
                                                       value="<?php echo $public->second; ?>"/>
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
                    <?php echo __('Базовые настройки'); ?>
                </div>
            </div>
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
            <div class="widgetHeader myWidgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Изображение'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Изображение'); ?></label>
                        <div class="">
                            <?php if (is_file(HOST . Core\HTML::media('images/slider/original/' . $obj->image))): ?>
                                <a href="<?php echo Core\HTML::media('images/slider/original/' . $obj->image); ?>"
                                   rel="lightbox">
                                    <img src="<?php echo Core\HTML::media('images/slider/main/' . $obj->image); ?>"
                                         style="max-height: 100px;"/>
                                </a>
                                <br/>
                                <div class="contentImageControl">
                                    <a class="btn btn-danger otherBtn"
                                       href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image/<?php echo $obj->id; ?>">
                                        <i class="fa-remove"></i>
                                        <?php echo __('Удалить изображение'); ?>
                                    </a>
                                    <a class="btn btn-info otherBtn"
                                           href="<?php echo \Core\General::crop('slider', 'main', $obj->image); ?>">
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
        </div>
    </div>
</form>
