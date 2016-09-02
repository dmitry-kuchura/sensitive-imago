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
                                            <label class="control-label" for="f_theme"><?php echo __('Тема'); ?></label>
                                            <div class="">
                                                <input id="f_theme" class="form-control translitSource valid" name="FORM[<?php echo $key; ?>][subject]" type="text" value="<?php echo $public->subject; ?>" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"><?php echo __('Шаблон'); ?></label>
                                            <div class="">
                                                <textarea style="height: 350px;" class="tinymceEditor form-control" rows="20" name="FORM[<?php echo $key; ?>][text]"><?php echo $public->text; ?></textarea>
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
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Наименование шаблона'); ?></label>
                        <div class="red" style="font-weight: bold;">
                            <?php echo $obj->name; ?>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Опубликовано'); ?></label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="status" value="0" type="radio" <?php echo!$obj->status ? 'checked' : ''; ?>>
                                <?php echo __('Нет'); ?>
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="status" value="1" type="radio" <?php echo $obj->status ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Переменные'); ?>
                </div>
            </div>
            <div class="pageInfo alert alert-info">
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Доменное имя сайта'); ?></strong></div>
                    <div class="col-md-6">{{site}}</div>
                </div>
                <?php if ($obj->id == 1): ?>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Имя'); ?></strong></div>
                        <div class="col-md-6">{{name}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong>E-Mail</strong></div>
                        <div class="col-md-6">{{email}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong>Телефон</strong></div>
                        <div class="col-md-6">{{phone}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Тема обращения'); ?></strong></div>
                        <div class="col-md-6">{{theme}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('IP адрес'); ?></strong></div>
                        <div class="col-md-6">{{ip}}</div>
                    </div>
                <?php endif ?>
                <?php if ($obj->id == 36): ?>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Имя'); ?></strong></div>
                        <div class="col-md-6">{{name}}</div>
                    </div>
                <?php endif ?>
                <?php if ($obj->id == 37): ?>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Имя'); ?></strong></div>
                        <div class="col-md-6">{{name}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong>E-Mail</strong></div>
                        <div class="col-md-6">{{email}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong>Телефон</strong></div>
                        <div class="col-md-6">{{phone}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Наименование проекта'); ?></strong></div>
                        <div class="col-md-6">{{project}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('IP адрес'); ?></strong></div>
                        <div class="col-md-6">{{ip}}</div>
                    </div>
                <?php endif ?>
                <?php if ($obj->id == 38): ?>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Имя'); ?></strong></div>
                        <div class="col-md-6">{{name}}</div>
                    </div>
                    <div class="rowSection">
                        <div class="col-md-6"><strong><?php echo __('Наименование проекта'); ?></strong></div>
                        <div class="col-md-6">{{project}}</div>
                    </div>
                <?php endif ?>
            </div>
        </div>
    </div>
</form>