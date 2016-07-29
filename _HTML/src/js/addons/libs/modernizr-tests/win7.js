/*!
{
  "name": "win7",
  "property": "win7"
}
!*/



/**
 * Определение операционной системы **Windows 7**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		win7
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
	'win7',
	(navigator.userAgent.toLowerCase().indexOf('windows nt 6.1') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'win7',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 6.1') > 0)
	);
});
