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
			(navigator.platform.toLowerCase().indexOf('mac') >= 0)
		);
	});
// endcode modernizrTest:mac
