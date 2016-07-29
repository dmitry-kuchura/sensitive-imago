/*!
{
  "name": "maclike",
  "property": "maclike"
}
!*/



/**
 * Определение  **maclike**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		maclike
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
	'maclike',
	(navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) !== null)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'maclike',
		(navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) !== null)
	);
});
