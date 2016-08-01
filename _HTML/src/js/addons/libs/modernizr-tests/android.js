/*!
{
  "name": "android",
  "property": "android"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **android**
 *
 * @memberof 	modernizrTests
 * @name 		android
 * @sourcecode 	modernizrTest:android
 * @newscope	test
*/
	Modernizr.addTest(
		'android',
		(navigator.userAgent.toLowerCase().indexOf('android') >= 0)
	);
// endcode modernizrTest:android
});
