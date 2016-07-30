/*!
{
  "name": "android6",
  "property": "android6"
}
!*/



/**
 * Определение **android 6.x**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android6
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
	'android6',
	(navigator.userAgent.toLowerCase().indexOf('android 6.') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android6',
		(navigator.userAgent.toLowerCase().indexOf('android 6.') >= 0)
	);
});
