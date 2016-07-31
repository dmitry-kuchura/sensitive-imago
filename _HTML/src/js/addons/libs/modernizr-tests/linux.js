/*!
{
  "name": "linux",
  "property": "linux"
}
!*/


/**
 * Определение **linux**
 *
 * @memberof 	modernizrTests
 * @name 		linux
 * @sourcecode 	modernizrTest:linux
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'linux',
			(navigator.platform.toLowerCase().indexOf('linux') >= 0)
		);
	});
// endcode modernizrTest:linux
