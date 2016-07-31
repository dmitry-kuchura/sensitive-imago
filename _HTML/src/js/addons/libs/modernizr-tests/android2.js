/*!
{
  "name": "android2",
  "property": "android2"
}
!*/


/**
 * Определение **android2**
 *
 * @memberof 	modernizrTests
 * @name 		android2
 * @sourcecode 	modernizrTest:android2
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'android2',
			(navigator.userAgent.toLowerCase().indexOf('android 2.') >= 0)
		);
	});
// endcode modernizrTest:android2
