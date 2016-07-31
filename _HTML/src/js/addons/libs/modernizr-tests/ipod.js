/*!
{
  "name": "ipod",
  "property": "ipod"
}
!*/


/**
 * Определение **ipod**
 *
 * @memberof 	modernizrTests
 * @name 		ipod
 * @sourcecode 	modernizrTest:ipod
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'ipod',
			(navigator.userAgent.toLowerCase().indexOf('ipod') >= 0)
		);
	});
// endcode modernizrTest:ipod
