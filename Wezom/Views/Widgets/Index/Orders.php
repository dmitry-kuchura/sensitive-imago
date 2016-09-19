<div class="rowSection clearFix">
    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Счётчик заказов прайсов'); ?>
                </div>
            </div>
            <div class="widgetContent">
                <div class="orderChartSize" id="orderChart"></div>
            </div>
        </div>
    </div>
    <script>
        $(function () {
            if ($('#orderChart').length) {
                $.getJSON('/wezom/ajax/ordersChart', function (obj) {
                    $('#orderChart').highcharts({
                        chart: {type: 'line'},
                        title: {text: null},
                        subtitle: {text: null},
                        plotOptions: {line: {dataLabels: {enabled: true}, enableMouseTracking: false}},
                        series: [{name: 'Прайсы', data: obj.count, color: '#94b86e'}],
                        xAxis: {categories: obj.months},
                        yAxis: {title: {text: null}, allowDecimals: false, floor: 0},
                        legend: {enabled: false}
                    });
                });
            }
        });
    </script>

    <div class="col-md-6">
        <div class="widget box">
            <div class="widgetHeader">
                <div class="widgetTitle">
                    <i class="fa-reorder"></i>
                    <?php echo __('Последние заказы прайсов'); ?>
                </div>
            </div>
            <div class="widgetContent no-padding">
                <table class="table table-striped table-hover table-condensed">
                    <thead class="theadCondensedMain">
                    <tr>
                        <th>№</th>
                        <th><?php echo __('Имя'); ?></th>
                        <th><?php echo __('Страна'); ?></th>
                        <th><?php echo __('Дата'); ?></th>
                        <th><?php echo __('Статус'); ?></th>
                        <th class="align-center hidden-xs"><?php echo __('Перейти'); ?></th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($prices AS $obj): ?>
                        <tr>
                            <td><a href="/wezom/prices/edit/<?php echo $obj->id; ?>">#<?php echo $obj->id; ?></a></td>
                            <td><a href="/wezom/prices/edit/<?php echo $obj->id; ?>"><?php echo $obj->name; ?></a></td>
                            <td><a href="/wezom/prices/edit/<?php echo $obj->id; ?>"><?php echo $obj->country; ?></a></td>
                            <td><?php echo date('d.m.Y H:i', $obj->created_at); ?></td>
                            <td>
                                <?php switch ($obj->status) {
                                    case 0:
                                        $class = 'default';
                                        $text = 'Не прочитано';
                                        break;
                                    case 1:
                                        $class = 'success';
                                        $text = 'Прочитано';
                                        break;
                                }; ?>
                                <span title="<?php echo $text; ?>"
                                      class="label label-<?php echo $class; ?> orderLabelStatus bs-tooltip">
                                        <span class="hidden-ss"><?php echo $text; ?></span>
                                    </span>
                            </td>
                            <td class="align-center hidden-xs">
                                <span class="btn-group">
                                    <a title="<?php echo __('Перейти к заказу'); ?>"
                                       class="tip btn btn-xs bs-tooltip"
                                       href="/wezom/prices/edit/<?php echo $obj->id; ?>"><?php echo __('К прайсу'); ?></a>
                                </span>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>