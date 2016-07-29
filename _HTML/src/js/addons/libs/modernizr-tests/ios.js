/*!
{
  "name": "ios",
  "property": "ios"
}
!*/



/**
 * Определение **ios**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		ios
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
	'ios',
	(navigator.platform.match(/(iPhone|iPod|iPad)/i) !== null)
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'ios',
		(navigator.platform.match(/(iPhone|iPod|iPad)/i) !== null)
	);
});
