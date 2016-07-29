/*!
{
  "name": "win",
  "property": "win"
}
!*/



/**
 * Определение операционной системы **windows**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		win
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
// в примере специально дупущен пробел, `* /`, для примера
Modernizr.addTest(
	'win',
	function() {
		function platform(key) {
			return navigator.platform.toLowerCase().indexOf(key) >= 0;
		}
		return platform('win');
	}
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'win',
		function() {
			function platform(key) {
				return navigator.platform.toLowerCase().indexOf(key) >= 0;
			}
			return platform('win');
		}
	);
});
