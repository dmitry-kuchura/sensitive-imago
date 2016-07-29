/*!
{
  "name": "chrome",
  "property": "chrome"
}
!*/



/**
 * Определение браузера **chrome**
 *
 *
 *
 * @memberof 	modernizrTests
 * @name 		chrome
 * @func
 *
 * @param 		{Modernizr} 	Modernizr
 * @param 		{function} 		Modernizr.addTest - метод тестирования
 *
 * @return 		{Boolean}		результат теста
 *
 * @example
Modernizr.addTest(
	'chrome',
	function() {
		var ua = navigator.userAgent.toLowerCase();
		var chrome = !!window.chrome && ua.match(/Opera|OPR\//i) === null;
		var edje = ua.indexOf(" edge/") > 0;
		return chrome && !edje;
	}
);
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
