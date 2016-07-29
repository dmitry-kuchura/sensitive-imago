/*!
{
  "name": "winxp",
  "property": "winxp"
}
!*/



/**
 * Определение операционной системы **Windows 10**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		winxp
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
	'winxp',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 5.1') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'winxp',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 5.1') > 0)
	);
});
