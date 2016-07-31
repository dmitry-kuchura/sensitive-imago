/*!
{
  "name": "win",
  "property": "win"
}
!*/


/**
 * Определение операционной системы **Windows**
 *
 * @memberof 	modernizrTests
 * @name 		win
 * @sourcecode 	modernizrTest:win
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'win',
			(navigator.platform.toLowerCase().indexOf('win') >= 0)
		);
	});
// endcode modernizrTest:win
