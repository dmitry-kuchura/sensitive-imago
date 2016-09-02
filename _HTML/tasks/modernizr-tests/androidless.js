/*!
{
  "name": "androidless",
  "property": "androidless"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **androidless** - андроиды 4.3 и младше
 *
 * @memberof 	modernizrTests
 * @name 		androidless
 * @sourcecode 	modernizrTest:androidless
 * @newscope	test
*/
	Modernizr.addTest(
		'androidless',
		(navigator.userAgent.match(/\sandroid\s([0-3]|4\.[0-3])/i) !== null)
	);
// endcode modernizrTest:androidless
});
