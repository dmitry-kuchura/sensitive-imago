/*!
{
  "name": "safari",
  "property": "safari"
}
!*/


/**
 * Определение браузера **safari**
 *
 * @memberof 	modernizrTests
 * @name 		safari
 * @sourcecode 	modernizrTest:safari
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'safari',
			(Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
		);
	});
// endcode modernizrTest:safari
