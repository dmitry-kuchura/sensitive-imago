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
			function() {
				function platform(key) {
					return navigator.platform.toLowerCase().indexOf(key) >= 0;
				}
				return platform('linux');
			}
		);
	});
// endcode modernizrTest:linux
