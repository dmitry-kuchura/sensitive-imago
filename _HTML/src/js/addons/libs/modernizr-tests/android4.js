/*!
{
  "name": "android4",
  "property": "android4"
}
!*/



/**
 * Определение **android 4.x**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		android4
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
	'android4',
	(navigator.userAgent.toLowerCase().indexOf('android 4.') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'android4',
		(navigator.userAgent.toLowerCase().indexOf('android 4.') >= 0)
	);
});
