/*!
{
  "name": "retina",
  "property": "retina"
}
!*/



/**
 * Определение **retina** дисплеев
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		retina
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'retina',
	function() {
		var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
		var flag = dpr > 1;
		return !!flag;
	}
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'retina',
		function() {
			var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
			var flag = dpr > 1;
			return !!flag;
		}
	);
});
