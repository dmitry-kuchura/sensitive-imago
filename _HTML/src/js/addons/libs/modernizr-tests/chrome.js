/*!
{
  "name": "chrome",
  "property": "chrome"
}
!*/


/**
 * Определение браузера **chrome**
 *
 * @memberof 	modernizrTests
 * @name 		chrome
 * @sourcecode 	modernizrTest:chrome
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'chrome',
			function() {
				var ua = navigator.userAgent.toLowerCase();
				var chrome = !!window.chrome && ua.match(/Opera|OPR\//i) === null;
				var edje = ua.indexOf(" edge/") > 0;
				return chrome && !edje;
			}
		);
	});
// endcode modernizrTest:chrome
