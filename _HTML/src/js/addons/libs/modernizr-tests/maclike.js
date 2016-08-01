/*!
{
  "name": "maclike",
  "property": "maclike"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **maclike**
 *
 * @memberof 	modernizrTests
 * @name 		maclike
 * @sourcecode 	modernizrTest:maclike
 * @newscope	test
*/
	Modernizr.addTest(
		'maclike',
		(navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) !== null)
	);
// endcode modernizrTest:maclike
});
