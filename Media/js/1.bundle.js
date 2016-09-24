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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvZ21hcC5qcyIsIndlYnBhY2s6Ly8vP2Q0MWQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtYXBlbGVtZW50LCBsYXQsIGxuZywgem9vbSxtYXJrZXIpIHtcclxuXHRsYXQgPSBwYXJzZUZsb2F0KGxhdCk7XHJcblx0bG5nID0gcGFyc2VGbG9hdChsbmcpO1xyXG5cdGNvbnNvbGUubG9nKGFyZ3VtZW50cyk7XHJcblx0bGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwZWxlbWVudCwge2NlbnRlcjoge2xhdDogbGF0LCBsbmc6IGxuZ30sIHpvb206IHpvb219KTtcclxuXHR2YXIgaW1hZ2UgPSB7XHJcblx0XHR1cmw6IG1hcmtlcixcclxuXHRcdHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDI3LCA0MSksXHJcblx0XHRvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuXHRcdGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDEzLCA0MClcclxuXHR9O1xyXG5cdHZhciBNYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtwb3NpdGlvbjoge2xhdDogbGF0LCBsbmc6IGxuZ30sIG1hcDogbWFwLCBpY29uOiBpbWFnZX0pO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL21vZHVsZXMvZ21hcC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9