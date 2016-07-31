/*!
{
  "name": "winvista",
  "property": "winvista"
}
!*/


/**
 * Определение операционной системы **Windows Vista**
 *
 * @memberof 	modernizrTests
 * @name 		winvista
 * @sourcecode 	modernizrTest:winvista
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'winvista',
			(navigator.userAgent.toLowerCase().indexOf('windows nt 6.0') > 0)
		);
	});
// endcode modernizrTest:winvista
