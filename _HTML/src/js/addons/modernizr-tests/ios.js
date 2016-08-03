/*!
{
  "name": "ios",
  "property": "ios"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **ios**
 *
 * @memberof 	modernizrTests
 * @name 		ios
 * @sourcecode 	modernizrTest:ios
 * @newscope	test
*/
	Modernizr.addTest(
		'ios',
		(navigator.platform.match(/(iPhone|iPod|iPad)/i) !== null)
	);
// endcode modernizrTest:ios
});
