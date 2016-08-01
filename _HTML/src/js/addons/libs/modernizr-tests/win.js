/*!
{
  "name": "win",
  "property": "win"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение операционной системы **Windows**
 *
 * @memberof 	modernizrTests
 * @name 		win
 * @sourcecode 	modernizrTest:win
 * @newscope	test
*/
	Modernizr.addTest(
		'win',
		(navigator.platform.toLowerCase().indexOf('win') >= 0)
	);
// endcode modernizrTest:win
});
