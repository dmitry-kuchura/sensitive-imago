/*!
{
  "name": "win10",
  "property": "win10"
}
!*/



/**
 * Определение операционной системы **Windows 10**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		win10
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
	'win10',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 10') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'win10',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 10') > 0)
	);
});
