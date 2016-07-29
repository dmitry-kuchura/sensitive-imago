/*!
{
  "name": "linux",
  "property": "linux"
}
!*/



/**
 * Определение операционной системы **Linux**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		linux
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
	'linux',
	function() {
		function platform(key) {
			return navigator.platform.toLowerCase().indexOf(key) >= 0;
		}
		return platform('linux');
	}
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'linux',
		function() {
			function platform(key) {
				return navigator.platform.toLowerCase().indexOf(key) >= 0;
			}
			return platform('linux');
		}
	);
});
