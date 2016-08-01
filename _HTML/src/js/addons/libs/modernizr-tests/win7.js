/*!
{
  "name": "win7",
  "property": "win7"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows 7**
 *
 * @memberof 	modernizrTests
 * @name 		win7
 * @sourcecode 	modernizrTest:win7
 * @newscope	test
*/
	Modernizr.addTest(
		'win7',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 6.1') > 0)
	);
// endcode modernizrTest:win7
});
