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
            <input class="submit btn btn-primary pull-right" type="submit" value="Отправить">
        </div>
        <div class="col-md-6">
            <div class="widget box">
                <div class="widgetHeader">
                    <div class="widgetTitle">
                        <i class="fa-reorder"></i>
                        Общие данные
                    </div>
                </div>
                <div class="widgetContent">
                    <ul class="liTabs t_wrap">
                        <?php foreach ($languages AS $key => $lang): ?>
                            <?php $public = \Core\Arr::get($langs, $key, array()); ?>
                            <li class="t_item">
                                <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                                <div class="t_content">
                                    <div class="form-group">
                                        <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                                        <div class="">
                                            <input id="f_name"
                                                   class="form-control <?php echo $key == 'en' ? 'translitSource' : ''; ?> valid"
                                                   name="FORM[<?php echo $key; ?>][name]" type="text"
                                                   value="<?php echo $public->name; ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label" for="f_h1">
                                            <?php echo __('Заголовок страницы (h1)'); ?>
                                        </label>
                                        <div class="">
                                            <input id="f_h1" class="form-control" name="FORM[<?php echo $key; ?>][h1]"
                                                   type="text" value="<?php echo $public->h1; ?>"/>
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
                                </div>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="widget">
                <div class="widgetHeader myWidgetHeader">
                    <div class="widgetTitle">
                        <i class="fa-reorder"></i>
                        <?php echo __('Базовые настройки'); ?>
                    </div>
                </div>
                <div class="widgetContent">
                    <div class="form-group">
                        <label class="control-label">Опубликовано</label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="status" value="0"
                                       type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                Нет
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="status" value="1"
                                       type="radio" <?php echo ($obj->status OR !$obj) ? 'checked' : ''; ?>>
                                Да
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label" for="f_alias">
                            Алиас
                            <i class="fa-info-circle text-info bs-tooltip nav-hint"
                               title="<b>Алиас (англ. alias - псевдоним)</b><br>Алиасы используются для короткого именования страниц. <br>Предположим, имеется страница с псевдонимом «<b>about</b>». Тогда для вывода этой страницы можно использовать или полную форму: <br><b>http://domain/?go=frontend&page=about</b><br>или сокращенную: <br><b>http://domain/about.html</b>"></i>
                        </label>
                        <div class="">
                            <div class="input-group">
                                <input id="f_alias" class="form-control translitConteiner valid" name="FORM[alias]"
                                       type="text" value="<?php echo $obj->alias; ?>"/>
                                <span class="input-group-btn">
                                            <button class="btn translitAction"
                                                    type="button">Заполнить автоматически</button>
                                        </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Изображение</label>
                        <div>
                            <?php if (is_file(HOST . Core\HTML::media('images/gallery/original/' . $obj->image))): ?>
                                <div class="contentImageView">
                                    <img src="<?php echo Core\HTML::media('images/gallery/main/' . $obj->image); ?>"
                                         style="max-width: 150px;">
                                    <div class="contentImageControl">
                                        <a class="btn btn-danger otherBtn"
                                           href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image/<?php echo $obj->id; ?>">
                                            <i class="fa-remove"></i>
                                            Удалить изображение
                                        </a>
                                    </div>
                                </div>

                            <?php else: ?>
                                <input type="file" name="file"/>
                            <?php endif ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </form>
<?php echo $uploader; ?>