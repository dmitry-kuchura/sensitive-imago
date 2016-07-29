/*!
{
  "name": "ie",
  "property": "ie"
}
!*/



/**
 * Определение браузера **ie**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ie
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
	'ie',
	(/*@cc_on!@* / false || document.documentMode)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ie',
		(/*@cc_on!@*/ false || document.documentMode)
	);
});
