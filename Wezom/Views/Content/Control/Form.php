<?php if($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
    <?php $langs = array(); ?>
    <?php foreach($languages AS $key => $lang): ?>
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
                            <?php foreach( $languages AS $key => $lang ): ?>
                            <?php $public = \Core\Arr::get($langs, $key, array()); ?>
                            <?php echo $lang['default'] == 1 ? '<input type="hidden" class="default_lang" value="'.$lang['name'].'">' : ''; ?>
                            <li class="t_item">
                                <a class="t_link" href="#"><?php echo $lang['name']; ?></a>
                                <div class="t_content">
                                    <div class="form-group">
                                        <label class="control-label" for="f_name"><?php echo __('Название'); ?></label>
                                        <div class="">
                                            <input id="f_name" class="form-control valid" name="FORM[<?php echo $key; ?>][name]" type="text" value="<?php echo $public->name; ?>" />
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
        </div>
    </div>
    <?php if($obj->alias == 'contacts'): ?>
        <?php $data = json_decode($obj->other, TRUE); ?>
        <div class="col-md-12">
            <div class="widget box">
                <div class="widgetHeader">
                    <div class="widgetTitle">
                        <i class="fa-reorder"></i>
                        <?php echo __('Настройка карты'); ?>
                    </div>
                </div>
                <div class="widgetContent">
                    <div class="form-group">
                        <label class="control-label" for="f_other">
                            <?php echo __('Текст при клике на маркер'); ?>
                        </label>
                        <div class="">
                            <input id="f_other" class="form-control" name="text" type="text" value="<?php echo \Core\Arr::get($data, 'text'); ?>" />
                        </div>
                    </div>
                    <div class="mapWrap" style="height: 450px;">
                        <input type="text" id="address" class="form-control ui-autocomplete-input" placeholder="<?php echo __('Начните писать адрес...'); ?>" autocomplete="off"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                        <div style="width: 100%; height: calc(100% - 30px); position: relative; background-color: rgb(229, 227, 223); overflow: hidden;" id="gmap"></div>
                </div>
                <input type="hidden" value="<?php echo \Core\Arr::get($data, 'latitude'); ?>" name="latitude">
                <input type="hidden" value="<?php echo \Core\Arr::get($data, 'longitude'); ?>" name="longitude">
            </div>
        </div>
        <script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
        <script type="text/javascript">
            $('#address').val('');
            var map = false;

            var geocoder = false;

            <?php if(!$data['longitude'] || !$data['latitude']): ?>
                var myLatlng = new google.maps.LatLng(48.93982088660896, 31.46484375);
                var zoom = 6;
                var marker = false;
            <?php else: ?>
                var myLatlng = new google.maps.LatLng(parseFloat('<?php echo $data['latitude']; ?>'), parseFloat('<?php echo $data['longitude']; ?>'));
                var zoom = 14;
                var marker = true;
            <?php endif; ?>

            function initialize() {
                var mapOptions = {
                    center: myLatlng,
                    zoom: zoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
                geocoder = new google.maps.Geocoder();
            }

            function bind_location(location) {
                $('input[name="latitude"]').val( location.lat() );
                $('input[name="longitude"]').val( location.lng() );
            }

            function placeMarker(location) {
                if (marker) {
                    marker.setMap(null);
                }
                bind_location(location);
                pointt = new google.maps.Point(18, 54);
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    draggable: true
                });
                google.maps.event.addListener(marker, 'dragend', function(cc){
                    bind_location(cc.latLng);
                });
            }

            $(document).ready(function(){
                initialize();
                google.maps.event.addListener(map, 'click', function(cc){
                    placeMarker(cc.latLng);
                });

                if(marker) {
                    pointt = new google.maps.Point(18, 54);
                    marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        draggable: true
                    });
                    google.maps.event.addListener(marker, 'dragend', function(cc){
                        bind_location(cc.latLng);
                    });
                }

                $("#address").autocomplete({
                    //Определяем значение для адреса при геокодировании
                    source: function(request, response) {
                        geocoder.geocode( {'address': request.term}, function(results, status) {
                            response($.map(results, function(item) {
                                return {
                                    label:  item.formatted_address,
                                    value: item.formatted_address,
                                    latitude: item.geometry.location.lat(),
                                    longitude: item.geometry.location.lng()
                                }
                            }));
                        })
                    },
                    select: function(event, ui) {
                        $('input[name="latitude"]').val( ui.item.latitude );
                        $('input[name="longitude"]').val( ui.item.longitude );
                        var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
                        map.setCenter(location);
                        map.setZoom(14);
                        placeMarker(location);
                    }
                });
            });
        </script>
    <?php endif; ?>
</form>