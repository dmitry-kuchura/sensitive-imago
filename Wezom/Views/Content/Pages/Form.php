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
                                            <label class="control-label" for="f_name"><?php echo __('Наименование'); ?></label>
                                            <div class="">
                                                <input id="f_name" class="form-control valid" name="FORM[<?php echo $key; ?>][name]" type="text" value="<?php echo $public->name; ?>" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label"><?php echo __('Контент'); ?></label>
                                            <div class="">
                                                <textarea style="height:350px;" class="tinymceEditor form-control" rows="15" name="FORM[<?php echo $key; ?>][text]"><?php echo $public->text; ?></textarea>
                                            </div>
                                        </div>
                                        <?php if ($obj->id == 7): ?>
                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Описание первого слайдера'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_text1]" type="text" value="<?php echo $public->beuseful_text1; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Описание второго слайдера'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_text2]" type="text" value="<?php echo $public->beuseful_text2; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Описание третьего слайдера'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_text3]" type="text" value="<?php echo $public->beuseful_text3; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Доп. описание третьего слайдера'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_slider]" type="text" value="<?php echo $public->beuseful_slider; ?>" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="control-label" for="f_title_big"><?php echo __('Заголовок'); ?></label>
                                                <div class="">
                                                    <input id="f_title_big" class="form-control" name="FORM[<?php echo $key; ?>][title_big]" type="text" value="<?php echo $public->title_big; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_slogan"><?php echo __('Слоган'); ?></label>
                                                <div class="">
                                                    <input id="f_slogan" class="form-control" name="FORM[<?php echo $key; ?>][slogan]" type="text" value="<?php echo $public->slogan; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_about_title"><?php echo __('Заголовок контента'); ?></label>
                                                <div class="">
                                                    <input id="f_about_title" class="form-control" name="FORM[<?php echo $key; ?>][about_title]" type="text" value="<?php echo $public->about_title; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_now_title"><?php echo __('Заголовок "Сейчас"'); ?></label>
                                                <div class="">
                                                    <input id="f_now_title" class="form-control" name="FORM[<?php echo $key; ?>][now_title]" type="text" value="<?php echo $public->now_title; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Список "Сейчас"'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="10" name="FORM[<?php echo $key; ?>][now_list]"><?php echo $public->now_list; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_beuseful_title"><?php echo __('Заголовок "Полезность"'); ?></label>
                                                <div class="">
                                                    <input id="f_beuseful_title" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_title]" type="text" value="<?php echo $public->beuseful_title; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Текст "Полезность"'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="form-control" rows="10" name="FORM[<?php echo $key; ?>][beuseful_text]"><?php echo $public->beuseful_text; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_beuseful_link"><?php echo __('Текст ссылки на услуги'); ?></label>
                                                <div class="">
                                                    <input id="f_beuseful_link" class="form-control" name="FORM[<?php echo $key; ?>][beuseful_link]" type="text" value="<?php echo $public->beuseful_link; ?>" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="control-label" for="f_mission_title"><?php echo __('Заголовок миссии'); ?></label>
                                                <div class="">
                                                    <input id="f_beuseful_link" class="form-control" name="FORM[<?php echo $key; ?>][mission_title]" type="text" value="<?php echo $public->mission_title; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Текст миссии'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="10" name="FORM[<?php echo $key; ?>][mission_text]"><?php echo $public->mission_text; ?></textarea>
                                                </div>
                                            </div>
                                        <?php endif; ?>
                                        <?php if ($obj->id == 8): ?>
                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Второй заголовок'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][title_big]" type="text" value="<?php echo $public->title_big; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_service_name_first"><?php echo __('Название первого сервиса'); ?></label>
                                                <div class="">
                                                    <input id="f_service_name_first" class="form-control" name="FORM[<?php echo $key; ?>][service_name_first]" type="text" value="<?php echo $public->service_name_first; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Описание первого сервиса'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="5" name="FORM[<?php echo $key; ?>][service_text_first]"><?php echo $public->service_text_first; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_service_name_second"><?php echo __('Название второго сервиса'); ?></label>
                                                <div class="">
                                                    <input id="f_service_name_second" class="form-control" name="FORM[<?php echo $key; ?>][service_name_second]" type="text" value="<?php echo $public->service_name_second; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Описание вторго сервиса'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="5" name="FORM[<?php echo $key; ?>][service_text_second]"><?php echo $public->service_text_second; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_service_name_third"><?php echo __('Название третьего сервиса'); ?></label>
                                                <div class="">
                                                    <input id="f_service_name_third" class="form-control" name="FORM[<?php echo $key; ?>][service_name_third]" type="text" value="<?php echo $public->service_name_third; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Описание третьего сервиса'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="5" name="FORM[<?php echo $key; ?>][service_text_third]"><?php echo $public->service_text_third; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_service_name_four"><?php echo __('Название четвертого сервиса'); ?></label>
                                                <div class="">
                                                    <input id="f_service_name_four" class="form-control" name="FORM[<?php echo $key; ?>][service_name_four]" type="text" value="<?php echo $public->service_name_four; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Описание четвертого сервиса'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="5" name="FORM[<?php echo $key; ?>][service_text_four]"><?php echo $public->service_text_four; ?></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_title"><?php echo __('Заголовок алгоритмов'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_title" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_title]" type="text" value="<?php echo $public->algoritm_title; ?>" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_first"><?php echo __('Алгоритм первый'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_first" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_first]" type="text" value="<?php echo $public->algoritm_first; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_second"><?php echo __('Алгоритм второй'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_second" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_second]" type="text" value="<?php echo $public->algoritm_second; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_third"><?php echo __('Алгоритм третий'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_third" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_third]" type="text" value="<?php echo $public->algoritm_third; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_four"><?php echo __('Алгоритм четвертый'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_four" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_four]" type="text" value="<?php echo $public->algoritm_four; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label" for="f_algoritm_five"><?php echo __('Алгоритм пятый'); ?></label>
                                                <div class="">
                                                    <input id="f_algoritm_five" class="form-control" name="FORM[<?php echo $key; ?>][algoritm_five]" type="text" value="<?php echo $public->algoritm_five; ?>" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="control-label" for="f_title_virtual"><?php echo __('Заголовок виртуализации'); ?></label>
                                                <div class="">
                                                    <input id="f_title_virtual" class="form-control" name="FORM[<?php echo $key; ?>][title_virtual]" type="text" value="<?php echo $public->title_virtual; ?>" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label"><?php echo __('Текст виртуализации'); ?></label>
                                                <div class="">
                                                    <textarea style="height:350px;" class="tinymceEditor form-control" rows="5" name="FORM[<?php echo $key; ?>][text_virtual]"><?php echo $public->text_virtual; ?></textarea>
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
                    <?php if ($obj->id == 8): ?>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение первого сервиса'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/services/original/' . $obj->image_first))): ?>
                                    <a href="<?php echo Core\HTML::media('images/services/original/' . $obj->image_first); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/services/main/' . $obj->image_first); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image_first/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('services', 'main', $obj->image_first); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="file_1" />
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение второго сервиса'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/services/original/' . $obj->image_second))): ?>
                                    <a href="<?php echo Core\HTML::media('images/services/original/' . $obj->image_second); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/services/main/' . $obj->image_second); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image_second/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('services', 'main', $obj->image_second); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="file_2" />
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение третьего сервиса'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/services/original/' . $obj->image_third))): ?>
                                    <a href="<?php echo Core\HTML::media('images/services/original/' . $obj->image_third); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/services/main/' . $obj->image_third); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image_third/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('services', 'main', $obj->image_third); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="file_3" />
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение четвертого сервиса'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/services/original/' . $obj->image_four))): ?>
                                    <a href="<?php echo Core\HTML::media('images/services/original/' . $obj->image_four); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/services/main/' . $obj->image_four); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image_four/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('services', 'main', $obj->image_four); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="file_4" />
                                <?php endif ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

            <div class="pageInfo alert alert-info">                 
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Опубликовано'); ?></strong></div>
                    <div class="col-md-6"><?php echo $obj->status == 1 ? 'Да' : 'Нет'; ?></div>
                </div>
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Дата создания'); ?></strong></div>
                    <div class="col-md-6"><?php echo $obj->created_at ? date('d.m.Y H:i:s', $obj->created_at) : '---'; ?></div>
                </div>
                <div class="rowSection">
                    <div class="col-md-6"><strong><?php echo __('Дата последнего изменения'); ?></strong></div>
                    <div class="col-md-6"><?php echo $obj->updated_at ? date('d.m.Y H:i:s', $obj->updated_at) : '---'; ?></div>
                </div>
            </div>
        </div>
    </div>
    <?php if ($obj->id == 7): ?>
        <div class="col-md-5">
            <div class="widget">
                <div class="widgetHeader">
                    <div class="widgetTitle">
                        <i class="fa-reorder"></i>
                        <?php echo __('Слайдер'); ?>
                    </div>
                </div>
                <div class="widgetContent">
                    <div class="form-vertical row-border">
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение первого слайда'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/slider_about/original/' . $obj->slider_first))): ?>
                                    <a href="<?php echo Core\HTML::media('images/slider_about/original/' . $obj->slider_first); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $obj->slider_first); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_slider_first/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('slider_about', 'main', $obj->slider_first); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="slider_1" />
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение вторго слайда'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/slider_about/original/' . $obj->slider_second))): ?>
                                    <a href="<?php echo Core\HTML::media('images/slider_about/original/' . $obj->slider_second); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $obj->slider_second); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_slider_second/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('slider_about', 'main', $obj->slider_second); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="slider_2" />
                                <?php endif ?>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo __('Изображение третьего слайда'); ?></label>
                            <div class="">
                                <?php if (is_file(HOST . Core\HTML::media('images/slider_about/original/' . $obj->slider_third))): ?>
                                    <a href="<?php echo Core\HTML::media('images/slider_about/original/' . $obj->slider_third); ?>" rel="lightbox">
                                        <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $obj->slider_third); ?>" style="max-height: 100px;" />
                                    </a>
                                    <br />
                                    <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_slider_third/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                                    <br />
                                    <a href="<?php echo \Core\General::crop('slider_about', 'main', $obj->slider_third); ?>"><?php echo __('Редактировать'); ?></a>
                                <?php else: ?>
                                    <input type="file" name="slider_3" />
                                <?php endif ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif; ?>
</form>