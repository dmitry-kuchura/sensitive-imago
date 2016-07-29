/*!
{
  "name": "mac",
  "property": "mac"
}
!*/



/**
 * Определение **mac**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		mac
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
	'mac',
	function() {
		function platform(key) {
			return navigator.platform.toLowerCase().indexOf(key) >= 0;
		}
		return platform('mac');
	}
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'mac',
		function() {
			function platform(key) {
				return navigator.platform.toLowerCase().indexOf(key) >= 0;
			}
			return platform('mac');
		}
	);
});
