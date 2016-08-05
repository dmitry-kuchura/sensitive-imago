/*!
{
  "name": "linux",
  "property": "linux"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **linux**
 *
 * @memberof 	modernizrTests
 * @name 		linux
 * @sourcecode 	modernizrTest:linux
 * @newscope	test
*/
	Modernizr.addTest(
		'linux',
		(navigator.platform.toLowerCase().indexOf('linux') >= 0)
	);
// endcode modernizrTest:linux
});
