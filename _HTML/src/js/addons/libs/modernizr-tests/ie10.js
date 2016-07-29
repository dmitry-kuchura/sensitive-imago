/*!
{
  "name": "ie10",
  "property": "ie10"
}
!*/



/**
 * Определение браузера **ie10**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ie10
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
	'ie10',
	(document.all && !!window.atob && !!document.addEventListener)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ie10',
		(document.all && !!window.atob && !!document.addEventListener)
	);
});
