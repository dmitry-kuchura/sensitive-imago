/*!
{
  "name": "moz",
  "property": "moz"
}
!*/



/**
 * Определение браузера **mozilla**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		moz
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'moz',
	(typeof InstallTrigger !== 'undefined')
);
*/
define(['Modernizr'], function(Modernizr) {
	Modernizr.addTest(
		'moz',
		(typeof InstallTrigger !== 'undefined')
	);
});
