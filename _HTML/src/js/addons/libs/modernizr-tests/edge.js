/*!
{
  "name": "edge",
  "property": "edge"
}
!*/


/**
 * Определение **edge** браузера
 *
 * @memberof 	modernizrTests
 * @name 		edge
 * @sourcecode 	modernizrTest:edge
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'edge',
			(navigator.userAgent.toLowerCase().indexOf(" edge/") > 0)
		);
	});
// endcode modernizrTest:edge
