/*!
{
  "name": "ios",
  "property": "ios"
}
!*/


/**
 * Определение **ios**
 *
 * @memberof 	modernizrTests
 * @name 		ios
 * @sourcecode 	modernizrTest:ios
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'ios',
			(navigator.platform.match(/(iPhone|iPod|iPad)/i) !== null)
		);
	});
// endcode modernizrTest:ios
