/*!
{
  "name": "mac",
  "property": "mac"
}
!*/


/**
 * Определение **mac**
 *
 * @memberof 	modernizrTests
 * @name 		mac
 * @sourcecode 	modernizrTest:mac
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'mac',
			function() {
				function platform(key) {
					return navigator.platform.toLowerCase().indexOf(key) >= 0;
				}
				return platform('mac');
			}
		);
	});
// endcode modernizrTest:mac
