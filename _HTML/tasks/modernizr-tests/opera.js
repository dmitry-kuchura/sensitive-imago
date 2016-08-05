/*!
{
  "name": "opera",
  "property": "opera"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **opera**
 *
 * @memberof 	modernizrTests
 * @name 		opera
 * @sourcecode 	modernizrTest:opera
 * @newscope	test
*/
	Modernizr.addTest(
		'opera',
		(!!window.opera || navigator.userAgent.match(/Opera|OPR\//) !== null)
	);
// endcode modernizrTest:opera
});
