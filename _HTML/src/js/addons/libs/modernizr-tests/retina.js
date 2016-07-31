/*!
{
  "name": "retina",
  "property": "retina"
}
!*/


/**
 * Определение **retina** дисплеев
 *
 * @memberof 	modernizrTests
 * @name 		retina
 * @sourcecode 	modernizrTest:retina
 * @newscope	test
*/
	define(['Modernizr'], function(Modernizr) {
		Modernizr.addTest(
			'retina',
			function() {
				var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
				var flag = dpr > 1;
				return !!flag;
			}
		);
	});
// endcode modernizrTest:retina
