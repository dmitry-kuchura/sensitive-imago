/*!
{
  "name": "ipad",
  "property": "ipad"
}
!*/


/**
 * Определение **ipad**
 *
 * @memberof 	modernizrTests
 * @name 		ipad
 * @sourcecode 	modernizrTest:ipad
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'ipad',
			(navigator.userAgent.toLowerCase().indexOf('ipad') >= 0)
		);
	});
// endcode modernizrTest:ipad
