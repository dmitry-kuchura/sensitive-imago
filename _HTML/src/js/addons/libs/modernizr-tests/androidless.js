/*!
{
  "name": "androidless",
  "property": "androidless"
}
!*/


/**
 * Определение **androidless** - андроиды 4.3 и младше
 *
 * @memberof 	modernizrTests
 * @name 		androidless
 * @sourcecode 	modernizrTest:androidless
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'androidless',
			(navigator.userAgent.match(/\sandroid\s([0-3]|4\.[0-3])/i) !== null)
		);
	});
// endcode modernizrTest:androidless
