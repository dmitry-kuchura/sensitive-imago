/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Media/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(8);

	jQuery(document).ready(function ($) {
		svg4everybody({});
		wHTML.formValidation();
		wHTML.mfpAjax();

		jQuery.fn.ForceNumericOnly = function () {
			return this.each(function () {
				$(this).keydown(function (e) {
					var key = e.charCode || e.keyCode || 0;
					return key == 8 || key == 9 || key == 46 || key >= 37 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
				});
			});
		};

		/*Инициализация карты на странице контакты*/
		var $googleMaps = $('.googlemap');
		if ($googleMaps.length) {
			__webpack_require__.e/* nsure */(1, function () {
				var initGoogleMaps = __webpack_require__(9);
				$('.googlemap').each(function (index, el) {
					var lat = $(el).data('lat');
					var lng = $(el).data('lng');
					var zoom = $(el).data('zoom') || 18;
					var marker = $(el).data('marker');
					initGoogleMaps(el, lat, lng, zoom, marker);
				});
			});
		}

		/* Подключение скрипта левого меню */
		var $multiLevelMenu = $('.js-multiLevelMenu');
		if ($multiLevelMenu.length) {
			__webpack_require__.e/* nsure */(2, function () {
				var initAsideMenu = __webpack_require__(10);
				initAsideMenu($multiLevelMenu);
			});
		}
		/* Подключение магнифика при необходимости галлереи*/
		var $magnificSelectors = $('.mfi-gallery').add('.videoLink');
		if ($magnificSelectors.length) {
			!/* require.ensure */(function () {
				__webpack_require__(7);
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
			}(__webpack_require__));
		}

		$('.textReviews').on('click', '.textReview__moreLink', function (e) {
			var $this = $(this),
			    $block = $this.closest('.textReview'),
			    tmp = $this.html();
			$this.html($this.data('text'));
			$this.data('text', tmp);
			$block.toggleClass('is-expand');
		});

		if ($('.rateit').length) {
			__webpack_require__.e/* nsure */(3, function () {
				__webpack_require__(11);
			});
		}

		$('[data-dropdown]').wzmClassToggle({
			toggleSelector: '[data-dropdown-toggle]',
			toggleOnBlur: true
		});

		var $headerSlider = $('#headerSlider');
		if ($headerSlider.length) {
			$headerSlider.children('.slider_else_universal').carouFredSel({

				play: true,
				circular: true,
				responsive: true,
				//width: '100%',
				// height: 300,
				prev: $headerSlider.children('.slider-arrow--prev'),
				next: $headerSlider.children('.slider-arrow--next'),
				swipe: {
					onTouch: true,
					onMouse: false
				},
				items: {
					height: $headerSlider.innerHeight()
				},
				scroll: {
					items: 1,
					fx: 'fade',
					easing: "swing",
					pauseOnHover: false
				},
				auto: {
					play: true,
					timeoutDuration: parseInt($headerSlider.data('duration')) || 3000
				},
				onCreate: function onCreate() {
					$headerSlider.css('opacity', 1);
				}
			});
		}
		var $sliderElseUniversal = $('#slider_else_universal');
		if ($sliderElseUniversal.length) {
			$sliderElseUniversal.children('.slider_else_universal').carouFredSel({
				play: true,
				circular: true,
				responsive: true,
				width: '100%',
				height: 285,
				prev: $sliderElseUniversal.children('.slider-arrow--prev'),
				next: $sliderElseUniversal.children('.slider-arrow--next'),
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
				auto: {
					play: true,
					timeoutDuration: parseInt($sliderElseUniversal.data('duration')) || 3000
				}
			});
		}
		var $textTable = $('.wTxt').find('table');
		$textTable.each(function (i, table) {
			var $table = $(table);
			$table.wrap('<div style="overflow-y: auto;"></div>');
		});

		$(window).load(function () {});

		$('.js-show-information').on('click', function (event) {
			event.preventDefault();
			event.stopPropagation();
			$('.js-hidden-information').each(function (index, element) {
				var $element = $(element).find('[data-information]');
				var phone = $element.attr('data-information');
				$element.text(phone);
				$element.removeAttr('data-information');
			});
		});

		$('.js-hidden-information').on('click', function (e) {
			var switchingInfo = $(this).find('[data-information]');
			if (switchingInfo.length) {
				if ($(e.currentTarget).is('a')) e.preventDefault();
				setTimeout(function () {
					$('.js-show-information').trigger('click');
				}, 10);
			}
		});

		$('.numbers_only').ForceNumericOnly();

		if ($('#scrollerUp').length) {
			$(window).scroll(function () {
				// показ/скрытие кнопки
				$(this).scrollTop() > 300 && $(this).scrollTop() < $(document).height() - $(window).height() * 2 ? $('#scrollerUp').stop().show(300) : $('#scrollerUp').stop().hide(300);
			});
			$('#scrollerUp').on('click', function () {
				// расчет времени скролла от высоты документа и текущей позиции - контролл для варирования скорости -> множитель 1000
				var scrollerUpSdeed = ($(document).scrollTop() / $(document).height()).toFixed(2) * 1000;
				$('body, html').stop().animate({
					scrollTop: 0
				}, scrollerUpSdeed);
			});
		}
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	(function (window, $) {
		__webpack_require__(2);
		__webpack_require__(3);
		__webpack_require__(7);
		/**
	  * @namespace wHTML
	  */

		var _self;
		var wHTML = function wHTML() {
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
			iframe.contentWindow.addEventListener('resize', function () {
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
		wHTML.prototype.seoText = function () {
			var $seoText = $seoText || $('#seoText');
			if ($seoText.length) {
				var $seoIframe = $seoIframe || $seoText.children('#seoIframe');
				if ($seoIframe.length) {
					clearTimeout(_seoTextTimer);
					_seoTextTimer = setTimeout(function () {
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
		wHTML.prototype.mfpInline = function (selector) {
			selector = selector || '.js-mfp-inline';
			$(selector).each(function (index, el) {
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
		wHTML.prototype.formValidation = function (selector) {
			selector = selector || '.js-form';
			$(selector).each(function (index, el) {
				var $form = $(el);
				var validator = $form.data('validator');
				if (typeof validator === 'undefined') {

					if ($form.is('form')) {
						$form.on('submit', function (event) {
							return false;
						});
					}

					$form.validate({
						showErrors: function showErrors(errorMap, errorList) {
							if (errorList.length) {
								var firstError = errorList.shift();
								var newErrorList = [];
								newErrorList.push(firstError);
								this.errorList = newErrorList;
							}
							this.defaultShowErrors();
						},
						invalidHandler: function invalidHandler(form, validator) {
							$(this).addClass('no_valid').data('validator').focusInvalid();
						},
						submitHandler: function submitHandler(form) {
							var $currentForm = $(form);
							$currentForm.removeClass('no_valid').addClass('success');
							_self.formOnSubmit($currentForm);
						}
					});

					if ($form.is('div')) {

						$form.on('click', '.js-form-submit', function (event) {
							$form.submit();
						});

						$form.on('change', '.js-input-file', function (event) {
							$form.formGetFileValues(this);
						});

						$form.on('click', '.js-form-reset', function (event) {
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
		wHTML.prototype.formAfterSubmit = function ($form) {
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
		wHTML.prototype.formOnSubmit = function ($form) {
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
		wHTML.prototype.mfpAjax = function (selector) {
			selector = selector || '.js-mfp-ajax';
			$('body').magnificPopup({
				type: 'ajax',
				delegate: selector,
				removalDelay: 300,
				mainClass: 'zoom-in',
				callbacks: {
					elementParse: function elementParse(item) {
						this.st.ajax.settings = {
							url: item.el.data('url'),
							type: 'POST',
							data: item.el.data('param') || {}
						};
					},
					ajaxContentAdded: function ajaxContentAdded(el) {
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

						connectSlider.noUiSlider.on('set', function () {
							$('.range-slider').addClass('valid');
						});
					}
				}
			});
		};

		window.wHTML = new wHTML();
	})(window, jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			factory(jQuery);
		}
	})(function ($) {

		/*
	 	быстрый поиск по выделению
	 	WezomFix - фиксы скрипта
	 	WezomRules - правила валидации
	 */

		function _getTypeName(type) {
			var type_name;
			switch (type) {
				case 'select-one':
				case 'select-multiple':
					type_name = '_select';
					break;
				case 'radio':
				case 'checkbox':
					type_name = '_checker';
					break;
				default:
					type_name = '';
			}
			return type_name;
		}

		function _getMethodMsgName(element, method) {
			var method_name;
			switch (method) {
				case 'required':
				case 'maxlength':
				case 'minlength':
				case 'rangelength':
					method_name = method + _getTypeName(element.type);
					break;
				default:
					method_name = method;
			}
			return method_name;
		}

		function _resetInputs(sett, els, ths) {
			for (var i = 0; i < els.length; i++) {
				var t = els[i];
				var jt = $(t);
				switch (t.type) {
					case 'submit':
					case 'reset':
						break;
					case 'radio':
					case 'checkbox':
						t.checked = t.defaultChecked;
						break;
					case 'file':
						var label = $(t).siblings('.js-input-file');
						t.outerHTML = t.outerHTML;
						ths.formGetFileValues(t, label);
						jt = ths.find('#' + t.id);
						break;
					default:
						t.value = t.defaultValue;
				}
				jt.removeClass(sett.errorClass).trigger('change').siblings(sett.errorElement + '.' + sett.errorClass).css('display', 'none');
			}
		}

		function _resetSelects(sett, els) {
			for (var i = 0; i < els.length; i++) {
				[].forEach.call(els[i].options, function (el) {
					el.selected = el.defaultSelected;
				});
				$(els[i]).removeClass(sett.errorClass).trigger('change').siblings(sett.errorElement + '.' + sett.errorClass).css('display', 'none');
			}
		}

		$.extend($.fn, {
			// http://jqueryvalidation.org/validate/
			validate: function validate(options) {

				// if nothing is selected, return nothing; can't chain anyway
				if (!this.length) {
					if (options && options.debug && window.console) {
						console.warn("Nothing selected, can't validate, returning nothing.");
					}
					return;
				}

				// check if a validator for this form was already created
				var validator = $.data(this[0], "validator");
				if (validator) {
					return validator;
				}

				// Add novalidate tag if HTML5.
				this.attr("novalidate", "novalidate");

				validator = new $.validator(options, this[0]);
				$.data(this[0], "validator", validator);

				if (validator.settings.onsubmit) {

					this.on("click.validate", ":submit", function (event) {
						if (validator.settings.submitHandler) {
							validator.submitButton = event.target;
						}

						// allow suppressing validation by adding a cancel class to the submit button
						if ($(this).hasClass("cancel")) {
							validator.cancelSubmit = true;
						}

						// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
						if ($(this).attr("formnovalidate") !== undefined) {
							validator.cancelSubmit = true;
						}
					});

					// validate the form on submit
					this.on("submit.validate", function (event) {
						if (validator.settings.debug) {
							// prevent form submit to be able to see console output
							event.preventDefault();
						}
						function handle() {
							var hidden, result;
							if (validator.settings.submitHandler) {
								if (validator.submitButton) {
									// insert a hidden input as a replacement for the missing submit button
									hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
								}
								result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
								if (validator.submitButton) {
									// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
									hidden.remove();
								}
								if (result !== undefined) {
									return result;
								}
								return false;
							}
							return true;
						}

						// prevent submit for invalid forms or custom submit handlers
						if (validator.cancelSubmit) {
							validator.cancelSubmit = false;
							return handle();
						}
						if (validator.form()) {
							if (validator.pendingRequest) {
								validator.formSubmitted = true;
								return false;
							}
							return handle();
						} else {
							validator.focusInvalid();
							return false;
						}
					});
				}

				return validator;
			},
			// http://jqueryvalidation.org/valid/
			valid: function valid() {
				var valid, validator, errorList;

				if ($(this[0]).is("form")) {
					valid = this.validate().form();
				} else if ($(this[0]).is("div")) {
					// WezomFix
					valid = this.validate().form();
				} else {
					errorList = [];
					valid = true;
					validator = $(this).closest('.js-form').validate(); // WezomFix
					this.each(function () {
						valid = validator.element(this) && valid;
						errorList = errorList.concat(validator.errorList);
					});
					validator.errorList = errorList;
				}
				return valid;
			},

			// http://jqueryvalidation.org/rules/
			rules: function rules(command, argument) {
				var element = this[0],
				    settings,
				    staticRules,
				    existingRules,
				    data,
				    param,
				    filtered;

				if (command) {
					settings = $.data(element.form, "validator").settings;
					staticRules = settings.rules;
					existingRules = $.validator.staticRules(element);
					switch (command) {
						case "add":
							$.extend(existingRules, $.validator.normalizeRule(argument));
							// remove messages from rules, but allow them to be set separately
							delete existingRules.messages;
							staticRules[element.name] = existingRules;
							if (argument.messages) {
								settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
							}
							break;
						case "remove":
							if (!argument) {
								delete staticRules[element.name];
								return existingRules;
							}
							filtered = {};
							$.each(argument.split(/\s/), function (index, method) {
								filtered[method] = existingRules[method];
								delete existingRules[method];
								if (method === "required") {
									$(element).removeAttr("aria-required");
								}
							});
							return filtered;
					}
				}

				data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);

				// make sure required is at front
				if (data.required) {
					param = data.required;
					delete data.required;
					data = $.extend({ required: param }, data);
					$(element).attr("aria-required", "true");
				}

				// make sure remote is at back
				if (data.remote) {
					param = data.remote;
					delete data.remote;
					data = $.extend(data, { remote: param });
				}

				return data;
			},
			// WezomFix
			formReset: function formReset() {
				var ths = $(this[0]);
				var sett = ths.validate().settings;
				ths.removeClass('success');
				ths.removeClass('no_valid');
				_resetInputs(sett, ths.find('input'), ths);
				_resetInputs(sett, ths.find('textarea'), ths);
				_resetSelects(sett, ths.find('select'), ths);
			},
			// WezomFix
			formGetFileValues: function formGetFileValues(input, isLabel) {
				var multiple = input.multiple;
				var files = input.files;
				var filesLength = files.length;
				var ths = $(input);
				var label = isLabel || ths.parent().find('.js-input-file');
				var noSelected = 'Ничего не выбрано';
				var isSelected = multiple ? 'Выбрано файлов - %count: <ins>(%files)</ins>' : 'Выбрано: <ins>%files</ins>';
				if (_typeof(label.data('label-text')) == 'object') {
					noSelected = label.data('label-text')[0];
					isSelected = label.data('label-text')[1];
				}
				var result = noSelected;
				if (filesLength) {
					var fileNames;
					result = isSelected;
					if (multiple) {
						var fileArr = [];
						for (var i = 0; i < filesLength; i++) {
							fileArr.push(files[i].name);
						}
						result = result.replace(/%count/g, filesLength);
						fileNames = fileArr.join(',');
					} else {
						fileNames = files[0].name;
					}
					result = result.replace(/%files/g, fileNames);
				}
				ths.blur();
				label.html('<span>' + result + '</span>');
			}
		});

		// Custom selectors
		$.extend($.expr[":"], {
			// http://jqueryvalidation.org/blank-selector/
			blank: function blank(a) {
				return !$.trim("" + $(a).val());
			},
			// http://jqueryvalidation.org/filled-selector/
			filled: function filled(a) {
				return !!$.trim("" + $(a).val());
			},
			// http://jqueryvalidation.org/unchecked-selector/
			unchecked: function unchecked(a) {
				return !$(a).prop("checked");
			}
		});

		// constructor for validator
		$.validator = function (options, form) {
			this.settings = $.extend(true, {}, $.validator.defaults, options);
			this.currentForm = form;
			this.init();
		};

		// http://jqueryvalidation.org/jQuery.validator.format/
		$.validator.format = function (source, params) {
			if (arguments.length === 1) {
				return function () {
					var args = $.makeArray(arguments);
					args.unshift(source);
					return $.validator.format.apply(this, args);
				};
			}
			if (arguments.length > 2 && params.constructor !== Array) {
				params = $.makeArray(arguments).slice(1);
			}
			if (params.constructor !== Array) {
				params = [params];
			}
			$.each(params, function (i, n) {
				source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
					return n;
				});
			});
			return source;
		};

		$.extend($.validator, {

			defaults: {
				messages: {},
				groups: {},
				rules: {},
				errorClass: "error",
				validClass: "valid",
				errorElement: "label",
				focusCleanup: false,
				focusInvalid: true,
				errorContainer: $([]),
				errorLabelContainer: $([]),
				onsubmit: true,
				ignore: ":hidden",
				ignoreTitle: false,
				onfocusin: function onfocusin(element) {
					this.lastActive = element;

					// Hide error label and remove error class on focus if enabled
					if (this.settings.focusCleanup) {
						if (this.settings.unhighlight) {
							this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
						}
						this.hideThese(this.errorsFor(element));
					}
				},
				onfocusout: function onfocusout(element) {
					if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
						this.element(element);
					}
				},
				onkeyup: function onkeyup(element, event) {
					// Avoid revalidate the field when pressing one of the following keys
					// Shift	   => 16
					// Ctrl		=> 17
					// Alt		 => 18
					// Caps lock   => 20
					// End		 => 35
					// Home		=> 36
					// Left arrow  => 37
					// Up arrow	=> 38
					// Right arrow => 39
					// Down arrow  => 40
					// Insert	  => 45
					// Num lock	=> 144
					// AltGr key   => 225
					var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];

					if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
						return;
					} else if (event.which === 13 && element.tagName !== 'TEXTAREA') {
						if ($(this.currentForm).data('validator').checkForm()) {
							$(this.currentForm).submit();
						}
					} else if (element.name in this.submitted || this.isValidElement(element)) {
						this.element(element);
					}
				},
				onclick: function onclick(element) {
					// click on selects, radiobuttons and checkboxes
					if (element.name in this.submitted) {
						this.element(element);

						// or option elements, check parent select in that case
					} else if (element.parentNode.name in this.submitted) {
						this.element(element.parentNode);
					}
				},
				highlight: function highlight(element, errorClass, validClass) {
					if (element.type === "radio") {
						this.findByName(element.name).addClass(errorClass).removeClass(validClass);
					} else {
						$(element).addClass(errorClass).removeClass(validClass);
					}
				},
				unhighlight: function unhighlight(element, errorClass, validClass) {
					if (element.type === "radio") {
						this.findByName(element.name).removeClass(errorClass).addClass(validClass);
					} else {
						$(element).removeClass(errorClass).addClass(validClass);
					}
				}
			},

			// http://jqueryvalidation.org/jQuery.validator.setDefaults/
			setDefaults: function setDefaults(settings) {
				$.extend($.validator.defaults, settings);
			},

			messages: {
				required: "This field is required.",
				remote: "Please fix this field.",
				email: "Please enter a valid email address.",
				url: "Please enter a valid URL.",
				date: "Please enter a valid date.",
				dateISO: "Please enter a valid date (ISO).",
				number: "Please enter a valid number.",
				digits: "Please enter only digits.",
				creditcard: "Please enter a valid credit card number.",
				equalTo: "Please enter the same value again.",
				maxlength: $.validator.format("Please enter no more than {0} characters."),
				minlength: $.validator.format("Please enter at least {0} characters."),
				rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
				range: $.validator.format("Please enter a value between {0} and {1}."),
				max: $.validator.format("Please enter a value less than or equal to {0}."),
				min: $.validator.format("Please enter a value greater than or equal to {0}.")
			},

			autoCreateRanges: false,

			prototype: {

				init: function init() {
					this.labelContainer = $(this.settings.errorLabelContainer);
					this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
					this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
					this.submitted = {};
					this.valueCache = {};
					this.pendingRequest = 0;
					this.pending = {};
					this.invalid = {};
					this.reset();

					var groups = this.groups = {},
					    rules;
					$.each(this.settings.groups, function (key, value) {
						if (typeof value === "string") {
							value = value.split(/\s/);
						}
						$.each(value, function (index, name) {
							groups[name] = key;
						});
					});
					rules = this.settings.rules;
					$.each(rules, function (key, value) {
						rules[key] = $.validator.normalizeRule(value);
					});

					function delegate(event) {
						// WezomFix
						var validator, form, eventType;
						form = this.form;

						if (!form) {
							form = $(this).closest("div[data-form='true']").get(0);
						}
						validator = $.data(form, "validator");
						eventType = "on" + event.type.replace(/^validate/, "");
						/*this.settings = validator.settings;
	     if (this.settings[eventType] && !this.is(this.settings.ignore)) {
	     	this.settings[eventType].call(validator, this[0], event);
	     }*/
						var settings = validator.settings;
						if (settings[eventType] && !$(this).is(settings.ignore)) {
							settings[eventType].call(validator, this, event);
						}
					}

					$(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox']", delegate)
					// Support: Chrome, oldIE
					// "select" is provided as event.target when clicking a option
					.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

					if (this.settings.invalidHandler) {
						$(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
					}

					// Add aria-required to any Static/Data/Class required fields before first validation
					// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
					$(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
				},

				// http://jqueryvalidation.org/Validator.form/
				form: function form() {
					this.checkForm();
					$.extend(this.submitted, this.errorMap);
					this.invalid = $.extend({}, this.errorMap);
					if (!this.valid()) {
						$(this.currentForm).triggerHandler("invalid-form", [this]);
					}
					this.showErrors();
					return this.valid();
				},

				checkForm: function checkForm() {
					this.prepareForm();
					for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
						this.check(elements[i]);
					}
					return this.valid();
				},

				// http://jqueryvalidation.org/Validator.element/
				element: function element(_element) {
					var cleanElement = this.clean(_element),
					    checkElement = this.validationTargetFor(cleanElement),
					    result = true;

					this.lastElement = checkElement;

					if (checkElement === undefined) {
						delete this.invalid[cleanElement.name];
					} else {
						this.prepareElement(checkElement);
						this.currentElements = $(checkElement);

						result = this.check(checkElement) !== false;
						if (result) {
							delete this.invalid[checkElement.name];
						} else {
							this.invalid[checkElement.name] = true;
						}
					}
					// Add aria-invalid status for screen readers
					$(_element).attr("aria-invalid", !result);

					if (!this.numberOfInvalids()) {
						// Hide error containers on last error
						this.toHide = this.toHide.add(this.containers);
					}
					this.showErrors();
					return result;
				},

				// http://jqueryvalidation.org/Validator.showErrors/
				showErrors: function showErrors(errors) {
					if (errors) {
						// add items to error list and map
						$.extend(this.errorMap, errors);
						this.errorList = [];
						for (var name in errors) {
							this.errorList.push({
								message: errors[name],
								element: this.findByName(name)[0]
							});
						}
						// remove items from success list
						this.successList = $.grep(this.successList, function (element) {
							return !(element.name in errors);
						});
					}
					if (this.settings.showErrors) {
						this.settings.showErrors.call(this, this.errorMap, this.errorList);
					} else {
						this.defaultShowErrors();
					}
				},

				// http://jqueryvalidation.org/Validator.resetForm/
				resetForm: function resetForm() {
					if ($.fn.resetForm) {
						$(this.currentForm).resetForm();
					}
					this.submitted = {};
					this.lastElement = null;
					this.prepareForm();
					this.hideErrors();
					var i,
					    elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");

					if (this.settings.unhighlight) {
						for (i = 0; elements[i]; i++) {
							this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
						}
					} else {
						elements.removeClass(this.settings.errorClass);
					}
				},

				numberOfInvalids: function numberOfInvalids() {
					return this.objectLength(this.invalid);
				},

				objectLength: function objectLength(obj) {
					/* jshint unused: false */
					var count = 0,
					    i;
					for (i in obj) {
						count++;
					}
					return count;
				},

				hideErrors: function hideErrors() {
					this.hideThese(this.toHide);
				},

				hideThese: function hideThese(errors) {
					errors.not(this.containers).text("");
					this.addWrapper(errors).hide();
				},

				valid: function valid() {
					return this.size() === 0;
				},

				isValidElement: function isValidElement(element) {
					return this.invalid[element.name] === undefined ? undefined : !this.invalid[element.name];
				},

				size: function size() {
					return this.errorList.length;
				},

				focusInvalid: function focusInvalid() {
					if (this.settings.focusInvalid) {
						try {
							$(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()
							// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
							.trigger("focusin");
						} catch (e) {
							// ignore IE throwing errors when focusing hidden elements
						}
					}
				},

				findLastActive: function findLastActive() {
					var lastActive = this.lastActive;
					return lastActive && $.grep(this.errorList, function (n) {
						return n.element.name === lastActive.name;
					}).length === 1 && lastActive;
				},

				elements: function elements() {
					var validator = this,
					    rulesCache = {};

					// select all valid inputs inside the form (no submit or reset buttons)
					return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
						if (!this.name && validator.settings.debug && window.console) {
							console.error("%o has no name assigned", this);
						}

						// select only the first element for each name, and only those with rules specified
						if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
							return false;
						}

						rulesCache[this.name] = true;
						return true;
					});
				},

				clean: function clean(selector) {
					return $(selector)[0];
				},

				errors: function errors() {
					var errorClass = this.settings.errorClass.split(" ").join(".");
					return $(this.settings.errorElement + "." + errorClass, this.errorContext);
				},

				reset: function reset() {
					this.successList = [];
					this.errorList = [];
					this.errorMap = {};
					this.toShow = $([]);
					this.toHide = $([]);
					this.currentElements = $([]);
				},

				prepareForm: function prepareForm() {
					this.reset();
					this.toHide = this.errors().add(this.containers);
				},

				prepareElement: function prepareElement(element) {
					this.reset();
					this.toHide = this.errorsFor(element);
				},

				elementValue: function elementValue(element) {
					var val,
					    $element = $(element),
					    type = element.type;

					if (type === "radio" || type === "checkbox") {
						return this.findByName(element.name).filter(":checked").val();
					} else if (type === "number" && typeof element.validity !== "undefined") {
						return element.validity.badInput ? false : $element.val();
					}

					val = $element.val();
					if (typeof val === "string") {
						return val.replace(/\r/g, "");
					}
					return val;
				},

				check: function check(element) {
					element = this.validationTargetFor(this.clean(element));

					var rules = $(element).rules(),
					    rulesCount = $.map(rules, function (n, i) {
						return i;
					}).length,
					    dependencyMismatch = false,
					    val = this.elementValue(element),
					    result,
					    method,
					    rule;

					for (method in rules) {
						rule = { method: method, parameters: rules[method] };
						try {

							result = $.validator.methods[method].call(this, val, element, rule.parameters);

							// if a method indicates that the field is optional and therefore valid,
							// don't mark it as valid when there are no other rules
							if (result === "dependency-mismatch" && rulesCount === 1) {
								dependencyMismatch = true;
								continue;
							}
							dependencyMismatch = false;

							if (result === "pending") {
								this.toHide = this.toHide.not(this.errorsFor(element));
								return;
							}

							if (!result) {
								this.formatAndAdd(element, rule);
								return false;
							}
						} catch (e) {
							if (this.settings.debug && window.console) {
								console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
							}
							if (e instanceof TypeError) {
								e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
							}

							throw e;
						}
					}
					if (dependencyMismatch) {
						return;
					}
					if (this.objectLength(rules)) {
						this.successList.push(element);
					}
					return true;
				},

				// return the custom message for the given element and validation method
				// specified in the element's HTML5 data attribute
				// return the generic message if present and no method specific message is present
				customDataMessage: function customDataMessage(element, method) {
					return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
				},

				// return the custom message for the given element name and validation method
				customMessage: function customMessage(name, method) {
					var m = this.settings.messages[name];
					return m && (m.constructor === String ? m : m[method]);
				},

				// return the first defined argument, allowing empty strings
				findDefined: function findDefined() {
					for (var i = 0; i < arguments.length; i++) {
						if (arguments[i] !== undefined) {
							return arguments[i];
						}
					}
					return undefined;
				},

				defaultMessage: function defaultMessage(element, method) {
					// WezomFix
					var method_name = _getMethodMsgName(element, method);
					return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method),
					// title is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method_name], "<strong>Warning: No message defined for " + element.name + "</strong>");
				},

				formatAndAdd: function formatAndAdd(element, rule) {
					var message = this.defaultMessage(element, rule.method),
					    theregex = /\$?\{(\d+)\}/g;
					if (typeof message === "function") {
						message = message.call(this, rule.parameters, element);
					} else if (theregex.test(message)) {
						message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
					}
					this.errorList.push({
						message: message,
						element: element,
						method: rule.method
					});

					this.errorMap[element.name] = message;
					this.submitted[element.name] = message;
				},

				addWrapper: function addWrapper(toToggle) {
					if (this.settings.wrapper) {
						toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
					}
					return toToggle;
				},

				defaultShowErrors: function defaultShowErrors() {
					var i, elements, error;
					for (i = 0; this.errorList[i]; i++) {
						error = this.errorList[i];
						if (this.settings.highlight) {
							this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
						}
						this.showLabel(error.element, error.message);
					}
					if (this.errorList.length) {
						this.toShow = this.toShow.add(this.containers);
					}
					if (this.settings.success) {
						for (i = 0; this.successList[i]; i++) {
							this.showLabel(this.successList[i]);
						}
					}
					if (this.settings.unhighlight) {
						for (i = 0, elements = this.validElements(); elements[i]; i++) {
							this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
						}
					}
					this.toHide = this.toHide.not(this.toShow);
					this.hideErrors();
					this.addWrapper(this.toShow).show();
				},

				validElements: function validElements() {
					return this.currentElements.not(this.invalidElements());
				},

				invalidElements: function invalidElements() {
					return $(this.errorList).map(function () {
						return this.element;
					});
				},

				showLabel: function showLabel(element, message) {
					var place,
					    group,
					    errorID,
					    error = this.errorsFor(element),
					    elementID = this.idOrName(element),
					    describedBy = $(element).attr("aria-describedby");
					if (error.length) {
						// refresh error/success class
						error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
						// replace message on existing label
						error.html(message);
					} else {
						// create error element
						error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");

						// Maintain reference to the element to be placed into the DOM
						place = error;
						if (this.settings.wrapper) {
							// make sure the element is visible, even in IE
							// actually showing the wrapped element is handled elsewhere
							place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
						}
						if (this.labelContainer.length) {
							this.labelContainer.append(place);
						} else if (this.settings.errorPlacement) {
							this.settings.errorPlacement(place, $(element));
						} else {
							place.insertAfter(element);
						}

						// Link error back to the element
						if (error.is("label")) {
							// If the error is a label, then associate using 'for'
							error.attr("for", elementID);
						} else if (error.parents("label[for='" + elementID + "']").length === 0) {
							// If the element is not a child of an associated label, then it's necessary
							// to explicitly apply aria-describedby

							errorID = error.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1");
							// Respect existing non-error aria-describedby
							if (!describedBy) {
								describedBy = errorID;
							} else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
								// Add to end of list if not already present
								describedBy += " " + errorID;
							}
							$(element).attr("aria-describedby", describedBy);

							// If this element is grouped, then assign to all elements in the same group
							group = this.groups[element.name];
							if (group) {
								$.each(this.groups, function (name, testgroup) {
									if (testgroup === group) {
										$("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"));
									}
								});
							}
						}
					}
					if (!message && this.settings.success) {
						error.text("");
						if (typeof this.settings.success === "string") {
							error.addClass(this.settings.success);
						} else {
							this.settings.success(error, element);
						}
					}
					this.toShow = this.toShow.add(error);
				},

				errorsFor: function errorsFor(element) {
					var name = this.idOrName(element),
					    describer = $(element).attr("aria-describedby"),
					    selector = "label[for='" + name + "'], label[for='" + name + "'] *";

					// aria-describedby should directly reference the error element
					if (describer) {
						selector = selector + ", #" + describer.replace(/\s+/g, ", #");
					}
					return this.errors().filter(selector);
				},

				idOrName: function idOrName(element) {
					return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
				},

				validationTargetFor: function validationTargetFor(element) {

					// If radio/checkbox, validate first element in group instead
					if (this.checkable(element)) {
						element = this.findByName(element.name);
					}

					// Always apply ignore filter
					return $(element).not(this.settings.ignore)[0];
				},

				checkable: function checkable(element) {
					return (/radio|checkbox/i.test(element.type)
					);
				},

				findByName: function findByName(name) {
					return $(this.currentForm).find("[name='" + name + "']");
				},

				getLength: function getLength(value, element) {
					switch (element.nodeName.toLowerCase()) {
						case "select":
							return $("option:selected", element).length;
						case "input":
							if (this.checkable(element)) {
								return this.findByName(element.name).filter(":checked").length;
							}
					}
					return value.length;
				},

				depend: function depend(param, element) {
					return this.dependTypes[typeof param === "undefined" ? "undefined" : _typeof(param)] ? this.dependTypes[typeof param === "undefined" ? "undefined" : _typeof(param)](param, element) : true;
				},

				dependTypes: {
					"boolean": function boolean(param) {
						return param;
					},
					"string": function string(param, element) {
						return !!$(param, element.form).length;
					},
					"function": function _function(param, element) {
						return param(element);
					}
				},

				optional: function optional(element) {
					var val = this.elementValue(element);
					return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
				},

				startRequest: function startRequest(element) {
					if (!this.pending[element.name]) {
						this.pendingRequest++;
						this.pending[element.name] = true;
					}
				},

				stopRequest: function stopRequest(element, valid) {
					this.pendingRequest--;
					// sometimes synchronization fails, make sure pendingRequest is never < 0
					if (this.pendingRequest < 0) {
						this.pendingRequest = 0;
					}
					delete this.pending[element.name];
					if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
						$(this.currentForm).submit();
						this.formSubmitted = false;
					} else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
						$(this.currentForm).triggerHandler("invalid-form", [this]);
						this.formSubmitted = false;
					}
				},

				previousValue: function previousValue(element) {
					return $.data(element, "previousValue") || $.data(element, "previousValue", {
						old: null,
						valid: true,
						message: this.defaultMessage(element, "remote")
					});
				},

				// cleans up all forms and elements, removes validator-specific events
				destroy: function destroy() {
					this.resetForm();

					$(this.currentForm).off(".validate").removeData("validator");
				}

			},

			classRuleSettings: {
				required: { required: true },
				email: { email: true },
				url: { url: true },
				date: { date: true },
				dateISO: { dateISO: true },
				number: { number: true },
				digits: { digits: true },
				creditcard: { creditcard: true }
			},

			addClassRules: function addClassRules(className, rules) {
				if (className.constructor === String) {
					this.classRuleSettings[className] = rules;
				} else {
					$.extend(this.classRuleSettings, className);
				}
			},

			classRules: function classRules(element) {
				var rules = {},
				    classes = $(element).attr("class");

				if (classes) {
					$.each(classes.split(" "), function () {
						if (this in $.validator.classRuleSettings) {
							$.extend(rules, $.validator.classRuleSettings[this]);
						}
					});
				}
				return rules;
			},

			normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {

				// convert the value to a number for number inputs, and for text for backwards compability
				// allows type="date" and others to be compared as strings
				if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
					value = Number(value);

					// Support Opera Mini, which returns NaN for undefined minlength
					if (isNaN(value)) {
						value = undefined;
					}
				}

				if (value || value === 0) {
					rules[method] = value;
				} else if (type === method && type !== "range") {

					// exception: the jquery validate 'range' method
					// does not test for the html5 'range' type
					rules[method] = true;
				}
			},

			attributeRules: function attributeRules(element) {
				var rules = {},
				    $element = $(element),
				    type = element.getAttribute("type"),
				    method,
				    value;

				for (method in $.validator.methods) {

					// support for <input required> in both html5 and older browsers
					if (method === "required") {
						value = element.getAttribute(method);

						// Some browsers return an empty string for the required attribute
						// and non-HTML5 browsers might have required="" markup
						if (value === "") {
							value = true;
						}

						// force non-HTML5 browsers to return bool
						value = !!value;
					} else {
						value = $element.attr(method);
					}

					this.normalizeAttributeRule(rules, type, method, value);
				}

				// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
				if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
					delete rules.maxlength;
				}

				return rules;
			},

			dataRules: function dataRules(element) {
				var rules = {},
				    $element = $(element),
				    type = element.getAttribute("type"),
				    method,
				    value;

				for (method in $.validator.methods) {
					value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
					this.normalizeAttributeRule(rules, type, method, value);
				}
				return rules;
			},

			staticRules: function staticRules(element) {
				// WezomFix
				if (element.form) {
					validator = $.data(element.form, "validator");
				} else {
					validator = $.data($(element).closest("div[data-form='true']").get(0), "validator");
				}

				var rules = {},

				//validator = $.data(element.form, "validator");
				validator = validator; // WezomFix

				if (validator.settings.rules) {
					rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
				}
				return rules;
			},

			normalizeRules: function normalizeRules(rules, element) {
				// handle dependency check
				$.each(rules, function (prop, val) {
					// ignore rule when param is explicitly false, eg. required:false
					if (val === false) {
						delete rules[prop];
						return;
					}
					if (val.param || val.depends) {
						var keepRule = true;
						switch (_typeof(val.depends)) {
							case "string":
								keepRule = !!$(val.depends, element.form).length;
								break;
							case "function":
								keepRule = val.depends.call(element, element);
								break;
						}
						if (keepRule) {
							rules[prop] = val.param !== undefined ? val.param : true;
						} else {
							delete rules[prop];
						}
					}
				});

				// evaluate parameters
				$.each(rules, function (rule, parameter) {
					rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
				});

				// clean number parameters
				$.each(["minlength", "maxlength"], function () {
					if (rules[this]) {
						rules[this] = Number(rules[this]);
					}
				});
				$.each(["rangelength", "range"], function () {
					var parts;
					if (rules[this]) {
						if ($.isArray(rules[this])) {
							rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
						} else if (typeof rules[this] === "string") {
							parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
							rules[this] = [Number(parts[0]), Number(parts[1])];
						}
					}
				});

				if ($.validator.autoCreateRanges) {
					// auto-create ranges
					if (rules.min != null && rules.max != null) {
						rules.range = [rules.min, rules.max];
						delete rules.min;
						delete rules.max;
					}
					if (rules.minlength != null && rules.maxlength != null) {
						rules.rangelength = [rules.minlength, rules.maxlength];
						delete rules.minlength;
						delete rules.maxlength;
					}
				}

				return rules;
			},

			// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
			normalizeRule: function normalizeRule(data) {
				if (typeof data === "string") {
					var transformed = {};
					$.each(data.split(/\s/), function () {
						transformed[this] = true;
					});
					data = transformed;
				}
				return data;
			},

			// http://jqueryvalidation.org/jQuery.validator.addMethod/
			addMethod: function addMethod(name, method, message) {
				$.validator.methods[name] = method;
				$.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
				if (method.length < 3) {
					$.validator.addClassRules(name, $.validator.normalizeRule(name));
				}
			},

			methods: {

				// http://jqueryvalidation.org/required-method/
				required: function required(value, element, param) {
					// check if dependency is met
					if (!this.depend(param, element)) {
						return "dependency-mismatch";
					}
					if (element.nodeName.toLowerCase() === "select") {
						// could be an array for select-multiple or a string, both are fine this way
						var val = $(element).val();
						return val && val.length > 0;
					}
					if (this.checkable(element)) {
						return this.getLength(value, element) > 0;
					}
					return value.length > 0;
				},

				// http://jqueryvalidation.org/email-method/
				email: function email(value, element) {
					// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
					// Retrieved 2014-01-14
					// If you have a problem with this implementation, report a bug against the above spec
					// Or use custom methods to implement your own email validation
					//return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);

					// WezomFix
					return this.optional(element) || /^(([a-zA-Z0-9\&\+\-\=\_])+((\.([a-zA-Z0-9\&\+\-\=\_]){1,})+)?){1,64}\@([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(value);
				},

				// http://jqueryvalidation.org/url-method/
				url: function url(value, element) {

					// Copyright (c) 2010-2013 Diego Perini, MIT licensed
					// https://gist.github.com/dperini/729294
					// see also https://mathiasbynens.be/demo/url-regex
					// modified to allow protocol-relative URLs
					return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
				},

				// http://jqueryvalidation.org/date-method/
				date: function date(value, element) {
					return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
				},

				// http://jqueryvalidation.org/dateISO-method/
				dateISO: function dateISO(value, element) {
					return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
				},

				// http://jqueryvalidation.org/number-method/
				number: function number(value, element) {
					return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
				},

				// http://jqueryvalidation.org/digits-method/
				digits: function digits(value, element) {
					return this.optional(element) || /^\d+$/.test(value);
				},

				// http://jqueryvalidation.org/creditcard-method/
				// based on http://en.wikipedia.org/wiki/Luhn_algorithm
				creditcard: function creditcard(value, element) {
					if (this.optional(element)) {
						return "dependency-mismatch";
					}
					// accept only spaces, digits and dashes
					if (/[^0-9 \-]+/.test(value)) {
						return false;
					}
					var nCheck = 0,
					    nDigit = 0,
					    bEven = false,
					    n,
					    cDigit;

					value = value.replace(/\D/g, "");

					// Basing min and max length on
					// http://developer.ean.com/general_info/Valid_Credit_Card_Types
					if (value.length < 13 || value.length > 19) {
						return false;
					}

					for (n = value.length - 1; n >= 0; n--) {
						cDigit = value.charAt(n);
						nDigit = parseInt(cDigit, 10);
						if (bEven) {
							if ((nDigit *= 2) > 9) {
								nDigit -= 9;
							}
						}
						nCheck += nDigit;
						bEven = !bEven;
					}

					return nCheck % 10 === 0;
				},

				// http://jqueryvalidation.org/minlength-method/
				minlength: function minlength(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || length >= param;
				},

				// http://jqueryvalidation.org/maxlength-method/
				maxlength: function maxlength(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || length <= param;
				},

				// http://jqueryvalidation.org/rangelength-method/
				rangelength: function rangelength(value, element, param) {
					var length = $.isArray(value) ? value.length : this.getLength(value, element);
					return this.optional(element) || length >= param[0] && length <= param[1];
				},

				// http://jqueryvalidation.org/min-method/
				min: function min(value, element, param) {
					return this.optional(element) || value >= param;
				},

				// http://jqueryvalidation.org/max-method/
				max: function max(value, element, param) {
					return this.optional(element) || value <= param;
				},

				// http://jqueryvalidation.org/range-method/
				range: function range(value, element, param) {
					return this.optional(element) || value >= param[0] && value <= param[1];
				},

				// http://jqueryvalidation.org/equalTo-method/
				equalTo: function equalTo(value, element, param) {
					// bind to the blur event of the target in order to revalidate whenever the target field is updated
					// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
					var target = $(param);
					if (this.settings.onfocusout) {
						target.off(".validate-equalTo").on("blur.validate-equalTo", function () {
							$(element).valid();
						});
					}
					return value === target.val();
				},

				// http://jqueryvalidation.org/remote-method/
				remote: function remote(value, element, param) {
					if (this.optional(element)) {
						return "dependency-mismatch";
					}

					var previous = this.previousValue(element),
					    validator,
					    data;

					if (!this.settings.messages[element.name]) {
						this.settings.messages[element.name] = {};
					}
					previous.originalMessage = this.settings.messages[element.name].remote;
					this.settings.messages[element.name].remote = previous.message;

					param = typeof param === "string" && { url: param } || param;

					if (previous.old === value) {
						return previous.valid;
					}

					previous.old = value;
					validator = this;
					this.startRequest(element);
					data = {};
					data[element.name] = value;
					$.ajax($.extend(true, {
						mode: "abort",
						port: "validate" + element.name,
						dataType: "json",
						data: data,
						context: validator.currentForm,
						success: function success(response) {
							var valid = response === true || response === "true",
							    errors,
							    message,
							    submitted;

							validator.settings.messages[element.name].remote = previous.originalMessage;
							if (valid) {
								submitted = validator.formSubmitted;
								validator.prepareElement(element);
								validator.formSubmitted = submitted;
								validator.successList.push(element);
								delete validator.invalid[element.name];
								validator.showErrors();
							} else {
								errors = {};
								message = response || validator.defaultMessage(element, "remote");
								errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
								validator.invalid[element.name] = true;
								validator.showErrors(errors);
							}
							previous.valid = valid;
							validator.stopRequest(element, valid);
						}
					}, param));
					return "pending";
				},

				// additional-methhods

				pattern: function pattern(value, element, param) {
					if (this.optional(element)) {
						return true;
					}
					if (typeof param === "string") {
						param = new RegExp("^(?:" + param + ")$");
					}
					return param.test(value);
				},

				// WezomRules

				password: function password(value, element) {
					return this.optional(element) || /^\S.*$/.test(value);
				},

				filesize: function filesize(value, element, param) {
					var kb = 0;
					for (var i = 0; i < element.files.length; i++) {
						kb += element.files[i].size;
					}
					return this.optional(element) || kb / 1024 <= param;
				},

				filesizeEach: function filesizeEach(value, element, param) {
					var flag = true;
					for (var i = 0; i < element.files.length; i++) {
						if (element.files[i].size / 1024 > param) {
							flag = false;
							break;
						}
					}
					return this.optional(element) || flag;
				},

				filetype: function filetype(value, element, param) {
					var result;
					param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|doc|pdf|gif|zip|rar|tar|html|swf|txt|xls|docx|xlsx|odt";
					if (element.multiple) {
						var files = element.files;
						for (var i = 0; i < files.length; i++) {
							var value = files[i].name;
							result = this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
							if (result === null) {
								break;
							}
						}
					} else {
						var result = this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
					}
					return result;
				},

				or: function or(value, element, param) {
					var $module = $(element).parents('.js-form');
					return $module.find('.' + param + ':filled').length;
				},

				word: function word(value, element) {
					return this.optional(element) || /^[a-zA-Zа-яА-ЯіІїЇєёЁЄґҐ\'\`\- ]*$/.test(value);
				},

				login: function login(value, element) {
					return this.optional(element) || /^[0-9a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ][0-9a-zA-Zа-яА-ЯіІїЇєЄґҐ\-\._]+$/.test(value);
				},

				phoneUA: function phoneUA(value, element, param) {
					return this.optional(element) || /^(((\+?)(38))\s?)?(([0-9]{3})|(\([0-9]{3}\)))(\-|\s)?(([0-9]{3})(\-|\s)?([0-9]{2})(\-|\s)?([0-9]{2})|([0-9]{2})(\-|\s)?([0-9]{2})(\-|\s)?([0-9]{3})|([0-9]{2})(\-|\s)?([0-9]{3})(\-|\s)?([0-9]{2}))$/.test(value);
				},

				validTrue: function validTrue(value, element, param) {
					if ($(element).data('valid') === true) {
						return true;
					} else {
						return false;
					}
				}
			}

		});

		// ajax mode: abort
		// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
		// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

		var pendingRequests = {},
		    ajax;
		// Use a prefilter if available (1.5+)
		if ($.ajaxPrefilter) {
			$.ajaxPrefilter(function (settings, _, xhr) {
				var port = settings.port;
				if (settings.mode === "abort") {
					if (pendingRequests[port]) {
						pendingRequests[port].abort();
					}
					pendingRequests[port] = xhr;
				}
			});
		} else {
			// Proxy ajax
			ajax = $.ajax;
			$.ajax = function (settings) {
				var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
				    port = ("port" in settings ? settings : $.ajaxSettings).port;
				if (mode === "abort") {
					if (pendingRequests[port]) {
						pendingRequests[port].abort();
					}
					pendingRequests[port] = ajax.apply(this, arguments);
					return pendingRequests[port];
				}
				return ajax.apply(this, arguments);
			};
		}
		});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
	!function (a, b) {
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  var c = [],
	      d = a.document,
	      e = c.slice,
	      f = c.concat,
	      g = c.push,
	      h = c.indexOf,
	      i = {},
	      j = i.toString,
	      k = i.hasOwnProperty,
	      l = {},
	      m = "2.2.4",
	      n = function n(a, b) {
	    return new n.fn.init(a, b);
	  },
	      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      p = /^-ms-/,
	      q = /-([\da-z])/gi,
	      r = function r(a, b) {
	    return b.toUpperCase();
	  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
	      return e.call(this);
	    }, get: function get(a) {
	      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
	    }, each: function each(a) {
	      return n.each(this, a);
	    }, map: function map(a) {
	      return this.pushStack(n.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(e.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor();
	    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
	      if (null != (a = arguments[h])) for (b in a) {
	        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
	      }
	    }return g;
	  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === n.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
	    }, isPlainObject: function isPlainObject(a) {
	      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
	    }, globalEval: function globalEval(a) {
	      var b,
	          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
	    }, camelCase: function camelCase(a) {
	      return a.replace(p, "ms-").replace(q, r);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b) {
	      var c,
	          d = 0;if (s(a)) {
	        for (c = a.length; c > d; d++) {
	          if (b.call(a[d], d, a[d]) === !1) break;
	        }
	      } else for (d in a) {
	        if (b.call(a[d], d, a[d]) === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(o, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : h.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
	        a[e++] = b[d];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          e,
	          g = 0,
	          h = [];if (s(a)) for (d = a.length; d > g; g++) {
	        e = b(a[g], g, c), null != e && h.push(e);
	      } else for (g in a) {
	        e = b(a[g], g, c), null != e && h.push(e);
	      }return f.apply([], h);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
	        return a.apply(b || this, d.concat(e.call(arguments)));
	      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
	    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	    i["[object " + b + "]"] = b.toLowerCase();
	  });function s(a) {
	    var b = !!a && "length" in a && a.length,
	        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	  }var t = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ga(),
	        z = ga(),
	        A = ga(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = 1 << 31,
	        D = {}.hasOwnProperty,
	        E = [],
	        F = E.pop,
	        G = E.push,
	        H = E.push,
	        I = E.slice,
	        J = function J(a, b) {
	      for (var c = 0, d = a.length; d > c; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        L = "[\\x20\\t\\r\\n\\f]",
	        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
	        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
	        P = new RegExp(L + "+", "g"),
	        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
	        R = new RegExp("^" + L + "*," + L + "*"),
	        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
	        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
	        U = new RegExp(O),
	        V = new RegExp("^" + M + "$"),
	        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
	        X = /^(?:input|select|textarea|button)$/i,
	        Y = /^h\d$/i,
	        Z = /^[^{]+\{\s*\[native \w/,
	        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        _ = /[+~]/,
	        aa = /'|\\/g,
	        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
	        ca = function ca(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        da = function da() {
	      m();
	    };try {
	      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	    } catch (ea) {
	      H = { apply: E.length ? function (a, b) {
	          G.apply(a, I.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function fa(a, b, d, e) {
	      var f,
	          h,
	          j,
	          k,
	          l,
	          o,
	          r,
	          s,
	          w = b && b.ownerDocument,
	          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
	        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
	          if (9 === x) {
	            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
	          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
	        } else {
	          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
	        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
	          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
	            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
	              r[h] = l + " " + qa(r[h]);
	            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
	          }if (s) try {
	            return H.apply(d, w.querySelectorAll(s)), d;
	          } catch (y) {} finally {
	            k === u && b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(Q, "$1"), b, d, e);
	    }function ga() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ha(a) {
	      return a[u] = !0, a;
	    }function ia(a) {
	      var b = n.createElement("div");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ja(a, b) {
	      var c = a.split("|"),
	          e = c.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function ka(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function la(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function na(a) {
	      return ha(function (b) {
	        return b = +b, ha(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function oa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = fa.support = {}, f = fa.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
	    }, m = fa.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ia(function (a) {
	        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
	        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(ba, ca);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(ba, ca);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
	      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ia(function (a) {
	        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
	        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            g = [a],
	            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
	          g.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          h.unshift(c);
	        }while (g[d] === h[d]) {
	          d++;
	        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
	      }, n) : n;
	    }, fa.matches = function (a, b) {
	      return fa(a, null, null, b);
	    }, fa.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return fa(b, n, null, [a]).length > 0;
	    }, fa.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, fa.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, fa.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, fa.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = fa.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h,
	                t = !1;if (q) {
	              if (f) {
	                while (p) {
	                  m = b;while (m = m[p]) {
	                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                  if (1 === m.nodeType && ++t && m === b) {
	                    k[a] = [w, n, t];break;
	                  }
	                }
	              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
	                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
	              }return t -= e, t === d || t % d === 0 && t / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ha(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ha(function (a) {
	          return function (b) {
	            return fa(a, b).length > 0;
	          };
	        }), contains: ha(function (a) {
	          return a = a.replace(ba, ca), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ha(function (a) {
	          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: function enabled(a) {
	          return a.disabled === !1;
	        }, disabled: function disabled(a) {
	          return a.disabled === !0;
	        }, checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return Y.test(a.nodeName);
	        }, input: function input(a) {
	          return X.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: na(function () {
	          return [0];
	        }), last: na(function (a, b) {
	          return [b - 1];
	        }), eq: na(function (a, b, c) {
	          return [0 > c ? c + b : c];
	        }), even: na(function (a, b) {
	          for (var c = 0; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: na(function (a, b) {
	          for (var c = 1; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: na(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: na(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = la(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = ma(b);
	    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
	    };function qa(a) {
	      for (var b = 0, c = a.length, d = ""; c > b; b++) {
	        d += a[b].value;
	      }return d;
	    }function ra(a, b, c) {
	      var d = b.dir,
	          e = c && "parentNode" === d,
	          f = x++;return b.first ? function (b, c, f) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || e) return a(b, c, f);
	        }
	      } : function (b, c, g) {
	        var h,
	            i,
	            j,
	            k = [w, f];if (g) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || e) {
	            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
	          }
	        }
	      };
	    }function sa(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function ta(a, b, c) {
	      for (var d = 0, e = b.length; e > d; d++) {
	        fa(a, b[d], c);
	      }return c;
	    }function ua(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
	        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
	      }return g;
	    }function va(a, b, c, d, e, f) {
	      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : ua(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
	      });
	    }function wa(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
	        return a === b;
	      }, h, !0), l = ra(function (a) {
	        return J(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; f > i; i++) {
	        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; f > e; e++) {
	              if (d.relative[a[e].type]) break;
	            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
	          }m.push(c);
	        }
	      }return sa(m);
	    }function xa(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            o,
	            q,
	            r = 0,
	            s = "0",
	            t = _f && [],
	            u = [],
	            v = j,
	            x = _f || e && d.find.TAG("*", k),
	            y = w += null == v ? 1 : Math.random() || .1,
	            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
	          if (e && l) {
	            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
	              if (q(l, g || n, h)) {
	                i.push(l);break;
	              }
	            }k && (w = y);
	          }c && ((l = !q && l) && r--, _f && t.push(l));
	        }if (r += s, c && s !== r) {
	          o = 0;while (q = b[o++]) {
	            q(t, u, g, h);
	          }if (_f) {
	            if (r > 0) while (s--) {
	              t[s] || u[s] || (u[s] = F.call(i));
	            }u = ua(u);
	          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
	        }return k && (w = y, j = v), t;
	      };return c ? ha(f) : f;
	    }return h = fa.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, xa(e, d)), f.selector = a;
	      }return f;
	    }, i = fa.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
	        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
	          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
	            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
	          }
	        }
	      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("div"));
	    }), ia(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ja("type|href|height|width", function (a, b, c) {
	      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ia(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ja("value", function (a, b, c) {
	      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	    }), ia(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ja(K, function (a, b, c) {
	      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), fa;
	  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
	    var d = [],
	        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
	      if (1 === a.nodeType) {
	        if (e && n(a).is(c)) break;d.push(a);
	      }
	    }return d;
	  },
	      v = function v(a, b) {
	    for (var c = []; a; a = a.nextSibling) {
	      1 === a.nodeType && a !== b && c.push(a);
	    }return c;
	  },
	      w = n.expr.match.needsContext,
	      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
	    if (n.isFunction(b)) return n.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    });if (b.nodeType) return n.grep(a, function (a) {
	      return a === b !== c;
	    });if ("string" == typeof b) {
	      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
	    }return n.grep(a, function (a) {
	      return h.call(b, a) > -1 !== c;
	    });
	  }n.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, n.fn.extend({ find: function find(a) {
	      var b,
	          c = this.length,
	          d = [],
	          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
	        for (b = 0; c > b; b++) {
	          if (n.contains(e[b], this)) return !0;
	        }
	      }));for (b = 0; c > b; b++) {
	        n.find(a, e[b], d);
	      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
	    }, filter: function filter(a) {
	      return this.pushStack(z(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(z(this, a || [], !0));
	    }, is: function is(a) {
	      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
	    } });var A,
	      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      C = n.fn.init = function (a, b, c) {
	    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
	      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
	        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
	          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
	        }return this;
	      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
	    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
	      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
	      var b = n(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; c > a; a++) {
	          if (n.contains(this, b[a])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function F(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	  }n.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return u(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return u(a, "parentNode", c);
	    }, next: function next(a) {
	      return F(a, "nextSibling");
	    }, prev: function prev(a) {
	      return F(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return u(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return u(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return u(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return u(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return v((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return v(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || n.merge([], a.childNodes);
	    } }, function (a, b) {
	    n.fn[a] = function (c, d) {
	      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var G = /\S+/g;function H(a) {
	    var b = {};return n.each(a.match(G) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }n.Callbacks = function (a) {
	    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f = [],
	        g = [],
	        h = -1,
	        i = function i() {
	      for (e = a.once, d = b = !0; g.length; h = -1) {
	        c = g.shift();while (++h < f.length) {
	          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
	        }
	      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
	    },
	        j = { add: function add() {
	        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
	          n.each(b, function (b, c) {
	            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
	          });
	        }(arguments), c && !b && i()), this;
	      }, remove: function remove() {
	        return n.each(arguments, function (a, b) {
	          var c;while ((c = n.inArray(b, f, c)) > -1) {
	            f.splice(c, 1), h >= c && h--;
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? n.inArray(a, f) > -1 : f.length > 0;
	      }, empty: function empty() {
	        return f && (f = []), this;
	      }, disable: function disable() {
	        return e = g = [], f = c = "", this;
	      }, disabled: function disabled() {
	        return !f;
	      }, lock: function lock() {
	        return e = g = [], c || (f = c = ""), this;
	      }, locked: function locked() {
	        return !!e;
	      }, fireWith: function fireWith(a, c) {
	        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	      }, fire: function fire() {
	        return j.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return j;
	  }, n.extend({ Deferred: function Deferred(a) {
	      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
	          c = "pending",
	          d = { state: function state() {
	          return c;
	        }, always: function always() {
	          return e.done(arguments).fail(arguments), this;
	        }, then: function then() {
	          var a = arguments;return n.Deferred(function (c) {
	            n.each(b, function (b, f) {
	              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
	                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? n.extend(a, d) : d;
	        } },
	          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
	        var g = f[2],
	            h = f[3];d[f[1]] = g.add, h && g.add(function () {
	          c = h;
	        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
	          return e[f[0] + "With"](this === e ? d : this, arguments), this;
	        }, e[f[0] + "With"] = g.fireWith;
	      }), d.promise(e), a && a.call(e, e), e;
	    }, when: function when(a) {
	      var b = 0,
	          c = e.call(arguments),
	          d = c.length,
	          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
	          g = 1 === f ? a : n.Deferred(),
	          h = function h(a, b, c) {
	        return function (d) {
	          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
	        };
	      },
	          i,
	          j,
	          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
	        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
	      }return f || g.resolveWith(k, c), g.promise();
	    } });var I;n.fn.ready = function (a) {
	    return n.ready.promise().done(a), this;
	  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? n.readyWait++ : n.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
	    } });function J() {
	    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
	  }n.ready.promise = function (b) {
	    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
	  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === n.type(c)) {
	      e = !0;for (h in c) {
	        K(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
	      return j.call(n(a), c);
	    })), b)) for (; i > h; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      L = function L(a) {
	    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	  };function M() {
	    this.expando = n.expando + M.uid++;
	  }M.uid = 1, M.prototype = { register: function register(a, b) {
	      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
	    }, cache: function cache(a) {
	      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
	        e[d] = b[d];
	      }return e;
	    }, get: function get(a, b) {
	      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
	    }, access: function access(a, b, c) {
	      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d,
	          e,
	          f = a[this.expando];if (void 0 !== f) {
	        if (void 0 === b) this.register(a);else {
	          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
	            delete f[d[c]];
	          }
	        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
	      }
	    }, hasData: function hasData(a) {
	      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
	    } };var N = new M(),
	      O = new M(),
	      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      Q = /[A-Z]/g;function R(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
	      try {
	        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
	      } catch (e) {}O.set(a, b, c);
	    } else c = void 0;return c;
	  }n.extend({ hasData: function hasData(a) {
	      return O.hasData(a) || N.hasData(a);
	    }, data: function data(a, b, c) {
	      return O.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      O.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return N.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      N.remove(a, b);
	    } }), n.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
	          }N.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
	        O.set(this, a);
	      }) : K(this, function (b) {
	        var c, d;if (f && void 0 === b) {
	          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
	        } else d = n.camelCase(a), this.each(function () {
	          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        O.remove(this, a);
	      });
	    } }), n.extend({ queue: function queue(a, b, c) {
	      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = n.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = n._queueHooks(a, b),
	          g = function g() {
	        n.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
	          N.remove(a, [b + "queue", c]);
	        }) });
	    } }), n.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        n.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = n.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
	      U = ["Top", "Right", "Bottom", "Left"],
	      V = function V(a, b) {
	    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	  };function W(a, b, c, d) {
	    var e,
	        f = 1,
	        g = 20,
	        h = d ? function () {
	      return d.cur();
	    } : function () {
	      return n.css(a, b, "");
	    },
	        i = h(),
	        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
	        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
	      j = j || k[3], c = c || [], k = +i || 1;do {
	        f = f || ".5", k /= f, n.style(a, b, k + j);
	      } while (f !== (f = h() / i) && 1 !== f && --g);
	    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	  }var X = /^(?:checkbox|radio)$/i,
	      Y = /<([\w:-]+)/,
	      Z = /^$|\/(?:java|ecma)script/i,
	      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
	    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	  }function aa(a, b) {
	    for (var c = 0, d = a.length; d > c; c++) {
	      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
	    }
	  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
	    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
	      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
	        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
	          g = g.lastChild;
	        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
	      } else m.push(b.createTextNode(f));
	    }l.textContent = "", o = 0;while (f = m[o++]) {
	      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
	        k = 0;while (f = g[k++]) {
	          Z.test(f.type || "") && c.push(f);
	        }
	      }
	    }return l;
	  }!function () {
	    var a = d.createDocumentFragment(),
	        b = a.appendChild(d.createElement("div")),
	        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  }();var da = /^key/,
	      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
	    return !0;
	  }function ha() {
	    return !1;
	  }function ia() {
	    try {
	      return d.activeElement;
	    } catch (a) {}
	  }function ja(a, b, c, d, e, f) {
	    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
	      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
	        ja(a, h, c, d, b[h], f);
	      }return a;
	    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
	      return n().off(a), g.apply(this, arguments);
	    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
	      n.event.add(this, b, e, d, c);
	    });
	  }n.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = N.get(a);if (r) {
	        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
	          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
	          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
	        }
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
	        b = (b || "").match(G) || [""], j = b.length;while (j--) {
	          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
	            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
	              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
	            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
	          } else for (o in i) {
	            n.event.remove(a, o + b[j], c, d, !0);
	          }
	        }n.isEmptyObject(i) && N.remove(a, "handle events");
	      }
	    }, dispatch: function dispatch(a) {
	      a = n.event.fix(a);var b,
	          c,
	          d,
	          f,
	          g,
	          h = [],
	          i = e.call(arguments),
	          j = (N.get(this, "events") || {})[a.type] || [],
	          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
	        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
	          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
	            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
	        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
	          for (d = [], c = 0; h > c; c++) {
	            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
	          }d.length && g.push({ elem: i, handlers: d });
	        }
	      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
	        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
	      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
	        var c,
	            e,
	            f,
	            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
	      } }, fix: function fix(a) {
	      if (a[n.expando]) return a;var b,
	          c,
	          e,
	          f = a.type,
	          g = a,
	          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
	        c = e[b], a[c] = g[c];
	      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
	        }, _default: function _default(a) {
	          return n.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } } }, n.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c);
	  }, n.Event = function (a, b) {
	    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), n.fn.extend({ on: function on(a, b, c, d) {
	      return ja(this, a, b, c, d);
	    }, one: function one(a, b, c, d) {
	      return ja(this, a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
	        n.event.remove(this, a, c, b);
	      });
	    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	      la = /<script|<style|<link/i,
	      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      na = /^true\/(.*)/,
	      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
	    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	  }function qa(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function ra(a) {
	    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function sa(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) {
	          for (c = 0, d = j[e].length; d > c; c++) {
	            n.event.add(b, e, j[e][c]);
	          }
	        }
	      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
	    }
	  }function ta(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }function ua(a, b, c, d) {
	    b = f.apply([], b);var e,
	        g,
	        h,
	        i,
	        j,
	        k,
	        m = 0,
	        o = a.length,
	        p = o - 1,
	        q = b[0],
	        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
	      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
	    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
	      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
	        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
	      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
	        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
	      }
	    }return a;
	  }function va(a, b, c) {
	    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
	      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
	    }return a;
	  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
	      return a.replace(ka, "<$1></$2>");
	    }, clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
	        ta(f[d], g[d]);
	      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
	        sa(f[d], g[d]);
	      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
	        if (L(c)) {
	          if (b = c[N.expando]) {
	            if (b.events) for (d in b.events) {
	              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
	            }c[N.expando] = void 0;
	          }c[O.expando] && (c[O.expando] = void 0);
	        }
	      }
	    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
	      return va(this, a, !0);
	    }, remove: function remove(a) {
	      return va(this, a);
	    }, text: function text(a) {
	      return K(this, function (a) {
	        return void 0 === a ? n.text(this) : this.empty().each(function () {
	          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return ua(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = pa(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return ua(this, arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = pa(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return ua(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return ua(this, arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
	        return n.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return K(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = n.htmlPrefilter(a);try {
	            for (; d > c; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = [];return ua(this, arguments, function (b) {
	        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
	      }, a);
	    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    n.fn[a] = function (a) {
	      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
	        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
	      }return this.pushStack(d);
	    };
	  });var wa,
	      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
	    var c = n(b.createElement(a)).appendTo(b.body),
	        d = n.css(c[0], "display");return c.detach(), d;
	  }function za(a) {
	    var b = d,
	        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
	  }var Aa = /^margin/,
	      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
	      Ca = function Ca(b) {
	    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	  },
	      Da = function Da(a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  },
	      Ea = d.documentElement;!function () {
	    var b,
	        c,
	        e,
	        f,
	        g = d.createElement("div"),
	        h = d.createElement("div");if (h.style) {
	      var _i = function _i() {
	        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
	      };

	      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
	          return _i(), b;
	        }, boxSizingReliable: function boxSizingReliable() {
	          return null == c && _i(), c;
	        }, pixelMarginRight: function pixelMarginRight() {
	          return null == c && _i(), e;
	        }, reliableMarginLeft: function reliableMarginLeft() {
	          return null == c && _i(), f;
	        }, reliableMarginRight: function reliableMarginRight() {
	          var b,
	              c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
	        } });
	    }
	  }();function Fa(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
	  }function Ga(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }var Ha = /^(none|table(?!-c[ea]).+)/,
	      Ia = { position: "absolute", visibility: "hidden", display: "block" },
	      Ja = { letterSpacing: "0", fontWeight: "400" },
	      Ka = ["Webkit", "O", "Moz", "ms"],
	      La = d.createElement("div").style;function Ma(a) {
	    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
	        c = Ka.length;while (c--) {
	      if (a = Ka[c] + b, a in La) return a;
	    }
	  }function Na(a, b, c) {
	    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	  }function Oa(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
	      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
	    }return g;
	  }function Pa(a, b, c) {
	    var d = !0,
	        e = "width" === b ? a.offsetWidth : a.offsetHeight,
	        f = Ca(a),
	        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
	      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
	  }function Qa(a, b) {
	    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
	      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
	    }for (g = 0; h > g; g++) {
	      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
	    }return a;
	  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Fa(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = n.camelCase(b),
	            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
	    } }), n.each(["height", "width"], function (a, b) {
	    n.cssHooks[b] = { get: function get(a, c, d) {
	        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
	          return Pa(a, b, d);
	        }) : Pa(a, b, d) : void 0;
	      }, set: function set(a, c, d) {
	        var e,
	            f = d && Ca(a),
	            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
	      } };
	  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
	    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
	      return a.getBoundingClientRect().left;
	    })) + "px" : void 0;
	  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
	    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
	  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    n.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
	          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
	  }), n.fn.extend({ css: function css(a, b) {
	      return K(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (n.isArray(b)) {
	          for (d = Ca(a), e = b.length; e > g; g++) {
	            f[b[g]] = n.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
	      }, a, b, arguments.length > 1);
	    }, show: function show() {
	      return Qa(this, !0);
	    }, hide: function hide() {
	      return Qa(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        V(this) ? n(this).show() : n(this).hide();
	      });
	    } });function Ra(a, b, c, d, e) {
	    return new Ra.prototype.init(a, b, c, d, e);
	  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
	    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
	        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	      }, set: function set(a) {
	        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
	      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, n.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
	      Ta,
	      Ua = /^(?:toggle|show|hide)$/,
	      Va = /queueHooks$/;function Wa() {
	    return a.setTimeout(function () {
	      Sa = void 0;
	    }), Sa = n.now();
	  }function Xa(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
	      c = U[d], e["margin" + c] = e["padding" + c] = a;
	    }return b && (e.opacity = e.width = a), e;
	  }function Ya(a, b, c) {
	    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function Za(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = this,
	        m = {},
	        o = a.style,
	        p = a.nodeType && V(a),
	        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
	      h.unqueued || i();
	    }), h.unqueued++, l.always(function () {
	      l.always(function () {
	        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
	      });
	    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
	      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	    }));for (d in b) {
	      if (e = b[d], Ua.exec(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
	          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	        }m[d] = q && q[d] || n.style(a, d);
	      } else j = void 0;
	    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
	      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
	        n(a).hide();
	      }), l.done(function () {
	        var b;N.remove(a, "fxshow");for (b in m) {
	          n.style(a, b, m[b]);
	        }
	      });for (d in m) {
	        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	      }
	    }
	  }function $a(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function _a(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = _a.prefilters.length,
	        h = n.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
	          j.tweens[c].run(1);
	        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
	      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
	    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
	        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
	      }] }, tweener: function tweener(a, b) {
	      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
	        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
	      }
	    }, prefilters: [Za], prefilter: function prefilter(a, b) {
	      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
	    } }), n.speed = function (a, b, c) {
	    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
	      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
	    }, d;
	  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = n.isEmptyObject(a),
	          f = n.speed(b, c, d),
	          g = function g() {
	        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = n.timers,
	            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && Va.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }!b && c || n.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = N.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = n.timers,
	            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; g > b; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), n.each(["toggle", "show", "hide"], function (a, b) {
	    var c = n.fn[b];n.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
	    };
	  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    n.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), n.timers = [], n.fx.tick = function () {
	    var a,
	        b = 0,
	        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
	      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
	    }c.length || n.fx.stop(), Sa = void 0;
	  }, n.fx.timer = function (a) {
	    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	  }, n.fx.interval = 13, n.fx.start = function () {
	    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
	  }, n.fx.stop = function () {
	    a.clearInterval(Ta), Ta = null;
	  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
	    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
	      var e = a.setTimeout(c, b);d.stop = function () {
	        a.clearTimeout(e);
	      };
	    });
	  }, function () {
	    var a = d.createElement("input"),
	        b = d.createElement("select"),
	        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
	  }();var ab,
	      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
	      return K(this, n.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        n.removeAttr(this, a);
	      });
	    } }), n.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d,
	          e = 0,
	          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
	        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
	      }
	    } }), ab = { set: function set(a, b, c) {
	      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
	      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
	    };
	  });var cb = /^(?:input|select|textarea|button)$/i,
	      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
	      return K(this, n.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[n.propFix[a] || a];
	      });
	    } }), n.extend({ prop: function prop(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
	        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    }, set: function set(a) {
	      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    n.propFix[this.toLowerCase()] = this;
	  });var eb = /[\t\r\n\f]/g;function fb(a) {
	    return a.getAttribute && a.getAttribute("class") || "";
	  }n.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).addClass(a.call(this, b, fb(this)));
	      });if ("string" == typeof a && a) {
	        b = a.match(G) || [];while (c = this[i++]) {
	          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
	            g = 0;while (f = b[g++]) {
	              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
	            }h = n.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i = 0;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).removeClass(a.call(this, b, fb(this)));
	      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
	        b = a.match(G) || [];while (c = this[i++]) {
	          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
	            g = 0;while (f = b[g++]) {
	              while (d.indexOf(" " + f + " ") > -1) {
	                d = d.replace(" " + f + " ", " ");
	              }
	            }h = n.trim(d), e !== h && c.setAttribute("class", h);
	          }
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
	        n(this).toggleClass(a.call(this, c, fb(this), b), b);
	      }) : this.each(function () {
	        var b, d, e, f;if ("string" === c) {
	          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
	      });
	    }, hasClass: function hasClass(a) {
	      var b,
	          c,
	          d = 0;b = " " + a + " ";while (c = this[d++]) {
	        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
	      }return !1;
	    } });var gb = /\r/g,
	      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
	      }
	    } }), n.extend({ valHooks: { option: { get: function get(a) {
	          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
	            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
	              if (b = n(c).val(), f) return b;g.push(b);
	            }
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = n.makeArray(b),
	              g = e.length;while (g--) {
	            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
	          }return c || (a.selectedIndex = -1), f;
	        } } } }), n.each(["radio", "checkbox"], function () {
	    n.valHooks[this] = { set: function set(a, b) {
	        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
	      } }, l.checkOn || (n.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
	      var g,
	          h,
	          i,
	          j,
	          l,
	          m,
	          o,
	          p = [e || d],
	          q = k.call(b, "type") ? b.type : b,
	          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
	        if (!f && !o.noBubble && !n.isWindow(e)) {
	          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
	            p.push(h), i = h;
	          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
	        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
	          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
	        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
	      }
	    }, simulate: function simulate(a, b, c) {
	      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
	    } }), n.fn.extend({ trigger: function trigger(a, b) {
	      return this.each(function () {
	        n.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
	    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	    n.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), n.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      n.event.simulate(b, a.target, n.event.fix(a));
	    };n.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
	      } };
	  });var jb = a.location,
	      kb = n.now(),
	      lb = /\?/;n.parseJSON = function (a) {
	    return JSON.parse(a + "");
	  }, n.parseXML = function (b) {
	    var c;if (!b || "string" != typeof b) return null;try {
	      c = new a.DOMParser().parseFromString(b, "text/xml");
	    } catch (d) {
	      c = void 0;
	    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
	  };var mb = /#.*$/,
	      nb = /([?&])_=[^&]*/,
	      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      qb = /^(?:GET|HEAD)$/,
	      rb = /^\/\//,
	      sb = {},
	      tb = {},
	      ub = "*/".concat("*"),
	      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
	        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function xb(a, b, c, d) {
	    var e = {},
	        f = a === tb;function g(h) {
	      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function yb(a, b) {
	    var c,
	        d,
	        e = n.ajaxSettings.flatOptions || {};for (c in b) {
	      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
	    }return d && n.extend(!0, a, d), a;
	  }function zb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (d) for (e in h) {
	      if (h[e] && h[e].test(d)) {
	        i.unshift(e);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	  }function Ab(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
	    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m = n.ajaxSetup({}, c),
	          o = m.context || m,
	          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
	          q = n.Deferred(),
	          r = n.Callbacks("once memory"),
	          s = m.statusCode || {},
	          t = {},
	          u = {},
	          v = 0,
	          w = "canceled",
	          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (2 === v) {
	            if (!h) {
	              h = {};while (b = ob.exec(g)) {
	                h[b[1].toLowerCase()] = b[2];
	              }
	            }b = h[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === v ? g : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return v || (m.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (2 > v) for (b in a) {
	            s[b] = [s[b], a[b]];
	          } else x.always(a[x.status]);return this;
	        }, abort: function abort(a) {
	          var b = a || w;return e && e.abort(b), z(0, b), this;
	        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
	        j = d.createElement("a");try {
	          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
	        } catch (y) {
	          m.crossDomain = !0;
	        }
	      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
	        x.setRequestHeader(l, m.headers[l]);
	      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
	        x[l](m[l]);
	      }if (e = xb(tb, m, c, x)) {
	        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
	          x.abort("timeout");
	        }, m.timeout));try {
	          v = 1, e.send(t, z);
	        } catch (y) {
	          if (!(2 > v)) throw y;z(-1, y);
	        }
	      } else z(-1, "No Transport");function z(b, c, d, h) {
	        var j,
	            l,
	            t,
	            u,
	            w,
	            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
	      }return x;
	    }, getJSON: function getJSON(a, b, c) {
	      return n.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return n.get(a, void 0, b, "script");
	    } }), n.each(["get", "post"], function (a, b) {
	    n[b] = function (a, c, d, e) {
	      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
	    };
	  }), n._evalUrl = function (a) {
	    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	  }, n.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapAll(a.call(this, b));
	      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) {
	          a = a.firstElementChild;
	        }return a;
	      }).append(this)), this);
	    }, wrapInner: function wrapInner(a) {
	      return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapInner(a.call(this, b));
	      }) : this.each(function () {
	        var b = n(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = n.isFunction(a);return this.each(function (c) {
	        n(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
	      }).end();
	    } }), n.expr.filters.hidden = function (a) {
	    return !n.expr.filters.visible(a);
	  }, n.expr.filters.visible = function (a) {
	    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
	  };var Bb = /%20/g,
	      Cb = /\[\]$/,
	      Db = /\r?\n/g,
	      Eb = /^(?:submit|button|image|reset|file)$/i,
	      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
	    var e;if (n.isArray(b)) n.each(b, function (b, e) {
	      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
	      Gb(a + "[" + e + "]", b[e], c, d);
	    }
	  }n.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      Gb(c, a[c], b, e);
	    }return d.join("&").replace(Bb, "+");
	  }, n.fn.extend({ serialize: function serialize() {
	      return n.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
	      }).map(function (a, b) {
	        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
	          return { name: b.name, value: a.replace(Db, "\r\n") };
	        }) : { name: b.name, value: c.replace(Db, "\r\n") };
	      }).get();
	    } }), n.ajaxSettings.xhr = function () {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  };var Hb = { 0: 200, 1223: 204 },
	      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
	    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
	        var g,
	            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
	          h[g] = b.xhrFields[g];
	        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
	          h.setRequestHeader(g, e[g]);
	        }_c = function c(a) {
	          return function () {
	            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
	          };
	        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
	          4 === h.readyState && a.setTimeout(function () {
	            _c && d();
	          });
	        }, _c = _c("abort");try {
	          h.send(b.hasContent && b.data || null);
	        } catch (i) {
	          if (_c) throw i;
	        }
	      }, abort: function abort() {
	        _c && _c();
	      } } : void 0;
	  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
	        return n.globalEval(a), a;
	      } } }), n.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), n.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, _c2;return { send: function send(e, f) {
	          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
	            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
	          }), d.head.appendChild(b[0]);
	        }, abort: function abort() {
	          _c2 && _c2();
	        } };
	    }
	  });var Jb = [],
	      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
	    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || n.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script") : void 0;
	  }), n.parseHTML = function (a, b, c) {
	    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
	        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
	  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
	    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
	    }).always(c && function (a, b) {
	      g.each(function () {
	        c.apply(this, f || [a.responseText, b, a]);
	      });
	    }), this;
	  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    n.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), n.expr.filters.animated = function (a) {
	    return n.grep(n.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };function Mb(a) {
	    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }n.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.css(a, "position"),
	          l = n(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, n.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        n.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d = this[0],
	          e = { top: 0, left: 0 },
	          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || Ea;
	      });
	    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = "pageYOffset" === b;n.fn[a] = function (d) {
	      return K(this, function (a, d, e) {
	        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
	      }, a, d, arguments.length);
	    };
	  }), n.each(["top", "left"], function (a, b) {
	    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
	      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
	    });
	  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
	    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      n.fn[d] = function (d, e) {
	        var f = arguments.length && (c || "boolean" != typeof d),
	            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
	          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
	        }, b, f ? d : void 0, f, null);
	      };
	    });
	  }), n.fn.extend({ bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    }, size: function size() {
	      return this.length;
	    } }), n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(6) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Nb = a.jQuery,
	      Ob = a.$;return n.noConflict = function (b) {
	    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
	  }, b || (a.jQuery = a.$ = n), n;
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! Magnific Popup - v1.1.0 - 2016-02-20
	 * http://dimsemenov.com/plugins/magnific-popup/
	 * Copyright (c) 2016 Dmitry Semenov; */
	!function (a) {
	   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
	}(function (a) {
	  var b,
	      c,
	      d,
	      e,
	      f,
	      g,
	      h = "Close",
	      i = "BeforeClose",
	      j = "AfterClose",
	      k = "BeforeAppend",
	      l = "MarkupParse",
	      m = "Open",
	      n = "Change",
	      o = "mfp",
	      p = "." + o,
	      q = "mfp-ready",
	      r = "mfp-removing",
	      s = "mfp-prevent-close",
	      t = function t() {},
	      u = !!window.jQuery,
	      v = a(window),
	      w = function w(a, c) {
	    b.ev.on(o + a + p, c);
	  },
	      x = function x(b, c, d, e) {
	    var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
	  },
	      y = function y(c, d) {
	    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
	  },
	      z = function z(c) {
	    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
	  },
	      A = function A() {
	    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
	  },
	      B = function B() {
	    var a = document.createElement("p").style,
	        b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
	      if (b.pop() + "Transition" in a) return !0;
	    }return !1;
	  };t.prototype = { constructor: t, init: function init() {
	      var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
	    }, open: function open(c) {
	      var e;if (c.isObj === !1) {
	        b.items = c.items.toArray(), b.index = 0;var g,
	            h = c.items;for (e = 0; e < h.length; e++) {
	          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
	            b.index = e;break;
	          }
	        }
	      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
	        b.close();
	      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
	        b._checkIfClose(a.target) && b.close();
	      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
	        var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
	      }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
	        c.close_replaceWith = z(d.type);
	      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
	        27 === a.keyCode && b.close();
	      }), v.on("resize" + p, function () {
	        b.updateSize();
	      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
	          n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
	        var o = b._getScrollbarSize();o && (n.marginRight = o);
	      }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
	        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
	      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
	    }, close: function close() {
	      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
	        b._close();
	      }, b.st.removalDelay)) : b._close());
	    }, _close: function _close() {
	      y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
	        var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
	      }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
	    }, updateSize: function updateSize(a) {
	      if (b.isIOS) {
	        var c = document.documentElement.clientWidth / window.innerWidth,
	            d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
	      } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
	    }, updateItemHTML: function updateItemHTML() {
	      var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
	        var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
	      }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
	    }, appendContent: function appendContent(a, c) {
	      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
	    }, parseEl: function parseEl(c) {
	      var d,
	          e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
	        for (var f = b.types, g = 0; g < f.length; g++) {
	          if (e.el.hasClass("mfp-" + f[g])) {
	            d = f[g];break;
	          }
	        }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
	      }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
	    }, addGroup: function addGroup(a, c) {
	      var d = function d(_d) {
	        _d.mfpEl = this, b._openClick(_d, a, c);
	      };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
	    }, _openClick: function _openClick(c, d, e) {
	      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
	        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
	          if (!g.call(b)) return !0;
	        } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
	      }
	    }, updateStatus: function updateStatus(a, d) {
	      if (b.preloader) {
	        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
	          a.stopImmediatePropagation();
	        }), b.container.addClass("mfp-s-" + a), c = a;
	      }
	    }, _checkIfClose: function _checkIfClose(c) {
	      if (!a(c).hasClass(s)) {
	        var d = b.st.closeOnContentClick,
	            e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
	          if (d) return !0;
	        } else if (e && a.contains(document, c)) return !0;return !1;
	      }
	    }, _addClassToMFP: function _addClassToMFP(a) {
	      b.bgOverlay.addClass(a), b.wrap.addClass(a);
	    }, _removeClassFromMFP: function _removeClassFromMFP(a) {
	      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
	    }, _hasScrollBar: function _hasScrollBar(a) {
	      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
	    }, _setFocus: function _setFocus() {
	      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
	    }, _onFocusIn: function _onFocusIn(c) {
	      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
	    }, _parseMarkup: function _parseMarkup(b, c, d) {
	      var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
	        if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
	          var f = b.find(p + "-" + e[0]);if (f.length > 0) {
	            var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
	          }
	        } else b.find(p + "-" + c).html(d);
	      });
	    }, _getScrollbarSize: function _getScrollbarSize() {
	      if (void 0 === b.scrollbarSize) {
	        var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
	      }return b.scrollbarSize;
	    } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
	      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
	    }, close: function close() {
	      return a.magnificPopup.instance && a.magnificPopup.instance.close();
	    }, registerModule: function registerModule(b, c) {
	      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
	    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
	    A();var d = a(this);if ("string" == typeof c) {
	      if ("open" === c) {
	        var e,
	            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
	            g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
	      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
	    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
	  };var C,
	      D,
	      E,
	      F = "inline",
	      G = function G() {
	    E && (D.after(E.addClass(C)).detach(), E = null);
	  };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
	        b.types.push(F), w(h + "." + F, function () {
	          G();
	        });
	      }, getInline: function getInline(c, d) {
	        if (G(), c.src) {
	          var e = b.st.inline,
	              f = a(c.src);if (f.length) {
	            var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
	          } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
	        }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
	      } } });var H,
	      I = "ajax",
	      J = function J() {
	    H && a(document.body).removeClass(H);
	  },
	      K = function K() {
	    J(), b.req && b.req.abort();
	  };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
	        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
	      }, getAjax: function getAjax(c) {
	        H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
	            var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
	              b.wrap.addClass(q);
	            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
	          }, error: function error() {
	            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
	          } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
	      } } });var L,
	      M = function M(c) {
	    if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
	      if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
	    }return "";
	  };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
	        var c = b.st.image,
	            d = ".image";b.types.push("image"), w(m + d, function () {
	          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
	        }), w(h + d, function () {
	          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
	        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
	      }, resizeImage: function resizeImage() {
	        var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
	          var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
	        }
	      }, _onImageHasSize: function _onImageHasSize(a) {
	        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
	      }, findImageSize: function findImageSize(a) {
	        var c = 0,
	            d = a.img[0],
	            e = function e(f) {
	          L && clearInterval(L), L = setInterval(function () {
	            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
	          }, f);
	        };e(1);
	      }, getImage: function getImage(c, d) {
	        var e = 0,
	            f = function f() {
	          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
	        },
	            g = function g() {
	          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
	        },
	            h = b.st.image,
	            i = d.find(".mfp-img");if (i.length) {
	          var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
	        }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
	      } } });var N,
	      O = function O() {
	    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
	  };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
	        return a.is("img") ? a : a.find("img");
	      } }, proto: { initZoom: function initZoom() {
	        var a,
	            c = b.st.zoom,
	            d = ".zoom";if (c.enabled && b.supportsTransition) {
	          var e,
	              f,
	              g = c.duration,
	              j = function j(a) {
	            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
	                d = "all " + c.duration / 1e3 + "s " + c.easing,
	                e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
	                f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
	          },
	              k = function k() {
	            b.content.css("visibility", "visible");
	          };w("BuildControls" + d, function () {
	            if (b._allowZoom()) {
	              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
	                f.css(b._getOffset(!0)), e = setTimeout(function () {
	                  k(), setTimeout(function () {
	                    f.remove(), a = f = null, y("ZoomAnimationEnded");
	                  }, 16);
	                }, g);
	              }, 16);
	            }
	          }), w(i + d, function () {
	            if (b._allowZoom()) {
	              if (clearTimeout(e), b.st.removalDelay = g, !a) {
	                if (a = b._getItemToZoom(), !a) return;f = j(a);
	              }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
	                f.css(b._getOffset());
	              }, 16);
	            }
	          }), w(h + d, function () {
	            b._allowZoom() && (k(), f && f.remove(), a = null);
	          });
	        }
	      }, _allowZoom: function _allowZoom() {
	        return "image" === b.currItem.type;
	      }, _getItemToZoom: function _getItemToZoom() {
	        return b.currItem.hasSize ? b.currItem.img : !1;
	      }, _getOffset: function _getOffset(c) {
	        var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
	            f = parseInt(d.css("padding-top"), 10),
	            g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
	      } } });var P = "iframe",
	      Q = "//about:blank",
	      R = function R(a) {
	    if (b.currTemplate[P]) {
	      var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
	    }
	  };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
	        b.types.push(P), w("BeforeChange", function (a, b, c) {
	          b !== c && (b === P ? R() : c === P && R(!0));
	        }), w(h + "." + P, function () {
	          R();
	        });
	      }, getIframe: function getIframe(c, d) {
	        var e = c.src,
	            f = b.st.iframe;a.each(f.patterns, function () {
	          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
	        });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
	      } } });var S = function S(a) {
	    var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
	  },
	      T = function T(a, b, c) {
	    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
	  };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
	        var c = b.st.gallery,
	            e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
	          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
	            return b.items.length > 1 ? (b.next(), !1) : void 0;
	          }), d.on("keydown" + e, function (a) {
	            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
	          });
	        }), w("UpdateStatus" + e, function (a, c) {
	          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
	        }), w(l + e, function (a, d, e, f) {
	          var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
	        }), w("BuildControls" + e, function () {
	          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
	            var d = c.arrowMarkup,
	                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
	                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
	              b.prev();
	            }), f.click(function () {
	              b.next();
	            }), b.container.append(e.add(f));
	          }
	        }), w(n + e, function () {
	          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
	            b.preloadNearbyImages(), b._preloadTimeout = null;
	          }, 16);
	        }), void w(h + e, function () {
	          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
	        })) : !1;
	      }, next: function next() {
	        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
	      }, prev: function prev() {
	        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
	      }, goTo: function goTo(a) {
	        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
	      }, preloadNearbyImages: function preloadNearbyImages() {
	        var a,
	            c = b.st.gallery.preload,
	            d = Math.min(c[0], b.items.length),
	            e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
	          b._preloadItem(b.index + a);
	        }for (a = 1; a <= (b.direction ? d : e); a++) {
	          b._preloadItem(b.index - a);
	        }
	      }, _preloadItem: function _preloadItem(c) {
	        if (c = S(c), !b.items[c].preloaded) {
	          var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
	            d.hasSize = !0;
	          }).on("error.mfploader", function () {
	            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
	          }).attr("src", d.src)), d.preloaded = !0;
	        }
	      } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
	        return a.src.replace(/\.\w+$/, function (a) {
	          return "@2x" + a;
	        });
	      }, ratio: 1 }, proto: { initRetina: function initRetina() {
	        if (window.devicePixelRatio > 1) {
	          var a = b.st.retina,
	              c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
	            b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
	          }), w("ElementParse." + U, function (b, d) {
	            d.src = a.replaceSrc(d, c);
	          }));
	        }
	      } } }), A();
		});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Class toggler on parent
	 * @param {string} [options.activeClass='is-active']
	 * @param {string|jquery} [options.targetSelector='.js-dropdown-toggle']
	 * @param {boolean} [options.toggleOnBlur=false]
	 * @param {boolean} [options.debug=false] - Enables returnes
	 */
	$.fn.wzmClassToggle = function (options) {

		options = options || {};

		var activeClassName = options.activeClass || 'is-active',
		    toggleSelector = options.toggleSelector || '.js-class-toggle',
		    toggleOnBlur = options.toggleOnBlur || false,
		    collectionSelector = '[data-toggle="initialized"]',
		    debug = options.debug || false;

		if (debug) {
			console.log("activeClassName:", activeClassName);
			console.log("toggleSelector:", toggleSelector);
			console.log("toggleOnBlur:", toggleOnBlur);
			console.log("collectionSelector:", collectionSelector);
		}

		return this.each(function () {
			if (debug) {
				console.log(this);
				console.log('data:', !!$(this).data('wzmClassToggle'));
			}
			if (!!$(this).data('wzmClassToggle') == false) {
				var target;
				$(this).attr('data-toggle', 'initialized');
				$(this).on('click', toggleSelector, function (e) {
					e.preventDefault();
					target = e.delegateTarget;
					if (debug) {
						console.log("click:target:", target);
					}
					if (toggleOnBlur) {
						$(collectionSelector).not(e.delegateTarget).removeClass(activeClassName);
					}
					$(e.delegateTarget).toggleClass(activeClassName);

					if (toggleOnBlur) {
						$(document).on('click touchstart', function (e) {
							if (!$(e.target).closest(collectionSelector).length) {
								$(target).removeClass(activeClassName);
								$(document).off('click touchstart');
							}
						});
					}
				});
				$(this).data('wzmClassToggle', true);
			}
		});
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDhmOGJlOWQwYWQ3MjcyY2MyMWE4Iiwid2VicGFjazovLy9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvd0hUTUwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL3NyYy9qcy92ZW5kb3IvanF1ZXJ5LXZhbGlkYXRlLmpzIiwid2VicGFjazovLy9zcmMvanMvdmVuZG9yL2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL3ZlbmRvci9tYWduaWZpYy1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvd2V6b21fY2xhc3NfdG9nZ2xlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvTWVkaWEvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGY4YmU5ZDBhZDcyNzJjYzIxYTgiLCJyZXF1aXJlKCd3SFRNTCcpO1xyXG5yZXF1aXJlKCd3ZXpvbV9jbGFzc190b2dnbGVyJyk7XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcblx0c3ZnNGV2ZXJ5Ym9keSh7fSk7XHJcblx0d0hUTUwuZm9ybVZhbGlkYXRpb24oKTtcclxuXHR3SFRNTC5tZnBBamF4KCk7XHJcblxyXG5cdGpRdWVyeS5mbi5Gb3JjZU51bWVyaWNPbmx5ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQodGhpcykua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHZhciBrZXkgPSBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZSB8fCAwO1xyXG5cdFx0XHRcdHJldHVybiAoa2V5ID09IDggfHwga2V5ID09IDkgfHwga2V5ID09IDQ2IHx8IChrZXkgPj0gMzcgJiYga2V5IDw9IDQwKSB8fCAoa2V5ID49IDQ4ICYmIGtleSA8PSA1NykgfHwgKGtleSA+PSA5NiAmJiBrZXkgPD0gMTA1KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyrQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQutCw0YDRgtGLINC90LAg0YHRgtGA0LDQvdC40YbQtSDQutC+0L3RgtCw0LrRgtGLKi9cclxuXHRsZXQgJGdvb2dsZU1hcHMgPSAkKCcuZ29vZ2xlbWFwJyk7XHJcblx0aWYgKCRnb29nbGVNYXBzLmxlbmd0aCl7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgaW5pdEdvb2dsZU1hcHMgPSByZXF1aXJlKCdnbWFwJyk7XHJcblx0XHRcdCQoJy5nb29nbGVtYXAnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcclxuXHRcdFx0XHR2YXIgbGF0ID0gJChlbCkuZGF0YSgnbGF0Jyk7XHJcblx0XHRcdFx0dmFyIGxuZyA9ICQoZWwpLmRhdGEoJ2xuZycpO1xyXG5cdFx0XHRcdHZhciB6b29tID0gJChlbCkuZGF0YSgnem9vbScpIHx8IDE4O1xyXG5cdFx0XHRcdHZhciBtYXJrZXIgPSAkKGVsKS5kYXRhKCdtYXJrZXInKTtcclxuXHRcdFx0XHRpbml0R29vZ2xlTWFwcyhlbCwgbGF0LCBsbmcsIHpvb20sIG1hcmtlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQutGA0LjQv9GC0LAg0LvQtdCy0L7Qs9C+INC80LXQvdGOICovXHJcblx0bGV0ICRtdWx0aUxldmVsTWVudSA9ICQoJy5qcy1tdWx0aUxldmVsTWVudScpO1xyXG5cdGlmICgkbXVsdGlMZXZlbE1lbnUubGVuZ3RoKSB7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgaW5pdEFzaWRlTWVudSA9IHJlcXVpcmUoJ2FzaWRlTWVudScpO1xyXG5cdFx0XHRpbml0QXNpZGVNZW51KCRtdWx0aUxldmVsTWVudSk7XHJcblx0XHR9KVxyXG5cdH1cclxuXHQvKiDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC80LDQs9C90LjRhNC40LrQsCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LPQsNC70LvQtdGA0LXQuCovXHJcblx0bGV0ICRtYWduaWZpY1NlbGVjdG9ycyA9ICQoJy5tZmktZ2FsbGVyeScpLmFkZCgnLnZpZGVvTGluaycpO1xyXG5cdGlmICgkbWFnbmlmaWNTZWxlY3RvcnMubGVuZ3RoKSB7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xyXG5cdFx0XHQkKCcubWZpLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0XHRkZWxlZ2F0ZTogJ2EnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRcdFx0Z2FsbGVyeToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoJ2EudmlkZW9MaW5rJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdFx0dHlwZTogJ2lmcmFtZSdcclxuXHRcdFx0fSk7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0JCgnLnRleHRSZXZpZXdzJykub24oJ2NsaWNrJywgJy50ZXh0UmV2aWV3X19tb3JlTGluaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRsZXRcclxuICAgICAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHQkYmxvY2sgPSAkdGhpcy5jbG9zZXN0KCcudGV4dFJldmlldycpLFxyXG5cdFx0XHR0bXAgPSAkdGhpcy5odG1sKCk7XHJcblx0XHQkdGhpcy5odG1sKCR0aGlzLmRhdGEoJ3RleHQnKSk7XHJcblx0XHQkdGhpcy5kYXRhKCd0ZXh0JywgdG1wKTtcclxuXHRcdCRibG9jay50b2dnbGVDbGFzcygnaXMtZXhwYW5kJyk7XHJcblx0fSlcclxuXHJcblx0aWYgKCQoJy5yYXRlaXQnKS5sZW5ndGgpIHtcclxuXHRcdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVpcmUoJ3JhdGVpdCcpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdCQoJ1tkYXRhLWRyb3Bkb3duXScpLnd6bUNsYXNzVG9nZ2xlKHtcclxuXHRcdHRvZ2dsZVNlbGVjdG9yOiAnW2RhdGEtZHJvcGRvd24tdG9nZ2xlXScsXHJcblx0XHR0b2dnbGVPbkJsdXI6IHRydWVcclxuXHR9KTtcclxuXHJcblxyXG5cdGxldCAkaGVhZGVyU2xpZGVyID0gJCgnI2hlYWRlclNsaWRlcicpO1xyXG5cdGlmICgkaGVhZGVyU2xpZGVyLmxlbmd0aCkge1xyXG5cdFx0JGhlYWRlclNsaWRlci5jaGlsZHJlbignLnNsaWRlcl9lbHNlX3VuaXZlcnNhbCcpLmNhcm91RnJlZFNlbCh7XHJcblxyXG5cdFx0XHRwbGF5OiB0cnVlLFxyXG5cdFx0XHRjaXJjdWxhcjogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0Ly93aWR0aDogJzEwMCUnLFxyXG5cdFx0XHQvLyBoZWlnaHQ6IDMwMCxcclxuXHRcdFx0cHJldjokaGVhZGVyU2xpZGVyLmNoaWxkcmVuKCcuc2xpZGVyLWFycm93LS1wcmV2JyksXHJcblx0XHRcdG5leHQ6JGhlYWRlclNsaWRlci5jaGlsZHJlbignLnNsaWRlci1hcnJvdy0tbmV4dCcpLFxyXG5cdFx0XHRzd2lwZToge1xyXG5cdFx0XHRcdG9uVG91Y2g6IHRydWUsXHJcblx0XHRcdFx0b25Nb3VzZTogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0aXRlbXM6e1xyXG5cdFx0XHRcdGhlaWdodDokaGVhZGVyU2xpZGVyLmlubmVySGVpZ2h0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsOiB7XHJcblx0XHRcdFx0aXRlbXM6IDEsXHJcblx0XHRcdFx0Zng6ICdmYWRlJyxcclxuXHRcdFx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG86e1xyXG5cdFx0XHRcdHBsYXk6dHJ1ZSxcclxuXHRcdFx0XHR0aW1lb3V0RHVyYXRpb246cGFyc2VJbnQoJGhlYWRlclNsaWRlci5kYXRhKCdkdXJhdGlvbicpKSB8fCAzMDAwXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQ3JlYXRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JGhlYWRlclNsaWRlci5jc3MoJ29wYWNpdHknLDEpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRsZXQgJHNsaWRlckVsc2VVbml2ZXJzYWwgPSAkKCcjc2xpZGVyX2Vsc2VfdW5pdmVyc2FsJyk7XHJcblx0aWYgKCRzbGlkZXJFbHNlVW5pdmVyc2FsLmxlbmd0aCkge1xyXG5cdFx0JHNsaWRlckVsc2VVbml2ZXJzYWwuY2hpbGRyZW4oJy5zbGlkZXJfZWxzZV91bml2ZXJzYWwnKS5jYXJvdUZyZWRTZWwoe1xyXG5cdFx0XHRwbGF5OiB0cnVlLFxyXG5cdFx0XHRjaXJjdWxhcjogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdFx0aGVpZ2h0OiAyODUsXHJcblx0XHRcdHByZXY6JHNsaWRlckVsc2VVbml2ZXJzYWwuY2hpbGRyZW4oJy5zbGlkZXItYXJyb3ctLXByZXYnKSxcclxuXHRcdFx0bmV4dDokc2xpZGVyRWxzZVVuaXZlcnNhbC5jaGlsZHJlbignLnNsaWRlci1hcnJvdy0tbmV4dCcpLFxyXG5cdFx0XHRpdGVtczoge1xyXG5cdFx0XHRcdHZpc2libGU6IHtcclxuXHRcdFx0XHRcdG1pbjogMSxcclxuXHRcdFx0XHRcdG1heDogNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpcGU6IHtcclxuXHRcdFx0XHRvblRvdWNoOiB0cnVlLFxyXG5cdFx0XHRcdG9uTW91c2U6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcm9sbDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxLFxyXG5cdFx0XHRcdGZ4OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG86e1xyXG5cdFx0XHRcdHBsYXk6dHJ1ZSxcclxuXHRcdFx0XHR0aW1lb3V0RHVyYXRpb246cGFyc2VJbnQoJHNsaWRlckVsc2VVbml2ZXJzYWwuZGF0YSgnZHVyYXRpb24nKSkgfHwgMzAwMFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0bGV0ICR0ZXh0VGFibGUgPSAkKCcud1R4dCcpLmZpbmQoJ3RhYmxlJyk7XHJcblx0XHQkdGV4dFRhYmxlLmVhY2goKGksIHRhYmxlKSA9PiB7XHJcblx0XHRcdGxldCAkdGFibGUgPSAkKHRhYmxlKTtcclxuXHRcdFx0JHRhYmxlLndyYXAoJzxkaXYgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvO1wiPjwvZGl2PicpXHJcblx0XHR9KVxyXG5cclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQkKCcuanMtc2hvdy1pbmZvcm1hdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnLmpzLWhpZGRlbi1pbmZvcm1hdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHRcdHZhciAkZWxlbWVudD0gJChlbGVtZW50KS5maW5kKCdbZGF0YS1pbmZvcm1hdGlvbl0nKTtcclxuXHRcdFx0dmFyIHBob25lID0gJGVsZW1lbnQuYXR0cignZGF0YS1pbmZvcm1hdGlvbicpO1xyXG5cdFx0XHQkZWxlbWVudC50ZXh0KHBob25lKTtcclxuXHRcdFx0JGVsZW1lbnQucmVtb3ZlQXR0cignZGF0YS1pbmZvcm1hdGlvbicpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdCQoJy5qcy1oaWRkZW4taW5mb3JtYXRpb24nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cdFx0bGV0IHN3aXRjaGluZ0luZm8gPSAkKHRoaXMpLmZpbmQoJ1tkYXRhLWluZm9ybWF0aW9uXScpO1xyXG5cdFx0aWYoc3dpdGNoaW5nSW5mby5sZW5ndGgpe1xyXG5cdFx0XHRpZigkKGUuY3VycmVudFRhcmdldCkuaXMoJ2EnKSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0JCgnLmpzLXNob3ctaW5mb3JtYXRpb24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9LDEwKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5cdCQoJy5udW1iZXJzX29ubHknKS5Gb3JjZU51bWVyaWNPbmx5KCk7XHJcblxyXG5cdGlmICgkKCcjc2Nyb2xsZXJVcCcpLmxlbmd0aCkge1xyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8g0L/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQutC90L7Qv9C60LhcclxuXHRcdFx0KCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApICYmICQodGhpcykuc2Nyb2xsVG9wKCkgPCAoJChkb2N1bWVudCkuaGVpZ2h0KCktJCh3aW5kb3cpLmhlaWdodCgpKjIpXHJcblx0XHRcdFx0PyAkKCcjc2Nyb2xsZXJVcCcpLnN0b3AoKS5zaG93KDMwMClcclxuXHRcdFx0XHQ6ICQoJyNzY3JvbGxlclVwJykuc3RvcCgpLmhpZGUoMzAwKTtcclxuXHJcblx0XHR9KTtcclxuXHRcdCQoJyNzY3JvbGxlclVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vINGA0LDRgdGH0LXRgiDQstGA0LXQvNC10L3QuCDRgdC60YDQvtC70LvQsCDQvtGCINCy0YvRgdC+0YLRiyDQtNC+0LrRg9C80LXQvdGC0LAg0Lgg0YLQtdC60YPRidC10Lkg0L/QvtC30LjRhtC40LggLSDQutC+0L3RgtGA0L7Qu9C7INC00LvRjyDQstCw0YDQuNGA0L7QstCw0L3QuNGPINGB0LrQvtGA0L7RgdGC0LggLT4g0LzQvdC+0LbQuNGC0LXQu9GMIDEwMDBcclxuXHRcdFx0dmFyIHNjcm9sbGVyVXBTZGVlZCA9ICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSAvICQoZG9jdW1lbnQpLmhlaWdodCgpKS50b0ZpeGVkKDIpICogMTAwMDtcclxuXHRcdFx0JCgnYm9keSwgaHRtbCcpLnN0b3AoKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IDBcclxuXHRcdFx0fSwgc2Nyb2xsZXJVcFNkZWVkKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5pdC5qcyIsIihmdW5jdGlvbih3aW5kb3csICQpIHtcclxuXHRyZXF1aXJlKCdqcXVlcnknKTtcclxuXHRyZXF1aXJlKCdqcXVlcnktdmFsaWRhdGUnKTtcclxuXHRyZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xyXG5cdC8qKlxyXG5cdCAqIEBuYW1lc3BhY2Ugd0hUTUxcclxuXHQgKi9cclxuXHJcblx0dmFyIF9zZWxmO1xyXG5cdHZhciB3SFRNTCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRfc2VsZiA9IHRoaXM7XHJcblx0fTtcclxuXHJcblx0Ly8gbWV0aG9kc1xyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblx0dmFyIF9zZW9UZXh0VGltZXIgPSBudWxsO1xyXG5cdHZhciBfc2VvVGV4dERlbGF5ID0gMTA7XHJcblx0dmFyICRzZW9UZXh0O1xyXG5cdHZhciAkc2VvSWZyYW1lO1xyXG5cdHZhciAkc2VvQ2xvbmU7XHJcblxyXG5cdC8qKlxyXG5cdCAqINCh0L7Qt9C00LDQtdC8IGlmcmFtZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0gXHRcdHtFbGVtZW50fVx0XHQkc2VvVGV4dCAtINGN0LvQtdC80LXQvdGCINGB0LXQviDRgtC10LrRgdGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIF9zZW9CdWlsZCgkc2VvVGV4dCkge1xyXG5cdFx0dmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0aWZyYW1lLmlkID0gJ3Nlb0lmcmFtZSc7XHJcblx0XHRpZnJhbWUubmFtZSA9ICdzZW9JZnJhbWUnO1xyXG5cdFx0Ly8g0LLQutC40LTRi9Cy0LDQtdC8INCyINCx0LvQvtC6INCh0LXQviDRgtC10LrRgdGC0LBcclxuXHRcdCRzZW9UZXh0WzBdLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblx0XHQvLyDRgdGC0LDQstC40Lwg0L/RgNC+0YHQu9GD0YjQutGDINC90LAg0YDQtdGB0LDQudC3IGNvbnRlbnRXaW5kb3dcclxuXHRcdGlmcmFtZS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfc2VsZi5zZW9UZXh0KCk7XHJcblx0XHR9KTtcclxuXHRcdF9zZWxmLnNlb1RleHQoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIGBhamF4YCDQvNC10YLQvtC00LAg0L/Qu9Cw0LPQuNC90LAgYG1hZ25pZmljLXBvcHVwYFxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAbWVtYmVyb2YgXHR3SFRNTFxyXG5cdCAqIEB0dXRvcmlhbCBcdHdvcmt3aXRoLW1hZ25pZmljLXBvcHVwXHJcblx0ICogQHNlZSBcdFx0e0BsaW5rIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNhamF4LXR5cGV9XHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuc2VvVGV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRzZW9UZXh0ID0gJHNlb1RleHQgfHwgJCgnI3Nlb1RleHQnKTtcclxuXHRcdGlmICgkc2VvVGV4dC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyICRzZW9JZnJhbWUgPSAkc2VvSWZyYW1lIHx8ICRzZW9UZXh0LmNoaWxkcmVuKCcjc2VvSWZyYW1lJyk7XHJcblx0XHRcdGlmICgkc2VvSWZyYW1lLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dChfc2VvVGV4dFRpbWVyKTtcclxuXHRcdFx0XHRfc2VvVGV4dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciAkc2VvQ2xvbmUgPSAkc2VvQ2xvbmUgfHwgJCgnI3Nlb0Nsb25lJyk7XHJcblx0XHRcdFx0XHRpZiAoJHNlb0Nsb25lLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQkc2VvQ2xvbmUuaGVpZ2h0KCRzZW9UZXh0Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuXHRcdFx0XHRcdFx0JHNlb1RleHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHR0b3A6ICRzZW9DbG9uZS5vZmZzZXQoKS50b3BcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdF9zZW9UZXh0RGVsYXkgPSA1MDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignI3Nlb0Nsb25lIC0g0L3QtSDQvdCw0LnQtNC10L0nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCBfc2VvVGV4dERlbGF5KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfc2VvQnVpbGQoJHNlb1RleHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0JHQsNC30L7QstGL0LUg0L/QsNGA0LDQvNC10YLRgNGLINC00LvRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCBgd0hUTUwubWZwSW5saW5lYFxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR5cGVcdFx0e09iamVjdH1cclxuXHQgKi9cclxuXHR2YXIgX21mcElubGluZUJhc2VDb25maWcgPSB7XHJcblx0XHR0eXBlOiAnaW5saW5lJyxcclxuXHRcdGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxyXG5cdFx0cmVtb3ZhbERlbGF5OiAzMDAsXHJcblx0XHRtYWluQ2xhc3M6ICd6b29tLWluJ1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIGBpbmxpbmVgINC80LXRgtC+0LTQsCDQv9C70LDQs9C40L3QsCBgbWFnbmlmaWMtcG9wdXBgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtbWFnbmlmaWMtcG9wdXBcclxuXHQgKiBAc2VlXHRcdFx0e0BsaW5rIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNpbmxpbmUtdHlwZX1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbVx0XHR7c3RyaW5nfSBcdFtzZWxlY3Rvcj0nLmpzLW1mcC1pbmxpbmUnXSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQuSBjc3Mg0YHQtdC70LXQutGC0L7RgCDQtNC70Y8g0L/QvtC40YHQutCwINC4INC40L3QuNGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5tZnBJbmxpbmUgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnLmpzLW1mcC1pbmxpbmUnO1xyXG5cdFx0JChzZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0dmFyICRlbCA9ICQoZWwpO1xyXG5cdFx0XHR2YXIgY3VzdG9tQ29uZmlnID0gJGVsLmRhdGEoJ21mcEN1c3RvbUNvbmZpZycpIHx8IHt9O1xyXG5cdFx0XHR2YXIgY3VycmVudENvbmZpZyA9ICQuZXh0ZW5kKHRydWUsIF9tZnBJbmxpbmVCYXNlQ29uZmlnLCBjdXN0b21Db25maWcpO1xyXG5cdFx0XHQkZWwubWFnbmlmaWNQb3B1cChjdXJyZW50Q29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0LvQsNCz0LjQvdCwIGBqcXVlcnktdmFsaWRhdGVgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEB0dXRvcmlhbCBcdHdvcmt3aXRoLWpxdWVyeS12YWxpZGF0ZVxyXG5cdCAqIEBmaXJlcyBcdFx0d0hUTUwjZm9ybU9uU3VibWl0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gXHRcdHtzdHJpbmd9IFx0XHRbc2VsZWN0b3I9Jy5qcy1mb3JtJ10g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LkgY3NzINGB0LXQu9C10LrRgtC+0YAg0LTQu9GPINC/0L7QuNGB0LrQsCDQuCDQuNC90LjRgtCwXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuZm9ybVZhbGlkYXRpb24gPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnLmpzLWZvcm0nO1xyXG5cdFx0JChzZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0dmFyICRmb3JtID0gJChlbCk7XHJcblx0XHRcdHZhciB2YWxpZGF0b3IgPSAkZm9ybS5kYXRhKCd2YWxpZGF0b3InKTtcclxuXHRcdFx0aWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG5cdFx0XHRcdGlmICgkZm9ybS5pcygnZm9ybScpKSB7XHJcblx0XHRcdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkZm9ybS52YWxpZGF0ZSh7XHJcblx0XHRcdFx0XHRzaG93RXJyb3JzOiBmdW5jdGlvbihlcnJvck1hcCwgZXJyb3JMaXN0KSB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnJvckxpc3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGZpcnN0RXJyb3IgPSBlcnJvckxpc3Quc2hpZnQoKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3RXJyb3JMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0bmV3RXJyb3JMaXN0LnB1c2goZmlyc3RFcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvckxpc3QgPSBuZXdFcnJvckxpc3Q7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5kZWZhdWx0U2hvd0Vycm9ycygpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGludmFsaWRIYW5kbGVyOiBmdW5jdGlvbihmb3JtLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbm9fdmFsaWQnKVxyXG5cdFx0XHRcdFx0XHRcdC5kYXRhKCd2YWxpZGF0b3InKS5mb2N1c0ludmFsaWQoKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcblx0XHRcdFx0XHRcdHZhciAkY3VycmVudEZvcm0gPSAkKGZvcm0pO1xyXG5cdFx0XHRcdFx0XHQkY3VycmVudEZvcm0ucmVtb3ZlQ2xhc3MoJ25vX3ZhbGlkJykuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZm9ybU9uU3VibWl0KCRjdXJyZW50Rm9ybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmICgkZm9ybS5pcygnZGl2JykpIHtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2xpY2snLCAnLmpzLWZvcm0tc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0JGZvcm0uc3VibWl0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2hhbmdlJywgJy5qcy1pbnB1dC1maWxlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0JGZvcm0uZm9ybUdldEZpbGVWYWx1ZXModGhpcyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2xpY2snLCAnLmpzLWZvcm0tcmVzZXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5mb3JtUmVzZXQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0KHQvtCx0YvRgtC40LUsINC/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDQuCDQvtGC0L/RgNCw0LLQutC4INC00LDQvdC90YvRhS5cclxuXHQgKlxyXG5cdCAqIEBzb3VyY2Vjb2RlXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtanF1ZXJ5LXZhbGlkYXRlXHJcblx0ICogQGV2ZW50IFx0XHR3SFRNTCNmb3JtQWZ0ZXJTdWJtaXRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e0VsZW1lbnR9IFx0XHQkZm9ybSAtINGC0LXQutGD0YnQsNGPINGE0L7RgNC80LAsIGBqUXVlcnkgZWxlbWVudGBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5mb3JtQWZ0ZXJTdWJtaXQgPSBmdW5jdGlvbigkZm9ybSkge1xyXG5cdFx0Y29uc29sZS53YXJuKCdIVE1MID0+INCk0L7RgNC80LAg0L7RgtC/0YDQsNCy0LvQtdC90LAnKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiDQodC+0LHRi9GC0LjQtSwg0L/RgNC4INGD0YHQv9C10YjQvdC+0Lkg0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80YsuXHJcblx0ICog0JHRg9C00LXRgiDQt9Cw0LzQtdC90LXQvdC90L4g0L/RgNC4INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC4LlxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAdHV0b3JpYWwgXHR3b3Jrd2l0aC1qcXVlcnktdmFsaWRhdGVcclxuXHQgKiBAZmlyZXMgXHRcdHdIVE1MI2Zvcm1BZnRlclN1Ym1pdFxyXG5cdCAqIEBldmVudCBcdFx0d0hUTUwjZm9ybU9uU3VibWl0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gXHRcdHtFbGVtZW50fSBcdFx0JGZvcm0gLSDRgtC10LrRg9GJ0LDRjyDRhNC+0YDQvNCwLCBgalF1ZXJ5IGVsZW1lbnRgXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuZm9ybU9uU3VibWl0ID0gZnVuY3Rpb24oJGZvcm0pIHtcclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0L3QsCDRgdC10YDQstCw0LpcclxuXHRcdGNvbnNvbGUubG9nKCRmb3JtKTtcclxuXHRcdC8vIC4uLlxyXG5cdFx0Ly8g0LIg0L7RgtCy0LXRgtC1XHJcblx0XHRfc2VsZi5mb3JtQWZ0ZXJTdWJtaXQoJGZvcm0pO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gYGFqYXhgINC80LXRgtC+0LTQsCDQv9C70LDQs9C40L3QsCBgbWFnbmlmaWMtcG9wdXBgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtbWFnbmlmaWMtcG9wdXBcclxuXHQgKiBAc2VlIFx0XHR7QGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI2FqYXgtdHlwZX1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e3N0cmluZ30gXHRcdFtzZWxlY3Rvcj0nLmpzLW1mcC1hamF4J10g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LkgY3NzINGB0LXQu9C10LrRgtC+0YAg0LTQu9GPINC/0L7QuNGB0LrQsCDQuCDQuNC90LjRgtCwXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUubWZwQWpheCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcuanMtbWZwLWFqYXgnO1xyXG5cdFx0JCgnYm9keScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHR0eXBlOiAnYWpheCcsXHJcblx0XHRcdGRlbGVnYXRlOiBzZWxlY3RvcixcclxuXHRcdFx0cmVtb3ZhbERlbGF5OiAzMDAsXHJcblx0XHRcdG1haW5DbGFzczogJ3pvb20taW4nLFxyXG5cdFx0XHRjYWxsYmFja3M6IHtcclxuXHRcdFx0XHRlbGVtZW50UGFyc2U6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMuc3QuYWpheC5zZXR0aW5ncyA9IHtcclxuXHRcdFx0XHRcdFx0dXJsOiBpdGVtLmVsLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0uZWwuZGF0YSgncGFyYW0nKSB8fCB7fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFqYXhDb250ZW50QWRkZWQ6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdFx0XHRfc2VsZi5mb3JtVmFsaWRhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBjb25uZWN0U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1jb25uZWN0Jyk7XHJcblxyXG5cdFx0XHRcdFx0bm9VaVNsaWRlci5jcmVhdGUoY29ubmVjdFNsaWRlciwge1xyXG5cdFx0XHRcdFx0XHRzdGFydDogNDAsXHJcblx0XHRcdFx0XHRcdGNvbm5lY3Q6ICdsb3dlcicsXHJcblx0XHRcdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHRcdFx0J21pbic6IDAsXHJcblx0XHRcdFx0XHRcdFx0J21heCc6IDEwMFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25uZWN0U2xpZGVyLm5vVWlTbGlkZXIub24oJ3NldCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQoJy5yYW5nZS1zbGlkZXInKS5hZGRDbGFzcygndmFsaWQnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHdpbmRvdy53SFRNTCA9IG5ldyB3SFRNTCgpO1xyXG59KSh3aW5kb3csIGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2R1bGVzL3dIVE1MLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIoZnVuY3Rpb24oZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFtcIi4vanF1ZXJ5XCJdLCBmYWN0b3J5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xyXG5cdH1cclxufShmdW5jdGlvbigkKSB7XHJcblxyXG4vKlxyXG5cdNCx0YvRgdGC0YDRi9C5INC/0L7QuNGB0Log0L/QviDQstGL0LTQtdC70LXQvdC40Y5cclxuXHRXZXpvbUZpeCAtINGE0LjQutGB0Ysg0YHQutGA0LjQv9GC0LBcclxuXHRXZXpvbVJ1bGVzIC0g0L/RgNCw0LLQuNC70LAg0LLQsNC70LjQtNCw0YbQuNC4XHJcbiovXHJcblxyXG5mdW5jdGlvbiBfZ2V0VHlwZU5hbWUodHlwZSkge1xyXG5cdHZhciB0eXBlX25hbWU7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdzZWxlY3Qtb25lJzpcclxuXHRcdGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XHJcblx0XHRcdHR5cGVfbmFtZSA9ICdfc2VsZWN0JztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0Y2FzZSAnY2hlY2tib3gnOlxyXG5cdFx0XHR0eXBlX25hbWUgPSAnX2NoZWNrZXInO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0eXBlX25hbWUgPSAnJztcclxuXHR9XHJcblx0cmV0dXJuIHR5cGVfbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldE1ldGhvZE1zZ05hbWUoZWxlbWVudCwgbWV0aG9kKSB7XHJcblx0dmFyIG1ldGhvZF9uYW1lO1xyXG5cdHN3aXRjaCAobWV0aG9kKSB7XHJcblx0XHRjYXNlICdyZXF1aXJlZCc6XHJcblx0XHRjYXNlICdtYXhsZW5ndGgnOlxyXG5cdFx0Y2FzZSAnbWlubGVuZ3RoJzpcclxuXHRcdGNhc2UgJ3JhbmdlbGVuZ3RoJzpcclxuXHRcdFx0bWV0aG9kX25hbWUgPSBtZXRob2QgKyBfZ2V0VHlwZU5hbWUoZWxlbWVudC50eXBlKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0bWV0aG9kX25hbWUgPSBtZXRob2Q7XHJcblx0fVxyXG5cdHJldHVybiBtZXRob2RfbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Jlc2V0SW5wdXRzKHNldHQsIGVscywgdGhzKSB7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciB0ID0gZWxzW2ldO1xyXG5cdFx0dmFyIGp0ID0gJCh0KTtcclxuXHRcdHN3aXRjaCAodC50eXBlKSB7XHJcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XHJcblx0XHRcdGNhc2UgJ3Jlc2V0JzpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0XHRjYXNlICdjaGVja2JveCc6XHJcblx0XHRcdFx0dC5jaGVja2VkID0gdC5kZWZhdWx0Q2hlY2tlZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZmlsZSc6XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gJCh0KS5zaWJsaW5ncygnLmpzLWlucHV0LWZpbGUnKTtcclxuXHRcdFx0XHR0Lm91dGVySFRNTCA9IHQub3V0ZXJIVE1MO1xyXG5cdFx0XHRcdHRocy5mb3JtR2V0RmlsZVZhbHVlcyh0LCBsYWJlbCk7XHJcblx0XHRcdFx0anQgPSB0aHMuZmluZCgnIycgKyB0LmlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0LnZhbHVlID0gdC5kZWZhdWx0VmFsdWU7XHJcblx0XHR9XHJcblx0XHRqdC5yZW1vdmVDbGFzcyhzZXR0LmVycm9yQ2xhc3MpLnRyaWdnZXIoJ2NoYW5nZScpLnNpYmxpbmdzKHNldHQuZXJyb3JFbGVtZW50ICsgJy4nICsgc2V0dC5lcnJvckNsYXNzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gX3Jlc2V0U2VsZWN0cyhzZXR0LCBlbHMpIHtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0W10uZm9yRWFjaC5jYWxsKGVsc1tpXS5vcHRpb25zLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRlbC5zZWxlY3RlZCA9IGVsLmRlZmF1bHRTZWxlY3RlZDtcclxuXHRcdH0pO1xyXG5cdFx0JChlbHNbaV0pLnJlbW92ZUNsYXNzKHNldHQuZXJyb3JDbGFzcykudHJpZ2dlcignY2hhbmdlJykuc2libGluZ3Moc2V0dC5lcnJvckVsZW1lbnQgKyAnLicgKyBzZXR0LmVycm9yQ2xhc3MpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0fVxyXG59XHJcblxyXG4kLmV4dGVuZCgkLmZuLCB7XHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3ZhbGlkYXRlL1xyXG5cdHZhbGlkYXRlOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG5cdFx0Ly8gaWYgbm90aGluZyBpcyBzZWxlY3RlZCwgcmV0dXJuIG5vdGhpbmc7IGNhbid0IGNoYWluIGFueXdheVxyXG5cdFx0aWYgKCF0aGlzLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiTm90aGluZyBzZWxlY3RlZCwgY2FuJ3QgdmFsaWRhdGUsIHJldHVybmluZyBub3RoaW5nLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2hlY2sgaWYgYSB2YWxpZGF0b3IgZm9yIHRoaXMgZm9ybSB3YXMgYWxyZWFkeSBjcmVhdGVkXHJcblx0XHR2YXIgdmFsaWRhdG9yID0gJC5kYXRhKHRoaXNbMF0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0aWYgKHZhbGlkYXRvcikge1xyXG5cdFx0XHRyZXR1cm4gdmFsaWRhdG9yO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFkZCBub3ZhbGlkYXRlIHRhZyBpZiBIVE1MNS5cclxuXHRcdHRoaXMuYXR0cihcIm5vdmFsaWRhdGVcIiwgXCJub3ZhbGlkYXRlXCIpO1xyXG5cclxuXHRcdHZhbGlkYXRvciA9IG5ldyAkLnZhbGlkYXRvcihvcHRpb25zLCB0aGlzWzBdKTtcclxuXHRcdCQuZGF0YSh0aGlzWzBdLCBcInZhbGlkYXRvclwiLCB2YWxpZGF0b3IpO1xyXG5cclxuXHRcdGlmICh2YWxpZGF0b3Iuc2V0dGluZ3Mub25zdWJtaXQpIHtcclxuXHJcblx0XHRcdHRoaXMub24oXCJjbGljay52YWxpZGF0ZVwiLCBcIjpzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIpIHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvci5zdWJtaXRCdXR0b24gPSBldmVudC50YXJnZXQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhbGxvdyBzdXBwcmVzc2luZyB2YWxpZGF0aW9uIGJ5IGFkZGluZyBhIGNhbmNlbCBjbGFzcyB0byB0aGUgc3VibWl0IGJ1dHRvblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpKSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFsbG93IHN1cHByZXNzaW5nIHZhbGlkYXRpb24gYnkgYWRkaW5nIHRoZSBodG1sNSBmb3Jtbm92YWxpZGF0ZSBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdCBidXR0b25cclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5hdHRyKFwiZm9ybW5vdmFsaWRhdGVcIikgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHZhbGlkYXRlIHRoZSBmb3JtIG9uIHN1Ym1pdFxyXG5cdFx0XHR0aGlzLm9uKFwic3VibWl0LnZhbGlkYXRlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Ly8gcHJldmVudCBmb3JtIHN1Ym1pdCB0byBiZSBhYmxlIHRvIHNlZSBjb25zb2xlIG91dHB1dFxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZnVuY3Rpb24gaGFuZGxlKCkge1xyXG5cdFx0XHRcdFx0dmFyIGhpZGRlbiwgcmVzdWx0O1xyXG5cdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh2YWxpZGF0b3Iuc3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gaW5zZXJ0IGEgaGlkZGVuIGlucHV0IGFzIGEgcmVwbGFjZW1lbnQgZm9yIHRoZSBtaXNzaW5nIHN1Ym1pdCBidXR0b25cclxuXHRcdFx0XHRcdFx0XHRoaWRkZW4gPSAkKFwiPGlucHV0IHR5cGU9J2hpZGRlbicvPlwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJuYW1lXCIsIHZhbGlkYXRvci5zdWJtaXRCdXR0b24ubmFtZSlcclxuXHRcdFx0XHRcdFx0XHRcdC52YWwoJCh2YWxpZGF0b3Iuc3VibWl0QnV0dG9uKS52YWwoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyh2YWxpZGF0b3IuY3VycmVudEZvcm0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHZhbGlkYXRvci5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyLmNhbGwodmFsaWRhdG9yLCB2YWxpZGF0b3IuY3VycmVudEZvcm0sIGV2ZW50KTtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5zdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBhbmQgY2xlYW4gdXAgYWZ0ZXJ3YXJkczsgdGhhbmtzIHRvIG5vLWJsb2NrLXNjb3BlLCBoaWRkZW4gY2FuIGJlIHJlZmVyZW5jZWRcclxuXHRcdFx0XHRcdFx0XHRoaWRkZW4ucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHByZXZlbnQgc3VibWl0IGZvciBpbnZhbGlkIGZvcm1zIG9yIGN1c3RvbSBzdWJtaXQgaGFuZGxlcnNcclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCkge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLmZvcm0oKSkge1xyXG5cdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5wZW5kaW5nUmVxdWVzdCkge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBoYW5kbGUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmZvY3VzSW52YWxpZCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHZhbGlkYXRvcjtcclxuXHR9LFxyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy92YWxpZC9cclxuXHR2YWxpZDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdmFsaWQsIHZhbGlkYXRvciwgZXJyb3JMaXN0O1xyXG5cclxuXHRcdGlmICgkKHRoaXNbMF0pLmlzKFwiZm9ybVwiKSkge1xyXG5cdFx0XHR2YWxpZCA9IHRoaXMudmFsaWRhdGUoKS5mb3JtKCk7XHJcblx0XHR9IGVsc2UgaWYgKCQodGhpc1swXSkuaXMoXCJkaXZcIikpIHsgLy8gV2V6b21GaXhcclxuXHRcdFx0dmFsaWQgPSB0aGlzLnZhbGlkYXRlKCkuZm9ybSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0dmFsaWRhdG9yID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtZm9ybScpLnZhbGlkYXRlKCk7Ly8gV2V6b21GaXhcclxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhbGlkID0gdmFsaWRhdG9yLmVsZW1lbnQodGhpcykgJiYgdmFsaWQ7XHJcblx0XHRcdFx0ZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmNvbmNhdCh2YWxpZGF0b3IuZXJyb3JMaXN0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZhbGlkYXRvci5lcnJvckxpc3QgPSBlcnJvckxpc3Q7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsaWQ7XHJcblx0fSxcclxuXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3J1bGVzL1xyXG5cdHJ1bGVzOiBmdW5jdGlvbihjb21tYW5kLCBhcmd1bWVudCkge1xyXG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzWzBdLFxyXG5cdFx0XHRzZXR0aW5ncywgc3RhdGljUnVsZXMsIGV4aXN0aW5nUnVsZXMsIGRhdGEsIHBhcmFtLCBmaWx0ZXJlZDtcclxuXHJcblx0XHRpZiAoY29tbWFuZCkge1xyXG5cdFx0XHRzZXR0aW5ncyA9ICQuZGF0YShlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIpLnNldHRpbmdzO1xyXG5cdFx0XHRzdGF0aWNSdWxlcyA9IHNldHRpbmdzLnJ1bGVzO1xyXG5cdFx0XHRleGlzdGluZ1J1bGVzID0gJC52YWxpZGF0b3Iuc3RhdGljUnVsZXMoZWxlbWVudCk7XHJcblx0XHRcdHN3aXRjaCAoY29tbWFuZCkge1xyXG5cdFx0XHRjYXNlIFwiYWRkXCI6XHJcblx0XHRcdFx0JC5leHRlbmQoZXhpc3RpbmdSdWxlcywgJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShhcmd1bWVudCkpO1xyXG5cdFx0XHRcdC8vIHJlbW92ZSBtZXNzYWdlcyBmcm9tIHJ1bGVzLCBidXQgYWxsb3cgdGhlbSB0byBiZSBzZXQgc2VwYXJhdGVseVxyXG5cdFx0XHRcdGRlbGV0ZSBleGlzdGluZ1J1bGVzLm1lc3NhZ2VzO1xyXG5cdFx0XHRcdHN0YXRpY1J1bGVzW2VsZW1lbnQubmFtZV0gPSBleGlzdGluZ1J1bGVzO1xyXG5cdFx0XHRcdGlmIChhcmd1bWVudC5tZXNzYWdlcykge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXSA9ICQuZXh0ZW5kKHNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0sIGFyZ3VtZW50Lm1lc3NhZ2VzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJyZW1vdmVcIjpcclxuXHRcdFx0XHRpZiAoIWFyZ3VtZW50KSB7XHJcblx0XHRcdFx0XHRkZWxldGUgc3RhdGljUnVsZXNbZWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHRcdHJldHVybiBleGlzdGluZ1J1bGVzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmaWx0ZXJlZCA9IHt9O1xyXG5cdFx0XHRcdCQuZWFjaChhcmd1bWVudC5zcGxpdCgvXFxzLyksIGZ1bmN0aW9uKGluZGV4LCBtZXRob2QpIHtcclxuXHRcdFx0XHRcdGZpbHRlcmVkW21ldGhvZF0gPSBleGlzdGluZ1J1bGVzW21ldGhvZF07XHJcblx0XHRcdFx0XHRkZWxldGUgZXhpc3RpbmdSdWxlc1ttZXRob2RdO1xyXG5cdFx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gXCJyZXF1aXJlZFwiKSB7XHJcblx0XHRcdFx0XHRcdCQoZWxlbWVudCkucmVtb3ZlQXR0cihcImFyaWEtcmVxdWlyZWRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIGZpbHRlcmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZGF0YSA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGVzKFxyXG5cdFx0JC5leHRlbmQoXHJcblx0XHRcdHt9LFxyXG5cdFx0XHQkLnZhbGlkYXRvci5jbGFzc1J1bGVzKGVsZW1lbnQpLFxyXG5cdFx0XHQkLnZhbGlkYXRvci5hdHRyaWJ1dGVSdWxlcyhlbGVtZW50KSxcclxuXHRcdFx0JC52YWxpZGF0b3IuZGF0YVJ1bGVzKGVsZW1lbnQpLFxyXG5cdFx0XHQkLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhlbGVtZW50KVxyXG5cdFx0KSwgZWxlbWVudCk7XHJcblxyXG5cdFx0Ly8gbWFrZSBzdXJlIHJlcXVpcmVkIGlzIGF0IGZyb250XHJcblx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xyXG5cdFx0XHRwYXJhbSA9IGRhdGEucmVxdWlyZWQ7XHJcblx0XHRcdGRlbGV0ZSBkYXRhLnJlcXVpcmVkO1xyXG5cdFx0XHRkYXRhID0gJC5leHRlbmQoeyByZXF1aXJlZDogcGFyYW0gfSwgZGF0YSk7XHJcblx0XHRcdCQoZWxlbWVudCkuYXR0cihcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1ha2Ugc3VyZSByZW1vdGUgaXMgYXQgYmFja1xyXG5cdFx0aWYgKGRhdGEucmVtb3RlKSB7XHJcblx0XHRcdHBhcmFtID0gZGF0YS5yZW1vdGU7XHJcblx0XHRcdGRlbGV0ZSBkYXRhLnJlbW90ZTtcclxuXHRcdFx0ZGF0YSA9ICQuZXh0ZW5kKGRhdGEsIHsgcmVtb3RlOiBwYXJhbSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9LFxyXG5cdC8vIFdlem9tRml4XHJcblx0Zm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0aHMgPSAkKHRoaXNbMF0pO1xyXG5cdFx0dmFyIHNldHQgPSB0aHMudmFsaWRhdGUoKS5zZXR0aW5ncztcclxuXHRcdHRocy5yZW1vdmVDbGFzcygnc3VjY2VzcycpO1xyXG5cdFx0dGhzLnJlbW92ZUNsYXNzKCdub192YWxpZCcpO1xyXG5cdFx0X3Jlc2V0SW5wdXRzKHNldHQsIHRocy5maW5kKCdpbnB1dCcpLCB0aHMpO1xyXG5cdFx0X3Jlc2V0SW5wdXRzKHNldHQsIHRocy5maW5kKCd0ZXh0YXJlYScpLCB0aHMpO1xyXG5cdFx0X3Jlc2V0U2VsZWN0cyhzZXR0LCB0aHMuZmluZCgnc2VsZWN0JyksIHRocyk7XHJcblx0fSxcclxuXHQvLyBXZXpvbUZpeFxyXG5cdGZvcm1HZXRGaWxlVmFsdWVzOiBmdW5jdGlvbihpbnB1dCwgaXNMYWJlbCkge1xyXG5cdFx0dmFyIG11bHRpcGxlID0gaW5wdXQubXVsdGlwbGU7XHJcblx0XHR2YXIgZmlsZXMgPSBpbnB1dC5maWxlcztcclxuXHRcdHZhciBmaWxlc0xlbmd0aCA9IGZpbGVzLmxlbmd0aDtcclxuXHRcdHZhciB0aHMgPSAkKGlucHV0KTtcclxuXHRcdHZhciBsYWJlbCA9IGlzTGFiZWwgfHwgdGhzLnBhcmVudCgpLmZpbmQoJy5qcy1pbnB1dC1maWxlJyk7XHJcblx0XHR2YXIgbm9TZWxlY3RlZCA9ICfQndC40YfQtdCz0L4g0L3QtSDQstGL0LHRgNCw0L3Qvic7XHJcblx0XHR2YXIgaXNTZWxlY3RlZCA9IChtdWx0aXBsZSkgPyAn0JLRi9Cx0YDQsNC90L4g0YTQsNC50LvQvtCyIC0gJWNvdW50OiA8aW5zPiglZmlsZXMpPC9pbnM+JyA6ICfQktGL0LHRgNCw0L3QvjogPGlucz4lZmlsZXM8L2lucz4nO1xyXG5cdFx0aWYgKHR5cGVvZiBsYWJlbC5kYXRhKCdsYWJlbC10ZXh0JykgPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0bm9TZWxlY3RlZCA9IGxhYmVsLmRhdGEoJ2xhYmVsLXRleHQnKVswXTtcclxuXHRcdFx0aXNTZWxlY3RlZCA9IGxhYmVsLmRhdGEoJ2xhYmVsLXRleHQnKVsxXTtcclxuXHRcdH1cclxuXHRcdHZhciByZXN1bHQgPSBub1NlbGVjdGVkO1xyXG5cdFx0aWYgKGZpbGVzTGVuZ3RoKSB7XHJcblx0XHRcdHZhciBmaWxlTmFtZXM7XHJcblx0XHRcdHJlc3VsdCA9IGlzU2VsZWN0ZWQ7XHJcblx0XHRcdGlmIChtdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBmaWxlQXJyID0gW107XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRmaWxlQXJyLnB1c2goZmlsZXNbaV0ubmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC8lY291bnQvZywgZmlsZXNMZW5ndGgpO1xyXG5cdFx0XHRcdGZpbGVOYW1lcyA9IGZpbGVBcnIuam9pbignLCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZpbGVOYW1lcyA9IGZpbGVzWzBdLm5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLyVmaWxlcy9nLCBmaWxlTmFtZXMpO1xyXG5cdFx0fVxyXG5cdFx0dGhzLmJsdXIoKTtcclxuXHRcdGxhYmVsLmh0bWwoJzxzcGFuPicrcmVzdWx0Kyc8L3NwYW4+Jyk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIEN1c3RvbSBzZWxlY3RvcnNcclxuJC5leHRlbmQoJC5leHByW1wiOlwiXSwge1xyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9ibGFuay1zZWxlY3Rvci9cclxuXHRibGFuazogZnVuY3Rpb24oYSkge1xyXG5cdFx0cmV0dXJuICEkLnRyaW0oXCJcIiArICQoYSkudmFsKCkpO1xyXG5cdH0sXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2ZpbGxlZC1zZWxlY3Rvci9cclxuXHRmaWxsZWQ6IGZ1bmN0aW9uKGEpIHtcclxuXHRcdHJldHVybiAhISQudHJpbShcIlwiICsgJChhKS52YWwoKSk7XHJcblx0fSxcclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdW5jaGVja2VkLXNlbGVjdG9yL1xyXG5cdHVuY2hlY2tlZDogZnVuY3Rpb24oYSkge1xyXG5cdFx0cmV0dXJuICEkKGEpLnByb3AoXCJjaGVja2VkXCIpO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBjb25zdHJ1Y3RvciBmb3IgdmFsaWRhdG9yXHJcbiQudmFsaWRhdG9yID0gZnVuY3Rpb24ob3B0aW9ucywgZm9ybSkge1xyXG5cdHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC52YWxpZGF0b3IuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdHRoaXMuY3VycmVudEZvcm0gPSBmb3JtO1xyXG5cdHRoaXMuaW5pdCgpO1xyXG59O1xyXG5cclxuLy8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuZm9ybWF0L1xyXG4kLnZhbGlkYXRvci5mb3JtYXQgPSBmdW5jdGlvbihzb3VyY2UsIHBhcmFtcykge1xyXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcclxuXHRcdFx0YXJncy51bnNoaWZ0KHNvdXJjZSk7XHJcblx0XHRcdHJldHVybiAkLnZhbGlkYXRvci5mb3JtYXQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgcGFyYW1zLmNvbnN0cnVjdG9yICE9PSBBcnJheSApIHtcclxuXHRcdHBhcmFtcyA9ICQubWFrZUFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSk7XHJcblx0fVxyXG5cdGlmIChwYXJhbXMuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XHJcblx0XHRwYXJhbXMgPSBbcGFyYW1zXTtcclxuXHR9XHJcblx0JC5lYWNoKHBhcmFtcywgZnVuY3Rpb24oaSwgbikge1xyXG5cdFx0c291cmNlID0gc291cmNlLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gbjtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdHJldHVybiBzb3VyY2U7XHJcbn07XHJcblxyXG4kLmV4dGVuZCgkLnZhbGlkYXRvciwge1xyXG5cclxuXHRkZWZhdWx0czoge1xyXG5cdFx0bWVzc2FnZXM6IHt9LFxyXG5cdFx0Z3JvdXBzOiB7fSxcclxuXHRcdHJ1bGVzOiB7fSxcclxuXHRcdGVycm9yQ2xhc3M6IFwiZXJyb3JcIixcclxuXHRcdHZhbGlkQ2xhc3M6IFwidmFsaWRcIixcclxuXHRcdGVycm9yRWxlbWVudDogXCJsYWJlbFwiLFxyXG5cdFx0Zm9jdXNDbGVhbnVwOiBmYWxzZSxcclxuXHRcdGZvY3VzSW52YWxpZDogdHJ1ZSxcclxuXHRcdGVycm9yQ29udGFpbmVyOiAkKFtdKSxcclxuXHRcdGVycm9yTGFiZWxDb250YWluZXI6ICQoW10pLFxyXG5cdFx0b25zdWJtaXQ6IHRydWUsXHJcblx0XHRpZ25vcmU6IFwiOmhpZGRlblwiLFxyXG5cdFx0aWdub3JlVGl0bGU6IGZhbHNlLFxyXG5cdFx0b25mb2N1c2luOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHRoaXMubGFzdEFjdGl2ZSA9IGVsZW1lbnQ7XHJcblxyXG5cdFx0XHQvLyBIaWRlIGVycm9yIGxhYmVsIGFuZCByZW1vdmUgZXJyb3IgY2xhc3Mgb24gZm9jdXMgaWYgZW5hYmxlZFxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5mb2N1c0NsZWFudXApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnQsIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5oaWRlVGhlc2UodGhpcy5lcnJvcnNGb3IoZWxlbWVudCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25mb2N1c291dDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuY2hlY2thYmxlKGVsZW1lbnQpICYmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgIXRoaXMub3B0aW9uYWwoZWxlbWVudCkpKSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25rZXl1cDogZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQpIHtcclxuXHRcdFx0Ly8gQXZvaWQgcmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBwcmVzc2luZyBvbmUgb2YgdGhlIGZvbGxvd2luZyBrZXlzXHJcblx0XHRcdC8vIFNoaWZ0XHQgICA9PiAxNlxyXG5cdFx0XHQvLyBDdHJsXHRcdD0+IDE3XHJcblx0XHRcdC8vIEFsdFx0XHQgPT4gMThcclxuXHRcdFx0Ly8gQ2FwcyBsb2NrICAgPT4gMjBcclxuXHRcdFx0Ly8gRW5kXHRcdCA9PiAzNVxyXG5cdFx0XHQvLyBIb21lXHRcdD0+IDM2XHJcblx0XHRcdC8vIExlZnQgYXJyb3cgID0+IDM3XHJcblx0XHRcdC8vIFVwIGFycm93XHQ9PiAzOFxyXG5cdFx0XHQvLyBSaWdodCBhcnJvdyA9PiAzOVxyXG5cdFx0XHQvLyBEb3duIGFycm93ICA9PiA0MFxyXG5cdFx0XHQvLyBJbnNlcnRcdCAgPT4gNDVcclxuXHRcdFx0Ly8gTnVtIGxvY2tcdD0+IDE0NFxyXG5cdFx0XHQvLyBBbHRHciBrZXkgICA9PiAyMjVcclxuXHRcdFx0dmFyIGV4Y2x1ZGVkS2V5cyA9IFtcclxuXHRcdFx0XHQxNiwgMTcsIDE4LCAyMCwgMzUsIDM2LCAzNyxcclxuXHRcdFx0XHQzOCwgMzksIDQwLCA0NSwgMTQ0LCAyMjVcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdGlmIChldmVudC53aGljaCA9PT0gOSAmJiB0aGlzLmVsZW1lbnRWYWx1ZShlbGVtZW50KSA9PT0gXCJcIiB8fCAkLmluQXJyYXkoZXZlbnQua2V5Q29kZSwgZXhjbHVkZWRLZXlzKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDEzICYmIGVsZW1lbnQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMuY3VycmVudEZvcm0pLmRhdGEoJ3ZhbGlkYXRvcicpLmNoZWNrRm9ybSgpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgdGhpcy5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudChlbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uY2xpY2s6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0Ly8gY2xpY2sgb24gc2VsZWN0cywgcmFkaW9idXR0b25zIGFuZCBjaGVja2JveGVzXHJcblx0XHRcdGlmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudCk7XHJcblxyXG5cdFx0XHQvLyBvciBvcHRpb24gZWxlbWVudHMsIGNoZWNrIHBhcmVudCBzZWxlY3QgaW4gdGhhdCBjYXNlXHJcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnROb2RlLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xyXG5cdFx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcInJhZGlvXCIpIHtcclxuXHRcdFx0XHR0aGlzLmZpbmRCeU5hbWUoZWxlbWVudC5uYW1lKS5hZGRDbGFzcyhlcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh2YWxpZENsYXNzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MsIHZhbGlkQ2xhc3MpIHtcclxuXHRcdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XHJcblx0XHRcdFx0dGhpcy5maW5kQnlOYW1lKGVsZW1lbnQubmFtZSkucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcykuYWRkQ2xhc3ModmFsaWRDbGFzcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChlbGVtZW50KS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKS5hZGRDbGFzcyh2YWxpZENsYXNzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9qUXVlcnkudmFsaWRhdG9yLnNldERlZmF1bHRzL1xyXG5cdHNldERlZmF1bHRzOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cdFx0JC5leHRlbmQoJC52YWxpZGF0b3IuZGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHR9LFxyXG5cclxuXHRtZXNzYWdlczoge1xyXG5cdFx0cmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIixcclxuXHRcdHJlbW90ZTogXCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsXHJcblx0XHRlbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiLFxyXG5cdFx0dXJsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC5cIixcclxuXHRcdGRhdGU6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIixcclxuXHRcdGRhdGVJU086IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS5cIixcclxuXHRcdG51bWJlcjogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuXCIsXHJcblx0XHRkaWdpdHM6IFwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLFxyXG5cdFx0Y3JlZGl0Y2FyZDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIuXCIsXHJcblx0XHRlcXVhbFRvOiBcIlBsZWFzZSBlbnRlciB0aGUgc2FtZSB2YWx1ZSBhZ2Fpbi5cIixcclxuXHRcdG1heGxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiksXHJcblx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIiksXHJcblx0XHRyYW5nZWxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIpLFxyXG5cdFx0cmFuZ2U6ICQudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIpLFxyXG5cdFx0bWF4OiAkLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxcclxuXHRcdG1pbjogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIilcclxuXHR9LFxyXG5cclxuXHRhdXRvQ3JlYXRlUmFuZ2VzOiBmYWxzZSxcclxuXHJcblx0cHJvdG90eXBlOiB7XHJcblxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMubGFiZWxDb250YWluZXIgPSAkKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lcik7XHJcblx0XHRcdHRoaXMuZXJyb3JDb250ZXh0ID0gdGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGggJiYgdGhpcy5sYWJlbENvbnRhaW5lciB8fCAkKHRoaXMuY3VycmVudEZvcm0pO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lcnMgPSAkKHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIpLmFkZCh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpO1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZCA9IHt9O1xyXG5cdFx0XHR0aGlzLnZhbHVlQ2FjaGUgPSB7fTtcclxuXHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdCA9IDA7XHJcblx0XHRcdHRoaXMucGVuZGluZyA9IHt9O1xyXG5cdFx0XHR0aGlzLmludmFsaWQgPSB7fTtcclxuXHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cclxuXHRcdFx0dmFyIGdyb3VwcyA9ICh0aGlzLmdyb3VwcyA9IHt9KSxcclxuXHRcdFx0XHRydWxlcztcclxuXHRcdFx0JC5lYWNoKHRoaXMuc2V0dGluZ3MuZ3JvdXBzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCgvXFxzLyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQuZWFjaCh2YWx1ZSwgZnVuY3Rpb24oaW5kZXgsIG5hbWUpIHtcclxuXHRcdFx0XHRcdGdyb3Vwc1tuYW1lXSA9IGtleTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJ1bGVzID0gdGhpcy5zZXR0aW5ncy5ydWxlcztcclxuXHRcdFx0JC5lYWNoKHJ1bGVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0cnVsZXNba2V5XSA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUodmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGRlbGVnYXRlKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gV2V6b21GaXhcclxuXHRcdFx0XHR2YXIgdmFsaWRhdG9yLCBmb3JtLCBldmVudFR5cGU7XHJcblx0XHRcdFx0Zm9ybSA9IHRoaXMuZm9ybTtcclxuXHJcblx0XHRcdFx0aWYgKCFmb3JtKSB7XHJcblx0XHRcdFx0XHRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZGl2W2RhdGEtZm9ybT0ndHJ1ZSddXCIpLmdldCgwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFsaWRhdG9yID0gJC5kYXRhKGZvcm0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0XHRcdGV2ZW50VHlwZSA9IFwib25cIiArIGV2ZW50LnR5cGUucmVwbGFjZSgvXnZhbGlkYXRlLywgXCJcIik7XHJcblx0XHRcdFx0Lyp0aGlzLnNldHRpbmdzID0gdmFsaWRhdG9yLnNldHRpbmdzO1xyXG5cdFx0XHRcdGlmICh0aGlzLnNldHRpbmdzW2V2ZW50VHlwZV0gJiYgIXRoaXMuaXModGhpcy5zZXR0aW5ncy5pZ25vcmUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzW2V2ZW50VHlwZV0uY2FsbCh2YWxpZGF0b3IsIHRoaXNbMF0sIGV2ZW50KTtcclxuXHRcdFx0XHR9Ki9cclxuXHRcdFx0XHR2YXIgc2V0dGluZ3MgPSB2YWxpZGF0b3Iuc2V0dGluZ3M7XHJcblx0XHRcdFx0aWYgKHNldHRpbmdzW2V2ZW50VHlwZV0gJiYgISQodGhpcykuaXMoc2V0dGluZ3MuaWdub3JlKSkge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3NbZXZlbnRUeXBlXS5jYWxsKHZhbGlkYXRvciwgdGhpcywgZXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdC5vbihcImZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGVcIixcclxuXHRcdFx0XHRcdFwiOnRleHQsIFt0eXBlPSdwYXNzd29yZCddLCBbdHlwZT0nZmlsZSddLCBzZWxlY3QsIHRleHRhcmVhLCBbdHlwZT0nbnVtYmVyJ10sIFt0eXBlPSdzZWFyY2gnXSwgXCIgK1xyXG5cdFx0XHRcdFx0XCJbdHlwZT0ndGVsJ10sIFt0eXBlPSd1cmwnXSwgW3R5cGU9J2VtYWlsJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZSddLCBbdHlwZT0nbW9udGgnXSwgXCIgK1xyXG5cdFx0XHRcdFx0XCJbdHlwZT0nd2VlayddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J3JhbmdlJ10sIFt0eXBlPSdjb2xvciddLCBcIiArXHJcblx0XHRcdFx0XHRcIlt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLCBkZWxlZ2F0ZSlcclxuXHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIG9sZElFXHJcblx0XHRcdFx0Ly8gXCJzZWxlY3RcIiBpcyBwcm92aWRlZCBhcyBldmVudC50YXJnZXQgd2hlbiBjbGlja2luZyBhIG9wdGlvblxyXG5cdFx0XHRcdC5vbihcImNsaWNrLnZhbGlkYXRlXCIsIFwic2VsZWN0LCBvcHRpb24sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLCBkZWxlZ2F0ZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcikge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkub24oXCJpbnZhbGlkLWZvcm0udmFsaWRhdGVcIiwgdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCBhcmlhLXJlcXVpcmVkIHRvIGFueSBTdGF0aWMvRGF0YS9DbGFzcyByZXF1aXJlZCBmaWVsZHMgYmVmb3JlIGZpcnN0IHZhbGlkYXRpb25cclxuXHRcdFx0Ly8gU2NyZWVuIHJlYWRlcnMgcmVxdWlyZSB0aGlzIGF0dHJpYnV0ZSB0byBiZSBwcmVzZW50IGJlZm9yZSB0aGUgaW5pdGlhbCBzdWJtaXNzaW9uIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUctVEVDSFMvQVJJQTIuaHRtbFxyXG5cdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbcmVxdWlyZWRdLCBbZGF0YS1ydWxlLXJlcXVpcmVkXSwgLnJlcXVpcmVkXCIpLmF0dHIoXCJhcmlhLXJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5mb3JtL1xyXG5cdFx0Zm9ybTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuY2hlY2tGb3JtKCk7XHJcblx0XHRcdCQuZXh0ZW5kKHRoaXMuc3VibWl0dGVkLCB0aGlzLmVycm9yTWFwKTtcclxuXHRcdFx0dGhpcy5pbnZhbGlkID0gJC5leHRlbmQoe30sIHRoaXMuZXJyb3JNYXApO1xyXG5cdFx0XHRpZiAoIXRoaXMudmFsaWQoKSkge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIiwgW3RoaXNdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNob3dFcnJvcnMoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hlY2tGb3JtOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlRm9ybSgpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudHMgPSAodGhpcy5jdXJyZW50RWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKCkpOyBlbGVtZW50c1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jaGVjayhlbGVtZW50c1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5lbGVtZW50L1xyXG5cdFx0ZWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgY2xlYW5FbGVtZW50ID0gdGhpcy5jbGVhbihlbGVtZW50KSxcclxuXHRcdFx0XHRjaGVja0VsZW1lbnQgPSB0aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IoY2xlYW5FbGVtZW50KSxcclxuXHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cclxuXHRcdFx0dGhpcy5sYXN0RWxlbWVudCA9IGNoZWNrRWxlbWVudDtcclxuXHJcblx0XHRcdGlmIChjaGVja0VsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmludmFsaWRbY2xlYW5FbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucHJlcGFyZUVsZW1lbnQoY2hlY2tFbGVtZW50KTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50cyA9ICQoY2hlY2tFbGVtZW50KTtcclxuXHJcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5jaGVjayhjaGVja0VsZW1lbnQpICE9PSBmYWxzZTtcclxuXHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5pbnZhbGlkW2NoZWNrRWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pbnZhbGlkW2NoZWNrRWxlbWVudC5uYW1lXSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEFkZCBhcmlhLWludmFsaWQgc3RhdHVzIGZvciBzY3JlZW4gcmVhZGVyc1xyXG5cdFx0XHQkKGVsZW1lbnQpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwgIXJlc3VsdCk7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMubnVtYmVyT2ZJbnZhbGlkcygpKSB7XHJcblx0XHRcdFx0Ly8gSGlkZSBlcnJvciBjb250YWluZXJzIG9uIGxhc3QgZXJyb3JcclxuXHRcdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMudG9IaWRlLmFkZCh0aGlzLmNvbnRhaW5lcnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2hvd0Vycm9ycygpO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLnNob3dFcnJvcnMvXHJcblx0XHRzaG93RXJyb3JzOiBmdW5jdGlvbihlcnJvcnMpIHtcclxuXHRcdFx0aWYgKGVycm9ycykge1xyXG5cdFx0XHRcdC8vIGFkZCBpdGVtcyB0byBlcnJvciBsaXN0IGFuZCBtYXBcclxuXHRcdFx0XHQkLmV4dGVuZCh0aGlzLmVycm9yTWFwLCBlcnJvcnMpO1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBlcnJvcnMpIHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBlcnJvcnNbbmFtZV0sXHJcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IHRoaXMuZmluZEJ5TmFtZShuYW1lKVswXVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHJlbW92ZSBpdGVtcyBmcm9tIHN1Y2Nlc3MgbGlzdFxyXG5cdFx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSAkLmdyZXAodGhpcy5zdWNjZXNzTGlzdCwgZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICEoZWxlbWVudC5uYW1lIGluIGVycm9ycyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycykge1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycy5jYWxsKHRoaXMsIHRoaXMuZXJyb3JNYXAsIHRoaXMuZXJyb3JMaXN0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5yZXNldEZvcm0vXHJcblx0XHRyZXNldEZvcm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJC5mbi5yZXNldEZvcm0pIHtcclxuXHRcdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLnJlc2V0Rm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc3VibWl0dGVkID0ge307XHJcblx0XHRcdHRoaXMubGFzdEVsZW1lbnQgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnByZXBhcmVGb3JtKCk7XHJcblx0XHRcdHRoaXMuaGlkZUVycm9ycygpO1xyXG5cdFx0XHR2YXIgaSwgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKClcclxuXHRcdFx0XHQucmVtb3ZlRGF0YShcInByZXZpb3VzVmFsdWVcIilcclxuXHRcdFx0XHQucmVtb3ZlQXR0cihcImFyaWEtaW52YWxpZFwiKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgZWxlbWVudHNbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnRzW2ldLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIFwiXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlbGVtZW50cy5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG51bWJlck9mSW52YWxpZHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgodGhpcy5pbnZhbGlkKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b2JqZWN0TGVuZ3RoOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0LyoganNoaW50IHVudXNlZDogZmFsc2UgKi9cclxuXHRcdFx0dmFyIGNvdW50ID0gMCxcclxuXHRcdFx0XHRpO1xyXG5cdFx0XHRmb3IgKGkgaW4gb2JqKSB7XHJcblx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY291bnQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGVFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmhpZGVUaGVzZSh0aGlzLnRvSGlkZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGVUaGVzZTogZnVuY3Rpb24oZXJyb3JzKSB7XHJcblx0XHRcdGVycm9ycy5ub3QodGhpcy5jb250YWluZXJzKS50ZXh0KFwiXCIpO1xyXG5cdFx0XHR0aGlzLmFkZFdyYXBwZXIoZXJyb3JzKS5oaWRlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHZhbGlkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpc1ZhbGlkRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnZhbGlkW2VsZW1lbnQubmFtZV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICF0aGlzLmludmFsaWRbZWxlbWVudC5uYW1lXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2l6ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yTGlzdC5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvY3VzSW52YWxpZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmZvY3VzSW52YWxpZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQkKHRoaXMuZmluZExhc3RBY3RpdmUoKSB8fCB0aGlzLmVycm9yTGlzdC5sZW5ndGggJiYgdGhpcy5lcnJvckxpc3RbMF0uZWxlbWVudCB8fCBbXSlcclxuXHRcdFx0XHRcdC5maWx0ZXIoXCI6dmlzaWJsZVwiKVxyXG5cdFx0XHRcdFx0LmZvY3VzKClcclxuXHRcdFx0XHRcdC8vIG1hbnVhbGx5IHRyaWdnZXIgZm9jdXNpbiBldmVudDsgd2l0aG91dCBpdCwgZm9jdXNpbiBoYW5kbGVyIGlzbid0IGNhbGxlZCwgZmluZExhc3RBY3RpdmUgd29uJ3QgaGF2ZSBhbnl0aGluZyB0byBmaW5kXHJcblx0XHRcdFx0XHQudHJpZ2dlcihcImZvY3VzaW5cIik7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIElFIHRocm93aW5nIGVycm9ycyB3aGVuIGZvY3VzaW5nIGhpZGRlbiBlbGVtZW50c1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRmaW5kTGFzdEFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBsYXN0QWN0aXZlID0gdGhpcy5sYXN0QWN0aXZlO1xyXG5cdFx0XHRyZXR1cm4gbGFzdEFjdGl2ZSAmJiAkLmdyZXAodGhpcy5lcnJvckxpc3QsIGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0XHRyZXR1cm4gbi5lbGVtZW50Lm5hbWUgPT09IGxhc3RBY3RpdmUubmFtZTtcclxuXHRcdFx0fSkubGVuZ3RoID09PSAxICYmIGxhc3RBY3RpdmU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHZhbGlkYXRvciA9IHRoaXMsXHJcblx0XHRcdFx0cnVsZXNDYWNoZSA9IHt9O1xyXG5cclxuXHRcdFx0Ly8gc2VsZWN0IGFsbCB2YWxpZCBpbnB1dHMgaW5zaWRlIHRoZSBmb3JtIChubyBzdWJtaXQgb3IgcmVzZXQgYnV0dG9ucylcclxuXHRcdFx0cmV0dXJuICQodGhpcy5jdXJyZW50Rm9ybSlcclxuXHRcdFx0LmZpbmQoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKVxyXG5cdFx0XHQubm90KFwiOnN1Ym1pdCwgOnJlc2V0LCA6aW1hZ2UsIDpkaXNhYmxlZFwiKVxyXG5cdFx0XHQubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKVxyXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5uYW1lICYmIHZhbGlkYXRvci5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIiVvIGhhcyBubyBuYW1lIGFzc2lnbmVkXCIsIHRoaXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2VsZWN0IG9ubHkgdGhlIGZpcnN0IGVsZW1lbnQgZm9yIGVhY2ggbmFtZSwgYW5kIG9ubHkgdGhvc2Ugd2l0aCBydWxlcyBzcGVjaWZpZWRcclxuXHRcdFx0XHRpZiAodGhpcy5uYW1lIGluIHJ1bGVzQ2FjaGUgfHwgIXZhbGlkYXRvci5vYmplY3RMZW5ndGgoJCh0aGlzKS5ydWxlcygpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cnVsZXNDYWNoZVt0aGlzLm5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFuOiBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0XHRyZXR1cm4gJChzZWxlY3RvcilbMF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBlcnJvckNsYXNzID0gdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKTtcclxuXHRcdFx0cmV0dXJuICQodGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIi5cIiArIGVycm9yQ2xhc3MsIHRoaXMuZXJyb3JDb250ZXh0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuZXJyb3JNYXAgPSB7fTtcclxuXHRcdFx0dGhpcy50b1Nob3cgPSAkKFtdKTtcclxuXHRcdFx0dGhpcy50b0hpZGUgPSAkKFtdKTtcclxuXHRcdFx0dGhpcy5jdXJyZW50RWxlbWVudHMgPSAkKFtdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJlcGFyZUZvcm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy5lcnJvcnMoKS5hZGQodGhpcy5jb250YWluZXJzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJlcGFyZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMuZXJyb3JzRm9yKGVsZW1lbnQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRlbGVtZW50VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIHZhbCxcclxuXHRcdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdFx0dHlwZSA9IGVsZW1lbnQudHlwZTtcclxuXHJcblx0XHRcdGlmICh0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLnZhbCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVsZW1lbnQudmFsaWRpdHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC52YWxpZGl0eS5iYWRJbnB1dCA/IGZhbHNlIDogJGVsZW1lbnQudmFsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhbCA9ICRlbGVtZW50LnZhbCgpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiB2YWwucmVwbGFjZSgvXFxyL2csIFwiXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdGVsZW1lbnQgPSB0aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IodGhpcy5jbGVhbihlbGVtZW50KSk7XHJcblxyXG5cdFx0XHR2YXIgcnVsZXMgPSAkKGVsZW1lbnQpLnJ1bGVzKCksXHJcblx0XHRcdFx0cnVsZXNDb3VudCA9ICQubWFwKHJ1bGVzLCBmdW5jdGlvbihuLCBpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHR9KS5sZW5ndGgsXHJcblx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2UsXHJcblx0XHRcdFx0dmFsID0gdGhpcy5lbGVtZW50VmFsdWUoZWxlbWVudCksXHJcblx0XHRcdFx0cmVzdWx0LCBtZXRob2QsIHJ1bGU7XHJcblxyXG5cdFx0XHRmb3IgKG1ldGhvZCBpbiBydWxlcykge1xyXG5cdFx0XHRcdHJ1bGUgPSB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbWV0ZXJzOiBydWxlc1ttZXRob2RdIH07XHJcblx0XHRcdFx0dHJ5IHtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQgPSAkLnZhbGlkYXRvci5tZXRob2RzW21ldGhvZF0uY2FsbCh0aGlzLCB2YWwsIGVsZW1lbnQsIHJ1bGUucGFyYW1ldGVycyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gaWYgYSBtZXRob2QgaW5kaWNhdGVzIHRoYXQgdGhlIGZpZWxkIGlzIG9wdGlvbmFsIGFuZCB0aGVyZWZvcmUgdmFsaWQsXHJcblx0XHRcdFx0XHQvLyBkb24ndCBtYXJrIGl0IGFzIHZhbGlkIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHJ1bGVzXHJcblx0XHRcdFx0XHRpZiAocmVzdWx0ID09PSBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIiAmJiBydWxlc0NvdW50ID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdGRlcGVuZGVuY3lNaXNtYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gXCJwZW5kaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLnRvSGlkZS5ub3QodGhpcy5lcnJvcnNGb3IoZWxlbWVudCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5mb3JtYXRBbmRBZGQoZWxlbWVudCwgcnVsZSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIgKyBlbGVtZW50LmlkICsgXCIsIGNoZWNrIHRoZSAnXCIgKyBydWxlLm1ldGhvZCArIFwiJyBtZXRob2QuXCIsIGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0ZS5tZXNzYWdlICs9IFwiLiAgRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIiArIGVsZW1lbnQuaWQgKyBcIiwgY2hlY2sgdGhlICdcIiArIHJ1bGUubWV0aG9kICsgXCInIG1ldGhvZC5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aHJvdyBlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGVwZW5kZW5jeU1pc21hdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm9iamVjdExlbmd0aChydWxlcykpIHtcclxuXHRcdFx0XHR0aGlzLnN1Y2Nlc3NMaXN0LnB1c2goZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHJldHVybiB0aGUgY3VzdG9tIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGFuZCB2YWxpZGF0aW9uIG1ldGhvZFxyXG5cdFx0Ly8gc3BlY2lmaWVkIGluIHRoZSBlbGVtZW50J3MgSFRNTDUgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdC8vIHJldHVybiB0aGUgZ2VuZXJpYyBtZXNzYWdlIGlmIHByZXNlbnQgYW5kIG5vIG1ldGhvZCBzcGVjaWZpYyBtZXNzYWdlIGlzIHByZXNlbnRcclxuXHRcdGN1c3RvbURhdGFNZXNzYWdlOiBmdW5jdGlvbihlbGVtZW50LCBtZXRob2QpIHtcclxuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZGF0YShcIm1zZ1wiICsgbWV0aG9kLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuXHRcdFx0XHRtZXRob2Quc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpIHx8ICQoZWxlbWVudCkuZGF0YShcIm1zZ1wiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBjdXN0b20gbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgbmFtZSBhbmQgdmFsaWRhdGlvbiBtZXRob2RcclxuXHRcdGN1c3RvbU1lc3NhZ2U6IGZ1bmN0aW9uKG5hbWUsIG1ldGhvZCkge1xyXG5cdFx0XHR2YXIgbSA9IHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbbmFtZV07XHJcblx0XHRcdHJldHVybiBtICYmIChtLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgPyBtIDogbVttZXRob2RdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBkZWZpbmVkIGFyZ3VtZW50LCBhbGxvd2luZyBlbXB0eSBzdHJpbmdzXHJcblx0XHRmaW5kRGVmaW5lZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZWZhdWx0TWVzc2FnZTogZnVuY3Rpb24oZWxlbWVudCwgbWV0aG9kKSB7XHJcblx0XHRcdC8vIFdlem9tRml4XHJcblx0XHRcdHZhciBtZXRob2RfbmFtZSA9IF9nZXRNZXRob2RNc2dOYW1lKGVsZW1lbnQsIG1ldGhvZCk7XHJcblx0XHRcdHJldHVybiB0aGlzLmZpbmREZWZpbmVkKFxyXG5cdFx0XHRcdHRoaXMuY3VzdG9tTWVzc2FnZShlbGVtZW50Lm5hbWUsIG1ldGhvZCksXHJcblx0XHRcdFx0dGhpcy5jdXN0b21EYXRhTWVzc2FnZShlbGVtZW50LCBtZXRob2QpLFxyXG5cdFx0XHRcdC8vIHRpdGxlIGlzIG5ldmVyIHVuZGVmaW5lZCwgc28gaGFuZGxlIGVtcHR5IHN0cmluZyBhcyB1bmRlZmluZWRcclxuXHRcdFx0XHQhdGhpcy5zZXR0aW5ncy5pZ25vcmVUaXRsZSAmJiBlbGVtZW50LnRpdGxlIHx8IHVuZGVmaW5lZCxcclxuXHRcdFx0XHQkLnZhbGlkYXRvci5tZXNzYWdlc1ttZXRob2RfbmFtZV0sXHJcblx0XHRcdFx0XCI8c3Ryb25nPldhcm5pbmc6IE5vIG1lc3NhZ2UgZGVmaW5lZCBmb3IgXCIgKyBlbGVtZW50Lm5hbWUgKyBcIjwvc3Ryb25nPlwiXHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvcm1hdEFuZEFkZDogZnVuY3Rpb24oZWxlbWVudCwgcnVsZSkge1xyXG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2UoZWxlbWVudCwgcnVsZS5tZXRob2QpLFxyXG5cdFx0XHRcdHRoZXJlZ2V4ID0gL1xcJD9cXHsoXFxkKylcXH0vZztcclxuXHRcdFx0aWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZS5jYWxsKHRoaXMsIHJ1bGUucGFyYW1ldGVycywgZWxlbWVudCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhlcmVnZXgudGVzdChtZXNzYWdlKSkge1xyXG5cdFx0XHRcdG1lc3NhZ2UgPSAkLnZhbGlkYXRvci5mb3JtYXQobWVzc2FnZS5yZXBsYWNlKHRoZXJlZ2V4LCBcInskMX1cIiksIHJ1bGUucGFyYW1ldGVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5lcnJvckxpc3QucHVzaCh7XHJcblx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcclxuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxyXG5cdFx0XHRcdG1ldGhvZDogcnVsZS5tZXRob2RcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmVycm9yTWFwW2VsZW1lbnQubmFtZV0gPSBtZXNzYWdlO1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZFtlbGVtZW50Lm5hbWVdID0gbWVzc2FnZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkV3JhcHBlcjogZnVuY3Rpb24odG9Ub2dnbGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Mud3JhcHBlcikge1xyXG5cdFx0XHRcdHRvVG9nZ2xlID0gdG9Ub2dnbGUuYWRkKHRvVG9nZ2xlLnBhcmVudCh0aGlzLnNldHRpbmdzLndyYXBwZXIpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdG9Ub2dnbGU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlZmF1bHRTaG93RXJyb3JzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGksIGVsZW1lbnRzLCBlcnJvcjtcclxuXHRcdFx0Zm9yIChpID0gMDsgdGhpcy5lcnJvckxpc3RbaV07IGkrKykge1xyXG5cdFx0XHRcdGVycm9yID0gdGhpcy5lcnJvckxpc3RbaV07XHJcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVycm9yLmVsZW1lbnQsIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zaG93TGFiZWwoZXJyb3IuZWxlbWVudCwgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdHRoaXMudG9TaG93ID0gdGhpcy50b1Nob3cuYWRkKHRoaXMuY29udGFpbmVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Muc3VjY2Vzcykge1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IHRoaXMuc3VjY2Vzc0xpc3RbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93TGFiZWwodGhpcy5zdWNjZXNzTGlzdFtpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0Zm9yIChpID0gMCwgZWxlbWVudHMgPSB0aGlzLnZhbGlkRWxlbWVudHMoKTsgZWxlbWVudHNbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnRzW2ldLCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUubm90KHRoaXMudG9TaG93KTtcclxuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKCk7XHJcblx0XHRcdHRoaXMuYWRkV3JhcHBlcih0aGlzLnRvU2hvdykuc2hvdygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR2YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudEVsZW1lbnRzLm5vdCh0aGlzLmludmFsaWRFbGVtZW50cygpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW52YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQodGhpcy5lcnJvckxpc3QpLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvd0xhYmVsOiBmdW5jdGlvbihlbGVtZW50LCBtZXNzYWdlKSB7XHJcblx0XHRcdHZhciBwbGFjZSwgZ3JvdXAsIGVycm9ySUQsXHJcblx0XHRcdFx0ZXJyb3IgPSB0aGlzLmVycm9yc0ZvcihlbGVtZW50KSxcclxuXHRcdFx0XHRlbGVtZW50SUQgPSB0aGlzLmlkT3JOYW1lKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGRlc2NyaWJlZEJ5ID0gJChlbGVtZW50KS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKTtcclxuXHRcdFx0aWYgKGVycm9yLmxlbmd0aCkge1xyXG5cdFx0XHRcdC8vIHJlZnJlc2ggZXJyb3Ivc3VjY2VzcyBjbGFzc1xyXG5cdFx0XHRcdGVycm9yLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuXHRcdFx0XHQvLyByZXBsYWNlIG1lc3NhZ2Ugb24gZXhpc3RpbmcgbGFiZWxcclxuXHRcdFx0XHRlcnJvci5odG1sKG1lc3NhZ2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBlbGVtZW50XHJcblx0XHRcdFx0ZXJyb3IgPSAkKFwiPFwiICsgdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIj5cIilcclxuXHRcdFx0XHRcdC5hdHRyKFwiaWRcIiwgZWxlbWVudElEICsgXCItZXJyb3JcIilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpXHJcblx0XHRcdFx0XHQuaHRtbChtZXNzYWdlIHx8IFwiXCIpO1xyXG5cclxuXHRcdFx0XHQvLyBNYWludGFpbiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdG8gYmUgcGxhY2VkIGludG8gdGhlIERPTVxyXG5cdFx0XHRcdHBsYWNlID0gZXJyb3I7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Mud3JhcHBlcikge1xyXG5cdFx0XHRcdFx0Ly8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGV2ZW4gaW4gSUVcclxuXHRcdFx0XHRcdC8vIGFjdHVhbGx5IHNob3dpbmcgdGhlIHdyYXBwZWQgZWxlbWVudCBpcyBoYW5kbGVkIGVsc2V3aGVyZVxyXG5cdFx0XHRcdFx0cGxhY2UgPSBlcnJvci5oaWRlKCkuc2hvdygpLndyYXAoXCI8XCIgKyB0aGlzLnNldHRpbmdzLndyYXBwZXIgKyBcIi8+XCIpLnBhcmVudCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMubGFiZWxDb250YWluZXIuYXBwZW5kKHBsYWNlKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQocGxhY2UsICQoZWxlbWVudCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRwbGFjZS5pbnNlcnRBZnRlcihlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIExpbmsgZXJyb3IgYmFjayB0byB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdGlmIChlcnJvci5pcyhcImxhYmVsXCIpKSB7XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgZXJyb3IgaXMgYSBsYWJlbCwgdGhlbiBhc3NvY2lhdGUgdXNpbmcgJ2ZvcidcclxuXHRcdFx0XHRcdGVycm9yLmF0dHIoXCJmb3JcIiwgZWxlbWVudElEKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yLnBhcmVudHMoXCJsYWJlbFtmb3I9J1wiICsgZWxlbWVudElEICsgXCInXVwiKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGlzIG5vdCBhIGNoaWxkIG9mIGFuIGFzc29jaWF0ZWQgbGFiZWwsIHRoZW4gaXQncyBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdC8vIHRvIGV4cGxpY2l0bHkgYXBwbHkgYXJpYS1kZXNjcmliZWRieVxyXG5cclxuXHRcdFx0XHRcdGVycm9ySUQgPSBlcnJvci5hdHRyKFwiaWRcIikucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18XFwkKS9nLCBcIlxcXFwkMVwiKTtcclxuXHRcdFx0XHRcdC8vIFJlc3BlY3QgZXhpc3Rpbmcgbm9uLWVycm9yIGFyaWEtZGVzY3JpYmVkYnlcclxuXHRcdFx0XHRcdGlmICghZGVzY3JpYmVkQnkpIHtcclxuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgPSBlcnJvcklEO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICghZGVzY3JpYmVkQnkubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBlcnJvcklEICsgXCJcXFxcYlwiKSkpIHtcclxuXHRcdFx0XHRcdFx0Ly8gQWRkIHRvIGVuZCBvZiBsaXN0IGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcclxuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgKz0gXCIgXCIgKyBlcnJvcklEO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JChlbGVtZW50KS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBkZXNjcmliZWRCeSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBlbGVtZW50IGlzIGdyb3VwZWQsIHRoZW4gYXNzaWduIHRvIGFsbCBlbGVtZW50cyBpbiB0aGUgc2FtZSBncm91cFxyXG5cdFx0XHRcdFx0Z3JvdXAgPSB0aGlzLmdyb3Vwc1tlbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHRcdFx0aWYgKGdyb3VwKSB7XHJcblx0XHRcdFx0XHRcdCQuZWFjaCh0aGlzLmdyb3VwcywgZnVuY3Rpb24obmFtZSwgdGVzdGdyb3VwKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRlc3Rncm91cCA9PT0gZ3JvdXApIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyBuYW1lICsgXCInXVwiLCB0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgZXJyb3IuYXR0cihcImlkXCIpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIW1lc3NhZ2UgJiYgdGhpcy5zZXR0aW5ncy5zdWNjZXNzKSB7XHJcblx0XHRcdFx0ZXJyb3IudGV4dChcIlwiKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuc2V0dGluZ3Muc3VjY2VzcyA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0ZXJyb3IuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5zdWNjZXNzKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zdWNjZXNzKGVycm9yLCBlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50b1Nob3cgPSB0aGlzLnRvU2hvdy5hZGQoZXJyb3IpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRlcnJvcnNGb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIG5hbWUgPSB0aGlzLmlkT3JOYW1lKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGRlc2NyaWJlciA9ICQoZWxlbWVudCkuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiksXHJcblx0XHRcdFx0c2VsZWN0b3IgPSBcImxhYmVsW2Zvcj0nXCIgKyBuYW1lICsgXCInXSwgbGFiZWxbZm9yPSdcIiArIG5hbWUgKyBcIiddICpcIjtcclxuXHJcblx0XHRcdC8vIGFyaWEtZGVzY3JpYmVkYnkgc2hvdWxkIGRpcmVjdGx5IHJlZmVyZW5jZSB0aGUgZXJyb3IgZWxlbWVudFxyXG5cdFx0XHRpZiAoZGVzY3JpYmVyKSB7XHJcblx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3RvciArIFwiLCAjXCIgKyBkZXNjcmliZXIucmVwbGFjZSgvXFxzKy9nLCBcIiwgI1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHRcdC5lcnJvcnMoKVxyXG5cdFx0XHRcdC5maWx0ZXIoc2VsZWN0b3IpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpZE9yTmFtZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncm91cHNbZWxlbWVudC5uYW1lXSB8fCAodGhpcy5jaGVja2FibGUoZWxlbWVudCkgPyBlbGVtZW50Lm5hbWUgOiBlbGVtZW50LmlkIHx8IGVsZW1lbnQubmFtZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHZhbGlkYXRpb25UYXJnZXRGb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdC8vIElmIHJhZGlvL2NoZWNrYm94LCB2YWxpZGF0ZSBmaXJzdCBlbGVtZW50IGluIGdyb3VwIGluc3RlYWRcclxuXHRcdFx0aWYgKHRoaXMuY2hlY2thYmxlKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBbHdheXMgYXBwbHkgaWdub3JlIGZpbHRlclxyXG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpWzBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja2FibGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuICgvcmFkaW98Y2hlY2tib3gvaSkudGVzdChlbGVtZW50LnR5cGUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaW5kQnlOYW1lOiBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRcdHJldHVybiAkKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbbmFtZT0nXCIgKyBuYW1lICsgXCInXVwiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0TGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRjYXNlIFwic2VsZWN0XCI6XHJcblx0XHRcdFx0cmV0dXJuICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgZWxlbWVudCkubGVuZ3RoO1xyXG5cdFx0XHRjYXNlIFwiaW5wdXRcIjpcclxuXHRcdFx0XHRpZiAodGhpcy5jaGVja2FibGUoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpbmRCeU5hbWUoZWxlbWVudC5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlcGVuZDogZnVuY3Rpb24ocGFyYW0sIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIHBhcmFtXSA/IHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIHBhcmFtXShwYXJhbSwgZWxlbWVudCkgOiB0cnVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZXBlbmRUeXBlczoge1xyXG5cdFx0XHRcImJvb2xlYW5cIjogZnVuY3Rpb24ocGFyYW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW07XHJcblx0XHRcdH0sXHJcblx0XHRcdFwic3RyaW5nXCI6IGZ1bmN0aW9uKHBhcmFtLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuICEhJChwYXJhbSwgZWxlbWVudC5mb3JtKS5sZW5ndGg7XHJcblx0XHRcdH0sXHJcblx0XHRcdFwiZnVuY3Rpb25cIjogZnVuY3Rpb24ocGFyYW0sIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW0oZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0b3B0aW9uYWw6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIHZhbCA9IHRoaXMuZWxlbWVudFZhbHVlKGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gISQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCh0aGlzLCB2YWwsIGVsZW1lbnQpICYmIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzdGFydFJlcXVlc3Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnBlbmRpbmdbZWxlbWVudC5uYW1lXSkge1xyXG5cdFx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QrKztcclxuXHRcdFx0XHR0aGlzLnBlbmRpbmdbZWxlbWVudC5uYW1lXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c3RvcFJlcXVlc3Q6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbGlkKSB7XHJcblx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QtLTtcclxuXHRcdFx0Ly8gc29tZXRpbWVzIHN5bmNocm9uaXphdGlvbiBmYWlscywgbWFrZSBzdXJlIHBlbmRpbmdSZXF1ZXN0IGlzIG5ldmVyIDwgMFxyXG5cdFx0XHRpZiAodGhpcy5wZW5kaW5nUmVxdWVzdCA8IDApIHtcclxuXHRcdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGUgdGhpcy5wZW5kaW5nW2VsZW1lbnQubmFtZV07XHJcblx0XHRcdGlmICh2YWxpZCAmJiB0aGlzLnBlbmRpbmdSZXF1ZXN0ID09PSAwICYmIHRoaXMuZm9ybVN1Ym1pdHRlZCAmJiB0aGlzLmZvcm0oKSkge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkuc3VibWl0KCk7XHJcblx0XHRcdFx0dGhpcy5mb3JtU3VibWl0dGVkID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoIXZhbGlkICYmIHRoaXMucGVuZGluZ1JlcXVlc3QgPT09IDAgJiYgdGhpcy5mb3JtU3VibWl0dGVkKSB7XHJcblx0XHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLCBbdGhpc10pO1xyXG5cdFx0XHRcdHRoaXMuZm9ybVN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHByZXZpb3VzVmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuICQuZGF0YShlbGVtZW50LCBcInByZXZpb3VzVmFsdWVcIikgfHwgJC5kYXRhKGVsZW1lbnQsIFwicHJldmlvdXNWYWx1ZVwiLCB7XHJcblx0XHRcdFx0b2xkOiBudWxsLFxyXG5cdFx0XHRcdHZhbGlkOiB0cnVlLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMuZGVmYXVsdE1lc3NhZ2UoZWxlbWVudCwgXCJyZW1vdGVcIilcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGNsZWFucyB1cCBhbGwgZm9ybXMgYW5kIGVsZW1lbnRzLCByZW1vdmVzIHZhbGlkYXRvci1zcGVjaWZpYyBldmVudHNcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0Rm9ybSgpO1xyXG5cclxuXHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdC5vZmYoXCIudmFsaWRhdGVcIilcclxuXHRcdFx0XHQucmVtb3ZlRGF0YShcInZhbGlkYXRvclwiKTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0Y2xhc3NSdWxlU2V0dGluZ3M6IHtcclxuXHRcdHJlcXVpcmVkOiB7IHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyBlbWFpbDogdHJ1ZSB9LFxyXG5cdFx0dXJsOiB7IHVybDogdHJ1ZSB9LFxyXG5cdFx0ZGF0ZTogeyBkYXRlOiB0cnVlIH0sXHJcblx0XHRkYXRlSVNPOiB7IGRhdGVJU086IHRydWUgfSxcclxuXHRcdG51bWJlcjogeyBudW1iZXI6IHRydWUgfSxcclxuXHRcdGRpZ2l0czogeyBkaWdpdHM6IHRydWUgfSxcclxuXHRcdGNyZWRpdGNhcmQ6IHsgY3JlZGl0Y2FyZDogdHJ1ZSB9XHJcblx0fSxcclxuXHJcblx0YWRkQ2xhc3NSdWxlczogZnVuY3Rpb24oY2xhc3NOYW1lLCBydWxlcykge1xyXG5cdFx0aWYgKGNsYXNzTmFtZS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XHJcblx0XHRcdHRoaXMuY2xhc3NSdWxlU2V0dGluZ3NbY2xhc3NOYW1lXSA9IHJ1bGVzO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JC5leHRlbmQodGhpcy5jbGFzc1J1bGVTZXR0aW5ncywgY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjbGFzc1J1bGVzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHR2YXIgcnVsZXMgPSB7fSxcclxuXHRcdFx0Y2xhc3NlcyA9ICQoZWxlbWVudCkuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuXHRcdGlmIChjbGFzc2VzKSB7XHJcblx0XHRcdCQuZWFjaChjbGFzc2VzLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMgaW4gJC52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdCQuZXh0ZW5kKHJ1bGVzLCAkLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1t0aGlzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRub3JtYWxpemVBdHRyaWJ1dGVSdWxlOiBmdW5jdGlvbihydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSkge1xyXG5cclxuXHRcdC8vIGNvbnZlcnQgdGhlIHZhbHVlIHRvIGEgbnVtYmVyIGZvciBudW1iZXIgaW5wdXRzLCBhbmQgZm9yIHRleHQgZm9yIGJhY2t3YXJkcyBjb21wYWJpbGl0eVxyXG5cdFx0Ly8gYWxsb3dzIHR5cGU9XCJkYXRlXCIgYW5kIG90aGVycyB0byBiZSBjb21wYXJlZCBhcyBzdHJpbmdzXHJcblx0XHRpZiAoL21pbnxtYXgvLnRlc3QobWV0aG9kKSAmJiAodHlwZSA9PT0gbnVsbCB8fCAvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QodHlwZSkpKSB7XHJcblx0XHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuXHJcblx0XHRcdC8vIFN1cHBvcnQgT3BlcmEgTWluaSwgd2hpY2ggcmV0dXJucyBOYU4gZm9yIHVuZGVmaW5lZCBtaW5sZW5ndGhcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcblx0XHRcdHJ1bGVzW21ldGhvZF0gPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gbWV0aG9kICYmIHR5cGUgIT09IFwicmFuZ2VcIikge1xyXG5cclxuXHRcdFx0Ly8gZXhjZXB0aW9uOiB0aGUganF1ZXJ5IHZhbGlkYXRlICdyYW5nZScgbWV0aG9kXHJcblx0XHRcdC8vIGRvZXMgbm90IHRlc3QgZm9yIHRoZSBodG1sNSAncmFuZ2UnIHR5cGVcclxuXHRcdFx0cnVsZXNbbWV0aG9kXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0YXR0cmlidXRlUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdHR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIiksXHJcblx0XHRcdG1ldGhvZCwgdmFsdWU7XHJcblxyXG5cdFx0Zm9yIChtZXRob2QgaW4gJC52YWxpZGF0b3IubWV0aG9kcykge1xyXG5cclxuXHRcdFx0Ly8gc3VwcG9ydCBmb3IgPGlucHV0IHJlcXVpcmVkPiBpbiBib3RoIGh0bWw1IGFuZCBvbGRlciBicm93c2Vyc1xyXG5cdFx0XHRpZiAobWV0aG9kID09PSBcInJlcXVpcmVkXCIpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1ldGhvZCk7XHJcblxyXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyBmb3IgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZVxyXG5cdFx0XHRcdC8vIGFuZCBub24tSFRNTDUgYnJvd3NlcnMgbWlnaHQgaGF2ZSByZXF1aXJlZD1cIlwiIG1hcmt1cFxyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gZm9yY2Ugbm9uLUhUTUw1IGJyb3dzZXJzIHRvIHJldHVybiBib29sXHJcblx0XHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhbHVlID0gJGVsZW1lbnQuYXR0cihtZXRob2QpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUocnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1heGxlbmd0aCBtYXkgYmUgcmV0dXJuZWQgYXMgLTEsIDIxNDc0ODM2NDcgKElFKSBhbmQgNTI0Mjg4IChzYWZhcmkpIGZvciB0ZXh0IGlucHV0c1xyXG5cdFx0aWYgKHJ1bGVzLm1heGxlbmd0aCAmJiAvLTF8MjE0NzQ4MzY0N3w1MjQyODgvLnRlc3QocnVsZXMubWF4bGVuZ3RoKSkge1xyXG5cdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRkYXRhUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdHR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIiksXHJcblx0XHRcdG1ldGhvZCwgdmFsdWU7XHJcblxyXG5cdFx0Zm9yIChtZXRob2QgaW4gJC52YWxpZGF0b3IubWV0aG9kcykge1xyXG5cdFx0XHR2YWx1ZSA9ICRlbGVtZW50LmRhdGEoXCJydWxlXCIgKyBtZXRob2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtZXRob2Quc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUocnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdHN0YXRpY1J1bGVzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHQvLyBXZXpvbUZpeFxyXG5cdFx0aWYgKGVsZW1lbnQuZm9ybSkge1xyXG5cdFx0XHR2YWxpZGF0b3IgPSAkLmRhdGEoZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhbGlkYXRvciA9ICQuZGF0YSgkKGVsZW1lbnQpLmNsb3Nlc3QoXCJkaXZbZGF0YS1mb3JtPSd0cnVlJ11cIikuZ2V0KDApLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcnVsZXMgPSB7fSxcclxuXHRcdFx0Ly92YWxpZGF0b3IgPSAkLmRhdGEoZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdFx0dmFsaWRhdG9yID0gdmFsaWRhdG9yOyAvLyBXZXpvbUZpeFxyXG5cclxuXHRcdGlmICh2YWxpZGF0b3Iuc2V0dGluZ3MucnVsZXMpIHtcclxuXHRcdFx0cnVsZXMgPSAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKHZhbGlkYXRvci5zZXR0aW5ncy5ydWxlc1tlbGVtZW50Lm5hbWVdKSB8fCB7fTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRub3JtYWxpemVSdWxlczogZnVuY3Rpb24ocnVsZXMsIGVsZW1lbnQpIHtcclxuXHRcdC8vIGhhbmRsZSBkZXBlbmRlbmN5IGNoZWNrXHJcblx0XHQkLmVhY2gocnVsZXMsIGZ1bmN0aW9uKHByb3AsIHZhbCkge1xyXG5cdFx0XHQvLyBpZ25vcmUgcnVsZSB3aGVuIHBhcmFtIGlzIGV4cGxpY2l0bHkgZmFsc2UsIGVnLiByZXF1aXJlZDpmYWxzZVxyXG5cdFx0XHRpZiAodmFsID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGRlbGV0ZSBydWxlc1twcm9wXTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZhbC5wYXJhbSB8fCB2YWwuZGVwZW5kcykge1xyXG5cdFx0XHRcdHZhciBrZWVwUnVsZSA9IHRydWU7XHJcblx0XHRcdFx0c3dpdGNoICh0eXBlb2YgdmFsLmRlcGVuZHMpIHtcclxuXHRcdFx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdFx0XHRrZWVwUnVsZSA9ICEhJCh2YWwuZGVwZW5kcywgZWxlbWVudC5mb3JtKS5sZW5ndGg7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcclxuXHRcdFx0XHRcdGtlZXBSdWxlID0gdmFsLmRlcGVuZHMuY2FsbChlbGVtZW50LCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoa2VlcFJ1bGUpIHtcclxuXHRcdFx0XHRcdHJ1bGVzW3Byb3BdID0gdmFsLnBhcmFtICE9PSB1bmRlZmluZWQgPyB2YWwucGFyYW0gOiB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcnVsZXNbcHJvcF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBldmFsdWF0ZSBwYXJhbWV0ZXJzXHJcblx0XHQkLmVhY2gocnVsZXMsIGZ1bmN0aW9uKHJ1bGUsIHBhcmFtZXRlcikge1xyXG5cdFx0XHRydWxlc1tydWxlXSA9ICQuaXNGdW5jdGlvbihwYXJhbWV0ZXIpID8gcGFyYW1ldGVyKGVsZW1lbnQpIDogcGFyYW1ldGVyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gbnVtYmVyIHBhcmFtZXRlcnNcclxuXHRcdCQuZWFjaChbXCJtaW5sZW5ndGhcIiwgXCJtYXhsZW5ndGhcIl0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAocnVsZXNbdGhpc10pIHtcclxuXHRcdFx0XHRydWxlc1t0aGlzXSA9IE51bWJlcihydWxlc1t0aGlzXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0JC5lYWNoKFtcInJhbmdlbGVuZ3RoXCIsIFwicmFuZ2VcIl0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcGFydHM7XHJcblx0XHRcdGlmIChydWxlc1t0aGlzXSkge1xyXG5cdFx0XHRcdGlmICgkLmlzQXJyYXkocnVsZXNbdGhpc10pKSB7XHJcblx0XHRcdFx0XHRydWxlc1t0aGlzXSA9IFtOdW1iZXIocnVsZXNbdGhpc11bMF0pLCBOdW1iZXIocnVsZXNbdGhpc11bMV0pXTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBydWxlc1t0aGlzXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0cGFydHMgPSBydWxlc1t0aGlzXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlwiKS5zcGxpdCgvW1xccyxdKy8pO1xyXG5cdFx0XHRcdFx0cnVsZXNbdGhpc10gPSBbTnVtYmVyKHBhcnRzWzBdKSwgTnVtYmVyKHBhcnRzWzFdKV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoJC52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcykge1xyXG5cdFx0XHQvLyBhdXRvLWNyZWF0ZSByYW5nZXNcclxuXHRcdFx0aWYgKHJ1bGVzLm1pbiAhPSBudWxsICYmIHJ1bGVzLm1heCAhPSBudWxsKSB7XHJcblx0XHRcdFx0cnVsZXMucmFuZ2UgPSBbcnVsZXMubWluLCBydWxlcy5tYXhdO1xyXG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5taW47XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1heDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocnVsZXMubWlubGVuZ3RoICE9IG51bGwgJiYgcnVsZXMubWF4bGVuZ3RoICE9IG51bGwpIHtcclxuXHRcdFx0XHRydWxlcy5yYW5nZWxlbmd0aCA9IFtydWxlcy5taW5sZW5ndGgsIHJ1bGVzLm1heGxlbmd0aF07XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1pbmxlbmd0aDtcclxuXHRcdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdC8vIENvbnZlcnRzIGEgc2ltcGxlIHN0cmluZyB0byBhIHtzdHJpbmc6IHRydWV9IHJ1bGUsIGUuZy4sIFwicmVxdWlyZWRcIiB0byB7cmVxdWlyZWQ6dHJ1ZX1cclxuXHRub3JtYWxpemVSdWxlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dmFyIHRyYW5zZm9ybWVkID0ge307XHJcblx0XHRcdCQuZWFjaChkYXRhLnNwbGl0KC9cXHMvKSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtZWRbdGhpc10gPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGF0YSA9IHRyYW5zZm9ybWVkO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSxcclxuXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kL1xyXG5cdGFkZE1ldGhvZDogZnVuY3Rpb24obmFtZSwgbWV0aG9kLCBtZXNzYWdlKSB7XHJcblx0XHQkLnZhbGlkYXRvci5tZXRob2RzW25hbWVdID0gbWV0aG9kO1xyXG5cdFx0JC52YWxpZGF0b3IubWVzc2FnZXNbbmFtZV0gPSBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlIDogJC52YWxpZGF0b3IubWVzc2FnZXNbbmFtZV07XHJcblx0XHRpZiAobWV0aG9kLmxlbmd0aCA8IDMpIHtcclxuXHRcdFx0JC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhuYW1lLCAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKG5hbWUpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JlcXVpcmVkLW1ldGhvZC9cclxuXHRcdHJlcXVpcmVkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0Ly8gY2hlY2sgaWYgZGVwZW5kZW5jeSBpcyBtZXRcclxuXHRcdFx0aWYgKCF0aGlzLmRlcGVuZChwYXJhbSwgZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIikge1xyXG5cdFx0XHRcdC8vIGNvdWxkIGJlIGFuIGFycmF5IGZvciBzZWxlY3QtbXVsdGlwbGUgb3IgYSBzdHJpbmcsIGJvdGggYXJlIGZpbmUgdGhpcyB3YXlcclxuXHRcdFx0XHR2YXIgdmFsID0gJChlbGVtZW50KS52YWwoKTtcclxuXHRcdFx0XHRyZXR1cm4gdmFsICYmIHZhbC5sZW5ndGggPiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmNoZWNrYWJsZShlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExlbmd0aCh2YWx1ZSwgZWxlbWVudCkgPiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZW1haWwtbWV0aG9kL1xyXG5cdFx0ZW1haWw6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdC8vIEZyb20gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCN2YWxpZC1lLW1haWwtYWRkcmVzc1xyXG5cdFx0XHQvLyBSZXRyaWV2ZWQgMjAxNC0wMS0xNFxyXG5cdFx0XHQvLyBJZiB5b3UgaGF2ZSBhIHByb2JsZW0gd2l0aCB0aGlzIGltcGxlbWVudGF0aW9uLCByZXBvcnQgYSBidWcgYWdhaW5zdCB0aGUgYWJvdmUgc3BlY1xyXG5cdFx0XHQvLyBPciB1c2UgY3VzdG9tIG1ldGhvZHMgdG8gaW1wbGVtZW50IHlvdXIgb3duIGVtYWlsIHZhbGlkYXRpb25cclxuXHRcdFx0Ly9yZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KHZhbHVlKTtcclxuXHJcblx0XHRcdC8vIFdlem9tRml4XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKChbYS16QS1aMC05XFwmXFwrXFwtXFw9XFxfXSkrKChcXC4oW2EtekEtWjAtOVxcJlxcK1xcLVxcPVxcX10pezEsfSkrKT8pezEsNjR9XFxAKFthLXpBLVowLTldKFthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pP1xcLikrW2EtekEtWl17Miw2fSQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdXJsLW1ldGhvZC9cclxuXHRcdHVybDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdC8vIENvcHlyaWdodCAoYykgMjAxMC0yMDEzIERpZWdvIFBlcmluaSwgTUlUIGxpY2Vuc2VkXHJcblx0XHRcdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2RwZXJpbmkvNzI5Mjk0XHJcblx0XHRcdC8vIHNlZSBhbHNvIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9kZW1vL3VybC1yZWdleFxyXG5cdFx0XHQvLyBtb2RpZmllZCB0byBhbGxvdyBwcm90b2NvbC1yZWxhdGl2ZSBVUkxzXHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpLj8pKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaS50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RhdGUtbWV0aG9kL1xyXG5cdFx0ZGF0ZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9kYXRlSVNPLW1ldGhvZC9cclxuXHRcdGRhdGVJU086IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eXFxkezR9W1xcL1xcLV0oMD9bMS05XXwxWzAxMl0pW1xcL1xcLV0oMD9bMS05XXxbMTJdWzAtOV18M1swMV0pJC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9udW1iZXItbWV0aG9kL1xyXG5cdFx0bnVtYmVyOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RpZ2l0cy1tZXRob2QvXHJcblx0XHRkaWdpdHM6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eXFxkKyQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvY3JlZGl0Y2FyZC1tZXRob2QvXHJcblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0x1aG5fYWxnb3JpdGhtXHJcblx0XHRjcmVkaXRjYXJkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25hbChlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBhY2NlcHQgb25seSBzcGFjZXMsIGRpZ2l0cyBhbmQgZGFzaGVzXHJcblx0XHRcdGlmICgvW14wLTkgXFwtXSsvLnRlc3QodmFsdWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBuQ2hlY2sgPSAwLFxyXG5cdFx0XHRcdG5EaWdpdCA9IDAsXHJcblx0XHRcdFx0YkV2ZW4gPSBmYWxzZSxcclxuXHRcdFx0XHRuLCBjRGlnaXQ7XHJcblxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuXHJcblx0XHRcdC8vIEJhc2luZyBtaW4gYW5kIG1heCBsZW5ndGggb25cclxuXHRcdFx0Ly8gaHR0cDovL2RldmVsb3Blci5lYW4uY29tL2dlbmVyYWxfaW5mby9WYWxpZF9DcmVkaXRfQ2FyZF9UeXBlc1xyXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoIDwgMTMgfHwgdmFsdWUubGVuZ3RoID4gMTkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAobiA9IHZhbHVlLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcblx0XHRcdFx0Y0RpZ2l0ID0gdmFsdWUuY2hhckF0KG4pO1xyXG5cdFx0XHRcdG5EaWdpdCA9IHBhcnNlSW50KGNEaWdpdCwgMTApO1xyXG5cdFx0XHRcdGlmIChiRXZlbikge1xyXG5cdFx0XHRcdFx0aWYgKChuRGlnaXQgKj0gMikgPiA5KSB7XHJcblx0XHRcdFx0XHRcdG5EaWdpdCAtPSA5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuQ2hlY2sgKz0gbkRpZ2l0O1xyXG5cdFx0XHRcdGJFdmVuID0gIWJFdmVuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKG5DaGVjayAlIDEwKSA9PT0gMDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL21pbmxlbmd0aC1tZXRob2QvXHJcblx0XHRtaW5sZW5ndGg6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgbGVuZ3RoID0gJC5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmxlbmd0aCA6IHRoaXMuZ2V0TGVuZ3RoKHZhbHVlLCBlbGVtZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgbGVuZ3RoID49IHBhcmFtO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWF4bGVuZ3RoLW1ldGhvZC9cclxuXHRcdG1heGxlbmd0aDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgodmFsdWUsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBsZW5ndGggPD0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yYW5nZWxlbmd0aC1tZXRob2QvXHJcblx0XHRyYW5nZWxlbmd0aDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgodmFsdWUsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAobGVuZ3RoID49IHBhcmFtWzBdICYmIGxlbmd0aCA8PSBwYXJhbVsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9taW4tbWV0aG9kL1xyXG5cdFx0bWluOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUgPj0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9tYXgtbWV0aG9kL1xyXG5cdFx0bWF4OiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUgPD0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yYW5nZS1tZXRob2QvXHJcblx0XHRyYW5nZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8ICh2YWx1ZSA+PSBwYXJhbVswXSAmJiB2YWx1ZSA8PSBwYXJhbVsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9lcXVhbFRvLW1ldGhvZC9cclxuXHRcdGVxdWFsVG86IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHQvLyBiaW5kIHRvIHRoZSBibHVyIGV2ZW50IG9mIHRoZSB0YXJnZXQgaW4gb3JkZXIgdG8gcmV2YWxpZGF0ZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGZpZWxkIGlzIHVwZGF0ZWRcclxuXHRcdFx0Ly8gVE9ETyBmaW5kIGEgd2F5IHRvIGJpbmQgdGhlIGV2ZW50IGp1c3Qgb25jZSwgYXZvaWRpbmcgdGhlIHVuYmluZC1yZWJpbmQgb3ZlcmhlYWRcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQocGFyYW0pO1xyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0KSB7XHJcblx0XHRcdFx0dGFyZ2V0Lm9mZihcIi52YWxpZGF0ZS1lcXVhbFRvXCIpLm9uKFwiYmx1ci52YWxpZGF0ZS1lcXVhbFRvXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JChlbGVtZW50KS52YWxpZCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0LnZhbCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmVtb3RlLW1ldGhvZC9cclxuXHRcdHJlbW90ZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbmFsKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcHJldmlvdXMgPSB0aGlzLnByZXZpb3VzVmFsdWUoZWxlbWVudCksXHJcblx0XHRcdFx0dmFsaWRhdG9yLCBkYXRhO1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0pIHtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgPSB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0ucmVtb3RlO1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0ucmVtb3RlID0gcHJldmlvdXMubWVzc2FnZTtcclxuXHJcblx0XHRcdHBhcmFtID0gdHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiICYmIHsgdXJsOiBwYXJhbSB9IHx8IHBhcmFtO1xyXG5cclxuXHRcdFx0aWYgKHByZXZpb3VzLm9sZCA9PT0gdmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJldmlvdXMudmFsaWQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByZXZpb3VzLm9sZCA9IHZhbHVlO1xyXG5cdFx0XHR2YWxpZGF0b3IgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLnN0YXJ0UmVxdWVzdChlbGVtZW50KTtcclxuXHRcdFx0ZGF0YSA9IHt9O1xyXG5cdFx0XHRkYXRhW2VsZW1lbnQubmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0JC5hamF4KCQuZXh0ZW5kKHRydWUsIHtcclxuXHRcdFx0XHRtb2RlOiBcImFib3J0XCIsXHJcblx0XHRcdFx0cG9ydDogXCJ2YWxpZGF0ZVwiICsgZWxlbWVudC5uYW1lLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRleHQ6IHZhbGlkYXRvci5jdXJyZW50Rm9ybSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dmFyIHZhbGlkID0gcmVzcG9uc2UgPT09IHRydWUgfHwgcmVzcG9uc2UgPT09IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdFx0XHRlcnJvcnMsIG1lc3NhZ2UsIHN1Ym1pdHRlZDtcclxuXHJcblx0XHRcdFx0XHR2YWxpZGF0b3Iuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXS5yZW1vdGUgPSBwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2U7XHJcblx0XHRcdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRcdFx0c3VibWl0dGVkID0gdmFsaWRhdG9yLmZvcm1TdWJtaXR0ZWQ7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5wcmVwYXJlRWxlbWVudChlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLmZvcm1TdWJtaXR0ZWQgPSBzdWJtaXR0ZWQ7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5zdWNjZXNzTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgdmFsaWRhdG9yLmludmFsaWRbZWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGVycm9ycyA9IHt9O1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2UgfHwgdmFsaWRhdG9yLmRlZmF1bHRNZXNzYWdlKGVsZW1lbnQsIFwicmVtb3RlXCIpO1xyXG5cdFx0XHRcdFx0XHRlcnJvcnNbZWxlbWVudC5uYW1lXSA9IHByZXZpb3VzLm1lc3NhZ2UgPSAkLmlzRnVuY3Rpb24obWVzc2FnZSkgPyBtZXNzYWdlKHZhbHVlKSA6IG1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5pbnZhbGlkW2VsZW1lbnQubmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3Iuc2hvd0Vycm9ycyhlcnJvcnMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cHJldmlvdXMudmFsaWQgPSB2YWxpZDtcclxuXHRcdFx0XHRcdHZhbGlkYXRvci5zdG9wUmVxdWVzdChlbGVtZW50LCB2YWxpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBwYXJhbSkpO1xyXG5cdFx0XHRyZXR1cm4gXCJwZW5kaW5nXCI7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGFkZGl0aW9uYWwtbWV0aGhvZHNcclxuXHJcblx0XHRwYXR0ZXJuOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9uYWwoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cGFyYW0gPSBuZXcgUmVnRXhwKFwiXig/OlwiICsgcGFyYW0gKyBcIikkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJhbS50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gV2V6b21SdWxlc1xyXG5cclxuXHRcdHBhc3N3b3JkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlxcUy4qJC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGVzaXplOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIGtiID0gMDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0a2IgKz0gZWxlbWVudC5maWxlc1tpXS5zaXplO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IChrYiAvIDEwMjQgPD0gcGFyYW0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWxlc2l6ZUVhY2g6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgZmxhZyA9IHRydWU7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50LmZpbGVzW2ldLnNpemUgLyAxMDI0ID4gcGFyYW0pIHtcclxuXHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAoZmxhZyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGV0eXBlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIHJlc3VsdDtcclxuXHRcdFx0cGFyYW0gPSB0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIgPyBwYXJhbS5yZXBsYWNlKC8sL2csIFwifFwiKSA6IFwicG5nfGpwZT9nfGRvY3xwZGZ8Z2lmfHppcHxyYXJ8dGFyfGh0bWx8c3dmfHR4dHx4bHN8ZG9jeHx4bHN4fG9kdFwiO1xyXG5cdFx0XHRpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBmaWxlcyA9IGVsZW1lbnQuZmlsZXM7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gZmlsZXNbaV0ubmFtZTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChcIi4oXCIgKyBwYXJhbSArIFwiKSRcIiwgXCJpXCIpKTtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHZhbHVlLm1hdGNoKG5ldyBSZWdFeHAoXCIuKFwiICsgcGFyYW0gKyBcIikkXCIsIFwiaVwiKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0b3I6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgJG1vZHVsZSA9ICQoZWxlbWVudCkucGFyZW50cygnLmpzLWZvcm0nKTtcclxuXHRcdFx0cmV0dXJuICRtb2R1bGUuZmluZCgnLicgKyBwYXJhbSArICc6ZmlsbGVkJykubGVuZ3RoO1xyXG5cdFx0fSxcclxuXHJcblx0XHR3b3JkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVrQsC3Rj9CQLdCv0ZbQhtGX0IfRlNGR0IHQhNKR0pBcXCdcXGBcXC0gXSokLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9naW46IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eWzAtOWEtekEtWtCwLdGP0JAt0K/RltCG0ZfQh9GU0ITRkdCB0pHSkF1bMC05YS16QS1a0LAt0Y/QkC3Qr9GW0IbRl9CH0ZTQhNKR0pBcXC1cXC5fXSskLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cGhvbmVVQTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKCgoXFwrPykoMzgpKVxccz8pPygoWzAtOV17M30pfChcXChbMC05XXszfVxcKSkpKFxcLXxcXHMpPygoWzAtOV17M30pKFxcLXxcXHMpPyhbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezJ9KXwoWzAtOV17Mn0pKFxcLXxcXHMpPyhbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezN9KXwoWzAtOV17Mn0pKFxcLXxcXHMpPyhbMC05XXszfSkoXFwtfFxccyk/KFswLTldezJ9KSkkLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dmFsaWRUcnVlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuZGF0YSgndmFsaWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxufSk7XHJcblxyXG4vLyBhamF4IG1vZGU6IGFib3J0XHJcbi8vIHVzYWdlOiAkLmFqYXgoeyBtb2RlOiBcImFib3J0XCJbLCBwb3J0OiBcInVuaXF1ZXBvcnRcIl19KTtcclxuLy8gaWYgbW9kZTpcImFib3J0XCIgaXMgdXNlZCwgdGhlIHByZXZpb3VzIHJlcXVlc3Qgb24gdGhhdCBwb3J0IChwb3J0IGNhbiBiZSB1bmRlZmluZWQpIGlzIGFib3J0ZWQgdmlhIFhNTEh0dHBSZXF1ZXN0LmFib3J0KClcclxuXHJcbnZhciBwZW5kaW5nUmVxdWVzdHMgPSB7fSxcclxuXHRhamF4O1xyXG4vLyBVc2UgYSBwcmVmaWx0ZXIgaWYgYXZhaWxhYmxlICgxLjUrKVxyXG5pZiAoJC5hamF4UHJlZmlsdGVyKSB7XHJcblx0JC5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKHNldHRpbmdzLCBfLCB4aHIpIHtcclxuXHRcdHZhciBwb3J0ID0gc2V0dGluZ3MucG9ydDtcclxuXHRcdGlmIChzZXR0aW5ncy5tb2RlID09PSBcImFib3J0XCIpIHtcclxuXHRcdFx0aWYgKHBlbmRpbmdSZXF1ZXN0c1twb3J0XSkge1xyXG5cdFx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XS5hYm9ydCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XSA9IHhocjtcclxuXHRcdH1cclxuXHR9KTtcclxufSBlbHNlIHtcclxuXHQvLyBQcm94eSBhamF4XHJcblx0YWpheCA9ICQuYWpheDtcclxuXHQkLmFqYXggPSBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cdFx0dmFyIG1vZGUgPSAoXCJtb2RlXCIgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncyA6ICQuYWpheFNldHRpbmdzKS5tb2RlLFxyXG5cdFx0XHRwb3J0ID0gKFwicG9ydFwiIGluIHNldHRpbmdzID8gc2V0dGluZ3MgOiAkLmFqYXhTZXR0aW5ncykucG9ydDtcclxuXHRcdGlmIChtb2RlID09PSBcImFib3J0XCIpIHtcclxuXHRcdFx0aWYgKHBlbmRpbmdSZXF1ZXN0c1twb3J0XSkge1xyXG5cdFx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XS5hYm9ydCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XSA9IGFqYXguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIHBlbmRpbmdSZXF1ZXN0c1twb3J0XTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhamF4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxufVxyXG5cclxufSkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3ZlbmRvci9qcXVlcnktdmFsaWRhdGUuanMiLCIvKiEgalF1ZXJ5IHYyLjIuNCB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xyXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1jLnNsaWNlLGY9Yy5jb25jYXQsZz1jLnB1c2gsaD1jLmluZGV4T2YsaT17fSxqPWkudG9TdHJpbmcsaz1pLmhhc093blByb3BlcnR5LGw9e30sbT1cIjIuMi40XCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTplLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEpe3JldHVybiBuLmVhY2godGhpcyxhKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6Zyxzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1hJiZhLnRvU3RyaW5nKCk7cmV0dXJuIW4uaXNBcnJheShhKSYmYi1wYXJzZUZsb2F0KGIpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKSlyZXR1cm4hMTtpZihhLmNvbnN0cnVjdG9yJiYhay5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWsuY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZXx8e30sXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxrLmNhbGwoYSxiKX0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9pW2ouY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsZC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wO2lmKHMoYSkpe2ZvcihjPWEubGVuZ3RoO2M+ZDtkKyspaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrfWVsc2UgZm9yKGQgaW4gYSlpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zy5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmguY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGc9MCxoPVtdO2lmKHMoYSkpZm9yKGQ9YS5sZW5ndGg7ZD5nO2crKyllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtlbHNlIGZvcihnIGluIGEpZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7cmV0dXJuIGYuYXBwbHkoW10saCl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGQ9ZS5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxkLmNvbmNhdChlLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDpsfSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYobi5mbltTeW1ib2wuaXRlcmF0b3JdPWNbU3ltYm9sLml0ZXJhdG9yXSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtpW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPSEhYSYmXCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9Z2EoKSx6PWdhKCksQT1nYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitNK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixPPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitOK1wiKSopfC4qKVxcXFwpfClcIixQPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUT1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFU9bmV3IFJlZ0V4cChPKSxWPW5ldyBSZWdFeHAoXCJeXCIrTStcIiRcIiksVz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00rXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTiksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTyksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWT0vXmhcXGQkL2ksWj0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLCQ9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXz0vWyt+XS8sYWE9Lyd8XFxcXC9nLGJhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGRhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmEoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3PWImJmIub3duZXJEb2N1bWVudCx4PWI/Yi5ub2RlVHlwZTo5O2lmKGQ9ZHx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09eCYmOSE9PXgmJjExIT09eClyZXR1cm4gZDtpZighZSYmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLHApKXtpZigxMSE9PXgmJihvPSQuZXhlYyhhKSkpaWYoZj1vWzFdKXtpZig5PT09eCl7aWYoIShqPWIuZ2V0RWxlbWVudEJ5SWQoZikpKXJldHVybiBkO2lmKGouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNlIGlmKHcmJihqPXcuZ2V0RWxlbWVudEJ5SWQoZikpJiZ0KGIsaikmJmouaWQ9PT1mKXJldHVybiBkLnB1c2goaiksZH1lbHNle2lmKG9bMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChmPW9bM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShmKSksZH1pZihjLnFzYSYmIUFbYStcIiBcIl0mJighcXx8IXEudGVzdChhKSkpe2lmKDEhPT14KXc9YixzPWE7ZWxzZSBpZihcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXsoaz1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9rPWsucmVwbGFjZShhYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxyPWcoYSksaD1yLmxlbmd0aCxsPVYudGVzdChrKT9cIiNcIitrOlwiW2lkPSdcIitrK1wiJ11cIjt3aGlsZShoLS0pcltoXT1sK1wiIFwiK3FhKHJbaF0pO3M9ci5qb2luKFwiLFwiKSx3PV8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8Yn1pZihzKXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbChzKSksZH1jYXRjaCh5KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShRLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamEoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWMubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBoYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9hKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWZhLnN1cHBvcnQ9e30sZj1mYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1uLmRvY3VtZW50RWxlbWVudCxwPSFmKG4pLChlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1aLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYz9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT1aLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGlhKGZ1bmN0aW9uKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9Wi50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTyl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1aLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxaLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGthKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9rYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZmEubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYShhLG51bGwsbnVsbCxiKX0sZmEubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFQsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBmYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxmYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGZhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxmYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZmEudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWZhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9ZmEuc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aGEsbWF0Y2g6VyxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShiYSxjYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShiYSxjYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8ZmEuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZmEuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFcuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZVLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmEuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShQLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoLHQ9ITE7aWYocSl7aWYoZil7d2hpbGUocCl7bT1iO3doaWxlKG09bVtwXSlpZihoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7bT1xLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4mJmpbMl0sbT1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoMT09PW0ubm9kZVR5cGUmJisrdCYmbT09PWIpe2tbYV09W3csbix0XTticmVha319ZWxzZSBpZihzJiYobT1iLGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSx0PW4pLHQ9PT0hMSl3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKSYmKyt0JiYocyYmKGw9bVt1XXx8KG1bdV09e30pLGs9bFttLnVuaXF1ZUlEXXx8KGxbbS51bmlxdWVJRF09e30pLGtbYV09W3csdF0pLG09PT1iKSlicmVhaztyZXR1cm4gdC09ZSx0PT09ZHx8dCVkPT09MCYmdC9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aGEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFEsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczpoYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGJhLGNhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzpoYShmdW5jdGlvbihhKXtyZXR1cm4gVi50ZXN0KGF8fFwiXCIpfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFgudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpuYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6bmEoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm5hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6bmEoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1sYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmdW5jdGlvbiBwYSgpe31wYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHBhLGc9ZmEudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXtjJiYhKGU9Ui5leGVjKGgpKXx8KGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9Uy5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShRLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1XW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmEuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmEoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqLGs9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihqPWJbdV18fChiW3VdPXt9KSxpPWpbYi51bmlxdWVJRF18fChqW2IudW5pcXVlSURdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBrWzJdPWhbMl07aWYoaVtkXT1rLGtbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiBzYShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB0YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWZhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB1YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoYyYmIWMoZixkLGUpfHwoZy5wdXNoKGYpLGomJmIucHVzaChoKSkpO3JldHVybiBnfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXZhKGQpKSxlJiYhZVt1XSYmKGU9dmEoZSxmKSksaGEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dGEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp1YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dWEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXVhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3JhKHNhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB2YShpPjEmJnNhKG0pLGk+MSYmcWEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShRLFwiJDFcIiksYyxlPmkmJndhKGEuc2xpY2UoaSxlKSksZj5lJiZ3YShhPWEuc2xpY2UoZSkpLGY+ZSYmcWEoYSkpfW0ucHVzaChjKX1yZXR1cm4gc2EobSl9ZnVuY3Rpb24geGEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbyxxLHI9MCxzPVwiMFwiLHQ9ZiYmW10sdT1bXSx2PWoseD1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHk9dys9bnVsbD09dj8xOk1hdGgucmFuZG9tKCl8fC4xLHo9eC5sZW5ndGg7Zm9yKGsmJihqPWc9PT1ufHxnfHxrKTtzIT09eiYmbnVsbCE9KGw9eFtzXSk7cysrKXtpZihlJiZsKXtvPTAsZ3x8bC5vd25lckRvY3VtZW50PT09bnx8KG0obCksaD0hcCk7d2hpbGUocT1hW28rK10paWYocShsLGd8fG4saCkpe2kucHVzaChsKTticmVha31rJiYodz15KX1jJiYoKGw9IXEmJmwpJiZyLS0sZiYmdC5wdXNoKGwpKX1pZihyKz1zLGMmJnMhPT1yKXtvPTA7d2hpbGUocT1iW28rK10pcSh0LHUsZyxoKTtpZihmKXtpZihyPjApd2hpbGUocy0tKXRbc118fHVbc118fCh1W3NdPUYuY2FsbChpKSk7dT11YSh1KX1ILmFwcGx5KGksdSksayYmIWYmJnUubGVuZ3RoPjAmJnIrYi5sZW5ndGg+MSYmZmEudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9eSxqPXYpLHR9O3JldHVybiBjP2hhKGYpOmZ9cmV0dXJuIGg9ZmEuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9d2EoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHhhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1mYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVcubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxfLnRlc3QoalswXS50eXBlKSYmb2EoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLCFifHxfLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amEoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amEoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmF9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlU29ydD1uLnVuaXF1ZT10LnVuaXF1ZVNvcnQsbi50ZXh0PXQuZ2V0VGV4dCxuLmlzWE1MRG9jPXQuaXNYTUwsbi5jb250YWlucz10LmNvbnRhaW5zO3ZhciB1PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sdj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY30sdz1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHg9L148KFtcXHctXSspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHk9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHooYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih5LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBoLmNhbGwoYixhKT4tMSE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh6KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF6KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJncudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEEsQj0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxDPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEEsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qi5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSx4LnRlc3QoZVsxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWYpLHRoaXMuY29udGV4dD1kLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP3ZvaWQgMCE9PWMucmVhZHk/Yy5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtDLnByb3RvdHlwZT1uLmZuLEE9bihkKTt2YXIgRD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxFPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9oLmNhbGwobihhKSx0aGlzWzBdKTpoLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihFW2FdfHxuLnVuaXF1ZVNvcnQoZSksRC50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEc9L1xcUysvZztmdW5jdGlvbiBIKGEpe3ZhciBiPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChHKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0goYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZj1bXSxnPVtdLGg9LTEsaT1mdW5jdGlvbigpe2ZvcihlPWEub25jZSxkPWI9ITA7Zy5sZW5ndGg7aD0tMSl7Yz1nLnNoaWZ0KCk7d2hpbGUoKytoPGYubGVuZ3RoKWZbaF0uYXBwbHkoY1swXSxjWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlJiYoaD1mLmxlbmd0aCxjPSExKX1hLm1lbW9yeXx8KGM9ITEpLGI9ITEsZSYmKGY9Yz9bXTpcIlwiKX0saj17YWRkOmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihjJiYhYiYmKGg9Zi5sZW5ndGgtMSxnLnB1c2goYykpLGZ1bmN0aW9uIGQoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXtuLmlzRnVuY3Rpb24oYyk/YS51bmlxdWUmJmouaGFzKGMpfHxmLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1uLnR5cGUoYykmJmQoYyl9KX0oYXJndW1lbnRzKSxjJiYhYiYmaSgpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGYsYykpPi0xKWYuc3BsaWNlKGMsMSksaD49YyYmaC0tfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGYpPi0xOmYubGVuZ3RoPjB9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGYmJihmPVtdKSx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxmPWM9XCJcIix0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFmfSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGU9Zz1bXSxjfHwoZj1jPVwiXCIpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEopLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEl8fChJPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1kLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09ZC5yZWFkeVN0YXRlJiYhZC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/YS5zZXRUaW1lb3V0KG4ucmVhZHkpOihkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEopKSksSS5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgSz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylLKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LEw9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBNKCl7dGhpcy5leHBhbmRvPW4uZXhwYW5kbytNLnVpZCsrfU0udWlkPTEsTS5wcm90b3R5cGU9e3JlZ2lzdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8e307cmV0dXJuIGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWM6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpjLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLGFbdGhpcy5leHBhbmRvXX0sY2FjaGU6ZnVuY3Rpb24oYSl7aWYoIUwoYSkpcmV0dXJue307dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxMKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW2JdPWM7ZWxzZSBmb3IoZCBpbiBiKWVbZF09YltkXTtyZXR1cm4gZX0sZ2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHZvaWQgMD09PWI/dGhpcy5jYWNoZShhKTphW3RoaXMuZXhwYW5kb10mJmFbdGhpcy5leHBhbmRvXVtiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09Zil7aWYodm9pZCAwPT09Yil0aGlzLnJlZ2lzdGVyKGEpO2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGY/ZD1bYixlXTooZD1lLGQ9ZCBpbiBmP1tkXTpkLm1hdGNoKEcpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBmW2RbY11dfSh2b2lkIDA9PT1ifHxuLmlzRW1wdHlPYmplY3QoZikpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFuLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgTj1uZXcgTSxPPW5ldyBNLFA9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFE9L1tBLVpdL2c7ZnVuY3Rpb24gUihhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpQLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6YztcclxufWNhdGNoKGUpe31PLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gTy5oYXNEYXRhKGEpfHxOLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBPLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtPLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE4uYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtOLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9Ty5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFOLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUihmLGQsZVtkXSkpKTtOLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe08uc2V0KHRoaXMsYSl9KTpLKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZDtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU8uZ2V0KGYsYSl8fE8uZ2V0KGYsYS5yZXBsYWNlKFEsXCItJCZcIikudG9Mb3dlckNhc2UoKSksdm9pZCAwIT09YylyZXR1cm4gYztpZihkPW4uY2FtZWxDYXNlKGEpLGM9Ty5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UihmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgZD1uLmNhbWVsQ2FzZShhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1PLmdldCh0aGlzLGQpO08uc2V0KHRoaXMsZCxiKSxhLmluZGV4T2YoXCItXCIpPi0xJiZ2b2lkIDAhPT1jJiZPLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ti5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU4uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE4uZ2V0KGEsYyl8fE4uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtOLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1OLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBTPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxUPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1MrXCIpKFthLXolXSopJFwiLFwiaVwiKSxVPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxWPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW4uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9O2Z1bmN0aW9uIFcoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIG4uY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwobi5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KG4uY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJlQuZXhlYyhuLmNzcyhhLGIpKTtpZihrJiZrWzNdIT09ail7aj1qfHxrWzNdLGM9Y3x8W10saz0raXx8MTtkbyBmPWZ8fFwiLjVcIixrLz1mLG4uc3R5bGUoYSxiLGsraik7d2hpbGUoZiE9PShmPWgoKS9pKSYmMSE9PWYmJi0tZyl9cmV0dXJuIGMmJihrPStrfHwraXx8MCxlPWNbMV0/aysoY1sxXSsxKSpjWzJdOitjWzJdLGQmJihkLnVuaXQ9aixkLnN0YXJ0PWssZC5lbmQ9ZSkpLGV9dmFyIFg9L14oPzpjaGVja2JveHxyYWRpbykkL2ksWT0vPChbXFx3Oi1dKykvLFo9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSwkPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07JC5vcHRncm91cD0kLm9wdGlvbiwkLnRib2R5PSQudGZvb3Q9JC5jb2xncm91cD0kLmNhcHRpb249JC50aGVhZCwkLnRoPSQudGQ7ZnVuY3Rpb24gXyhhLGIpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gYWEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTi5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ti5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBiYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gY2EoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxvPTAscD1hLmxlbmd0aDtwPm87bysrKWlmKGY9YVtvXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09bi50eXBlKGYpKW4ubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKGJhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KFkuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaT0kW2hdfHwkLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rbi5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO24ubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbz0wO3doaWxlKGY9bVtvKytdKWlmKGQmJm4uaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9bi5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1fKGwuYXBwZW5kQ2hpbGQoZiksXCJzY3JpcHRcIiksaiYmYWEoZyksYyl7az0wO3doaWxlKGY9Z1trKytdKVoudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGx9IWZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxsLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsbC5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBkYT0vXmtleS8sZWE9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLGZhPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gZ2EoKXtyZXR1cm4hMH1mdW5jdGlvbiBoYSgpe3JldHVybiExfWZ1bmN0aW9uIGlhKCl7dHJ5e3JldHVybiBkLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1mdW5jdGlvbiBqYShhLGIsYyxkLGUsZil7dmFyIGcsaDtpZihcIm9iamVjdFwiPT10eXBlb2YgYil7XCJzdHJpbmdcIiE9dHlwZW9mIGMmJihkPWR8fGMsYz12b2lkIDApO2ZvcihoIGluIGIpamEoYSxoLGMsZCxiW2hdLGYpO3JldHVybiBhfWlmKG51bGw9PWQmJm51bGw9PWU/KGU9YyxkPWM9dm9pZCAwKTpudWxsPT1lJiYoXCJzdHJpbmdcIj09dHlwZW9mIGM/KGU9ZCxkPXZvaWQgMCk6KGU9ZCxkPWMsYz12b2lkIDApKSxlPT09ITEpZT1oYTtlbHNlIGlmKCFlKXJldHVybiBhO3JldHVybiAxPT09ZiYmKGc9ZSxlPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPW4uZ3VpZCsrKSksYS5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxiLGUsZCxjKX0pfW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBuJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmhhc0RhdGEoYSkmJk4uZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmTi5yZW1vdmUoYSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZCxmLGcsaD1bXSxpPWUuY2FsbChhcmd1bWVudHMpLGo9KE4uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYS5ybmFtZXNwYWNlJiYhYS5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGQ9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWQmJihhLnJlc3VsdD1kKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJihcImNsaWNrXCIhPT1hLnR5cGV8fGlzTmFOKGEuYnV0dG9uKXx8YS5idXR0b248MSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZigxPT09aS5ub2RlVHlwZSYmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+LTE6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZGV0YWlsIGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGc9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8ZCxlPWMuZG9jdW1lbnRFbGVtZW50LGY9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhlJiZlLnNjcm9sbExlZnR8fGYmJmYuc2Nyb2xsTGVmdHx8MCktKGUmJmUuY2xpZW50TGVmdHx8ZiYmZi5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZSYmZS5zY3JvbGxUb3B8fGYmJmYuc2Nyb2xsVG9wfHwwKS0oZSYmZS5jbGllbnRUb3B8fGYmJmYuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Z3x8KGEud2hpY2g9MSZnPzE6MiZnPzM6NCZnPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxlLGY9YS50eXBlLGc9YSxoPXRoaXMuZml4SG9va3NbZl07aHx8KHRoaXMuZml4SG9va3NbZl09aD1lYS50ZXN0KGYpP3RoaXMubW91c2VIb29rczpkYS50ZXN0KGYpP3RoaXMua2V5SG9va3M6e30pLGU9aC5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChoLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZyksYj1lLmxlbmd0aDt3aGlsZShiLS0pYz1lW2JdLGFbY109Z1tjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1kKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxoLmZpbHRlcj9oLmZpbHRlcihhLGcpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09aWEoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09aWEoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/Z2E6aGEpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6bi5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6aGEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6aGEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6aGEsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Z2EsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fG4uY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9aGEpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIGthPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6LV0rKVtePl0qKVxcLz4vZ2ksbGE9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksbWE9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxuYT0vXnRydWVcXC8oLiopLyxvYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcGEoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gcWEoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gcmEoYSl7dmFyIGI9bmEuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIHNhKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTi5oYXNEYXRhKGEpJiYoZj1OLmFjY2VzcyhhKSxnPU4uc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1PLmhhc0RhdGEoYSkmJihoPU8uYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksTy5zZXQoYixpKSl9fWZ1bmN0aW9uIHRhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlgudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6XCJpbnB1dFwiIT09YyYmXCJ0ZXh0YXJlYVwiIT09Y3x8KGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1mdW5jdGlvbiB1YShhLGIsYyxkKXtiPWYuYXBwbHkoW10sYik7dmFyIGUsZyxoLGksaixrLG09MCxvPWEubGVuZ3RoLHA9by0xLHE9YlswXSxyPW4uaXNGdW5jdGlvbihxKTtpZihyfHxvPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhbC5jaGVja0Nsb25lJiZtYS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtyJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksdWEoZixiLGMsZCl9KTtpZihvJiYoZT1jYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGc9ZS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT1nKSxnfHxkKSl7Zm9yKGg9bi5tYXAoXyhlLFwic2NyaXB0XCIpLHFhKSxpPWgubGVuZ3RoO28+bTttKyspaj1lLG0hPT1wJiYoaj1uLmNsb25lKGosITAsITApLGkmJm4ubWVyZ2UoaCxfKGosXCJzY3JpcHRcIikpKSxjLmNhbGwoYVttXSxqLG0pO2lmKGkpZm9yKGs9aFtoLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGgscmEpLG09MDtpPm07bSsrKWo9aFttXSxaLnRlc3Qoai50eXBlfHxcIlwiKSYmIU4uYWNjZXNzKGosXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGssaikmJihqLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGouc3JjKTpuLmdsb2JhbEV2YWwoai50ZXh0Q29udGVudC5yZXBsYWNlKG9hLFwiXCIpKSl9cmV0dXJuIGF9ZnVuY3Rpb24gdmEoYSxiLGMpe2Zvcih2YXIgZCxlPWI/bi5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fG4uY2xlYW5EYXRhKF8oZCkpLGQucGFyZW50Tm9kZSYmKGMmJm4uY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZhYShfKGQsXCJzY3JpcHRcIikpLGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkKSk7cmV0dXJuIGF9bi5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShrYSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShsLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1fKGgpLGY9XyhhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXRhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fF8oYSksZz1nfHxfKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspc2EoZltkXSxnW2RdKTtlbHNlIHNhKGEsaCk7cmV0dXJuIGc9XyhoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJmFhKGcsIWkmJl8oYSxcInNjcmlwdFwiKSksaH0sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZT1uLmV2ZW50LnNwZWNpYWwsZj0wO3ZvaWQgMCE9PShjPWFbZl0pO2YrKylpZihMKGMpKXtpZihiPWNbTi5leHBhbmRvXSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZVtkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtjW04uZXhwYW5kb109dm9pZCAwfWNbTy5leHBhbmRvXSYmKGNbTy5leHBhbmRvXT12b2lkIDApfX19KSxuLmZuLmV4dGVuZCh7ZG9tTWFuaXA6dWEsZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhbGEudGVzdChhKSYmISRbKFkuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPW4uaHRtbFByZWZpbHRlcihhKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtuLmluQXJyYXkodGhpcyxhKTwwJiYobi5jbGVhbkRhdGEoXyh0aGlzKSksYyYmYy5yZXBsYWNlQ2hpbGQoYix0aGlzKSl9LGEpfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGY9ZS5sZW5ndGgtMSxoPTA7Zj49aDtoKyspYz1oPT09Zj90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZy5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KTt2YXIgd2EseGE9e0hUTUw6XCJibG9ja1wiLEJPRFk6XCJibG9ja1wifTtmdW5jdGlvbiB5YShhLGIpe3ZhciBjPW4oYi5jcmVhdGVFbGVtZW50KGEpKS5hcHBlbmRUbyhiLmJvZHkpLGQ9bi5jc3MoY1swXSxcImRpc3BsYXlcIik7cmV0dXJuIGMuZGV0YWNoKCksZH1mdW5jdGlvbiB6YShhKXt2YXIgYj1kLGM9eGFbYV07cmV0dXJuIGN8fChjPXlhKGEsYiksXCJub25lXCIhPT1jJiZjfHwod2E9KHdhfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9d2FbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz15YShhLGIpLHdhLmRldGFjaCgpKSx4YVthXT1jKSxjfXZhciBBYT0vXm1hcmdpbi8sQmE9bmV3IFJlZ0V4cChcIl4oXCIrUytcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxDYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9LERhPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfSxFYT1kLmRvY3VtZW50RWxlbWVudDshZnVuY3Rpb24oKXt2YXIgYixjLGUsZixnPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxoPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihoLnN0eWxlKXtoLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixoLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixsLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1oLnN0eWxlLmJhY2tncm91bmRDbGlwLGcuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjhweDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7cGFkZGluZzowO21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZy5hcHBlbmRDaGlsZChoKTtmdW5jdGlvbiBpKCl7aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt0b3A6MSU7d2lkdGg6NTAlXCIsaC5pbm5lckhUTUw9XCJcIixFYS5hcHBlbmRDaGlsZChnKTt2YXIgZD1hLmdldENvbXB1dGVkU3R5bGUoaCk7Yj1cIjElXCIhPT1kLnRvcCxmPVwiMnB4XCI9PT1kLm1hcmdpbkxlZnQsYz1cIjRweFwiPT09ZC53aWR0aCxoLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsZT1cIjRweFwiPT09ZC5tYXJnaW5SaWdodCxFYS5yZW1vdmVDaGlsZChnKX1uLmV4dGVuZChsLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGkoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksY30scGl4ZWxNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZX0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxmfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7dmFyIGIsYz1oLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmV0dXJuIGMuc3R5bGUuY3NzVGV4dD1oLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixoLnN0eWxlLndpZHRoPVwiMXB4XCIsRWEuYXBwZW5kQ2hpbGQoZyksYj0hcGFyc2VGbG9hdChhLmdldENvbXB1dGVkU3R5bGUoYykubWFyZ2luUmlnaHQpLEVhLnJlbW92ZUNoaWxkKGcpLGgucmVtb3ZlQ2hpbGQoYyksYn19KX19KCk7ZnVuY3Rpb24gRmEoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxDYShhKSxnPWM/Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdOnZvaWQgMCxcIlwiIT09ZyYmdm9pZCAwIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksYyYmIWwucGl4ZWxNYXJnaW5SaWdodCgpJiZCYS50ZXN0KGcpJiZBYS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gR2EoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIEhhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxJYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sSmE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxLYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl0sTGE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIE1hKGEpe2lmKGEgaW4gTGEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1LYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9S2FbY10rYixhIGluIExhKXJldHVybiBhfWZ1bmN0aW9uIE5hKGEsYixjKXt2YXIgZD1ULmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBPYShhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrVVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gUGEoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9Q2EoYSksZz1cImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPUZhKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksQmEudGVzdChlKSlyZXR1cm4gZTtkPWcmJihsLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrT2EoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifWZ1bmN0aW9uIFFhKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPU4uZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZWKGQpJiYoZltnXT1OLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHphKGQubm9kZU5hbWUpKSkpOihlPVYoZCksXCJub25lXCI9PT1jJiZlfHxOLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPUZhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1ULmV4ZWMoYykpJiZlWzFdJiYoYz1XKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwobi5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxsLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPU1hKGgpfHxoKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPUZhKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gSmEmJihlPUphW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8aXNGaW5pdGUoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9IYS50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/RGEoYSxJYSxmdW5jdGlvbigpe3JldHVybiBQYShhLGIsZCl9KTpQYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmQ2EoYSksZz1kJiZPYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9VC5leGVjKGMpKSYmXCJweFwiIT09KGVbM118fFwicHhcIikmJihhLnN0eWxlW2JdPWMsYz1uLmNzcyhhLGIpKSxOYShhLGMsZyl9fX0pLG4uY3NzSG9va3MubWFyZ2luTGVmdD1HYShsLnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihhLGIpe3JldHVybiBiPyhwYXJzZUZsb2F0KEZhKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LURhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIjp2b2lkIDB9KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PUdhKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP0RhKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sRmEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1VbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sQWEudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9TmEpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD1DYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gUWEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtWKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gUmEoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IFJhLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1SYSxSYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlJhLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fG4uZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxSYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9UmEucHJvdG90eXBlLFJhLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPW4uY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtuLmZ4LnN0ZXBbYS5wcm9wXT9uLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbbi5jc3NQcm9wc1thLnByb3BdXSYmIW4uY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpuLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxSYS5wcm9wSG9va3Muc2Nyb2xsVG9wPVJhLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LG4uZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxuLmZ4PVJhLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgU2EsVGEsVWE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFZhPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gV2EoKXtyZXR1cm4gYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7U2E9dm9pZCAwfSksU2E9bi5ub3coKX1mdW5jdGlvbiBYYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVVbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gWWEoYSxiLGMpe2Zvcih2YXIgZCxlPShfYS50d2VlbmVyc1tiXXx8W10pLmNvbmNhdChfYS50d2VlbmVyc1tcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFphKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlYoYSkscT1OLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9OLmdldChhLFwib2xkZGlzcGxheVwiKXx8emEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLFVhLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3phKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9Ti5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtOLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9WWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gJGEoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIF9hKGEsYixjKXt2YXIgZCxlLGY9MCxnPV9hLnByZWZpbHRlcnMubGVuZ3RoLGg9bi5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9U2F8fFdhKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2k+ZztnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSwxPmYmJmk/YzooaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOm4uZXh0ZW5kKHt9LGIpLG9wdHM6bi5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOm4uZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6U2F8fFdhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKCRhKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2c+ZjtmKyspaWYoZD1fYS5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gbi5pc0Z1bmN0aW9uKGQuc3RvcCkmJihuLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9bi5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIG4ubWFwKGssWWEsaiksbi5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksbi5meC50aW1lcihuLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqLnByb2dyZXNzKGoub3B0cy5wcm9ncmVzcykuZG9uZShqLm9wdHMuZG9uZSxqLm9wdHMuY29tcGxldGUpLmZhaWwoai5vcHRzLmZhaWwpLmFsd2F5cyhqLm9wdHMuYWx3YXlzKX1uLkFuaW1hdGlvbj1uLmV4dGVuZChfYSx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKTtyZXR1cm4gVyhjLmVsZW0sYSxULmV4ZWMoYiksYyksY31dfSx0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEubWF0Y2goRyk7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLF9hLnR3ZWVuZXJzW2NdPV9hLnR3ZWVuZXJzW2NdfHxbXSxfYS50d2VlbmVyc1tjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXJzOltaYV0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9fYS5wcmVmaWx0ZXJzLnVuc2hpZnQoYSk6X2EucHJlZmlsdGVycy5wdXNoKGEpfX0pLG4uc3BlZWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEmJlwib2JqZWN0XCI9PXR5cGVvZiBhP24uZXh0ZW5kKHt9LGEpOntjb21wbGV0ZTpjfHwhYyYmYnx8bi5pc0Z1bmN0aW9uKGEpJiZhLGR1cmF0aW9uOmEsZWFzaW5nOmMmJmJ8fGImJiFuLmlzRnVuY3Rpb24oYikmJmJ9O3JldHVybiBkLmR1cmF0aW9uPW4uZngub2ZmPzA6XCJudW1iZXJcIj09dHlwZW9mIGQuZHVyYXRpb24/ZC5kdXJhdGlvbjpkLmR1cmF0aW9uIGluIG4uZnguc3BlZWRzP24uZnguc3BlZWRzW2QuZHVyYXRpb25dOm4uZnguc3BlZWRzLl9kZWZhdWx0LG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihWKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1fYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxOLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1OLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZWYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyFiJiZjfHxuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPU4uZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoWGEoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlhhKFwic2hvd1wiKSxzbGlkZVVwOlhhKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpYYShcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoU2E9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxTYT12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtUYXx8KFRhPWEuc2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhckludGVydmFsKFRhKSxUYT1udWxsfSxuLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9bi5meD9uLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsbC5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGwub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGwub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsbC5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgYWIsYmI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYS5nZXRBdHRyaWJ1dGU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxlPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9hYjp2b2lkIDApKSx2b2lkIDAhPT1jP251bGw9PT1jP3ZvaWQgbi5yZW1vdmVBdHRyKGEsYik6ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDooZD1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWQ/dm9pZCAwOmQpKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighbC5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChHKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9fSksYWI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9YmJbYl18fG4uZmluZC5hdHRyO2JiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj1iYltiXSxiYltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsYmJbYl09ZiksZX19KTt2YXIgY2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxkYj0vXig/OmF8YXJlYSkkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLFxyXG52b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInRhYmluZGV4XCIpO3JldHVybiBiP3BhcnNlSW50KGIsMTApOmNiLnRlc3QoYS5ub2RlTmFtZSl8fGRiLnRlc3QoYS5ub2RlTmFtZSkmJmEuaHJlZj8wOi0xfX19LHByb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9fSksbC5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBlYj0vW1xcdFxcclxcblxcZl0vZztmdW5jdGlvbiBmYihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZitcIiBcIik+LTEpZD1kLnJlcGxhY2UoXCIgXCIrZitcIiBcIixcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxmYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChHKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPWZiKHRoaXMpLGImJk4uc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpOLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2ZiKGMpK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKS5pbmRleE9mKGIpPi0xKXJldHVybiEwO3JldHVybiExfX0pO3ZhciBnYj0vXFxyL2csaGI9L1tcXHgyMFxcdFxcclxcblxcZl0rL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UoZ2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpLnJlcGxhY2UoaGIsXCIgXCIpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwoYy5zZWxlY3RlZHx8aT09PWUpJiYobC5vcHREaXNhYmxlZD8hYy5kaXNhYmxlZDpudWxsPT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkobi52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPi0xOnZvaWQgMH19LGwuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIGliPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztuLmV4dGVuZChuLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGwsbSxvLHA9W2V8fGRdLHE9ay5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ay5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhaWIudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+LTEmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxsPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZnx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZSkpe2ZvcihqPW8uZGVsZWdhdGVUeXBlfHxxLGliLnRlc3QoaitxKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKXAucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZwLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1wW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpvLmJpbmRUeXBlfHxxLG09KE4uZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZOLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWwmJmhbbF0sbSYmbS5hcHBseSYmTChoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IUwoZSl8fGwmJm4uaXNGdW5jdGlvbihlW3FdKSYmIW4uaXNXaW5kb3coZSkmJihpPWVbbF0saSYmKGVbbF09bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxlW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2xdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtuLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLG4uZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9fSksbC5mb2N1c2luPVwib25mb2N1c2luXCJpbiBhLGwuZm9jdXNpbnx8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSkpfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYiktMTtlP04uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTi5yZW1vdmUoZCxiKSl9fX0pO3ZhciBqYj1hLmxvY2F0aW9uLGtiPW4ubm93KCksbGI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYztpZighYnx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIG51bGw7dHJ5e2M9KG5ldyBhLkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtjPXZvaWQgMH1yZXR1cm4gYyYmIWMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGh8fG4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYiksY307dmFyIG1iPS8jLiokLyxuYj0vKFs/Jl0pXz1bXiZdKi8sb2I9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxwYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxxYj0vXig/OkdFVHxIRUFEKSQvLHJiPS9eXFwvXFwvLyxzYj17fSx0Yj17fSx1Yj1cIiovXCIuY29uY2F0KFwiKlwiKSx2Yj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3ZiLmhyZWY9amIuaHJlZjtmdW5jdGlvbiB3YihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiB4YihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT10YjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHliKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB6YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpqYi5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOnBiLnRlc3QoamIucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOnViLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/eWIoeWIoYSxuLmFqYXhTZXR0aW5ncyksYik6eWIobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6d2Ioc2IpLGFqYXhUcmFuc3BvcnQ6d2IodGIpLGFqYXg6ZnVuY3Rpb24oYixjKXtcIm9iamVjdFwiPT10eXBlb2YgYiYmKGM9YixiPXZvaWQgMCksYz1jfHx7fTt2YXIgZSxmLGcsaCxpLGosayxsLG09bi5hamF4U2V0dXAoe30sYyksbz1tLmNvbnRleHR8fG0scD1tLmNvbnRleHQmJihvLm5vZGVUeXBlfHxvLmpxdWVyeSk/bihvKTpuLmV2ZW50LHE9bi5EZWZlcnJlZCgpLHI9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxzPW0uc3RhdHVzQ29kZXx8e30sdD17fSx1PXt9LHY9MCx3PVwiY2FuY2VsZWRcIix4PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXYpe2lmKCFoKXtoPXt9O3doaWxlKGI9b2IuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dj9nOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHZ8fChhPXVbY109dVtjXXx8YSx0W2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHZ8fChtLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnYpZm9yKGIgaW4gYSlzW2JdPVtzW2JdLGFbYl1dO2Vsc2UgeC5hbHdheXMoYVt4LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx3O3JldHVybiBlJiZlLmFib3J0KGIpLHooMCxiKSx0aGlzfX07aWYocS5wcm9taXNlKHgpLmNvbXBsZXRlPXIuYWRkLHguc3VjY2Vzcz14LmRvbmUseC5lcnJvcj14LmZhaWwsbS51cmw9KChifHxtLnVybHx8amIuaHJlZikrXCJcIikucmVwbGFjZShtYixcIlwiKS5yZXBsYWNlKHJiLGpiLnByb3RvY29sK1wiLy9cIiksbS50eXBlPWMubWV0aG9kfHxjLnR5cGV8fG0ubWV0aG9kfHxtLnR5cGUsbS5kYXRhVHlwZXM9bi50cmltKG0uZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXCJcIl0sbnVsbD09bS5jcm9zc0RvbWFpbil7aj1kLmNyZWF0ZUVsZW1lbnQoXCJhXCIpO3RyeXtqLmhyZWY9bS51cmwsai5ocmVmPWouaHJlZixtLmNyb3NzRG9tYWluPXZiLnByb3RvY29sK1wiLy9cIit2Yi5ob3N0IT1qLnByb3RvY29sK1wiLy9cIitqLmhvc3R9Y2F0Y2goeSl7bS5jcm9zc0RvbWFpbj0hMH19aWYobS5kYXRhJiZtLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2YgbS5kYXRhJiYobS5kYXRhPW4ucGFyYW0obS5kYXRhLG0udHJhZGl0aW9uYWwpKSx4YihzYixtLGMseCksMj09PXYpcmV0dXJuIHg7az1uLmV2ZW50JiZtLmdsb2JhbCxrJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLG0udHlwZT1tLnR5cGUudG9VcHBlckNhc2UoKSxtLmhhc0NvbnRlbnQ9IXFiLnRlc3QobS50eXBlKSxmPW0udXJsLG0uaGFzQ29udGVudHx8KG0uZGF0YSYmKGY9bS51cmwrPShsYi50ZXN0KGYpP1wiJlwiOlwiP1wiKSttLmRhdGEsZGVsZXRlIG0uZGF0YSksbS5jYWNoZT09PSExJiYobS51cmw9bmIudGVzdChmKT9mLnJlcGxhY2UobmIsXCIkMV89XCIra2IrKyk6ZisobGIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK2tiKyspKSxtLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtmXSksbi5ldGFnW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2ZdKSksKG0uZGF0YSYmbS5oYXNDb250ZW50JiZtLmNvbnRlbnRUeXBlIT09ITF8fGMuY29udGVudFR5cGUpJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixtLmNvbnRlbnRUeXBlKSx4LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixtLmRhdGFUeXBlc1swXSYmbS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXT9tLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PW0uZGF0YVR5cGVzWzBdP1wiLCBcIit1YitcIjsgcT0wLjAxXCI6XCJcIik6bS5hY2NlcHRzW1wiKlwiXSk7Zm9yKGwgaW4gbS5oZWFkZXJzKXguc2V0UmVxdWVzdEhlYWRlcihsLG0uaGVhZGVyc1tsXSk7aWYobS5iZWZvcmVTZW5kJiYobS5iZWZvcmVTZW5kLmNhbGwobyx4LG0pPT09ITF8fDI9PT12KSlyZXR1cm4geC5hYm9ydCgpO3c9XCJhYm9ydFwiO2ZvcihsIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXhbbF0obVtsXSk7aWYoZT14Yih0YixtLGMseCkpe2lmKHgucmVhZHlTdGF0ZT0xLGsmJnAudHJpZ2dlcihcImFqYXhTZW5kXCIsW3gsbV0pLDI9PT12KXJldHVybiB4O20uYXN5bmMmJm0udGltZW91dD4wJiYoaT1hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt4LmFib3J0KFwidGltZW91dFwiKX0sbS50aW1lb3V0KSk7dHJ5e3Y9MSxlLnNlbmQodCx6KX1jYXRjaCh5KXtpZighKDI+dikpdGhyb3cgeTt6KC0xLHkpfX1lbHNlIHooLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geihiLGMsZCxoKXt2YXIgaixsLHQsdSx3LHk9YzsyIT09diYmKHY9MixpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseC5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJjMwMD5ifHwzMDQ9PT1iLGQmJih1PXpiKG0seCxkKSksdT1BYihtLHUseCxqKSxqPyhtLmlmTW9kaWZpZWQmJih3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtmXT13KSx3PXguZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09bS50eXBlP3k9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3k9XCJub3Rtb2RpZmllZFwiOih5PXUuc3RhdGUsbD11LmRhdGEsdD11LmVycm9yLGo9IXQpKToodD15LCFiJiZ5fHwoeT1cImVycm9yXCIsMD5iJiYoYj0wKSkpLHguc3RhdHVzPWIseC5zdGF0dXNUZXh0PShjfHx5KStcIlwiLGo/cS5yZXNvbHZlV2l0aChvLFtsLHkseF0pOnEucmVqZWN0V2l0aChvLFt4LHksdF0pLHguc3RhdHVzQ29kZShzKSxzPXZvaWQgMCxrJiZwLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeCxtLGo/bDp0XSksci5maXJlV2l0aChvLFt4LHldKSxrJiYocC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3gsbV0pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHh9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgobi5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LG4uaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy52aXNpYmxlKGEpfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPjB8fGEub2Zmc2V0SGVpZ2h0PjB8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg+MH07dmFyIEJiPS8lMjAvZyxDYj0vXFxbXFxdJC8sRGI9L1xccj9cXG4vZyxFYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksRmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEdiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fENiLnRlc3QoYSk/ZChhLGUpOkdiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpR2IoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUdiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoQmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkZiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFFYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhWC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKERiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoRGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fTt2YXIgSGI9ezA6MjAwLDEyMjM6MjA0fSxJYj1uLmFqYXhTZXR0aW5ncy54aHIoKTtsLmNvcnM9ISFJYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEliLGwuYWpheD1JYj0hIUliLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXt2YXIgYyxkO3JldHVybiBsLmNvcnN8fEliJiYhYi5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihlLGYpe3ZhciBnLGg9Yi54aHIoKTtpZihoLm9wZW4oYi50eXBlLGIudXJsLGIuYXN5bmMsYi51c2VybmFtZSxiLnBhc3N3b3JkKSxiLnhockZpZWxkcylmb3IoZyBpbiBiLnhockZpZWxkcyloW2ddPWIueGhyRmllbGRzW2ddO2IubWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlKGIubWltZVR5cGUpLGIuY3Jvc3NEb21haW58fGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZyBpbiBlKWguc2V0UmVxdWVzdEhlYWRlcihnLGVbZ10pO2M9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YyYmKGM9ZD1oLm9ubG9hZD1oLm9uZXJyb3I9aC5vbmFib3J0PWgub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJhYm9ydFwiPT09YT9oLmFib3J0KCk6XCJlcnJvclwiPT09YT9cIm51bWJlclwiIT10eXBlb2YgaC5zdGF0dXM/ZigwLFwiZXJyb3JcIik6ZihoLnN0YXR1cyxoLnN0YXR1c1RleHQpOmYoSGJbaC5zdGF0dXNdfHxoLnN0YXR1cyxoLnN0YXR1c1RleHQsXCJ0ZXh0XCIhPT0oaC5yZXNwb25zZVR5cGV8fFwidGV4dFwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGgucmVzcG9uc2VUZXh0P3tiaW5hcnk6aC5yZXNwb25zZX06e3RleHQ6aC5yZXNwb25zZVRleHR9LGguZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGgub25sb2FkPWMoKSxkPWgub25lcnJvcj1jKFwiZXJyb3JcIiksdm9pZCAwIT09aC5vbmFib3J0P2gub25hYm9ydD1kOmgub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ND09PWgucmVhZHlTdGF0ZSYmYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YyYmZCgpfSl9LGM9YyhcImFib3J0XCIpO3RyeXtoLnNlbmQoYi5oYXNDb250ZW50JiZiLmRhdGF8fG51bGwpfWNhdGNoKGkpe2lmKGMpdGhyb3cgaX19LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHtjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmYoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGQuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgSmI9W10sS2I9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1KYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2tiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEtiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZLYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEtiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGxiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/bihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxKYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8ZDt2YXIgZT14LmV4ZWMoYSksZj0hYyYmW107cmV0dXJuIGU/W2IuY3JlYXRlRWxlbWVudChlWzFdKV06KGU9Y2EoW2FdLGIsZiksZiYmZi5sZW5ndGgmJm4oZikucmVtb3ZlKCksbi5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX07dmFyIExiPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZMYilyZXR1cm4gTGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O2Z1bmN0aW9uIE1iKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLG4uZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyhlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksYz1NYihmKSx7dG9wOmUudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTplfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09bi5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxuLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkLnRvcCs9bi5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGQubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1kLnRvcC1uLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1uLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudDt3aGlsZShhJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fEVhfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPVwicGFnZVlPZmZzZXRcIj09PWI7bi5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1NYihhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPUdhKGwucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPUZhKGEsYiksQmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9LHNpemU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9fSksbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgTmI9YS5qUXVlcnksT2I9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9T2IpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PU5iKSxufSxifHwoYS5qUXVlcnk9YS4kPW4pLG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy92ZW5kb3IvanF1ZXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohIE1hZ25pZmljIFBvcHVwIC0gdjEuMS4wIC0gMjAxNi0wMi0yMFxyXG4gKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cclxuICogQ29weXJpZ2h0IChjKSAyMDE2IERtaXRyeSBTZW1lbm92OyAqL1xyXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOndpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0byl9KGZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwiQ2xvc2VcIixpPVwiQmVmb3JlQ2xvc2VcIixqPVwiQWZ0ZXJDbG9zZVwiLGs9XCJCZWZvcmVBcHBlbmRcIixsPVwiTWFya3VwUGFyc2VcIixtPVwiT3BlblwiLG49XCJDaGFuZ2VcIixvPVwibWZwXCIscD1cIi5cIitvLHE9XCJtZnAtcmVhZHlcIixyPVwibWZwLXJlbW92aW5nXCIscz1cIm1mcC1wcmV2ZW50LWNsb3NlXCIsdD1mdW5jdGlvbigpe30sdT0hIXdpbmRvdy5qUXVlcnksdj1hKHdpbmRvdyksdz1mdW5jdGlvbihhLCBjKXtiLmV2Lm9uKG8rYStwLGMpfSx4PWZ1bmN0aW9uKGIsIGMsIGQsIGUpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGYuY2xhc3NOYW1lPVwibWZwLVwiK2IsZCYmKGYuaW5uZXJIVE1MPWQpLGU/YyYmYy5hcHBlbmRDaGlsZChmKTooZj1hKGYpLGMmJmYuYXBwZW5kVG8oYykpLGZ9LHk9ZnVuY3Rpb24oYyxkKXtiLmV2LnRyaWdnZXJIYW5kbGVyKG8rYyxkKSxiLnN0LmNhbGxiYWNrcyYmKGM9Yy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKStjLnNsaWNlKDEpLGIuc3QuY2FsbGJhY2tzW2NdJiZiLnN0LmNhbGxiYWNrc1tjXS5hcHBseShiLGEuaXNBcnJheShkKT9kOltkXSkpfSx6PWZ1bmN0aW9uKGMpe3JldHVybiBjPT09ZyYmYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG58fChiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bj1hKGIuc3QuY2xvc2VNYXJrdXAucmVwbGFjZShcIiV0aXRsZSVcIixiLnN0LnRDbG9zZSkpLGc9YyksYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG59LEE9ZnVuY3Rpb24oKXthLm1hZ25pZmljUG9wdXAuaW5zdGFuY2V8fChiPW5ldyB0LGIuaW5pdCgpLGEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZT1iKX0sQj1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLnN0eWxlLGI9W1wibXNcIixcIk9cIixcIk1velwiLFwiV2Via2l0XCJdO2lmKHZvaWQgMCE9PWEudHJhbnNpdGlvbilyZXR1cm4hMDtmb3IoO2IubGVuZ3RoOylpZihiLnBvcCgpK1wiVHJhbnNpdGlvblwiaW4gYSlyZXR1cm4hMDtyZXR1cm4hMX07dC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnQsaW5pdDpmdW5jdGlvbigpe3ZhciBjPW5hdmlnYXRvci5hcHBWZXJzaW9uO2IuaXNMb3dJRT1iLmlzSUU4PWRvY3VtZW50LmFsbCYmIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIsYi5pc0FuZHJvaWQ9L2FuZHJvaWQvZ2kudGVzdChjKSxiLmlzSU9TPS9pcGhvbmV8aXBhZHxpcG9kL2dpLnRlc3QoYyksYi5zdXBwb3J0c1RyYW5zaXRpb249QigpLGIucHJvYmFibHlNb2JpbGU9Yi5pc0FuZHJvaWR8fGIuaXNJT1N8fC8oT3BlcmEgTWluaSl8S2luZGxlfHdlYk9TfEJsYWNrQmVycnl8KE9wZXJhIE1vYmkpfChXaW5kb3dzIFBob25lKXxJRU1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZD1hKGRvY3VtZW50KSxiLnBvcHVwc0NhY2hlPXt9fSxvcGVuOmZ1bmN0aW9uKGMpe3ZhciBlO2lmKGMuaXNPYmo9PT0hMSl7Yi5pdGVtcz1jLml0ZW1zLnRvQXJyYXkoKSxiLmluZGV4PTA7dmFyIGcsaD1jLml0ZW1zO2ZvcihlPTA7ZTxoLmxlbmd0aDtlKyspaWYoZz1oW2VdLGcucGFyc2VkJiYoZz1nLmVsWzBdKSxnPT09Yy5lbFswXSl7Yi5pbmRleD1lO2JyZWFrfX1lbHNlIGIuaXRlbXM9YS5pc0FycmF5KGMuaXRlbXMpP2MuaXRlbXM6W2MuaXRlbXNdLGIuaW5kZXg9Yy5pbmRleHx8MDtpZihiLmlzT3BlbilyZXR1cm4gdm9pZCBiLnVwZGF0ZUl0ZW1IVE1MKCk7Yi50eXBlcz1bXSxmPVwiXCIsYy5tYWluRWwmJmMubWFpbkVsLmxlbmd0aD9iLmV2PWMubWFpbkVsLmVxKDApOmIuZXY9ZCxjLmtleT8oYi5wb3B1cHNDYWNoZVtjLmtleV18fChiLnBvcHVwc0NhY2hlW2Mua2V5XT17fSksYi5jdXJyVGVtcGxhdGU9Yi5wb3B1cHNDYWNoZVtjLmtleV0pOmIuY3VyclRlbXBsYXRlPXt9LGIuc3Q9YS5leHRlbmQoITAse30sYS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLGMpLGIuZml4ZWRDb250ZW50UG9zPVwiYXV0b1wiPT09Yi5zdC5maXhlZENvbnRlbnRQb3M/IWIucHJvYmFibHlNb2JpbGU6Yi5zdC5maXhlZENvbnRlbnRQb3MsYi5zdC5tb2RhbCYmKGIuc3QuY2xvc2VPbkNvbnRlbnRDbGljaz0hMSxiLnN0LmNsb3NlT25CZ0NsaWNrPSExLGIuc3Quc2hvd0Nsb3NlQnRuPSExLGIuc3QuZW5hYmxlRXNjYXBlS2V5PSExKSxiLmJnT3ZlcmxheXx8KGIuYmdPdmVybGF5PXgoXCJiZ1wiKS5vbihcImNsaWNrXCIrcCxmdW5jdGlvbigpe2IuY2xvc2UoKX0pLGIud3JhcD14KFwid3JhcFwiKS5hdHRyKFwidGFiaW5kZXhcIiwtMSkub24oXCJjbGlja1wiK3AsZnVuY3Rpb24oYSl7Yi5fY2hlY2tJZkNsb3NlKGEudGFyZ2V0KSYmYi5jbG9zZSgpfSksYi5jb250YWluZXI9eChcImNvbnRhaW5lclwiLGIud3JhcCkpLGIuY29udGVudENvbnRhaW5lcj14KFwiY29udGVudFwiKSxiLnN0LnByZWxvYWRlciYmKGIucHJlbG9hZGVyPXgoXCJwcmVsb2FkZXJcIixiLmNvbnRhaW5lcixiLnN0LnRMb2FkaW5nKSk7dmFyIGk9YS5tYWduaWZpY1BvcHVwLm1vZHVsZXM7Zm9yKGU9MDtlPGkubGVuZ3RoO2UrKyl7dmFyIGo9aVtlXTtqPWouY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrai5zbGljZSgxKSxiW1wiaW5pdFwiK2pdLmNhbGwoYil9eShcIkJlZm9yZU9wZW5cIiksYi5zdC5zaG93Q2xvc2VCdG4mJihiLnN0LmNsb3NlQnRuSW5zaWRlPyh3KGwsZnVuY3Rpb24oYSxiLGMsZCl7Yy5jbG9zZV9yZXBsYWNlV2l0aD16KGQudHlwZSl9KSxmKz1cIiBtZnAtY2xvc2UtYnRuLWluXCIpOmIud3JhcC5hcHBlbmQoeigpKSksYi5zdC5hbGlnblRvcCYmKGYrPVwiIG1mcC1hbGlnbi10b3BcIiksYi5maXhlZENvbnRlbnRQb3M/Yi53cmFwLmNzcyh7b3ZlcmZsb3c6Yi5zdC5vdmVyZmxvd1ksb3ZlcmZsb3dYOlwiaGlkZGVuXCIsb3ZlcmZsb3dZOmIuc3Qub3ZlcmZsb3dZfSk6Yi53cmFwLmNzcyh7dG9wOnYuc2Nyb2xsVG9wKCkscG9zaXRpb246XCJhYnNvbHV0ZVwifSksKGIuc3QuZml4ZWRCZ1Bvcz09PSExfHxcImF1dG9cIj09PWIuc3QuZml4ZWRCZ1BvcyYmIWIuZml4ZWRDb250ZW50UG9zKSYmYi5iZ092ZXJsYXkuY3NzKHtoZWlnaHQ6ZC5oZWlnaHQoKSxwb3NpdGlvbjpcImFic29sdXRlXCJ9KSxiLnN0LmVuYWJsZUVzY2FwZUtleSYmZC5vbihcImtleXVwXCIrcCxmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmYi5jbG9zZSgpfSksdi5vbihcInJlc2l6ZVwiK3AsZnVuY3Rpb24oKXtiLnVwZGF0ZVNpemUoKX0pLGIuc3QuY2xvc2VPbkNvbnRlbnRDbGlja3x8KGYrPVwiIG1mcC1hdXRvLWN1cnNvclwiKSxmJiZiLndyYXAuYWRkQ2xhc3MoZik7dmFyIGs9Yi53SD12LmhlaWdodCgpLG49e307aWYoYi5maXhlZENvbnRlbnRQb3MmJmIuX2hhc1Njcm9sbEJhcihrKSl7dmFyIG89Yi5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO28mJihuLm1hcmdpblJpZ2h0PW8pfWIuZml4ZWRDb250ZW50UG9zJiYoYi5pc0lFNz9hKFwiYm9keSwgaHRtbFwiKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpOm4ub3ZlcmZsb3c9XCJoaWRkZW5cIik7dmFyIHI9Yi5zdC5tYWluQ2xhc3M7cmV0dXJuIGIuaXNJRTcmJihyKz1cIiBtZnAtaWU3XCIpLHImJmIuX2FkZENsYXNzVG9NRlAociksYi51cGRhdGVJdGVtSFRNTCgpLHkoXCJCdWlsZENvbnRyb2xzXCIpLGEoXCJodG1sXCIpLmNzcyhuKSxiLmJnT3ZlcmxheS5hZGQoYi53cmFwKS5wcmVwZW5kVG8oYi5zdC5wcmVwZW5kVG98fGEoZG9jdW1lbnQuYm9keSkpLGIuX2xhc3RGb2N1c2VkRWw9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jb250ZW50PyhiLl9hZGRDbGFzc1RvTUZQKHEpLGIuX3NldEZvY3VzKCkpOmIuYmdPdmVybGF5LmFkZENsYXNzKHEpLGQub24oXCJmb2N1c2luXCIrcCxiLl9vbkZvY3VzSW4pfSwxNiksYi5pc09wZW49ITAsYi51cGRhdGVTaXplKGspLHkobSksY30sY2xvc2U6ZnVuY3Rpb24oKXtiLmlzT3BlbiYmKHkoaSksYi5pc09wZW49ITEsYi5zdC5yZW1vdmFsRGVsYXkmJiFiLmlzTG93SUUmJmIuc3VwcG9ydHNUcmFuc2l0aW9uPyhiLl9hZGRDbGFzc1RvTUZQKHIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLl9jbG9zZSgpfSxiLnN0LnJlbW92YWxEZWxheSkpOmIuX2Nsb3NlKCkpfSxfY2xvc2U6ZnVuY3Rpb24oKXt5KGgpO3ZhciBjPXIrXCIgXCIrcStcIiBcIjtpZihiLmJnT3ZlcmxheS5kZXRhY2goKSxiLndyYXAuZGV0YWNoKCksYi5jb250YWluZXIuZW1wdHkoKSxiLnN0Lm1haW5DbGFzcyYmKGMrPWIuc3QubWFpbkNsYXNzK1wiIFwiKSxiLl9yZW1vdmVDbGFzc0Zyb21NRlAoYyksYi5maXhlZENvbnRlbnRQb3Mpe3ZhciBlPXttYXJnaW5SaWdodDpcIlwifTtiLmlzSUU3P2EoXCJib2R5LCBodG1sXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJcIik6ZS5vdmVyZmxvdz1cIlwiLGEoXCJodG1sXCIpLmNzcyhlKX1kLm9mZihcImtleXVwXCIrcCtcIiBmb2N1c2luXCIrcCksYi5ldi5vZmYocCksYi53cmFwLmF0dHIoXCJjbGFzc1wiLFwibWZwLXdyYXBcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpLGIuYmdPdmVybGF5LmF0dHIoXCJjbGFzc1wiLFwibWZwLWJnXCIpLGIuY29udGFpbmVyLmF0dHIoXCJjbGFzc1wiLFwibWZwLWNvbnRhaW5lclwiKSwhYi5zdC5zaG93Q2xvc2VCdG58fGIuc3QuY2xvc2VCdG5JbnNpZGUmJmIuY3VyclRlbXBsYXRlW2IuY3Vyckl0ZW0udHlwZV0hPT0hMHx8Yi5jdXJyVGVtcGxhdGUuY2xvc2VCdG4mJmIuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpLGIuc3QuYXV0b0ZvY3VzTGFzdCYmYi5fbGFzdEZvY3VzZWRFbCYmYShiLl9sYXN0Rm9jdXNlZEVsKS5mb2N1cygpLGIuY3Vyckl0ZW09bnVsbCxiLmNvbnRlbnQ9bnVsbCxiLmN1cnJUZW1wbGF0ZT1udWxsLGIucHJldkhlaWdodD0wLHkoail9LHVwZGF0ZVNpemU6ZnVuY3Rpb24oYSl7aWYoYi5pc0lPUyl7dmFyIGM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoLGQ9d2luZG93LmlubmVySGVpZ2h0KmM7Yi53cmFwLmNzcyhcImhlaWdodFwiLGQpLGIud0g9ZH1lbHNlIGIud0g9YXx8di5oZWlnaHQoKTtiLmZpeGVkQ29udGVudFBvc3x8Yi53cmFwLmNzcyhcImhlaWdodFwiLGIud0gpLHkoXCJSZXNpemVcIil9LHVwZGF0ZUl0ZW1IVE1MOmZ1bmN0aW9uKCl7dmFyIGM9Yi5pdGVtc1tiLmluZGV4XTtiLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCksYi5jb250ZW50JiZiLmNvbnRlbnQuZGV0YWNoKCksYy5wYXJzZWR8fChjPWIucGFyc2VFbChiLmluZGV4KSk7dmFyIGQ9Yy50eXBlO2lmKHkoXCJCZWZvcmVDaGFuZ2VcIixbYi5jdXJySXRlbT9iLmN1cnJJdGVtLnR5cGU6XCJcIixkXSksYi5jdXJySXRlbT1jLCFiLmN1cnJUZW1wbGF0ZVtkXSl7dmFyIGY9Yi5zdFtkXT9iLnN0W2RdLm1hcmt1cDohMTt5KFwiRmlyc3RNYXJrdXBQYXJzZVwiLGYpLGY/Yi5jdXJyVGVtcGxhdGVbZF09YShmKTpiLmN1cnJUZW1wbGF0ZVtkXT0hMH1lJiZlIT09Yy50eXBlJiZiLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcIm1mcC1cIitlK1wiLWhvbGRlclwiKTt2YXIgZz1iW1wiZ2V0XCIrZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStkLnNsaWNlKDEpXShjLGIuY3VyclRlbXBsYXRlW2RdKTtiLmFwcGVuZENvbnRlbnQoZyxkKSxjLnByZWxvYWRlZD0hMCx5KG4sYyksZT1jLnR5cGUsYi5jb250YWluZXIucHJlcGVuZChiLmNvbnRlbnRDb250YWluZXIpLHkoXCJBZnRlckNoYW5nZVwiKX0sYXBwZW5kQ29udGVudDpmdW5jdGlvbihhLGMpe2IuY29udGVudD1hLGE/Yi5zdC5zaG93Q2xvc2VCdG4mJmIuc3QuY2xvc2VCdG5JbnNpZGUmJmIuY3VyclRlbXBsYXRlW2NdPT09ITA/Yi5jb250ZW50LmZpbmQoXCIubWZwLWNsb3NlXCIpLmxlbmd0aHx8Yi5jb250ZW50LmFwcGVuZCh6KCkpOmIuY29udGVudD1hOmIuY29udGVudD1cIlwiLHkoayksYi5jb250YWluZXIuYWRkQ2xhc3MoXCJtZnAtXCIrYytcIi1ob2xkZXJcIiksYi5jb250ZW50Q29udGFpbmVyLmFwcGVuZChiLmNvbnRlbnQpfSxwYXJzZUVsOmZ1bmN0aW9uKGMpe3ZhciBkLGU9Yi5pdGVtc1tjXTtpZihlLnRhZ05hbWU/ZT17ZWw6YShlKX06KGQ9ZS50eXBlLGU9e2RhdGE6ZSxzcmM6ZS5zcmN9KSxlLmVsKXtmb3IodmFyIGY9Yi50eXBlcyxnPTA7ZzxmLmxlbmd0aDtnKyspaWYoZS5lbC5oYXNDbGFzcyhcIm1mcC1cIitmW2ddKSl7ZD1mW2ddO2JyZWFrfWUuc3JjPWUuZWwuYXR0cihcImRhdGEtbWZwLXNyY1wiKSxlLnNyY3x8KGUuc3JjPWUuZWwuYXR0cihcImhyZWZcIikpfXJldHVybiBlLnR5cGU9ZHx8Yi5zdC50eXBlfHxcImlubGluZVwiLGUuaW5kZXg9YyxlLnBhcnNlZD0hMCxiLml0ZW1zW2NdPWUseShcIkVsZW1lbnRQYXJzZVwiLGUpLGIuaXRlbXNbY119LGFkZEdyb3VwOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9ZnVuY3Rpb24oZCl7ZC5tZnBFbD10aGlzLGIuX29wZW5DbGljayhkLGEsYyl9O2N8fChjPXt9KTt2YXIgZT1cImNsaWNrLm1hZ25pZmljUG9wdXBcIjtjLm1haW5FbD1hLGMuaXRlbXM/KGMuaXNPYmo9ITAsYS5vZmYoZSkub24oZSxkKSk6KGMuaXNPYmo9ITEsYy5kZWxlZ2F0ZT9hLm9mZihlKS5vbihlLGMuZGVsZWdhdGUsZCk6KGMuaXRlbXM9YSxhLm9mZihlKS5vbihlLGQpKSl9LF9vcGVuQ2xpY2s6ZnVuY3Rpb24oYyxkLGUpe3ZhciBmPXZvaWQgMCE9PWUubWlkQ2xpY2s/ZS5taWRDbGljazphLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7aWYoZnx8ISgyPT09Yy53aGljaHx8Yy5jdHJsS2V5fHxjLm1ldGFLZXl8fGMuYWx0S2V5fHxjLnNoaWZ0S2V5KSl7dmFyIGc9dm9pZCAwIT09ZS5kaXNhYmxlT24/ZS5kaXNhYmxlT246YS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtpZihnKWlmKGEuaXNGdW5jdGlvbihnKSl7aWYoIWcuY2FsbChiKSlyZXR1cm4hMH1lbHNlIGlmKHYud2lkdGgoKTxnKXJldHVybiEwO2MudHlwZSYmKGMucHJldmVudERlZmF1bHQoKSxiLmlzT3BlbiYmYy5zdG9wUHJvcGFnYXRpb24oKSksZS5lbD1hKGMubWZwRWwpLGUuZGVsZWdhdGUmJihlLml0ZW1zPWQuZmluZChlLmRlbGVnYXRlKSksYi5vcGVuKGUpfX0sdXBkYXRlU3RhdHVzOmZ1bmN0aW9uKGEsZCl7aWYoYi5wcmVsb2FkZXIpe2MhPT1hJiZiLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcIm1mcC1zLVwiK2MpLGR8fFwibG9hZGluZ1wiIT09YXx8KGQ9Yi5zdC50TG9hZGluZyk7dmFyIGU9e3N0YXR1czphLHRleHQ6ZH07eShcIlVwZGF0ZVN0YXR1c1wiLGUpLGE9ZS5zdGF0dXMsZD1lLnRleHQsYi5wcmVsb2FkZXIuaHRtbChkKSxiLnByZWxvYWRlci5maW5kKFwiYVwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKX0pLGIuY29udGFpbmVyLmFkZENsYXNzKFwibWZwLXMtXCIrYSksYz1hfX0sX2NoZWNrSWZDbG9zZTpmdW5jdGlvbihjKXtpZighYShjKS5oYXNDbGFzcyhzKSl7dmFyIGQ9Yi5zdC5jbG9zZU9uQ29udGVudENsaWNrLGU9Yi5zdC5jbG9zZU9uQmdDbGljaztpZihkJiZlKXJldHVybiEwO2lmKCFiLmNvbnRlbnR8fGEoYykuaGFzQ2xhc3MoXCJtZnAtY2xvc2VcIil8fGIucHJlbG9hZGVyJiZjPT09Yi5wcmVsb2FkZXJbMF0pcmV0dXJuITA7aWYoYz09PWIuY29udGVudFswXXx8YS5jb250YWlucyhiLmNvbnRlbnRbMF0sYykpe2lmKGQpcmV0dXJuITB9ZWxzZSBpZihlJiZhLmNvbnRhaW5zKGRvY3VtZW50LGMpKXJldHVybiEwO3JldHVybiExfX0sX2FkZENsYXNzVG9NRlA6ZnVuY3Rpb24oYSl7Yi5iZ092ZXJsYXkuYWRkQ2xhc3MoYSksYi53cmFwLmFkZENsYXNzKGEpfSxfcmVtb3ZlQ2xhc3NGcm9tTUZQOmZ1bmN0aW9uKGEpe3RoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGEpLGIud3JhcC5yZW1vdmVDbGFzcyhhKX0sX2hhc1Njcm9sbEJhcjpmdW5jdGlvbihhKXtyZXR1cm4oYi5pc0lFNz9kLmhlaWdodCgpOmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KT4oYXx8di5oZWlnaHQoKSl9LF9zZXRGb2N1czpmdW5jdGlvbigpeyhiLnN0LmZvY3VzP2IuY29udGVudC5maW5kKGIuc3QuZm9jdXMpLmVxKDApOmIud3JhcCkuZm9jdXMoKX0sX29uRm9jdXNJbjpmdW5jdGlvbihjKXtyZXR1cm4gYy50YXJnZXQ9PT1iLndyYXBbMF18fGEuY29udGFpbnMoYi53cmFwWzBdLGMudGFyZ2V0KT92b2lkIDA6KGIuX3NldEZvY3VzKCksITEpfSxfcGFyc2VNYXJrdXA6ZnVuY3Rpb24oYixjLGQpe3ZhciBlO2QuZGF0YSYmKGM9YS5leHRlbmQoZC5kYXRhLGMpKSx5KGwsW2IsYyxkXSksYS5lYWNoKGMsZnVuY3Rpb24oYyxkKXtpZih2b2lkIDA9PT1kfHxkPT09ITEpcmV0dXJuITA7aWYoZT1jLnNwbGl0KFwiX1wiKSxlLmxlbmd0aD4xKXt2YXIgZj1iLmZpbmQocCtcIi1cIitlWzBdKTtpZihmLmxlbmd0aD4wKXt2YXIgZz1lWzFdO1wicmVwbGFjZVdpdGhcIj09PWc/ZlswXSE9PWRbMF0mJmYucmVwbGFjZVdpdGgoZCk6XCJpbWdcIj09PWc/Zi5pcyhcImltZ1wiKT9mLmF0dHIoXCJzcmNcIixkKTpmLnJlcGxhY2VXaXRoKGEoXCI8aW1nPlwiKS5hdHRyKFwic3JjXCIsZCkuYXR0cihcImNsYXNzXCIsZi5hdHRyKFwiY2xhc3NcIikpKTpmLmF0dHIoZVsxXSxkKX19ZWxzZSBiLmZpbmQocCtcIi1cIitjKS5odG1sKGQpfSl9LF9nZXRTY3JvbGxiYXJTaXplOmZ1bmN0aW9uKCl7aWYodm9pZCAwPT09Yi5zY3JvbGxiYXJTaXplKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Euc3R5bGUuY3NzVGV4dD1cIndpZHRoOiA5OXB4OyBoZWlnaHQ6IDk5cHg7IG92ZXJmbG93OiBzY3JvbGw7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4O1wiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSksYi5zY3JvbGxiYXJTaXplPWEub2Zmc2V0V2lkdGgtYS5jbGllbnRXaWR0aCxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpfXJldHVybiBiLnNjcm9sbGJhclNpemV9fSxhLm1hZ25pZmljUG9wdXA9e2luc3RhbmNlOm51bGwscHJvdG86dC5wcm90b3R5cGUsbW9kdWxlczpbXSxvcGVuOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIEEoKSxiPWI/YS5leHRlbmQoITAse30sYik6e30sYi5pc09iaj0hMCxiLmluZGV4PWN8fDAsdGhpcy5pbnN0YW5jZS5vcGVuKGIpfSxjbG9zZTpmdW5jdGlvbigpe3JldHVybiBhLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UmJmEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS5jbG9zZSgpfSxyZWdpc3Rlck1vZHVsZTpmdW5jdGlvbihiLGMpe2Mub3B0aW9ucyYmKGEubWFnbmlmaWNQb3B1cC5kZWZhdWx0c1tiXT1jLm9wdGlvbnMpLGEuZXh0ZW5kKHRoaXMucHJvdG8sYy5wcm90byksdGhpcy5tb2R1bGVzLnB1c2goYil9LGRlZmF1bHRzOntkaXNhYmxlT246MCxrZXk6bnVsbCxtaWRDbGljazohMSxtYWluQ2xhc3M6XCJcIixwcmVsb2FkZXI6ITAsZm9jdXM6XCJcIixjbG9zZU9uQ29udGVudENsaWNrOiExLGNsb3NlT25CZ0NsaWNrOiEwLGNsb3NlQnRuSW5zaWRlOiEwLHNob3dDbG9zZUJ0bjohMCxlbmFibGVFc2NhcGVLZXk6ITAsbW9kYWw6ITEsYWxpZ25Ub3A6ITEscmVtb3ZhbERlbGF5OjAscHJlcGVuZFRvOm51bGwsZml4ZWRDb250ZW50UG9zOlwiYXV0b1wiLGZpeGVkQmdQb3M6XCJhdXRvXCIsb3ZlcmZsb3dZOlwiYXV0b1wiLGNsb3NlTWFya3VwOic8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsdENsb3NlOlwiQ2xvc2UgKEVzYylcIix0TG9hZGluZzpcIkxvYWRpbmcuLi5cIixhdXRvRm9jdXNMYXN0OiEwfX0sYS5mbi5tYWduaWZpY1BvcHVwPWZ1bmN0aW9uKGMpe0EoKTt2YXIgZD1hKHRoaXMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjKWlmKFwib3BlblwiPT09Yyl7dmFyIGUsZj11P2QuZGF0YShcIm1hZ25pZmljUG9wdXBcIik6ZFswXS5tYWduaWZpY1BvcHVwLGc9cGFyc2VJbnQoYXJndW1lbnRzWzFdLDEwKXx8MDtmLml0ZW1zP2U9Zi5pdGVtc1tnXTooZT1kLGYuZGVsZWdhdGUmJihlPWUuZmluZChmLmRlbGVnYXRlKSksZT1lLmVxKGcpKSxiLl9vcGVuQ2xpY2soe21mcEVsOmV9LGQsZil9ZWxzZSBiLmlzT3BlbiYmYltjXS5hcHBseShiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7ZWxzZSBjPWEuZXh0ZW5kKCEwLHt9LGMpLHU/ZC5kYXRhKFwibWFnbmlmaWNQb3B1cFwiLGMpOmRbMF0ubWFnbmlmaWNQb3B1cD1jLGIuYWRkR3JvdXAoZCxjKTtyZXR1cm4gZH07dmFyIEMsRCxFLEY9XCJpbmxpbmVcIixHPWZ1bmN0aW9uKCl7RSYmKEQuYWZ0ZXIoRS5hZGRDbGFzcyhDKSkuZGV0YWNoKCksRT1udWxsKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEYse29wdGlvbnM6e2hpZGRlbkNsYXNzOlwiaGlkZVwiLG1hcmt1cDpcIlwiLHROb3RGb3VuZDpcIkNvbnRlbnQgbm90IGZvdW5kXCJ9LHByb3RvOntpbml0SW5saW5lOmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKEYpLHcoaCtcIi5cIitGLGZ1bmN0aW9uKCl7RygpfSl9LGdldElubGluZTpmdW5jdGlvbihjLGQpe2lmKEcoKSxjLnNyYyl7dmFyIGU9Yi5zdC5pbmxpbmUsZj1hKGMuc3JjKTtpZihmLmxlbmd0aCl7dmFyIGc9ZlswXS5wYXJlbnROb2RlO2cmJmcudGFnTmFtZSYmKER8fChDPWUuaGlkZGVuQ2xhc3MsRD14KEMpLEM9XCJtZnAtXCIrQyksRT1mLmFmdGVyKEQpLmRldGFjaCgpLnJlbW92ZUNsYXNzKEMpKSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpfWVsc2UgYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGUudE5vdEZvdW5kKSxmPWEoXCI8ZGl2PlwiKTtyZXR1cm4gYy5pbmxpbmVFbGVtZW50PWYsZn1yZXR1cm4gYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSxiLl9wYXJzZU1hcmt1cChkLHt9LGMpLGR9fX0pO3ZhciBILEk9XCJhamF4XCIsSj1mdW5jdGlvbigpe0gmJmEoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoSCl9LEs9ZnVuY3Rpb24oKXtKKCksYi5yZXEmJmIucmVxLmFib3J0KCl9O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJLHtvcHRpb25zOntzZXR0aW5nczpudWxsLGN1cnNvcjpcIm1mcC1hamF4LWN1clwiLHRFcnJvcjonPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGNvbnRlbnQ8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ30scHJvdG86e2luaXRBamF4OmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKEkpLEg9Yi5zdC5hamF4LmN1cnNvcix3KGgrXCIuXCIrSSxLKSx3KFwiQmVmb3JlQ2hhbmdlLlwiK0ksSyl9LGdldEFqYXg6ZnVuY3Rpb24oYyl7SCYmYShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhIKSxiLnVwZGF0ZVN0YXR1cyhcImxvYWRpbmdcIik7dmFyIGQ9YS5leHRlbmQoe3VybDpjLnNyYyxzdWNjZXNzOmZ1bmN0aW9uKGQsZSxmKXt2YXIgZz17ZGF0YTpkLHhocjpmfTt5KFwiUGFyc2VBamF4XCIsZyksYi5hcHBlbmRDb250ZW50KGEoZy5kYXRhKSxJKSxjLmZpbmlzaGVkPSEwLEooKSxiLl9zZXRGb2N1cygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLndyYXAuYWRkQ2xhc3MocSl9LDE2KSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpLHkoXCJBamF4Q29udGVudEFkZGVkXCIpfSxlcnJvcjpmdW5jdGlvbigpe0ooKSxjLmZpbmlzaGVkPWMubG9hZEVycm9yPSEwLGIudXBkYXRlU3RhdHVzKFwiZXJyb3JcIixiLnN0LmFqYXgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSl9fSxiLnN0LmFqYXguc2V0dGluZ3MpO3JldHVybiBiLnJlcT1hLmFqYXgoZCksXCJcIn19fSk7dmFyIEwsTT1mdW5jdGlvbihjKXtpZihjLmRhdGEmJnZvaWQgMCE9PWMuZGF0YS50aXRsZSlyZXR1cm4gYy5kYXRhLnRpdGxlO3ZhciBkPWIuc3QuaW1hZ2UudGl0bGVTcmM7aWYoZCl7aWYoYS5pc0Z1bmN0aW9uKGQpKXJldHVybiBkLmNhbGwoYixjKTtpZihjLmVsKXJldHVybiBjLmVsLmF0dHIoZCl8fFwiXCJ9cmV0dXJuXCJcIn07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFwiaW1hZ2VcIix7b3B0aW9uczp7bWFya3VwOic8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPjxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj48ZmlndXJlPjxkaXYgY2xhc3M9XCJtZnAtaW1nXCI+PC9kaXY+PGZpZ2NhcHRpb24+PGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+PGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PjwvZGl2PjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT48L2Rpdj4nLGN1cnNvcjpcIm1mcC16b29tLW91dC1jdXJcIix0aXRsZVNyYzpcInRpdGxlXCIsdmVydGljYWxGaXQ6ITAsdEVycm9yOic8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ30scHJvdG86e2luaXRJbWFnZTpmdW5jdGlvbigpe3ZhciBjPWIuc3QuaW1hZ2UsZD1cIi5pbWFnZVwiO2IudHlwZXMucHVzaChcImltYWdlXCIpLHcobStkLGZ1bmN0aW9uKCl7XCJpbWFnZVwiPT09Yi5jdXJySXRlbS50eXBlJiZjLmN1cnNvciYmYShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhjLmN1cnNvcil9KSx3KGgrZCxmdW5jdGlvbigpe2MuY3Vyc29yJiZhKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGMuY3Vyc29yKSx2Lm9mZihcInJlc2l6ZVwiK3ApfSksdyhcIlJlc2l6ZVwiK2QsYi5yZXNpemVJbWFnZSksYi5pc0xvd0lFJiZ3KFwiQWZ0ZXJDaGFuZ2VcIixiLnJlc2l6ZUltYWdlKX0scmVzaXplSW1hZ2U6ZnVuY3Rpb24oKXt2YXIgYT1iLmN1cnJJdGVtO2lmKGEmJmEuaW1nJiZiLnN0LmltYWdlLnZlcnRpY2FsRml0KXt2YXIgYz0wO2IuaXNMb3dJRSYmKGM9cGFyc2VJbnQoYS5pbWcuY3NzKFwicGFkZGluZy10b3BcIiksMTApK3BhcnNlSW50KGEuaW1nLmNzcyhcInBhZGRpbmctYm90dG9tXCIpLDEwKSksYS5pbWcuY3NzKFwibWF4LWhlaWdodFwiLGIud0gtYyl9fSxfb25JbWFnZUhhc1NpemU6ZnVuY3Rpb24oYSl7YS5pbWcmJihhLmhhc1NpemU9ITAsTCYmY2xlYXJJbnRlcnZhbChMKSxhLmlzQ2hlY2tpbmdJbWdTaXplPSExLHkoXCJJbWFnZUhhc1NpemVcIixhKSxhLmltZ0hpZGRlbiYmKGIuY29udGVudCYmYi5jb250ZW50LnJlbW92ZUNsYXNzKFwibWZwLWxvYWRpbmdcIiksYS5pbWdIaWRkZW49ITEpKX0sZmluZEltYWdlU2l6ZTpmdW5jdGlvbihhKXt2YXIgYz0wLGQ9YS5pbWdbMF0sZT1mdW5jdGlvbihmKXtMJiZjbGVhckludGVydmFsKEwpLEw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtyZXR1cm4gZC5uYXR1cmFsV2lkdGg+MD92b2lkIGIuX29uSW1hZ2VIYXNTaXplKGEpOihjPjIwMCYmY2xlYXJJbnRlcnZhbChMKSxjKyssdm9pZCgzPT09Yz9lKDEwKTo0MD09PWM/ZSg1MCk6MTAwPT09YyYmZSg1MDApKSl9LGYpfTtlKDEpfSxnZXRJbWFnZTpmdW5jdGlvbihjLGQpe3ZhciBlPTAsZj1mdW5jdGlvbigpe2MmJihjLmltZ1swXS5jb21wbGV0ZT8oYy5pbWcub2ZmKFwiLm1mcGxvYWRlclwiKSxjPT09Yi5jdXJySXRlbSYmKGIuX29uSW1hZ2VIYXNTaXplKGMpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIikpLGMuaGFzU2l6ZT0hMCxjLmxvYWRlZD0hMCx5KFwiSW1hZ2VMb2FkQ29tcGxldGVcIikpOihlKyssMjAwPmU/c2V0VGltZW91dChmLDEwMCk6ZygpKSl9LGc9ZnVuY3Rpb24oKXtjJiYoYy5pbWcub2ZmKFwiLm1mcGxvYWRlclwiKSxjPT09Yi5jdXJySXRlbSYmKGIuX29uSW1hZ2VIYXNTaXplKGMpLGIudXBkYXRlU3RhdHVzKFwiZXJyb3JcIixoLnRFcnJvci5yZXBsYWNlKFwiJXVybCVcIixjLnNyYykpKSxjLmhhc1NpemU9ITAsYy5sb2FkZWQ9ITAsYy5sb2FkRXJyb3I9ITApfSxoPWIuc3QuaW1hZ2UsaT1kLmZpbmQoXCIubWZwLWltZ1wiKTtpZihpLmxlbmd0aCl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtqLmNsYXNzTmFtZT1cIm1mcC1pbWdcIixjLmVsJiZjLmVsLmZpbmQoXCJpbWdcIikubGVuZ3RoJiYoai5hbHQ9Yy5lbC5maW5kKFwiaW1nXCIpLmF0dHIoXCJhbHRcIikpLGMuaW1nPWEoaikub24oXCJsb2FkLm1mcGxvYWRlclwiLGYpLm9uKFwiZXJyb3IubWZwbG9hZGVyXCIsZyksai5zcmM9Yy5zcmMsaS5pcyhcImltZ1wiKSYmKGMuaW1nPWMuaW1nLmNsb25lKCkpLGo9Yy5pbWdbMF0sai5uYXR1cmFsV2lkdGg+MD9jLmhhc1NpemU9ITA6ai53aWR0aHx8KGMuaGFzU2l6ZT0hMSl9cmV0dXJuIGIuX3BhcnNlTWFya3VwKGQse3RpdGxlOk0oYyksaW1nX3JlcGxhY2VXaXRoOmMuaW1nfSxjKSxiLnJlc2l6ZUltYWdlKCksYy5oYXNTaXplPyhMJiZjbGVhckludGVydmFsKEwpLGMubG9hZEVycm9yPyhkLmFkZENsYXNzKFwibWZwLWxvYWRpbmdcIiksYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSkpOihkLnJlbW92ZUNsYXNzKFwibWZwLWxvYWRpbmdcIiksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSksZCk6KGIudXBkYXRlU3RhdHVzKFwibG9hZGluZ1wiKSxjLmxvYWRpbmc9ITAsYy5oYXNTaXplfHwoYy5pbWdIaWRkZW49ITAsZC5hZGRDbGFzcyhcIm1mcC1sb2FkaW5nXCIpLGIuZmluZEltYWdlU2l6ZShjKSksZCl9fX0pO3ZhciBOLE89ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09TiYmKE49dm9pZCAwIT09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikuc3R5bGUuTW96VHJhbnNmb3JtKSxOfTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoXCJ6b29tXCIse29wdGlvbnM6e2VuYWJsZWQ6ITEsZWFzaW5nOlwiZWFzZS1pbi1vdXRcIixkdXJhdGlvbjozMDAsb3BlbmVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLmlzKFwiaW1nXCIpP2E6YS5maW5kKFwiaW1nXCIpfX0scHJvdG86e2luaXRab29tOmZ1bmN0aW9uKCl7dmFyIGEsYz1iLnN0Lnpvb20sZD1cIi56b29tXCI7aWYoYy5lbmFibGVkJiZiLnN1cHBvcnRzVHJhbnNpdGlvbil7dmFyIGUsZixnPWMuZHVyYXRpb24saj1mdW5jdGlvbihhKXt2YXIgYj1hLmNsb25lKCkucmVtb3ZlQXR0cihcInN0eWxlXCIpLnJlbW92ZUF0dHIoXCJjbGFzc1wiKS5hZGRDbGFzcyhcIm1mcC1hbmltYXRlZC1pbWFnZVwiKSxkPVwiYWxsIFwiK2MuZHVyYXRpb24vMWUzK1wicyBcIitjLmVhc2luZyxlPXtwb3NpdGlvbjpcImZpeGVkXCIsekluZGV4Ojk5OTksbGVmdDowLHRvcDowLFwiLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5XCI6XCJoaWRkZW5cIn0sZj1cInRyYW5zaXRpb25cIjtyZXR1cm4gZVtcIi13ZWJraXQtXCIrZl09ZVtcIi1tb3otXCIrZl09ZVtcIi1vLVwiK2ZdPWVbZl09ZCxiLmNzcyhlKSxifSxrPWZ1bmN0aW9uKCl7Yi5jb250ZW50LmNzcyhcInZpc2liaWxpdHlcIixcInZpc2libGVcIil9O3coXCJCdWlsZENvbnRyb2xzXCIrZCxmdW5jdGlvbigpe2lmKGIuX2FsbG93Wm9vbSgpKXtpZihjbGVhclRpbWVvdXQoZSksYi5jb250ZW50LmNzcyhcInZpc2liaWxpdHlcIixcImhpZGRlblwiKSxhPWIuX2dldEl0ZW1Ub1pvb20oKSwhYSlyZXR1cm4gdm9pZCBrKCk7Zj1qKGEpLGYuY3NzKGIuX2dldE9mZnNldCgpKSxiLndyYXAuYXBwZW5kKGYpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe2YuY3NzKGIuX2dldE9mZnNldCghMCkpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe2soKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5yZW1vdmUoKSxhPWY9bnVsbCx5KFwiWm9vbUFuaW1hdGlvbkVuZGVkXCIpfSwxNil9LGcpfSwxNil9fSksdyhpK2QsZnVuY3Rpb24oKXtpZihiLl9hbGxvd1pvb20oKSl7aWYoY2xlYXJUaW1lb3V0KGUpLGIuc3QucmVtb3ZhbERlbGF5PWcsIWEpe2lmKGE9Yi5fZ2V0SXRlbVRvWm9vbSgpLCFhKXJldHVybjtmPWooYSl9Zi5jc3MoYi5fZ2V0T2Zmc2V0KCEwKSksYi53cmFwLmFwcGVuZChmKSxiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmLmNzcyhiLl9nZXRPZmZzZXQoKSl9LDE2KX19KSx3KGgrZCxmdW5jdGlvbigpe2IuX2FsbG93Wm9vbSgpJiYoaygpLGYmJmYucmVtb3ZlKCksYT1udWxsKX0pfX0sX2FsbG93Wm9vbTpmdW5jdGlvbigpe3JldHVyblwiaW1hZ2VcIj09PWIuY3Vyckl0ZW0udHlwZX0sX2dldEl0ZW1Ub1pvb206ZnVuY3Rpb24oKXtyZXR1cm4gYi5jdXJySXRlbS5oYXNTaXplP2IuY3Vyckl0ZW0uaW1nOiExfSxfZ2V0T2Zmc2V0OmZ1bmN0aW9uKGMpe3ZhciBkO2Q9Yz9iLmN1cnJJdGVtLmltZzpiLnN0Lnpvb20ub3BlbmVyKGIuY3Vyckl0ZW0uZWx8fGIuY3Vyckl0ZW0pO3ZhciBlPWQub2Zmc2V0KCksZj1wYXJzZUludChkLmNzcyhcInBhZGRpbmctdG9wXCIpLDEwKSxnPXBhcnNlSW50KGQuY3NzKFwicGFkZGluZy1ib3R0b21cIiksMTApO2UudG9wLT1hKHdpbmRvdykuc2Nyb2xsVG9wKCktZjt2YXIgaD17d2lkdGg6ZC53aWR0aCgpLGhlaWdodDoodT9kLmlubmVySGVpZ2h0KCk6ZFswXS5vZmZzZXRIZWlnaHQpLWctZn07cmV0dXJuIE8oKT9oW1wiLW1vei10cmFuc2Zvcm1cIl09aC50cmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIrZS5sZWZ0K1wicHgsXCIrZS50b3ArXCJweClcIjooaC5sZWZ0PWUubGVmdCxoLnRvcD1lLnRvcCksaH19fSk7dmFyIFA9XCJpZnJhbWVcIixRPVwiLy9hYm91dDpibGFua1wiLFI9ZnVuY3Rpb24oYSl7aWYoYi5jdXJyVGVtcGxhdGVbUF0pe3ZhciBjPWIuY3VyclRlbXBsYXRlW1BdLmZpbmQoXCJpZnJhbWVcIik7Yy5sZW5ndGgmJihhfHwoY1swXS5zcmM9USksYi5pc0lFOCYmYy5jc3MoXCJkaXNwbGF5XCIsYT9cImJsb2NrXCI6XCJub25lXCIpKX19O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShQLHtvcHRpb25zOnttYXJrdXA6JzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPjxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj48aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIHNyYz1cIi8vYWJvdXQ6YmxhbmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9kaXY+JyxzcmNBY3Rpb246XCJpZnJhbWVfc3JjXCIscGF0dGVybnM6e3lvdXR1YmU6e2luZGV4OlwieW91dHViZS5jb21cIixpZDpcInY9XCIsc3JjOlwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xXCJ9LHZpbWVvOntpbmRleDpcInZpbWVvLmNvbS9cIixpZDpcIi9cIixzcmM6XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xXCJ9LGdtYXBzOntpbmRleDpcIi8vbWFwcy5nb29nbGUuXCIsc3JjOlwiJWlkJSZvdXRwdXQ9ZW1iZWRcIn19fSxwcm90bzp7aW5pdElmcmFtZTpmdW5jdGlvbigpe2IudHlwZXMucHVzaChQKSx3KFwiQmVmb3JlQ2hhbmdlXCIsZnVuY3Rpb24oYSxiLGMpe2IhPT1jJiYoYj09PVA/UigpOmM9PT1QJiZSKCEwKSl9KSx3KGgrXCIuXCIrUCxmdW5jdGlvbigpe1IoKX0pfSxnZXRJZnJhbWU6ZnVuY3Rpb24oYyxkKXt2YXIgZT1jLnNyYyxmPWIuc3QuaWZyYW1lO2EuZWFjaChmLnBhdHRlcm5zLGZ1bmN0aW9uKCl7cmV0dXJuIGUuaW5kZXhPZih0aGlzLmluZGV4KT4tMT8odGhpcy5pZCYmKGU9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuaWQ/ZS5zdWJzdHIoZS5sYXN0SW5kZXhPZih0aGlzLmlkKSt0aGlzLmlkLmxlbmd0aCxlLmxlbmd0aCk6dGhpcy5pZC5jYWxsKHRoaXMsZSkpLGU9dGhpcy5zcmMucmVwbGFjZShcIiVpZCVcIixlKSwhMSk6dm9pZCAwfSk7dmFyIGc9e307cmV0dXJuIGYuc3JjQWN0aW9uJiYoZ1tmLnNyY0FjdGlvbl09ZSksYi5fcGFyc2VNYXJrdXAoZCxnLGMpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIiksZH19fSk7dmFyIFM9ZnVuY3Rpb24oYSl7dmFyIGM9Yi5pdGVtcy5sZW5ndGg7cmV0dXJuIGE+Yy0xP2EtYzowPmE/YythOmF9LFQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhLnJlcGxhY2UoLyVjdXJyJS9naSxiKzEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksYyl9O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShcImdhbGxlcnlcIix7b3B0aW9uczp7ZW5hYmxlZDohMSxhcnJvd01hcmt1cDonPGJ1dHRvbiB0aXRsZT1cIiV0aXRsZSVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtYXJyb3cgbWZwLWFycm93LSVkaXIlXCI+PC9idXR0b24+JyxwcmVsb2FkOlswLDJdLG5hdmlnYXRlQnlJbWdDbGljazohMCxhcnJvd3M6ITAsdFByZXY6XCJQcmV2aW91cyAoTGVmdCBhcnJvdyBrZXkpXCIsdE5leHQ6XCJOZXh0IChSaWdodCBhcnJvdyBrZXkpXCIsdENvdW50ZXI6XCIlY3VyciUgb2YgJXRvdGFsJVwifSxwcm90bzp7aW5pdEdhbGxlcnk6ZnVuY3Rpb24oKXt2YXIgYz1iLnN0LmdhbGxlcnksZT1cIi5tZnAtZ2FsbGVyeVwiO3JldHVybiBiLmRpcmVjdGlvbj0hMCxjJiZjLmVuYWJsZWQ/KGYrPVwiIG1mcC1nYWxsZXJ5XCIsdyhtK2UsZnVuY3Rpb24oKXtjLm5hdmlnYXRlQnlJbWdDbGljayYmYi53cmFwLm9uKFwiY2xpY2tcIitlLFwiLm1mcC1pbWdcIixmdW5jdGlvbigpe3JldHVybiBiLml0ZW1zLmxlbmd0aD4xPyhiLm5leHQoKSwhMSk6dm9pZCAwfSksZC5vbihcImtleWRvd25cIitlLGZ1bmN0aW9uKGEpezM3PT09YS5rZXlDb2RlP2IucHJldigpOjM5PT09YS5rZXlDb2RlJiZiLm5leHQoKX0pfSksdyhcIlVwZGF0ZVN0YXR1c1wiK2UsZnVuY3Rpb24oYSxjKXtjLnRleHQmJihjLnRleHQ9VChjLnRleHQsYi5jdXJySXRlbS5pbmRleCxiLml0ZW1zLmxlbmd0aCkpfSksdyhsK2UsZnVuY3Rpb24oYSxkLGUsZil7dmFyIGc9Yi5pdGVtcy5sZW5ndGg7ZS5jb3VudGVyPWc+MT9UKGMudENvdW50ZXIsZi5pbmRleCxnKTpcIlwifSksdyhcIkJ1aWxkQ29udHJvbHNcIitlLGZ1bmN0aW9uKCl7aWYoYi5pdGVtcy5sZW5ndGg+MSYmYy5hcnJvd3MmJiFiLmFycm93TGVmdCl7dmFyIGQ9Yy5hcnJvd01hcmt1cCxlPWIuYXJyb3dMZWZ0PWEoZC5yZXBsYWNlKC8ldGl0bGUlL2dpLGMudFByZXYpLnJlcGxhY2UoLyVkaXIlL2dpLFwibGVmdFwiKSkuYWRkQ2xhc3MocyksZj1iLmFycm93UmlnaHQ9YShkLnJlcGxhY2UoLyV0aXRsZSUvZ2ksYy50TmV4dCkucmVwbGFjZSgvJWRpciUvZ2ksXCJyaWdodFwiKSkuYWRkQ2xhc3Mocyk7ZS5jbGljayhmdW5jdGlvbigpe2IucHJldigpfSksZi5jbGljayhmdW5jdGlvbigpe2IubmV4dCgpfSksYi5jb250YWluZXIuYXBwZW5kKGUuYWRkKGYpKX19KSx3KG4rZSxmdW5jdGlvbigpe2IuX3ByZWxvYWRUaW1lb3V0JiZjbGVhclRpbWVvdXQoYi5fcHJlbG9hZFRpbWVvdXQpLGIuX3ByZWxvYWRUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLnByZWxvYWROZWFyYnlJbWFnZXMoKSxiLl9wcmVsb2FkVGltZW91dD1udWxsfSwxNil9KSx2b2lkIHcoaCtlLGZ1bmN0aW9uKCl7ZC5vZmYoZSksYi53cmFwLm9mZihcImNsaWNrXCIrZSksYi5hcnJvd1JpZ2h0PWIuYXJyb3dMZWZ0PW51bGx9KSk6ITF9LG5leHQ6ZnVuY3Rpb24oKXtiLmRpcmVjdGlvbj0hMCxiLmluZGV4PVMoYi5pbmRleCsxKSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LHByZXY6ZnVuY3Rpb24oKXtiLmRpcmVjdGlvbj0hMSxiLmluZGV4PVMoYi5pbmRleC0xKSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LGdvVG86ZnVuY3Rpb24oYSl7Yi5kaXJlY3Rpb249YT49Yi5pbmRleCxiLmluZGV4PWEsYi51cGRhdGVJdGVtSFRNTCgpfSxwcmVsb2FkTmVhcmJ5SW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGEsYz1iLnN0LmdhbGxlcnkucHJlbG9hZCxkPU1hdGgubWluKGNbMF0sYi5pdGVtcy5sZW5ndGgpLGU9TWF0aC5taW4oY1sxXSxiLml0ZW1zLmxlbmd0aCk7Zm9yKGE9MTthPD0oYi5kaXJlY3Rpb24/ZTpkKTthKyspYi5fcHJlbG9hZEl0ZW0oYi5pbmRleCthKTtmb3IoYT0xO2E8PShiLmRpcmVjdGlvbj9kOmUpO2ErKyliLl9wcmVsb2FkSXRlbShiLmluZGV4LWEpfSxfcHJlbG9hZEl0ZW06ZnVuY3Rpb24oYyl7aWYoYz1TKGMpLCFiLml0ZW1zW2NdLnByZWxvYWRlZCl7dmFyIGQ9Yi5pdGVtc1tjXTtkLnBhcnNlZHx8KGQ9Yi5wYXJzZUVsKGMpKSx5KFwiTGF6eUxvYWRcIixkKSxcImltYWdlXCI9PT1kLnR5cGUmJihkLmltZz1hKCc8aW1nIGNsYXNzPVwibWZwLWltZ1wiIC8+Jykub24oXCJsb2FkLm1mcGxvYWRlclwiLGZ1bmN0aW9uKCl7ZC5oYXNTaXplPSEwfSkub24oXCJlcnJvci5tZnBsb2FkZXJcIixmdW5jdGlvbigpe2QuaGFzU2l6ZT0hMCxkLmxvYWRFcnJvcj0hMCx5KFwiTGF6eUxvYWRFcnJvclwiLGQpfSkuYXR0cihcInNyY1wiLGQuc3JjKSksZC5wcmVsb2FkZWQ9ITB9fX19KTt2YXIgVT1cInJldGluYVwiO2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShVLHtvcHRpb25zOntyZXBsYWNlU3JjOmZ1bmN0aW9uKGEpe3JldHVybiBhLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sZnVuY3Rpb24oYSl7cmV0dXJuXCJAMnhcIithfSl9LHJhdGlvOjF9LHByb3RvOntpbml0UmV0aW5hOmZ1bmN0aW9uKCl7aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8+MSl7dmFyIGE9Yi5zdC5yZXRpbmEsYz1hLnJhdGlvO2M9aXNOYU4oYyk/YygpOmMsYz4xJiYodyhcIkltYWdlSGFzU2l6ZS5cIitVLGZ1bmN0aW9uKGEsYil7Yi5pbWcuY3NzKHtcIm1heC13aWR0aFwiOmIuaW1nWzBdLm5hdHVyYWxXaWR0aC9jLHdpZHRoOlwiMTAwJVwifSl9KSx3KFwiRWxlbWVudFBhcnNlLlwiK1UsZnVuY3Rpb24oYixkKXtkLnNyYz1hLnJlcGxhY2VTcmMoZCxjKX0pKX19fX0pLEEoKX0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdmVuZG9yL21hZ25pZmljLXBvcHVwLmpzIiwiLyoqXHJcbiAqIENsYXNzIHRvZ2dsZXIgb24gcGFyZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5hY3RpdmVDbGFzcz0naXMtYWN0aXZlJ11cclxuICogQHBhcmFtIHtzdHJpbmd8anF1ZXJ5fSBbb3B0aW9ucy50YXJnZXRTZWxlY3Rvcj0nLmpzLWRyb3Bkb3duLXRvZ2dsZSddXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudG9nZ2xlT25CbHVyPWZhbHNlXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlYnVnPWZhbHNlXSAtIEVuYWJsZXMgcmV0dXJuZXNcclxuICovXHJcbiQuZm4ud3ptQ2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHJcblx0dmFyXHJcblx0XHRhY3RpdmVDbGFzc05hbWUgPSBvcHRpb25zLmFjdGl2ZUNsYXNzIHx8ICdpcy1hY3RpdmUnLFxyXG5cdFx0dG9nZ2xlU2VsZWN0b3IgPSBvcHRpb25zLnRvZ2dsZVNlbGVjdG9yIHx8ICcuanMtY2xhc3MtdG9nZ2xlJyxcclxuXHRcdHRvZ2dsZU9uQmx1ciA9IG9wdGlvbnMudG9nZ2xlT25CbHVyIHx8IGZhbHNlLFxyXG5cdFx0Y29sbGVjdGlvblNlbGVjdG9yID0gJ1tkYXRhLXRvZ2dsZT1cImluaXRpYWxpemVkXCJdJyxcclxuXHRcdGRlYnVnID0gb3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZTtcclxuXHJcblx0aWYgKGRlYnVnKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImFjdGl2ZUNsYXNzTmFtZTpcIiwgYWN0aXZlQ2xhc3NOYW1lKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidG9nZ2xlU2VsZWN0b3I6XCIsIHRvZ2dsZVNlbGVjdG9yKTtcclxuXHRcdGNvbnNvbGUubG9nKFwidG9nZ2xlT25CbHVyOlwiLCB0b2dnbGVPbkJsdXIpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJjb2xsZWN0aW9uU2VsZWN0b3I6XCIsIGNvbGxlY3Rpb25TZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChkZWJ1Zykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGE6JywgISEkKHRoaXMpLmRhdGEoJ3d6bUNsYXNzVG9nZ2xlJykpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhJCh0aGlzKS5kYXRhKCd3em1DbGFzc1RvZ2dsZScpID09IGZhbHNlKSB7XHJcblx0XHRcdHZhciB0YXJnZXQ7XHJcblx0XHRcdCQodGhpcykuYXR0cignZGF0YS10b2dnbGUnLCdpbml0aWFsaXplZCcpO1xyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIHRvZ2dsZVNlbGVjdG9yLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0YXJnZXQgPSBlLmRlbGVnYXRlVGFyZ2V0O1xyXG5cdFx0XHRcdGlmIChkZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjbGljazp0YXJnZXQ6XCIsIHRhcmdldClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgICh0b2dnbGVPbkJsdXIpIHtcclxuXHRcdFx0XHRcdCQoY29sbGVjdGlvblNlbGVjdG9yKS5ub3QoZS5kZWxlZ2F0ZVRhcmdldCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3NOYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JChlLmRlbGVnYXRlVGFyZ2V0KS50b2dnbGVDbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xyXG5cclxuXHRcdFx0XHRpZiAodG9nZ2xlT25CbHVyKSB7XHJcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2sgdG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcdGlmICghJChlLnRhcmdldCkuY2xvc2VzdChjb2xsZWN0aW9uU2VsZWN0b3IpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGFyZ2V0KS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignY2xpY2sgdG91Y2hzdGFydCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKHRoaXMpLmRhdGEoJ3d6bUNsYXNzVG9nZ2xlJywgdHJ1ZSlcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tb2R1bGVzL3dlem9tX2NsYXNzX3RvZ2dsZXIuanMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUE1QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBTEE7QUFpQ0E7QUFDQTtBQUtBOzs7Ozs7O0FDdFFBOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdk5BO0FBQ0E7QUF5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBbm5CQTtBQUNBO0FBcW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpSQTtBQUNBO0FBMTdCQTtBQUNBO0FBc3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ2psREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDRkE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQ0hBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==