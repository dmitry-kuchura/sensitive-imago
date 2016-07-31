/*!
{
  "name": "opera",
  "property": "opera"
}
!*/


/**
 * Определение браузера **opera**
 *
 * @memberof 	modernizrTests
 * @name 		opera
 * @sourcecode 	modernizrTest:opera
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'opera',
			(!!window.opera || navigator.userAgent.match(/Opera|OPR\//) !== null)
		);
	});
// endcode modernizrTest:opera
