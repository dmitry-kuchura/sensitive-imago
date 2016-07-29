/*!
{
  "name": "webkit",
  "property": "webkit"
}
!*/

/**
 * @namespace modernizrTests
*/



/**
 * Определение **webkit** браузеров
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		webkit
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 * @param 		{Element} 		docElement - `document.documentElement`
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'webkit',
	function() {
		var ua = window.navigator.userAgent.toLowerCase();
		var webkit = 'WebkitAppearance' in docElement.style;
		var edge = !(ua.indexOf(" edge/") > 0);
		return webkit && edge;
	}
);
*/
define(['Modernizr', 'docElement'], function(Modernizr, docElement) {
	Modernizr.addTest(
		'webkit',
		function() {
			var ua = window.navigator.userAgent.toLowerCase();
			var webkit = 'WebkitAppearance' in docElement.style;
			var edge = !(ua.indexOf(" edge/") > 0);
			return webkit && edge;
		}
	);
});
