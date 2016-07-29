/*!
{
  "name": "win2000",
  "property": "win2000"
}
!*/



/**
 * Определение операционной системы **Windows 2000**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		win2000
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
	'win2000',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 5.0') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'win2000',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 5.0') > 0)
	);
});
