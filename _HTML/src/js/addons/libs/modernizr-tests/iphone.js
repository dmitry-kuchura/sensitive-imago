/*!
{
  "name": "iphone",
  "property": "iphone"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **iphone**
 *
 * @memberof 	modernizrTests
 * @name 		iphone
 * @sourcecode 	modernizrTest:iphone
 * @newscope	test
*/
	Modernizr.addTest(
		'iphone',
		(navigator.userAgent.toLowerCase().indexOf('iphone') >= 0)
	);
// endcode modernizrTest:iphone
});
