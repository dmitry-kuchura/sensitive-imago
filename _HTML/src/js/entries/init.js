jQuery(document).ready(function ($) {
	if ($('#idOnBoth')) {
		console.log('#idOnBoth');
	}
	if ($('#idOnMain')) {
		console.log('#idOnMain');
	}

	if ($('.languageLinks').length) {
		$('.languageLinks').on('click', function () {
			require.ensure([], function (require) {
				require('../modules/vendor/magnific-popup')
			})
		})
	}


});
