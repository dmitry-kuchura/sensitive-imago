/*!
{
  "name": "chrome",
  "property": "chrome"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение браузера **chrome**
 *
 * @memberof 	modernizrTests
 * @name 		chrome
 * @sourcecode 	modernizrTest:chrome
 * @newscope	test
*/
	Modernizr.addTest(
		'chrome',
		function() {
			var ua = navigator.userAgent.toLowerCase();
			var chrome = !!window.chrome && ua.match(/Opera|OPR\//i) === null;
			var edje = ua.indexOf(" edge/") > 0;
			return chrome && !edje;
		}
	);
// endcode modernizrTest:chrome
});
