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
                        <?php $public = \Core\Arr::get($langs, $key, array()); ?>
                        <li class="t_item">
                            <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                            <div class="t_content">
                                <div class="form-group">
                                    <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                                    <div class="">
                                        <input id="f_name" class="form-control <?php echo $key == 'en' ? 'translitSource' : ''; ?> valid" name="FORM[<?php echo $key; ?>][name]" type="text" value="<?php echo $public->name; ?>" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_h1">
                                        <?php echo __('Заголовок страницы (h1)'); ?>
                                    </label>
                                    <div class="">
                                        <input id="f_h1" class="form-control" name="FORM[<?php echo $key; ?>][h1]" type="text" value="<?php echo $public->h1; ?>" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_title">
                                        title
                                    </label>
                                    <div class="">
                                        <input id="f_title" class="form-control" type="text" name="FORM[<?php echo $key; ?>][title]" value="<?php echo $public->title; ?>" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_keywords"><?php echo __('Ключевые слова (keywords)'); ?></label>
                                    <div class="">
                                        <textarea id="f_keywords" class="form-control" name="FORM[<?php echo $key; ?>][keywords]" rows="5"><?php echo $public->keywords; ?></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_description"><?php echo __('Описание (description)'); ?></label>
                                    <div class="">
                                        <textarea id="f_description" class="form-control" name="FORM[<?php echo $key; ?>][description]" rows="5"><?php echo $public->description; ?></textarea>
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
                <div class="form-vertical row-border">
                    <div class="form-group">
                        <label class="control-label"><?php echo __('Опубликовано'); ?></label>
                        <div class="">
                            <label class="checkerWrap-inline">
                                <input name="status" value="0" type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                <?php echo __('Нет'); ?>
                            </label>
                            <label class="checkerWrap-inline">
                                <input name="status" value="1" type="radio" <?php echo ($obj->status OR ! $obj) ? 'checked' : ''; ?>>
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
                                <input id="f_alias" class="form-control translitConteiner valid" name="FORM[alias]" type="text" value="<?php echo $obj->alias; ?>" />
                                <span class="input-group-btn">
                                    <button class="btn translitAction" type="button"><?php echo __('Заполнить автоматически'); ?></button>
                                </span>
                            </div>
                        </div>
                    </div>
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
                            <?php if (is_file(HOST . Core\HTML::media('images/video/original/' . $obj->image))): ?>
                                <a href="<?php echo Core\HTML::media('images/video/original/' . $obj->image); ?>" rel="lightbox">
                                    <img src="<?php echo Core\HTML::media('images/video/small/' . $obj->image); ?>" style="max-height: 100px;" />
                                </a>
                                <br />
                                <a href="/wezom/<?php echo Core\Route::controller(); ?>/delete_image/<?php echo $obj->id; ?>"><?php echo __('Удалить изображение'); ?></a>
                            <?php else: ?>
                                <input type="file" name="file" />
                            <?php endif ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget box" style="<?php echo (!$obj OR ! $obj->id) ? 'display: none;' : ''; ?>">
                <div class="widgetHeader"><div class="widgetTitle"><i class="fa-reorder"></i>Добавить ссылку</div></div>
                <div class="widgetContent">
                    <table class="table table-striped table-bordered table-hover checkbox-wrap">
                        <thead>
                            <tr>
                                <th class="align-center" style="width:100%">Ссылка</th>
                                <th class="align-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                        <input type="text" id="sID" data-trans="2" style="display: none;" class="form-control" name="VIDEO[id]" value="<?php echo $obj->id; ?>">
                        <td class="align-center">
                            <input type="text" id="sUrl" data-trans="2" class="form-control" name="VIDEO[url]" value="">
                        </td>
                        <td class="align-center">
                            <a title="Сохранить" id="sSave" href="" class="btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;">
                                <i class="fa-fixed-width">&#xf0c7;</i>
                            </a>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="widget box" style="<?php echo (!$obj OR ! $obj->id) ? 'display: none;' : ''; ?>">
                <div class="widgetHeader"><div class="widgetTitle"><i class="fa-reorder"></i>Список значений</div></div>
                <div class="widgetContent" id="sValuesList">
                    <table class="table table-striped table-bordered table-hover checkbox-wrap" data-specification="<?php echo Core\Route::param('id'); ?>">
                        <thead>
                            <tr>
                                <th class="align-center" style="width:100%">Ссылка</th>
                                <th class="align-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (count($video)): ?> 
                                <?php foreach ($video as $p): ?>
                                    <tr data-id="<?php echo $p->id; ?>">
                                        <td class="align-center">
                                            <input type="text" data-trans="<?php echo 'val-' . $p->id; ?>" class="form-control sName" value="<?php echo $p->url; ?>" />
                                        </td>
                                        <td class="align-center">
                                            <!--<a title="Сохранить изменения" href="#" class="sSave btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-fixed-width">&#xf0c7;</i></a>-->
                                            <a title="Удалить" href="#" class="sDelete btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-trash-o"></i></a>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <?php //echo $items;   ?>
    </div>
</form>
<?php // echo $uploader;   ?>

<script>
    $(function () {
        var pickerInit = function (selector) {
            var date = $(selector).val();
            $(selector).datepicker({
                showOtherMonths: true,
                selectOtherMonths: false
            });
            $(selector).datepicker('option', $.datepicker.regional['ru']);
            var dateFormat = $(selector).datepicker("option", "dateFormat");
            $(selector).datepicker("option", "dateFormat", 'dd.mm.yy');
            $(selector).val(date);
        };
        pickerInit('.myPicker');
    });
    // Generate a row from object
    var generateTR = function (obj) {
        var html = '';
        html = '<tr data-id="' + obj.id + '">';
        html += '<td class="align-center">';
        html += '<input type="text" class="form-control sName" data-trans="val-' + obj.id + '" value="' + obj.url + '" />';
        html += '</td>';

        html += '<td class="align-center">';
//            html += '<a title="Сохранить изменения" href="#" class="sSave btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-fixed-width">&#xf0c7;</i></a>';
        html += '<a title="Удалить" href="#" class="sDelete btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-trash-o"></i></a>';
        html += '</td>';
        html += '</tr>';
        return html;
    };
    // Add a row
    $('#sSave').on('click', function (e) {
        e.preventDefault();
        loader($('#sValuesList'), 1);
        var id = $('#sID').val();
        var url = $('#sUrl').val();

        $.ajax({
            url: '/wezom/ajax/video/addVideo',
            type: 'POST',
            dataType: 'JSON',
            data: {
                row_id: id,
                url: url

            },
            success: function (data) {
                if (data.success) {
                    var html = '';
                    if (data.result.length) {
                        for (var i = 0; i < data.result.length; i++) {
                            html += generateTR(data.result[i]);
                        }
                    }
                    $('#sValuesList tbody').html(html);
                    $('#sValuesList input[type=checkbox]').each(function () {
                        checkboxStart($(this));
                    });
                    $('#sValuesList input[type=checkbox]').on('change', function () {
                        checkboxStart($(this));
                    });
                    $('#sUrl').val('');
                } else {
                    generate_warning(data.error);
                }
                loader($('#sValuesList'), 0);
            }
        });
    });
    // Delete a row
    $('#sValuesList').on('click', '.sDelete', function (e) {
        e.preventDefault();
        loader($('#sValuesList'), 1);
        var tr = $(this).closest('tr');
        var id = tr.data('id');
        $.ajax({
            url: '/wezom/ajax/video/deleteVideo',
            type: 'POST',
            dataType: 'JSON',
            data: {
                id: id
            },
            success: function (data) {
                if (data.success) {
                    tr.remove();
                } else {
                    generate_warning(data.error);
                }
                loader($('#sValuesList'), 0);
            }
        });
    });
</script>