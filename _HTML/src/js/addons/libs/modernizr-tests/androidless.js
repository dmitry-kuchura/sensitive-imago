/*!
{
  "name": "androidless",
  "property": "androidless"
}
!*/



/**
 * Определение **androidless** - андроиды 4.3 и младше
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		androidless
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
	'androidless',
	(navigator.userAgent.match(/\sandroid\s([0-3]|4\.[0-3])/i) !== null)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'androidless',
		(navigator.userAgent.match(/\sandroid\s([0-3]|4\.[0-3])/i) !== null)
	);
});
