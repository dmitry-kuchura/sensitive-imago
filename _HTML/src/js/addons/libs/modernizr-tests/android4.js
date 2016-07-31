/*!
{
  "name": "android4",
  "property": "android4"
}
!*/


/**
 * Определение **android4**
 *
 * @memberof 	modernizrTests
 * @name 		android4
 * @sourcecode 	modernizrTest:android4
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'android4',
			(navigator.userAgent.toLowerCase().indexOf('android 4.') >= 0)
		);
	});
// endcode modernizrTest:android4
