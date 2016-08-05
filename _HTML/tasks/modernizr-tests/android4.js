/*!
{
  "name": "android4",
  "property": "android4"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **android4**
 *
 * @memberof 	modernizrTests
 * @name 		android4
 * @sourcecode 	modernizrTest:android4
 * @newscope	test
*/
	Modernizr.addTest(
		'android4',
		(navigator.userAgent.toLowerCase().indexOf('android 4.') >= 0)
	);
// endcode modernizrTest:android4
});
