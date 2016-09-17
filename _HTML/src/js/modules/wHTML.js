(function(window, $) {
	require('jquery');
	require('jquery-validate');
	require('magnific-popup');
	/**
	 * @namespace wHTML
	 */

	var _self;
	var wHTML = function(){
		_self = this;
	};

	// methods
	// ========================================

	var _seoTextTimer = null;
	var _seoTextDelay = 10;
	var $seoText;
	var $seoIframe;
	var $seoClone;

	/**
	 * Создаем iframe
	 * @memberof 	wHTML
	 * @private
	 * @param 		{Element}		$seoText - элемент сео текста
	 * @return 		{undefined}
	 */
	function _seoBuild($seoText) {
		var iframe = document.createElement('iframe');
		iframe.id = 'seoIframe';
		iframe.name = 'seoIframe';
		// вкидываем в блок Сео текста
		$seoText[0].appendChild(iframe);
		// ставим прослушку на ресайз contentWindow
		iframe.contentWindow.addEventListener('resize', function() {
			_self.seoText();
		});
		_self.seoText();
	}

	/**
	 * Инициализация `ajax` метода плагина `magnific-popup`
	 *
	 * @sourcecode
	 * @memberof 	wHTML
	 * @tutorial 	workwith-magnific-popup
	 * @see 		{@link http://dimsemenov.com/plugins/magnific-popup/documentation.html#ajax-type}
	 * @return 		{undefined}
	 */
	wHTML.prototype.seoText = function() {
		var $seoText = $seoText || $('#seoText');
		if ($seoText.length) {
			var $seoIframe = $seoIframe || $seoText.children('#seoIframe');
			if ($seoIframe.length) {
				clearTimeout(_seoTextTimer);
				_seoTextTimer = setTimeout(function() {
					var $seoClone = $seoClone || $('#seoClone');
					if ($seoClone.length) {
						$seoClone.height($seoText.outerHeight(true));
						$seoText.css({
							top: $seoClone.offset().top
						});
						_seoTextDelay = 50;
					} else {
						console.warn('#seoClone - не найден');
					}
				}, _seoTextDelay);
			} else {
				_seoBuild($seoText);
			}
		}
	};

	/**
	 * Базовые параметры для инициализации `wHTML.mfpInline`
	 *
	 * @sourcecode
	 * @private
	 * @memberof 	wHTML
	 * @type		{Object}
	 */
	var _mfpInlineBaseConfig = {
		type: 'inline',
		closeBtnInside: true,
		removalDelay: 300,
		mainClass: 'zoom-in'
	};

	/**
	 * Инициализация `inline` метода плагина `magnific-popup`
	 *
	 * @sourcecode
	 * @memberof 	wHTML
	 * @tutorial 	workwith-magnific-popup
	 * @see			{@link http://dimsemenov.com/plugins/magnific-popup/documentation.html#inline-type}
	 *
	 * @param		{string} 	[selector='.js-mfp-inline'] пользовательский css селектор для поиска и инита
	 * @return 		{undefined}
	 */
	wHTML.prototype.mfpInline = function(selector) {
		selector = selector || '.js-mfp-inline';
		$(selector).each(function(index, el) {
			var $el = $(el);
			var customConfig = $el.data('mfpCustomConfig') || {};
			var currentConfig = $.extend(true, _mfpInlineBaseConfig, customConfig);
			$el.magnificPopup(currentConfig);
		});
	};

	/**
	 * Инициализация плагина `jquery-validate`
	 *
	 * @sourcecode
	 * @tutorial 	workwith-jquery-validate
	 * @fires 		wHTML#formOnSubmit
	 *
	 * @param 		{string} 		[selector='.js-form'] пользовательский css селектор для поиска и инита
	 * @return 		{undefined}
	 */
	wHTML.prototype.formValidation = function(selector) {
		selector = selector || '.js-form';
		$(selector).each(function(index, el) {
			var $form = $(el);
			var validator = $form.data('validator');
			if (typeof validator === 'undefined') {

				if ($form.is('form')) {
					$form.on('submit', function(event) {
						return false;
					});
				}

				$form.validate({
					showErrors: function(errorMap, errorList) {
						if (errorList.length) {
							var firstError = errorList.shift();
							var newErrorList = [];
							newErrorList.push(firstError);
							this.errorList = newErrorList;
						}
						this.defaultShowErrors();
					},
					invalidHandler: function(form, validator) {
						$(this)
							.addClass('no_valid')
							.data('validator').focusInvalid();
					},
					submitHandler: function(form) {
						var $currentForm = $(form);
						$currentForm.removeClass('no_valid').addClass('success');
						_self.formOnSubmit($currentForm);
					}
				});

				if ($form.is('div')) {

					$form.on('click', '.js-form-submit', function(event) {
						$form.submit();
					});

					$form.on('change', '.js-input-file', function(event) {
						$form.formGetFileValues(this);
					});

					$form.on('click', '.js-form-reset', function(event) {
						$form.formReset();
					});
				}
			}
		});
	};

	/**
	 * Событие, после успешной валидации формы и отправки данных.
	 *
	 * @sourcecode
	 * @tutorial 	workwith-jquery-validate
	 * @event 		wHTML#formAfterSubmit
	 *
	 * @param 		{Element} 		$form - текущая форма, `jQuery element`
	 * @return 		{undefined}
	 */
	wHTML.prototype.formAfterSubmit = function($form) {
		console.warn('HTML => Форма отправлена');
	};

	/**
	 * Событие, при успешной валидации формы.
	 * Будет замененно при программировании.
	 *
	 * @sourcecode
	 * @tutorial 	workwith-jquery-validate
	 * @fires 		wHTML#formAfterSubmit
	 * @event 		wHTML#formOnSubmit
	 *
	 * @param 		{Element} 		$form - текущая форма, `jQuery element`
	 * @return 		{undefined}
	 */
	wHTML.prototype.formOnSubmit = function($form) {
		// отправка на сервак
		console.log($form);
		// ...
		// в ответе
		_self.formAfterSubmit($form);
	};



	/**
	 * Инициализация `ajax` метода плагина `magnific-popup`
	 *
	 * @sourcecode
	 * @memberof 	wHTML
	 * @tutorial 	workwith-magnific-popup
	 * @see 		{@link http://dimsemenov.com/plugins/magnific-popup/documentation.html#ajax-type}
	 *
	 * @param 		{string} 		[selector='.js-mfp-ajax'] пользовательский css селектор для поиска и инита
	 * @return 		{undefined}
	 */
	wHTML.prototype.mfpAjax = function(selector) {
		selector = selector || '.js-mfp-ajax';
		$('body').magnificPopup({
			type: 'ajax',
			delegate: selector,
			removalDelay: 300,
			mainClass: 'zoom-in',
			callbacks: {
				elementParse: function(item) {
					this.st.ajax.settings = {
						url: item.el.data('url'),
						type: 'POST',
						data: item.el.data('param') || {}
					};
				},
				ajaxContentAdded: function(el) {
					_self.formValidation();

					var connectSlider = document.getElementById('slider-connect');

					noUiSlider.create(connectSlider, {
						start: 40,
						connect: 'lower',
						range: {
							'min': 0,
							'max': 100
						}
					});

					connectSlider.noUiSlider.on('set', function(){
						$('.range-slider').addClass('valid');
					});
				}
			}
		});
	};





	window.wHTML = new wHTML();
})(window, jQuery);