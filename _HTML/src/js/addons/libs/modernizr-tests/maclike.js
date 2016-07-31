/*!
{
  "name": "maclike",
  "property": "maclike"
}
!*/


/**
 * Определение **maclike**
 *
 * @memberof 	modernizrTests
 * @name 		maclike
 * @sourcecode 	modernizrTest:maclike
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'maclike',
			(navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) !== null)
		);
	});
// endcode modernizrTest:maclike
