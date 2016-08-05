/*!
{
  "name": "android3",
  "property": "android3"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **android3**
 *
 * @memberof 	modernizrTests
 * @name 		android3
 * @sourcecode 	modernizrTest:android3
 * @newscope	test
*/
	Modernizr.addTest(
		'android3',
		(navigator.userAgent.toLowerCase().indexOf('android 3.') >= 0)
	);
// endcode modernizrTest:android3
});
