/*!
{
  "name": "moz",
  "property": "moz"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **mozilla**
 *
 * @memberof 	modernizrTests
 * @name 		moz
 * @sourcecode 	modernizrTest:moz
 * @newscope	test
*/
	Modernizr.addTest(
		'moz',
		(typeof InstallTrigger !== 'undefined')
	);
// endcode modernizrTest:moz
});
