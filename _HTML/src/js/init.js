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


	let $headerSlider = $('#headerSlider');
	if ($headerSlider.length) {
		$headerSlider.children('.slider_else_universal').carouFredSel({

			play: true,
			circular: true,
			responsive: true,
			//width: '100%',
			// height: 300,
			prev:$headerSlider.children('.slider-arrow--prev'),
			next:$headerSlider.children('.slider-arrow--next'),
			swipe: {
				onTouch: true,
				onMouse: false
			},
			items:{
				height:$headerSlider.innerHeight()
			},
			scroll: {
				items: 1,
				fx: 'fade',
				easing: "swing",
				pauseOnHover: false
			},
			auto:{
				play:true,
				timeoutDuration:parseInt($headerSlider.data('duration')) || 3000
			},
			onCreate:function(){
				$headerSlider.css('opacity',1)
			}
		});
	}
	let $sliderElseUniversal = $('#slider_else_universal');
	if ($sliderElseUniversal.length) {
		$sliderElseUniversal.children('.slider_else_universal').carouFredSel({
			play: true,
			circular: true,
			responsive: true,
			width: '100%',
			height: 285,
			prev:$sliderElseUniversal.children('.slider-arrow--prev'),
			next:$sliderElseUniversal.children('.slider-arrow--next'),
			items: {
				visible: {
					min: 1,
					max: 4
				}
			},
			swipe: {
				onTouch: true,
				onMouse: false
			},
			scroll: {
				items: 1,
				fx: 'scroll',
				easing: "swing",
				pauseOnHover: false
			},
			auto:{
				play:true,
				timeoutDuration:parseInt($sliderElseUniversal.data('duration')) || 3000
			}
		});
	}
	let $textTable = $('.wTxt').find('table');
		$textTable.each((i, table) => {
			let $table = $(table);
			$table.wrap('<div style="overflow-y: auto;"></div>')
		})

	$(window).load(function () {

	});

	$('.js-show-information').on('click', function (event) {
		event.preventDefault();
		$('.js-hidden-information').each(function (index, element) {
			var $element= $(element).find('[data-information]');
			var phone = $element.attr('data-information');
			$element.text(phone);
			$element.removeAttr('data-information');
		});
	});

	$('.js-hidden-information').on('click',function(e){
		let switchingInfo = $(this).find('[data-information]');
		console.log(switchingInfo);
		if(switchingInfo.length){
			e.preventDefault();
			$('.js-show-information').trigger('click');
		}
	});


	$('.numbers_only').ForceNumericOnly();

	if ($('#scrollerUp').length) {
		$(window).scroll(function() {
			// показ/скрытие кнопки
			($(this).scrollTop() > 300) && $(this).scrollTop() < ($(document).height()-$(window).height()*2)
				? $('#scrollerUp').stop().show(300)
				: $('#scrollerUp').stop().hide(300);

		});
		$('#scrollerUp').on('click', function() {
			// расчет времени скролла от высоты документа и текущей позиции - контролл для варирования скорости -> множитель 1000
			var scrollerUpSdeed = ($(document).scrollTop() / $(document).height()).toFixed(2) * 1000;
			$('body, html').stop().animate({
				scrollTop: 0
			}, scrollerUpSdeed);
		});
	}
});
