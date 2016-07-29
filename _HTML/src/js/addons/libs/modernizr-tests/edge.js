/*!
{
  "name": "edge",
  "property": "edge"
}
!*/



/**
 * Определение **edge** браузера
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		edge
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'edge',
	function() {
		var ua = window.navigator.userAgent.toLowerCase();
		return ua.indexOf(" edge/") > 0;
	}
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'edge',
		function() {
			var ua = window.navigator.userAgent.toLowerCase();
			return ua.indexOf(" edge/") > 0;
		}
	);
});
