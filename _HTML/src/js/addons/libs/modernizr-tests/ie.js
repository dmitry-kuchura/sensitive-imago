/*!
{
  "name": "ie",
  "property": "ie"
}
!*/


/**
 * Определение браузера **ie**
 *
 * @memberof 	modernizrTests
 * @name 		ie
 * @sourcecode 	modernizrTest:ie
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'ie',
			(/*@cc_on!@*/ false || document.documentMode)
		);
	});
// endcode modernizrTest:ie
