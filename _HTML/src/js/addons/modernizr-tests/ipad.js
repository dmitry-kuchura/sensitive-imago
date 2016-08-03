/*!
{
  "name": "ipad",
  "property": "ipad"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **ipad**
 *
 * @memberof 	modernizrTests
 * @name 		ipad
 * @sourcecode 	modernizrTest:ipad
 * @newscope	test
*/
	Modernizr.addTest(
		'ipad',
		(navigator.userAgent.toLowerCase().indexOf('ipad') >= 0)
	);
// endcode modernizrTest:ipad
});
