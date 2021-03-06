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
                                                   for="f_name"><?php echo __('Название'); ?></label>
                                            <div class="">
                                                <input id="f_name" class="form-control valid"
                                                       name="FORM[<?php echo $key; ?>][name]" type="text"
                                                       value="<?php echo $public->name; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="f_h1">
                                                <?php echo __('Заголовок страницы (h1)'); ?>
                                            </label>
                                            <div class="">
                                                <input id="f_h1" class="form-control"
                                                       name="FORM[<?php echo $key; ?>][h1]" type="text"
                                                       value="<?php echo $public->h1; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label" for="f_title">
                                                title
                                            </label>
                                            <div class="">
                                                <input id="f_title" class="form-control" type="text"
                                                       name="FORM[<?php echo $key; ?>][title]"
                                                       value="<?php echo $public->title; ?>"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_keywords"><?php echo __('Ключевые слова (keywords)'); ?></label>
                                            <div class="">
                                                <textarea id="f_keywords" class="form-control"
                                                          name="FORM[<?php echo $key; ?>][keywords]"
                                                          rows="5"><?php echo $public->keywords; ?></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"
                                                   for="f_description"><?php echo __('Описание (description)'); ?></label>
                                            <div class="">
                                                <textarea id="f_description" class="form-control"
                                                          name="FORM[<?php echo $key; ?>][description]"
                                                          rows="5"><?php echo $public->description; ?></textarea>
                                            </div>
                                        </div>
                                        <?php if ($obj->alias == 'contacts'): ?>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Адрес'); ?></label>
                                                <div class="">
                                                    <textarea class="tinymceEditor form-control" style="height: 350px;"
                                                              rows="10"
                                                              name="FORM[<?php echo $key; ?>][location]"><?php echo $public->location; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Время работы'); ?></label>
                                                <div class="">
                                                    <textarea class="tinymceEditor form-control" style="height: 350px;"
                                                              rows="10"
                                                              name="FORM[<?php echo $key; ?>][time]"><?php echo $public->time; ?></textarea>
                                                </div>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</form>