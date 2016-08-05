/*!
{
  "name": "win8",
  "property": "win8"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows 8**
 *
 * @memberof 	modernizrTests
 * @name 		win8
 * @sourcecode 	modernizrTest:win8
 * @newscope	test
*/
	Modernizr.addTest(
		'win8',
		function() {
			var ua = navigator.userAgent.toLowerCase();
			return ua.indexOf('windows nt 6.2') > 0 || ua.indexOf('windows nt 6.3') > 0;
		}
	);
// endcode modernizrTest:win8
});
