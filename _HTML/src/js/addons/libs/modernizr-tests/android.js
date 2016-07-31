/*!
{
  "name": "android",
  "property": "android"
}
!*/


/**
 * Определение **android**
 *
 * @memberof 	modernizrTests
 * @name 		android
 * @sourcecode 	modernizrTest:android
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'android',
			(navigator.userAgent.toLowerCase().indexOf('android') >= 0)
		);
	});
// endcode modernizrTest:android
