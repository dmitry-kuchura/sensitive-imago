/*!
{
  "name": "winxp",
  "property": "winxp"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows XP**
 *
 * @memberof 	modernizrTests
 * @name 		winxp
 * @sourcecode 	modernizrTest:winxp
 * @newscope	test
*/
	Modernizr.addTest(
		'winxp',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 5.1') > 0)
	);
// endcode modernizrTest:winxp
});
