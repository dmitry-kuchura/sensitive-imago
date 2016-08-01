/*!
{
  "name": "win10",
  "property": "win10"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows 10**
 *
 * @memberof 	modernizrTests
 * @name 		win10
 * @sourcecode 	modernizrTest:win10
 * @newscope	test
*/
	Modernizr.addTest(
		'win10',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 10') > 0)
	);
// endcode modernizrTest:win10
});
