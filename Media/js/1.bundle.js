webpackJsonp([1],{

/***/ 9:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (mapelement, lat, lng, zoom, marker) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		console.log(arguments);
		var map = new google.maps.Map(mapelement, { center: { lat: lat, lng: lng }, zoom: zoom });
		var image = {
			url: marker,
			size: new google.maps.Size(27, 41),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(13, 40)
		};
		var Marker = new google.maps.Marker({ position: { lat: lat, lng: lng }, map: map, icon: image });
	};

/***/ }

});
//# sourceMappingURL=data:application/json;ch
// arset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvZ21hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1hcGVsZW1lbnQsIGxhdCwgbG5nLCB6b29tLG1hcmtlcikge1xyXG5cdGxhdCA9IHBhcnNlRmxvYXQobGF0KTtcclxuXHRsbmcgPSBwYXJzZUZsb2F0KGxuZyk7XHJcblx0Y29uc29sZS5sb2coYXJndW1lbnRzKTtcclxuXHRsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBlbGVtZW50LCB7Y2VudGVyOiB7bGF0OiBsYXQsIGxuZzogbG5nfSwgem9vbTogem9vbX0pO1xyXG5cdHZhciBpbWFnZSA9IHtcclxuXHRcdHVybDogbWFya2VyLFxyXG5cdFx0c2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMjcsIDQxKSxcclxuXHRcdG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG5cdFx0YW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMTMsIDQwKVxyXG5cdH07XHJcblx0dmFyIE1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe3Bvc2l0aW9uOiB7bGF0OiBsYXQsIGxuZzogbG5nfSwgbWFwOiBtYXAsIGljb246IGltYWdlfSk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvbW9kdWxlcy9nbWFwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=