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
/******/ 			modules[moduleId] = moreModules[moduleId];
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
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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

		$('.textReview').on('click', '.textReview__moreLink', function (e) {
			var $block = $(e.delegateTarget),
			    $this = $(this),
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

		$(window).load(function () {});

		$('.js-show-information').on('click', function () {
			$('.js-hidden-information').each(function (index, element) {
				var phone = $(element).data('information');
				$(element).text(phone);
			});
		});

		$('.numbers_only').ForceNumericOnly();
		});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
	      (function () {
	        var i = function i() {
	          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
	        };

	        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
	            return i(), b;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == c && i(), c;
	          }, pixelMarginRight: function pixelMarginRight() {
	            return null == c && i(), e;
	          }, reliableMarginLeft: function reliableMarginLeft() {
	            return null == c && i(), f;
	          }, reliableMarginRight: function reliableMarginRight() {
	            var b,
	                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
	          } });
	      })();
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

/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

/***/ },
/* 8 */
/***/ function(module, exports) {

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
						$(document).on('click.onBlur touchstart.onBlur', function (e) {
							if (!$(e.target).closest(collectionSelector).length) {
								$(target).removeClass(activeClassName);
								$(document).off('click.onBlur touchstart.onBlur');
							}
						});
					}
				});
				$(this).data('wzmClassToggle', true);
			}
		});
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDdjOTgwNjdkMjM5NmNiODMwMjhhIiwid2VicGFjazovLy9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy93SFRNTC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vc3JjL2pzL3ZlbmRvci9qcXVlcnktdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy92ZW5kb3IvanF1ZXJ5LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy9zcmMvanMvdmVuZG9yL21hZ25pZmljLXBvcHVwLmpzIiwid2VicGFjazovLy9zcmMvanMvbW9kdWxlcy93ZXpvbV9jbGFzc190b2dnbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCBjYWxsYmFja3MgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2guYXBwbHkoY2FsbGJhY2tzLCBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShjYWxsYmFja3MubGVuZ3RoKVxuIFx0XHRcdGNhbGxiYWNrcy5zaGlmdCgpLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdC8vIEFycmF5IG1lYW5zIFwibG9hZGluZ1wiLCBhcnJheSBjb250YWlucyBjYWxsYmFja3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDA6MFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbChudWxsLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBhbiBhcnJheSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdLnB1c2goY2FsbGJhY2spO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbY2FsbGJhY2tdO1xuIFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcblxuIFx0XHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJqcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDdjOTgwNjdkMjM5NmNiODMwMjhhXG4gKiovIiwicmVxdWlyZSgnd0hUTUwnKTtcclxucmVxdWlyZSgnd2V6b21fY2xhc3NfdG9nZ2xlcicpO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cdHN2ZzRldmVyeWJvZHkoe30pO1xyXG5cdHdIVE1MLmZvcm1WYWxpZGF0aW9uKCk7XHJcblx0d0hUTUwubWZwQWpheCgpO1xyXG5cclxuXHRqUXVlcnkuZm4uRm9yY2VOdW1lcmljT25seSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkKHRoaXMpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIga2V5ID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGUgfHwgMDtcclxuXHRcdFx0XHRyZXR1cm4gKGtleSA9PSA4IHx8IGtleSA9PSA5IHx8IGtleSA9PSA0NiB8fCAoa2V5ID49IDM3ICYmIGtleSA8PSA0MCkgfHwgKGtleSA+PSA0OCAmJiBrZXkgPD0gNTcpIHx8IChrZXkgPj0gOTYgJiYga2V5IDw9IDEwNSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8q0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LrQsNGA0YLRiyDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LrQvtC90YLQsNC60YLRiyovXHJcbiAgICAgICAgXHJcblx0bGV0ICRnb29nbGVNYXBzID0gJCgnLmdvb2dsZW1hcCcpO1xyXG5cdGlmICgkZ29vZ2xlTWFwcy5sZW5ndGgpe1xyXG5cdFx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IGluaXRHb29nbGVNYXBzID0gcmVxdWlyZSgnZ21hcCcpO1xyXG5cdFx0XHQkKCcuZ29vZ2xlbWFwJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsKSB7XHJcblx0XHRcdFx0dmFyIGxhdCA9ICQoZWwpLmRhdGEoJ2xhdCcpO1xyXG5cdFx0XHRcdHZhciBsbmcgPSAkKGVsKS5kYXRhKCdsbmcnKTtcclxuXHRcdFx0XHR2YXIgem9vbSA9ICQoZWwpLmRhdGEoJ3pvb20nKSB8fCAxODtcclxuXHRcdFx0XHR2YXIgbWFya2VyID0gJChlbCkuZGF0YSgnbWFya2VyJyk7XHJcblx0XHRcdFx0aW5pdEdvb2dsZU1hcHMoZWwsIGxhdCwgbG5nLCB6b29tLCBtYXJrZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvKiDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INGB0LrRgNC40L/RgtCwINC70LXQstC+0LPQviDQvNC10L3RjiAqL1xyXG5cdGxldCAkbXVsdGlMZXZlbE1lbnUgPSAkKCcuanMtbXVsdGlMZXZlbE1lbnUnKTtcclxuXHRpZiAoJG11bHRpTGV2ZWxNZW51Lmxlbmd0aCkge1xyXG5cdFx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0bGV0IGluaXRBc2lkZU1lbnUgPSByZXF1aXJlKCdhc2lkZU1lbnUnKTtcclxuXHRcdFx0aW5pdEFzaWRlTWVudSgkbXVsdGlMZXZlbE1lbnUpO1xyXG5cdFx0fSlcclxuXHR9XHJcblx0Lyog0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQvNCw0LPQvdC40YTQuNC60LAg0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INCz0LDQu9C70LXRgNC10LgqL1xyXG5cdGxldCAkbWFnbmlmaWNTZWxlY3RvcnMgPSAkKCcubWZpLWdhbGxlcnknKS5hZGQoJy52aWRlb0xpbmsnKTtcclxuXHRpZiAoJG1hZ25pZmljU2VsZWN0b3JzLmxlbmd0aCkge1xyXG5cdFx0cmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmVxdWlyZSgnbWFnbmlmaWMtcG9wdXAnKTtcclxuXHRcdFx0JCgnLm1maS1nYWxsZXJ5JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdFx0ZGVsZWdhdGU6ICdhJyxcclxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdGdhbGxlcnk6IHtcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKCdhLnZpZGVvTGluaycpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRcdHR5cGU6ICdpZnJhbWUnXHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdCQoJy50ZXh0UmV2aWV3Jykub24oJ2NsaWNrJywgJy50ZXh0UmV2aWV3X19tb3JlTGluaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRsZXRcclxuXHRcdFx0JGJsb2NrID0gJChlLmRlbGVnYXRlVGFyZ2V0KSxcclxuXHRcdFx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHR0bXAgPSAkdGhpcy5odG1sKCk7XHJcblx0XHQkdGhpcy5odG1sKCR0aGlzLmRhdGEoJ3RleHQnKSk7XHJcblx0XHQkdGhpcy5kYXRhKCd0ZXh0JywgdG1wKTtcclxuXHRcdCRibG9jay50b2dnbGVDbGFzcygnaXMtZXhwYW5kJyk7XHJcblx0fSlcclxuXHJcblx0aWYgKCQoJy5yYXRlaXQnKS5sZW5ndGgpIHtcclxuXHRcdHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJlcXVpcmUoJ3JhdGVpdCcpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdCQoJ1tkYXRhLWRyb3Bkb3duXScpLnd6bUNsYXNzVG9nZ2xlKHtcclxuXHRcdHRvZ2dsZVNlbGVjdG9yOiAnW2RhdGEtZHJvcGRvd24tdG9nZ2xlXScsXHJcblx0XHR0b2dnbGVPbkJsdXI6IHRydWVcclxuXHR9KTtcclxuXHJcblx0aWYgKCQoJyNzbGlkZXJfZWxzZScpLmxlbmd0aCkge1xyXG5cdFx0JCgnI3NsaWRlcl9lbHNlJykuY2Fyb3VGcmVkU2VsKHtcclxuXHRcdFx0cGxheTogdHJ1ZSxcclxuXHRcdFx0YXV0bzogdHJ1ZSxcclxuXHRcdFx0Y2lyY3VsYXI6IHRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogMzUwLFxyXG5cdFx0XHRpdGVtczoge1xyXG5cdFx0XHRcdHZpc2libGU6IHtcclxuXHRcdFx0XHRcdG1pbjogMSxcclxuXHRcdFx0XHRcdG1heDogNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpcGU6IHtcclxuXHRcdFx0XHRvblRvdWNoOiB0cnVlLFxyXG5cdFx0XHRcdG9uTW91c2U6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsOiB7XHJcblx0XHRcdFx0aXRlbXM6IDEsXHJcblx0XHRcdFx0Zng6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdGVhc2luZzogXCJzd2luZ1wiLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoJCgnI3NsaWRlcl9lbHNlX3VuaXZlcnNhbCcpLmxlbmd0aCkge1xyXG5cdFx0JCgnI3NsaWRlcl9lbHNlX3VuaXZlcnNhbCcpLmNhcm91RnJlZFNlbCh7XHJcblx0XHRcdHBsYXk6IHRydWUsXHJcblx0XHRcdGF1dG86IHRydWUsXHJcblx0XHRcdGNpcmN1bGFyOiB0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0XHRoZWlnaHQ6IDM1MCxcclxuXHRcdFx0aXRlbXM6IHtcclxuXHRcdFx0XHR2aXNpYmxlOiB7XHJcblx0XHRcdFx0XHRtaW46IDEsXHJcblx0XHRcdFx0XHRtYXg6IDRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHN3aXBlOiB7XHJcblx0XHRcdFx0b25Ub3VjaDogdHJ1ZSxcclxuXHRcdFx0XHRvbk1vdXNlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcm9sbDoge1xyXG5cdFx0XHRcdGl0ZW1zOiAxLFxyXG5cdFx0XHRcdGZ4OiAnc2Nyb2xsJyxcclxuXHRcdFx0XHRlYXNpbmc6IFwic3dpbmdcIixcclxuXHRcdFx0XHRkdXJhdGlvbjogMTAwMCxcclxuXHRcdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0JCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG5cdH0pO1xyXG5cclxuXHQkKCcuanMtc2hvdy1pbmZvcm1hdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCQoJy5qcy1oaWRkZW4taW5mb3JtYXRpb24nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgcGhvbmUgPSAkKGVsZW1lbnQpLmRhdGEoJ2luZm9ybWF0aW9uJyk7XHJcblx0XHRcdCQoZWxlbWVudCkudGV4dChwaG9uZSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0JCgnLm51bWJlcnNfb25seScpLkZvcmNlTnVtZXJpY09ubHkoKTtcclxuXHJcbn0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvaW5pdC5qc1xuICoqLyIsInVuZGVmaW5lZFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIFxuICoqLyIsIihmdW5jdGlvbih3aW5kb3csICQpIHtcclxuXHRyZXF1aXJlKCdqcXVlcnknKTtcclxuXHRyZXF1aXJlKCdqcXVlcnktdmFsaWRhdGUnKTtcclxuXHRyZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xyXG5cdC8qKlxyXG5cdCAqIEBuYW1lc3BhY2Ugd0hUTUxcclxuXHQgKi9cclxuXHJcblx0dmFyIF9zZWxmO1xyXG5cdHZhciB3SFRNTCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRfc2VsZiA9IHRoaXM7XHJcblx0fTtcclxuXHJcblx0Ly8gbWV0aG9kc1xyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblx0dmFyIF9zZW9UZXh0VGltZXIgPSBudWxsO1xyXG5cdHZhciBfc2VvVGV4dERlbGF5ID0gMTA7XHJcblx0dmFyICRzZW9UZXh0O1xyXG5cdHZhciAkc2VvSWZyYW1lO1xyXG5cdHZhciAkc2VvQ2xvbmU7XHJcblxyXG5cdC8qKlxyXG5cdCAqINCh0L7Qt9C00LDQtdC8IGlmcmFtZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHByaXZhdGVcclxuXHQgKiBAcGFyYW0gXHRcdHtFbGVtZW50fVx0XHQkc2VvVGV4dCAtINGN0LvQtdC80LXQvdGCINGB0LXQviDRgtC10LrRgdGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIF9zZW9CdWlsZCgkc2VvVGV4dCkge1xyXG5cdFx0dmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cdFx0aWZyYW1lLmlkID0gJ3Nlb0lmcmFtZSc7XHJcblx0XHRpZnJhbWUubmFtZSA9ICdzZW9JZnJhbWUnO1xyXG5cdFx0Ly8g0LLQutC40LTRi9Cy0LDQtdC8INCyINCx0LvQvtC6INCh0LXQviDRgtC10LrRgdGC0LBcclxuXHRcdCRzZW9UZXh0WzBdLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblx0XHQvLyDRgdGC0LDQstC40Lwg0L/RgNC+0YHQu9GD0YjQutGDINC90LAg0YDQtdGB0LDQudC3IGNvbnRlbnRXaW5kb3dcclxuXHRcdGlmcmFtZS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRfc2VsZi5zZW9UZXh0KCk7XHJcblx0XHR9KTtcclxuXHRcdF9zZWxmLnNlb1RleHQoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIGBhamF4YCDQvNC10YLQvtC00LAg0L/Qu9Cw0LPQuNC90LAgYG1hZ25pZmljLXBvcHVwYFxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAbWVtYmVyb2YgXHR3SFRNTFxyXG5cdCAqIEB0dXRvcmlhbCBcdHdvcmt3aXRoLW1hZ25pZmljLXBvcHVwXHJcblx0ICogQHNlZSBcdFx0e0BsaW5rIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNhamF4LXR5cGV9XHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuc2VvVGV4dCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICRzZW9UZXh0ID0gJHNlb1RleHQgfHwgJCgnI3Nlb1RleHQnKTtcclxuXHRcdGlmICgkc2VvVGV4dC5sZW5ndGgpIHtcclxuXHRcdFx0dmFyICRzZW9JZnJhbWUgPSAkc2VvSWZyYW1lIHx8ICRzZW9UZXh0LmNoaWxkcmVuKCcjc2VvSWZyYW1lJyk7XHJcblx0XHRcdGlmICgkc2VvSWZyYW1lLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dChfc2VvVGV4dFRpbWVyKTtcclxuXHRcdFx0XHRfc2VvVGV4dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciAkc2VvQ2xvbmUgPSAkc2VvQ2xvbmUgfHwgJCgnI3Nlb0Nsb25lJyk7XHJcblx0XHRcdFx0XHRpZiAoJHNlb0Nsb25lLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQkc2VvQ2xvbmUuaGVpZ2h0KCRzZW9UZXh0Lm91dGVySGVpZ2h0KHRydWUpKTtcclxuXHRcdFx0XHRcdFx0JHNlb1RleHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHR0b3A6ICRzZW9DbG9uZS5vZmZzZXQoKS50b3BcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdF9zZW9UZXh0RGVsYXkgPSA1MDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignI3Nlb0Nsb25lIC0g0L3QtSDQvdCw0LnQtNC10L0nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCBfc2VvVGV4dERlbGF5KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRfc2VvQnVpbGQoJHNlb1RleHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0JHQsNC30L7QstGL0LUg0L/QsNGA0LDQvNC10YLRgNGLINC00LvRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCBgd0hUTUwubWZwSW5saW5lYFxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR5cGVcdFx0e09iamVjdH1cclxuXHQgKi9cclxuXHR2YXIgX21mcElubGluZUJhc2VDb25maWcgPSB7XHJcblx0XHR0eXBlOiAnaW5saW5lJyxcclxuXHRcdGNsb3NlQnRuSW5zaWRlOiB0cnVlLFxyXG5cdFx0cmVtb3ZhbERlbGF5OiAzMDAsXHJcblx0XHRtYWluQ2xhc3M6ICd6b29tLWluJ1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPIGBpbmxpbmVgINC80LXRgtC+0LTQsCDQv9C70LDQs9C40L3QsCBgbWFnbmlmaWMtcG9wdXBgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtbWFnbmlmaWMtcG9wdXBcclxuXHQgKiBAc2VlXHRcdFx0e0BsaW5rIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL2RvY3VtZW50YXRpb24uaHRtbCNpbmxpbmUtdHlwZX1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbVx0XHR7c3RyaW5nfSBcdFtzZWxlY3Rvcj0nLmpzLW1mcC1pbmxpbmUnXSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQuSBjc3Mg0YHQtdC70LXQutGC0L7RgCDQtNC70Y8g0L/QvtC40YHQutCwINC4INC40L3QuNGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5tZnBJbmxpbmUgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnLmpzLW1mcC1pbmxpbmUnO1xyXG5cdFx0JChzZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0dmFyICRlbCA9ICQoZWwpO1xyXG5cdFx0XHR2YXIgY3VzdG9tQ29uZmlnID0gJGVsLmRhdGEoJ21mcEN1c3RvbUNvbmZpZycpIHx8IHt9O1xyXG5cdFx0XHR2YXIgY3VycmVudENvbmZpZyA9ICQuZXh0ZW5kKHRydWUsIF9tZnBJbmxpbmVCYXNlQ29uZmlnLCBjdXN0b21Db25maWcpO1xyXG5cdFx0XHQkZWwubWFnbmlmaWNQb3B1cChjdXJyZW50Q29uZmlnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0LvQsNCz0LjQvdCwIGBqcXVlcnktdmFsaWRhdGVgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEB0dXRvcmlhbCBcdHdvcmt3aXRoLWpxdWVyeS12YWxpZGF0ZVxyXG5cdCAqIEBmaXJlcyBcdFx0d0hUTUwjZm9ybU9uU3VibWl0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gXHRcdHtzdHJpbmd9IFx0XHRbc2VsZWN0b3I9Jy5qcy1mb3JtJ10g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LkgY3NzINGB0LXQu9C10LrRgtC+0YAg0LTQu9GPINC/0L7QuNGB0LrQsCDQuCDQuNC90LjRgtCwXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuZm9ybVZhbGlkYXRpb24gPSBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0c2VsZWN0b3IgPSBzZWxlY3RvciB8fCAnLmpzLWZvcm0nO1xyXG5cdFx0JChzZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWwpIHtcclxuXHRcdFx0dmFyICRmb3JtID0gJChlbCk7XHJcblx0XHRcdHZhciB2YWxpZGF0b3IgPSAkZm9ybS5kYXRhKCd2YWxpZGF0b3InKTtcclxuXHRcdFx0aWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG5cdFx0XHRcdGlmICgkZm9ybS5pcygnZm9ybScpKSB7XHJcblx0XHRcdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkZm9ybS52YWxpZGF0ZSh7XHJcblx0XHRcdFx0XHRzaG93RXJyb3JzOiBmdW5jdGlvbihlcnJvck1hcCwgZXJyb3JMaXN0KSB7XHJcblx0XHRcdFx0XHRcdGlmIChlcnJvckxpc3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGZpcnN0RXJyb3IgPSBlcnJvckxpc3Quc2hpZnQoKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3RXJyb3JMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0bmV3RXJyb3JMaXN0LnB1c2goZmlyc3RFcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvckxpc3QgPSBuZXdFcnJvckxpc3Q7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5kZWZhdWx0U2hvd0Vycm9ycygpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGludmFsaWRIYW5kbGVyOiBmdW5jdGlvbihmb3JtLCB2YWxpZGF0b3IpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbm9fdmFsaWQnKVxyXG5cdFx0XHRcdFx0XHRcdC5kYXRhKCd2YWxpZGF0b3InKS5mb2N1c0ludmFsaWQoKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcblx0XHRcdFx0XHRcdHZhciAkY3VycmVudEZvcm0gPSAkKGZvcm0pO1xyXG5cdFx0XHRcdFx0XHQkY3VycmVudEZvcm0ucmVtb3ZlQ2xhc3MoJ25vX3ZhbGlkJykuYWRkQ2xhc3MoJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZm9ybU9uU3VibWl0KCRjdXJyZW50Rm9ybSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmICgkZm9ybS5pcygnZGl2JykpIHtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2xpY2snLCAnLmpzLWZvcm0tc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0JGZvcm0uc3VibWl0KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2hhbmdlJywgJy5qcy1pbnB1dC1maWxlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0JGZvcm0uZm9ybUdldEZpbGVWYWx1ZXModGhpcyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHQkZm9ybS5vbignY2xpY2snLCAnLmpzLWZvcm0tcmVzZXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5mb3JtUmVzZXQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0KHQvtCx0YvRgtC40LUsINC/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiyDQuCDQvtGC0L/RgNCw0LLQutC4INC00LDQvdC90YvRhS5cclxuXHQgKlxyXG5cdCAqIEBzb3VyY2Vjb2RlXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtanF1ZXJ5LXZhbGlkYXRlXHJcblx0ICogQGV2ZW50IFx0XHR3SFRNTCNmb3JtQWZ0ZXJTdWJtaXRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e0VsZW1lbnR9IFx0XHQkZm9ybSAtINGC0LXQutGD0YnQsNGPINGE0L7RgNC80LAsIGBqUXVlcnkgZWxlbWVudGBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5mb3JtQWZ0ZXJTdWJtaXQgPSBmdW5jdGlvbigkZm9ybSkge1xyXG5cdFx0Y29uc29sZS53YXJuKCdIVE1MID0+INCk0L7RgNC80LAg0L7RgtC/0YDQsNCy0LvQtdC90LAnKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiDQodC+0LHRi9GC0LjQtSwg0L/RgNC4INGD0YHQv9C10YjQvdC+0Lkg0LLQsNC70LjQtNCw0YbQuNC4INGE0L7RgNC80YsuXHJcblx0ICog0JHRg9C00LXRgiDQt9Cw0LzQtdC90LXQvdC90L4g0L/RgNC4INC/0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNC4LlxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAdHV0b3JpYWwgXHR3b3Jrd2l0aC1qcXVlcnktdmFsaWRhdGVcclxuXHQgKiBAZmlyZXMgXHRcdHdIVE1MI2Zvcm1BZnRlclN1Ym1pdFxyXG5cdCAqIEBldmVudCBcdFx0d0hUTUwjZm9ybU9uU3VibWl0XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gXHRcdHtFbGVtZW50fSBcdFx0JGZvcm0gLSDRgtC10LrRg9GJ0LDRjyDRhNC+0YDQvNCwLCBgalF1ZXJ5IGVsZW1lbnRgXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUuZm9ybU9uU3VibWl0ID0gZnVuY3Rpb24oJGZvcm0pIHtcclxuXHRcdC8vINC+0YLQv9GA0LDQstC60LAg0L3QsCDRgdC10YDQstCw0LpcclxuXHRcdC8vIC4uLlxyXG5cdFx0Ly8g0LIg0L7RgtCy0LXRgtC1XHJcblx0XHRfc2VsZi5mb3JtQWZ0ZXJTdWJtaXQoJGZvcm0pO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gYGFqYXhgINC80LXRgtC+0LTQsCDQv9C70LDQs9C40L3QsCBgbWFnbmlmaWMtcG9wdXBgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtbWFnbmlmaWMtcG9wdXBcclxuXHQgKiBAc2VlIFx0XHR7QGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI2FqYXgtdHlwZX1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e3N0cmluZ30gXHRcdFtzZWxlY3Rvcj0nLmpzLW1mcC1hamF4J10g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LkgY3NzINGB0LXQu9C10LrRgtC+0YAg0LTQu9GPINC/0L7QuNGB0LrQsCDQuCDQuNC90LjRgtCwXHJcblx0ICogQHJldHVybiBcdFx0e3VuZGVmaW5lZH1cclxuXHQgKi9cclxuXHR3SFRNTC5wcm90b3R5cGUubWZwQWpheCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcuanMtbWZwLWFqYXgnO1xyXG5cdFx0JCgnYm9keScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHR0eXBlOiAnYWpheCcsXHJcblx0XHRcdGRlbGVnYXRlOiBzZWxlY3RvcixcclxuXHRcdFx0cmVtb3ZhbERlbGF5OiAzMDAsXHJcblx0XHRcdG1haW5DbGFzczogJ3pvb20taW4nLFxyXG5cdFx0XHRjYWxsYmFja3M6IHtcclxuXHRcdFx0XHRlbGVtZW50UGFyc2U6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0XHRcdHRoaXMuc3QuYWpheC5zZXR0aW5ncyA9IHtcclxuXHRcdFx0XHRcdFx0dXJsOiBpdGVtLmVsLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IGl0ZW0uZWwuZGF0YSgncGFyYW0nKSB8fCB7fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGFqYXhDb250ZW50QWRkZWQ6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdFx0XHRfc2VsZi5mb3JtVmFsaWRhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdHZhciBjb25uZWN0U2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1jb25uZWN0Jyk7XHJcblxyXG5cdFx0XHRcdFx0bm9VaVNsaWRlci5jcmVhdGUoY29ubmVjdFNsaWRlciwge1xyXG5cdFx0XHRcdFx0XHRzdGFydDogNDAsXHJcblx0XHRcdFx0XHRcdGNvbm5lY3Q6ICdsb3dlcicsXHJcblx0XHRcdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHRcdFx0J21pbic6IDAsXHJcblx0XHRcdFx0XHRcdFx0J21heCc6IDEwMFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRjb25uZWN0U2xpZGVyLm5vVWlTbGlkZXIub24oJ3NldCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdCQoJy5yYW5nZS1zbGlkZXInKS5hZGRDbGFzcygndmFsaWQnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cdHdpbmRvdy53SFRNTCA9IG5ldyB3SFRNTCgpO1xyXG59KSh3aW5kb3csIGpRdWVyeSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL21vZHVsZXMvd0hUTUwuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwialF1ZXJ5XCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIoZnVuY3Rpb24oZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFtcIi4vanF1ZXJ5XCJdLCBmYWN0b3J5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xyXG5cdH1cclxufShmdW5jdGlvbigkKSB7XHJcblxyXG4vKlxyXG5cdNCx0YvRgdGC0YDRi9C5INC/0L7QuNGB0Log0L/QviDQstGL0LTQtdC70LXQvdC40Y5cclxuXHRXZXpvbUZpeCAtINGE0LjQutGB0Ysg0YHQutGA0LjQv9GC0LBcclxuXHRXZXpvbVJ1bGVzIC0g0L/RgNCw0LLQuNC70LAg0LLQsNC70LjQtNCw0YbQuNC4XHJcbiovXHJcblxyXG5mdW5jdGlvbiBfZ2V0VHlwZU5hbWUodHlwZSkge1xyXG5cdHZhciB0eXBlX25hbWU7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdzZWxlY3Qtb25lJzpcclxuXHRcdGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XHJcblx0XHRcdHR5cGVfbmFtZSA9ICdfc2VsZWN0JztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0Y2FzZSAnY2hlY2tib3gnOlxyXG5cdFx0XHR0eXBlX25hbWUgPSAnX2NoZWNrZXInO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0eXBlX25hbWUgPSAnJztcclxuXHR9XHJcblx0cmV0dXJuIHR5cGVfbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX2dldE1ldGhvZE1zZ05hbWUoZWxlbWVudCwgbWV0aG9kKSB7XHJcblx0dmFyIG1ldGhvZF9uYW1lO1xyXG5cdHN3aXRjaCAobWV0aG9kKSB7XHJcblx0XHRjYXNlICdyZXF1aXJlZCc6XHJcblx0XHRjYXNlICdtYXhsZW5ndGgnOlxyXG5cdFx0Y2FzZSAnbWlubGVuZ3RoJzpcclxuXHRcdGNhc2UgJ3JhbmdlbGVuZ3RoJzpcclxuXHRcdFx0bWV0aG9kX25hbWUgPSBtZXRob2QgKyBfZ2V0VHlwZU5hbWUoZWxlbWVudC50eXBlKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0bWV0aG9kX25hbWUgPSBtZXRob2Q7XHJcblx0fVxyXG5cdHJldHVybiBtZXRob2RfbmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Jlc2V0SW5wdXRzKHNldHQsIGVscywgdGhzKSB7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciB0ID0gZWxzW2ldO1xyXG5cdFx0dmFyIGp0ID0gJCh0KTtcclxuXHRcdHN3aXRjaCAodC50eXBlKSB7XHJcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XHJcblx0XHRcdGNhc2UgJ3Jlc2V0JzpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0XHRjYXNlICdjaGVja2JveCc6XHJcblx0XHRcdFx0dC5jaGVja2VkID0gdC5kZWZhdWx0Q2hlY2tlZDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZmlsZSc6XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gJCh0KS5zaWJsaW5ncygnLmpzLWlucHV0LWZpbGUnKTtcclxuXHRcdFx0XHR0Lm91dGVySFRNTCA9IHQub3V0ZXJIVE1MO1xyXG5cdFx0XHRcdHRocy5mb3JtR2V0RmlsZVZhbHVlcyh0LCBsYWJlbCk7XHJcblx0XHRcdFx0anQgPSB0aHMuZmluZCgnIycgKyB0LmlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0LnZhbHVlID0gdC5kZWZhdWx0VmFsdWU7XHJcblx0XHR9XHJcblx0XHRqdC5yZW1vdmVDbGFzcyhzZXR0LmVycm9yQ2xhc3MpLnRyaWdnZXIoJ2NoYW5nZScpLnNpYmxpbmdzKHNldHQuZXJyb3JFbGVtZW50ICsgJy4nICsgc2V0dC5lcnJvckNsYXNzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gX3Jlc2V0U2VsZWN0cyhzZXR0LCBlbHMpIHtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0W10uZm9yRWFjaC5jYWxsKGVsc1tpXS5vcHRpb25zLCBmdW5jdGlvbihlbCkge1xyXG5cdFx0XHRlbC5zZWxlY3RlZCA9IGVsLmRlZmF1bHRTZWxlY3RlZDtcclxuXHRcdH0pO1xyXG5cdFx0JChlbHNbaV0pLnJlbW92ZUNsYXNzKHNldHQuZXJyb3JDbGFzcykudHJpZ2dlcignY2hhbmdlJykuc2libGluZ3Moc2V0dC5lcnJvckVsZW1lbnQgKyAnLicgKyBzZXR0LmVycm9yQ2xhc3MpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0fVxyXG59XHJcblxyXG4kLmV4dGVuZCgkLmZuLCB7XHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3ZhbGlkYXRlL1xyXG5cdHZhbGlkYXRlOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG5cdFx0Ly8gaWYgbm90aGluZyBpcyBzZWxlY3RlZCwgcmV0dXJuIG5vdGhpbmc7IGNhbid0IGNoYWluIGFueXdheVxyXG5cdFx0aWYgKCF0aGlzLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdFx0Y29uc29sZS53YXJuKFwiTm90aGluZyBzZWxlY3RlZCwgY2FuJ3QgdmFsaWRhdGUsIHJldHVybmluZyBub3RoaW5nLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2hlY2sgaWYgYSB2YWxpZGF0b3IgZm9yIHRoaXMgZm9ybSB3YXMgYWxyZWFkeSBjcmVhdGVkXHJcblx0XHR2YXIgdmFsaWRhdG9yID0gJC5kYXRhKHRoaXNbMF0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0aWYgKHZhbGlkYXRvcikge1xyXG5cdFx0XHRyZXR1cm4gdmFsaWRhdG9yO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEFkZCBub3ZhbGlkYXRlIHRhZyBpZiBIVE1MNS5cclxuXHRcdHRoaXMuYXR0cihcIm5vdmFsaWRhdGVcIiwgXCJub3ZhbGlkYXRlXCIpO1xyXG5cclxuXHRcdHZhbGlkYXRvciA9IG5ldyAkLnZhbGlkYXRvcihvcHRpb25zLCB0aGlzWzBdKTtcclxuXHRcdCQuZGF0YSh0aGlzWzBdLCBcInZhbGlkYXRvclwiLCB2YWxpZGF0b3IpO1xyXG5cclxuXHRcdGlmICh2YWxpZGF0b3Iuc2V0dGluZ3Mub25zdWJtaXQpIHtcclxuXHJcblx0XHRcdHRoaXMub24oXCJjbGljay52YWxpZGF0ZVwiLCBcIjpzdWJtaXRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIpIHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvci5zdWJtaXRCdXR0b24gPSBldmVudC50YXJnZXQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhbGxvdyBzdXBwcmVzc2luZyB2YWxpZGF0aW9uIGJ5IGFkZGluZyBhIGNhbmNlbCBjbGFzcyB0byB0aGUgc3VibWl0IGJ1dHRvblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiY2FuY2VsXCIpKSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFsbG93IHN1cHByZXNzaW5nIHZhbGlkYXRpb24gYnkgYWRkaW5nIHRoZSBodG1sNSBmb3Jtbm92YWxpZGF0ZSBhdHRyaWJ1dGUgdG8gdGhlIHN1Ym1pdCBidXR0b25cclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5hdHRyKFwiZm9ybW5vdmFsaWRhdGVcIikgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHZhbGlkYXRlIHRoZSBmb3JtIG9uIHN1Ym1pdFxyXG5cdFx0XHR0aGlzLm9uKFwic3VibWl0LnZhbGlkYXRlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Ly8gcHJldmVudCBmb3JtIHN1Ym1pdCB0byBiZSBhYmxlIHRvIHNlZSBjb25zb2xlIG91dHB1dFxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZnVuY3Rpb24gaGFuZGxlKCkge1xyXG5cdFx0XHRcdFx0dmFyIGhpZGRlbiwgcmVzdWx0O1xyXG5cdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyKSB7XHJcblx0XHRcdFx0XHRcdGlmICh2YWxpZGF0b3Iuc3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gaW5zZXJ0IGEgaGlkZGVuIGlucHV0IGFzIGEgcmVwbGFjZW1lbnQgZm9yIHRoZSBtaXNzaW5nIHN1Ym1pdCBidXR0b25cclxuXHRcdFx0XHRcdFx0XHRoaWRkZW4gPSAkKFwiPGlucHV0IHR5cGU9J2hpZGRlbicvPlwiKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoXCJuYW1lXCIsIHZhbGlkYXRvci5zdWJtaXRCdXR0b24ubmFtZSlcclxuXHRcdFx0XHRcdFx0XHRcdC52YWwoJCh2YWxpZGF0b3Iuc3VibWl0QnV0dG9uKS52YWwoKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyh2YWxpZGF0b3IuY3VycmVudEZvcm0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHZhbGlkYXRvci5zZXR0aW5ncy5zdWJtaXRIYW5kbGVyLmNhbGwodmFsaWRhdG9yLCB2YWxpZGF0b3IuY3VycmVudEZvcm0sIGV2ZW50KTtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5zdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBhbmQgY2xlYW4gdXAgYWZ0ZXJ3YXJkczsgdGhhbmtzIHRvIG5vLWJsb2NrLXNjb3BlLCBoaWRkZW4gY2FuIGJlIHJlZmVyZW5jZWRcclxuXHRcdFx0XHRcdFx0XHRoaWRkZW4ucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHByZXZlbnQgc3VibWl0IGZvciBpbnZhbGlkIGZvcm1zIG9yIGN1c3RvbSBzdWJtaXQgaGFuZGxlcnNcclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCkge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLmZvcm0oKSkge1xyXG5cdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5wZW5kaW5nUmVxdWVzdCkge1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBoYW5kbGUoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLmZvY3VzSW52YWxpZCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHZhbGlkYXRvcjtcclxuXHR9LFxyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy92YWxpZC9cclxuXHR2YWxpZDogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdmFsaWQsIHZhbGlkYXRvciwgZXJyb3JMaXN0O1xyXG5cclxuXHRcdGlmICgkKHRoaXNbMF0pLmlzKFwiZm9ybVwiKSkge1xyXG5cdFx0XHR2YWxpZCA9IHRoaXMudmFsaWRhdGUoKS5mb3JtKCk7XHJcblx0XHR9IGVsc2UgaWYgKCQodGhpc1swXSkuaXMoXCJkaXZcIikpIHsgLy8gV2V6b21GaXhcclxuXHRcdFx0dmFsaWQgPSB0aGlzLnZhbGlkYXRlKCkuZm9ybSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdHZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0dmFsaWRhdG9yID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtZm9ybScpLnZhbGlkYXRlKCk7Ly8gV2V6b21GaXhcclxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhbGlkID0gdmFsaWRhdG9yLmVsZW1lbnQodGhpcykgJiYgdmFsaWQ7XHJcblx0XHRcdFx0ZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmNvbmNhdCh2YWxpZGF0b3IuZXJyb3JMaXN0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHZhbGlkYXRvci5lcnJvckxpc3QgPSBlcnJvckxpc3Q7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsaWQ7XHJcblx0fSxcclxuXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3J1bGVzL1xyXG5cdHJ1bGVzOiBmdW5jdGlvbihjb21tYW5kLCBhcmd1bWVudCkge1xyXG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzWzBdLFxyXG5cdFx0XHRzZXR0aW5ncywgc3RhdGljUnVsZXMsIGV4aXN0aW5nUnVsZXMsIGRhdGEsIHBhcmFtLCBmaWx0ZXJlZDtcclxuXHJcblx0XHRpZiAoY29tbWFuZCkge1xyXG5cdFx0XHRzZXR0aW5ncyA9ICQuZGF0YShlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIpLnNldHRpbmdzO1xyXG5cdFx0XHRzdGF0aWNSdWxlcyA9IHNldHRpbmdzLnJ1bGVzO1xyXG5cdFx0XHRleGlzdGluZ1J1bGVzID0gJC52YWxpZGF0b3Iuc3RhdGljUnVsZXMoZWxlbWVudCk7XHJcblx0XHRcdHN3aXRjaCAoY29tbWFuZCkge1xyXG5cdFx0XHRjYXNlIFwiYWRkXCI6XHJcblx0XHRcdFx0JC5leHRlbmQoZXhpc3RpbmdSdWxlcywgJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZShhcmd1bWVudCkpO1xyXG5cdFx0XHRcdC8vIHJlbW92ZSBtZXNzYWdlcyBmcm9tIHJ1bGVzLCBidXQgYWxsb3cgdGhlbSB0byBiZSBzZXQgc2VwYXJhdGVseVxyXG5cdFx0XHRcdGRlbGV0ZSBleGlzdGluZ1J1bGVzLm1lc3NhZ2VzO1xyXG5cdFx0XHRcdHN0YXRpY1J1bGVzW2VsZW1lbnQubmFtZV0gPSBleGlzdGluZ1J1bGVzO1xyXG5cdFx0XHRcdGlmIChhcmd1bWVudC5tZXNzYWdlcykge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXSA9ICQuZXh0ZW5kKHNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0sIGFyZ3VtZW50Lm1lc3NhZ2VzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJyZW1vdmVcIjpcclxuXHRcdFx0XHRpZiAoIWFyZ3VtZW50KSB7XHJcblx0XHRcdFx0XHRkZWxldGUgc3RhdGljUnVsZXNbZWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHRcdHJldHVybiBleGlzdGluZ1J1bGVzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmaWx0ZXJlZCA9IHt9O1xyXG5cdFx0XHRcdCQuZWFjaChhcmd1bWVudC5zcGxpdCgvXFxzLyksIGZ1bmN0aW9uKGluZGV4LCBtZXRob2QpIHtcclxuXHRcdFx0XHRcdGZpbHRlcmVkW21ldGhvZF0gPSBleGlzdGluZ1J1bGVzW21ldGhvZF07XHJcblx0XHRcdFx0XHRkZWxldGUgZXhpc3RpbmdSdWxlc1ttZXRob2RdO1xyXG5cdFx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gXCJyZXF1aXJlZFwiKSB7XHJcblx0XHRcdFx0XHRcdCQoZWxlbWVudCkucmVtb3ZlQXR0cihcImFyaWEtcmVxdWlyZWRcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIGZpbHRlcmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZGF0YSA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGVzKFxyXG5cdFx0JC5leHRlbmQoXHJcblx0XHRcdHt9LFxyXG5cdFx0XHQkLnZhbGlkYXRvci5jbGFzc1J1bGVzKGVsZW1lbnQpLFxyXG5cdFx0XHQkLnZhbGlkYXRvci5hdHRyaWJ1dGVSdWxlcyhlbGVtZW50KSxcclxuXHRcdFx0JC52YWxpZGF0b3IuZGF0YVJ1bGVzKGVsZW1lbnQpLFxyXG5cdFx0XHQkLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhlbGVtZW50KVxyXG5cdFx0KSwgZWxlbWVudCk7XHJcblxyXG5cdFx0Ly8gbWFrZSBzdXJlIHJlcXVpcmVkIGlzIGF0IGZyb250XHJcblx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xyXG5cdFx0XHRwYXJhbSA9IGRhdGEucmVxdWlyZWQ7XHJcblx0XHRcdGRlbGV0ZSBkYXRhLnJlcXVpcmVkO1xyXG5cdFx0XHRkYXRhID0gJC5leHRlbmQoeyByZXF1aXJlZDogcGFyYW0gfSwgZGF0YSk7XHJcblx0XHRcdCQoZWxlbWVudCkuYXR0cihcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1ha2Ugc3VyZSByZW1vdGUgaXMgYXQgYmFja1xyXG5cdFx0aWYgKGRhdGEucmVtb3RlKSB7XHJcblx0XHRcdHBhcmFtID0gZGF0YS5yZW1vdGU7XHJcblx0XHRcdGRlbGV0ZSBkYXRhLnJlbW90ZTtcclxuXHRcdFx0ZGF0YSA9ICQuZXh0ZW5kKGRhdGEsIHsgcmVtb3RlOiBwYXJhbSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9LFxyXG5cdC8vIFdlem9tRml4XHJcblx0Zm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0aHMgPSAkKHRoaXNbMF0pO1xyXG5cdFx0dmFyIHNldHQgPSB0aHMudmFsaWRhdGUoKS5zZXR0aW5ncztcclxuXHRcdHRocy5yZW1vdmVDbGFzcygnc3VjY2VzcycpO1xyXG5cdFx0dGhzLnJlbW92ZUNsYXNzKCdub192YWxpZCcpO1xyXG5cdFx0X3Jlc2V0SW5wdXRzKHNldHQsIHRocy5maW5kKCdpbnB1dCcpLCB0aHMpO1xyXG5cdFx0X3Jlc2V0SW5wdXRzKHNldHQsIHRocy5maW5kKCd0ZXh0YXJlYScpLCB0aHMpO1xyXG5cdFx0X3Jlc2V0U2VsZWN0cyhzZXR0LCB0aHMuZmluZCgnc2VsZWN0JyksIHRocyk7XHJcblx0fSxcclxuXHQvLyBXZXpvbUZpeFxyXG5cdGZvcm1HZXRGaWxlVmFsdWVzOiBmdW5jdGlvbihpbnB1dCwgaXNMYWJlbCkge1xyXG5cdFx0dmFyIG11bHRpcGxlID0gaW5wdXQubXVsdGlwbGU7XHJcblx0XHR2YXIgZmlsZXMgPSBpbnB1dC5maWxlcztcclxuXHRcdHZhciBmaWxlc0xlbmd0aCA9IGZpbGVzLmxlbmd0aDtcclxuXHRcdHZhciB0aHMgPSAkKGlucHV0KTtcclxuXHRcdHZhciBsYWJlbCA9IGlzTGFiZWwgfHwgdGhzLnBhcmVudCgpLmZpbmQoJy5qcy1pbnB1dC1maWxlJyk7XHJcblx0XHR2YXIgbm9TZWxlY3RlZCA9ICfQndC40YfQtdCz0L4g0L3QtSDQstGL0LHRgNCw0L3Qvic7XHJcblx0XHR2YXIgaXNTZWxlY3RlZCA9IChtdWx0aXBsZSkgPyAn0JLRi9Cx0YDQsNC90L4g0YTQsNC50LvQvtCyIC0gJWNvdW50OiA8aW5zPiglZmlsZXMpPC9pbnM+JyA6ICfQktGL0LHRgNCw0L3QvjogPGlucz4lZmlsZXM8L2lucz4nO1xyXG5cdFx0aWYgKHR5cGVvZiBsYWJlbC5kYXRhKCdsYWJlbC10ZXh0JykgPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0bm9TZWxlY3RlZCA9IGxhYmVsLmRhdGEoJ2xhYmVsLXRleHQnKVswXTtcclxuXHRcdFx0aXNTZWxlY3RlZCA9IGxhYmVsLmRhdGEoJ2xhYmVsLXRleHQnKVsxXTtcclxuXHRcdH1cclxuXHRcdHZhciByZXN1bHQgPSBub1NlbGVjdGVkO1xyXG5cdFx0aWYgKGZpbGVzTGVuZ3RoKSB7XHJcblx0XHRcdHZhciBmaWxlTmFtZXM7XHJcblx0XHRcdHJlc3VsdCA9IGlzU2VsZWN0ZWQ7XHJcblx0XHRcdGlmIChtdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBmaWxlQXJyID0gW107XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlc0xlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRmaWxlQXJyLnB1c2goZmlsZXNbaV0ubmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC8lY291bnQvZywgZmlsZXNMZW5ndGgpO1xyXG5cdFx0XHRcdGZpbGVOYW1lcyA9IGZpbGVBcnIuam9pbignLCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZpbGVOYW1lcyA9IGZpbGVzWzBdLm5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLyVmaWxlcy9nLCBmaWxlTmFtZXMpO1xyXG5cdFx0fVxyXG5cdFx0dGhzLmJsdXIoKTtcclxuXHRcdGxhYmVsLmh0bWwoJzxzcGFuPicrcmVzdWx0Kyc8L3NwYW4+Jyk7XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIEN1c3RvbSBzZWxlY3RvcnNcclxuJC5leHRlbmQoJC5leHByW1wiOlwiXSwge1xyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9ibGFuay1zZWxlY3Rvci9cclxuXHRibGFuazogZnVuY3Rpb24oYSkge1xyXG5cdFx0cmV0dXJuICEkLnRyaW0oXCJcIiArICQoYSkudmFsKCkpO1xyXG5cdH0sXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2ZpbGxlZC1zZWxlY3Rvci9cclxuXHRmaWxsZWQ6IGZ1bmN0aW9uKGEpIHtcclxuXHRcdHJldHVybiAhISQudHJpbShcIlwiICsgJChhKS52YWwoKSk7XHJcblx0fSxcclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdW5jaGVja2VkLXNlbGVjdG9yL1xyXG5cdHVuY2hlY2tlZDogZnVuY3Rpb24oYSkge1xyXG5cdFx0cmV0dXJuICEkKGEpLnByb3AoXCJjaGVja2VkXCIpO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLyBjb25zdHJ1Y3RvciBmb3IgdmFsaWRhdG9yXHJcbiQudmFsaWRhdG9yID0gZnVuY3Rpb24ob3B0aW9ucywgZm9ybSkge1xyXG5cdHRoaXMuc2V0dGluZ3MgPSAkLmV4dGVuZCh0cnVlLCB7fSwgJC52YWxpZGF0b3IuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cdHRoaXMuY3VycmVudEZvcm0gPSBmb3JtO1xyXG5cdHRoaXMuaW5pdCgpO1xyXG59O1xyXG5cclxuLy8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuZm9ybWF0L1xyXG4kLnZhbGlkYXRvci5mb3JtYXQgPSBmdW5jdGlvbihzb3VyY2UsIHBhcmFtcykge1xyXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBhcmdzID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKTtcclxuXHRcdFx0YXJncy51bnNoaWZ0KHNvdXJjZSk7XHJcblx0XHRcdHJldHVybiAkLnZhbGlkYXRvci5mb3JtYXQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgcGFyYW1zLmNvbnN0cnVjdG9yICE9PSBBcnJheSApIHtcclxuXHRcdHBhcmFtcyA9ICQubWFrZUFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSk7XHJcblx0fVxyXG5cdGlmIChwYXJhbXMuY29uc3RydWN0b3IgIT09IEFycmF5KSB7XHJcblx0XHRwYXJhbXMgPSBbcGFyYW1zXTtcclxuXHR9XHJcblx0JC5lYWNoKHBhcmFtcywgZnVuY3Rpb24oaSwgbikge1xyXG5cdFx0c291cmNlID0gc291cmNlLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFx7XCIgKyBpICsgXCJcXFxcfVwiLCBcImdcIiksIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gbjtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdHJldHVybiBzb3VyY2U7XHJcbn07XHJcblxyXG4kLmV4dGVuZCgkLnZhbGlkYXRvciwge1xyXG5cclxuXHRkZWZhdWx0czoge1xyXG5cdFx0bWVzc2FnZXM6IHt9LFxyXG5cdFx0Z3JvdXBzOiB7fSxcclxuXHRcdHJ1bGVzOiB7fSxcclxuXHRcdGVycm9yQ2xhc3M6IFwiZXJyb3JcIixcclxuXHRcdHZhbGlkQ2xhc3M6IFwidmFsaWRcIixcclxuXHRcdGVycm9yRWxlbWVudDogXCJsYWJlbFwiLFxyXG5cdFx0Zm9jdXNDbGVhbnVwOiBmYWxzZSxcclxuXHRcdGZvY3VzSW52YWxpZDogdHJ1ZSxcclxuXHRcdGVycm9yQ29udGFpbmVyOiAkKFtdKSxcclxuXHRcdGVycm9yTGFiZWxDb250YWluZXI6ICQoW10pLFxyXG5cdFx0b25zdWJtaXQ6IHRydWUsXHJcblx0XHRpZ25vcmU6IFwiOmhpZGRlblwiLFxyXG5cdFx0aWdub3JlVGl0bGU6IGZhbHNlLFxyXG5cdFx0b25mb2N1c2luOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHRoaXMubGFzdEFjdGl2ZSA9IGVsZW1lbnQ7XHJcblxyXG5cdFx0XHQvLyBIaWRlIGVycm9yIGxhYmVsIGFuZCByZW1vdmUgZXJyb3IgY2xhc3Mgb24gZm9jdXMgaWYgZW5hYmxlZFxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5mb2N1c0NsZWFudXApIHtcclxuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnQsIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5oaWRlVGhlc2UodGhpcy5lcnJvcnNGb3IoZWxlbWVudCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25mb2N1c291dDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuY2hlY2thYmxlKGVsZW1lbnQpICYmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgIXRoaXMub3B0aW9uYWwoZWxlbWVudCkpKSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25rZXl1cDogZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQpIHtcclxuXHRcdFx0Ly8gQXZvaWQgcmV2YWxpZGF0ZSB0aGUgZmllbGQgd2hlbiBwcmVzc2luZyBvbmUgb2YgdGhlIGZvbGxvd2luZyBrZXlzXHJcblx0XHRcdC8vIFNoaWZ0XHQgICA9PiAxNlxyXG5cdFx0XHQvLyBDdHJsXHRcdD0+IDE3XHJcblx0XHRcdC8vIEFsdFx0XHQgPT4gMThcclxuXHRcdFx0Ly8gQ2FwcyBsb2NrICAgPT4gMjBcclxuXHRcdFx0Ly8gRW5kXHRcdCA9PiAzNVxyXG5cdFx0XHQvLyBIb21lXHRcdD0+IDM2XHJcblx0XHRcdC8vIExlZnQgYXJyb3cgID0+IDM3XHJcblx0XHRcdC8vIFVwIGFycm93XHQ9PiAzOFxyXG5cdFx0XHQvLyBSaWdodCBhcnJvdyA9PiAzOVxyXG5cdFx0XHQvLyBEb3duIGFycm93ICA9PiA0MFxyXG5cdFx0XHQvLyBJbnNlcnRcdCAgPT4gNDVcclxuXHRcdFx0Ly8gTnVtIGxvY2tcdD0+IDE0NFxyXG5cdFx0XHQvLyBBbHRHciBrZXkgICA9PiAyMjVcclxuXHRcdFx0dmFyIGV4Y2x1ZGVkS2V5cyA9IFtcclxuXHRcdFx0XHQxNiwgMTcsIDE4LCAyMCwgMzUsIDM2LCAzNyxcclxuXHRcdFx0XHQzOCwgMzksIDQwLCA0NSwgMTQ0LCAyMjVcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdGlmIChldmVudC53aGljaCA9PT0gOSAmJiB0aGlzLmVsZW1lbnRWYWx1ZShlbGVtZW50KSA9PT0gXCJcIiB8fCAkLmluQXJyYXkoZXZlbnQua2V5Q29kZSwgZXhjbHVkZWRLZXlzKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQud2hpY2ggPT09IDEzICYmIGVsZW1lbnQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMuY3VycmVudEZvcm0pLmRhdGEoJ3ZhbGlkYXRvcicpLmNoZWNrRm9ybSgpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgdGhpcy5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudChlbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uY2xpY2s6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0Ly8gY2xpY2sgb24gc2VsZWN0cywgcmFkaW9idXR0b25zIGFuZCBjaGVja2JveGVzXHJcblx0XHRcdGlmIChlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudCk7XHJcblxyXG5cdFx0XHQvLyBvciBvcHRpb24gZWxlbWVudHMsIGNoZWNrIHBhcmVudCBzZWxlY3QgaW4gdGhhdCBjYXNlXHJcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnROb2RlLm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQpIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xyXG5cdFx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcInJhZGlvXCIpIHtcclxuXHRcdFx0XHR0aGlzLmZpbmRCeU5hbWUoZWxlbWVudC5uYW1lKS5hZGRDbGFzcyhlcnJvckNsYXNzKS5yZW1vdmVDbGFzcyh2YWxpZENsYXNzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKGVsZW1lbnQpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MsIHZhbGlkQ2xhc3MpIHtcclxuXHRcdFx0aWYgKGVsZW1lbnQudHlwZSA9PT0gXCJyYWRpb1wiKSB7XHJcblx0XHRcdFx0dGhpcy5maW5kQnlOYW1lKGVsZW1lbnQubmFtZSkucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcykuYWRkQ2xhc3ModmFsaWRDbGFzcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChlbGVtZW50KS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKS5hZGRDbGFzcyh2YWxpZENsYXNzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9qUXVlcnkudmFsaWRhdG9yLnNldERlZmF1bHRzL1xyXG5cdHNldERlZmF1bHRzOiBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cdFx0JC5leHRlbmQoJC52YWxpZGF0b3IuZGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHR9LFxyXG5cclxuXHRtZXNzYWdlczoge1xyXG5cdFx0cmVxdWlyZWQ6IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC5cIixcclxuXHRcdHJlbW90ZTogXCJQbGVhc2UgZml4IHRoaXMgZmllbGQuXCIsXHJcblx0XHRlbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiLFxyXG5cdFx0dXJsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIFVSTC5cIixcclxuXHRcdGRhdGU6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIixcclxuXHRcdGRhdGVJU086IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS5cIixcclxuXHRcdG51bWJlcjogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBudW1iZXIuXCIsXHJcblx0XHRkaWdpdHM6IFwiUGxlYXNlIGVudGVyIG9ubHkgZGlnaXRzLlwiLFxyXG5cdFx0Y3JlZGl0Y2FyZDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBjcmVkaXQgY2FyZCBudW1iZXIuXCIsXHJcblx0XHRlcXVhbFRvOiBcIlBsZWFzZSBlbnRlciB0aGUgc2FtZSB2YWx1ZSBhZ2Fpbi5cIixcclxuXHRcdG1heGxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiksXHJcblx0XHRtaW5sZW5ndGg6ICQudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIiksXHJcblx0XHRyYW5nZWxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIpLFxyXG5cdFx0cmFuZ2U6ICQudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIpLFxyXG5cdFx0bWF4OiAkLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKSxcclxuXHRcdG1pbjogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIilcclxuXHR9LFxyXG5cclxuXHRhdXRvQ3JlYXRlUmFuZ2VzOiBmYWxzZSxcclxuXHJcblx0cHJvdG90eXBlOiB7XHJcblxyXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMubGFiZWxDb250YWluZXIgPSAkKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lcik7XHJcblx0XHRcdHRoaXMuZXJyb3JDb250ZXh0ID0gdGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGggJiYgdGhpcy5sYWJlbENvbnRhaW5lciB8fCAkKHRoaXMuY3VycmVudEZvcm0pO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lcnMgPSAkKHRoaXMuc2V0dGluZ3MuZXJyb3JDb250YWluZXIpLmFkZCh0aGlzLnNldHRpbmdzLmVycm9yTGFiZWxDb250YWluZXIpO1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZCA9IHt9O1xyXG5cdFx0XHR0aGlzLnZhbHVlQ2FjaGUgPSB7fTtcclxuXHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdCA9IDA7XHJcblx0XHRcdHRoaXMucGVuZGluZyA9IHt9O1xyXG5cdFx0XHR0aGlzLmludmFsaWQgPSB7fTtcclxuXHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cclxuXHRcdFx0dmFyIGdyb3VwcyA9ICh0aGlzLmdyb3VwcyA9IHt9KSxcclxuXHRcdFx0XHRydWxlcztcclxuXHRcdFx0JC5lYWNoKHRoaXMuc2V0dGluZ3MuZ3JvdXBzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zcGxpdCgvXFxzLyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQuZWFjaCh2YWx1ZSwgZnVuY3Rpb24oaW5kZXgsIG5hbWUpIHtcclxuXHRcdFx0XHRcdGdyb3Vwc1tuYW1lXSA9IGtleTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJ1bGVzID0gdGhpcy5zZXR0aW5ncy5ydWxlcztcclxuXHRcdFx0JC5lYWNoKHJ1bGVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0cnVsZXNba2V5XSA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUodmFsdWUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZ1bmN0aW9uIGRlbGVnYXRlKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gV2V6b21GaXhcclxuXHRcdFx0XHR2YXIgdmFsaWRhdG9yLCBmb3JtLCBldmVudFR5cGU7XHJcblx0XHRcdFx0Zm9ybSA9IHRoaXMuZm9ybTtcclxuXHJcblx0XHRcdFx0aWYgKCFmb3JtKSB7XHJcblx0XHRcdFx0XHRmb3JtID0gJCh0aGlzKS5jbG9zZXN0KFwiZGl2W2RhdGEtZm9ybT0ndHJ1ZSddXCIpLmdldCgwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFsaWRhdG9yID0gJC5kYXRhKGZvcm0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0XHRcdGV2ZW50VHlwZSA9IFwib25cIiArIGV2ZW50LnR5cGUucmVwbGFjZSgvXnZhbGlkYXRlLywgXCJcIik7XHJcblx0XHRcdFx0Lyp0aGlzLnNldHRpbmdzID0gdmFsaWRhdG9yLnNldHRpbmdzO1xyXG5cdFx0XHRcdGlmICh0aGlzLnNldHRpbmdzW2V2ZW50VHlwZV0gJiYgIXRoaXMuaXModGhpcy5zZXR0aW5ncy5pZ25vcmUpKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzW2V2ZW50VHlwZV0uY2FsbCh2YWxpZGF0b3IsIHRoaXNbMF0sIGV2ZW50KTtcclxuXHRcdFx0XHR9Ki9cclxuXHRcdFx0XHR2YXIgc2V0dGluZ3MgPSB2YWxpZGF0b3Iuc2V0dGluZ3M7XHJcblx0XHRcdFx0aWYgKHNldHRpbmdzW2V2ZW50VHlwZV0gJiYgISQodGhpcykuaXMoc2V0dGluZ3MuaWdub3JlKSkge1xyXG5cdFx0XHRcdFx0c2V0dGluZ3NbZXZlbnRUeXBlXS5jYWxsKHZhbGlkYXRvciwgdGhpcywgZXZlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdC5vbihcImZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGVcIixcclxuXHRcdFx0XHRcdFwiOnRleHQsIFt0eXBlPSdwYXNzd29yZCddLCBbdHlwZT0nZmlsZSddLCBzZWxlY3QsIHRleHRhcmVhLCBbdHlwZT0nbnVtYmVyJ10sIFt0eXBlPSdzZWFyY2gnXSwgXCIgK1xyXG5cdFx0XHRcdFx0XCJbdHlwZT0ndGVsJ10sIFt0eXBlPSd1cmwnXSwgW3R5cGU9J2VtYWlsJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZSddLCBbdHlwZT0nbW9udGgnXSwgXCIgK1xyXG5cdFx0XHRcdFx0XCJbdHlwZT0nd2VlayddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J3JhbmdlJ10sIFt0eXBlPSdjb2xvciddLCBcIiArXHJcblx0XHRcdFx0XHRcIlt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLCBkZWxlZ2F0ZSlcclxuXHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIG9sZElFXHJcblx0XHRcdFx0Ly8gXCJzZWxlY3RcIiBpcyBwcm92aWRlZCBhcyBldmVudC50YXJnZXQgd2hlbiBjbGlja2luZyBhIG9wdGlvblxyXG5cdFx0XHRcdC5vbihcImNsaWNrLnZhbGlkYXRlXCIsIFwic2VsZWN0LCBvcHRpb24sIFt0eXBlPSdyYWRpbyddLCBbdHlwZT0nY2hlY2tib3gnXVwiLCBkZWxlZ2F0ZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcikge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkub24oXCJpbnZhbGlkLWZvcm0udmFsaWRhdGVcIiwgdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFkZCBhcmlhLXJlcXVpcmVkIHRvIGFueSBTdGF0aWMvRGF0YS9DbGFzcyByZXF1aXJlZCBmaWVsZHMgYmVmb3JlIGZpcnN0IHZhbGlkYXRpb25cclxuXHRcdFx0Ly8gU2NyZWVuIHJlYWRlcnMgcmVxdWlyZSB0aGlzIGF0dHJpYnV0ZSB0byBiZSBwcmVzZW50IGJlZm9yZSB0aGUgaW5pdGlhbCBzdWJtaXNzaW9uIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUctVEVDSFMvQVJJQTIuaHRtbFxyXG5cdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbcmVxdWlyZWRdLCBbZGF0YS1ydWxlLXJlcXVpcmVkXSwgLnJlcXVpcmVkXCIpLmF0dHIoXCJhcmlhLXJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5mb3JtL1xyXG5cdFx0Zm9ybTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuY2hlY2tGb3JtKCk7XHJcblx0XHRcdCQuZXh0ZW5kKHRoaXMuc3VibWl0dGVkLCB0aGlzLmVycm9yTWFwKTtcclxuXHRcdFx0dGhpcy5pbnZhbGlkID0gJC5leHRlbmQoe30sIHRoaXMuZXJyb3JNYXApO1xyXG5cdFx0XHRpZiAoIXRoaXMudmFsaWQoKSkge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkudHJpZ2dlckhhbmRsZXIoXCJpbnZhbGlkLWZvcm1cIiwgW3RoaXNdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNob3dFcnJvcnMoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hlY2tGb3JtOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5wcmVwYXJlRm9ybSgpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudHMgPSAodGhpcy5jdXJyZW50RWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKCkpOyBlbGVtZW50c1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5jaGVjayhlbGVtZW50c1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMudmFsaWQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5lbGVtZW50L1xyXG5cdFx0ZWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgY2xlYW5FbGVtZW50ID0gdGhpcy5jbGVhbihlbGVtZW50KSxcclxuXHRcdFx0XHRjaGVja0VsZW1lbnQgPSB0aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IoY2xlYW5FbGVtZW50KSxcclxuXHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cclxuXHRcdFx0dGhpcy5sYXN0RWxlbWVudCA9IGNoZWNrRWxlbWVudDtcclxuXHJcblx0XHRcdGlmIChjaGVja0VsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmludmFsaWRbY2xlYW5FbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMucHJlcGFyZUVsZW1lbnQoY2hlY2tFbGVtZW50KTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50cyA9ICQoY2hlY2tFbGVtZW50KTtcclxuXHJcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5jaGVjayhjaGVja0VsZW1lbnQpICE9PSBmYWxzZTtcclxuXHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5pbnZhbGlkW2NoZWNrRWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5pbnZhbGlkW2NoZWNrRWxlbWVudC5uYW1lXSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIEFkZCBhcmlhLWludmFsaWQgc3RhdHVzIGZvciBzY3JlZW4gcmVhZGVyc1xyXG5cdFx0XHQkKGVsZW1lbnQpLmF0dHIoXCJhcmlhLWludmFsaWRcIiwgIXJlc3VsdCk7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMubnVtYmVyT2ZJbnZhbGlkcygpKSB7XHJcblx0XHRcdFx0Ly8gSGlkZSBlcnJvciBjb250YWluZXJzIG9uIGxhc3QgZXJyb3JcclxuXHRcdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMudG9IaWRlLmFkZCh0aGlzLmNvbnRhaW5lcnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2hvd0Vycm9ycygpO1xyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLnNob3dFcnJvcnMvXHJcblx0XHRzaG93RXJyb3JzOiBmdW5jdGlvbihlcnJvcnMpIHtcclxuXHRcdFx0aWYgKGVycm9ycykge1xyXG5cdFx0XHRcdC8vIGFkZCBpdGVtcyB0byBlcnJvciBsaXN0IGFuZCBtYXBcclxuXHRcdFx0XHQkLmV4dGVuZCh0aGlzLmVycm9yTWFwLCBlcnJvcnMpO1xyXG5cdFx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdFx0Zm9yICh2YXIgbmFtZSBpbiBlcnJvcnMpIHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBlcnJvcnNbbmFtZV0sXHJcblx0XHRcdFx0XHRcdGVsZW1lbnQ6IHRoaXMuZmluZEJ5TmFtZShuYW1lKVswXVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIHJlbW92ZSBpdGVtcyBmcm9tIHN1Y2Nlc3MgbGlzdFxyXG5cdFx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSAkLmdyZXAodGhpcy5zdWNjZXNzTGlzdCwgZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICEoZWxlbWVudC5uYW1lIGluIGVycm9ycyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycykge1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycy5jYWxsKHRoaXMsIHRoaXMuZXJyb3JNYXAsIHRoaXMuZXJyb3JMaXN0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5yZXNldEZvcm0vXHJcblx0XHRyZXNldEZvcm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJC5mbi5yZXNldEZvcm0pIHtcclxuXHRcdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLnJlc2V0Rm9ybSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc3VibWl0dGVkID0ge307XHJcblx0XHRcdHRoaXMubGFzdEVsZW1lbnQgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnByZXBhcmVGb3JtKCk7XHJcblx0XHRcdHRoaXMuaGlkZUVycm9ycygpO1xyXG5cdFx0XHR2YXIgaSwgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKClcclxuXHRcdFx0XHQucmVtb3ZlRGF0YShcInByZXZpb3VzVmFsdWVcIilcclxuXHRcdFx0XHQucmVtb3ZlQXR0cihcImFyaWEtaW52YWxpZFwiKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgZWxlbWVudHNbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnRzW2ldLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIFwiXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlbGVtZW50cy5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG51bWJlck9mSW52YWxpZHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vYmplY3RMZW5ndGgodGhpcy5pbnZhbGlkKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b2JqZWN0TGVuZ3RoOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0LyoganNoaW50IHVudXNlZDogZmFsc2UgKi9cclxuXHRcdFx0dmFyIGNvdW50ID0gMCxcclxuXHRcdFx0XHRpO1xyXG5cdFx0XHRmb3IgKGkgaW4gb2JqKSB7XHJcblx0XHRcdFx0Y291bnQrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY291bnQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGVFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmhpZGVUaGVzZSh0aGlzLnRvSGlkZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGVUaGVzZTogZnVuY3Rpb24oZXJyb3JzKSB7XHJcblx0XHRcdGVycm9ycy5ub3QodGhpcy5jb250YWluZXJzKS50ZXh0KFwiXCIpO1xyXG5cdFx0XHR0aGlzLmFkZFdyYXBwZXIoZXJyb3JzKS5oaWRlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHZhbGlkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpc1ZhbGlkRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnZhbGlkW2VsZW1lbnQubmFtZV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6ICF0aGlzLmludmFsaWRbZWxlbWVudC5uYW1lXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2l6ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yTGlzdC5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvY3VzSW52YWxpZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmZvY3VzSW52YWxpZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQkKHRoaXMuZmluZExhc3RBY3RpdmUoKSB8fCB0aGlzLmVycm9yTGlzdC5sZW5ndGggJiYgdGhpcy5lcnJvckxpc3RbMF0uZWxlbWVudCB8fCBbXSlcclxuXHRcdFx0XHRcdC5maWx0ZXIoXCI6dmlzaWJsZVwiKVxyXG5cdFx0XHRcdFx0LmZvY3VzKClcclxuXHRcdFx0XHRcdC8vIG1hbnVhbGx5IHRyaWdnZXIgZm9jdXNpbiBldmVudDsgd2l0aG91dCBpdCwgZm9jdXNpbiBoYW5kbGVyIGlzbid0IGNhbGxlZCwgZmluZExhc3RBY3RpdmUgd29uJ3QgaGF2ZSBhbnl0aGluZyB0byBmaW5kXHJcblx0XHRcdFx0XHQudHJpZ2dlcihcImZvY3VzaW5cIik7XHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Ly8gaWdub3JlIElFIHRocm93aW5nIGVycm9ycyB3aGVuIGZvY3VzaW5nIGhpZGRlbiBlbGVtZW50c1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRmaW5kTGFzdEFjdGl2ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBsYXN0QWN0aXZlID0gdGhpcy5sYXN0QWN0aXZlO1xyXG5cdFx0XHRyZXR1cm4gbGFzdEFjdGl2ZSAmJiAkLmdyZXAodGhpcy5lcnJvckxpc3QsIGZ1bmN0aW9uKG4pIHtcclxuXHRcdFx0XHRyZXR1cm4gbi5lbGVtZW50Lm5hbWUgPT09IGxhc3RBY3RpdmUubmFtZTtcclxuXHRcdFx0fSkubGVuZ3RoID09PSAxICYmIGxhc3RBY3RpdmU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHZhbGlkYXRvciA9IHRoaXMsXHJcblx0XHRcdFx0cnVsZXNDYWNoZSA9IHt9O1xyXG5cclxuXHRcdFx0Ly8gc2VsZWN0IGFsbCB2YWxpZCBpbnB1dHMgaW5zaWRlIHRoZSBmb3JtIChubyBzdWJtaXQgb3IgcmVzZXQgYnV0dG9ucylcclxuXHRcdFx0cmV0dXJuICQodGhpcy5jdXJyZW50Rm9ybSlcclxuXHRcdFx0LmZpbmQoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKVxyXG5cdFx0XHQubm90KFwiOnN1Ym1pdCwgOnJlc2V0LCA6aW1hZ2UsIDpkaXNhYmxlZFwiKVxyXG5cdFx0XHQubm90KHRoaXMuc2V0dGluZ3MuaWdub3JlKVxyXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5uYW1lICYmIHZhbGlkYXRvci5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcIiVvIGhhcyBubyBuYW1lIGFzc2lnbmVkXCIsIHRoaXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gc2VsZWN0IG9ubHkgdGhlIGZpcnN0IGVsZW1lbnQgZm9yIGVhY2ggbmFtZSwgYW5kIG9ubHkgdGhvc2Ugd2l0aCBydWxlcyBzcGVjaWZpZWRcclxuXHRcdFx0XHRpZiAodGhpcy5uYW1lIGluIHJ1bGVzQ2FjaGUgfHwgIXZhbGlkYXRvci5vYmplY3RMZW5ndGgoJCh0aGlzKS5ydWxlcygpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cnVsZXNDYWNoZVt0aGlzLm5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFuOiBmdW5jdGlvbihzZWxlY3Rvcikge1xyXG5cdFx0XHRyZXR1cm4gJChzZWxlY3RvcilbMF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBlcnJvckNsYXNzID0gdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KFwiIFwiKS5qb2luKFwiLlwiKTtcclxuXHRcdFx0cmV0dXJuICQodGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIi5cIiArIGVycm9yQ2xhc3MsIHRoaXMuZXJyb3JDb250ZXh0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XHJcblx0XHRcdHRoaXMuZXJyb3JNYXAgPSB7fTtcclxuXHRcdFx0dGhpcy50b1Nob3cgPSAkKFtdKTtcclxuXHRcdFx0dGhpcy50b0hpZGUgPSAkKFtdKTtcclxuXHRcdFx0dGhpcy5jdXJyZW50RWxlbWVudHMgPSAkKFtdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJlcGFyZUZvcm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy5lcnJvcnMoKS5hZGQodGhpcy5jb250YWluZXJzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJlcGFyZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMuZXJyb3JzRm9yKGVsZW1lbnQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRlbGVtZW50VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIHZhbCxcclxuXHRcdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdFx0dHlwZSA9IGVsZW1lbnQudHlwZTtcclxuXHJcblx0XHRcdGlmICh0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLnZhbCgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVsZW1lbnQudmFsaWRpdHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbWVudC52YWxpZGl0eS5iYWRJbnB1dCA/IGZhbHNlIDogJGVsZW1lbnQudmFsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhbCA9ICRlbGVtZW50LnZhbCgpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiB2YWwucmVwbGFjZSgvXFxyL2csIFwiXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWw7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdGVsZW1lbnQgPSB0aGlzLnZhbGlkYXRpb25UYXJnZXRGb3IodGhpcy5jbGVhbihlbGVtZW50KSk7XHJcblxyXG5cdFx0XHR2YXIgcnVsZXMgPSAkKGVsZW1lbnQpLnJ1bGVzKCksXHJcblx0XHRcdFx0cnVsZXNDb3VudCA9ICQubWFwKHJ1bGVzLCBmdW5jdGlvbihuLCBpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHR9KS5sZW5ndGgsXHJcblx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2UsXHJcblx0XHRcdFx0dmFsID0gdGhpcy5lbGVtZW50VmFsdWUoZWxlbWVudCksXHJcblx0XHRcdFx0cmVzdWx0LCBtZXRob2QsIHJ1bGU7XHJcblxyXG5cdFx0XHRmb3IgKG1ldGhvZCBpbiBydWxlcykge1xyXG5cdFx0XHRcdHJ1bGUgPSB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbWV0ZXJzOiBydWxlc1ttZXRob2RdIH07XHJcblx0XHRcdFx0dHJ5IHtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQgPSAkLnZhbGlkYXRvci5tZXRob2RzW21ldGhvZF0uY2FsbCh0aGlzLCB2YWwsIGVsZW1lbnQsIHJ1bGUucGFyYW1ldGVycyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gaWYgYSBtZXRob2QgaW5kaWNhdGVzIHRoYXQgdGhlIGZpZWxkIGlzIG9wdGlvbmFsIGFuZCB0aGVyZWZvcmUgdmFsaWQsXHJcblx0XHRcdFx0XHQvLyBkb24ndCBtYXJrIGl0IGFzIHZhbGlkIHdoZW4gdGhlcmUgYXJlIG5vIG90aGVyIHJ1bGVzXHJcblx0XHRcdFx0XHRpZiAocmVzdWx0ID09PSBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIiAmJiBydWxlc0NvdW50ID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdGRlcGVuZGVuY3lNaXNtYXRjaCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gXCJwZW5kaW5nXCIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLnRvSGlkZS5ub3QodGhpcy5lcnJvcnNGb3IoZWxlbWVudCkpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5mb3JtYXRBbmRBZGQoZWxlbWVudCwgcnVsZSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIkV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIgKyBlbGVtZW50LmlkICsgXCIsIGNoZWNrIHRoZSAnXCIgKyBydWxlLm1ldGhvZCArIFwiJyBtZXRob2QuXCIsIGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGUgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuXHRcdFx0XHRcdFx0ZS5tZXNzYWdlICs9IFwiLiAgRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIiArIGVsZW1lbnQuaWQgKyBcIiwgY2hlY2sgdGhlICdcIiArIHJ1bGUubWV0aG9kICsgXCInIG1ldGhvZC5cIjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aHJvdyBlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGVwZW5kZW5jeU1pc21hdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm9iamVjdExlbmd0aChydWxlcykpIHtcclxuXHRcdFx0XHR0aGlzLnN1Y2Nlc3NMaXN0LnB1c2goZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIHJldHVybiB0aGUgY3VzdG9tIG1lc3NhZ2UgZm9yIHRoZSBnaXZlbiBlbGVtZW50IGFuZCB2YWxpZGF0aW9uIG1ldGhvZFxyXG5cdFx0Ly8gc3BlY2lmaWVkIGluIHRoZSBlbGVtZW50J3MgSFRNTDUgZGF0YSBhdHRyaWJ1dGVcclxuXHRcdC8vIHJldHVybiB0aGUgZ2VuZXJpYyBtZXNzYWdlIGlmIHByZXNlbnQgYW5kIG5vIG1ldGhvZCBzcGVjaWZpYyBtZXNzYWdlIGlzIHByZXNlbnRcclxuXHRcdGN1c3RvbURhdGFNZXNzYWdlOiBmdW5jdGlvbihlbGVtZW50LCBtZXRob2QpIHtcclxuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZGF0YShcIm1zZ1wiICsgbWV0aG9kLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcclxuXHRcdFx0XHRtZXRob2Quc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpIHx8ICQoZWxlbWVudCkuZGF0YShcIm1zZ1wiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBjdXN0b20gbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgbmFtZSBhbmQgdmFsaWRhdGlvbiBtZXRob2RcclxuXHRcdGN1c3RvbU1lc3NhZ2U6IGZ1bmN0aW9uKG5hbWUsIG1ldGhvZCkge1xyXG5cdFx0XHR2YXIgbSA9IHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbbmFtZV07XHJcblx0XHRcdHJldHVybiBtICYmIChtLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgPyBtIDogbVttZXRob2RdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBkZWZpbmVkIGFyZ3VtZW50LCBhbGxvd2luZyBlbXB0eSBzdHJpbmdzXHJcblx0XHRmaW5kRGVmaW5lZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZWZhdWx0TWVzc2FnZTogZnVuY3Rpb24oZWxlbWVudCwgbWV0aG9kKSB7XHJcblx0XHRcdC8vIFdlem9tRml4XHJcblx0XHRcdHZhciBtZXRob2RfbmFtZSA9IF9nZXRNZXRob2RNc2dOYW1lKGVsZW1lbnQsIG1ldGhvZCk7XHJcblx0XHRcdHJldHVybiB0aGlzLmZpbmREZWZpbmVkKFxyXG5cdFx0XHRcdHRoaXMuY3VzdG9tTWVzc2FnZShlbGVtZW50Lm5hbWUsIG1ldGhvZCksXHJcblx0XHRcdFx0dGhpcy5jdXN0b21EYXRhTWVzc2FnZShlbGVtZW50LCBtZXRob2QpLFxyXG5cdFx0XHRcdC8vIHRpdGxlIGlzIG5ldmVyIHVuZGVmaW5lZCwgc28gaGFuZGxlIGVtcHR5IHN0cmluZyBhcyB1bmRlZmluZWRcclxuXHRcdFx0XHQhdGhpcy5zZXR0aW5ncy5pZ25vcmVUaXRsZSAmJiBlbGVtZW50LnRpdGxlIHx8IHVuZGVmaW5lZCxcclxuXHRcdFx0XHQkLnZhbGlkYXRvci5tZXNzYWdlc1ttZXRob2RfbmFtZV0sXHJcblx0XHRcdFx0XCI8c3Ryb25nPldhcm5pbmc6IE5vIG1lc3NhZ2UgZGVmaW5lZCBmb3IgXCIgKyBlbGVtZW50Lm5hbWUgKyBcIjwvc3Ryb25nPlwiXHJcblx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvcm1hdEFuZEFkZDogZnVuY3Rpb24oZWxlbWVudCwgcnVsZSkge1xyXG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2UoZWxlbWVudCwgcnVsZS5tZXRob2QpLFxyXG5cdFx0XHRcdHRoZXJlZ2V4ID0gL1xcJD9cXHsoXFxkKylcXH0vZztcclxuXHRcdFx0aWYgKHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZS5jYWxsKHRoaXMsIHJ1bGUucGFyYW1ldGVycywgZWxlbWVudCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhlcmVnZXgudGVzdChtZXNzYWdlKSkge1xyXG5cdFx0XHRcdG1lc3NhZ2UgPSAkLnZhbGlkYXRvci5mb3JtYXQobWVzc2FnZS5yZXBsYWNlKHRoZXJlZ2V4LCBcInskMX1cIiksIHJ1bGUucGFyYW1ldGVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5lcnJvckxpc3QucHVzaCh7XHJcblx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcclxuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxyXG5cdFx0XHRcdG1ldGhvZDogcnVsZS5tZXRob2RcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmVycm9yTWFwW2VsZW1lbnQubmFtZV0gPSBtZXNzYWdlO1xyXG5cdFx0XHR0aGlzLnN1Ym1pdHRlZFtlbGVtZW50Lm5hbWVdID0gbWVzc2FnZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YWRkV3JhcHBlcjogZnVuY3Rpb24odG9Ub2dnbGUpIHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Mud3JhcHBlcikge1xyXG5cdFx0XHRcdHRvVG9nZ2xlID0gdG9Ub2dnbGUuYWRkKHRvVG9nZ2xlLnBhcmVudCh0aGlzLnNldHRpbmdzLndyYXBwZXIpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdG9Ub2dnbGU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlZmF1bHRTaG93RXJyb3JzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGksIGVsZW1lbnRzLCBlcnJvcjtcclxuXHRcdFx0Zm9yIChpID0gMDsgdGhpcy5lcnJvckxpc3RbaV07IGkrKykge1xyXG5cdFx0XHRcdGVycm9yID0gdGhpcy5lcnJvckxpc3RbaV07XHJcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVycm9yLmVsZW1lbnQsIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5zaG93TGFiZWwoZXJyb3IuZWxlbWVudCwgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdHRoaXMudG9TaG93ID0gdGhpcy50b1Nob3cuYWRkKHRoaXMuY29udGFpbmVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Muc3VjY2Vzcykge1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IHRoaXMuc3VjY2Vzc0xpc3RbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93TGFiZWwodGhpcy5zdWNjZXNzTGlzdFtpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0Zm9yIChpID0gMCwgZWxlbWVudHMgPSB0aGlzLnZhbGlkRWxlbWVudHMoKTsgZWxlbWVudHNbaV07IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy51bmhpZ2hsaWdodC5jYWxsKHRoaXMsIGVsZW1lbnRzW2ldLCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MsIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUubm90KHRoaXMudG9TaG93KTtcclxuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKCk7XHJcblx0XHRcdHRoaXMuYWRkV3JhcHBlcih0aGlzLnRvU2hvdykuc2hvdygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR2YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudEVsZW1lbnRzLm5vdCh0aGlzLmludmFsaWRFbGVtZW50cygpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW52YWxpZEVsZW1lbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQodGhpcy5lcnJvckxpc3QpLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvd0xhYmVsOiBmdW5jdGlvbihlbGVtZW50LCBtZXNzYWdlKSB7XHJcblx0XHRcdHZhciBwbGFjZSwgZ3JvdXAsIGVycm9ySUQsXHJcblx0XHRcdFx0ZXJyb3IgPSB0aGlzLmVycm9yc0ZvcihlbGVtZW50KSxcclxuXHRcdFx0XHRlbGVtZW50SUQgPSB0aGlzLmlkT3JOYW1lKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGRlc2NyaWJlZEJ5ID0gJChlbGVtZW50KS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKTtcclxuXHRcdFx0aWYgKGVycm9yLmxlbmd0aCkge1xyXG5cdFx0XHRcdC8vIHJlZnJlc2ggZXJyb3Ivc3VjY2VzcyBjbGFzc1xyXG5cdFx0XHRcdGVycm9yLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzKTtcclxuXHRcdFx0XHQvLyByZXBsYWNlIG1lc3NhZ2Ugb24gZXhpc3RpbmcgbGFiZWxcclxuXHRcdFx0XHRlcnJvci5odG1sKG1lc3NhZ2UpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBlbGVtZW50XHJcblx0XHRcdFx0ZXJyb3IgPSAkKFwiPFwiICsgdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIj5cIilcclxuXHRcdFx0XHRcdC5hdHRyKFwiaWRcIiwgZWxlbWVudElEICsgXCItZXJyb3JcIilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpXHJcblx0XHRcdFx0XHQuaHRtbChtZXNzYWdlIHx8IFwiXCIpO1xyXG5cclxuXHRcdFx0XHQvLyBNYWludGFpbiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdG8gYmUgcGxhY2VkIGludG8gdGhlIERPTVxyXG5cdFx0XHRcdHBsYWNlID0gZXJyb3I7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3Mud3JhcHBlcikge1xyXG5cdFx0XHRcdFx0Ly8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHZpc2libGUsIGV2ZW4gaW4gSUVcclxuXHRcdFx0XHRcdC8vIGFjdHVhbGx5IHNob3dpbmcgdGhlIHdyYXBwZWQgZWxlbWVudCBpcyBoYW5kbGVkIGVsc2V3aGVyZVxyXG5cdFx0XHRcdFx0cGxhY2UgPSBlcnJvci5oaWRlKCkuc2hvdygpLndyYXAoXCI8XCIgKyB0aGlzLnNldHRpbmdzLndyYXBwZXIgKyBcIi8+XCIpLnBhcmVudCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5sYWJlbENvbnRhaW5lci5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMubGFiZWxDb250YWluZXIuYXBwZW5kKHBsYWNlKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuZXJyb3JQbGFjZW1lbnQocGxhY2UsICQoZWxlbWVudCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRwbGFjZS5pbnNlcnRBZnRlcihlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIExpbmsgZXJyb3IgYmFjayB0byB0aGUgZWxlbWVudFxyXG5cdFx0XHRcdGlmIChlcnJvci5pcyhcImxhYmVsXCIpKSB7XHJcblx0XHRcdFx0XHQvLyBJZiB0aGUgZXJyb3IgaXMgYSBsYWJlbCwgdGhlbiBhc3NvY2lhdGUgdXNpbmcgJ2ZvcidcclxuXHRcdFx0XHRcdGVycm9yLmF0dHIoXCJmb3JcIiwgZWxlbWVudElEKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yLnBhcmVudHMoXCJsYWJlbFtmb3I9J1wiICsgZWxlbWVudElEICsgXCInXVwiKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGlzIG5vdCBhIGNoaWxkIG9mIGFuIGFzc29jaWF0ZWQgbGFiZWwsIHRoZW4gaXQncyBuZWNlc3NhcnlcclxuXHRcdFx0XHRcdC8vIHRvIGV4cGxpY2l0bHkgYXBwbHkgYXJpYS1kZXNjcmliZWRieVxyXG5cclxuXHRcdFx0XHRcdGVycm9ySUQgPSBlcnJvci5hdHRyKFwiaWRcIikucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18XFwkKS9nLCBcIlxcXFwkMVwiKTtcclxuXHRcdFx0XHRcdC8vIFJlc3BlY3QgZXhpc3Rpbmcgbm9uLWVycm9yIGFyaWEtZGVzY3JpYmVkYnlcclxuXHRcdFx0XHRcdGlmICghZGVzY3JpYmVkQnkpIHtcclxuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgPSBlcnJvcklEO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICghZGVzY3JpYmVkQnkubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxiXCIgKyBlcnJvcklEICsgXCJcXFxcYlwiKSkpIHtcclxuXHRcdFx0XHRcdFx0Ly8gQWRkIHRvIGVuZCBvZiBsaXN0IGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcclxuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgKz0gXCIgXCIgKyBlcnJvcklEO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0JChlbGVtZW50KS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBkZXNjcmliZWRCeSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBlbGVtZW50IGlzIGdyb3VwZWQsIHRoZW4gYXNzaWduIHRvIGFsbCBlbGVtZW50cyBpbiB0aGUgc2FtZSBncm91cFxyXG5cdFx0XHRcdFx0Z3JvdXAgPSB0aGlzLmdyb3Vwc1tlbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHRcdFx0aWYgKGdyb3VwKSB7XHJcblx0XHRcdFx0XHRcdCQuZWFjaCh0aGlzLmdyb3VwcywgZnVuY3Rpb24obmFtZSwgdGVzdGdyb3VwKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRlc3Rncm91cCA9PT0gZ3JvdXApIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyBuYW1lICsgXCInXVwiLCB0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgZXJyb3IuYXR0cihcImlkXCIpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIW1lc3NhZ2UgJiYgdGhpcy5zZXR0aW5ncy5zdWNjZXNzKSB7XHJcblx0XHRcdFx0ZXJyb3IudGV4dChcIlwiKTtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuc2V0dGluZ3Muc3VjY2VzcyA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0ZXJyb3IuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5zdWNjZXNzKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zdWNjZXNzKGVycm9yLCBlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50b1Nob3cgPSB0aGlzLnRvU2hvdy5hZGQoZXJyb3IpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRlcnJvcnNGb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIG5hbWUgPSB0aGlzLmlkT3JOYW1lKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGRlc2NyaWJlciA9ICQoZWxlbWVudCkuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiksXHJcblx0XHRcdFx0c2VsZWN0b3IgPSBcImxhYmVsW2Zvcj0nXCIgKyBuYW1lICsgXCInXSwgbGFiZWxbZm9yPSdcIiArIG5hbWUgKyBcIiddICpcIjtcclxuXHJcblx0XHRcdC8vIGFyaWEtZGVzY3JpYmVkYnkgc2hvdWxkIGRpcmVjdGx5IHJlZmVyZW5jZSB0aGUgZXJyb3IgZWxlbWVudFxyXG5cdFx0XHRpZiAoZGVzY3JpYmVyKSB7XHJcblx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3RvciArIFwiLCAjXCIgKyBkZXNjcmliZXIucmVwbGFjZSgvXFxzKy9nLCBcIiwgI1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpc1xyXG5cdFx0XHRcdC5lcnJvcnMoKVxyXG5cdFx0XHRcdC5maWx0ZXIoc2VsZWN0b3IpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpZE9yTmFtZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ncm91cHNbZWxlbWVudC5uYW1lXSB8fCAodGhpcy5jaGVja2FibGUoZWxlbWVudCkgPyBlbGVtZW50Lm5hbWUgOiBlbGVtZW50LmlkIHx8IGVsZW1lbnQubmFtZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHZhbGlkYXRpb25UYXJnZXRGb3I6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdC8vIElmIHJhZGlvL2NoZWNrYm94LCB2YWxpZGF0ZSBmaXJzdCBlbGVtZW50IGluIGdyb3VwIGluc3RlYWRcclxuXHRcdFx0aWYgKHRoaXMuY2hlY2thYmxlKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBBbHdheXMgYXBwbHkgaWdub3JlIGZpbHRlclxyXG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpWzBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja2FibGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuICgvcmFkaW98Y2hlY2tib3gvaSkudGVzdChlbGVtZW50LnR5cGUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaW5kQnlOYW1lOiBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHRcdHJldHVybiAkKHRoaXMuY3VycmVudEZvcm0pLmZpbmQoXCJbbmFtZT0nXCIgKyBuYW1lICsgXCInXVwiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0TGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRjYXNlIFwic2VsZWN0XCI6XHJcblx0XHRcdFx0cmV0dXJuICQoXCJvcHRpb246c2VsZWN0ZWRcIiwgZWxlbWVudCkubGVuZ3RoO1xyXG5cdFx0XHRjYXNlIFwiaW5wdXRcIjpcclxuXHRcdFx0XHRpZiAodGhpcy5jaGVja2FibGUoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpbmRCeU5hbWUoZWxlbWVudC5uYW1lKS5maWx0ZXIoXCI6Y2hlY2tlZFwiKS5sZW5ndGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlcGVuZDogZnVuY3Rpb24ocGFyYW0sIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIHBhcmFtXSA/IHRoaXMuZGVwZW5kVHlwZXNbdHlwZW9mIHBhcmFtXShwYXJhbSwgZWxlbWVudCkgOiB0cnVlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZXBlbmRUeXBlczoge1xyXG5cdFx0XHRcImJvb2xlYW5cIjogZnVuY3Rpb24ocGFyYW0pIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW07XHJcblx0XHRcdH0sXHJcblx0XHRcdFwic3RyaW5nXCI6IGZ1bmN0aW9uKHBhcmFtLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuICEhJChwYXJhbSwgZWxlbWVudC5mb3JtKS5sZW5ndGg7XHJcblx0XHRcdH0sXHJcblx0XHRcdFwiZnVuY3Rpb25cIjogZnVuY3Rpb24ocGFyYW0sIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW0oZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0b3B0aW9uYWw6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dmFyIHZhbCA9IHRoaXMuZWxlbWVudFZhbHVlKGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gISQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCh0aGlzLCB2YWwsIGVsZW1lbnQpICYmIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzdGFydFJlcXVlc3Q6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnBlbmRpbmdbZWxlbWVudC5uYW1lXSkge1xyXG5cdFx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QrKztcclxuXHRcdFx0XHR0aGlzLnBlbmRpbmdbZWxlbWVudC5uYW1lXSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c3RvcFJlcXVlc3Q6IGZ1bmN0aW9uKGVsZW1lbnQsIHZhbGlkKSB7XHJcblx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QtLTtcclxuXHRcdFx0Ly8gc29tZXRpbWVzIHN5bmNocm9uaXphdGlvbiBmYWlscywgbWFrZSBzdXJlIHBlbmRpbmdSZXF1ZXN0IGlzIG5ldmVyIDwgMFxyXG5cdFx0XHRpZiAodGhpcy5wZW5kaW5nUmVxdWVzdCA8IDApIHtcclxuXHRcdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGUgdGhpcy5wZW5kaW5nW2VsZW1lbnQubmFtZV07XHJcblx0XHRcdGlmICh2YWxpZCAmJiB0aGlzLnBlbmRpbmdSZXF1ZXN0ID09PSAwICYmIHRoaXMuZm9ybVN1Ym1pdHRlZCAmJiB0aGlzLmZvcm0oKSkge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkuc3VibWl0KCk7XHJcblx0XHRcdFx0dGhpcy5mb3JtU3VibWl0dGVkID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAoIXZhbGlkICYmIHRoaXMucGVuZGluZ1JlcXVlc3QgPT09IDAgJiYgdGhpcy5mb3JtU3VibWl0dGVkKSB7XHJcblx0XHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLCBbdGhpc10pO1xyXG5cdFx0XHRcdHRoaXMuZm9ybVN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHByZXZpb3VzVmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuICQuZGF0YShlbGVtZW50LCBcInByZXZpb3VzVmFsdWVcIikgfHwgJC5kYXRhKGVsZW1lbnQsIFwicHJldmlvdXNWYWx1ZVwiLCB7XHJcblx0XHRcdFx0b2xkOiBudWxsLFxyXG5cdFx0XHRcdHZhbGlkOiB0cnVlLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IHRoaXMuZGVmYXVsdE1lc3NhZ2UoZWxlbWVudCwgXCJyZW1vdGVcIilcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGNsZWFucyB1cCBhbGwgZm9ybXMgYW5kIGVsZW1lbnRzLCByZW1vdmVzIHZhbGlkYXRvci1zcGVjaWZpYyBldmVudHNcclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0Rm9ybSgpO1xyXG5cclxuXHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHRcdC5vZmYoXCIudmFsaWRhdGVcIilcclxuXHRcdFx0XHQucmVtb3ZlRGF0YShcInZhbGlkYXRvclwiKTtcclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0Y2xhc3NSdWxlU2V0dGluZ3M6IHtcclxuXHRcdHJlcXVpcmVkOiB7IHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRlbWFpbDogeyBlbWFpbDogdHJ1ZSB9LFxyXG5cdFx0dXJsOiB7IHVybDogdHJ1ZSB9LFxyXG5cdFx0ZGF0ZTogeyBkYXRlOiB0cnVlIH0sXHJcblx0XHRkYXRlSVNPOiB7IGRhdGVJU086IHRydWUgfSxcclxuXHRcdG51bWJlcjogeyBudW1iZXI6IHRydWUgfSxcclxuXHRcdGRpZ2l0czogeyBkaWdpdHM6IHRydWUgfSxcclxuXHRcdGNyZWRpdGNhcmQ6IHsgY3JlZGl0Y2FyZDogdHJ1ZSB9XHJcblx0fSxcclxuXHJcblx0YWRkQ2xhc3NSdWxlczogZnVuY3Rpb24oY2xhc3NOYW1lLCBydWxlcykge1xyXG5cdFx0aWYgKGNsYXNzTmFtZS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XHJcblx0XHRcdHRoaXMuY2xhc3NSdWxlU2V0dGluZ3NbY2xhc3NOYW1lXSA9IHJ1bGVzO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JC5leHRlbmQodGhpcy5jbGFzc1J1bGVTZXR0aW5ncywgY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRjbGFzc1J1bGVzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHR2YXIgcnVsZXMgPSB7fSxcclxuXHRcdFx0Y2xhc3NlcyA9ICQoZWxlbWVudCkuYXR0cihcImNsYXNzXCIpO1xyXG5cclxuXHRcdGlmIChjbGFzc2VzKSB7XHJcblx0XHRcdCQuZWFjaChjbGFzc2VzLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMgaW4gJC52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdCQuZXh0ZW5kKHJ1bGVzLCAkLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1t0aGlzXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRub3JtYWxpemVBdHRyaWJ1dGVSdWxlOiBmdW5jdGlvbihydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSkge1xyXG5cclxuXHRcdC8vIGNvbnZlcnQgdGhlIHZhbHVlIHRvIGEgbnVtYmVyIGZvciBudW1iZXIgaW5wdXRzLCBhbmQgZm9yIHRleHQgZm9yIGJhY2t3YXJkcyBjb21wYWJpbGl0eVxyXG5cdFx0Ly8gYWxsb3dzIHR5cGU9XCJkYXRlXCIgYW5kIG90aGVycyB0byBiZSBjb21wYXJlZCBhcyBzdHJpbmdzXHJcblx0XHRpZiAoL21pbnxtYXgvLnRlc3QobWV0aG9kKSAmJiAodHlwZSA9PT0gbnVsbCB8fCAvbnVtYmVyfHJhbmdlfHRleHQvLnRlc3QodHlwZSkpKSB7XHJcblx0XHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuXHJcblx0XHRcdC8vIFN1cHBvcnQgT3BlcmEgTWluaSwgd2hpY2ggcmV0dXJucyBOYU4gZm9yIHVuZGVmaW5lZCBtaW5sZW5ndGhcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XHJcblx0XHRcdHJ1bGVzW21ldGhvZF0gPSB2YWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gbWV0aG9kICYmIHR5cGUgIT09IFwicmFuZ2VcIikge1xyXG5cclxuXHRcdFx0Ly8gZXhjZXB0aW9uOiB0aGUganF1ZXJ5IHZhbGlkYXRlICdyYW5nZScgbWV0aG9kXHJcblx0XHRcdC8vIGRvZXMgbm90IHRlc3QgZm9yIHRoZSBodG1sNSAncmFuZ2UnIHR5cGVcclxuXHRcdFx0cnVsZXNbbWV0aG9kXSA9IHRydWU7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0YXR0cmlidXRlUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdHR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIiksXHJcblx0XHRcdG1ldGhvZCwgdmFsdWU7XHJcblxyXG5cdFx0Zm9yIChtZXRob2QgaW4gJC52YWxpZGF0b3IubWV0aG9kcykge1xyXG5cclxuXHRcdFx0Ly8gc3VwcG9ydCBmb3IgPGlucHV0IHJlcXVpcmVkPiBpbiBib3RoIGh0bWw1IGFuZCBvbGRlciBicm93c2Vyc1xyXG5cdFx0XHRpZiAobWV0aG9kID09PSBcInJlcXVpcmVkXCIpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKG1ldGhvZCk7XHJcblxyXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyBmb3IgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZVxyXG5cdFx0XHRcdC8vIGFuZCBub24tSFRNTDUgYnJvd3NlcnMgbWlnaHQgaGF2ZSByZXF1aXJlZD1cIlwiIG1hcmt1cFxyXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gZm9yY2Ugbm9uLUhUTUw1IGJyb3dzZXJzIHRvIHJldHVybiBib29sXHJcblx0XHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhbHVlID0gJGVsZW1lbnQuYXR0cihtZXRob2QpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUocnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1heGxlbmd0aCBtYXkgYmUgcmV0dXJuZWQgYXMgLTEsIDIxNDc0ODM2NDcgKElFKSBhbmQgNTI0Mjg4IChzYWZhcmkpIGZvciB0ZXh0IGlucHV0c1xyXG5cdFx0aWYgKHJ1bGVzLm1heGxlbmd0aCAmJiAvLTF8MjE0NzQ4MzY0N3w1MjQyODgvLnRlc3QocnVsZXMubWF4bGVuZ3RoKSkge1xyXG5cdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRkYXRhUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHQkZWxlbWVudCA9ICQoZWxlbWVudCksXHJcblx0XHRcdHR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIiksXHJcblx0XHRcdG1ldGhvZCwgdmFsdWU7XHJcblxyXG5cdFx0Zm9yIChtZXRob2QgaW4gJC52YWxpZGF0b3IubWV0aG9kcykge1xyXG5cdFx0XHR2YWx1ZSA9ICRlbGVtZW50LmRhdGEoXCJydWxlXCIgKyBtZXRob2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtZXRob2Quc3Vic3RyaW5nKDEpLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUocnVsZXMsIHR5cGUsIG1ldGhvZCwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdHN0YXRpY1J1bGVzOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHQvLyBXZXpvbUZpeFxyXG5cdFx0aWYgKGVsZW1lbnQuZm9ybSkge1xyXG5cdFx0XHR2YWxpZGF0b3IgPSAkLmRhdGEoZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhbGlkYXRvciA9ICQuZGF0YSgkKGVsZW1lbnQpLmNsb3Nlc3QoXCJkaXZbZGF0YS1mb3JtPSd0cnVlJ11cIikuZ2V0KDApLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcnVsZXMgPSB7fSxcclxuXHRcdFx0Ly92YWxpZGF0b3IgPSAkLmRhdGEoZWxlbWVudC5mb3JtLCBcInZhbGlkYXRvclwiKTtcclxuXHRcdFx0dmFsaWRhdG9yID0gdmFsaWRhdG9yOyAvLyBXZXpvbUZpeFxyXG5cclxuXHRcdGlmICh2YWxpZGF0b3Iuc2V0dGluZ3MucnVsZXMpIHtcclxuXHRcdFx0cnVsZXMgPSAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKHZhbGlkYXRvci5zZXR0aW5ncy5ydWxlc1tlbGVtZW50Lm5hbWVdKSB8fCB7fTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBydWxlcztcclxuXHR9LFxyXG5cclxuXHRub3JtYWxpemVSdWxlczogZnVuY3Rpb24ocnVsZXMsIGVsZW1lbnQpIHtcclxuXHRcdC8vIGhhbmRsZSBkZXBlbmRlbmN5IGNoZWNrXHJcblx0XHQkLmVhY2gocnVsZXMsIGZ1bmN0aW9uKHByb3AsIHZhbCkge1xyXG5cdFx0XHQvLyBpZ25vcmUgcnVsZSB3aGVuIHBhcmFtIGlzIGV4cGxpY2l0bHkgZmFsc2UsIGVnLiByZXF1aXJlZDpmYWxzZVxyXG5cdFx0XHRpZiAodmFsID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGRlbGV0ZSBydWxlc1twcm9wXTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZhbC5wYXJhbSB8fCB2YWwuZGVwZW5kcykge1xyXG5cdFx0XHRcdHZhciBrZWVwUnVsZSA9IHRydWU7XHJcblx0XHRcdFx0c3dpdGNoICh0eXBlb2YgdmFsLmRlcGVuZHMpIHtcclxuXHRcdFx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdFx0XHRrZWVwUnVsZSA9ICEhJCh2YWwuZGVwZW5kcywgZWxlbWVudC5mb3JtKS5sZW5ndGg7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcclxuXHRcdFx0XHRcdGtlZXBSdWxlID0gdmFsLmRlcGVuZHMuY2FsbChlbGVtZW50LCBlbGVtZW50KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoa2VlcFJ1bGUpIHtcclxuXHRcdFx0XHRcdHJ1bGVzW3Byb3BdID0gdmFsLnBhcmFtICE9PSB1bmRlZmluZWQgPyB2YWwucGFyYW0gOiB0cnVlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRkZWxldGUgcnVsZXNbcHJvcF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBldmFsdWF0ZSBwYXJhbWV0ZXJzXHJcblx0XHQkLmVhY2gocnVsZXMsIGZ1bmN0aW9uKHJ1bGUsIHBhcmFtZXRlcikge1xyXG5cdFx0XHRydWxlc1tydWxlXSA9ICQuaXNGdW5jdGlvbihwYXJhbWV0ZXIpID8gcGFyYW1ldGVyKGVsZW1lbnQpIDogcGFyYW1ldGVyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gbnVtYmVyIHBhcmFtZXRlcnNcclxuXHRcdCQuZWFjaChbXCJtaW5sZW5ndGhcIiwgXCJtYXhsZW5ndGhcIl0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAocnVsZXNbdGhpc10pIHtcclxuXHRcdFx0XHRydWxlc1t0aGlzXSA9IE51bWJlcihydWxlc1t0aGlzXSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0JC5lYWNoKFtcInJhbmdlbGVuZ3RoXCIsIFwicmFuZ2VcIl0sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcGFydHM7XHJcblx0XHRcdGlmIChydWxlc1t0aGlzXSkge1xyXG5cdFx0XHRcdGlmICgkLmlzQXJyYXkocnVsZXNbdGhpc10pKSB7XHJcblx0XHRcdFx0XHRydWxlc1t0aGlzXSA9IFtOdW1iZXIocnVsZXNbdGhpc11bMF0pLCBOdW1iZXIocnVsZXNbdGhpc11bMV0pXTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBydWxlc1t0aGlzXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0cGFydHMgPSBydWxlc1t0aGlzXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCBcIlwiKS5zcGxpdCgvW1xccyxdKy8pO1xyXG5cdFx0XHRcdFx0cnVsZXNbdGhpc10gPSBbTnVtYmVyKHBhcnRzWzBdKSwgTnVtYmVyKHBhcnRzWzFdKV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoJC52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcykge1xyXG5cdFx0XHQvLyBhdXRvLWNyZWF0ZSByYW5nZXNcclxuXHRcdFx0aWYgKHJ1bGVzLm1pbiAhPSBudWxsICYmIHJ1bGVzLm1heCAhPSBudWxsKSB7XHJcblx0XHRcdFx0cnVsZXMucmFuZ2UgPSBbcnVsZXMubWluLCBydWxlcy5tYXhdO1xyXG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5taW47XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1heDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocnVsZXMubWlubGVuZ3RoICE9IG51bGwgJiYgcnVsZXMubWF4bGVuZ3RoICE9IG51bGwpIHtcclxuXHRcdFx0XHRydWxlcy5yYW5nZWxlbmd0aCA9IFtydWxlcy5taW5sZW5ndGgsIHJ1bGVzLm1heGxlbmd0aF07XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1pbmxlbmd0aDtcclxuXHRcdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdC8vIENvbnZlcnRzIGEgc2ltcGxlIHN0cmluZyB0byBhIHtzdHJpbmc6IHRydWV9IHJ1bGUsIGUuZy4sIFwicmVxdWlyZWRcIiB0byB7cmVxdWlyZWQ6dHJ1ZX1cclxuXHRub3JtYWxpemVSdWxlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dmFyIHRyYW5zZm9ybWVkID0ge307XHJcblx0XHRcdCQuZWFjaChkYXRhLnNwbGl0KC9cXHMvKSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dHJhbnNmb3JtZWRbdGhpc10gPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZGF0YSA9IHRyYW5zZm9ybWVkO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fSxcclxuXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kL1xyXG5cdGFkZE1ldGhvZDogZnVuY3Rpb24obmFtZSwgbWV0aG9kLCBtZXNzYWdlKSB7XHJcblx0XHQkLnZhbGlkYXRvci5tZXRob2RzW25hbWVdID0gbWV0aG9kO1xyXG5cdFx0JC52YWxpZGF0b3IubWVzc2FnZXNbbmFtZV0gPSBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlIDogJC52YWxpZGF0b3IubWVzc2FnZXNbbmFtZV07XHJcblx0XHRpZiAobWV0aG9kLmxlbmd0aCA8IDMpIHtcclxuXHRcdFx0JC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhuYW1lLCAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKG5hbWUpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JlcXVpcmVkLW1ldGhvZC9cclxuXHRcdHJlcXVpcmVkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0Ly8gY2hlY2sgaWYgZGVwZW5kZW5jeSBpcyBtZXRcclxuXHRcdFx0aWYgKCF0aGlzLmRlcGVuZChwYXJhbSwgZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIikge1xyXG5cdFx0XHRcdC8vIGNvdWxkIGJlIGFuIGFycmF5IGZvciBzZWxlY3QtbXVsdGlwbGUgb3IgYSBzdHJpbmcsIGJvdGggYXJlIGZpbmUgdGhpcyB3YXlcclxuXHRcdFx0XHR2YXIgdmFsID0gJChlbGVtZW50KS52YWwoKTtcclxuXHRcdFx0XHRyZXR1cm4gdmFsICYmIHZhbC5sZW5ndGggPiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmNoZWNrYWJsZShlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExlbmd0aCh2YWx1ZSwgZWxlbWVudCkgPiAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZW1haWwtbWV0aG9kL1xyXG5cdFx0ZW1haWw6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdC8vIEZyb20gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCN2YWxpZC1lLW1haWwtYWRkcmVzc1xyXG5cdFx0XHQvLyBSZXRyaWV2ZWQgMjAxNC0wMS0xNFxyXG5cdFx0XHQvLyBJZiB5b3UgaGF2ZSBhIHByb2JsZW0gd2l0aCB0aGlzIGltcGxlbWVudGF0aW9uLCByZXBvcnQgYSBidWcgYWdhaW5zdCB0aGUgYWJvdmUgc3BlY1xyXG5cdFx0XHQvLyBPciB1c2UgY3VzdG9tIG1ldGhvZHMgdG8gaW1wbGVtZW50IHlvdXIgb3duIGVtYWlsIHZhbGlkYXRpb25cclxuXHRcdFx0Ly9yZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokLy50ZXN0KHZhbHVlKTtcclxuXHJcblx0XHRcdC8vIFdlem9tRml4XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKChbYS16QS1aMC05XFwmXFwrXFwtXFw9XFxfXSkrKChcXC4oW2EtekEtWjAtOVxcJlxcK1xcLVxcPVxcX10pezEsfSkrKT8pezEsNjR9XFxAKFthLXpBLVowLTldKFthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pP1xcLikrW2EtekEtWl17Miw2fSQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdXJsLW1ldGhvZC9cclxuXHRcdHVybDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdC8vIENvcHlyaWdodCAoYykgMjAxMC0yMDEzIERpZWdvIFBlcmluaSwgTUlUIGxpY2Vuc2VkXHJcblx0XHRcdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2RwZXJpbmkvNzI5Mjk0XHJcblx0XHRcdC8vIHNlZSBhbHNvIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9kZW1vL3VybC1yZWdleFxyXG5cdFx0XHQvLyBtb2RpZmllZCB0byBhbGxvdyBwcm90b2NvbC1yZWxhdGl2ZSBVUkxzXHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykoPzpcXC4oPzpbYS16XFx1MDBhMS1cXHVmZmZmMC05XS0qKSpbYS16XFx1MDBhMS1cXHVmZmZmMC05XSspKig/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfSkpLj8pKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaS50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RhdGUtbWV0aG9kL1xyXG5cdFx0ZGF0ZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgIS9JbnZhbGlkfE5hTi8udGVzdChuZXcgRGF0ZSh2YWx1ZSkudG9TdHJpbmcoKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9kYXRlSVNPLW1ldGhvZC9cclxuXHRcdGRhdGVJU086IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eXFxkezR9W1xcL1xcLV0oMD9bMS05XXwxWzAxMl0pW1xcL1xcLV0oMD9bMS05XXxbMTJdWzAtOV18M1swMV0pJC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9udW1iZXItbWV0aG9kL1xyXG5cdFx0bnVtYmVyOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RpZ2l0cy1tZXRob2QvXHJcblx0XHRkaWdpdHM6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eXFxkKyQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvY3JlZGl0Y2FyZC1tZXRob2QvXHJcblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0x1aG5fYWxnb3JpdGhtXHJcblx0XHRjcmVkaXRjYXJkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25hbChlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBhY2NlcHQgb25seSBzcGFjZXMsIGRpZ2l0cyBhbmQgZGFzaGVzXHJcblx0XHRcdGlmICgvW14wLTkgXFwtXSsvLnRlc3QodmFsdWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBuQ2hlY2sgPSAwLFxyXG5cdFx0XHRcdG5EaWdpdCA9IDAsXHJcblx0XHRcdFx0YkV2ZW4gPSBmYWxzZSxcclxuXHRcdFx0XHRuLCBjRGlnaXQ7XHJcblxyXG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuXHJcblx0XHRcdC8vIEJhc2luZyBtaW4gYW5kIG1heCBsZW5ndGggb25cclxuXHRcdFx0Ly8gaHR0cDovL2RldmVsb3Blci5lYW4uY29tL2dlbmVyYWxfaW5mby9WYWxpZF9DcmVkaXRfQ2FyZF9UeXBlc1xyXG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoIDwgMTMgfHwgdmFsdWUubGVuZ3RoID4gMTkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAobiA9IHZhbHVlLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcblx0XHRcdFx0Y0RpZ2l0ID0gdmFsdWUuY2hhckF0KG4pO1xyXG5cdFx0XHRcdG5EaWdpdCA9IHBhcnNlSW50KGNEaWdpdCwgMTApO1xyXG5cdFx0XHRcdGlmIChiRXZlbikge1xyXG5cdFx0XHRcdFx0aWYgKChuRGlnaXQgKj0gMikgPiA5KSB7XHJcblx0XHRcdFx0XHRcdG5EaWdpdCAtPSA5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRuQ2hlY2sgKz0gbkRpZ2l0O1xyXG5cdFx0XHRcdGJFdmVuID0gIWJFdmVuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKG5DaGVjayAlIDEwKSA9PT0gMDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL21pbmxlbmd0aC1tZXRob2QvXHJcblx0XHRtaW5sZW5ndGg6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgbGVuZ3RoID0gJC5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLmxlbmd0aCA6IHRoaXMuZ2V0TGVuZ3RoKHZhbHVlLCBlbGVtZW50KTtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgbGVuZ3RoID49IHBhcmFtO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWF4bGVuZ3RoLW1ldGhvZC9cclxuXHRcdG1heGxlbmd0aDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgodmFsdWUsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBsZW5ndGggPD0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yYW5nZWxlbmd0aC1tZXRob2QvXHJcblx0XHRyYW5nZWxlbmd0aDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgodmFsdWUsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAobGVuZ3RoID49IHBhcmFtWzBdICYmIGxlbmd0aCA8PSBwYXJhbVsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9taW4tbWV0aG9kL1xyXG5cdFx0bWluOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUgPj0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9tYXgtbWV0aG9kL1xyXG5cdFx0bWF4OiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUgPD0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yYW5nZS1tZXRob2QvXHJcblx0XHRyYW5nZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8ICh2YWx1ZSA+PSBwYXJhbVswXSAmJiB2YWx1ZSA8PSBwYXJhbVsxXSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9lcXVhbFRvLW1ldGhvZC9cclxuXHRcdGVxdWFsVG86IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHQvLyBiaW5kIHRvIHRoZSBibHVyIGV2ZW50IG9mIHRoZSB0YXJnZXQgaW4gb3JkZXIgdG8gcmV2YWxpZGF0ZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGZpZWxkIGlzIHVwZGF0ZWRcclxuXHRcdFx0Ly8gVE9ETyBmaW5kIGEgd2F5IHRvIGJpbmQgdGhlIGV2ZW50IGp1c3Qgb25jZSwgYXZvaWRpbmcgdGhlIHVuYmluZC1yZWJpbmQgb3ZlcmhlYWRcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQocGFyYW0pO1xyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5vbmZvY3Vzb3V0KSB7XHJcblx0XHRcdFx0dGFyZ2V0Lm9mZihcIi52YWxpZGF0ZS1lcXVhbFRvXCIpLm9uKFwiYmx1ci52YWxpZGF0ZS1lcXVhbFRvXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JChlbGVtZW50KS52YWxpZCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0LnZhbCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmVtb3RlLW1ldGhvZC9cclxuXHRcdHJlbW90ZTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbmFsKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcHJldmlvdXMgPSB0aGlzLnByZXZpb3VzVmFsdWUoZWxlbWVudCksXHJcblx0XHRcdFx0dmFsaWRhdG9yLCBkYXRhO1xyXG5cclxuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0pIHtcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgPSB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0ucmVtb3RlO1xyXG5cdFx0XHR0aGlzLnNldHRpbmdzLm1lc3NhZ2VzW2VsZW1lbnQubmFtZV0ucmVtb3RlID0gcHJldmlvdXMubWVzc2FnZTtcclxuXHJcblx0XHRcdHBhcmFtID0gdHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiICYmIHsgdXJsOiBwYXJhbSB9IHx8IHBhcmFtO1xyXG5cclxuXHRcdFx0aWYgKHByZXZpb3VzLm9sZCA9PT0gdmFsdWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJldmlvdXMudmFsaWQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHByZXZpb3VzLm9sZCA9IHZhbHVlO1xyXG5cdFx0XHR2YWxpZGF0b3IgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLnN0YXJ0UmVxdWVzdChlbGVtZW50KTtcclxuXHRcdFx0ZGF0YSA9IHt9O1xyXG5cdFx0XHRkYXRhW2VsZW1lbnQubmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0JC5hamF4KCQuZXh0ZW5kKHRydWUsIHtcclxuXHRcdFx0XHRtb2RlOiBcImFib3J0XCIsXHJcblx0XHRcdFx0cG9ydDogXCJ2YWxpZGF0ZVwiICsgZWxlbWVudC5uYW1lLFxyXG5cdFx0XHRcdGRhdGFUeXBlOiBcImpzb25cIixcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRleHQ6IHZhbGlkYXRvci5jdXJyZW50Rm9ybSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dmFyIHZhbGlkID0gcmVzcG9uc2UgPT09IHRydWUgfHwgcmVzcG9uc2UgPT09IFwidHJ1ZVwiLFxyXG5cdFx0XHRcdFx0XHRlcnJvcnMsIG1lc3NhZ2UsIHN1Ym1pdHRlZDtcclxuXHJcblx0XHRcdFx0XHR2YWxpZGF0b3Iuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXS5yZW1vdGUgPSBwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2U7XHJcblx0XHRcdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRcdFx0c3VibWl0dGVkID0gdmFsaWRhdG9yLmZvcm1TdWJtaXR0ZWQ7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5wcmVwYXJlRWxlbWVudChlbGVtZW50KTtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLmZvcm1TdWJtaXR0ZWQgPSBzdWJtaXR0ZWQ7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5zdWNjZXNzTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHRkZWxldGUgdmFsaWRhdG9yLmludmFsaWRbZWxlbWVudC5uYW1lXTtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGVycm9ycyA9IHt9O1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2UgfHwgdmFsaWRhdG9yLmRlZmF1bHRNZXNzYWdlKGVsZW1lbnQsIFwicmVtb3RlXCIpO1xyXG5cdFx0XHRcdFx0XHRlcnJvcnNbZWxlbWVudC5uYW1lXSA9IHByZXZpb3VzLm1lc3NhZ2UgPSAkLmlzRnVuY3Rpb24obWVzc2FnZSkgPyBtZXNzYWdlKHZhbHVlKSA6IG1lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5pbnZhbGlkW2VsZW1lbnQubmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3Iuc2hvd0Vycm9ycyhlcnJvcnMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cHJldmlvdXMudmFsaWQgPSB2YWxpZDtcclxuXHRcdFx0XHRcdHZhbGlkYXRvci5zdG9wUmVxdWVzdChlbGVtZW50LCB2YWxpZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCBwYXJhbSkpO1xyXG5cdFx0XHRyZXR1cm4gXCJwZW5kaW5nXCI7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGFkZGl0aW9uYWwtbWV0aGhvZHNcclxuXHJcblx0XHRwYXR0ZXJuOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9uYWwoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHBhcmFtID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cGFyYW0gPSBuZXcgUmVnRXhwKFwiXig/OlwiICsgcGFyYW0gKyBcIikkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBwYXJhbS50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gV2V6b21SdWxlc1xyXG5cclxuXHRcdHBhc3N3b3JkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlxcUy4qJC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGVzaXplOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIGtiID0gMDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0a2IgKz0gZWxlbWVudC5maWxlc1tpXS5zaXplO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IChrYiAvIDEwMjQgPD0gcGFyYW0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWxlc2l6ZUVhY2g6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgZmxhZyA9IHRydWU7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5maWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChlbGVtZW50LmZpbGVzW2ldLnNpemUgLyAxMDI0ID4gcGFyYW0pIHtcclxuXHRcdFx0XHRcdGZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAoZmxhZyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGV0eXBlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIHJlc3VsdDtcclxuXHRcdFx0cGFyYW0gPSB0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIgPyBwYXJhbS5yZXBsYWNlKC8sL2csIFwifFwiKSA6IFwicG5nfGpwZT9nfGRvY3xwZGZ8Z2lmfHppcHxyYXJ8dGFyfGh0bWx8c3dmfHR4dHx4bHN8ZG9jeHx4bHN4fG9kdFwiO1xyXG5cdFx0XHRpZiAoZWxlbWVudC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBmaWxlcyA9IGVsZW1lbnQuZmlsZXM7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIHZhbHVlID0gZmlsZXNbaV0ubmFtZTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChcIi4oXCIgKyBwYXJhbSArIFwiKSRcIiwgXCJpXCIpKTtcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IHZhbHVlLm1hdGNoKG5ldyBSZWdFeHAoXCIuKFwiICsgcGFyYW0gKyBcIikkXCIsIFwiaVwiKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0b3I6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgJG1vZHVsZSA9ICQoZWxlbWVudCkucGFyZW50cygnLmpzLWZvcm0nKTtcclxuXHRcdFx0cmV0dXJuICRtb2R1bGUuZmluZCgnLicgKyBwYXJhbSArICc6ZmlsbGVkJykubGVuZ3RoO1xyXG5cdFx0fSxcclxuXHJcblx0XHR3b3JkOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXlthLXpBLVrQsC3Rj9CQLdCv0ZbQhtGX0IfRlNGR0IHQhNKR0pBcXCdcXGBcXC0gXSokLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9naW46IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eWzAtOWEtekEtWtCwLdGP0JAt0K/RltCG0ZfQh9GU0ITRkdCB0pHSkF1bMC05YS16QS1a0LAt0Y/QkC3Qr9GW0IbRl9CH0ZTQhNKR0pBcXC1cXC5fXSskLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cGhvbmVVQTogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKCgoXFwrPykoMzgpKVxccz8pPygoWzAtOV17M30pfChcXChbMC05XXszfVxcKSkpKFxcLXxcXHMpPygoWzAtOV17M30pKFxcLXxcXHMpPyhbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezJ9KXwoWzAtOV17Mn0pKFxcLXxcXHMpPyhbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezN9KXwoWzAtOV17Mn0pKFxcLXxcXHMpPyhbMC05XXszfSkoXFwtfFxccyk/KFswLTldezJ9KSkkLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dmFsaWRUcnVlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuZGF0YSgndmFsaWQnKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxufSk7XHJcblxyXG4vLyBhamF4IG1vZGU6IGFib3J0XHJcbi8vIHVzYWdlOiAkLmFqYXgoeyBtb2RlOiBcImFib3J0XCJbLCBwb3J0OiBcInVuaXF1ZXBvcnRcIl19KTtcclxuLy8gaWYgbW9kZTpcImFib3J0XCIgaXMgdXNlZCwgdGhlIHByZXZpb3VzIHJlcXVlc3Qgb24gdGhhdCBwb3J0IChwb3J0IGNhbiBiZSB1bmRlZmluZWQpIGlzIGFib3J0ZWQgdmlhIFhNTEh0dHBSZXF1ZXN0LmFib3J0KClcclxuXHJcbnZhciBwZW5kaW5nUmVxdWVzdHMgPSB7fSxcclxuXHRhamF4O1xyXG4vLyBVc2UgYSBwcmVmaWx0ZXIgaWYgYXZhaWxhYmxlICgxLjUrKVxyXG5pZiAoJC5hamF4UHJlZmlsdGVyKSB7XHJcblx0JC5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKHNldHRpbmdzLCBfLCB4aHIpIHtcclxuXHRcdHZhciBwb3J0ID0gc2V0dGluZ3MucG9ydDtcclxuXHRcdGlmIChzZXR0aW5ncy5tb2RlID09PSBcImFib3J0XCIpIHtcclxuXHRcdFx0aWYgKHBlbmRpbmdSZXF1ZXN0c1twb3J0XSkge1xyXG5cdFx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XS5hYm9ydCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XSA9IHhocjtcclxuXHRcdH1cclxuXHR9KTtcclxufSBlbHNlIHtcclxuXHQvLyBQcm94eSBhamF4XHJcblx0YWpheCA9ICQuYWpheDtcclxuXHQkLmFqYXggPSBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cdFx0dmFyIG1vZGUgPSAoXCJtb2RlXCIgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncyA6ICQuYWpheFNldHRpbmdzKS5tb2RlLFxyXG5cdFx0XHRwb3J0ID0gKFwicG9ydFwiIGluIHNldHRpbmdzID8gc2V0dGluZ3MgOiAkLmFqYXhTZXR0aW5ncykucG9ydDtcclxuXHRcdGlmIChtb2RlID09PSBcImFib3J0XCIpIHtcclxuXHRcdFx0aWYgKHBlbmRpbmdSZXF1ZXN0c1twb3J0XSkge1xyXG5cdFx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XS5hYm9ydCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1twb3J0XSA9IGFqYXguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIHBlbmRpbmdSZXF1ZXN0c1twb3J0XTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhamF4LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxufVxyXG5cclxufSkpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvdmVuZG9yL2pxdWVyeS12YWxpZGF0ZS5qc1xuICoqLyIsIi8qISBqUXVlcnkgdjIuMi40IHwgKGMpIGpRdWVyeSBGb3VuZGF0aW9uIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXHJcbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9YS5kb2N1bWVudCxlPWMuc2xpY2UsZj1jLmNvbmNhdCxnPWMucHVzaCxoPWMuaW5kZXhPZixpPXt9LGo9aS50b1N0cmluZyxrPWkuaGFzT3duUHJvcGVydHksbD17fSxtPVwiMi4yLjRcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmUuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpnLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3ZhciBiPWEmJmEudG9TdHJpbmcoKTtyZXR1cm4hbi5pc0FycmF5KGEpJiZiLXBhcnNlRmxvYXQoYikrMT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtpZihcIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpKXJldHVybiExO2lmKGEuY29uc3RydWN0b3ImJiFrLmNhbGwoYSxcImNvbnN0cnVjdG9yXCIpJiYhay5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlfHx7fSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITE7Zm9yKGIgaW4gYSk7cmV0dXJuIHZvaWQgMD09PWJ8fGsuY2FsbChhLGIpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2lbai5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxkLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTA7aWYocyhhKSl7Zm9yKGM9YS5sZW5ndGg7Yz5kO2QrKylpZihiLmNhbGwoYVtkXSxkLGFbZF0pPT09ITEpYnJlYWt9ZWxzZSBmb3IoZCBpbiBhKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpnLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6aC5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZz0wLGg9W107aWYocyhhKSlmb3IoZD1hLmxlbmd0aDtkPmc7ZysrKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO2Vsc2UgZm9yKGcgaW4gYSllPWIoYVtnXSxnLGMpLG51bGwhPWUmJmgucHVzaChlKTtyZXR1cm4gZi5hcHBseShbXSxoKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZD1lLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGQuY29uY2F0KGUuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omx9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihuLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2lbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMTpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1nYSgpLHo9Z2EoKSxBPWdhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPVwiXFxcXFtcIitMK1wiKihcIitNK1wiKSg/OlwiK0wrXCIqKFsqXiR8IX5dPz0pXCIrTCtcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK00rXCIpKXwpXCIrTCtcIipcXFxcXVwiLE89XCI6KFwiK00rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK04rXCIpKil8LiopXFxcXCl8KVwiLFA9bmV3IFJlZ0V4cChMK1wiK1wiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrTCtcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTCtcIiskXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiKixcIitMK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiooWz4rfl18XCIrTCtcIilcIitMK1wiKlwiKSxUPW5ldyBSZWdFeHAoXCI9XCIrTCtcIiooW15cXFxcXSdcXFwiXSo/KVwiK0wrXCIqXFxcXF1cIixcImdcIiksVT1uZXcgUmVnRXhwKE8pLFY9bmV3IFJlZ0V4cChcIl5cIitNK1wiJFwiKSxXPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitNK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitOKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitPKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitMK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTCtcIiooPzooWystXXwpXCIrTCtcIiooXFxcXGQrKXwpKVwiK0wrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSytcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0wrXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0wrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0wrXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFg9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxZPS9eaFxcZCQvaSxaPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sJD0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxfPS9bK35dLyxhYT0vJ3xcXFxcL2csYmE9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksY2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZGE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGVhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBmYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHc9YiYmYi5vd25lckRvY3VtZW50LHg9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT14JiY5IT09eCYmMTEhPT14KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09eCYmKG89JC5leGVjKGEpKSlpZihmPW9bMV0pe2lmKDk9PT14KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYodyYmKGo9dy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYob1syXSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9b1szXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXgpdz1iLHM9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGFhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLHI9ZyhhKSxoPXIubGVuZ3RoLGw9Vi50ZXN0KGspP1wiI1wiK2s6XCJbaWQ9J1wiK2srXCInXVwiO3doaWxlKGgtLSlyW2hdPWwrXCIgXCIrcWEocltoXSk7cz1yLmpvaW4oXCIsXCIpLHc9Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxifWlmKHMpdHJ5e3JldHVybiBILmFwcGx5KGQsdy5xdWVyeVNlbGVjdG9yQWxsKHMpKSxkfWNhdGNoKHkpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFEsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBoYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGlhKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxDKS0ofmEuc291cmNlSW5kZXh8fEMpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBsYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGhhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGhhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9ZmEuc3VwcG9ydD17fSxmPWZhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYj9cIkhUTUxcIiE9PWIubm9kZU5hbWU6ITF9LG09ZmEuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVoudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcD9iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSk6dm9pZCAwfSxyPVtdLHE9W10sKGMucXNhPVoudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGlhKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitMK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitMK1wiKig/OnZhbHVlfFwiK0srXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksaWEoZnVuY3Rpb24oYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0wrXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fHEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1aLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmlhKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCJkaXZcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixPKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVoudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFoudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9KKGssYSktSihrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0ooayxhKS1KKGssYik6MDtpZihlPT09ZilyZXR1cm4ga2EoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2thKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxmYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZhKGEsbnVsbCxudWxsLGIpfSxmYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVCxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGZhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGZhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZmEuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGZhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxmYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9ZmEuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1mYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpoYSxtYXRjaDpXLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGJhLGNhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGJhLGNhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxmYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZmYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVy5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlUudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1mYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFAsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9oYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SihhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDpoYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUSxcIiQxXCIpKTtyZXR1cm4gZFt1XT9oYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZmEoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczpoYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoYmEsY2EpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBWLnRlc3QoYXx8XCJcIil8fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om5hKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpuYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6bmEoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPWxhKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2Z1bmN0aW9uIHBhKCl7fXBhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcGEsZz1mYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1SLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1TLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFEsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVdbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9mYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHFhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiByYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGosaz1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGo9Ylt1XXx8KGJbdV09e30pLGk9altiLnVuaXF1ZUlEXXx8KGpbYi51bmlxdWVJRF09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGtbMl09aFsyXTtpZihpW2RdPWssa1syXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHNhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHRhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZmEoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHVhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9dmEoZCkpLGUmJiFlW3VdJiYoZT12YShlLGYpKSxoYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx0YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnVhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj11YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dWEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHdhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1yYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bcmEoc2EobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHZhKGk+MSYmc2EobSksaT4xJiZxYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFEsXCIkMVwiKSxjLGU+aSYmd2EoYS5zbGljZShpLGUpKSxmPmUmJndhKGE9YS5zbGljZShlKSksZj5lJiZxYShhKSl9bS5wdXNoKGMpfXJldHVybiBzYShtKX1mdW5jdGlvbiB4YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109Ri5jYWxsKGkpKTt1PXVhKHUpfUguYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZmYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aGEoZik6Zn1yZXR1cm4gaD1mYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj13YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseGEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWZhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Vy5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLF8udGVzdChqWzBdLnR5cGUpJiZvYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcWEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsIWJ8fF8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxqYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGphKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxqYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxmYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWVTb3J0PW4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSx3PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseD0vXjwoW1xcdy1dKylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8seT0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geihhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHkudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGguY2FsbChiLGEpPi0xIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdy50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQSxCPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8QSxcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpCLmV4ZWMoYSksIWV8fCFlWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8YykuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoZVsxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGVbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6ZCwhMCkpLHgudGVzdChlWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihlIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbZV0pP3RoaXNbZV0oYltlXSk6dGhpcy5hdHRyKGUsYltlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGY9ZC5nZXRFbGVtZW50QnlJZChlWzJdKSxmJiZmLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZiksdGhpcy5jb250ZXh0PWQsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0MucHJvdG90eXBlPW4uZm4sQT1uKGQpO3ZhciBEPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEU9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz13LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZVNvcnQoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2guY2FsbChuKGEpLHRoaXNbMF0pOmguY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWVTb3J0KG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEYoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIHYoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiB2KGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEVbYV18fG4udW5pcXVlU29ydChlKSxELnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRz0vXFxTKy9nO2Z1bmN0aW9uIEgoYSl7dmFyIGI9e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEcpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SChhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmPVtdLGc9W10saD0tMSxpPWZ1bmN0aW9uKCl7Zm9yKGU9YS5vbmNlLGQ9Yj0hMDtnLmxlbmd0aDtoPS0xKXtjPWcuc2hpZnQoKTt3aGlsZSgrK2g8Zi5sZW5ndGgpZltoXS5hcHBseShjWzBdLGNbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2UmJihoPWYubGVuZ3RoLGM9ITEpfWEubWVtb3J5fHwoYz0hMSksYj0hMSxlJiYoZj1jP1tdOlwiXCIpfSxqPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGMmJiFiJiYoaD1mLmxlbmd0aC0xLGcucHVzaChjKSksZnVuY3Rpb24gZChiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe24uaXNGdW5jdGlvbihjKT9hLnVuaXF1ZSYmai5oYXMoYyl8fGYucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PW4udHlwZShjKSYmZChjKX0pfShhcmd1bWVudHMpLGMmJiFiJiZpKCkpLHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsZixjKSk+LTEpZi5zcGxpY2UoYywxKSxoPj1jJiZoLS19KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsZik+LTE6Zi5sZW5ndGg+MH0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gZiYmKGY9W10pLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGY9Yz1cIlwiLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWZ9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gZT1nPVtdLGN8fChmPWM9XCJcIiksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuISFlfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiBlfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGcucHVzaChjKSxifHxpKCkpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gai5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4gan0sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkucHJvZ3Jlc3MoYy5ub3RpZnkpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZS5jYWxsKGFyZ3VtZW50cyksZD1jLmxlbmd0aCxmPTEhPT1kfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9kOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2UuY2FsbChhcmd1bWVudHMpOmQsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihkPjEpZm9yKGk9bmV3IEFycmF5KGQpLGo9bmV3IEFycmF5KGQpLGs9bmV3IEFycmF5KGQpO2Q+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkucHJvZ3Jlc3MoaChiLGosaSkpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBJO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChJLnJlc29sdmVXaXRoKGQsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihkKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4oZCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gSigpe2QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSiksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gSXx8KEk9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQobi5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSikpKSxJLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBLPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKUsoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sTD1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE0oKXt0aGlzLmV4cGFuZG89bi5leHBhbmRvK00udWlkKyt9TS51aWQ9MSxNLnByb3RvdHlwZT17cmVnaXN0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHx7fTtyZXR1cm4gYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YzpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmMsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksYVt0aGlzLmV4cGFuZG9dfSxjYWNoZTpmdW5jdGlvbihhKXtpZighTChhKSlyZXR1cm57fTt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIGJ8fChiPXt9LEwoYSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1iOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSkpLGJ9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmNhY2hlKGEpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWVbYl09YztlbHNlIGZvcihkIGluIGIpZVtkXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWFbdGhpcy5leHBhbmRvXTtpZih2b2lkIDAhPT1mKXtpZih2b2lkIDA9PT1iKXRoaXMucmVnaXN0ZXIoYSk7ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZj9kPVtiLGVdOihkPWUsZD1kIGluIGY/W2RdOmQubWF0Y2goRyl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGZbZFtjXV19KHZvaWQgMD09PWJ8fG4uaXNFbXB0eU9iamVjdChmKSkmJihhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGFbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09YiYmIW4uaXNFbXB0eU9iamVjdChiKX19O3ZhciBOPW5ldyBNLE89bmV3IE0sUD0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUT0vW0EtWl0vZztmdW5jdGlvbiBSKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOlAudGVzdChjKT9uLnBhcnNlSlNPTihjKTpjO1xyXG59Y2F0Y2goZSl7fU8uc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBPLmhhc0RhdGEoYSl8fE4uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE8uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTi5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe04ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1PLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU4uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxSKGYsZCxlW2RdKSkpO04uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Ty5zZXQodGhpcyxhKX0pOksodGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9Ty5nZXQoZixhKXx8Ty5nZXQoZixhLnJlcGxhY2UoUSxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGQ9bi5jYW1lbENhc2UoYSksYz1PLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1SKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSBkPW4uY2FtZWxDYXNlKGEpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU8uZ2V0KHRoaXMsZCk7Ty5zZXQodGhpcyxkLGIpLGEuaW5kZXhPZihcIi1cIik+LTEmJnZvaWQgMCE9PWMmJk8uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtPLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1OLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9Ti5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTi5nZXQoYSxjKXx8Ti5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe04ucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPU4uZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFM9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFQ9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrUytcIikoW2EteiVdKikkXCIsXCJpXCIpLFU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFY9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX07ZnVuY3Rpb24gVyhhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gbi5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChuLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0obi5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmVC5leGVjKG4uY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsbi5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgWD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxZPS88KFtcXHc6LV0rKS8sWj0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLCQ9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTskLm9wdGdyb3VwPSQub3B0aW9uLCQudGJvZHk9JC50Zm9vdD0kLmNvbGdyb3VwPSQuY2FwdGlvbj0kLnRoZWFkLCQudGg9JC50ZDtmdW5jdGlvbiBfKGEsYil7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBhYShhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylOLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxOLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIGJhPS88fCYjP1xcdys7LztmdW5jdGlvbiBjYShhLGIsYyxkLGUpe2Zvcih2YXIgZixnLGgsaSxqLGssbD1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxtPVtdLG89MCxwPWEubGVuZ3RoO3A+bztvKyspaWYoZj1hW29dLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZikpbi5tZXJnZShtLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYoYmEudGVzdChmKSl7Zz1nfHxsLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaD0oWS5leGVjKGYpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxpPSRbaF18fCQuX2RlZmF1bHQsZy5pbm5lckhUTUw9aVsxXStuLmh0bWxQcmVmaWx0ZXIoZikraVsyXSxrPWlbMF07d2hpbGUoay0tKWc9Zy5sYXN0Q2hpbGQ7bi5tZXJnZShtLGcuY2hpbGROb2RlcyksZz1sLmZpcnN0Q2hpbGQsZy50ZXh0Q29udGVudD1cIlwifWVsc2UgbS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2wudGV4dENvbnRlbnQ9XCJcIixvPTA7d2hpbGUoZj1tW28rK10paWYoZCYmbi5pbkFycmF5KGYsZCk+LTEpZSYmZS5wdXNoKGYpO2Vsc2UgaWYoaj1uLmNvbnRhaW5zKGYub3duZXJEb2N1bWVudCxmKSxnPV8obC5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxqJiZhYShnKSxjKXtrPTA7d2hpbGUoZj1nW2srK10pWi50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGwuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixsLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIGRhPS9ea2V5LyxlYT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sZmE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBnYSgpe3JldHVybiEwfWZ1bmN0aW9uIGhhKCl7cmV0dXJuITF9ZnVuY3Rpb24gaWEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIGphKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYilqYShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPWhhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9bi5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1OLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG4mJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uaGFzRGF0YShhKSYmTi5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9ZmEuZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiZOLnJlbW92ZShhLFwiaGFuZGxlIGV2ZW50c1wiKX19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxkLGYsZyxoPVtdLGk9ZS5jYWxsKGFyZ3VtZW50cyksaj0oTi5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSlhLnJuYW1lc3BhY2UmJiFhLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZD0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZCYmKGEucmVzdWx0PWQpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT4tMTpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBkZXRhaWwgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZz1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxkLGU9Yy5kb2N1bWVudEVsZW1lbnQsZj1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGUmJmUuc2Nyb2xsTGVmdHx8ZiYmZi5zY3JvbGxMZWZ0fHwwKS0oZSYmZS5jbGllbnRMZWZ0fHxmJiZmLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhlJiZlLnNjcm9sbFRvcHx8ZiYmZi5zY3JvbGxUb3B8fDApLShlJiZlLmNsaWVudFRvcHx8ZiYmZi5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1nfHwoYS53aGljaD0xJmc/MToyJmc/Mzo0Jmc/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGUsZj1hLnR5cGUsZz1hLGg9dGhpcy5maXhIb29rc1tmXTtofHwodGhpcy5maXhIb29rc1tmXT1oPWVhLnRlc3QoZik/dGhpcy5tb3VzZUhvb2tzOmRhLnRlc3QoZik/dGhpcy5rZXlIb29rczp7fSksZT1oLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGgucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChnKSxiPWUubGVuZ3RoO3doaWxlKGItLSljPWVbYl0sYVtjXT1nW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWQpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGguZmlsdGVyP2guZmlsdGVyKGEsZyk6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1pYSgpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1pYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9nYTpoYSk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpuLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpoYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpoYSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Z2EsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8bi5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBqYSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX19KTt2YXIga2E9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzotXSspW14+XSopXFwvPi9naSxsYT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxtYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLG5hPS9edHJ1ZVxcLyguKikvLG9hPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBwYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBxYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiByYShhKXt2YXIgYj1uYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gc2EoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihOLmhhc0RhdGEoYSkmJihmPU4uYWNjZXNzKGEpLGc9Ti5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfU8uaGFzRGF0YShhKSYmKGg9Ty5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxPLnNldChiLGkpKX19ZnVuY3Rpb24gdGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmWC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIHVhKGEsYixjLGQpe2I9Zi5hcHBseShbXSxiKTt2YXIgZSxnLGgsaSxqLGssbT0wLG89YS5sZW5ndGgscD1vLTEscT1iWzBdLHI9bi5pc0Z1bmN0aW9uKHEpO2lmKHJ8fG8+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFsLmNoZWNrQ2xvbmUmJm1hLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3ImJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSx1YShmLGIsYyxkKX0pO2lmKG8mJihlPWNhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZz1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWcpLGd8fGQpKXtmb3IoaD1uLm1hcChfKGUsXCJzY3JpcHRcIikscWEpLGk9aC5sZW5ndGg7bz5tO20rKylqPWUsbSE9PXAmJihqPW4uY2xvbmUoaiwhMCwhMCksaSYmbi5tZXJnZShoLF8oaixcInNjcmlwdFwiKSkpLGMuY2FsbChhW21dLGosbSk7aWYoaSlmb3Ioaz1oW2gubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoaCxyYSksbT0wO2k+bTttKyspaj1oW21dLFoudGVzdChqLnR5cGV8fFwiXCIpJiYhTi5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoayxqKSYmKGouc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoai5zcmMpOm4uZ2xvYmFsRXZhbChqLnRleHRDb250ZW50LnJlcGxhY2Uob2EsXCJcIikpKX1yZXR1cm4gYX1mdW5jdGlvbiB2YShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9uLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8bi5jbGVhbkRhdGEoXyhkKSksZC5wYXJlbnROb2RlJiYoYyYmbi5jb250YWlucyhkLm93bmVyRG9jdW1lbnQsZCkmJmFhKF8oZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1uLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKGthLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGwubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPV8oaCksZj1fKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspdGEoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8XyhhKSxnPWd8fF8oaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylzYShmW2RdLGdbZF0pO2Vsc2Ugc2EoYSxoKTtyZXR1cm4gZz1fKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmYWEoZywhaSYmXyhhLFwic2NyaXB0XCIpKSxofSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlPW4uZXZlbnQuc3BlY2lhbCxmPTA7dm9pZCAwIT09KGM9YVtmXSk7ZisrKWlmKEwoYykpe2lmKGI9Y1tOLmV4cGFuZG9dKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cyllW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO2NbTi5leHBhbmRvXT12b2lkIDB9Y1tPLmV4cGFuZG9dJiYoY1tPLmV4cGFuZG9dPXZvaWQgMCl9fX0pLG4uZm4uZXh0ZW5kKHtkb21NYW5pcDp1YSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHZhKHRoaXMsYSwhMCl9LHJlbW92ZTpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhKX0sdGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHwodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9cGEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShfKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFsYS50ZXN0KGEpJiYhJFsoWS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9bi5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1bXTtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYil7dmFyIGM9dGhpcy5wYXJlbnROb2RlO24uaW5BcnJheSh0aGlzLGEpPDAmJihuLmNsZWFuRGF0YShfKHRoaXMpKSxjJiZjLnJlcGxhY2VDaGlsZChiLHRoaXMpKX0sYSl9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZj1lLmxlbmd0aC0xLGg9MDtmPj1oO2grKyljPWg9PT1mP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxnLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciB3YSx4YT17SFRNTDpcImJsb2NrXCIsQk9EWTpcImJsb2NrXCJ9O2Z1bmN0aW9uIHlhKGEsYil7dmFyIGM9bihiLmNyZWF0ZUVsZW1lbnQoYSkpLmFwcGVuZFRvKGIuYm9keSksZD1uLmNzcyhjWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gYy5kZXRhY2goKSxkfWZ1bmN0aW9uIHphKGEpe3ZhciBiPWQsYz14YVthXTtyZXR1cm4gY3x8KGM9eWEoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fCh3YT0od2F8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj13YVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXlhKGEsYiksd2EuZGV0YWNoKCkpLHhhW2FdPWMpLGN9dmFyIEFhPS9ebWFyZ2luLyxCYT1uZXcgUmVnRXhwKFwiXihcIitTK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLENhPWZ1bmN0aW9uKGIpe3ZhciBjPWIub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gYyYmYy5vcGVuZXJ8fChjPWEpLGMuZ2V0Q29tcHV0ZWRTdHlsZShiKX0sRGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9LEVhPWQuZG9jdW1lbnRFbGVtZW50OyFmdW5jdGlvbigpe3ZhciBiLGMsZSxmLGc9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGg9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGguc3R5bGUpe2guc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGguY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWguc3R5bGUuYmFja2dyb3VuZENsaXAsZy5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixnLmFwcGVuZENoaWxkKGgpO2Z1bmN0aW9uIGkoKXtoLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixoLmlubmVySFRNTD1cIlwiLEVhLmFwcGVuZENoaWxkKGcpO3ZhciBkPWEuZ2V0Q29tcHV0ZWRTdHlsZShoKTtiPVwiMSVcIiE9PWQudG9wLGY9XCIycHhcIj09PWQubWFyZ2luTGVmdCxjPVwiNHB4XCI9PT1kLndpZHRoLGguc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixlPVwiNHB4XCI9PT1kLm1hcmdpblJpZ2h0LEVhLnJlbW92ZUNoaWxkKGcpfW4uZXh0ZW5kKGwse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gaSgpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxjfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmkoKSxlfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGZ9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWguYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWguc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGguc3R5bGUud2lkdGg9XCIxcHhcIixFYS5hcHBlbmRDaGlsZChnKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjKS5tYXJnaW5SaWdodCksRWEucmVtb3ZlQ2hpbGQoZyksaC5yZW1vdmVDaGlsZChjKSxifX0pfX0oKTtmdW5jdGlvbiBGYShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fENhKGEpLGc9Yz9jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl06dm9pZCAwLFwiXCIhPT1nJiZ2b2lkIDAhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSxjJiYhbC5waXhlbE1hcmdpblJpZ2h0KCkmJkJhLnRlc3QoZykmJkFhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9Ziksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiBHYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgSGE9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLElhPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxKYT17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEthPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXSxMYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7ZnVuY3Rpb24gTWEoYSl7aWYoYSBpbiBMYSlyZXR1cm4gYTt2YXIgYj1hWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSxjPUthLmxlbmd0aDt3aGlsZShjLS0paWYoYT1LYVtjXStiLGEgaW4gTGEpcmV0dXJuIGF9ZnVuY3Rpb24gTmEoYSxiLGMpe3ZhciBkPVQuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMl0tKGN8fDApKSsoZFszXXx8XCJweFwiKTpifWZ1bmN0aW9uIE9hKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytVW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1VbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1VbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBQYShhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj1DYShhKSxnPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9RmEoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSxCYS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGwuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStPYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9ZnVuY3Rpb24gUWEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109Ti5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlYoZCkmJihmW2ddPU4uYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsemEoZC5ub2RlTmFtZSkpKSk6KGU9VihkKSxcIm5vbmVcIj09PWMmJmV8fE4uc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9RmEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPVQuZXhlYyhjKSkmJmVbMV0mJihjPVcoYSxiLGUpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiPT09ZiYmKGMrPWUmJmVbM118fChuLmNzc051bWJlcltoXT9cIlwiOlwicHhcIikpLGwuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09TWEoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9RmEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBKYSYmKGU9SmFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP0hhLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9EYShhLElhLGZ1bmN0aW9uKCl7cmV0dXJuIFBhKGEsYixkKX0pOlBhKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGUsZj1kJiZDYShhKSxnPWQmJk9hKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpLGYpO3JldHVybiBnJiYoZT1ULmV4ZWMoYykpJiZcInB4XCIhPT0oZVszXXx8XCJweFwiKSYmKGEuc3R5bGVbYl09YyxjPW4uY3NzKGEsYikpLE5hKGEsYyxnKX19fSksbi5jc3NIb29rcy5tYXJnaW5MZWZ0PUdhKGwucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/KHBhcnNlRmxvYXQoRmEoYSxcIm1hcmdpbkxlZnRcIikpfHxhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtRGEoYSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwiOnZvaWQgMH0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9R2EobC5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/RGEoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxGYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErVVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxBYS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1OYSl9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPUNhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBRYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1YodGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBSYShhLGIsYyxkLGUpe3JldHVybiBuZXcgUmEucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPVJhLFJhLnByb3RvdHlwZT17Y29uc3RydWN0b3I6UmEsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8bi5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpSYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1SYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LFJhLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1SYS5wcm90b3R5cGUsUmEucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiAxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsIT1hLmVsZW1bYS5wcm9wXSYmbnVsbD09YS5lbGVtLnN0eWxlW2EucHJvcF0/YS5lbGVtW2EucHJvcF06KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOjEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGw9PWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dJiYhbi5jc3NIb29rc1thLnByb3BdP2EuZWxlbVthLnByb3BdPWEubm93Om4uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpfX19LFJhLnByb3BIb29rcy5zY3JvbGxUb3A9UmEucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LG4uZng9UmEucHJvdG90eXBlLmluaXQsbi5meC5zdGVwPXt9O3ZhciBTYSxUYSxVYT0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sVmE9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBXYSgpe3JldHVybiBhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtTYT12b2lkIDB9KSxTYT1uLm5vdygpfWZ1bmN0aW9uIFhhKGEsYil7dmFyIGMsZD0wLGU9e2hlaWdodDphfTtmb3IoYj1iPzE6MDs0PmQ7ZCs9Mi1iKWM9VVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBZYShhLGIsYyl7Zm9yKHZhciBkLGU9KF9hLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KF9hLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7Zz5mO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gWmEoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD10aGlzLG09e30sbz1hLnN0eWxlLHA9YS5ub2RlVHlwZSYmVihhKSxxPU4uZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bi5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbC5hbHdheXMoZnVuY3Rpb24oKXtsLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxuLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtvLm92ZXJmbG93LG8ub3ZlcmZsb3dYLG8ub3ZlcmZsb3dZXSxqPW4uY3NzKGEsXCJkaXNwbGF5XCIpLGs9XCJub25lXCI9PT1qP04uZ2V0KGEsXCJvbGRkaXNwbGF5XCIpfHx6YShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixsLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sVWEuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bVtkXT1xJiZxW2RdfHxuLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihuLmlzRW1wdHlPYmplY3QobSkpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/emEoYS5ub2RlTmFtZSk6aikmJihvLmRpc3BsYXk9aik7ZWxzZXtxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1OLmFjY2VzcyhhLFwiZnhzaG93XCIse30pLGYmJihxLmhpZGRlbj0hcCkscD9uKGEpLnNob3coKTpsLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLGwuZG9uZShmdW5jdGlvbigpe3ZhciBiO04ucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGIgaW4gbSluLnN0eWxlKGEsYixtW2JdKX0pO2ZvcihkIGluIG0pZz1ZYShwP3FbZF06MCxkLGwpLGQgaW4gcXx8KHFbZF09Zy5zdGFydCxwJiYoZy5lbmQ9Zy5zdGFydCxnLnN0YXJ0PVwid2lkdGhcIj09PWR8fFwiaGVpZ2h0XCI9PT1kPzE6MCkpfX1mdW5jdGlvbiAkYShhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPW4uY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sbi5pc0FycmF5KGYpJiYoZT1mWzFdLGY9YVtjXT1mWzBdKSxjIT09ZCYmKGFbZF09ZixkZWxldGUgYVtjXSksZz1uLmNzc0hvb2tzW2RdLGcmJlwiZXhwYW5kXCJpbiBnKXtmPWcuZXhwYW5kKGYpLGRlbGV0ZSBhW2RdO2ZvcihjIGluIGYpYyBpbiBhfHwoYVtjXT1mW2NdLGJbY109ZSl9ZWxzZSBiW2RdPWV9ZnVuY3Rpb24gX2EoYSxiLGMpe3ZhciBkLGUsZj0wLGc9X2EucHJlZmlsdGVycy5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1TYXx8V2EoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6bi5lYXNpbmcuX2RlZmF1bHR9LGMpLG9yaWdpbmFsUHJvcGVydGllczpiLG9yaWdpbmFsT3B0aW9uczpjLHN0YXJ0VGltZTpTYXx8V2EoKSxkdXJhdGlvbjpjLmR1cmF0aW9uLHR3ZWVuczpbXSxjcmVhdGVUd2VlbjpmdW5jdGlvbihiLGMpe3ZhciBkPW4uVHdlZW4oYSxqLm9wdHMsYixjLGoub3B0cy5zcGVjaWFsRWFzaW5nW2JdfHxqLm9wdHMuZWFzaW5nKTtyZXR1cm4gai50d2VlbnMucHVzaChkKSxkfSxzdG9wOmZ1bmN0aW9uKGIpe3ZhciBjPTAsZD1iP2oudHdlZW5zLmxlbmd0aDowO2lmKGUpcmV0dXJuIHRoaXM7Zm9yKGU9ITA7ZD5jO2MrKylqLnR3ZWVuc1tjXS5ydW4oMSk7cmV0dXJuIGI/KGgubm90aWZ5V2l0aChhLFtqLDEsMF0pLGgucmVzb2x2ZVdpdGgoYSxbaixiXSkpOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoJGEoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPV9hLnByZWZpbHRlcnNbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBuLmlzRnVuY3Rpb24oZC5zdG9wKSYmKG4uX3F1ZXVlSG9va3Moai5lbGVtLGoub3B0cy5xdWV1ZSkuc3RvcD1uLnByb3h5KGQuc3RvcCxkKSksZDtyZXR1cm4gbi5tYXAoayxZYSxqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKF9hLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBXKGMuZWxlbSxhLFQuZXhlYyhiKSxjKSxjfV19LHR3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5tYXRjaChHKTtmb3IodmFyIGMsZD0wLGU9YS5sZW5ndGg7ZT5kO2QrKyljPWFbZF0sX2EudHdlZW5lcnNbY109X2EudHdlZW5lcnNbY118fFtdLF9hLnR3ZWVuZXJzW2NdLnVuc2hpZnQoYil9LHByZWZpbHRlcnM6W1phXSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP19hLnByZWZpbHRlcnMudW5zaGlmdChhKTpfYS5wcmVmaWx0ZXJzLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsbnVsbCE9ZC5xdWV1ZSYmZC5xdWV1ZSE9PSEwfHwoZC5xdWV1ZT1cImZ4XCIpLGQub2xkPWQuY29tcGxldGUsZC5jb21wbGV0ZT1mdW5jdGlvbigpe24uaXNGdW5jdGlvbihkLm9sZCkmJmQub2xkLmNhbGwodGhpcyksZC5xdWV1ZSYmbi5kZXF1ZXVlKHRoaXMsZC5xdWV1ZSl9LGR9LG4uZm4uZXh0ZW5kKHtmYWRlVG86ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuZmlsdGVyKFYpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTpifSxhLGMsZCl9LGFuaW1hdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5pc0VtcHR5T2JqZWN0KGEpLGY9bi5zcGVlZChiLGMsZCksZz1mdW5jdGlvbigpe3ZhciBiPV9hKHRoaXMsbi5leHRlbmQoe30sYSksZik7KGV8fE4uZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1uLnRpbWVycyxnPU4uZ2V0KHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJlZhLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fG4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9Ti5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShYYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246WGEoXCJzaG93XCIpLHNsaWRlVXA6WGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlhhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihTYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLFNhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe1RhfHwoVGE9YS5zZXRJbnRlcnZhbChuLmZ4LnRpY2ssbi5meC5pbnRlcnZhbCkpfSxuLmZ4LnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFySW50ZXJ2YWwoVGEpLFRhPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj1uLmZ4P24uZnguc3BlZWRzW2JdfHxiOmIsYz1jfHxcImZ4XCIsdGhpcy5xdWV1ZShjLGZ1bmN0aW9uKGMsZCl7dmFyIGU9YS5zZXRUaW1lb3V0KGMsYik7ZC5zdG9wPWZ1bmN0aW9uKCl7YS5jbGVhclRpbWVvdXQoZSl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1kLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixsLmNoZWNrT249XCJcIiE9PWEudmFsdWUsbC5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsbC5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixsLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBhYixiYj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGU9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP2FiOnZvaWQgMCkpLHZvaWQgMCE9PWM/bnVsbD09PWM/dm9pZCBuLnJlbW92ZUF0dHIoYSxiKTplJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOihkPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFsLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEcpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxhYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1iYltiXXx8bi5maW5kLmF0dHI7YmJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPWJiW2JdLGJiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCxiYltiXT1mKSxlfX0pO3ZhciBjYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGRiPS9eKD86YXxhcmVhKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBLKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksXHJcbnZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6Y2IudGVzdChhLm5vZGVOYW1lKXx8ZGIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxsLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIGViPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIGZiKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1uLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaT0wO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYixmYih0aGlzKSkpfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJmEpe2I9YS5tYXRjaChHKXx8W107d2hpbGUoYz10aGlzW2krK10paWYoZT1mYihjKSxkPTE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZStcIiBcIikucmVwbGFjZShlYixcIiBcIikpe2c9MDt3aGlsZShmPWJbZysrXSlkLmluZGV4T2YoXCIgXCIrZitcIiBcIik8MCYmKGQrPWYrXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitmK1wiIFwiKT4tMSlkPWQucmVwbGFjZShcIiBcIitmK1wiIFwiLFwiIFwiKTtoPW4udHJpbShkKSxlIT09aCYmYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGgpfX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOm4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLGZiKHRoaXMpLGIpLGIpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsZCxlLGY7aWYoXCJzdHJpbmdcIj09PWMpe2Q9MCxlPW4odGhpcyksZj1hLm1hdGNoKEcpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlIHZvaWQgMCE9PWEmJlwiYm9vbGVhblwiIT09Y3x8KGI9ZmIodGhpcyksYiYmTi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixiKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOk4uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPTA7Yj1cIiBcIithK1wiIFwiO3doaWxlKGM9dGhpc1tkKytdKWlmKDE9PT1jLm5vZGVUeXBlJiYoXCIgXCIrZmIoYykrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpLmluZGV4T2YoYik+LTEpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGdiPS9cXHIvZyxoYj0vW1xceDIwXFx0XFxyXFxuXFxmXSsvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShnYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSkucmVwbGFjZShoYixcIiBcIil9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLChjLnNlbGVjdGVkfHxpPT09ZSkmJihsLm9wdERpc2FibGVkPyFjLmRpc2FibGVkOm51bGw9PT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKSYmKCFjLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShuLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+LTEpJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+LTE6dm9pZCAwfX0sbC5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgaWI9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO24uZXh0ZW5kKG4uZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oYixjLGUsZil7dmFyIGcsaCxpLGosbCxtLG8scD1bZXx8ZF0scT1rLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1rLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoaD1pPWU9ZXx8ZCwzIT09ZS5ub2RlVHlwZSYmOCE9PWUubm9kZVR5cGUmJiFpYi50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT4tMSYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGw9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWY/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5ybmFtZXNwYWNlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWUpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxmfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZSxjKSE9PSExKSl7aWYoIWYmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhlKSl7Zm9yKGo9by5kZWxlZ2F0ZVR5cGV8fHEsaWIudGVzdChqK3EpfHwoaD1oLnBhcmVudE5vZGUpO2g7aD1oLnBhcmVudE5vZGUpcC5wdXNoKGgpLGk9aDtpPT09KGUub3duZXJEb2N1bWVudHx8ZCkmJnAucHVzaChpLmRlZmF1bHRWaWV3fHxpLnBhcmVudFdpbmRvd3x8YSl9Zz0wO3doaWxlKChoPXBbZysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWc+MT9qOm8uYmluZFR5cGV8fHEsbT0oTi5nZXQoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJk4uZ2V0KGgsXCJoYW5kbGVcIiksbSYmbS5hcHBseShoLGMpLG09bCYmaFtsXSxtJiZtLmFwcGx5JiZMKGgpJiYoYi5yZXN1bHQ9bS5hcHBseShoLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGZ8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhTChlKXx8bCYmbi5pc0Z1bmN0aW9uKGVbcV0pJiYhbi5pc1dpbmRvdyhlKSYmKGk9ZVtsXSxpJiYoZVtsXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGVbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaSYmKGVbbF09aSkpLGIucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMH0pO24uZXZlbnQudHJpZ2dlcihkLG51bGwsYil9fSksbi5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxsLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsbC5mb2N1c2lufHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE4uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ti5hY2Nlc3MoZCxiKS0xO2U/Ti5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxOLnJlbW92ZShkLGIpKX19fSk7dmFyIGpiPWEubG9jYXRpb24sa2I9bi5ub3coKSxsYj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8bi5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgbWI9LyMuKiQvLG5iPS8oWz8mXSlfPVteJl0qLyxvYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLHBiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLHFiPS9eKD86R0VUfEhFQUQpJC8scmI9L15cXC9cXC8vLHNiPXt9LHRiPXt9LHViPVwiKi9cIi5jb25jYXQoXCIqXCIpLHZiPWQuY3JlYXRlRWxlbWVudChcImFcIik7dmIuaHJlZj1qYi5ocmVmO2Z1bmN0aW9uIHdiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIHhiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PXRiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24geWIoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIHpiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIEFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOmpiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6cGIudGVzdChqYi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6dWIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj95Yih5YihhLG4uYWpheFNldHRpbmdzKSxiKTp5YihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjp3YihzYiksYWpheFRyYW5zcG9ydDp3Yih0YiksYWpheDpmdW5jdGlvbihiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9dm9pZCAwKSxjPWN8fHt9O3ZhciBlLGYsZyxoLGksaixrLGwsbT1uLmFqYXhTZXR1cCh7fSxjKSxvPW0uY29udGV4dHx8bSxwPW0uY29udGV4dCYmKG8ubm9kZVR5cGV8fG8uanF1ZXJ5KT9uKG8pOm4uZXZlbnQscT1uLkRlZmVycmVkKCkscj1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHM9bS5zdGF0dXNDb2RlfHx7fSx0PXt9LHU9e30sdj0wLHc9XCJjYW5jZWxlZFwiLHg9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dil7aWYoIWgpe2g9e307d2hpbGUoYj1vYi5leGVjKGcpKWhbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9aFthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT12P2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdnx8KGE9dVtjXT11W2NdfHxhLHRbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdnx8KG0ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dilmb3IoYiBpbiBhKXNbYl09W3NbYl0sYVtiXV07ZWxzZSB4LmFsd2F5cyhhW3guc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHc7cmV0dXJuIGUmJmUuYWJvcnQoYikseigwLGIpLHRoaXN9fTtpZihxLnByb21pc2UoeCkuY29tcGxldGU9ci5hZGQseC5zdWNjZXNzPXguZG9uZSx4LmVycm9yPXguZmFpbCxtLnVybD0oKGJ8fG0udXJsfHxqYi5ocmVmKStcIlwiKS5yZXBsYWNlKG1iLFwiXCIpLnJlcGxhY2UocmIsamIucHJvdG9jb2wrXCIvL1wiKSxtLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8bS5tZXRob2R8fG0udHlwZSxtLmRhdGFUeXBlcz1uLnRyaW0obS5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtcIlwiXSxudWxsPT1tLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1tLnVybCxqLmhyZWY9ai5ocmVmLG0uY3Jvc3NEb21haW49dmIucHJvdG9jb2wrXCIvL1wiK3ZiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh5KXttLmNyb3NzRG9tYWluPSEwfX1pZihtLmRhdGEmJm0ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBtLmRhdGEmJihtLmRhdGE9bi5wYXJhbShtLmRhdGEsbS50cmFkaXRpb25hbCkpLHhiKHNiLG0sYyx4KSwyPT09dilyZXR1cm4geDtrPW4uZXZlbnQmJm0uZ2xvYmFsLGsmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksbS50eXBlPW0udHlwZS50b1VwcGVyQ2FzZSgpLG0uaGFzQ29udGVudD0hcWIudGVzdChtLnR5cGUpLGY9bS51cmwsbS5oYXNDb250ZW50fHwobS5kYXRhJiYoZj1tLnVybCs9KGxiLnRlc3QoZik/XCImXCI6XCI/XCIpK20uZGF0YSxkZWxldGUgbS5kYXRhKSxtLmNhY2hlPT09ITEmJihtLnVybD1uYi50ZXN0KGYpP2YucmVwbGFjZShuYixcIiQxXz1cIitrYisrKTpmKyhsYi50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIra2IrKykpLG0uaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2ZdJiZ4LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2ZdKSxuLmV0YWdbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZl0pKSwobS5kYXRhJiZtLmhhc0NvbnRlbnQmJm0uY29udGVudFR5cGUhPT0hMXx8Yy5jb250ZW50VHlwZSkmJnguc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLG0uY29udGVudFR5cGUpLHguc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLG0uZGF0YVR5cGVzWzBdJiZtLmFjY2VwdHNbbS5kYXRhVHlwZXNbMF1dP20uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09bS5kYXRhVHlwZXNbMF0/XCIsIFwiK3ViK1wiOyBxPTAuMDFcIjpcIlwiKTptLmFjY2VwdHNbXCIqXCJdKTtmb3IobCBpbiBtLmhlYWRlcnMpeC5zZXRSZXF1ZXN0SGVhZGVyKGwsbS5oZWFkZXJzW2xdKTtpZihtLmJlZm9yZVNlbmQmJihtLmJlZm9yZVNlbmQuY2FsbChvLHgsbSk9PT0hMXx8Mj09PXYpKXJldHVybiB4LmFib3J0KCk7dz1cImFib3J0XCI7Zm9yKGwgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0peFtsXShtW2xdKTtpZihlPXhiKHRiLG0sYyx4KSl7aWYoeC5yZWFkeVN0YXRlPTEsayYmcC50cmlnZ2VyKFwiYWpheFNlbmRcIixbeCxtXSksMj09PXYpcmV0dXJuIHg7bS5hc3luYyYmbS50aW1lb3V0PjAmJihpPWEuc2V0VGltZW91dChmdW5jdGlvbigpe3guYWJvcnQoXCJ0aW1lb3V0XCIpfSxtLnRpbWVvdXQpKTt0cnl7dj0xLGUuc2VuZCh0LHopfWNhdGNoKHkpe2lmKCEoMj52KSl0aHJvdyB5O3ooLTEseSl9fWVsc2UgeigtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB6KGIsYyxkLGgpe3ZhciBqLGwsdCx1LHcseT1jOzIhPT12JiYodj0yLGkmJmEuY2xlYXJUaW1lb3V0KGkpLGU9dm9pZCAwLGc9aHx8XCJcIix4LnJlYWR5U3RhdGU9Yj4wPzQ6MCxqPWI+PTIwMCYmMzAwPmJ8fDMwND09PWIsZCYmKHU9emIobSx4LGQpKSx1PUFiKG0sdSx4LGopLGo/KG0uaWZNb2RpZmllZCYmKHc9eC5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2ZdPXcpLHc9eC5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tmXT13KSksMjA0PT09Ynx8XCJIRUFEXCI9PT1tLnR5cGU/eT1cIm5vY29udGVudFwiOjMwND09PWI/eT1cIm5vdG1vZGlmaWVkXCI6KHk9dS5zdGF0ZSxsPXUuZGF0YSx0PXUuZXJyb3Isaj0hdCkpOih0PXksIWImJnl8fCh5PVwiZXJyb3JcIiwwPmImJihiPTApKSkseC5zdGF0dXM9Yix4LnN0YXR1c1RleHQ9KGN8fHkpK1wiXCIsaj9xLnJlc29sdmVXaXRoKG8sW2wseSx4XSk6cS5yZWplY3RXaXRoKG8sW3gseSx0XSkseC5zdGF0dXNDb2RlKHMpLHM9dm9pZCAwLGsmJnAudHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt4LG0saj9sOnRdKSxyLmZpcmVXaXRoKG8sW3gseV0pLGsmJihwLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbeCxtXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4geH0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheChuLmV4dGVuZCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0sbi5pc1BsYWluT2JqZWN0KGEpJiZhKSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLnZpc2libGUoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg+MHx8YS5vZmZzZXRIZWlnaHQ+MHx8YS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD4wfTt2YXIgQmI9LyUyMC9nLENiPS9cXFtcXF0kLyxEYj0vXFxyP1xcbi9nLEViPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxGYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gR2IoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8Q2IudGVzdChhKT9kKGEsZSk6R2IoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilHYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpR2IoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShCYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmRmIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUViLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFYLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoRGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShEYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBIYj17MDoyMDAsMTIyMzoyMDR9LEliPW4uYWpheFNldHRpbmdzLnhocigpO2wuY29ycz0hIUliJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gSWIsbC5hamF4PUliPSEhSWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7cmV0dXJuIGwuY29yc3x8SWImJiFiLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGUsZil7dmFyIGcsaD1iLnhocigpO2lmKGgub3BlbihiLnR5cGUsYi51cmwsYi5hc3luYyxiLnVzZXJuYW1lLGIucGFzc3dvcmQpLGIueGhyRmllbGRzKWZvcihnIGluIGIueGhyRmllbGRzKWhbZ109Yi54aHJGaWVsZHNbZ107Yi5taW1lVHlwZSYmaC5vdmVycmlkZU1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUoYi5taW1lVHlwZSksYi5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihnIGluIGUpaC5zZXRSZXF1ZXN0SGVhZGVyKGcsZVtnXSk7Yz1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtjJiYoYz1kPWgub25sb2FkPWgub25lcnJvcj1oLm9uYWJvcnQ9aC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1hP2guYWJvcnQoKTpcImVycm9yXCI9PT1hP1wibnVtYmVyXCIhPXR5cGVvZiBoLnN0YXR1cz9mKDAsXCJlcnJvclwiKTpmKGguc3RhdHVzLGguc3RhdHVzVGV4dCk6ZihIYltoLnN0YXR1c118fGguc3RhdHVzLGguc3RhdHVzVGV4dCxcInRleHRcIiE9PShoLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2YgaC5yZXNwb25zZVRleHQ/e2JpbmFyeTpoLnJlc3BvbnNlfTp7dGV4dDpoLnJlc3BvbnNlVGV4dH0saC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0saC5vbmxvYWQ9YygpLGQ9aC5vbmVycm9yPWMoXCJlcnJvclwiKSx2b2lkIDAhPT1oLm9uYWJvcnQ/aC5vbmFib3J0PWQ6aC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09aC5yZWFkeVN0YXRlJiZhLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtjJiZkKCl9KX0sYz1jKFwiYWJvcnRcIik7dHJ5e2guc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCl9Y2F0Y2goaSl7aWYoYyl0aHJvdyBpfX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBKYj1bXSxLYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUpiLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIra2IrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoS2IudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJktiLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoS2IsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0obGIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7dm9pZCAwPT09Zj9uKGEpLnJlbW92ZVByb3AoZSk6YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEpiLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxkO3ZhciBlPXguZXhlYyhhKSxmPSFjJiZbXTtyZXR1cm4gZT9bYi5jcmVhdGVFbGVtZW50KGVbMV0pXTooZT1jYShbYV0sYixmKSxmJiZmLmxlbmd0aCYmbihmKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfTt2YXIgTGI9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJkxiKXJldHVybiBMYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+LTEmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPU1iKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8RWF9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtuLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmPU1iKGEpO3JldHVybiB2b2lkIDA9PT1lP2Y/ZltiXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/Zi5wYWdlWE9mZnNldDplLGM/ZTpmLnBhZ2VZT2Zmc2V0KTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09R2EobC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9RmEoYSxiKSxCYS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX0sc2l6ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH19KSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBOYj1hLmpRdWVyeSxPYj1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1PYiksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9TmIpLG59LGJ8fChhLmpRdWVyeT1hLiQ9biksbn0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvdmVuZG9yL2pxdWVyeS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohIE1hZ25pZmljIFBvcHVwIC0gdjEuMS4wIC0gMjAxNi0wMi0yMFxyXG4gKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cclxuICogQ29weXJpZ2h0IChjKSAyMDE2IERtaXRyeSBTZW1lbm92OyAqL1xyXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOndpbmRvdy5qUXVlcnl8fHdpbmRvdy5aZXB0byl9KGZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwiQ2xvc2VcIixpPVwiQmVmb3JlQ2xvc2VcIixqPVwiQWZ0ZXJDbG9zZVwiLGs9XCJCZWZvcmVBcHBlbmRcIixsPVwiTWFya3VwUGFyc2VcIixtPVwiT3BlblwiLG49XCJDaGFuZ2VcIixvPVwibWZwXCIscD1cIi5cIitvLHE9XCJtZnAtcmVhZHlcIixyPVwibWZwLXJlbW92aW5nXCIscz1cIm1mcC1wcmV2ZW50LWNsb3NlXCIsdD1mdW5jdGlvbigpe30sdT0hIXdpbmRvdy5qUXVlcnksdj1hKHdpbmRvdyksdz1mdW5jdGlvbihhLCBjKXtiLmV2Lm9uKG8rYStwLGMpfSx4PWZ1bmN0aW9uKGIsIGMsIGQsIGUpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGYuY2xhc3NOYW1lPVwibWZwLVwiK2IsZCYmKGYuaW5uZXJIVE1MPWQpLGU/YyYmYy5hcHBlbmRDaGlsZChmKTooZj1hKGYpLGMmJmYuYXBwZW5kVG8oYykpLGZ9LHk9ZnVuY3Rpb24oYyxkKXtiLmV2LnRyaWdnZXJIYW5kbGVyKG8rYyxkKSxiLnN0LmNhbGxiYWNrcyYmKGM9Yy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKStjLnNsaWNlKDEpLGIuc3QuY2FsbGJhY2tzW2NdJiZiLnN0LmNhbGxiYWNrc1tjXS5hcHBseShiLGEuaXNBcnJheShkKT9kOltkXSkpfSx6PWZ1bmN0aW9uKGMpe3JldHVybiBjPT09ZyYmYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG58fChiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bj1hKGIuc3QuY2xvc2VNYXJrdXAucmVwbGFjZShcIiV0aXRsZSVcIixiLnN0LnRDbG9zZSkpLGc9YyksYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG59LEE9ZnVuY3Rpb24oKXthLm1hZ25pZmljUG9wdXAuaW5zdGFuY2V8fChiPW5ldyB0LGIuaW5pdCgpLGEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZT1iKX0sQj1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLnN0eWxlLGI9W1wibXNcIixcIk9cIixcIk1velwiLFwiV2Via2l0XCJdO2lmKHZvaWQgMCE9PWEudHJhbnNpdGlvbilyZXR1cm4hMDtmb3IoO2IubGVuZ3RoOylpZihiLnBvcCgpK1wiVHJhbnNpdGlvblwiaW4gYSlyZXR1cm4hMDtyZXR1cm4hMX07dC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOnQsaW5pdDpmdW5jdGlvbigpe3ZhciBjPW5hdmlnYXRvci5hcHBWZXJzaW9uO2IuaXNMb3dJRT1iLmlzSUU4PWRvY3VtZW50LmFsbCYmIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIsYi5pc0FuZHJvaWQ9L2FuZHJvaWQvZ2kudGVzdChjKSxiLmlzSU9TPS9pcGhvbmV8aXBhZHxpcG9kL2dpLnRlc3QoYyksYi5zdXBwb3J0c1RyYW5zaXRpb249QigpLGIucHJvYmFibHlNb2JpbGU9Yi5pc0FuZHJvaWR8fGIuaXNJT1N8fC8oT3BlcmEgTWluaSl8S2luZGxlfHdlYk9TfEJsYWNrQmVycnl8KE9wZXJhIE1vYmkpfChXaW5kb3dzIFBob25lKXxJRU1vYmlsZS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksZD1hKGRvY3VtZW50KSxiLnBvcHVwc0NhY2hlPXt9fSxvcGVuOmZ1bmN0aW9uKGMpe3ZhciBlO2lmKGMuaXNPYmo9PT0hMSl7Yi5pdGVtcz1jLml0ZW1zLnRvQXJyYXkoKSxiLmluZGV4PTA7dmFyIGcsaD1jLml0ZW1zO2ZvcihlPTA7ZTxoLmxlbmd0aDtlKyspaWYoZz1oW2VdLGcucGFyc2VkJiYoZz1nLmVsWzBdKSxnPT09Yy5lbFswXSl7Yi5pbmRleD1lO2JyZWFrfX1lbHNlIGIuaXRlbXM9YS5pc0FycmF5KGMuaXRlbXMpP2MuaXRlbXM6W2MuaXRlbXNdLGIuaW5kZXg9Yy5pbmRleHx8MDtpZihiLmlzT3BlbilyZXR1cm4gdm9pZCBiLnVwZGF0ZUl0ZW1IVE1MKCk7Yi50eXBlcz1bXSxmPVwiXCIsYy5tYWluRWwmJmMubWFpbkVsLmxlbmd0aD9iLmV2PWMubWFpbkVsLmVxKDApOmIuZXY9ZCxjLmtleT8oYi5wb3B1cHNDYWNoZVtjLmtleV18fChiLnBvcHVwc0NhY2hlW2Mua2V5XT17fSksYi5jdXJyVGVtcGxhdGU9Yi5wb3B1cHNDYWNoZVtjLmtleV0pOmIuY3VyclRlbXBsYXRlPXt9LGIuc3Q9YS5leHRlbmQoITAse30sYS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLGMpLGIuZml4ZWRDb250ZW50UG9zPVwiYXV0b1wiPT09Yi5zdC5maXhlZENvbnRlbnRQb3M/IWIucHJvYmFibHlNb2JpbGU6Yi5zdC5maXhlZENvbnRlbnRQb3MsYi5zdC5tb2RhbCYmKGIuc3QuY2xvc2VPbkNvbnRlbnRDbGljaz0hMSxiLnN0LmNsb3NlT25CZ0NsaWNrPSExLGIuc3Quc2hvd0Nsb3NlQnRuPSExLGIuc3QuZW5hYmxlRXNjYXBlS2V5PSExKSxiLmJnT3ZlcmxheXx8KGIuYmdPdmVybGF5PXgoXCJiZ1wiKS5vbihcImNsaWNrXCIrcCxmdW5jdGlvbigpe2IuY2xvc2UoKX0pLGIud3JhcD14KFwid3JhcFwiKS5hdHRyKFwidGFiaW5kZXhcIiwtMSkub24oXCJjbGlja1wiK3AsZnVuY3Rpb24oYSl7Yi5fY2hlY2tJZkNsb3NlKGEudGFyZ2V0KSYmYi5jbG9zZSgpfSksYi5jb250YWluZXI9eChcImNvbnRhaW5lclwiLGIud3JhcCkpLGIuY29udGVudENvbnRhaW5lcj14KFwiY29udGVudFwiKSxiLnN0LnByZWxvYWRlciYmKGIucHJlbG9hZGVyPXgoXCJwcmVsb2FkZXJcIixiLmNvbnRhaW5lcixiLnN0LnRMb2FkaW5nKSk7dmFyIGk9YS5tYWduaWZpY1BvcHVwLm1vZHVsZXM7Zm9yKGU9MDtlPGkubGVuZ3RoO2UrKyl7dmFyIGo9aVtlXTtqPWouY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrai5zbGljZSgxKSxiW1wiaW5pdFwiK2pdLmNhbGwoYil9eShcIkJlZm9yZU9wZW5cIiksYi5zdC5zaG93Q2xvc2VCdG4mJihiLnN0LmNsb3NlQnRuSW5zaWRlPyh3KGwsZnVuY3Rpb24oYSxiLGMsZCl7Yy5jbG9zZV9yZXBsYWNlV2l0aD16KGQudHlwZSl9KSxmKz1cIiBtZnAtY2xvc2UtYnRuLWluXCIpOmIud3JhcC5hcHBlbmQoeigpKSksYi5zdC5hbGlnblRvcCYmKGYrPVwiIG1mcC1hbGlnbi10b3BcIiksYi5maXhlZENvbnRlbnRQb3M/Yi53cmFwLmNzcyh7b3ZlcmZsb3c6Yi5zdC5vdmVyZmxvd1ksb3ZlcmZsb3dYOlwiaGlkZGVuXCIsb3ZlcmZsb3dZOmIuc3Qub3ZlcmZsb3dZfSk6Yi53cmFwLmNzcyh7dG9wOnYuc2Nyb2xsVG9wKCkscG9zaXRpb246XCJhYnNvbHV0ZVwifSksKGIuc3QuZml4ZWRCZ1Bvcz09PSExfHxcImF1dG9cIj09PWIuc3QuZml4ZWRCZ1BvcyYmIWIuZml4ZWRDb250ZW50UG9zKSYmYi5iZ092ZXJsYXkuY3NzKHtoZWlnaHQ6ZC5oZWlnaHQoKSxwb3NpdGlvbjpcImFic29sdXRlXCJ9KSxiLnN0LmVuYWJsZUVzY2FwZUtleSYmZC5vbihcImtleXVwXCIrcCxmdW5jdGlvbihhKXsyNz09PWEua2V5Q29kZSYmYi5jbG9zZSgpfSksdi5vbihcInJlc2l6ZVwiK3AsZnVuY3Rpb24oKXtiLnVwZGF0ZVNpemUoKX0pLGIuc3QuY2xvc2VPbkNvbnRlbnRDbGlja3x8KGYrPVwiIG1mcC1hdXRvLWN1cnNvclwiKSxmJiZiLndyYXAuYWRkQ2xhc3MoZik7dmFyIGs9Yi53SD12LmhlaWdodCgpLG49e307aWYoYi5maXhlZENvbnRlbnRQb3MmJmIuX2hhc1Njcm9sbEJhcihrKSl7dmFyIG89Yi5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO28mJihuLm1hcmdpblJpZ2h0PW8pfWIuZml4ZWRDb250ZW50UG9zJiYoYi5pc0lFNz9hKFwiYm9keSwgaHRtbFwiKS5jc3MoXCJvdmVyZmxvd1wiLFwiaGlkZGVuXCIpOm4ub3ZlcmZsb3c9XCJoaWRkZW5cIik7dmFyIHI9Yi5zdC5tYWluQ2xhc3M7cmV0dXJuIGIuaXNJRTcmJihyKz1cIiBtZnAtaWU3XCIpLHImJmIuX2FkZENsYXNzVG9NRlAociksYi51cGRhdGVJdGVtSFRNTCgpLHkoXCJCdWlsZENvbnRyb2xzXCIpLGEoXCJodG1sXCIpLmNzcyhuKSxiLmJnT3ZlcmxheS5hZGQoYi53cmFwKS5wcmVwZW5kVG8oYi5zdC5wcmVwZW5kVG98fGEoZG9jdW1lbnQuYm9keSkpLGIuX2xhc3RGb2N1c2VkRWw9ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5jb250ZW50PyhiLl9hZGRDbGFzc1RvTUZQKHEpLGIuX3NldEZvY3VzKCkpOmIuYmdPdmVybGF5LmFkZENsYXNzKHEpLGQub24oXCJmb2N1c2luXCIrcCxiLl9vbkZvY3VzSW4pfSwxNiksYi5pc09wZW49ITAsYi51cGRhdGVTaXplKGspLHkobSksY30sY2xvc2U6ZnVuY3Rpb24oKXtiLmlzT3BlbiYmKHkoaSksYi5pc09wZW49ITEsYi5zdC5yZW1vdmFsRGVsYXkmJiFiLmlzTG93SUUmJmIuc3VwcG9ydHNUcmFuc2l0aW9uPyhiLl9hZGRDbGFzc1RvTUZQKHIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLl9jbG9zZSgpfSxiLnN0LnJlbW92YWxEZWxheSkpOmIuX2Nsb3NlKCkpfSxfY2xvc2U6ZnVuY3Rpb24oKXt5KGgpO3ZhciBjPXIrXCIgXCIrcStcIiBcIjtpZihiLmJnT3ZlcmxheS5kZXRhY2goKSxiLndyYXAuZGV0YWNoKCksYi5jb250YWluZXIuZW1wdHkoKSxiLnN0Lm1haW5DbGFzcyYmKGMrPWIuc3QubWFpbkNsYXNzK1wiIFwiKSxiLl9yZW1vdmVDbGFzc0Zyb21NRlAoYyksYi5maXhlZENvbnRlbnRQb3Mpe3ZhciBlPXttYXJnaW5SaWdodDpcIlwifTtiLmlzSUU3P2EoXCJib2R5LCBodG1sXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJcIik6ZS5vdmVyZmxvdz1cIlwiLGEoXCJodG1sXCIpLmNzcyhlKX1kLm9mZihcImtleXVwXCIrcCtcIiBmb2N1c2luXCIrcCksYi5ldi5vZmYocCksYi53cmFwLmF0dHIoXCJjbGFzc1wiLFwibWZwLXdyYXBcIikucmVtb3ZlQXR0cihcInN0eWxlXCIpLGIuYmdPdmVybGF5LmF0dHIoXCJjbGFzc1wiLFwibWZwLWJnXCIpLGIuY29udGFpbmVyLmF0dHIoXCJjbGFzc1wiLFwibWZwLWNvbnRhaW5lclwiKSwhYi5zdC5zaG93Q2xvc2VCdG58fGIuc3QuY2xvc2VCdG5JbnNpZGUmJmIuY3VyclRlbXBsYXRlW2IuY3Vyckl0ZW0udHlwZV0hPT0hMHx8Yi5jdXJyVGVtcGxhdGUuY2xvc2VCdG4mJmIuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpLGIuc3QuYXV0b0ZvY3VzTGFzdCYmYi5fbGFzdEZvY3VzZWRFbCYmYShiLl9sYXN0Rm9jdXNlZEVsKS5mb2N1cygpLGIuY3Vyckl0ZW09bnVsbCxiLmNvbnRlbnQ9bnVsbCxiLmN1cnJUZW1wbGF0ZT1udWxsLGIucHJldkhlaWdodD0wLHkoail9LHVwZGF0ZVNpemU6ZnVuY3Rpb24oYSl7aWYoYi5pc0lPUyl7dmFyIGM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoL3dpbmRvdy5pbm5lcldpZHRoLGQ9d2luZG93LmlubmVySGVpZ2h0KmM7Yi53cmFwLmNzcyhcImhlaWdodFwiLGQpLGIud0g9ZH1lbHNlIGIud0g9YXx8di5oZWlnaHQoKTtiLmZpeGVkQ29udGVudFBvc3x8Yi53cmFwLmNzcyhcImhlaWdodFwiLGIud0gpLHkoXCJSZXNpemVcIil9LHVwZGF0ZUl0ZW1IVE1MOmZ1bmN0aW9uKCl7dmFyIGM9Yi5pdGVtc1tiLmluZGV4XTtiLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCksYi5jb250ZW50JiZiLmNvbnRlbnQuZGV0YWNoKCksYy5wYXJzZWR8fChjPWIucGFyc2VFbChiLmluZGV4KSk7dmFyIGQ9Yy50eXBlO2lmKHkoXCJCZWZvcmVDaGFuZ2VcIixbYi5jdXJySXRlbT9iLmN1cnJJdGVtLnR5cGU6XCJcIixkXSksYi5jdXJySXRlbT1jLCFiLmN1cnJUZW1wbGF0ZVtkXSl7dmFyIGY9Yi5zdFtkXT9iLnN0W2RdLm1hcmt1cDohMTt5KFwiRmlyc3RNYXJrdXBQYXJzZVwiLGYpLGY/Yi5jdXJyVGVtcGxhdGVbZF09YShmKTpiLmN1cnJUZW1wbGF0ZVtkXT0hMH1lJiZlIT09Yy50eXBlJiZiLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcIm1mcC1cIitlK1wiLWhvbGRlclwiKTt2YXIgZz1iW1wiZ2V0XCIrZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStkLnNsaWNlKDEpXShjLGIuY3VyclRlbXBsYXRlW2RdKTtiLmFwcGVuZENvbnRlbnQoZyxkKSxjLnByZWxvYWRlZD0hMCx5KG4sYyksZT1jLnR5cGUsYi5jb250YWluZXIucHJlcGVuZChiLmNvbnRlbnRDb250YWluZXIpLHkoXCJBZnRlckNoYW5nZVwiKX0sYXBwZW5kQ29udGVudDpmdW5jdGlvbihhLGMpe2IuY29udGVudD1hLGE/Yi5zdC5zaG93Q2xvc2VCdG4mJmIuc3QuY2xvc2VCdG5JbnNpZGUmJmIuY3VyclRlbXBsYXRlW2NdPT09ITA/Yi5jb250ZW50LmZpbmQoXCIubWZwLWNsb3NlXCIpLmxlbmd0aHx8Yi5jb250ZW50LmFwcGVuZCh6KCkpOmIuY29udGVudD1hOmIuY29udGVudD1cIlwiLHkoayksYi5jb250YWluZXIuYWRkQ2xhc3MoXCJtZnAtXCIrYytcIi1ob2xkZXJcIiksYi5jb250ZW50Q29udGFpbmVyLmFwcGVuZChiLmNvbnRlbnQpfSxwYXJzZUVsOmZ1bmN0aW9uKGMpe3ZhciBkLGU9Yi5pdGVtc1tjXTtpZihlLnRhZ05hbWU/ZT17ZWw6YShlKX06KGQ9ZS50eXBlLGU9e2RhdGE6ZSxzcmM6ZS5zcmN9KSxlLmVsKXtmb3IodmFyIGY9Yi50eXBlcyxnPTA7ZzxmLmxlbmd0aDtnKyspaWYoZS5lbC5oYXNDbGFzcyhcIm1mcC1cIitmW2ddKSl7ZD1mW2ddO2JyZWFrfWUuc3JjPWUuZWwuYXR0cihcImRhdGEtbWZwLXNyY1wiKSxlLnNyY3x8KGUuc3JjPWUuZWwuYXR0cihcImhyZWZcIikpfXJldHVybiBlLnR5cGU9ZHx8Yi5zdC50eXBlfHxcImlubGluZVwiLGUuaW5kZXg9YyxlLnBhcnNlZD0hMCxiLml0ZW1zW2NdPWUseShcIkVsZW1lbnRQYXJzZVwiLGUpLGIuaXRlbXNbY119LGFkZEdyb3VwOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9ZnVuY3Rpb24oZCl7ZC5tZnBFbD10aGlzLGIuX29wZW5DbGljayhkLGEsYyl9O2N8fChjPXt9KTt2YXIgZT1cImNsaWNrLm1hZ25pZmljUG9wdXBcIjtjLm1haW5FbD1hLGMuaXRlbXM/KGMuaXNPYmo9ITAsYS5vZmYoZSkub24oZSxkKSk6KGMuaXNPYmo9ITEsYy5kZWxlZ2F0ZT9hLm9mZihlKS5vbihlLGMuZGVsZWdhdGUsZCk6KGMuaXRlbXM9YSxhLm9mZihlKS5vbihlLGQpKSl9LF9vcGVuQ2xpY2s6ZnVuY3Rpb24oYyxkLGUpe3ZhciBmPXZvaWQgMCE9PWUubWlkQ2xpY2s/ZS5taWRDbGljazphLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMubWlkQ2xpY2s7aWYoZnx8ISgyPT09Yy53aGljaHx8Yy5jdHJsS2V5fHxjLm1ldGFLZXl8fGMuYWx0S2V5fHxjLnNoaWZ0S2V5KSl7dmFyIGc9dm9pZCAwIT09ZS5kaXNhYmxlT24/ZS5kaXNhYmxlT246YS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtpZihnKWlmKGEuaXNGdW5jdGlvbihnKSl7aWYoIWcuY2FsbChiKSlyZXR1cm4hMH1lbHNlIGlmKHYud2lkdGgoKTxnKXJldHVybiEwO2MudHlwZSYmKGMucHJldmVudERlZmF1bHQoKSxiLmlzT3BlbiYmYy5zdG9wUHJvcGFnYXRpb24oKSksZS5lbD1hKGMubWZwRWwpLGUuZGVsZWdhdGUmJihlLml0ZW1zPWQuZmluZChlLmRlbGVnYXRlKSksYi5vcGVuKGUpfX0sdXBkYXRlU3RhdHVzOmZ1bmN0aW9uKGEsZCl7aWYoYi5wcmVsb2FkZXIpe2MhPT1hJiZiLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcIm1mcC1zLVwiK2MpLGR8fFwibG9hZGluZ1wiIT09YXx8KGQ9Yi5zdC50TG9hZGluZyk7dmFyIGU9e3N0YXR1czphLHRleHQ6ZH07eShcIlVwZGF0ZVN0YXR1c1wiLGUpLGE9ZS5zdGF0dXMsZD1lLnRleHQsYi5wcmVsb2FkZXIuaHRtbChkKSxiLnByZWxvYWRlci5maW5kKFwiYVwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7YS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKX0pLGIuY29udGFpbmVyLmFkZENsYXNzKFwibWZwLXMtXCIrYSksYz1hfX0sX2NoZWNrSWZDbG9zZTpmdW5jdGlvbihjKXtpZighYShjKS5oYXNDbGFzcyhzKSl7dmFyIGQ9Yi5zdC5jbG9zZU9uQ29udGVudENsaWNrLGU9Yi5zdC5jbG9zZU9uQmdDbGljaztpZihkJiZlKXJldHVybiEwO2lmKCFiLmNvbnRlbnR8fGEoYykuaGFzQ2xhc3MoXCJtZnAtY2xvc2VcIil8fGIucHJlbG9hZGVyJiZjPT09Yi5wcmVsb2FkZXJbMF0pcmV0dXJuITA7aWYoYz09PWIuY29udGVudFswXXx8YS5jb250YWlucyhiLmNvbnRlbnRbMF0sYykpe2lmKGQpcmV0dXJuITB9ZWxzZSBpZihlJiZhLmNvbnRhaW5zKGRvY3VtZW50LGMpKXJldHVybiEwO3JldHVybiExfX0sX2FkZENsYXNzVG9NRlA6ZnVuY3Rpb24oYSl7Yi5iZ092ZXJsYXkuYWRkQ2xhc3MoYSksYi53cmFwLmFkZENsYXNzKGEpfSxfcmVtb3ZlQ2xhc3NGcm9tTUZQOmZ1bmN0aW9uKGEpe3RoaXMuYmdPdmVybGF5LnJlbW92ZUNsYXNzKGEpLGIud3JhcC5yZW1vdmVDbGFzcyhhKX0sX2hhc1Njcm9sbEJhcjpmdW5jdGlvbihhKXtyZXR1cm4oYi5pc0lFNz9kLmhlaWdodCgpOmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KT4oYXx8di5oZWlnaHQoKSl9LF9zZXRGb2N1czpmdW5jdGlvbigpeyhiLnN0LmZvY3VzP2IuY29udGVudC5maW5kKGIuc3QuZm9jdXMpLmVxKDApOmIud3JhcCkuZm9jdXMoKX0sX29uRm9jdXNJbjpmdW5jdGlvbihjKXtyZXR1cm4gYy50YXJnZXQ9PT1iLndyYXBbMF18fGEuY29udGFpbnMoYi53cmFwWzBdLGMudGFyZ2V0KT92b2lkIDA6KGIuX3NldEZvY3VzKCksITEpfSxfcGFyc2VNYXJrdXA6ZnVuY3Rpb24oYixjLGQpe3ZhciBlO2QuZGF0YSYmKGM9YS5leHRlbmQoZC5kYXRhLGMpKSx5KGwsW2IsYyxkXSksYS5lYWNoKGMsZnVuY3Rpb24oYyxkKXtpZih2b2lkIDA9PT1kfHxkPT09ITEpcmV0dXJuITA7aWYoZT1jLnNwbGl0KFwiX1wiKSxlLmxlbmd0aD4xKXt2YXIgZj1iLmZpbmQocCtcIi1cIitlWzBdKTtpZihmLmxlbmd0aD4wKXt2YXIgZz1lWzFdO1wicmVwbGFjZVdpdGhcIj09PWc/ZlswXSE9PWRbMF0mJmYucmVwbGFjZVdpdGgoZCk6XCJpbWdcIj09PWc/Zi5pcyhcImltZ1wiKT9mLmF0dHIoXCJzcmNcIixkKTpmLnJlcGxhY2VXaXRoKGEoXCI8aW1nPlwiKS5hdHRyKFwic3JjXCIsZCkuYXR0cihcImNsYXNzXCIsZi5hdHRyKFwiY2xhc3NcIikpKTpmLmF0dHIoZVsxXSxkKX19ZWxzZSBiLmZpbmQocCtcIi1cIitjKS5odG1sKGQpfSl9LF9nZXRTY3JvbGxiYXJTaXplOmZ1bmN0aW9uKCl7aWYodm9pZCAwPT09Yi5zY3JvbGxiYXJTaXplKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Euc3R5bGUuY3NzVGV4dD1cIndpZHRoOiA5OXB4OyBoZWlnaHQ6IDk5cHg7IG92ZXJmbG93OiBzY3JvbGw7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4O1wiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSksYi5zY3JvbGxiYXJTaXplPWEub2Zmc2V0V2lkdGgtYS5jbGllbnRXaWR0aCxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpfXJldHVybiBiLnNjcm9sbGJhclNpemV9fSxhLm1hZ25pZmljUG9wdXA9e2luc3RhbmNlOm51bGwscHJvdG86dC5wcm90b3R5cGUsbW9kdWxlczpbXSxvcGVuOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIEEoKSxiPWI/YS5leHRlbmQoITAse30sYik6e30sYi5pc09iaj0hMCxiLmluZGV4PWN8fDAsdGhpcy5pbnN0YW5jZS5vcGVuKGIpfSxjbG9zZTpmdW5jdGlvbigpe3JldHVybiBhLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UmJmEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZS5jbG9zZSgpfSxyZWdpc3Rlck1vZHVsZTpmdW5jdGlvbihiLGMpe2Mub3B0aW9ucyYmKGEubWFnbmlmaWNQb3B1cC5kZWZhdWx0c1tiXT1jLm9wdGlvbnMpLGEuZXh0ZW5kKHRoaXMucHJvdG8sYy5wcm90byksdGhpcy5tb2R1bGVzLnB1c2goYil9LGRlZmF1bHRzOntkaXNhYmxlT246MCxrZXk6bnVsbCxtaWRDbGljazohMSxtYWluQ2xhc3M6XCJcIixwcmVsb2FkZXI6ITAsZm9jdXM6XCJcIixjbG9zZU9uQ29udGVudENsaWNrOiExLGNsb3NlT25CZ0NsaWNrOiEwLGNsb3NlQnRuSW5zaWRlOiEwLHNob3dDbG9zZUJ0bjohMCxlbmFibGVFc2NhcGVLZXk6ITAsbW9kYWw6ITEsYWxpZ25Ub3A6ITEscmVtb3ZhbERlbGF5OjAscHJlcGVuZFRvOm51bGwsZml4ZWRDb250ZW50UG9zOlwiYXV0b1wiLGZpeGVkQmdQb3M6XCJhdXRvXCIsb3ZlcmZsb3dZOlwiYXV0b1wiLGNsb3NlTWFya3VwOic8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1jbG9zZVwiPiYjMjE1OzwvYnV0dG9uPicsdENsb3NlOlwiQ2xvc2UgKEVzYylcIix0TG9hZGluZzpcIkxvYWRpbmcuLi5cIixhdXRvRm9jdXNMYXN0OiEwfX0sYS5mbi5tYWduaWZpY1BvcHVwPWZ1bmN0aW9uKGMpe0EoKTt2YXIgZD1hKHRoaXMpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBjKWlmKFwib3BlblwiPT09Yyl7dmFyIGUsZj11P2QuZGF0YShcIm1hZ25pZmljUG9wdXBcIik6ZFswXS5tYWduaWZpY1BvcHVwLGc9cGFyc2VJbnQoYXJndW1lbnRzWzFdLDEwKXx8MDtmLml0ZW1zP2U9Zi5pdGVtc1tnXTooZT1kLGYuZGVsZWdhdGUmJihlPWUuZmluZChmLmRlbGVnYXRlKSksZT1lLmVxKGcpKSxiLl9vcGVuQ2xpY2soe21mcEVsOmV9LGQsZil9ZWxzZSBiLmlzT3BlbiYmYltjXS5hcHBseShiLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSk7ZWxzZSBjPWEuZXh0ZW5kKCEwLHt9LGMpLHU/ZC5kYXRhKFwibWFnbmlmaWNQb3B1cFwiLGMpOmRbMF0ubWFnbmlmaWNQb3B1cD1jLGIuYWRkR3JvdXAoZCxjKTtyZXR1cm4gZH07dmFyIEMsRCxFLEY9XCJpbmxpbmVcIixHPWZ1bmN0aW9uKCl7RSYmKEQuYWZ0ZXIoRS5hZGRDbGFzcyhDKSkuZGV0YWNoKCksRT1udWxsKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEYse29wdGlvbnM6e2hpZGRlbkNsYXNzOlwiaGlkZVwiLG1hcmt1cDpcIlwiLHROb3RGb3VuZDpcIkNvbnRlbnQgbm90IGZvdW5kXCJ9LHByb3RvOntpbml0SW5saW5lOmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKEYpLHcoaCtcIi5cIitGLGZ1bmN0aW9uKCl7RygpfSl9LGdldElubGluZTpmdW5jdGlvbihjLGQpe2lmKEcoKSxjLnNyYyl7dmFyIGU9Yi5zdC5pbmxpbmUsZj1hKGMuc3JjKTtpZihmLmxlbmd0aCl7dmFyIGc9ZlswXS5wYXJlbnROb2RlO2cmJmcudGFnTmFtZSYmKER8fChDPWUuaGlkZGVuQ2xhc3MsRD14KEMpLEM9XCJtZnAtXCIrQyksRT1mLmFmdGVyKEQpLmRldGFjaCgpLnJlbW92ZUNsYXNzKEMpKSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpfWVsc2UgYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGUudE5vdEZvdW5kKSxmPWEoXCI8ZGl2PlwiKTtyZXR1cm4gYy5pbmxpbmVFbGVtZW50PWYsZn1yZXR1cm4gYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSxiLl9wYXJzZU1hcmt1cChkLHt9LGMpLGR9fX0pO3ZhciBILEk9XCJhamF4XCIsSj1mdW5jdGlvbigpe0gmJmEoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoSCl9LEs9ZnVuY3Rpb24oKXtKKCksYi5yZXEmJmIucmVxLmFib3J0KCl9O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShJLHtvcHRpb25zOntzZXR0aW5nczpudWxsLGN1cnNvcjpcIm1mcC1hamF4LWN1clwiLHRFcnJvcjonPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGNvbnRlbnQ8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ30scHJvdG86e2luaXRBamF4OmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKEkpLEg9Yi5zdC5hamF4LmN1cnNvcix3KGgrXCIuXCIrSSxLKSx3KFwiQmVmb3JlQ2hhbmdlLlwiK0ksSyl9LGdldEFqYXg6ZnVuY3Rpb24oYyl7SCYmYShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhIKSxiLnVwZGF0ZVN0YXR1cyhcImxvYWRpbmdcIik7dmFyIGQ9YS5leHRlbmQoe3VybDpjLnNyYyxzdWNjZXNzOmZ1bmN0aW9uKGQsZSxmKXt2YXIgZz17ZGF0YTpkLHhocjpmfTt5KFwiUGFyc2VBamF4XCIsZyksYi5hcHBlbmRDb250ZW50KGEoZy5kYXRhKSxJKSxjLmZpbmlzaGVkPSEwLEooKSxiLl9zZXRGb2N1cygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLndyYXAuYWRkQ2xhc3MocSl9LDE2KSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpLHkoXCJBamF4Q29udGVudEFkZGVkXCIpfSxlcnJvcjpmdW5jdGlvbigpe0ooKSxjLmZpbmlzaGVkPWMubG9hZEVycm9yPSEwLGIudXBkYXRlU3RhdHVzKFwiZXJyb3JcIixiLnN0LmFqYXgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSl9fSxiLnN0LmFqYXguc2V0dGluZ3MpO3JldHVybiBiLnJlcT1hLmFqYXgoZCksXCJcIn19fSk7dmFyIEwsTT1mdW5jdGlvbihjKXtpZihjLmRhdGEmJnZvaWQgMCE9PWMuZGF0YS50aXRsZSlyZXR1cm4gYy5kYXRhLnRpdGxlO3ZhciBkPWIuc3QuaW1hZ2UudGl0bGVTcmM7aWYoZCl7aWYoYS5pc0Z1bmN0aW9uKGQpKXJldHVybiBkLmNhbGwoYixjKTtpZihjLmVsKXJldHVybiBjLmVsLmF0dHIoZCl8fFwiXCJ9cmV0dXJuXCJcIn07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFwiaW1hZ2VcIix7b3B0aW9uczp7bWFya3VwOic8ZGl2IGNsYXNzPVwibWZwLWZpZ3VyZVwiPjxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj48ZmlndXJlPjxkaXYgY2xhc3M9XCJtZnAtaW1nXCI+PC9kaXY+PGZpZ2NhcHRpb24+PGRpdiBjbGFzcz1cIm1mcC1ib3R0b20tYmFyXCI+PGRpdiBjbGFzcz1cIm1mcC10aXRsZVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJtZnAtY291bnRlclwiPjwvZGl2PjwvZGl2PjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT48L2Rpdj4nLGN1cnNvcjpcIm1mcC16b29tLW91dC1jdXJcIix0aXRsZVNyYzpcInRpdGxlXCIsdmVydGljYWxGaXQ6ITAsdEVycm9yOic8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2U8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ30scHJvdG86e2luaXRJbWFnZTpmdW5jdGlvbigpe3ZhciBjPWIuc3QuaW1hZ2UsZD1cIi5pbWFnZVwiO2IudHlwZXMucHVzaChcImltYWdlXCIpLHcobStkLGZ1bmN0aW9uKCl7XCJpbWFnZVwiPT09Yi5jdXJySXRlbS50eXBlJiZjLmN1cnNvciYmYShkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhjLmN1cnNvcil9KSx3KGgrZCxmdW5jdGlvbigpe2MuY3Vyc29yJiZhKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKGMuY3Vyc29yKSx2Lm9mZihcInJlc2l6ZVwiK3ApfSksdyhcIlJlc2l6ZVwiK2QsYi5yZXNpemVJbWFnZSksYi5pc0xvd0lFJiZ3KFwiQWZ0ZXJDaGFuZ2VcIixiLnJlc2l6ZUltYWdlKX0scmVzaXplSW1hZ2U6ZnVuY3Rpb24oKXt2YXIgYT1iLmN1cnJJdGVtO2lmKGEmJmEuaW1nJiZiLnN0LmltYWdlLnZlcnRpY2FsRml0KXt2YXIgYz0wO2IuaXNMb3dJRSYmKGM9cGFyc2VJbnQoYS5pbWcuY3NzKFwicGFkZGluZy10b3BcIiksMTApK3BhcnNlSW50KGEuaW1nLmNzcyhcInBhZGRpbmctYm90dG9tXCIpLDEwKSksYS5pbWcuY3NzKFwibWF4LWhlaWdodFwiLGIud0gtYyl9fSxfb25JbWFnZUhhc1NpemU6ZnVuY3Rpb24oYSl7YS5pbWcmJihhLmhhc1NpemU9ITAsTCYmY2xlYXJJbnRlcnZhbChMKSxhLmlzQ2hlY2tpbmdJbWdTaXplPSExLHkoXCJJbWFnZUhhc1NpemVcIixhKSxhLmltZ0hpZGRlbiYmKGIuY29udGVudCYmYi5jb250ZW50LnJlbW92ZUNsYXNzKFwibWZwLWxvYWRpbmdcIiksYS5pbWdIaWRkZW49ITEpKX0sZmluZEltYWdlU2l6ZTpmdW5jdGlvbihhKXt2YXIgYz0wLGQ9YS5pbWdbMF0sZT1mdW5jdGlvbihmKXtMJiZjbGVhckludGVydmFsKEwpLEw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtyZXR1cm4gZC5uYXR1cmFsV2lkdGg+MD92b2lkIGIuX29uSW1hZ2VIYXNTaXplKGEpOihjPjIwMCYmY2xlYXJJbnRlcnZhbChMKSxjKyssdm9pZCgzPT09Yz9lKDEwKTo0MD09PWM/ZSg1MCk6MTAwPT09YyYmZSg1MDApKSl9LGYpfTtlKDEpfSxnZXRJbWFnZTpmdW5jdGlvbihjLGQpe3ZhciBlPTAsZj1mdW5jdGlvbigpe2MmJihjLmltZ1swXS5jb21wbGV0ZT8oYy5pbWcub2ZmKFwiLm1mcGxvYWRlclwiKSxjPT09Yi5jdXJySXRlbSYmKGIuX29uSW1hZ2VIYXNTaXplKGMpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIikpLGMuaGFzU2l6ZT0hMCxjLmxvYWRlZD0hMCx5KFwiSW1hZ2VMb2FkQ29tcGxldGVcIikpOihlKyssMjAwPmU/c2V0VGltZW91dChmLDEwMCk6ZygpKSl9LGc9ZnVuY3Rpb24oKXtjJiYoYy5pbWcub2ZmKFwiLm1mcGxvYWRlclwiKSxjPT09Yi5jdXJySXRlbSYmKGIuX29uSW1hZ2VIYXNTaXplKGMpLGIudXBkYXRlU3RhdHVzKFwiZXJyb3JcIixoLnRFcnJvci5yZXBsYWNlKFwiJXVybCVcIixjLnNyYykpKSxjLmhhc1NpemU9ITAsYy5sb2FkZWQ9ITAsYy5sb2FkRXJyb3I9ITApfSxoPWIuc3QuaW1hZ2UsaT1kLmZpbmQoXCIubWZwLWltZ1wiKTtpZihpLmxlbmd0aCl7dmFyIGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtqLmNsYXNzTmFtZT1cIm1mcC1pbWdcIixjLmVsJiZjLmVsLmZpbmQoXCJpbWdcIikubGVuZ3RoJiYoai5hbHQ9Yy5lbC5maW5kKFwiaW1nXCIpLmF0dHIoXCJhbHRcIikpLGMuaW1nPWEoaikub24oXCJsb2FkLm1mcGxvYWRlclwiLGYpLm9uKFwiZXJyb3IubWZwbG9hZGVyXCIsZyksai5zcmM9Yy5zcmMsaS5pcyhcImltZ1wiKSYmKGMuaW1nPWMuaW1nLmNsb25lKCkpLGo9Yy5pbWdbMF0sai5uYXR1cmFsV2lkdGg+MD9jLmhhc1NpemU9ITA6ai53aWR0aHx8KGMuaGFzU2l6ZT0hMSl9cmV0dXJuIGIuX3BhcnNlTWFya3VwKGQse3RpdGxlOk0oYyksaW1nX3JlcGxhY2VXaXRoOmMuaW1nfSxjKSxiLnJlc2l6ZUltYWdlKCksYy5oYXNTaXplPyhMJiZjbGVhckludGVydmFsKEwpLGMubG9hZEVycm9yPyhkLmFkZENsYXNzKFwibWZwLWxvYWRpbmdcIiksYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSkpOihkLnJlbW92ZUNsYXNzKFwibWZwLWxvYWRpbmdcIiksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSksZCk6KGIudXBkYXRlU3RhdHVzKFwibG9hZGluZ1wiKSxjLmxvYWRpbmc9ITAsYy5oYXNTaXplfHwoYy5pbWdIaWRkZW49ITAsZC5hZGRDbGFzcyhcIm1mcC1sb2FkaW5nXCIpLGIuZmluZEltYWdlU2l6ZShjKSksZCl9fX0pO3ZhciBOLE89ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09TiYmKE49dm9pZCAwIT09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikuc3R5bGUuTW96VHJhbnNmb3JtKSxOfTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoXCJ6b29tXCIse29wdGlvbnM6e2VuYWJsZWQ6ITEsZWFzaW5nOlwiZWFzZS1pbi1vdXRcIixkdXJhdGlvbjozMDAsb3BlbmVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLmlzKFwiaW1nXCIpP2E6YS5maW5kKFwiaW1nXCIpfX0scHJvdG86e2luaXRab29tOmZ1bmN0aW9uKCl7dmFyIGEsYz1iLnN0Lnpvb20sZD1cIi56b29tXCI7aWYoYy5lbmFibGVkJiZiLnN1cHBvcnRzVHJhbnNpdGlvbil7dmFyIGUsZixnPWMuZHVyYXRpb24saj1mdW5jdGlvbihhKXt2YXIgYj1hLmNsb25lKCkucmVtb3ZlQXR0cihcInN0eWxlXCIpLnJlbW92ZUF0dHIoXCJjbGFzc1wiKS5hZGRDbGFzcyhcIm1mcC1hbmltYXRlZC1pbWFnZVwiKSxkPVwiYWxsIFwiK2MuZHVyYXRpb24vMWUzK1wicyBcIitjLmVhc2luZyxlPXtwb3NpdGlvbjpcImZpeGVkXCIsekluZGV4Ojk5OTksbGVmdDowLHRvcDowLFwiLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5XCI6XCJoaWRkZW5cIn0sZj1cInRyYW5zaXRpb25cIjtyZXR1cm4gZVtcIi13ZWJraXQtXCIrZl09ZVtcIi1tb3otXCIrZl09ZVtcIi1vLVwiK2ZdPWVbZl09ZCxiLmNzcyhlKSxifSxrPWZ1bmN0aW9uKCl7Yi5jb250ZW50LmNzcyhcInZpc2liaWxpdHlcIixcInZpc2libGVcIil9O3coXCJCdWlsZENvbnRyb2xzXCIrZCxmdW5jdGlvbigpe2lmKGIuX2FsbG93Wm9vbSgpKXtpZihjbGVhclRpbWVvdXQoZSksYi5jb250ZW50LmNzcyhcInZpc2liaWxpdHlcIixcImhpZGRlblwiKSxhPWIuX2dldEl0ZW1Ub1pvb20oKSwhYSlyZXR1cm4gdm9pZCBrKCk7Zj1qKGEpLGYuY3NzKGIuX2dldE9mZnNldCgpKSxiLndyYXAuYXBwZW5kKGYpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe2YuY3NzKGIuX2dldE9mZnNldCghMCkpLGU9c2V0VGltZW91dChmdW5jdGlvbigpe2soKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5yZW1vdmUoKSxhPWY9bnVsbCx5KFwiWm9vbUFuaW1hdGlvbkVuZGVkXCIpfSwxNil9LGcpfSwxNil9fSksdyhpK2QsZnVuY3Rpb24oKXtpZihiLl9hbGxvd1pvb20oKSl7aWYoY2xlYXJUaW1lb3V0KGUpLGIuc3QucmVtb3ZhbERlbGF5PWcsIWEpe2lmKGE9Yi5fZ2V0SXRlbVRvWm9vbSgpLCFhKXJldHVybjtmPWooYSl9Zi5jc3MoYi5fZ2V0T2Zmc2V0KCEwKSksYi53cmFwLmFwcGVuZChmKSxiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmLmNzcyhiLl9nZXRPZmZzZXQoKSl9LDE2KX19KSx3KGgrZCxmdW5jdGlvbigpe2IuX2FsbG93Wm9vbSgpJiYoaygpLGYmJmYucmVtb3ZlKCksYT1udWxsKX0pfX0sX2FsbG93Wm9vbTpmdW5jdGlvbigpe3JldHVyblwiaW1hZ2VcIj09PWIuY3Vyckl0ZW0udHlwZX0sX2dldEl0ZW1Ub1pvb206ZnVuY3Rpb24oKXtyZXR1cm4gYi5jdXJySXRlbS5oYXNTaXplP2IuY3Vyckl0ZW0uaW1nOiExfSxfZ2V0T2Zmc2V0OmZ1bmN0aW9uKGMpe3ZhciBkO2Q9Yz9iLmN1cnJJdGVtLmltZzpiLnN0Lnpvb20ub3BlbmVyKGIuY3Vyckl0ZW0uZWx8fGIuY3Vyckl0ZW0pO3ZhciBlPWQub2Zmc2V0KCksZj1wYXJzZUludChkLmNzcyhcInBhZGRpbmctdG9wXCIpLDEwKSxnPXBhcnNlSW50KGQuY3NzKFwicGFkZGluZy1ib3R0b21cIiksMTApO2UudG9wLT1hKHdpbmRvdykuc2Nyb2xsVG9wKCktZjt2YXIgaD17d2lkdGg6ZC53aWR0aCgpLGhlaWdodDoodT9kLmlubmVySGVpZ2h0KCk6ZFswXS5vZmZzZXRIZWlnaHQpLWctZn07cmV0dXJuIE8oKT9oW1wiLW1vei10cmFuc2Zvcm1cIl09aC50cmFuc2Zvcm09XCJ0cmFuc2xhdGUoXCIrZS5sZWZ0K1wicHgsXCIrZS50b3ArXCJweClcIjooaC5sZWZ0PWUubGVmdCxoLnRvcD1lLnRvcCksaH19fSk7dmFyIFA9XCJpZnJhbWVcIixRPVwiLy9hYm91dDpibGFua1wiLFI9ZnVuY3Rpb24oYSl7aWYoYi5jdXJyVGVtcGxhdGVbUF0pe3ZhciBjPWIuY3VyclRlbXBsYXRlW1BdLmZpbmQoXCJpZnJhbWVcIik7Yy5sZW5ndGgmJihhfHwoY1swXS5zcmM9USksYi5pc0lFOCYmYy5jc3MoXCJkaXNwbGF5XCIsYT9cImJsb2NrXCI6XCJub25lXCIpKX19O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShQLHtvcHRpb25zOnttYXJrdXA6JzxkaXYgY2xhc3M9XCJtZnAtaWZyYW1lLXNjYWxlclwiPjxkaXYgY2xhc3M9XCJtZnAtY2xvc2VcIj48L2Rpdj48aWZyYW1lIGNsYXNzPVwibWZwLWlmcmFtZVwiIHNyYz1cIi8vYWJvdXQ6YmxhbmtcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9kaXY+JyxzcmNBY3Rpb246XCJpZnJhbWVfc3JjXCIscGF0dGVybnM6e3lvdXR1YmU6e2luZGV4OlwieW91dHViZS5jb21cIixpZDpcInY9XCIsc3JjOlwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xXCJ9LHZpbWVvOntpbmRleDpcInZpbWVvLmNvbS9cIixpZDpcIi9cIixzcmM6XCIvL3BsYXllci52aW1lby5jb20vdmlkZW8vJWlkJT9hdXRvcGxheT0xXCJ9LGdtYXBzOntpbmRleDpcIi8vbWFwcy5nb29nbGUuXCIsc3JjOlwiJWlkJSZvdXRwdXQ9ZW1iZWRcIn19fSxwcm90bzp7aW5pdElmcmFtZTpmdW5jdGlvbigpe2IudHlwZXMucHVzaChQKSx3KFwiQmVmb3JlQ2hhbmdlXCIsZnVuY3Rpb24oYSxiLGMpe2IhPT1jJiYoYj09PVA/UigpOmM9PT1QJiZSKCEwKSl9KSx3KGgrXCIuXCIrUCxmdW5jdGlvbigpe1IoKX0pfSxnZXRJZnJhbWU6ZnVuY3Rpb24oYyxkKXt2YXIgZT1jLnNyYyxmPWIuc3QuaWZyYW1lO2EuZWFjaChmLnBhdHRlcm5zLGZ1bmN0aW9uKCl7cmV0dXJuIGUuaW5kZXhPZih0aGlzLmluZGV4KT4tMT8odGhpcy5pZCYmKGU9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuaWQ/ZS5zdWJzdHIoZS5sYXN0SW5kZXhPZih0aGlzLmlkKSt0aGlzLmlkLmxlbmd0aCxlLmxlbmd0aCk6dGhpcy5pZC5jYWxsKHRoaXMsZSkpLGU9dGhpcy5zcmMucmVwbGFjZShcIiVpZCVcIixlKSwhMSk6dm9pZCAwfSk7dmFyIGc9e307cmV0dXJuIGYuc3JjQWN0aW9uJiYoZ1tmLnNyY0FjdGlvbl09ZSksYi5fcGFyc2VNYXJrdXAoZCxnLGMpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIiksZH19fSk7dmFyIFM9ZnVuY3Rpb24oYSl7dmFyIGM9Yi5pdGVtcy5sZW5ndGg7cmV0dXJuIGE+Yy0xP2EtYzowPmE/YythOmF9LFQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhLnJlcGxhY2UoLyVjdXJyJS9naSxiKzEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksYyl9O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShcImdhbGxlcnlcIix7b3B0aW9uczp7ZW5hYmxlZDohMSxhcnJvd01hcmt1cDonPGJ1dHRvbiB0aXRsZT1cIiV0aXRsZSVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtZnAtYXJyb3cgbWZwLWFycm93LSVkaXIlXCI+PC9idXR0b24+JyxwcmVsb2FkOlswLDJdLG5hdmlnYXRlQnlJbWdDbGljazohMCxhcnJvd3M6ITAsdFByZXY6XCJQcmV2aW91cyAoTGVmdCBhcnJvdyBrZXkpXCIsdE5leHQ6XCJOZXh0IChSaWdodCBhcnJvdyBrZXkpXCIsdENvdW50ZXI6XCIlY3VyciUgb2YgJXRvdGFsJVwifSxwcm90bzp7aW5pdEdhbGxlcnk6ZnVuY3Rpb24oKXt2YXIgYz1iLnN0LmdhbGxlcnksZT1cIi5tZnAtZ2FsbGVyeVwiO3JldHVybiBiLmRpcmVjdGlvbj0hMCxjJiZjLmVuYWJsZWQ/KGYrPVwiIG1mcC1nYWxsZXJ5XCIsdyhtK2UsZnVuY3Rpb24oKXtjLm5hdmlnYXRlQnlJbWdDbGljayYmYi53cmFwLm9uKFwiY2xpY2tcIitlLFwiLm1mcC1pbWdcIixmdW5jdGlvbigpe3JldHVybiBiLml0ZW1zLmxlbmd0aD4xPyhiLm5leHQoKSwhMSk6dm9pZCAwfSksZC5vbihcImtleWRvd25cIitlLGZ1bmN0aW9uKGEpezM3PT09YS5rZXlDb2RlP2IucHJldigpOjM5PT09YS5rZXlDb2RlJiZiLm5leHQoKX0pfSksdyhcIlVwZGF0ZVN0YXR1c1wiK2UsZnVuY3Rpb24oYSxjKXtjLnRleHQmJihjLnRleHQ9VChjLnRleHQsYi5jdXJySXRlbS5pbmRleCxiLml0ZW1zLmxlbmd0aCkpfSksdyhsK2UsZnVuY3Rpb24oYSxkLGUsZil7dmFyIGc9Yi5pdGVtcy5sZW5ndGg7ZS5jb3VudGVyPWc+MT9UKGMudENvdW50ZXIsZi5pbmRleCxnKTpcIlwifSksdyhcIkJ1aWxkQ29udHJvbHNcIitlLGZ1bmN0aW9uKCl7aWYoYi5pdGVtcy5sZW5ndGg+MSYmYy5hcnJvd3MmJiFiLmFycm93TGVmdCl7dmFyIGQ9Yy5hcnJvd01hcmt1cCxlPWIuYXJyb3dMZWZ0PWEoZC5yZXBsYWNlKC8ldGl0bGUlL2dpLGMudFByZXYpLnJlcGxhY2UoLyVkaXIlL2dpLFwibGVmdFwiKSkuYWRkQ2xhc3MocyksZj1iLmFycm93UmlnaHQ9YShkLnJlcGxhY2UoLyV0aXRsZSUvZ2ksYy50TmV4dCkucmVwbGFjZSgvJWRpciUvZ2ksXCJyaWdodFwiKSkuYWRkQ2xhc3Mocyk7ZS5jbGljayhmdW5jdGlvbigpe2IucHJldigpfSksZi5jbGljayhmdW5jdGlvbigpe2IubmV4dCgpfSksYi5jb250YWluZXIuYXBwZW5kKGUuYWRkKGYpKX19KSx3KG4rZSxmdW5jdGlvbigpe2IuX3ByZWxvYWRUaW1lb3V0JiZjbGVhclRpbWVvdXQoYi5fcHJlbG9hZFRpbWVvdXQpLGIuX3ByZWxvYWRUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLnByZWxvYWROZWFyYnlJbWFnZXMoKSxiLl9wcmVsb2FkVGltZW91dD1udWxsfSwxNil9KSx2b2lkIHcoaCtlLGZ1bmN0aW9uKCl7ZC5vZmYoZSksYi53cmFwLm9mZihcImNsaWNrXCIrZSksYi5hcnJvd1JpZ2h0PWIuYXJyb3dMZWZ0PW51bGx9KSk6ITF9LG5leHQ6ZnVuY3Rpb24oKXtiLmRpcmVjdGlvbj0hMCxiLmluZGV4PVMoYi5pbmRleCsxKSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LHByZXY6ZnVuY3Rpb24oKXtiLmRpcmVjdGlvbj0hMSxiLmluZGV4PVMoYi5pbmRleC0xKSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LGdvVG86ZnVuY3Rpb24oYSl7Yi5kaXJlY3Rpb249YT49Yi5pbmRleCxiLmluZGV4PWEsYi51cGRhdGVJdGVtSFRNTCgpfSxwcmVsb2FkTmVhcmJ5SW1hZ2VzOmZ1bmN0aW9uKCl7dmFyIGEsYz1iLnN0LmdhbGxlcnkucHJlbG9hZCxkPU1hdGgubWluKGNbMF0sYi5pdGVtcy5sZW5ndGgpLGU9TWF0aC5taW4oY1sxXSxiLml0ZW1zLmxlbmd0aCk7Zm9yKGE9MTthPD0oYi5kaXJlY3Rpb24/ZTpkKTthKyspYi5fcHJlbG9hZEl0ZW0oYi5pbmRleCthKTtmb3IoYT0xO2E8PShiLmRpcmVjdGlvbj9kOmUpO2ErKyliLl9wcmVsb2FkSXRlbShiLmluZGV4LWEpfSxfcHJlbG9hZEl0ZW06ZnVuY3Rpb24oYyl7aWYoYz1TKGMpLCFiLml0ZW1zW2NdLnByZWxvYWRlZCl7dmFyIGQ9Yi5pdGVtc1tjXTtkLnBhcnNlZHx8KGQ9Yi5wYXJzZUVsKGMpKSx5KFwiTGF6eUxvYWRcIixkKSxcImltYWdlXCI9PT1kLnR5cGUmJihkLmltZz1hKCc8aW1nIGNsYXNzPVwibWZwLWltZ1wiIC8+Jykub24oXCJsb2FkLm1mcGxvYWRlclwiLGZ1bmN0aW9uKCl7ZC5oYXNTaXplPSEwfSkub24oXCJlcnJvci5tZnBsb2FkZXJcIixmdW5jdGlvbigpe2QuaGFzU2l6ZT0hMCxkLmxvYWRFcnJvcj0hMCx5KFwiTGF6eUxvYWRFcnJvclwiLGQpfSkuYXR0cihcInNyY1wiLGQuc3JjKSksZC5wcmVsb2FkZWQ9ITB9fX19KTt2YXIgVT1cInJldGluYVwiO2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShVLHtvcHRpb25zOntyZXBsYWNlU3JjOmZ1bmN0aW9uKGEpe3JldHVybiBhLnNyYy5yZXBsYWNlKC9cXC5cXHcrJC8sZnVuY3Rpb24oYSl7cmV0dXJuXCJAMnhcIithfSl9LHJhdGlvOjF9LHByb3RvOntpbml0UmV0aW5hOmZ1bmN0aW9uKCl7aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8+MSl7dmFyIGE9Yi5zdC5yZXRpbmEsYz1hLnJhdGlvO2M9aXNOYU4oYyk/YygpOmMsYz4xJiYodyhcIkltYWdlSGFzU2l6ZS5cIitVLGZ1bmN0aW9uKGEsYil7Yi5pbWcuY3NzKHtcIm1heC13aWR0aFwiOmIuaW1nWzBdLm5hdHVyYWxXaWR0aC9jLHdpZHRoOlwiMTAwJVwifSl9KSx3KFwiRWxlbWVudFBhcnNlLlwiK1UsZnVuY3Rpb24oYixkKXtkLnNyYz1hLnJlcGxhY2VTcmMoZCxjKX0pKX19fX0pLEEoKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy92ZW5kb3IvbWFnbmlmaWMtcG9wdXAuanNcbiAqKi8iLCIvKipcclxuICogQ2xhc3MgdG9nZ2xlciBvbiBwYXJlbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmFjdGl2ZUNsYXNzPSdpcy1hY3RpdmUnXVxyXG4gKiBAcGFyYW0ge3N0cmluZ3xqcXVlcnl9IFtvcHRpb25zLnRhcmdldFNlbGVjdG9yPScuanMtZHJvcGRvd24tdG9nZ2xlJ11cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50b2dnbGVPbkJsdXI9ZmFsc2VdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZGVidWc9ZmFsc2VdIC0gRW5hYmxlcyByZXR1cm5lc1xyXG4gKi9cclxuJC5mbi53em1DbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuXHR2YXJcclxuXHRcdGFjdGl2ZUNsYXNzTmFtZSA9IG9wdGlvbnMuYWN0aXZlQ2xhc3MgfHwgJ2lzLWFjdGl2ZScsXHJcblx0XHR0b2dnbGVTZWxlY3RvciA9IG9wdGlvbnMudG9nZ2xlU2VsZWN0b3IgfHwgJy5qcy1jbGFzcy10b2dnbGUnLFxyXG5cdFx0dG9nZ2xlT25CbHVyID0gb3B0aW9ucy50b2dnbGVPbkJsdXIgfHwgZmFsc2UsXHJcblx0XHRjb2xsZWN0aW9uU2VsZWN0b3IgPSAnW2RhdGEtdG9nZ2xlPVwiaW5pdGlhbGl6ZWRcIl0nLFxyXG5cdFx0ZGVidWcgPSBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xyXG5cclxuXHRpZiAoZGVidWcpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiYWN0aXZlQ2xhc3NOYW1lOlwiLCBhY3RpdmVDbGFzc05hbWUpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ0b2dnbGVTZWxlY3RvcjpcIiwgdG9nZ2xlU2VsZWN0b3IpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJ0b2dnbGVPbkJsdXI6XCIsIHRvZ2dsZU9uQmx1cik7XHJcblx0XHRjb25zb2xlLmxvZyhcImNvbGxlY3Rpb25TZWxlY3RvcjpcIiwgY29sbGVjdGlvblNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGRlYnVnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YTonLCAhISQodGhpcykuZGF0YSgnd3ptQ2xhc3NUb2dnbGUnKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISEkKHRoaXMpLmRhdGEoJ3d6bUNsYXNzVG9nZ2xlJykgPT0gZmFsc2UpIHtcclxuXHRcdFx0dmFyIHRhcmdldDtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdkYXRhLXRvZ2dsZScsJ2luaXRpYWxpemVkJyk7XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgdG9nZ2xlU2VsZWN0b3IsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRhcmdldCA9IGUuZGVsZWdhdGVUYXJnZXQ7XHJcblx0XHRcdFx0aWYgKGRlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImNsaWNrOnRhcmdldDpcIiwgdGFyZ2V0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAgKHRvZ2dsZU9uQmx1cikge1xyXG5cdFx0XHRcdFx0JChjb2xsZWN0aW9uU2VsZWN0b3IpLm5vdChlLmRlbGVnYXRlVGFyZ2V0KS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQkKGUuZGVsZWdhdGVUYXJnZXQpLnRvZ2dsZUNsYXNzKGFjdGl2ZUNsYXNzTmFtZSk7XHJcblxyXG5cdFx0XHRcdGlmICh0b2dnbGVPbkJsdXIpIHtcclxuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljay5vbkJsdXIgdG91Y2hzdGFydC5vbkJsdXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoY29sbGVjdGlvblNlbGVjdG9yKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRhcmdldCkucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3NOYW1lKTtcclxuXHRcdFx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLm9uQmx1ciB0b3VjaHN0YXJ0Lm9uQmx1cicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkKHRoaXMpLmRhdGEoJ3d6bUNsYXNzVG9nZ2xlJywgdHJ1ZSlcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL21vZHVsZXMvd2V6b21fY2xhc3NfdG9nZ2xlci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FBQ0E7QUFDQTtBQ0NBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFqQkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBakJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ3BKQTtBRENBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBTEE7QUFpQ0E7QUFDQTtBQUtBOzs7Ozs7O0FFclFBOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBSENBO0FHQ0E7QUFDQTtBSENBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdk5BO0FBQ0E7QUF5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBbm5CQTtBQUNBO0FBcW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpSQTtBQUNBO0FBMTdCQTtBQUNBO0FBc3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBSWpsREE7QUFDQTtBSkFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUlBQTtBQUFBO0FKQUE7QUlBQTtBQUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBSUFBO0FBQUE7QUpBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSkFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUNBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBSUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBQUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FJQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUFBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FBQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBQUFBO0FKQUE7QUFBQTtBSUFBO0FBQUE7QUFBQTtBSkFBO0FJQUE7QUFBQTtBQUFBO0FBQUE7QUpBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBSUFBO0FBQUE7QUpBQTtBSUFBO0FKQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FJQUE7QUpBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUlBQTtBSkFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUtIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0ZBOzs7QUFHQTtBQUFBO0FQQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FPQUE7QVBBQTtBT0FBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FPQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FQQUE7QUFBQTtBT0FBO0FQQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FQQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBQUFBO0FQQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FBQUE7QUFBQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FPQUE7QVBBQTtBT0FBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FPQUE7QUFBQTtBQUFBO0FQQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QU9BQTtBUEFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBT0FBO0FQQUE7QUFBQTtBT0FBO0FQQUE7QUFBQTtBT0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FPQUE7QUFBQTtBQUFBO0FBQUE7QVBBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QVFIQTs7Ozs7OztBQU9BO0FBQ0E7QVJDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=