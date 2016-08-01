/*!
{
  "name": "ipod",
  "property": "ipod"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **ipod**
 *
 * @memberof 	modernizrTests
 * @name 		ipod
 * @sourcecode 	modernizrTest:ipod
 * @newscope	test
*/
	Modernizr.addTest(
		'ipod',
		(navigator.userAgent.toLowerCase().indexOf('ipod') >= 0)
	);
// endcode modernizrTest:ipod
});
