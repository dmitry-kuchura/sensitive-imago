/*!
{
  "name": "ipad",
  "property": "ipad"
}
!*/



/**
 * Определение **ipad**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ipad
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
	'ipad',
	(navigator.userAgent.toLowerCase().indexOf('ipad') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ipad',
		(navigator.userAgent.toLowerCase().indexOf('ipad') >= 0)
	);
});
