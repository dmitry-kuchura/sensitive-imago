<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
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
                        <label class="control-label"><?php echo __('На главной'); ?></label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="main" value="0"
                                       type="radio" <?php echo (!$obj->main AND $obj) ? 'checked' : ''; ?>>
                                <?php echo __('Нет'); ?>
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="main" value="1"
                                       type="radio" <?php echo ($obj->main OR !$obj) ? 'checked' : ''; ?>>
                                <?php echo __('Да'); ?>
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                        <div class="">
                            <input id="f_name" class="form-control valid" name="FORM[name]" type="text"
                                   value="<?php echo $obj->name; ?>"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_youtube"><?php echo __('ссылка на Youtube'); ?></label>
                        <div class="">
                            <input id="f_youtube" class="form-control" name="FORM[youtube]" type="text"
                                   value="<?php echo $obj->youtube; ?>"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_language"><?php echo __('Язык'); ?></label>
                        <div class="">
                            <select id="f_language" class="form-control valid" name="FORM[language]">
                                <option value="ru" <?php echo $obj->language == 'ru' ? 'selected' : NULL; ?>>Русский
                                </option>
                                <option value="en" <?php echo $obj->language == 'en' ? 'selected' : NULL; ?>>
                                    Английский
                                </option>
                                <option value="es" <?php echo $obj->language == 'es' ? 'selected' : NULL; ?>>Испанский
                                </option>
                                <option value="de" <?php echo $obj->language == 'de' ? 'selected' : NULL; ?>>Немецкий
                                </option>
                                <option value="fr" <?php echo $obj->language == 'fr' ? 'selected' : NULL; ?>>
                                    Французкий
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>