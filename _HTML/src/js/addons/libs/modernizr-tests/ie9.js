/*!
{
  "name": "ie9",
  "property": "ie9"
}
!*/



/**
 * Определение браузера **ie9**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ie9
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
	'ie9',
	(document.all && !window.atob && !!document.addEventListener)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ie9',
		(document.all && !window.atob && !!document.addEventListener)
	);
});
