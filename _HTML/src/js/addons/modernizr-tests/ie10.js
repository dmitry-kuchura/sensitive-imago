/*!
{
  "name": "ie10",
  "property": "ie10"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **ie10**
 *
 * @memberof 	modernizrTests
 * @name 		ie10
 * @sourcecode 	modernizrTest:ie10
 * @newscope	test
*/
	Modernizr.addTest(
		'ie10',
		(document.all && !!window.atob && !!document.addEventListener)
	);
// endcode modernizrTest:ie10
});
