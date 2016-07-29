/*!
{
  "name": "ie8",
  "property": "ie8"
}
!*/



/**
 * Определение браузера **ie8**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ie8
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
	'ie8',
	(document.all && !document.addEventListener)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ie8',
		(document.all && !document.addEventListener)
	);
});
