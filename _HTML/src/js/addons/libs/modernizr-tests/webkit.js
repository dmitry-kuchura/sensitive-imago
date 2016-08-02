/*!
{
  "name": "webkit",
  "property": "webkit"
}
!*/


define(['Modernizr', 'docElement'], function(Modernizr, docElement) {
/**
 * Определение **webkit** браузеров
 *
 * @memberof 	modernizrTests
 * @name 		webkit
 * @sourcecode 	modernizrTest:webkit
 * @newscope	test
*/
	Modernizr.addTest(
		'webkit',
		function() {
			var ua = window.navigator.userAgent.toLowerCase();
			var webkit = 'WebkitAppearance' in docElement.style;
			var edge = !(ua.indexOf(" edge/") > 0);
			return webkit && edge;
		}
	);
// endcode modernizrTest:webkit
});
