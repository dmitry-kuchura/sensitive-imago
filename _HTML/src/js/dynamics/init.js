var transitionFlag = Modernizr.cssanimations;
/**
 * @namespace window
*/
(function($, window) {

	/**
	 * @class
	 * @memberof window
	 */
	function wHTML() {};

	/**
	 * Скролл экрана к нужному элементу
	 *
	 * @param	{Element}	$element - элемент на который был сделан клик
	 * @param	{Element}	[anchorElement=] - Элемент к которому скролить, если не определен, будет взять и пользовательского атрибута `$element`
	 */
	wHTML.prototype.scrollto = function($element, anchorElement) {
		var $anchor = anchorElement || $($element.data('anchor'));
		if ($anchor.length) {
			var $scrollElements = $('body, html');
			var scrollingClass = 'is-scrolling';
			$scrollElements.addClass(scrollingClass).stop().animate({
				scrollTop: $anchor.offset().top
			}, 700, function() {
				$scrollElements.removeClass(scrollingClass);
			});
		}
	};


	wHTML.prototype.turnit = function($el, holderClass) {
		var $box = $el.closest('.js-turnit-holder');
		$box.toggleClass(holderClass);
	};


	wHTML.prototype.tabs = function($linker, activeClass, disallowClass) {
		if (
			$linker.hasClass(activeClass)
			||
			$linker.hasClass(disallowClass)
		) {
			return false;
		}
		var tabStep = $linker.data('tab');
		var $block = $(tabStep);
		$('.'+activeClass).removeClass(activeClass);
		$linker.add($block).addClass(activeClass);
		if (tabStep == '#step2') {
			var $sliderBox = $('.js-slider-box');
			var txtArr = [];
			$sliderBox.children('img').each(function(index, el) {
				txtArr.push($(el).data('description'));
			});
			if ($sliderBox.data('isinited') === undefined) {
				var sliderBoxTimer = null;
				$sliderBox.caroufredsel({
					auto: false,
					circular: false,
					infinite: false,
					responsive: true,
					items: {
						visible: 1,
						width: 600,
						height: '68%'
					},
					scroll: {
						items: 1,
						fx:'scroll',
						duration: 1000
					},
					swipe: {
						onTouch: true,
						//onMouse: true
					},
					pagination: {
						container: '#sticker__pagin',
						anchorBuilder: function(nr, item) {
							var index = nr - 1;
							return '<li class="js-selected-sticker" data-sticker="'+txtArr[index]+'"><a href="#'+nr+'" class="sticker__item"><span>'+txtArr[index]+'</span></a></li>';
						}
					},
					onCreate: function() {
						$sliderBox.data('isinited', true);
						/*$(window).resize(function(event) {
							clearTimeout(sliderTimer);
							sliderBoxTimer = setTimeout(function() {
								$sliderBox.trigger('updateSizes');
							}, 100);
						});*/
					}
				}, {
					transition: transitionFlag
				});
			} else {
				$sliderBox.trigger('updateSizes');
			}
		} else if (tabStep == '#step1') {
			setTimeout(function() {
				$('.js-slider').trigger('updateSizes');
				var slideto = $('.js-tab-slideto').data('slideto');
				$('.js-slider').trigger('slideTo', slideto);
			}, 10);
		}
	};

	wHTML.prototype.mfiAjax = function() {
		var _self = this;
		$('body').magnificPopup({
            delegate: '.js-mfi-ajax',
            callbacks: {
                elementParse: function(item) {
                    this.st.ajax.settings = {
                        url: item.el.data('url'),
                        type: 'POST',
                        data: (typeof item.el.data('param') !== 'undefined') ? item.el.data('param') : ''
                    };
                },
                ajaxContentAdded: function(el) {
                    _self.validation();
                }
            },
            type: 'ajax',
            removalDelay: 300,
            mainClass: 'zoom-in'
        });
	};

	wHTML.prototype.callbackSuccess = function() {
		$('#callback-success-trigger').trigger('click');
	};

	wHTML.prototype.callbackError = function() {
		$('#callback-error-trigger').trigger('click');
	};

	wHTML.prototype.orderSuccess = function() {
		$('#order-success-trigger').trigger('click');
	};

	wHTML.prototype.orderError = function() {
		$('#order-error-trigger').trigger('click');
	};

	window.wHTML = new wHTML();

})(jQuery, window);




jQuery(document).ready(function($) {

	wHTML.mfiAjax();


	$('.js-scrollto').on('click', function(event) {
		event.preventDefault();
		wHTML.scrollto($(this));
	});


	$('.js-tab').on('click', function(event) {
		event.preventDefault();
		wHTML.tabs($(this), 'tab--active', 'js-tab-disallow');
	});

	$('.js-tab-trigger').on('click', function(event) {
		event.preventDefault();
		var step = $(this).data('tab');
		var $linker = $('.tab__linker[data-tab="'+step+'"]').removeClass('js-tab-disallow').trigger('click');
	});


	$('.js-turnit').on('click', function(event) {
		event.preventDefault();
		wHTML.turnit($(this), 'rotate-it');
	});

	var hoverTurnIt = null;

	$('.js-hover-turnit').on('mouseover', function(event) {
		var $this = $(this);
		clearTimeout(hoverTurnIt);
		hoverTurnIt = setTimeout(function() {
			$this.trigger('click');
		}, 5200);
	}).on('mouseleave', function(event) {
		clearTimeout(hoverTurnIt);
	});;

	$('.js-order-box').on('click', function(event) {
		event.preventDefault();
		var $el = $(this);
		var data = $el.data('box');
		$('.js-selected-box').text(data.val);
		$('#order-box').val(data.type);
		if (data.slideto !== undefined) {
			$('.js-tab-slideto').data('slideto', data.slideto);
		}
		$('.js-trigger-fromboxes').removeClass('js-tab-disallow').trigger('click');
		if (data.scrollto) {
			wHTML.scrollto(null, $('#steps'));
		}
	});

	$('.js-sticker').on('click', function(event) {
		event.preventDefault();
		var $selectedSticker = $('.js-selected-sticker.selected');
		var value = $selectedSticker.data('sticker');
		$('#order-sticker').val(value);
		$('.js-selected-sticker').text(value);
		//$('#order-sticker').val($selectedSticker.data('sticker'));
		/*var $el = $(this);
		var data = $el.data('box');
		$('#sticker__image').attr('src', data.src);
		$('#order-sticker').val(data.sticker);
		$('.js-selected-sticker').text(data.sticker);
		$el.addClass('sticker__item--active').siblings().removeClass('sticker__item--active');*/
	});

	// $('.js-parallax-scroll').each(function(index, el) {
	// 	var $el = $(el);
	// 	var config = $el.data('config') || {
	// 		speedFactor: 0.5
	// 	};
	// 	$el.parallax(config);
	// });
	if (Modernizr.touch === false) {
		$('.js-parallax').each(function(index, el) {
			var $el = $(el);
			var config = $el.data('config') || {};
			$el.parallax(config);
		});
	}
	$(window).load(function() {
		setTimeout(function() {
			$('.parallax__holder').addClass('is-view')
		}, 500);


		var sliderTimer = null;

		$('.js-slider').caroufredsel({
			auto: false,
			circular: false,
			infinite: false,
			responsive: true,
			items: {
				visible: 1
			},
			scroll: {
				items: 1,
				fx:'scroll',
				duration: 1000
			},
			swipe: {
				onTouch: true
			},
			prev: '.js-slider-prev',
			next: '.js-slider-next',
			/*onCreate: function() {
				$(window).resize(function(event) {
					clearTimeout(sliderTimer);
					sliderTimer = setTimeout(function() {
						$('.js-slider').trigger('updateSizes');
					}, 100);
				});
			}*/
		}, {
			transition: transitionFlag
		});


	});


});
