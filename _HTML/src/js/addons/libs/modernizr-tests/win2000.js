/*!
{
  "name": "win2000",
  "property": "win2000"
}
!*/


/**
 * Определение операционной системы **Windows2000**
 *
 * @memberof 	modernizrTests
 * @name 		win2000
 * @sourcecode 	modernizrTest:win2000
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'win2000',
			(navigator.userAgent.toLowerCase().indexOf('windows nt 5.0') > 0)
		);
	});
// endcode modernizrTest:win2000
