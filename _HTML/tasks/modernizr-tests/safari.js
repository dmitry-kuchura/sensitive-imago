/*!
{
  "name": "safari",
  "property": "safari"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **safari**
 *
 * @memberof 	modernizrTests
 * @name 		safari
 * @sourcecode 	modernizrTest:safari
 * @newscope	test
*/
	Modernizr.addTest(
		'safari',
		(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
	);
// endcode modernizrTest:safari
});
