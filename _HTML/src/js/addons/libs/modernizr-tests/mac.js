/*!
{
  "name": "mac",
  "property": "mac"
}
!*/


define(['Modernizr'], function(Modernizr) {
/**
 * Определение **mac**
 *
 * @memberof 	modernizrTests
 * @name 		mac
 * @sourcecode 	modernizrTest:mac
 * @newscope	test
*/
	Modernizr.addTest(
		'mac',
		(navigator.platform.toLowerCase().indexOf('mac') >= 0)
	);
// endcode modernizrTest:mac
});
