/*!
{
  "name": "safari",
  "property": "safari"
}
!*/



/**
 * Определение браузера **safari**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		safari
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'safari',
	(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'safari',
		(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
	);
});
