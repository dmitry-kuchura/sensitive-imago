/*!
{
  "name": "opera",
  "property": "opera"
}
!*/



/**
 * Определение браузера **opera**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		opera
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'opera',
	(!!window.opera || navigator.userAgent.match(/Opera|OPR\//i) !== null)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'opera',
		(!!window.opera || navigator.userAgent.match(/Opera|OPR\//) !== null)
	);
});
