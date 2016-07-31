/*!
{
  "name": "iphone",
  "property": "iphone"
}
!*/


/**
 * Определение **iphone**
 *
 * @memberof 	modernizrTests
 * @name 		iphone
 * @sourcecode 	modernizrTest:iphone
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'iphone',
			(navigator.userAgent.toLowerCase().indexOf('iphone') >= 0)
		);
	});
// endcode modernizrTest:iphone
