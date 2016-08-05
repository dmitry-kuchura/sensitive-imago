/*!
{
  "name": "ie9",
  "property": "ie9"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **ie9**
 *
 * @memberof 	modernizrTests
 * @name 		ie9
 * @sourcecode 	modernizrTest:ie9
 * @newscope	test
*/
	Modernizr.addTest(
		'ie9',
		(document.all && !window.atob && !!document.addEventListener)
	);
// endcode modernizrTest:ie9
});
