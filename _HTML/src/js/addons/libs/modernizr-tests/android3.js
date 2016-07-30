/*!
{
  "name": "android3",
  "property": "android3"
}
!*/



/**
 * Определение **android 3.x**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android3
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
	'android3',
	(navigator.userAgent.toLowerCase().indexOf('android 3.') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android3',
		(navigator.userAgent.toLowerCase().indexOf('android 3.') >= 0)
	);
});
