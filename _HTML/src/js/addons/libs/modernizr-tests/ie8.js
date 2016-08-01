/*!
{
  "name": "ie8",
  "property": "ie8"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **ie8**
 *
 * @memberof 	modernizrTests
 * @name 		ie8
 * @sourcecode 	modernizrTest:ie8
 * @newscope	test
*/
	Modernizr.addTest(
		'ie8',
		(document.all && !document.addEventListener)
	);
// endcode modernizrTest:ie8
});
