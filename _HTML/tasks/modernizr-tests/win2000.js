/*!
{
  "name": "win2000",
  "property": "win2000"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows2000**
 *
 * @memberof 	modernizrTests
 * @name 		win2000
 * @sourcecode 	modernizrTest:win2000
 * @newscope	test
*/
	Modernizr.addTest(
		'win2000',
		(navigator.userAgent.toLowerCase().indexOf('windows nt 5.0') > 0)
	);
// endcode modernizrTest:win2000
});
