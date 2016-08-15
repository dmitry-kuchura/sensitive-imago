require('wHTML');
require('wezom_class_toggler');
jQuery(document).ready(function ($) {
	svg4everybody({});
	wHTML.formValidation();

	/* Подключение скрипта левого меню */
	let $multiLevelMenu = $('.js-multiLevelMenu');
	if ($multiLevelMenu.length) {
		require.ensure([], function () {
			let initAsideMenu = require('asideMenu');
			initAsideMenu($multiLevelMenu);
		})
	}
	/* Подключение магнифика при необходимости галлереи*/
	let $magnificSelectors = $('.mfi-gallery').add('.videoLink');
	if ($magnificSelectors.length) {
		require.ensure([], function () {
			require('magnific-popup');
			$('.mfi-gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				}
			});
			$('a.videoLink').magnificPopup({
				type: 'iframe'
			});
	})
	}

	$('.textReview').on('click', '.textReview__moreLink', function (e) {
		let
			$block = $(e.delegateTarget),
			$this = $(this),
			tmp = $this.html();
		$this.html($this.data('text'));
		$this.data('text', tmp);
		$block.toggleClass('is-expand');
	})

	if($('.rateit').length){
		require.ensure([],function(){
			require('rateit');
		})
	}

	$('[data-dropdown]').wzmClassToggle({
		toggleSelector: '[data-dropdown-toggle]',
		toggleOnBlur: true
	});
});
