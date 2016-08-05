/*!
{
  "name": "edge",
  "property": "edge"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **edge** браузера
 *
 * @memberof 	modernizrTests
 * @name 		edge
 * @sourcecode 	modernizrTest:edge
 * @newscope	test
*/
	Modernizr.addTest(
		'edge',
		(navigator.userAgent.toLowerCase().indexOf(" edge/") > 0)
	);
// endcode modernizrTest:edge
});
