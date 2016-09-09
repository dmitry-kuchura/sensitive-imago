<form id="myForm" class="rowSection validat" method="post" action="" enctype="multipart/form-data">
    <div class="form-actions" style="display: none;">
        <input class="submit btn btn-primary pull-right" type="submit" value="Отправить">
    </div>
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetContent">
                <div class="form-vertical row-border">
                    <ul class="liTabs t_wrap">
                        <li class="t_item">
                            <a class="t_link" href="#">Основные данные</a>
                            <div class="t_content">
                                <div class="form-group">
                                    <div class="rowSection">
                                        <div class="col-md-4">
                                            <label class="control-label">Опубликовано</label>
                                            <div class="">
                                                <label class="checkerWrap-inline">
                                                    <input name="status" value="0" type="radio" <?php echo (!$obj->status AND $obj) ? 'checked' : ''; ?>>
                                                    Нет
                                                </label>
                                                <label class="checkerWrap-inline">
                                                    <input name="status" value="1" type="radio" <?php echo ($obj->status OR ! $obj) ? 'checked' : ''; ?>>
                                                    Да
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="rowSection">
                                        <div class="col-md-6 form-group">
                                            <label class="control-label" for="parent_id">
                                                Группа
                                                <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<b>При изменении группы товара меняется набор характеристик!</b>"></i>
                                            </label>
                                            <div class="">
                                                <div class="controls">
                                                    <select class="form-control valid" id="parent_id" name="FORM[parent_id]">
                                                        <option value="">Не выбрано</option>
                                                        <?php echo $tree; ?>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <label class="control-label" for="f_sort">
                                                Позиция
                                                <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<b>Поле определяет позицию товара среди других в списках</b>"></i>
                                            </label>
                                            <div class="">
                                                <input class="form-control" id="f_sort" name="FORM[sort]" type="text" value="<?php echo $obj->sort; ?>" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_name">Название</label>
                                    <div class="">
                                        <input class="form-control translitSource valid" id="f_name" name="FORM[name]" type="text" value="<?php echo $obj->name; ?>" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label" for="f_alias">
                                        Алиас
                                        <i class="fa-info-circle text-info bs-tooltip nav-hint" title="<b>Алиас (англ. alias - псевдоним)</b><br>Алиасы используются для короткого именования страниц. <br>Предположим, имеется страница с псевдонимом «<b>about</b>». Тогда для вывода этой страницы можно использовать или полную форму: <br><b>http://domain/?go=frontend&page=about</b><br>или сокращенную: <br><b>http://domain/about.html</b>"></i>
                                    </label>
                                    <div class="">
                                        <div class="input-group">
                                            <input class="form-control translitConteiner valid" id="f_alias" name="FORM[alias]" type="text" value="<?php echo $obj->alias; ?>" />
                                            <span class="input-group-btn">
                                                <button class="btn translitAction" type="button">Заполнить автоматически</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label class="control-label" for="f_keywords">Краткое описание</label>
                                    <div class="">
                                        <textarea id="f_keywords" class="form-control" name="FORM[small]" rows="5"><?php echo $obj->small; ?></textarea>
                                    </div>
                                </div>
                                <div class="form-group hiddenCostField" <?php echo!$obj->sale ? 'style="display:none;"' : ''; ?>>
                                    <label class="control-label" for="f_old_cost">Старая цена</label>
                                    <div class="">
                                        <input class="form-control" id="f_old_cost" name="FORM[cost_old]" type="tel" value="<?php echo $obj->cost_old; ?>" />
                                    </div>
                                </div>
                                <!--ОПИСАНИЕ-->
                                <div class="form-group">
                                    <label class="control-label">Описание</label>
                                    <div class="">
                                        <textarea class="tinymceEditor form-control" rows="20" name="FORM[text]"><?php echo $obj->text; ?></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Технологии выращивания</label>
                                    <div class="">
                                        <textarea class="tinymceEditor form-control" rows="20" name="FORM[technologies]"><?php echo $obj->technologies; ?></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Технологические характеристики</label>
                                    <div class="">
                                        <textarea class="tinymceEditor form-control" rows="20" name="FORM[characteristics]"><?php echo $obj->characteristics; ?></textarea>
                                    </div>
                                </div>
                                <!--ОПИСАНИЕ-->
                            </div>
                        </li>
                        <li class="t_item">
                            <a class="t_link" href="#">Мета-данные</a>
                            <div class="t_content">
                                <div style="font-weight: bold; margin-bottom: 10px;"><span class="red">Внимание!</span> Незаполненные данные будут подставлены по <a href="<?php echo \Core\HTML::link('wezom/seo_templates/edit/2'); ?>" target="_blank">шаблону</a></div>
                                <div class="form-group">
                                    <label class="control-label" for="f_h1">
                                        Заголовок страницы (H1)
                                        <i class="fa-info-circle text-info bs-tooltip nav-hint liTipLink" title="Рекомендуется, чтобы тег h1 содержал ключевую фразу, которая частично или полностью совпадает с title" style="white-space: nowrap;"></i>
                                    </label>
                                    <div class="">
                                        <input id="f_h1" class="form-control" name="FORM[h1]" type="text" value="<?php echo $obj->h1; ?>" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_title">
                                        Title
                                        <i class="fa-info-circle text-info bs-tooltip nav-hint liTipLink" title="<p>Значимая для продвижения часть заголовка должна быть не более 12 слов</p><p>Самые популярные ключевые слова должны идти в самом начале заголовка и уместиться в первых 50 символов, чтобы сохранить привлекательный вид в поисковой выдаче.</p><p>Старайтесь не использовать в заголовке следующие знаки препинания – . ! ? – </p>" style="white-space: nowrap;"></i>
                                    </label>
                                    <div class="">
                                        <input id="f_title" class="form-control" type="text" name="FORM[title]" value="<?php echo $obj->title; ?>" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_keywords">Ключевые слова (Keywords)</label>
                                    <div class="">
                                        <textarea id="f_keywords" class="form-control" name="FORM[keywords]" rows="5"><?php echo $obj->keywords; ?></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="f_description">Описание (Description)</label>
                                    <div class="">
                                        <textarea id="f_description" class="form-control" name="FORM[description]" rows="5"><?php echo $obj->description; ?></textarea>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="widget">
            <div class="widgetHeader myWidgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    Фасовки
                </div>
                <!--</div>-->
                <!--ТУТ БУДЕТ КОД-->
                <div class="widget box" style="<?php if ($id == null) { echo 'display: none;'; } ?>">
                    <div class="widgetHeader"><div class="widgetTitle"><i class="fa-reorder"></i>Добавить вариант фасовки</div></div>
                    <div class="widgetContent">
                        <table class="table table-striped table-bordered table-hover checkbox-wrap">
                            <thead>
                                <tr>
                                    <th class="align-center" style="width:50%">Фасовка</th>
                                    <th class="align-center" style="width:50%">Стоимость</th>
                                    <th class="align-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                            <input type="text" id="sID" data-trans="2" style="display: none;" class="form-control" name="PACK[id]" value="<?php echo $id; ?>">
                            <td class="align-center">
                                <input type="text" id="sName" data-trans="2" class="form-control" name="PACK[name]" value="">
                            </td>
                            <td class="align-center">
                                <input type="text" id="sValue" data-trans="2" class="form-control" name="PACK[cost]" value="">
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
                <!--ЗНАЧЕНИЯ ФАСОВОК-->
                <div class="widget box" style="<?php if ($id == null) { echo 'display: none;'; } ?>">
                    <div class="widgetHeader"><div class="widgetTitle"><i class="fa-reorder"></i>Список значений</div></div>
                    <div class="widgetContent" id="sValuesList">
                        <table class="table table-striped table-bordered table-hover checkbox-wrap" data-specification="<?php echo Core\Route::param('id'); ?>">
                            <thead>
                                <tr>
                                    <th class="align-center" style="width:25%">Фасовка</th>
                                    <th class="align-center">Стоимость</th>
                                    <!--<th class="align-center">Статус</th>-->
                                    <th class="align-center" style="width:80px"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($packing as $obj): ?>
                                    <tr data-id="<?php echo $obj->id; ?>">
                                        <td class="align-center">
                                            <input type="text" data-trans="<?php echo 'val-' . $obj->id; ?>" class="form-control sName" value="<?php echo $obj->variable; ?>" />
                                        </td>
                                        <td class="align-center">
                                            <input data-trans="<?php echo 'val-' . $obj->id; ?>" type="text" class="form-control sValue" value="<?php echo $obj->cost; ?>"/>
                                        </td>
                                        <td class="align-center">
                                            <!--<a title="Сохранить изменения" href="#" class="sSave btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-fixed-width">&#xf0c7;</i></a>-->
                                            <a title="Удалить" href="#" class="sDelete btn btn-xs bs-tooltip liTipLink" style="white-space: nowrap; margin-top: 7px;"><i class="fa-trash-o"></i></a>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

<script>
    $(function () {
        $('input[name="sale"]').on('change', function () {
            var val = parseInt($(this).val());
            if (val) {
                var cost = $('input[name="FORM[cost]"]').val();
                var cost_old = $('input[name="FORM[cost_old]"]').val();
                $('input[name="FORM[cost]"]').val(cost_old);
                $('input[name="FORM[cost_old]"]').val(cost);
                $('.hiddenCostField').show();
            } else {
                var cost = $('input[name="FORM[cost]"]').val();
                var cost_old = $('input[name="FORM[cost_old]"]').val();
                $('input[name="FORM[cost]"]').val(cost_old);
                $('input[name="FORM[cost_old]"]').val(cost);
                $('.hiddenCostField').hide();
            }
        });

        $('#parent_id').on('change', function () {
            var catalog_tree_id = $(this).val();
            $.ajax({
                url: '/wezom/ajax/catalog/getSpecificationsByCatalogTreeID',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    catalog_tree_id: catalog_tree_id
                },
                success: function (data) {
                    var i = 0;
                    var j = 0;
                    var val;
                    var html = '<option value="0">Нет</option>';
                    $('#model_alias').html(html);
                    for (i = 0; i < data.brands.length; i++) {
                        html += '<option value="' + data.brands[i].alias + '">' + data.brands[i].name + '</option>';
                    }
                    $('#brand_alias').html(html);
                    html = '';
                    for (i = 0; i < data.specifications.length; i++) {
                        var spec = data.specifications[i];
                        if (data.specValues[spec.id]) {
                            var values = data.specValues[spec.id];
                            html += '<div class="form-group"><label class="control-label">' + spec.name + '</label>';
                            if (parseInt(spec.type_id) == 3) {
                                html += '<div class="multiSelectBlock"><div class="controls">';
                                html += '<select class="form-control" name="SPEC[' + spec.alias + '][]" multiple="10" style="height:150px;">';
                                for (j = 0; j < values.length; j++) {
                                    val = values[j];
                                    html += '<option value="' + val.alias + '">' + val.name + '</option>';
                                }
                                html += '</select>';
                                html += '</div></div>';
                            }
                            if (parseInt(spec.type_id) == 2 || parseInt(spec.type_id) == 1) {
                                html += '<div class=""><div class="controls">';
                                html += '<select class="form-control" name="SPEC[' + spec.alias + ']">';
                                html += '<option value="0">Нет</option>';
                                for (j = 0; j < values.length; j++) {
                                    val = values[j];
                                    html += '<option value="' + val.alias + '">' + val.name + '</option>';
                                }
                                html += '</select>';
                                html += '</div></div>';
                            }
                            html += '</div>';
                        }
                    }
                    $('#specGroup').html(html);
                    multi_select();
                }
            });
        });
        var generate_warning = function (message) {
            $(document).alert2({
                message: message,
                headerCOntent: false,
                footerContent: false,
                typeMessage: 'warning' //false or 'warning','success','info','danger'
            });
        };
        // Set checkbox
        var checkboxStart = function (el) {
            var parent = el.parent();
            if (parent.is('label')) {
                if (el.prop('checked')) {
                    parent.addClass('checked');
                } else {
                    parent.removeClass('checked');
                }
            }
        };
        // Generate a row from object
        var generateTR = function (obj) {
            var html = '';
            html = '<tr data-id="' + obj.id + '">';
            html += '<td class="align-center">';
            html += '<input type="text" class="form-control sName" data-trans="val-' + obj.id + '" value="' + obj.variable + '" />';
            html += '</td>';
            html += '<td class="align-center">';
            html += '<input class="form-control sAlias" data-trans="val-' + obj.id + '" type="text" value="' + obj.cost + '" />';
            html += '</td>';
//            html += '<td class="align-center"><label class="ckbxWrap" style="top: 8px; left: 6px;">';
//            if (parseInt(obj.status) == 1) {
//                html += '<input class="sStatus" type="checkbox" value="1" checked />';
//            } else {
//                html += '<input class="sStatus" type="checkbox" value="1" />';
//            }
//            html += '</label></td>';
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
            var name = $('#sName').val();
            var value = $('#sValue').val();
            $.ajax({
                url: '/wezom/ajax/catalog/addPack',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    item_id: id,
                    name: name,
                    value: value
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
                        $('#sName').val('');
                        $('#sValue').val('');
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
                url: '/wezom/ajax/catalog/deletePack',
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
        $('#brand_alias').on('change', function () {
            var brand_alias = $(this).val();
            $.ajax({
                url: '/wezom/ajax/catalog/getModelsByBrandID',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    brand_alias: brand_alias
                },
                success: function (data) {
                    var html = '<option value="0">Нет</option>';
                    for (var i = 0; i < data.options.length; i++) {
                        html += '<option value="' + data.options[i].alias + '">' + data.options[i].name + '</option>';
                    }
                    $('#model_alias').html(html);
                }
            });
        });
    });
</script>
Блог  