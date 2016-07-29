/*!
{
  "name": "winvista",
  "property": "winvista"
}
!*/



/**
 * Определение операционной системы **Windows Vista**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		winvista
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
	'winvista',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 6.0') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'winvista',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 6.0') > 0)
	);
});
