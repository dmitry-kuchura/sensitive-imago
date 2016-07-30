/*!
{
  "name": "android",
  "property": "android"
}
!*/



/**
 * Определение **android**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android
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
	'android',
	(navigator.userAgent.toLowerCase().indexOf('android') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android',
		(navigator.userAgent.toLowerCase().indexOf('android') >= 0)
	);
});
