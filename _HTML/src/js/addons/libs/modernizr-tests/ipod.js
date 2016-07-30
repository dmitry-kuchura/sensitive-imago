/*!
{
  "name": "ipod",
  "property": "ipod"
}
!*/



/**
 * Определение **ipod**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ipod
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
	'ipod',
	(navigator.userAgent.toLowerCase().indexOf('ipod') >= 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ipod',
		(navigator.userAgent.toLowerCase().indexOf('ipod') >= 0)
	);
});
