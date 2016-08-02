/*!
{
  "name": "android",
  "property": "android"
}
!*/

/**
 * Набор пользовательских тестов для `modernizr.js`. Смотри {@tutorial workwith-modernizr}
 * @namespace 	modernizrTests
*/


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
