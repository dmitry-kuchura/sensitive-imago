/*!
{
  "name": "android2",
  "property": "android2"
}
!*/



/**
 * Определение **android 2.x**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android2
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
	'android2',
	(navigator.userAgent.toLowerCase().indexOf('android 2.') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android2',
		(navigator.userAgent.toLowerCase().indexOf('android 2.') >= 0)
	);
});
