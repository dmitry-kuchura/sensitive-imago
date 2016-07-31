/*!
{
  "name": "win",
  "property": "win"
}
!*/


/**
 * Определение операционной системы **Windows**
 *
 * @memberof 	modernizrTests
 * @name 		win
 * @sourcecode 	modernizrTest:win
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'win',
			function() {
				function platform(key) {
					return navigator.platform.toLowerCase().indexOf(key) >= 0;
				}
				return platform('win');
			}
		);
	});
// endcode modernizrTest:win
