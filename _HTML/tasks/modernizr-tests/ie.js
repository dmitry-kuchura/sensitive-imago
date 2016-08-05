/*!
{
  "name": "ie",
  "property": "ie"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **ie**
 *
 * @memberof 	modernizrTests
 * @name 		ie
 * @sourcecode 	modernizrTest:ie
 * @newscope	test
*/
	Modernizr.addTest(
		'ie',
		(/*@cc_on!@*/ false || document.documentMode)
	);
// endcode modernizrTest:ie
});
