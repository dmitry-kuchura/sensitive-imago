/*!
{
  "name": "ie10",
  "property": "ie10"
}
!*/


/**
 * Определение браузера **ie10**
 *
 * @memberof 	modernizrTests
 * @name 		ie10
 * @sourcecode 	modernizrTest:ie10
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'ie10',
			(document.all && !!window.atob && !!document.addEventListener)
		);
	});
// endcode modernizrTest:ie10
