require('wHTML');
require('wezom_class_toggler');

jQuery(document).ready(function ($) {
	svg4everybody({});
	wHTML.formValidation();
	wHTML.mfpAjax();

	jQuery.fn.ForceNumericOnly = function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				var key = e.charCode || e.keyCode || 0;
				return (key == 8 || key == 9 || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
			});
		});
	};

	/*Инициализация карты на странице контакты*/
        
	let $googleMaps = $('.googlemap');
	if ($googleMaps.length){
		require.ensure([], function () {
			let initGoogleMaps = require('gmap');
			$('.googlemap').each(function (index, el) {
				var lat = $(el).data('lat');
				var lng = $(el).data('lng');
				var zoom = $(el).data('zoom') || 18;
				var marker = $(el).data('marker');
				initGoogleMaps(el, lat, lng, zoom, marker);
			});
		})
	}

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

	if ($('.rateit').length) {
		require.ensure([], function () {
			require('rateit');
		})
	}

	$('[data-dropdown]').wzmClassToggle({
		toggleSelector: '[data-dropdown-toggle]',
		toggleOnBlur: true
	});

	if ($('#slider_else').length) {
		$('#slider_else').carouFredSel({
			play: true,
			auto: true,
			circular: true,
			responsive: true,
			width: '100%',
			height: 350,
			items: {
				visible: {
					min: 1,
					max: 4
				}
			},
			swipe: {
				onTouch: true,
				onMouse: true
			},
			scroll: {
				items: 1,
				fx: 'scroll',
				easing: "swing",
				duration: 1000,
				pauseOnHover: false
			}
		});
	}

	if ($('#slider_else_universal').length) {
		$('#slider_else_universal').carouFredSel({
			play: true,
			auto: true,
			circular: true,
			responsive: true,
			width: '100%',
			height: 350,
			items: {
				visible: {
					min: 1,
					max: 4
				}
			},
			swipe: {
				onTouch: true,
				onMouse: true
			},
			scroll: {
				items: 1,
				fx: 'scroll',
				easing: "swing",
				duration: 1000,
				pauseOnHover: false
			}
		});
	}

	$(window).load(function () {
	});

	$('.js-show-information').on('click', function () {
		$('.js-hidden-information').each(function (index, element) {
			var phone = $(element).data('information');
			$(element).text(phone);
		});
	});

	$('.numbers_only').ForceNumericOnly();

});
