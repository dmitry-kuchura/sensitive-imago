/*!
{
  "name": "moz",
  "property": "moz"
}
!*/


/**
 * Определение браузера **mozilla**
 *
 * @memberof 	modernizrTests
 * @name 		moz
 * @sourcecode 	modernizrTest:moz
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'moz',
			(typeof InstallTrigger !== 'undefined')
		);
	});
// endcode modernizrTest:moz
