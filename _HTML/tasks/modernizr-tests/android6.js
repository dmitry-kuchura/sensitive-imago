/*!
{
  "name": "android6",
  "property": "android6"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **android6**
 *
 * @memberof 	modernizrTests
 * @name 		android6
 * @sourcecode 	modernizrTest:android6
 * @newscope	test
*/
	Modernizr.addTest(
		'android6',
		(navigator.userAgent.toLowerCase().indexOf('android 6.') >= 0)
	);
// endcode modernizrTest:android6
});
