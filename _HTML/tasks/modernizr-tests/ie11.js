/*!
{
  "name": "ie11",
  "property": "ie11"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **ie11**
 *
 * @memberof 	modernizrTests
 * @name 		ie11
 * @sourcecode 	modernizrTest:ie11
 * @newscope	test
*/
	Modernizr.addTest(
		'ie11',
		(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./))
	);
// endcode modernizrTest:ie11
});
