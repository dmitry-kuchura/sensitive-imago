/*!
{
  "name": "win8",
  "property": "win8"
}
!*/



/**
 * Определение операционной системы **Windows 8**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		win8
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
	'win8',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 6.1') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'win8',
		function() {
			var ua = navigator.userAgent.toLowerCase();
			return ua.indexOf('windows nt 6.2') > 0 || ua.indexOf('windows nt 6.3') > 0;
		}
	);
});
