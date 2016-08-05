/*!
{
  "name": "android5",
  "property": "android5"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **android5**
 *
 * @memberof 	modernizrTests
 * @name 		android5
 * @sourcecode 	modernizrTest:android5
 * @newscope	test
*/
	Modernizr.addTest(
		'android5',
		(navigator.userAgent.toLowerCase().indexOf('android 5.') >= 0)
	);
// endcode modernizrTest:android5
});
