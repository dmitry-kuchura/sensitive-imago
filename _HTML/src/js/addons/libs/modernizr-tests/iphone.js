/*!
{
  "name": "iphone",
  "property": "iphone"
}
!*/



/**
 * Определение **iphone**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		iphone
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
	'iphone',
	(navigator.userAgent.toLowerCase().indexOf('iphone') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'iphone',
		(navigator.userAgent.toLowerCase().indexOf('iphone') >= 0)
	);
});
