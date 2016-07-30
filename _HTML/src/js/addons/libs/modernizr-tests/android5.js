/*!
{
  "name": "android5",
  "property": "android5"
}
!*/



/**
 * Определение **android 5.x**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android5
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
	'android5',
	(navigator.userAgent.toLowerCase().indexOf('android 5.') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android5',
		(navigator.userAgent.toLowerCase().indexOf('android 5.') >= 0)
	);
});
