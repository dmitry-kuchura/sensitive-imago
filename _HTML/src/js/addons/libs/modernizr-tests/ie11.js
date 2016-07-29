/*!
{
  "name": "ie11",
  "property": "ie11"
}
!*/



/**
 * Определение браузера **ie11**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ie11
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
	'ie11',
	(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./))
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ie11',
		(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./))
	);
});
