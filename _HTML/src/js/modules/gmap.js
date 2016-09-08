module.exports = function(mapelement, lat, lng, zoom,marker) {
	lat = parseFloat(lat);
	lng = parseFloat(lng);
	console.log(arguments);
	let map = new google.maps.Map(mapelement, {center: {lat: lat, lng: lng}, zoom: zoom});
	var image = {
		url: marker,
		size: new google.maps.Size(27, 41),
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(13, 40)
	};
	var Marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map, icon: image});
}