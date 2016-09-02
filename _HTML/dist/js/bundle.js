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
		function initMap() {
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 18,
				center: { lat: 50.415291, lng: 30.660114 }
			});

			var image = {
				url: 'css/pic/marker_icon.png'
			};

			var marker = new google.maps.Marker({
				position: { lat: 50.415291, lng: 30.660114 },
				map: map,
				icon: image,
				title: ''
			});
		}

		/* Подключение скрипта левого меню */
		var $multiLevelMenu = $('.js-multiLevelMenu');
		if ($multiLevelMenu.length) {
			__webpack_require__.e/* nsure */(1, function () {
				var initAsideMenu = __webpack_require__(9);
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
			__webpack_require__.e/* nsure */(2, function () {
				__webpack_require__(10);
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

		$(window).load(function () {
			initMap();
		});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGM1ODllODQ3NzEyMDIyMDIyYmM4Iiwid2VicGFjazovLy9zcmMvanMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvd0hUTUwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL3NyYy9qcy92ZW5kb3IvanF1ZXJ5LXZhbGlkYXRlLmpzIiwid2VicGFjazovLy9zcmMvanMvdmVuZG9yL2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL3ZlbmRvci9tYWduaWZpYy1wb3B1cC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvd2V6b21fY2xhc3NfdG9nZ2xlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwianMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjNTg5ZTg0NzcxMjAyMjAyMmJjOFxuICoqLyIsInJlcXVpcmUoJ3dIVE1MJyk7XHJcbnJlcXVpcmUoJ3dlem9tX2NsYXNzX3RvZ2dsZXInKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuXHRzdmc0ZXZlcnlib2R5KHt9KTtcclxuXHR3SFRNTC5mb3JtVmFsaWRhdGlvbigpO1xyXG5cdHdIVE1MLm1mcEFqYXgoKTtcclxuXHJcblx0alF1ZXJ5LmZuLkZvcmNlTnVtZXJpY09ubHkgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykua2V5ZG93bihmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGtleSA9IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlIHx8IDA7XHJcblx0XHRcdFx0cmV0dXJuIChrZXkgPT0gOCB8fCBrZXkgPT0gOSB8fCBrZXkgPT0gNDYgfHwgKGtleSA+PSAzNyAmJiBrZXkgPD0gNDApIHx8IChrZXkgPj0gNDggJiYga2V5IDw9IDU3KSB8fCAoa2V5ID49IDk2ICYmIGtleSA8PSAxMDUpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKtCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC60LDRgNGC0Ysg0L3QsCDRgdGC0YDQsNC90LjRhtC1INC60L7QvdGC0LDQutGC0YsqL1xyXG5cdGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcblx0XHR2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuXHRcdFx0em9vbTogMTgsXHJcblx0XHRcdGNlbnRlcjoge2xhdDogNTAuNDE1MjkxLCBsbmc6IDMwLjY2MDExNH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZhciBpbWFnZSA9IHtcclxuXHRcdFx0dXJsOiAnY3NzL3BpYy9tYXJrZXJfaWNvbi5wbmcnXHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdFx0cG9zaXRpb246IHtsYXQ6IDUwLjQxNTI5MSwgbG5nOiAzMC42NjAxMTR9LFxyXG5cdFx0XHRtYXA6IG1hcCxcclxuXHRcdFx0aWNvbjppbWFnZSxcclxuXHRcdFx0dGl0bGU6ICcnXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qINCf0L7QtNC60LvRjtGH0LXQvdC40LUg0YHQutGA0LjQv9GC0LAg0LvQtdCy0L7Qs9C+INC80LXQvdGOICovXHJcblx0bGV0ICRtdWx0aUxldmVsTWVudSA9ICQoJy5qcy1tdWx0aUxldmVsTWVudScpO1xyXG5cdGlmICgkbXVsdGlMZXZlbE1lbnUubGVuZ3RoKSB7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRsZXQgaW5pdEFzaWRlTWVudSA9IHJlcXVpcmUoJ2FzaWRlTWVudScpO1xyXG5cdFx0XHRpbml0QXNpZGVNZW51KCRtdWx0aUxldmVsTWVudSk7XHJcblx0XHR9KVxyXG5cdH1cclxuXHQvKiDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC80LDQs9C90LjRhNC40LrQsCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0LPQsNC70LvQtdGA0LXQuCovXHJcblx0bGV0ICRtYWduaWZpY1NlbGVjdG9ycyA9ICQoJy5tZmktZ2FsbGVyeScpLmFkZCgnLnZpZGVvTGluaycpO1xyXG5cdGlmICgkbWFnbmlmaWNTZWxlY3RvcnMubGVuZ3RoKSB7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXF1aXJlKCdtYWduaWZpYy1wb3B1cCcpO1xyXG5cdFx0XHQkKCcubWZpLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0XHRkZWxlZ2F0ZTogJ2EnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRcdFx0Z2FsbGVyeToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoJ2EudmlkZW9MaW5rJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdFx0dHlwZTogJ2lmcmFtZSdcclxuXHRcdFx0fSk7XHJcblx0fSlcclxuXHR9XHJcblxyXG5cdCQoJy50ZXh0UmV2aWV3Jykub24oJ2NsaWNrJywgJy50ZXh0UmV2aWV3X19tb3JlTGluaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRsZXRcclxuXHRcdFx0JGJsb2NrID0gJChlLmRlbGVnYXRlVGFyZ2V0KSxcclxuXHRcdFx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHR0bXAgPSAkdGhpcy5odG1sKCk7XHJcblx0XHQkdGhpcy5odG1sKCR0aGlzLmRhdGEoJ3RleHQnKSk7XHJcblx0XHQkdGhpcy5kYXRhKCd0ZXh0JywgdG1wKTtcclxuXHRcdCRibG9jay50b2dnbGVDbGFzcygnaXMtZXhwYW5kJyk7XHJcblx0fSlcclxuXHJcblx0aWYoJCgnLnJhdGVpdCcpLmxlbmd0aCl7XHJcblx0XHRyZXF1aXJlLmVuc3VyZShbXSxmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXF1aXJlKCdyYXRlaXQnKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQkKCdbZGF0YS1kcm9wZG93bl0nKS53em1DbGFzc1RvZ2dsZSh7XHJcblx0XHR0b2dnbGVTZWxlY3RvcjogJ1tkYXRhLWRyb3Bkb3duLXRvZ2dsZV0nLFxyXG5cdFx0dG9nZ2xlT25CbHVyOiB0cnVlXHJcblx0fSk7XHJcblxyXG5cdGlmICgkKCcjc2xpZGVyX2Vsc2UnKS5sZW5ndGgpIHtcclxuXHRcdCQoJyNzbGlkZXJfZWxzZScpLmNhcm91RnJlZFNlbCh7XHJcblx0XHRcdHBsYXk6IHRydWUsXHJcblx0XHRcdGF1dG86IHRydWUsXHJcblx0XHRcdGNpcmN1bGFyOiB0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOnRydWUsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogMzUwLFxyXG5cdFx0XHRpdGVtczoge1xyXG5cdFx0XHRcdHZpc2libGU6IHtcclxuXHRcdFx0XHRcdG1pbjogMSxcclxuXHRcdFx0XHRcdG1heDogNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpcGU6IHtcclxuXHRcdFx0XHRvblRvdWNoOiB0cnVlLFxyXG5cdFx0XHRcdG9uTW91c2U6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsOiB7XHJcblx0XHRcdFx0aXRlbXM6IDEsXHJcblx0XHRcdFx0Zng6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdGVhc2luZzogXCJzd2luZ1wiLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAoJCgnI3NsaWRlcl9lbHNlX3VuaXZlcnNhbCcpLmxlbmd0aCkge1xyXG5cdFx0JCgnI3NsaWRlcl9lbHNlX3VuaXZlcnNhbCcpLmNhcm91RnJlZFNlbCh7XHJcblx0XHRcdHBsYXk6IHRydWUsXHJcblx0XHRcdGF1dG86IHRydWUsXHJcblx0XHRcdGNpcmN1bGFyOiB0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlOnRydWUsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogMzUwLFxyXG5cdFx0XHRpdGVtczoge1xyXG5cdFx0XHRcdHZpc2libGU6IHtcclxuXHRcdFx0XHRcdG1pbjogMSxcclxuXHRcdFx0XHRcdG1heDogNFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpcGU6IHtcclxuXHRcdFx0XHRvblRvdWNoOiB0cnVlLFxyXG5cdFx0XHRcdG9uTW91c2U6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsOiB7XHJcblx0XHRcdFx0aXRlbXM6IDEsXHJcblx0XHRcdFx0Zng6ICdzY3JvbGwnLFxyXG5cdFx0XHRcdGVhc2luZzogXCJzd2luZ1wiLFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAwLFxyXG5cdFx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHRcdGluaXRNYXAoKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLmpzLXNob3ctaW5mb3JtYXRpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCgnLmpzLWhpZGRlbi1pbmZvcm1hdGlvbicpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XHJcblx0XHRcdHZhciBwaG9uZSA9ICQoZWxlbWVudCkuZGF0YSgnaW5mb3JtYXRpb24nKTtcclxuXHRcdFx0JChlbGVtZW50KS50ZXh0KHBob25lKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcubnVtYmVyc19vbmx5JykuRm9yY2VOdW1lcmljT25seSgpO1xyXG5cclxufSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9pbml0LmpzXG4gKiovIiwiKGZ1bmN0aW9uKHdpbmRvdywgJCkge1xyXG5cdHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cdHJlcXVpcmUoJ2pxdWVyeS12YWxpZGF0ZScpO1xyXG5cdHJlcXVpcmUoJ21hZ25pZmljLXBvcHVwJyk7XHJcblx0LyoqXHJcblx0ICogQG5hbWVzcGFjZSB3SFRNTFxyXG5cdCAqL1xyXG5cclxuXHR2YXIgX3NlbGY7XHJcblx0dmFyIHdIVE1MID0gZnVuY3Rpb24oKXtcclxuXHRcdF9zZWxmID0gdGhpcztcclxuXHR9O1xyXG5cclxuXHQvLyBtZXRob2RzXHJcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHR2YXIgX3Nlb1RleHRUaW1lciA9IG51bGw7XHJcblx0dmFyIF9zZW9UZXh0RGVsYXkgPSAxMDtcclxuXHR2YXIgJHNlb1RleHQ7XHJcblx0dmFyICRzZW9JZnJhbWU7XHJcblx0dmFyICRzZW9DbG9uZTtcclxuXHJcblx0LyoqXHJcblx0ICog0KHQvtC30LTQsNC10LwgaWZyYW1lXHJcblx0ICogQG1lbWJlcm9mIFx0d0hUTUxcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqIEBwYXJhbSBcdFx0e0VsZW1lbnR9XHRcdCRzZW9UZXh0IC0g0Y3Qu9C10LzQtdC90YIg0YHQtdC+INGC0LXQutGB0YLQsFxyXG5cdCAqIEByZXR1cm4gXHRcdHt1bmRlZmluZWR9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gX3Nlb0J1aWxkKCRzZW9UZXh0KSB7XHJcblx0XHR2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblx0XHRpZnJhbWUuaWQgPSAnc2VvSWZyYW1lJztcclxuXHRcdGlmcmFtZS5uYW1lID0gJ3Nlb0lmcmFtZSc7XHJcblx0XHQvLyDQstC60LjQtNGL0LLQsNC10Lwg0LIg0LHQu9C+0Log0KHQtdC+INGC0LXQutGB0YLQsFxyXG5cdFx0JHNlb1RleHRbMF0uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHRcdC8vINGB0YLQsNCy0LjQvCDQv9GA0L7RgdC70YPRiNC60YMg0L3QsCDRgNC10YHQsNC50LcgY29udGVudFdpbmRvd1xyXG5cdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdF9zZWxmLnNlb1RleHQoKTtcclxuXHRcdH0pO1xyXG5cdFx0X3NlbGYuc2VvVGV4dCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gYGFqYXhgINC80LXRgtC+0LTQsCDQv9C70LDQs9C40L3QsCBgbWFnbmlmaWMtcG9wdXBgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBtZW1iZXJvZiBcdHdIVE1MXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtbWFnbmlmaWMtcG9wdXBcclxuXHQgKiBAc2VlIFx0XHR7QGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI2FqYXgtdHlwZX1cclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5zZW9UZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgJHNlb1RleHQgPSAkc2VvVGV4dCB8fCAkKCcjc2VvVGV4dCcpO1xyXG5cdFx0aWYgKCRzZW9UZXh0Lmxlbmd0aCkge1xyXG5cdFx0XHR2YXIgJHNlb0lmcmFtZSA9ICRzZW9JZnJhbWUgfHwgJHNlb1RleHQuY2hpbGRyZW4oJyNzZW9JZnJhbWUnKTtcclxuXHRcdFx0aWYgKCRzZW9JZnJhbWUubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KF9zZW9UZXh0VGltZXIpO1xyXG5cdFx0XHRcdF9zZW9UZXh0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyICRzZW9DbG9uZSA9ICRzZW9DbG9uZSB8fCAkKCcjc2VvQ2xvbmUnKTtcclxuXHRcdFx0XHRcdGlmICgkc2VvQ2xvbmUubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdCRzZW9DbG9uZS5oZWlnaHQoJHNlb1RleHQub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG5cdFx0XHRcdFx0XHQkc2VvVGV4dC5jc3Moe1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogJHNlb0Nsb25lLm9mZnNldCgpLnRvcFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0X3Nlb1RleHREZWxheSA9IDUwO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKCcjc2VvQ2xvbmUgLSDQvdC1INC90LDQudC00LXQvScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIF9zZW9UZXh0RGVsYXkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdF9zZW9CdWlsZCgkc2VvVGV4dCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiDQkdCw0LfQvtCy0YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LTQu9GPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4IGB3SFRNTC5tZnBJbmxpbmVgXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICogQG1lbWJlcm9mIFx0d0hUTUxcclxuXHQgKiBAdHlwZVx0XHR7T2JqZWN0fVxyXG5cdCAqL1xyXG5cdHZhciBfbWZwSW5saW5lQmFzZUNvbmZpZyA9IHtcclxuXHRcdHR5cGU6ICdpbmxpbmUnLFxyXG5cdFx0Y2xvc2VCdG5JbnNpZGU6IHRydWUsXHJcblx0XHRyZW1vdmFsRGVsYXk6IDMwMCxcclxuXHRcdG1haW5DbGFzczogJ3pvb20taW4nXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gYGlubGluZWAg0LzQtdGC0L7QtNCwINC/0LvQsNCz0LjQvdCwIGBtYWduaWZpYy1wb3B1cGBcclxuXHQgKlxyXG5cdCAqIEBzb3VyY2Vjb2RlXHJcblx0ICogQG1lbWJlcm9mIFx0d0hUTUxcclxuXHQgKiBAdHV0b3JpYWwgXHR3b3Jrd2l0aC1tYWduaWZpYy1wb3B1cFxyXG5cdCAqIEBzZWVcdFx0XHR7QGxpbmsgaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI2lubGluZS10eXBlfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtXHRcdHtzdHJpbmd9IFx0W3NlbGVjdG9yPScuanMtbWZwLWlubGluZSddINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC5IGNzcyDRgdC10LvQtdC60YLQvtGAINC00LvRjyDQv9C+0LjRgdC60LAg0Lgg0LjQvdC40YLQsFxyXG5cdCAqIEByZXR1cm4gXHRcdHt1bmRlZmluZWR9XHJcblx0ICovXHJcblx0d0hUTUwucHJvdG90eXBlLm1mcElubGluZSA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcuanMtbWZwLWlubGluZSc7XHJcblx0XHQkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHR2YXIgJGVsID0gJChlbCk7XHJcblx0XHRcdHZhciBjdXN0b21Db25maWcgPSAkZWwuZGF0YSgnbWZwQ3VzdG9tQ29uZmlnJykgfHwge307XHJcblx0XHRcdHZhciBjdXJyZW50Q29uZmlnID0gJC5leHRlbmQodHJ1ZSwgX21mcElubGluZUJhc2VDb25maWcsIGN1c3RvbUNvbmZpZyk7XHJcblx0XHRcdCRlbC5tYWduaWZpY1BvcHVwKGN1cnJlbnRDb25maWcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/Qu9Cw0LPQuNC90LAgYGpxdWVyeS12YWxpZGF0ZWBcclxuXHQgKlxyXG5cdCAqIEBzb3VyY2Vjb2RlXHJcblx0ICogQHR1dG9yaWFsIFx0d29ya3dpdGgtanF1ZXJ5LXZhbGlkYXRlXHJcblx0ICogQGZpcmVzIFx0XHR3SFRNTCNmb3JtT25TdWJtaXRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e3N0cmluZ30gXHRcdFtzZWxlY3Rvcj0nLmpzLWZvcm0nXSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQuSBjc3Mg0YHQtdC70LXQutGC0L7RgCDQtNC70Y8g0L/QvtC40YHQutCwINC4INC40L3QuNGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5mb3JtVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcuanMtZm9ybSc7XHJcblx0XHQkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbCkge1xyXG5cdFx0XHR2YXIgJGZvcm0gPSAkKGVsKTtcclxuXHRcdFx0dmFyIHZhbGlkYXRvciA9ICRmb3JtLmRhdGEoJ3ZhbGlkYXRvcicpO1xyXG5cdFx0XHRpZiAodHlwZW9mIHZhbGlkYXRvciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcblx0XHRcdFx0aWYgKCRmb3JtLmlzKCdmb3JtJykpIHtcclxuXHRcdFx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCRmb3JtLnZhbGlkYXRlKHtcclxuXHRcdFx0XHRcdHNob3dFcnJvcnM6IGZ1bmN0aW9uKGVycm9yTWFwLCBlcnJvckxpc3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVycm9yTGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgZmlyc3RFcnJvciA9IGVycm9yTGlzdC5zaGlmdCgpO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBuZXdFcnJvckxpc3QgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRuZXdFcnJvckxpc3QucHVzaChmaXJzdEVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9yTGlzdCA9IG5ld0Vycm9yTGlzdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aW52YWxpZEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0sIHZhbGlkYXRvcikge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdub192YWxpZCcpXHJcblx0XHRcdFx0XHRcdFx0LmRhdGEoJ3ZhbGlkYXRvcicpLmZvY3VzSW52YWxpZCgpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcclxuXHRcdFx0XHRcdFx0dmFyICRjdXJyZW50Rm9ybSA9ICQoZm9ybSk7XHJcblx0XHRcdFx0XHRcdCRjdXJyZW50Rm9ybS5yZW1vdmVDbGFzcygnbm9fdmFsaWQnKS5hZGRDbGFzcygnc3VjY2VzcycpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5mb3JtT25TdWJtaXQoJGN1cnJlbnRGb3JtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKCRmb3JtLmlzKCdkaXYnKSkge1xyXG5cclxuXHRcdFx0XHRcdCRmb3JtLm9uKCdjbGljaycsICcuanMtZm9ybS1zdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdCRmb3JtLm9uKCdjaGFuZ2UnLCAnLmpzLWlucHV0LWZpbGUnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHQkZm9ybS5mb3JtR2V0RmlsZVZhbHVlcyh0aGlzKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdCRmb3JtLm9uKCdjbGljaycsICcuanMtZm9ybS1yZXNldCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdCRmb3JtLmZvcm1SZXNldCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiDQodC+0LHRi9GC0LjQtSwg0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtC5INCy0LDQu9C40LTQsNGG0LjQuCDRhNC+0YDQvNGLINC4INC+0YLQv9GA0LDQstC60Lgg0LTQsNC90L3Ri9GFLlxyXG5cdCAqXHJcblx0ICogQHNvdXJjZWNvZGVcclxuXHQgKiBAdHV0b3JpYWwgXHR3b3Jrd2l0aC1qcXVlcnktdmFsaWRhdGVcclxuXHQgKiBAZXZlbnQgXHRcdHdIVE1MI2Zvcm1BZnRlclN1Ym1pdFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIFx0XHR7RWxlbWVudH0gXHRcdCRmb3JtIC0g0YLQtdC60YPRidCw0Y8g0YTQvtGA0LzQsCwgYGpRdWVyeSBlbGVtZW50YFxyXG5cdCAqIEByZXR1cm4gXHRcdHt1bmRlZmluZWR9XHJcblx0ICovXHJcblx0d0hUTUwucHJvdG90eXBlLmZvcm1BZnRlclN1Ym1pdCA9IGZ1bmN0aW9uKCRmb3JtKSB7XHJcblx0XHRjb25zb2xlLndhcm4oJ0hUTUwgPT4g0KTQvtGA0LzQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCcpO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqINCh0L7QsdGL0YLQuNC1LCDQv9GA0Lgg0YPRgdC/0LXRiNC90L7QuSDQstCw0LvQuNC00LDRhtC40Lgg0YTQvtGA0LzRiy5cclxuXHQgKiDQkdGD0LTQtdGCINC30LDQvNC10L3QtdC90L3QviDQv9GA0Lgg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LguXHJcblx0ICpcclxuXHQgKiBAc291cmNlY29kZVxyXG5cdCAqIEB0dXRvcmlhbCBcdHdvcmt3aXRoLWpxdWVyeS12YWxpZGF0ZVxyXG5cdCAqIEBmaXJlcyBcdFx0d0hUTUwjZm9ybUFmdGVyU3VibWl0XHJcblx0ICogQGV2ZW50IFx0XHR3SFRNTCNmb3JtT25TdWJtaXRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBcdFx0e0VsZW1lbnR9IFx0XHQkZm9ybSAtINGC0LXQutGD0YnQsNGPINGE0L7RgNC80LAsIGBqUXVlcnkgZWxlbWVudGBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5mb3JtT25TdWJtaXQgPSBmdW5jdGlvbigkZm9ybSkge1xyXG5cdFx0Ly8g0L7RgtC/0YDQsNCy0LrQsCDQvdCwINGB0LXRgNCy0LDQulxyXG5cdFx0Ly8gLi4uXHJcblx0XHQvLyDQsiDQvtGC0LLQtdGC0LVcclxuXHRcdF9zZWxmLmZvcm1BZnRlclN1Ym1pdCgkZm9ybSk7XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyBgYWpheGAg0LzQtdGC0L7QtNCwINC/0LvQsNCz0LjQvdCwIGBtYWduaWZpYy1wb3B1cGBcclxuXHQgKlxyXG5cdCAqIEBzb3VyY2Vjb2RlXHJcblx0ICogQG1lbWJlcm9mIFx0d0hUTUxcclxuXHQgKiBAdHV0b3JpYWwgXHR3b3Jrd2l0aC1tYWduaWZpYy1wb3B1cFxyXG5cdCAqIEBzZWUgXHRcdHtAbGluayBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9kb2N1bWVudGF0aW9uLmh0bWwjYWpheC10eXBlfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIFx0XHR7c3RyaW5nfSBcdFx0W3NlbGVjdG9yPScuanMtbWZwLWFqYXgnXSDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQuSBjc3Mg0YHQtdC70LXQutGC0L7RgCDQtNC70Y8g0L/QvtC40YHQutCwINC4INC40L3QuNGC0LBcclxuXHQgKiBAcmV0dXJuIFx0XHR7dW5kZWZpbmVkfVxyXG5cdCAqL1xyXG5cdHdIVE1MLnByb3RvdHlwZS5tZnBBamF4ID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcclxuXHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJy5qcy1tZnAtYWpheCc7XHJcblx0XHQkKCdib2R5JykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRcdHR5cGU6ICdhamF4JyxcclxuXHRcdFx0ZGVsZWdhdGU6IHNlbGVjdG9yLFxyXG5cdFx0XHRyZW1vdmFsRGVsYXk6IDMwMCxcclxuXHRcdFx0bWFpbkNsYXNzOiAnem9vbS1pbicsXHJcblx0XHRcdGNhbGxiYWNrczoge1xyXG5cdFx0XHRcdGVsZW1lbnRQYXJzZTogZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zdC5hamF4LnNldHRpbmdzID0ge1xyXG5cdFx0XHRcdFx0XHR1cmw6IGl0ZW0uZWwuZGF0YSgndXJsJyksXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0XHRcdFx0ZGF0YTogaXRlbS5lbC5kYXRhKCdwYXJhbScpIHx8IHt9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWpheENvbnRlbnRBZGRlZDogZnVuY3Rpb24oZWwpIHtcclxuXHRcdFx0XHRcdF9zZWxmLmZvcm1WYWxpZGF0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGNvbm5lY3RTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLWNvbm5lY3QnKTtcclxuXHJcblx0XHRcdFx0XHRub1VpU2xpZGVyLmNyZWF0ZShjb25uZWN0U2xpZGVyLCB7XHJcblx0XHRcdFx0XHRcdHN0YXJ0OiA0MCxcclxuXHRcdFx0XHRcdFx0Y29ubmVjdDogJ2xvd2VyJyxcclxuXHRcdFx0XHRcdFx0cmFuZ2U6IHtcclxuXHRcdFx0XHRcdFx0XHQnbWluJzogMCxcclxuXHRcdFx0XHRcdFx0XHQnbWF4JzogMTAwXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGNvbm5lY3RTbGlkZXIubm9VaVNsaWRlci5vbignc2V0JywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0JCgnLnJhbmdlLXNsaWRlcicpLmFkZENsYXNzKCd2YWxpZCcpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0d2luZG93LndIVE1MID0gbmV3IHdIVE1MKCk7XHJcbn0pKHdpbmRvdywgalF1ZXJ5KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvbW9kdWxlcy93SFRNTC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJqUXVlcnlcIlxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIihmdW5jdGlvbihmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHRkZWZpbmUoW1wiLi9qcXVlcnlcIl0sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmYWN0b3J5KGpRdWVyeSk7XHJcblx0fVxyXG59KGZ1bmN0aW9uKCQpIHtcclxuXHJcbi8qXHJcblx00LHRi9GB0YLRgNGL0Lkg0L/QvtC40YHQuiDQv9C+INCy0YvQtNC10LvQtdC90LjRjlxyXG5cdFdlem9tRml4IC0g0YTQuNC60YHRiyDRgdC60YDQuNC/0YLQsFxyXG5cdFdlem9tUnVsZXMgLSDQv9GA0LDQstC40LvQsCDQstCw0LvQuNC00LDRhtC40LhcclxuKi9cclxuXHJcbmZ1bmN0aW9uIF9nZXRUeXBlTmFtZSh0eXBlKSB7XHJcblx0dmFyIHR5cGVfbmFtZTtcclxuXHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdGNhc2UgJ3NlbGVjdC1vbmUnOlxyXG5cdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcclxuXHRcdFx0dHlwZV9uYW1lID0gJ19zZWxlY3QnO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlICdyYWRpbyc6XHJcblx0XHRjYXNlICdjaGVja2JveCc6XHJcblx0XHRcdHR5cGVfbmFtZSA9ICdfY2hlY2tlcic7XHJcblx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHR5cGVfbmFtZSA9ICcnO1xyXG5cdH1cclxuXHRyZXR1cm4gdHlwZV9uYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0TWV0aG9kTXNnTmFtZShlbGVtZW50LCBtZXRob2QpIHtcclxuXHR2YXIgbWV0aG9kX25hbWU7XHJcblx0c3dpdGNoIChtZXRob2QpIHtcclxuXHRcdGNhc2UgJ3JlcXVpcmVkJzpcclxuXHRcdGNhc2UgJ21heGxlbmd0aCc6XHJcblx0XHRjYXNlICdtaW5sZW5ndGgnOlxyXG5cdFx0Y2FzZSAncmFuZ2VsZW5ndGgnOlxyXG5cdFx0XHRtZXRob2RfbmFtZSA9IG1ldGhvZCArIF9nZXRUeXBlTmFtZShlbGVtZW50LnR5cGUpO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRtZXRob2RfbmFtZSA9IG1ldGhvZDtcclxuXHR9XHJcblx0cmV0dXJuIG1ldGhvZF9uYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVzZXRJbnB1dHMoc2V0dCwgZWxzLCB0aHMpIHtcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHQgPSBlbHNbaV07XHJcblx0XHR2YXIganQgPSAkKHQpO1xyXG5cdFx0c3dpdGNoICh0LnR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc3VibWl0JzpcclxuXHRcdFx0Y2FzZSAncmVzZXQnOlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyYWRpbyc6XHJcblx0XHRcdGNhc2UgJ2NoZWNrYm94JzpcclxuXHRcdFx0XHR0LmNoZWNrZWQgPSB0LmRlZmF1bHRDaGVja2VkO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdmaWxlJzpcclxuXHRcdFx0XHR2YXIgbGFiZWwgPSAkKHQpLnNpYmxpbmdzKCcuanMtaW5wdXQtZmlsZScpO1xyXG5cdFx0XHRcdHQub3V0ZXJIVE1MID0gdC5vdXRlckhUTUw7XHJcblx0XHRcdFx0dGhzLmZvcm1HZXRGaWxlVmFsdWVzKHQsIGxhYmVsKTtcclxuXHRcdFx0XHRqdCA9IHRocy5maW5kKCcjJyArIHQuaWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHQudmFsdWUgPSB0LmRlZmF1bHRWYWx1ZTtcclxuXHRcdH1cclxuXHRcdGp0LnJlbW92ZUNsYXNzKHNldHQuZXJyb3JDbGFzcykudHJpZ2dlcignY2hhbmdlJykuc2libGluZ3Moc2V0dC5lcnJvckVsZW1lbnQgKyAnLicgKyBzZXR0LmVycm9yQ2xhc3MpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBfcmVzZXRTZWxlY3RzKHNldHQsIGVscykge1xyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRbXS5mb3JFYWNoLmNhbGwoZWxzW2ldLm9wdGlvbnMsIGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdGVsLnNlbGVjdGVkID0gZWwuZGVmYXVsdFNlbGVjdGVkO1xyXG5cdFx0fSk7XHJcblx0XHQkKGVsc1tpXSkucmVtb3ZlQ2xhc3Moc2V0dC5lcnJvckNsYXNzKS50cmlnZ2VyKCdjaGFuZ2UnKS5zaWJsaW5ncyhzZXR0LmVycm9yRWxlbWVudCArICcuJyArIHNldHQuZXJyb3JDbGFzcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHR9XHJcbn1cclxuXHJcbiQuZXh0ZW5kKCQuZm4sIHtcclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdmFsaWRhdGUvXHJcblx0dmFsaWRhdGU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcblx0XHQvLyBpZiBub3RoaW5nIGlzIHNlbGVjdGVkLCByZXR1cm4gbm90aGluZzsgY2FuJ3QgY2hhaW4gYW55d2F5XHJcblx0XHRpZiAoIXRoaXMubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJOb3RoaW5nIHNlbGVjdGVkLCBjYW4ndCB2YWxpZGF0ZSwgcmV0dXJuaW5nIG5vdGhpbmcuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjaGVjayBpZiBhIHZhbGlkYXRvciBmb3IgdGhpcyBmb3JtIHdhcyBhbHJlYWR5IGNyZWF0ZWRcclxuXHRcdHZhciB2YWxpZGF0b3IgPSAkLmRhdGEodGhpc1swXSwgXCJ2YWxpZGF0b3JcIik7XHJcblx0XHRpZiAodmFsaWRhdG9yKSB7XHJcblx0XHRcdHJldHVybiB2YWxpZGF0b3I7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQWRkIG5vdmFsaWRhdGUgdGFnIGlmIEhUTUw1LlxyXG5cdFx0dGhpcy5hdHRyKFwibm92YWxpZGF0ZVwiLCBcIm5vdmFsaWRhdGVcIik7XHJcblxyXG5cdFx0dmFsaWRhdG9yID0gbmV3ICQudmFsaWRhdG9yKG9wdGlvbnMsIHRoaXNbMF0pO1xyXG5cdFx0JC5kYXRhKHRoaXNbMF0sIFwidmFsaWRhdG9yXCIsIHZhbGlkYXRvcik7XHJcblxyXG5cdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5vbnN1Ym1pdCkge1xyXG5cclxuXHRcdFx0dGhpcy5vbihcImNsaWNrLnZhbGlkYXRlXCIsIFwiOnN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGlmICh2YWxpZGF0b3Iuc2V0dGluZ3Muc3VibWl0SGFuZGxlcikge1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLnN1Ym1pdEJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFsbG93IHN1cHByZXNzaW5nIHZhbGlkYXRpb24gYnkgYWRkaW5nIGEgY2FuY2VsIGNsYXNzIHRvIHRoZSBzdWJtaXQgYnV0dG9uXHJcblx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJjYW5jZWxcIikpIHtcclxuXHRcdFx0XHRcdHZhbGlkYXRvci5jYW5jZWxTdWJtaXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWxsb3cgc3VwcHJlc3NpbmcgdmFsaWRhdGlvbiBieSBhZGRpbmcgdGhlIGh0bWw1IGZvcm1ub3ZhbGlkYXRlIGF0dHJpYnV0ZSB0byB0aGUgc3VibWl0IGJ1dHRvblxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmF0dHIoXCJmb3Jtbm92YWxpZGF0ZVwiKSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gdmFsaWRhdGUgdGhlIGZvcm0gb24gc3VibWl0XHJcblx0XHRcdHRoaXMub24oXCJzdWJtaXQudmFsaWRhdGVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAodmFsaWRhdG9yLnNldHRpbmdzLmRlYnVnKSB7XHJcblx0XHRcdFx0XHQvLyBwcmV2ZW50IGZvcm0gc3VibWl0IHRvIGJlIGFibGUgdG8gc2VlIGNvbnNvbGUgb3V0cHV0XHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmdW5jdGlvbiBoYW5kbGUoKSB7XHJcblx0XHRcdFx0XHR2YXIgaGlkZGVuLCByZXN1bHQ7XHJcblx0XHRcdFx0XHRpZiAodmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbGlkYXRvci5zdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBpbnNlcnQgYSBoaWRkZW4gaW5wdXQgYXMgYSByZXBsYWNlbWVudCBmb3IgdGhlIG1pc3Npbmcgc3VibWl0IGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGhpZGRlbiA9ICQoXCI8aW5wdXQgdHlwZT0naGlkZGVuJy8+XCIpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cihcIm5hbWVcIiwgdmFsaWRhdG9yLnN1Ym1pdEJ1dHRvbi5uYW1lKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnZhbCgkKHZhbGlkYXRvci5zdWJtaXRCdXR0b24pLnZhbCgpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZFRvKHZhbGlkYXRvci5jdXJyZW50Rm9ybSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gdmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIuY2FsbCh2YWxpZGF0b3IsIHZhbGlkYXRvci5jdXJyZW50Rm9ybSwgZXZlbnQpO1xyXG5cdFx0XHRcdFx0XHRpZiAodmFsaWRhdG9yLnN1Ym1pdEJ1dHRvbikge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGFuZCBjbGVhbiB1cCBhZnRlcndhcmRzOyB0aGFua3MgdG8gbm8tYmxvY2stc2NvcGUsIGhpZGRlbiBjYW4gYmUgcmVmZXJlbmNlZFxyXG5cdFx0XHRcdFx0XHRcdGhpZGRlbi5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gcHJldmVudCBzdWJtaXQgZm9yIGludmFsaWQgZm9ybXMgb3IgY3VzdG9tIHN1Ym1pdCBoYW5kbGVyc1xyXG5cdFx0XHRcdGlmICh2YWxpZGF0b3IuY2FuY2VsU3VibWl0KSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh2YWxpZGF0b3IuZm9ybSgpKSB7XHJcblx0XHRcdFx0XHRpZiAodmFsaWRhdG9yLnBlbmRpbmdSZXF1ZXN0KSB7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YWxpZGF0b3IuZm9jdXNJbnZhbGlkKCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xyXG5cdH0sXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3ZhbGlkL1xyXG5cdHZhbGlkOiBmdW5jdGlvbigpIHtcclxuXHRcdHZhciB2YWxpZCwgdmFsaWRhdG9yLCBlcnJvckxpc3Q7XHJcblxyXG5cdFx0aWYgKCQodGhpc1swXSkuaXMoXCJmb3JtXCIpKSB7XHJcblx0XHRcdHZhbGlkID0gdGhpcy52YWxpZGF0ZSgpLmZvcm0oKTtcclxuXHRcdH0gZWxzZSBpZiAoJCh0aGlzWzBdKS5pcyhcImRpdlwiKSkgeyAvLyBXZXpvbUZpeFxyXG5cdFx0XHR2YWxpZCA9IHRoaXMudmFsaWRhdGUoKS5mb3JtKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlcnJvckxpc3QgPSBbXTtcclxuXHRcdFx0dmFsaWQgPSB0cnVlO1xyXG5cdFx0XHR2YWxpZGF0b3IgPSAkKHRoaXMpLmNsb3Nlc3QoJy5qcy1mb3JtJykudmFsaWRhdGUoKTsvLyBXZXpvbUZpeFxyXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFsaWQgPSB2YWxpZGF0b3IuZWxlbWVudCh0aGlzKSAmJiB2YWxpZDtcclxuXHRcdFx0XHRlcnJvckxpc3QgPSBlcnJvckxpc3QuY29uY2F0KHZhbGlkYXRvci5lcnJvckxpc3QpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmFsaWRhdG9yLmVycm9yTGlzdCA9IGVycm9yTGlzdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWxpZDtcclxuXHR9LFxyXG5cclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcnVsZXMvXHJcblx0cnVsZXM6IGZ1bmN0aW9uKGNvbW1hbmQsIGFyZ3VtZW50KSB7XHJcblx0XHR2YXIgZWxlbWVudCA9IHRoaXNbMF0sXHJcblx0XHRcdHNldHRpbmdzLCBzdGF0aWNSdWxlcywgZXhpc3RpbmdSdWxlcywgZGF0YSwgcGFyYW0sIGZpbHRlcmVkO1xyXG5cclxuXHRcdGlmIChjb21tYW5kKSB7XHJcblx0XHRcdHNldHRpbmdzID0gJC5kYXRhKGVsZW1lbnQuZm9ybSwgXCJ2YWxpZGF0b3JcIikuc2V0dGluZ3M7XHJcblx0XHRcdHN0YXRpY1J1bGVzID0gc2V0dGluZ3MucnVsZXM7XHJcblx0XHRcdGV4aXN0aW5nUnVsZXMgPSAkLnZhbGlkYXRvci5zdGF0aWNSdWxlcyhlbGVtZW50KTtcclxuXHRcdFx0c3dpdGNoIChjb21tYW5kKSB7XHJcblx0XHRcdGNhc2UgXCJhZGRcIjpcclxuXHRcdFx0XHQkLmV4dGVuZChleGlzdGluZ1J1bGVzLCAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKGFyZ3VtZW50KSk7XHJcblx0XHRcdFx0Ly8gcmVtb3ZlIG1lc3NhZ2VzIGZyb20gcnVsZXMsIGJ1dCBhbGxvdyB0aGVtIHRvIGJlIHNldCBzZXBhcmF0ZWx5XHJcblx0XHRcdFx0ZGVsZXRlIGV4aXN0aW5nUnVsZXMubWVzc2FnZXM7XHJcblx0XHRcdFx0c3RhdGljUnVsZXNbZWxlbWVudC5uYW1lXSA9IGV4aXN0aW5nUnVsZXM7XHJcblx0XHRcdFx0aWYgKGFyZ3VtZW50Lm1lc3NhZ2VzKSB7XHJcblx0XHRcdFx0XHRzZXR0aW5ncy5tZXNzYWdlc1tlbGVtZW50Lm5hbWVdID0gJC5leHRlbmQoc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXSwgYXJndW1lbnQubWVzc2FnZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInJlbW92ZVwiOlxyXG5cdFx0XHRcdGlmICghYXJndW1lbnQpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBzdGF0aWNSdWxlc1tlbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGV4aXN0aW5nUnVsZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbHRlcmVkID0ge307XHJcblx0XHRcdFx0JC5lYWNoKGFyZ3VtZW50LnNwbGl0KC9cXHMvKSwgZnVuY3Rpb24oaW5kZXgsIG1ldGhvZCkge1xyXG5cdFx0XHRcdFx0ZmlsdGVyZWRbbWV0aG9kXSA9IGV4aXN0aW5nUnVsZXNbbWV0aG9kXTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBleGlzdGluZ1J1bGVzW21ldGhvZF07XHJcblx0XHRcdFx0XHRpZiAobWV0aG9kID09PSBcInJlcXVpcmVkXCIpIHtcclxuXHRcdFx0XHRcdFx0JChlbGVtZW50KS5yZW1vdmVBdHRyKFwiYXJpYS1yZXF1aXJlZFwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRkYXRhID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZXMoXHJcblx0XHQkLmV4dGVuZChcclxuXHRcdFx0e30sXHJcblx0XHRcdCQudmFsaWRhdG9yLmNsYXNzUnVsZXMoZWxlbWVudCksXHJcblx0XHRcdCQudmFsaWRhdG9yLmF0dHJpYnV0ZVJ1bGVzKGVsZW1lbnQpLFxyXG5cdFx0XHQkLnZhbGlkYXRvci5kYXRhUnVsZXMoZWxlbWVudCksXHJcblx0XHRcdCQudmFsaWRhdG9yLnN0YXRpY1J1bGVzKGVsZW1lbnQpXHJcblx0XHQpLCBlbGVtZW50KTtcclxuXHJcblx0XHQvLyBtYWtlIHN1cmUgcmVxdWlyZWQgaXMgYXQgZnJvbnRcclxuXHRcdGlmIChkYXRhLnJlcXVpcmVkKSB7XHJcblx0XHRcdHBhcmFtID0gZGF0YS5yZXF1aXJlZDtcclxuXHRcdFx0ZGVsZXRlIGRhdGEucmVxdWlyZWQ7XHJcblx0XHRcdGRhdGEgPSAkLmV4dGVuZCh7IHJlcXVpcmVkOiBwYXJhbSB9LCBkYXRhKTtcclxuXHRcdFx0JChlbGVtZW50KS5hdHRyKFwiYXJpYS1yZXF1aXJlZFwiLCBcInRydWVcIik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWFrZSBzdXJlIHJlbW90ZSBpcyBhdCBiYWNrXHJcblx0XHRpZiAoZGF0YS5yZW1vdGUpIHtcclxuXHRcdFx0cGFyYW0gPSBkYXRhLnJlbW90ZTtcclxuXHRcdFx0ZGVsZXRlIGRhdGEucmVtb3RlO1xyXG5cdFx0XHRkYXRhID0gJC5leHRlbmQoZGF0YSwgeyByZW1vdGU6IHBhcmFtIH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0sXHJcblx0Ly8gV2V6b21GaXhcclxuXHRmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHRocyA9ICQodGhpc1swXSk7XHJcblx0XHR2YXIgc2V0dCA9IHRocy52YWxpZGF0ZSgpLnNldHRpbmdzO1xyXG5cdFx0dGhzLnJlbW92ZUNsYXNzKCdzdWNjZXNzJyk7XHJcblx0XHR0aHMucmVtb3ZlQ2xhc3MoJ25vX3ZhbGlkJyk7XHJcblx0XHRfcmVzZXRJbnB1dHMoc2V0dCwgdGhzLmZpbmQoJ2lucHV0JyksIHRocyk7XHJcblx0XHRfcmVzZXRJbnB1dHMoc2V0dCwgdGhzLmZpbmQoJ3RleHRhcmVhJyksIHRocyk7XHJcblx0XHRfcmVzZXRTZWxlY3RzKHNldHQsIHRocy5maW5kKCdzZWxlY3QnKSwgdGhzKTtcclxuXHR9LFxyXG5cdC8vIFdlem9tRml4XHJcblx0Zm9ybUdldEZpbGVWYWx1ZXM6IGZ1bmN0aW9uKGlucHV0LCBpc0xhYmVsKSB7XHJcblx0XHR2YXIgbXVsdGlwbGUgPSBpbnB1dC5tdWx0aXBsZTtcclxuXHRcdHZhciBmaWxlcyA9IGlucHV0LmZpbGVzO1xyXG5cdFx0dmFyIGZpbGVzTGVuZ3RoID0gZmlsZXMubGVuZ3RoO1xyXG5cdFx0dmFyIHRocyA9ICQoaW5wdXQpO1xyXG5cdFx0dmFyIGxhYmVsID0gaXNMYWJlbCB8fCB0aHMucGFyZW50KCkuZmluZCgnLmpzLWlucHV0LWZpbGUnKTtcclxuXHRcdHZhciBub1NlbGVjdGVkID0gJ9Cd0LjRh9C10LPQviDQvdC1INCy0YvQsdGA0LDQvdC+JztcclxuXHRcdHZhciBpc1NlbGVjdGVkID0gKG11bHRpcGxlKSA/ICfQktGL0LHRgNCw0L3QviDRhNCw0LnQu9C+0LIgLSAlY291bnQ6IDxpbnM+KCVmaWxlcyk8L2lucz4nIDogJ9CS0YvQsdGA0LDQvdC+OiA8aW5zPiVmaWxlczwvaW5zPic7XHJcblx0XHRpZiAodHlwZW9mIGxhYmVsLmRhdGEoJ2xhYmVsLXRleHQnKSA9PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRub1NlbGVjdGVkID0gbGFiZWwuZGF0YSgnbGFiZWwtdGV4dCcpWzBdO1xyXG5cdFx0XHRpc1NlbGVjdGVkID0gbGFiZWwuZGF0YSgnbGFiZWwtdGV4dCcpWzFdO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHJlc3VsdCA9IG5vU2VsZWN0ZWQ7XHJcblx0XHRpZiAoZmlsZXNMZW5ndGgpIHtcclxuXHRcdFx0dmFyIGZpbGVOYW1lcztcclxuXHRcdFx0cmVzdWx0ID0gaXNTZWxlY3RlZDtcclxuXHRcdFx0aWYgKG11bHRpcGxlKSB7XHJcblx0XHRcdFx0dmFyIGZpbGVBcnIgPSBbXTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGZpbGVBcnIucHVzaChmaWxlc1tpXS5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoLyVjb3VudC9nLCBmaWxlc0xlbmd0aCk7XHJcblx0XHRcdFx0ZmlsZU5hbWVzID0gZmlsZUFyci5qb2luKCcsJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZmlsZU5hbWVzID0gZmlsZXNbMF0ubmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvJWZpbGVzL2csIGZpbGVOYW1lcyk7XHJcblx0XHR9XHJcblx0XHR0aHMuYmx1cigpO1xyXG5cdFx0bGFiZWwuaHRtbCgnPHNwYW4+JytyZXN1bHQrJzwvc3Bhbj4nKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdG9yc1xyXG4kLmV4dGVuZCgkLmV4cHJbXCI6XCJdLCB7XHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2JsYW5rLXNlbGVjdG9yL1xyXG5cdGJsYW5rOiBmdW5jdGlvbihhKSB7XHJcblx0XHRyZXR1cm4gISQudHJpbShcIlwiICsgJChhKS52YWwoKSk7XHJcblx0fSxcclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZmlsbGVkLXNlbGVjdG9yL1xyXG5cdGZpbGxlZDogZnVuY3Rpb24oYSkge1xyXG5cdFx0cmV0dXJuICEhJC50cmltKFwiXCIgKyAkKGEpLnZhbCgpKTtcclxuXHR9LFxyXG5cdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy91bmNoZWNrZWQtc2VsZWN0b3IvXHJcblx0dW5jaGVja2VkOiBmdW5jdGlvbihhKSB7XHJcblx0XHRyZXR1cm4gISQoYSkucHJvcChcImNoZWNrZWRcIik7XHJcblx0fVxyXG59KTtcclxuXHJcbi8vIGNvbnN0cnVjdG9yIGZvciB2YWxpZGF0b3JcclxuJC52YWxpZGF0b3IgPSBmdW5jdGlvbihvcHRpb25zLCBmb3JtKSB7XHJcblx0dGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHRydWUsIHt9LCAkLnZhbGlkYXRvci5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblx0dGhpcy5jdXJyZW50Rm9ybSA9IGZvcm07XHJcblx0dGhpcy5pbml0KCk7XHJcbn07XHJcblxyXG4vLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvalF1ZXJ5LnZhbGlkYXRvci5mb3JtYXQvXHJcbiQudmFsaWRhdG9yLmZvcm1hdCA9IGZ1bmN0aW9uKHNvdXJjZSwgcGFyYW1zKSB7XHJcblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGFyZ3MgPSAkLm1ha2VBcnJheShhcmd1bWVudHMpO1xyXG5cdFx0XHRhcmdzLnVuc2hpZnQoc291cmNlKTtcclxuXHRcdFx0cmV0dXJuICQudmFsaWRhdG9yLmZvcm1hdC5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdH07XHJcblx0fVxyXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBwYXJhbXMuY29uc3RydWN0b3IgIT09IEFycmF5ICkge1xyXG5cdFx0cGFyYW1zID0gJC5tYWtlQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKTtcclxuXHR9XHJcblx0aWYgKHBhcmFtcy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcclxuXHRcdHBhcmFtcyA9IFtwYXJhbXNdO1xyXG5cdH1cclxuXHQkLmVhY2gocGFyYW1zLCBmdW5jdGlvbihpLCBuKSB7XHJcblx0XHRzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHtcIiArIGkgKyBcIlxcXFx9XCIsIFwiZ1wiKSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiBuO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0cmV0dXJuIHNvdXJjZTtcclxufTtcclxuXHJcbiQuZXh0ZW5kKCQudmFsaWRhdG9yLCB7XHJcblxyXG5cdGRlZmF1bHRzOiB7XHJcblx0XHRtZXNzYWdlczoge30sXHJcblx0XHRncm91cHM6IHt9LFxyXG5cdFx0cnVsZXM6IHt9LFxyXG5cdFx0ZXJyb3JDbGFzczogXCJlcnJvclwiLFxyXG5cdFx0dmFsaWRDbGFzczogXCJ2YWxpZFwiLFxyXG5cdFx0ZXJyb3JFbGVtZW50OiBcImxhYmVsXCIsXHJcblx0XHRmb2N1c0NsZWFudXA6IGZhbHNlLFxyXG5cdFx0Zm9jdXNJbnZhbGlkOiB0cnVlLFxyXG5cdFx0ZXJyb3JDb250YWluZXI6ICQoW10pLFxyXG5cdFx0ZXJyb3JMYWJlbENvbnRhaW5lcjogJChbXSksXHJcblx0XHRvbnN1Ym1pdDogdHJ1ZSxcclxuXHRcdGlnbm9yZTogXCI6aGlkZGVuXCIsXHJcblx0XHRpZ25vcmVUaXRsZTogZmFsc2UsXHJcblx0XHRvbmZvY3VzaW46IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0dGhpcy5sYXN0QWN0aXZlID0gZWxlbWVudDtcclxuXHJcblx0XHRcdC8vIEhpZGUgZXJyb3IgbGFiZWwgYW5kIHJlbW92ZSBlcnJvciBjbGFzcyBvbiBmb2N1cyBpZiBlbmFibGVkXHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmZvY3VzQ2xlYW51cCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcywgZWxlbWVudCwgdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmhpZGVUaGVzZSh0aGlzLmVycm9yc0ZvcihlbGVtZW50KSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbmZvY3Vzb3V0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdGlmICghdGhpcy5jaGVja2FibGUoZWxlbWVudCkgJiYgKGVsZW1lbnQubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCB8fCAhdGhpcy5vcHRpb25hbChlbGVtZW50KSkpIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQoZWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbmtleXVwOiBmdW5jdGlvbihlbGVtZW50LCBldmVudCkge1xyXG5cdFx0XHQvLyBBdm9pZCByZXZhbGlkYXRlIHRoZSBmaWVsZCB3aGVuIHByZXNzaW5nIG9uZSBvZiB0aGUgZm9sbG93aW5nIGtleXNcclxuXHRcdFx0Ly8gU2hpZnRcdCAgID0+IDE2XHJcblx0XHRcdC8vIEN0cmxcdFx0PT4gMTdcclxuXHRcdFx0Ly8gQWx0XHRcdCA9PiAxOFxyXG5cdFx0XHQvLyBDYXBzIGxvY2sgICA9PiAyMFxyXG5cdFx0XHQvLyBFbmRcdFx0ID0+IDM1XHJcblx0XHRcdC8vIEhvbWVcdFx0PT4gMzZcclxuXHRcdFx0Ly8gTGVmdCBhcnJvdyAgPT4gMzdcclxuXHRcdFx0Ly8gVXAgYXJyb3dcdD0+IDM4XHJcblx0XHRcdC8vIFJpZ2h0IGFycm93ID0+IDM5XHJcblx0XHRcdC8vIERvd24gYXJyb3cgID0+IDQwXHJcblx0XHRcdC8vIEluc2VydFx0ICA9PiA0NVxyXG5cdFx0XHQvLyBOdW0gbG9ja1x0PT4gMTQ0XHJcblx0XHRcdC8vIEFsdEdyIGtleSAgID0+IDIyNVxyXG5cdFx0XHR2YXIgZXhjbHVkZWRLZXlzID0gW1xyXG5cdFx0XHRcdDE2LCAxNywgMTgsIDIwLCAzNSwgMzYsIDM3LFxyXG5cdFx0XHRcdDM4LCAzOSwgNDAsIDQ1LCAxNDQsIDIyNVxyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0aWYgKGV2ZW50LndoaWNoID09PSA5ICYmIHRoaXMuZWxlbWVudFZhbHVlKGVsZW1lbnQpID09PSBcIlwiIHx8ICQuaW5BcnJheShldmVudC5rZXlDb2RlLCBleGNsdWRlZEtleXMpICE9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gMTMgJiYgZWxlbWVudC50YWdOYW1lICE9PSAnVEVYVEFSRUEnKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcy5jdXJyZW50Rm9ybSkuZGF0YSgndmFsaWRhdG9yJykuY2hlY2tGb3JtKCkpIHtcclxuXHRcdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkuc3VibWl0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCB8fCB0aGlzLmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25jbGljazogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHQvLyBjbGljayBvbiBzZWxlY3RzLCByYWRpb2J1dHRvbnMgYW5kIGNoZWNrYm94ZXNcclxuXHRcdFx0aWYgKGVsZW1lbnQubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCkge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudChlbGVtZW50KTtcclxuXHJcblx0XHRcdC8vIG9yIG9wdGlvbiBlbGVtZW50cywgY2hlY2sgcGFyZW50IHNlbGVjdCBpbiB0aGF0IGNhc2VcclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LnBhcmVudE5vZGUubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCkge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudChlbGVtZW50LnBhcmVudE5vZGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50LCBlcnJvckNsYXNzLCB2YWxpZENsYXNzKSB7XHJcblx0XHRcdGlmIChlbGVtZW50LnR5cGUgPT09IFwicmFkaW9cIikge1xyXG5cdFx0XHRcdHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpLmFkZENsYXNzKGVycm9yQ2xhc3MpLnJlbW92ZUNsYXNzKHZhbGlkQ2xhc3MpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoZXJyb3JDbGFzcykucmVtb3ZlQ2xhc3ModmFsaWRDbGFzcyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcykge1xyXG5cdFx0XHRpZiAoZWxlbWVudC50eXBlID09PSBcInJhZGlvXCIpIHtcclxuXHRcdFx0XHR0aGlzLmZpbmRCeU5hbWUoZWxlbWVudC5uYW1lKS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKS5hZGRDbGFzcyh2YWxpZENsYXNzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpLmFkZENsYXNzKHZhbGlkQ2xhc3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3Iuc2V0RGVmYXVsdHMvXHJcblx0c2V0RGVmYXVsdHM6IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCgkLnZhbGlkYXRvci5kZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cdH0sXHJcblxyXG5cdG1lc3NhZ2VzOiB7XHJcblx0XHRyZXF1aXJlZDogXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiLFxyXG5cdFx0cmVtb3RlOiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcclxuXHRcdGVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIsXHJcblx0XHR1cmw6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMLlwiLFxyXG5cdFx0ZGF0ZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLFxyXG5cdFx0ZGF0ZUlTTzogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlIChJU08pLlwiLFxyXG5cdFx0bnVtYmVyOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIG51bWJlci5cIixcclxuXHRcdGRpZ2l0czogXCJQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuXCIsXHJcblx0XHRjcmVkaXRjYXJkOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGNyZWRpdCBjYXJkIG51bWJlci5cIixcclxuXHRcdGVxdWFsVG86IFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHZhbHVlIGFnYWluLlwiLFxyXG5cdFx0bWF4bGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgbm8gbW9yZSB0aGFuIHswfSBjaGFyYWN0ZXJzLlwiKSxcclxuXHRcdG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IHswfSBjaGFyYWN0ZXJzLlwiKSxcclxuXHRcdHJhbmdlbGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBiZXR3ZWVuIHswfSBhbmQgezF9IGNoYXJhY3RlcnMgbG9uZy5cIiksXHJcblx0XHRyYW5nZTogJC52YWxpZGF0b3IuZm9ybWF0KFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfS5cIiksXHJcblx0XHRtYXg6ICQudmFsaWRhdG9yLmZvcm1hdChcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7MH0uXCIpLFxyXG5cdFx0bWluOiAkLnZhbGlkYXRvci5mb3JtYXQoXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiKVxyXG5cdH0sXHJcblxyXG5cdGF1dG9DcmVhdGVSYW5nZXM6IGZhbHNlLFxyXG5cclxuXHRwcm90b3R5cGU6IHtcclxuXHJcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5sYWJlbENvbnRhaW5lciA9ICQodGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyKTtcclxuXHRcdFx0dGhpcy5lcnJvckNvbnRleHQgPSB0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCAmJiB0aGlzLmxhYmVsQ29udGFpbmVyIHx8ICQodGhpcy5jdXJyZW50Rm9ybSk7XHJcblx0XHRcdHRoaXMuY29udGFpbmVycyA9ICQodGhpcy5zZXR0aW5ncy5lcnJvckNvbnRhaW5lcikuYWRkKHRoaXMuc2V0dGluZ3MuZXJyb3JMYWJlbENvbnRhaW5lcik7XHJcblx0XHRcdHRoaXMuc3VibWl0dGVkID0ge307XHJcblx0XHRcdHRoaXMudmFsdWVDYWNoZSA9IHt9O1xyXG5cdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0ID0gMDtcclxuXHRcdFx0dGhpcy5wZW5kaW5nID0ge307XHJcblx0XHRcdHRoaXMuaW52YWxpZCA9IHt9O1xyXG5cdFx0XHR0aGlzLnJlc2V0KCk7XHJcblxyXG5cdFx0XHR2YXIgZ3JvdXBzID0gKHRoaXMuZ3JvdXBzID0ge30pLFxyXG5cdFx0XHRcdHJ1bGVzO1xyXG5cdFx0XHQkLmVhY2godGhpcy5zZXR0aW5ncy5ncm91cHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KC9cXHMvKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0JC5lYWNoKHZhbHVlLCBmdW5jdGlvbihpbmRleCwgbmFtZSkge1xyXG5cdFx0XHRcdFx0Z3JvdXBzW25hbWVdID0ga2V5O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cnVsZXMgPSB0aGlzLnNldHRpbmdzLnJ1bGVzO1xyXG5cdFx0XHQkLmVhY2gocnVsZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0XHRydWxlc1trZXldID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSh2YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZGVsZWdhdGUoZXZlbnQpIHtcclxuXHRcdFx0XHQvLyBXZXpvbUZpeFxyXG5cdFx0XHRcdHZhciB2YWxpZGF0b3IsIGZvcm0sIGV2ZW50VHlwZTtcclxuXHRcdFx0XHRmb3JtID0gdGhpcy5mb3JtO1xyXG5cclxuXHRcdFx0XHRpZiAoIWZvcm0pIHtcclxuXHRcdFx0XHRcdGZvcm0gPSAkKHRoaXMpLmNsb3Nlc3QoXCJkaXZbZGF0YS1mb3JtPSd0cnVlJ11cIikuZ2V0KDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YWxpZGF0b3IgPSAkLmRhdGEoZm9ybSwgXCJ2YWxpZGF0b3JcIik7XHJcblx0XHRcdFx0ZXZlbnRUeXBlID0gXCJvblwiICsgZXZlbnQudHlwZS5yZXBsYWNlKC9edmFsaWRhdGUvLCBcIlwiKTtcclxuXHRcdFx0XHQvKnRoaXMuc2V0dGluZ3MgPSB2YWxpZGF0b3Iuc2V0dGluZ3M7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2V0dGluZ3NbZXZlbnRUeXBlXSAmJiAhdGhpcy5pcyh0aGlzLnNldHRpbmdzLmlnbm9yZSkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3NbZXZlbnRUeXBlXS5jYWxsKHZhbGlkYXRvciwgdGhpc1swXSwgZXZlbnQpO1xyXG5cdFx0XHRcdH0qL1xyXG5cdFx0XHRcdHZhciBzZXR0aW5ncyA9IHZhbGlkYXRvci5zZXR0aW5ncztcclxuXHRcdFx0XHRpZiAoc2V0dGluZ3NbZXZlbnRUeXBlXSAmJiAhJCh0aGlzKS5pcyhzZXR0aW5ncy5pZ25vcmUpKSB7XHJcblx0XHRcdFx0XHRzZXR0aW5nc1tldmVudFR5cGVdLmNhbGwodmFsaWRhdG9yLCB0aGlzLCBldmVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pXHJcblx0XHRcdFx0Lm9uKFwiZm9jdXNpbi52YWxpZGF0ZSBmb2N1c291dC52YWxpZGF0ZSBrZXl1cC52YWxpZGF0ZVwiLFxyXG5cdFx0XHRcdFx0XCI6dGV4dCwgW3R5cGU9J3Bhc3N3b3JkJ10sIFt0eXBlPSdmaWxlJ10sIHNlbGVjdCwgdGV4dGFyZWEsIFt0eXBlPSdudW1iZXInXSwgW3R5cGU9J3NlYXJjaCddLCBcIiArXHJcblx0XHRcdFx0XHRcIlt0eXBlPSd0ZWwnXSwgW3R5cGU9J3VybCddLCBbdHlwZT0nZW1haWwnXSwgW3R5cGU9J2RhdGV0aW1lJ10sIFt0eXBlPSdkYXRlJ10sIFt0eXBlPSdtb250aCddLCBcIiArXHJcblx0XHRcdFx0XHRcIlt0eXBlPSd3ZWVrJ10sIFt0eXBlPSd0aW1lJ10sIFt0eXBlPSdkYXRldGltZS1sb2NhbCddLCBbdHlwZT0ncmFuZ2UnXSwgW3R5cGU9J2NvbG9yJ10sIFwiICtcclxuXHRcdFx0XHRcdFwiW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddXCIsIGRlbGVnYXRlKVxyXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSwgb2xkSUVcclxuXHRcdFx0XHQvLyBcInNlbGVjdFwiIGlzIHByb3ZpZGVkIGFzIGV2ZW50LnRhcmdldCB3aGVuIGNsaWNraW5nIGEgb3B0aW9uXHJcblx0XHRcdFx0Lm9uKFwiY2xpY2sudmFsaWRhdGVcIiwgXCJzZWxlY3QsIG9wdGlvbiwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddXCIsIGRlbGVnYXRlKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyKSB7XHJcblx0XHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKS5vbihcImludmFsaWQtZm9ybS52YWxpZGF0ZVwiLCB0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQWRkIGFyaWEtcmVxdWlyZWQgdG8gYW55IFN0YXRpYy9EYXRhL0NsYXNzIHJlcXVpcmVkIGZpZWxkcyBiZWZvcmUgZmlyc3QgdmFsaWRhdGlvblxyXG5cdFx0XHQvLyBTY3JlZW4gcmVhZGVycyByZXF1aXJlIHRoaXMgYXR0cmlidXRlIHRvIGJlIHByZXNlbnQgYmVmb3JlIHRoZSBpbml0aWFsIHN1Ym1pc3Npb24gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRy1URUNIUy9BUklBMi5odG1sXHJcblx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcIltyZXF1aXJlZF0sIFtkYXRhLXJ1bGUtcmVxdWlyZWRdLCAucmVxdWlyZWRcIikuYXR0cihcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLmZvcm0vXHJcblx0XHRmb3JtOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jaGVja0Zvcm0oKTtcclxuXHRcdFx0JC5leHRlbmQodGhpcy5zdWJtaXR0ZWQsIHRoaXMuZXJyb3JNYXApO1xyXG5cdFx0XHR0aGlzLmludmFsaWQgPSAkLmV4dGVuZCh7fSwgdGhpcy5lcnJvck1hcCk7XHJcblx0XHRcdGlmICghdGhpcy52YWxpZCgpKSB7XHJcblx0XHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKS50cmlnZ2VySGFuZGxlcihcImludmFsaWQtZm9ybVwiLCBbdGhpc10pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2hvd0Vycm9ycygpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjaGVja0Zvcm06IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnByZXBhcmVGb3JtKCk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBlbGVtZW50cyA9ICh0aGlzLmN1cnJlbnRFbGVtZW50cyA9IHRoaXMuZWxlbWVudHMoKSk7IGVsZW1lbnRzW2ldOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLmNoZWNrKGVsZW1lbnRzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLmVsZW1lbnQvXHJcblx0XHRlbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHZhciBjbGVhbkVsZW1lbnQgPSB0aGlzLmNsZWFuKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGNoZWNrRWxlbWVudCA9IHRoaXMudmFsaWRhdGlvblRhcmdldEZvcihjbGVhbkVsZW1lbnQpLFxyXG5cdFx0XHRcdHJlc3VsdCA9IHRydWU7XHJcblxyXG5cdFx0XHR0aGlzLmxhc3RFbGVtZW50ID0gY2hlY2tFbGVtZW50O1xyXG5cclxuXHRcdFx0aWYgKGNoZWNrRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuaW52YWxpZFtjbGVhbkVsZW1lbnQubmFtZV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5wcmVwYXJlRWxlbWVudChjaGVja0VsZW1lbnQpO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEVsZW1lbnRzID0gJChjaGVja0VsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmNoZWNrKGNoZWNrRWxlbWVudCkgIT09IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmludmFsaWRbY2hlY2tFbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmludmFsaWRbY2hlY2tFbGVtZW50Lm5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQWRkIGFyaWEtaW52YWxpZCBzdGF0dXMgZm9yIHNjcmVlbiByZWFkZXJzXHJcblx0XHRcdCQoZWxlbWVudCkuYXR0cihcImFyaWEtaW52YWxpZFwiLCAhcmVzdWx0KTtcclxuXHJcblx0XHRcdGlmICghdGhpcy5udW1iZXJPZkludmFsaWRzKCkpIHtcclxuXHRcdFx0XHQvLyBIaWRlIGVycm9yIGNvbnRhaW5lcnMgb24gbGFzdCBlcnJvclxyXG5cdFx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUuYWRkKHRoaXMuY29udGFpbmVycyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zaG93RXJyb3JzKCk7XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9WYWxpZGF0b3Iuc2hvd0Vycm9ycy9cclxuXHRcdHNob3dFcnJvcnM6IGZ1bmN0aW9uKGVycm9ycykge1xyXG5cdFx0XHRpZiAoZXJyb3JzKSB7XHJcblx0XHRcdFx0Ly8gYWRkIGl0ZW1zIHRvIGVycm9yIGxpc3QgYW5kIG1hcFxyXG5cdFx0XHRcdCQuZXh0ZW5kKHRoaXMuZXJyb3JNYXAsIGVycm9ycyk7XHJcblx0XHRcdFx0dGhpcy5lcnJvckxpc3QgPSBbXTtcclxuXHRcdFx0XHRmb3IgKHZhciBuYW1lIGluIGVycm9ycykge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvckxpc3QucHVzaCh7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yc1tuYW1lXSxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudDogdGhpcy5maW5kQnlOYW1lKG5hbWUpWzBdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gcmVtb3ZlIGl0ZW1zIGZyb20gc3VjY2VzcyBsaXN0XHJcblx0XHRcdFx0dGhpcy5zdWNjZXNzTGlzdCA9ICQuZ3JlcCh0aGlzLnN1Y2Nlc3NMaXN0LCBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gIShlbGVtZW50Lm5hbWUgaW4gZXJyb3JzKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzKSB7XHJcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzLmNhbGwodGhpcywgdGhpcy5lcnJvck1hcCwgdGhpcy5lcnJvckxpc3QpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGVmYXVsdFNob3dFcnJvcnMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLnJlc2V0Rm9ybS9cclxuXHRcdHJlc2V0Rm9ybTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkLmZuLnJlc2V0Rm9ybSkge1xyXG5cdFx0XHRcdCQodGhpcy5jdXJyZW50Rm9ybSkucmVzZXRGb3JtKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zdWJtaXR0ZWQgPSB7fTtcclxuXHRcdFx0dGhpcy5sYXN0RWxlbWVudCA9IG51bGw7XHJcblx0XHRcdHRoaXMucHJlcGFyZUZvcm0oKTtcclxuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKCk7XHJcblx0XHRcdHZhciBpLCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMoKVxyXG5cdFx0XHRcdC5yZW1vdmVEYXRhKFwicHJldmlvdXNWYWx1ZVwiKVxyXG5cdFx0XHRcdC5yZW1vdmVBdHRyKFwiYXJpYS1pbnZhbGlkXCIpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpIHtcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBlbGVtZW50c1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcywgZWxlbWVudHNbaV0sXHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgXCJcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGVsZW1lbnRzLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bnVtYmVyT2ZJbnZhbGlkczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9iamVjdExlbmd0aCh0aGlzLmludmFsaWQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRvYmplY3RMZW5ndGg6IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHQvKiBqc2hpbnQgdW51c2VkOiBmYWxzZSAqL1xyXG5cdFx0XHR2YXIgY291bnQgPSAwLFxyXG5cdFx0XHRcdGk7XHJcblx0XHRcdGZvciAoaSBpbiBvYmopIHtcclxuXHRcdFx0XHRjb3VudCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjb3VudDtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZUVycm9yczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuaGlkZVRoZXNlKHRoaXMudG9IaWRlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZVRoZXNlOiBmdW5jdGlvbihlcnJvcnMpIHtcclxuXHRcdFx0ZXJyb3JzLm5vdCh0aGlzLmNvbnRhaW5lcnMpLnRleHQoXCJcIik7XHJcblx0XHRcdHRoaXMuYWRkV3JhcHBlcihlcnJvcnMpLmhpZGUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dmFsaWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XHJcblx0XHR9LFxyXG5cclxuXHRcdGlzVmFsaWRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmludmFsaWRbZWxlbWVudC5uYW1lXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogIXRoaXMuaW52YWxpZFtlbGVtZW50Lm5hbWVdO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Zm9jdXNJbnZhbGlkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MuZm9jdXNJbnZhbGlkKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdCQodGhpcy5maW5kTGFzdEFjdGl2ZSgpIHx8IHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCAmJiB0aGlzLmVycm9yTGlzdFswXS5lbGVtZW50IHx8IFtdKVxyXG5cdFx0XHRcdFx0LmZpbHRlcihcIjp2aXNpYmxlXCIpXHJcblx0XHRcdFx0XHQuZm9jdXMoKVxyXG5cdFx0XHRcdFx0Ly8gbWFudWFsbHkgdHJpZ2dlciBmb2N1c2luIGV2ZW50OyB3aXRob3V0IGl0LCBmb2N1c2luIGhhbmRsZXIgaXNuJ3QgY2FsbGVkLCBmaW5kTGFzdEFjdGl2ZSB3b24ndCBoYXZlIGFueXRoaW5nIHRvIGZpbmRcclxuXHRcdFx0XHRcdC50cmlnZ2VyKFwiZm9jdXNpblwiKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgSUUgdGhyb3dpbmcgZXJyb3JzIHdoZW4gZm9jdXNpbmcgaGlkZGVuIGVsZW1lbnRzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbmRMYXN0QWN0aXZlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGxhc3RBY3RpdmUgPSB0aGlzLmxhc3RBY3RpdmU7XHJcblx0XHRcdHJldHVybiBsYXN0QWN0aXZlICYmICQuZ3JlcCh0aGlzLmVycm9yTGlzdCwgZnVuY3Rpb24obikge1xyXG5cdFx0XHRcdHJldHVybiBuLmVsZW1lbnQubmFtZSA9PT0gbGFzdEFjdGl2ZS5uYW1lO1xyXG5cdFx0XHR9KS5sZW5ndGggPT09IDEgJiYgbGFzdEFjdGl2ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZWxlbWVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdmFsaWRhdG9yID0gdGhpcyxcclxuXHRcdFx0XHRydWxlc0NhY2hlID0ge307XHJcblxyXG5cdFx0XHQvLyBzZWxlY3QgYWxsIHZhbGlkIGlucHV0cyBpbnNpZGUgdGhlIGZvcm0gKG5vIHN1Ym1pdCBvciByZXNldCBidXR0b25zKVxyXG5cdFx0XHRyZXR1cm4gJCh0aGlzLmN1cnJlbnRGb3JtKVxyXG5cdFx0XHQuZmluZChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpXHJcblx0XHRcdC5ub3QoXCI6c3VibWl0LCA6cmVzZXQsIDppbWFnZSwgOmRpc2FibGVkXCIpXHJcblx0XHRcdC5ub3QodGhpcy5zZXR0aW5ncy5pZ25vcmUpXHJcblx0XHRcdC5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLm5hbWUgJiYgdmFsaWRhdG9yLnNldHRpbmdzLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwiJW8gaGFzIG5vIG5hbWUgYXNzaWduZWRcIiwgdGhpcyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBzZWxlY3Qgb25seSB0aGUgZmlyc3QgZWxlbWVudCBmb3IgZWFjaCBuYW1lLCBhbmQgb25seSB0aG9zZSB3aXRoIHJ1bGVzIHNwZWNpZmllZFxyXG5cdFx0XHRcdGlmICh0aGlzLm5hbWUgaW4gcnVsZXNDYWNoZSB8fCAhdmFsaWRhdG9yLm9iamVjdExlbmd0aCgkKHRoaXMpLnJ1bGVzKCkpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRydWxlc0NhY2hlW3RoaXMubmFtZV0gPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xlYW46IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHRcdHJldHVybiAkKHNlbGVjdG9yKVswXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXJyb3JzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGVycm9yQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3Muc3BsaXQoXCIgXCIpLmpvaW4oXCIuXCIpO1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCArIFwiLlwiICsgZXJyb3JDbGFzcywgdGhpcy5lcnJvckNvbnRleHQpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZXNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5lcnJvckxpc3QgPSBbXTtcclxuXHRcdFx0dGhpcy5lcnJvck1hcCA9IHt9O1xyXG5cdFx0XHR0aGlzLnRvU2hvdyA9ICQoW10pO1xyXG5cdFx0XHR0aGlzLnRvSGlkZSA9ICQoW10pO1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50cyA9ICQoW10pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwcmVwYXJlRm9ybTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucmVzZXQoKTtcclxuXHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLmVycm9ycygpLmFkZCh0aGlzLmNvbnRhaW5lcnMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwcmVwYXJlRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy5lcnJvcnNGb3IoZWxlbWVudCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGVsZW1lbnRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgdmFsLFxyXG5cdFx0XHRcdCRlbGVtZW50ID0gJChlbGVtZW50KSxcclxuXHRcdFx0XHR0eXBlID0gZWxlbWVudC50eXBlO1xyXG5cclxuXHRcdFx0aWYgKHR5cGUgPT09IFwicmFkaW9cIiB8fCB0eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kQnlOYW1lKGVsZW1lbnQubmFtZSkuZmlsdGVyKFwiOmNoZWNrZWRcIikudmFsKCk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZWxlbWVudC52YWxpZGl0eSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHRcdHJldHVybiBlbGVtZW50LnZhbGlkaXR5LmJhZElucHV0ID8gZmFsc2UgOiAkZWxlbWVudC52YWwoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFsID0gJGVsZW1lbnQudmFsKCk7XHJcblx0XHRcdGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHZhbC5yZXBsYWNlKC9cXHIvZywgXCJcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hlY2s6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdFx0ZWxlbWVudCA9IHRoaXMudmFsaWRhdGlvblRhcmdldEZvcih0aGlzLmNsZWFuKGVsZW1lbnQpKTtcclxuXHJcblx0XHRcdHZhciBydWxlcyA9ICQoZWxlbWVudCkucnVsZXMoKSxcclxuXHRcdFx0XHRydWxlc0NvdW50ID0gJC5tYXAocnVsZXMsIGZ1bmN0aW9uKG4sIGkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHRcdH0pLmxlbmd0aCxcclxuXHRcdFx0XHRkZXBlbmRlbmN5TWlzbWF0Y2ggPSBmYWxzZSxcclxuXHRcdFx0XHR2YWwgPSB0aGlzLmVsZW1lbnRWYWx1ZShlbGVtZW50KSxcclxuXHRcdFx0XHRyZXN1bHQsIG1ldGhvZCwgcnVsZTtcclxuXHJcblx0XHRcdGZvciAobWV0aG9kIGluIHJ1bGVzKSB7XHJcblx0XHRcdFx0cnVsZSA9IHsgbWV0aG9kOiBtZXRob2QsIHBhcmFtZXRlcnM6IHJ1bGVzW21ldGhvZF0gfTtcclxuXHRcdFx0XHR0cnkge1xyXG5cclxuXHRcdFx0XHRcdHJlc3VsdCA9ICQudmFsaWRhdG9yLm1ldGhvZHNbbWV0aG9kXS5jYWxsKHRoaXMsIHZhbCwgZWxlbWVudCwgcnVsZS5wYXJhbWV0ZXJzKTtcclxuXHJcblx0XHRcdFx0XHQvLyBpZiBhIG1ldGhvZCBpbmRpY2F0ZXMgdGhhdCB0aGUgZmllbGQgaXMgb3B0aW9uYWwgYW5kIHRoZXJlZm9yZSB2YWxpZCxcclxuXHRcdFx0XHRcdC8vIGRvbid0IG1hcmsgaXQgYXMgdmFsaWQgd2hlbiB0aGVyZSBhcmUgbm8gb3RoZXIgcnVsZXNcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPT09IFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiICYmIHJ1bGVzQ291bnQgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRkZXBlbmRlbmN5TWlzbWF0Y2ggPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRpZiAocmVzdWx0ID09PSBcInBlbmRpbmdcIikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRvSGlkZSA9IHRoaXMudG9IaWRlLm5vdCh0aGlzLmVycm9yc0ZvcihlbGVtZW50KSk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvcm1hdEFuZEFkZChlbGVtZW50LCBydWxlKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIiArIGVsZW1lbnQuaWQgKyBcIiwgY2hlY2sgdGhlICdcIiArIHJ1bGUubWV0aG9kICsgXCInIG1ldGhvZC5cIiwgZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoZSBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xyXG5cdFx0XHRcdFx0XHRlLm1lc3NhZ2UgKz0gXCIuICBFeGNlcHRpb24gb2NjdXJyZWQgd2hlbiBjaGVja2luZyBlbGVtZW50IFwiICsgZWxlbWVudC5pZCArIFwiLCBjaGVjayB0aGUgJ1wiICsgcnVsZS5tZXRob2QgKyBcIicgbWV0aG9kLlwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRocm93IGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkZXBlbmRlbmN5TWlzbWF0Y2gpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMub2JqZWN0TGVuZ3RoKHJ1bGVzKSkge1xyXG5cdFx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QucHVzaChlbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBjdXN0b20gbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHZhbGlkYXRpb24gbWV0aG9kXHJcblx0XHQvLyBzcGVjaWZpZWQgaW4gdGhlIGVsZW1lbnQncyBIVE1MNSBkYXRhIGF0dHJpYnV0ZVxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBnZW5lcmljIG1lc3NhZ2UgaWYgcHJlc2VudCBhbmQgbm8gbWV0aG9kIHNwZWNpZmljIG1lc3NhZ2UgaXMgcHJlc2VudFxyXG5cdFx0Y3VzdG9tRGF0YU1lc3NhZ2U6IGZ1bmN0aW9uKGVsZW1lbnQsIG1ldGhvZCkge1xyXG5cdFx0XHRyZXR1cm4gJChlbGVtZW50KS5kYXRhKFwibXNnXCIgKyBtZXRob2QuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgK1xyXG5cdFx0XHRcdG1ldGhvZC5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSkgfHwgJChlbGVtZW50KS5kYXRhKFwibXNnXCIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyByZXR1cm4gdGhlIGN1c3RvbSBtZXNzYWdlIGZvciB0aGUgZ2l2ZW4gZWxlbWVudCBuYW1lIGFuZCB2YWxpZGF0aW9uIG1ldGhvZFxyXG5cdFx0Y3VzdG9tTWVzc2FnZTogZnVuY3Rpb24obmFtZSwgbWV0aG9kKSB7XHJcblx0XHRcdHZhciBtID0gdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1tuYW1lXTtcclxuXHRcdFx0cmV0dXJuIG0gJiYgKG0uY29uc3RydWN0b3IgPT09IFN0cmluZyA/IG0gOiBtW21ldGhvZF0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IGRlZmluZWQgYXJndW1lbnQsIGFsbG93aW5nIGVtcHR5IHN0cmluZ3NcclxuXHRcdGZpbmREZWZpbmVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoYXJndW1lbnRzW2ldICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHJldHVybiBhcmd1bWVudHNbaV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlZmF1bHRNZXNzYWdlOiBmdW5jdGlvbihlbGVtZW50LCBtZXRob2QpIHtcclxuXHRcdFx0Ly8gV2V6b21GaXhcclxuXHRcdFx0dmFyIG1ldGhvZF9uYW1lID0gX2dldE1ldGhvZE1zZ05hbWUoZWxlbWVudCwgbWV0aG9kKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZmluZERlZmluZWQoXHJcblx0XHRcdFx0dGhpcy5jdXN0b21NZXNzYWdlKGVsZW1lbnQubmFtZSwgbWV0aG9kKSxcclxuXHRcdFx0XHR0aGlzLmN1c3RvbURhdGFNZXNzYWdlKGVsZW1lbnQsIG1ldGhvZCksXHJcblx0XHRcdFx0Ly8gdGl0bGUgaXMgbmV2ZXIgdW5kZWZpbmVkLCBzbyBoYW5kbGUgZW1wdHkgc3RyaW5nIGFzIHVuZGVmaW5lZFxyXG5cdFx0XHRcdCF0aGlzLnNldHRpbmdzLmlnbm9yZVRpdGxlICYmIGVsZW1lbnQudGl0bGUgfHwgdW5kZWZpbmVkLFxyXG5cdFx0XHRcdCQudmFsaWRhdG9yLm1lc3NhZ2VzW21ldGhvZF9uYW1lXSxcclxuXHRcdFx0XHRcIjxzdHJvbmc+V2FybmluZzogTm8gbWVzc2FnZSBkZWZpbmVkIGZvciBcIiArIGVsZW1lbnQubmFtZSArIFwiPC9zdHJvbmc+XCJcclxuXHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Zm9ybWF0QW5kQWRkOiBmdW5jdGlvbihlbGVtZW50LCBydWxlKSB7XHJcblx0XHRcdHZhciBtZXNzYWdlID0gdGhpcy5kZWZhdWx0TWVzc2FnZShlbGVtZW50LCBydWxlLm1ldGhvZCksXHJcblx0XHRcdFx0dGhlcmVnZXggPSAvXFwkP1xceyhcXGQrKVxcfS9nO1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlLmNhbGwodGhpcywgcnVsZS5wYXJhbWV0ZXJzLCBlbGVtZW50KTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGVyZWdleC50ZXN0KG1lc3NhZ2UpKSB7XHJcblx0XHRcdFx0bWVzc2FnZSA9ICQudmFsaWRhdG9yLmZvcm1hdChtZXNzYWdlLnJlcGxhY2UodGhlcmVnZXgsIFwieyQxfVwiKSwgcnVsZS5wYXJhbWV0ZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmVycm9yTGlzdC5wdXNoKHtcclxuXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxyXG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXHJcblx0XHRcdFx0bWV0aG9kOiBydWxlLm1ldGhvZFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuZXJyb3JNYXBbZWxlbWVudC5uYW1lXSA9IG1lc3NhZ2U7XHJcblx0XHRcdHRoaXMuc3VibWl0dGVkW2VsZW1lbnQubmFtZV0gPSBtZXNzYWdlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhZGRXcmFwcGVyOiBmdW5jdGlvbih0b1RvZ2dsZSkge1xyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy53cmFwcGVyKSB7XHJcblx0XHRcdFx0dG9Ub2dnbGUgPSB0b1RvZ2dsZS5hZGQodG9Ub2dnbGUucGFyZW50KHRoaXMuc2V0dGluZ3Mud3JhcHBlcikpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0b1RvZ2dsZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVmYXVsdFNob3dFcnJvcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaSwgZWxlbWVudHMsIGVycm9yO1xyXG5cdFx0XHRmb3IgKGkgPSAwOyB0aGlzLmVycm9yTGlzdFtpXTsgaSsrKSB7XHJcblx0XHRcdFx0ZXJyb3IgPSB0aGlzLmVycm9yTGlzdFtpXTtcclxuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5oaWdobGlnaHQpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0LmNhbGwodGhpcywgZXJyb3IuZWxlbWVudCwgdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNob3dMYWJlbChlcnJvci5lbGVtZW50LCBlcnJvci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5lcnJvckxpc3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhpcy50b1Nob3cgPSB0aGlzLnRvU2hvdy5hZGQodGhpcy5jb250YWluZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5zdWNjZXNzKSB7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgdGhpcy5zdWNjZXNzTGlzdFtpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dMYWJlbCh0aGlzLnN1Y2Nlc3NMaXN0W2ldKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQpIHtcclxuXHRcdFx0XHRmb3IgKGkgPSAwLCBlbGVtZW50cyA9IHRoaXMudmFsaWRFbGVtZW50cygpOyBlbGVtZW50c1tpXTsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0LmNhbGwodGhpcywgZWxlbWVudHNbaV0sIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLnRvSGlkZS5ub3QodGhpcy50b1Nob3cpO1xyXG5cdFx0XHR0aGlzLmhpZGVFcnJvcnMoKTtcclxuXHRcdFx0dGhpcy5hZGRXcmFwcGVyKHRoaXMudG9TaG93KS5zaG93KCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHZhbGlkRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJyZW50RWxlbWVudHMubm90KHRoaXMuaW52YWxpZEVsZW1lbnRzKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRpbnZhbGlkRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzLmVycm9yTGlzdCkubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93TGFiZWw6IGZ1bmN0aW9uKGVsZW1lbnQsIG1lc3NhZ2UpIHtcclxuXHRcdFx0dmFyIHBsYWNlLCBncm91cCwgZXJyb3JJRCxcclxuXHRcdFx0XHRlcnJvciA9IHRoaXMuZXJyb3JzRm9yKGVsZW1lbnQpLFxyXG5cdFx0XHRcdGVsZW1lbnRJRCA9IHRoaXMuaWRPck5hbWUoZWxlbWVudCksXHJcblx0XHRcdFx0ZGVzY3JpYmVkQnkgPSAkKGVsZW1lbnQpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpO1xyXG5cdFx0XHRpZiAoZXJyb3IubGVuZ3RoKSB7XHJcblx0XHRcdFx0Ly8gcmVmcmVzaCBlcnJvci9zdWNjZXNzIGNsYXNzXHJcblx0XHRcdFx0ZXJyb3IucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy52YWxpZENsYXNzKS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG5cdFx0XHRcdC8vIHJlcGxhY2UgbWVzc2FnZSBvbiBleGlzdGluZyBsYWJlbFxyXG5cdFx0XHRcdGVycm9yLmh0bWwobWVzc2FnZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGVsZW1lbnRcclxuXHRcdFx0XHRlcnJvciA9ICQoXCI8XCIgKyB0aGlzLnNldHRpbmdzLmVycm9yRWxlbWVudCArIFwiPlwiKVxyXG5cdFx0XHRcdFx0LmF0dHIoXCJpZFwiLCBlbGVtZW50SUQgKyBcIi1lcnJvclwiKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcylcclxuXHRcdFx0XHRcdC5odG1sKG1lc3NhZ2UgfHwgXCJcIik7XHJcblxyXG5cdFx0XHRcdC8vIE1haW50YWluIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB0byBiZSBwbGFjZWQgaW50byB0aGUgRE9NXHJcblx0XHRcdFx0cGxhY2UgPSBlcnJvcjtcclxuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy53cmFwcGVyKSB7XHJcblx0XHRcdFx0XHQvLyBtYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSwgZXZlbiBpbiBJRVxyXG5cdFx0XHRcdFx0Ly8gYWN0dWFsbHkgc2hvd2luZyB0aGUgd3JhcHBlZCBlbGVtZW50IGlzIGhhbmRsZWQgZWxzZXdoZXJlXHJcblx0XHRcdFx0XHRwbGFjZSA9IGVycm9yLmhpZGUoKS5zaG93KCkud3JhcChcIjxcIiArIHRoaXMuc2V0dGluZ3Mud3JhcHBlciArIFwiLz5cIikucGFyZW50KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5sYWJlbENvbnRhaW5lci5hcHBlbmQocGxhY2UpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudChwbGFjZSwgJChlbGVtZW50KSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHBsYWNlLmluc2VydEFmdGVyKGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gTGluayBlcnJvciBiYWNrIHRvIHRoZSBlbGVtZW50XHJcblx0XHRcdFx0aWYgKGVycm9yLmlzKFwibGFiZWxcIikpIHtcclxuXHRcdFx0XHRcdC8vIElmIHRoZSBlcnJvciBpcyBhIGxhYmVsLCB0aGVuIGFzc29jaWF0ZSB1c2luZyAnZm9yJ1xyXG5cdFx0XHRcdFx0ZXJyb3IuYXR0cihcImZvclwiLCBlbGVtZW50SUQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IucGFyZW50cyhcImxhYmVsW2Zvcj0nXCIgKyBlbGVtZW50SUQgKyBcIiddXCIpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaXMgbm90IGEgY2hpbGQgb2YgYW4gYXNzb2NpYXRlZCBsYWJlbCwgdGhlbiBpdCdzIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0Ly8gdG8gZXhwbGljaXRseSBhcHBseSBhcmlhLWRlc2NyaWJlZGJ5XHJcblxyXG5cdFx0XHRcdFx0ZXJyb3JJRCA9IGVycm9yLmF0dHIoXCJpZFwiKS5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXxcXCQpL2csIFwiXFxcXCQxXCIpO1xyXG5cdFx0XHRcdFx0Ly8gUmVzcGVjdCBleGlzdGluZyBub24tZXJyb3IgYXJpYS1kZXNjcmliZWRieVxyXG5cdFx0XHRcdFx0aWYgKCFkZXNjcmliZWRCeSkge1xyXG5cdFx0XHRcdFx0XHRkZXNjcmliZWRCeSA9IGVycm9ySUQ7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCFkZXNjcmliZWRCeS5tYXRjaChuZXcgUmVnRXhwKFwiXFxcXGJcIiArIGVycm9ySUQgKyBcIlxcXFxiXCIpKSkge1xyXG5cdFx0XHRcdFx0XHQvLyBBZGQgdG8gZW5kIG9mIGxpc3QgaWYgbm90IGFscmVhZHkgcHJlc2VudFxyXG5cdFx0XHRcdFx0XHRkZXNjcmliZWRCeSArPSBcIiBcIiArIGVycm9ySUQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkKGVsZW1lbnQpLmF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIGRlc2NyaWJlZEJ5KTtcclxuXHJcblx0XHRcdFx0XHQvLyBJZiB0aGlzIGVsZW1lbnQgaXMgZ3JvdXBlZCwgdGhlbiBhc3NpZ24gdG8gYWxsIGVsZW1lbnRzIGluIHRoZSBzYW1lIGdyb3VwXHJcblx0XHRcdFx0XHRncm91cCA9IHRoaXMuZ3JvdXBzW2VsZW1lbnQubmFtZV07XHJcblx0XHRcdFx0XHRpZiAoZ3JvdXApIHtcclxuXHRcdFx0XHRcdFx0JC5lYWNoKHRoaXMuZ3JvdXBzLCBmdW5jdGlvbihuYW1lLCB0ZXN0Z3JvdXApIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGVzdGdyb3VwID09PSBncm91cCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JChcIltuYW1lPSdcIiArIG5hbWUgKyBcIiddXCIsIHRoaXMuY3VycmVudEZvcm0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLCBlcnJvci5hdHRyKFwiaWRcIikpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghbWVzc2FnZSAmJiB0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRlcnJvci50ZXh0KFwiXCIpO1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZXR0aW5ncy5zdWNjZXNzID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRlcnJvci5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnN1Y2Nlc3MpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnN1Y2Nlc3MoZXJyb3IsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnRvU2hvdyA9IHRoaXMudG9TaG93LmFkZChlcnJvcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGVycm9yc0ZvcjogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgbmFtZSA9IHRoaXMuaWRPck5hbWUoZWxlbWVudCksXHJcblx0XHRcdFx0ZGVzY3JpYmVyID0gJChlbGVtZW50KS5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiKSxcclxuXHRcdFx0XHRzZWxlY3RvciA9IFwibGFiZWxbZm9yPSdcIiArIG5hbWUgKyBcIiddLCBsYWJlbFtmb3I9J1wiICsgbmFtZSArIFwiJ10gKlwiO1xyXG5cclxuXHRcdFx0Ly8gYXJpYS1kZXNjcmliZWRieSBzaG91bGQgZGlyZWN0bHkgcmVmZXJlbmNlIHRoZSBlcnJvciBlbGVtZW50XHJcblx0XHRcdGlmIChkZXNjcmliZXIpIHtcclxuXHRcdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yICsgXCIsICNcIiArIGRlc2NyaWJlci5yZXBsYWNlKC9cXHMrL2csIFwiLCAjXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzXHJcblx0XHRcdFx0LmVycm9ycygpXHJcblx0XHRcdFx0LmZpbHRlcihzZWxlY3Rvcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGlkT3JOYW1lOiBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdyb3Vwc1tlbGVtZW50Lm5hbWVdIHx8ICh0aGlzLmNoZWNrYWJsZShlbGVtZW50KSA/IGVsZW1lbnQubmFtZSA6IGVsZW1lbnQuaWQgfHwgZWxlbWVudC5uYW1lKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dmFsaWRhdGlvblRhcmdldEZvcjogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cclxuXHRcdFx0Ly8gSWYgcmFkaW8vY2hlY2tib3gsIHZhbGlkYXRlIGZpcnN0IGVsZW1lbnQgaW4gZ3JvdXAgaW5zdGVhZFxyXG5cdFx0XHRpZiAodGhpcy5jaGVja2FibGUoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRlbGVtZW50ID0gdGhpcy5maW5kQnlOYW1lKGVsZW1lbnQubmFtZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEFsd2F5cyBhcHBseSBpZ25vcmUgZmlsdGVyXHJcblx0XHRcdHJldHVybiAkKGVsZW1lbnQpLm5vdCh0aGlzLnNldHRpbmdzLmlnbm9yZSlbMF07XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gKC9yYWRpb3xjaGVja2JveC9pKS50ZXN0KGVsZW1lbnQudHlwZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbmRCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdFx0cmV0dXJuICQodGhpcy5jdXJyZW50Rm9ybSkuZmluZChcIltuYW1lPSdcIiArIG5hbWUgKyBcIiddXCIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRMZW5ndGg6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdGNhc2UgXCJzZWxlY3RcIjpcclxuXHRcdFx0XHRyZXR1cm4gJChcIm9wdGlvbjpzZWxlY3RlZFwiLCBlbGVtZW50KS5sZW5ndGg7XHJcblx0XHRcdGNhc2UgXCJpbnB1dFwiOlxyXG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrYWJsZShlbGVtZW50KSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZmluZEJ5TmFtZShlbGVtZW50Lm5hbWUpLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aDtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVwZW5kOiBmdW5jdGlvbihwYXJhbSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgcGFyYW1dID8gdGhpcy5kZXBlbmRUeXBlc1t0eXBlb2YgcGFyYW1dKHBhcmFtLCBlbGVtZW50KSA6IHRydWU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlcGVuZFR5cGVzOiB7XHJcblx0XHRcdFwiYm9vbGVhblwiOiBmdW5jdGlvbihwYXJhbSkge1xyXG5cdFx0XHRcdHJldHVybiBwYXJhbTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJzdHJpbmdcIjogZnVuY3Rpb24ocGFyYW0sIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRyZXR1cm4gISEkKHBhcmFtLCBlbGVtZW50LmZvcm0pLmxlbmd0aDtcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJmdW5jdGlvblwiOiBmdW5jdGlvbihwYXJhbSwgZWxlbWVudCkge1xyXG5cdFx0XHRcdHJldHVybiBwYXJhbShlbGVtZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRvcHRpb25hbDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHR2YXIgdmFsID0gdGhpcy5lbGVtZW50VmFsdWUoZWxlbWVudCk7XHJcblx0XHRcdHJldHVybiAhJC52YWxpZGF0b3IubWV0aG9kcy5yZXF1aXJlZC5jYWxsKHRoaXMsIHZhbCwgZWxlbWVudCkgJiYgXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XHJcblx0XHR9LFxyXG5cclxuXHRcdHN0YXJ0UmVxdWVzdDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRpZiAoIXRoaXMucGVuZGluZ1tlbGVtZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdCsrO1xyXG5cdFx0XHRcdHRoaXMucGVuZGluZ1tlbGVtZW50Lm5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzdG9wUmVxdWVzdDogZnVuY3Rpb24oZWxlbWVudCwgdmFsaWQpIHtcclxuXHRcdFx0dGhpcy5wZW5kaW5nUmVxdWVzdC0tO1xyXG5cdFx0XHQvLyBzb21ldGltZXMgc3luY2hyb25pemF0aW9uIGZhaWxzLCBtYWtlIHN1cmUgcGVuZGluZ1JlcXVlc3QgaXMgbmV2ZXIgPCAwXHJcblx0XHRcdGlmICh0aGlzLnBlbmRpbmdSZXF1ZXN0IDwgMCkge1xyXG5cdFx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnBlbmRpbmdbZWxlbWVudC5uYW1lXTtcclxuXHRcdFx0aWYgKHZhbGlkICYmIHRoaXMucGVuZGluZ1JlcXVlc3QgPT09IDAgJiYgdGhpcy5mb3JtU3VibWl0dGVkICYmIHRoaXMuZm9ybSgpKSB7XHJcblx0XHRcdFx0JCh0aGlzLmN1cnJlbnRGb3JtKS5zdWJtaXQoKTtcclxuXHRcdFx0XHR0aGlzLmZvcm1TdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmICghdmFsaWQgJiYgdGhpcy5wZW5kaW5nUmVxdWVzdCA9PT0gMCAmJiB0aGlzLmZvcm1TdWJtaXR0ZWQpIHtcclxuXHRcdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pLnRyaWdnZXJIYW5kbGVyKFwiaW52YWxpZC1mb3JtXCIsIFt0aGlzXSk7XHJcblx0XHRcdFx0dGhpcy5mb3JtU3VibWl0dGVkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0cHJldmlvdXNWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gJC5kYXRhKGVsZW1lbnQsIFwicHJldmlvdXNWYWx1ZVwiKSB8fCAkLmRhdGEoZWxlbWVudCwgXCJwcmV2aW91c1ZhbHVlXCIsIHtcclxuXHRcdFx0XHRvbGQ6IG51bGwsXHJcblx0XHRcdFx0dmFsaWQ6IHRydWUsXHJcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5kZWZhdWx0TWVzc2FnZShlbGVtZW50LCBcInJlbW90ZVwiKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gY2xlYW5zIHVwIGFsbCBmb3JtcyBhbmQgZWxlbWVudHMsIHJlbW92ZXMgdmFsaWRhdG9yLXNwZWNpZmljIGV2ZW50c1xyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMucmVzZXRGb3JtKCk7XHJcblxyXG5cdFx0XHQkKHRoaXMuY3VycmVudEZvcm0pXHJcblx0XHRcdFx0Lm9mZihcIi52YWxpZGF0ZVwiKVxyXG5cdFx0XHRcdC5yZW1vdmVEYXRhKFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHRjbGFzc1J1bGVTZXR0aW5nczoge1xyXG5cdFx0cmVxdWlyZWQ6IHsgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdGVtYWlsOiB7IGVtYWlsOiB0cnVlIH0sXHJcblx0XHR1cmw6IHsgdXJsOiB0cnVlIH0sXHJcblx0XHRkYXRlOiB7IGRhdGU6IHRydWUgfSxcclxuXHRcdGRhdGVJU086IHsgZGF0ZUlTTzogdHJ1ZSB9LFxyXG5cdFx0bnVtYmVyOiB7IG51bWJlcjogdHJ1ZSB9LFxyXG5cdFx0ZGlnaXRzOiB7IGRpZ2l0czogdHJ1ZSB9LFxyXG5cdFx0Y3JlZGl0Y2FyZDogeyBjcmVkaXRjYXJkOiB0cnVlIH1cclxuXHR9LFxyXG5cclxuXHRhZGRDbGFzc1J1bGVzOiBmdW5jdGlvbihjbGFzc05hbWUsIHJ1bGVzKSB7XHJcblx0XHRpZiAoY2xhc3NOYW1lLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcclxuXHRcdFx0dGhpcy5jbGFzc1J1bGVTZXR0aW5nc1tjbGFzc05hbWVdID0gcnVsZXM7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkLmV4dGVuZCh0aGlzLmNsYXNzUnVsZVNldHRpbmdzLCBjbGFzc05hbWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGNsYXNzUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHRjbGFzc2VzID0gJChlbGVtZW50KS5hdHRyKFwiY2xhc3NcIik7XHJcblxyXG5cdFx0aWYgKGNsYXNzZXMpIHtcclxuXHRcdFx0JC5lYWNoKGNsYXNzZXMuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGhpcyBpbiAkLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0JC5leHRlbmQocnVsZXMsICQudmFsaWRhdG9yLmNsYXNzUnVsZVNldHRpbmdzW3RoaXNdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdG5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGU6IGZ1bmN0aW9uKHJ1bGVzLCB0eXBlLCBtZXRob2QsIHZhbHVlKSB7XHJcblxyXG5cdFx0Ly8gY29udmVydCB0aGUgdmFsdWUgdG8gYSBudW1iZXIgZm9yIG51bWJlciBpbnB1dHMsIGFuZCBmb3IgdGV4dCBmb3IgYmFja3dhcmRzIGNvbXBhYmlsaXR5XHJcblx0XHQvLyBhbGxvd3MgdHlwZT1cImRhdGVcIiBhbmQgb3RoZXJzIHRvIGJlIGNvbXBhcmVkIGFzIHN0cmluZ3NcclxuXHRcdGlmICgvbWlufG1heC8udGVzdChtZXRob2QpICYmICh0eXBlID09PSBudWxsIHx8IC9udW1iZXJ8cmFuZ2V8dGV4dC8udGVzdCh0eXBlKSkpIHtcclxuXHRcdFx0dmFsdWUgPSBOdW1iZXIodmFsdWUpO1xyXG5cclxuXHRcdFx0Ly8gU3VwcG9ydCBPcGVyYSBNaW5pLCB3aGljaCByZXR1cm5zIE5hTiBmb3IgdW5kZWZpbmVkIG1pbmxlbmd0aFxyXG5cdFx0XHRpZiAoaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcclxuXHRcdFx0cnVsZXNbbWV0aG9kXSA9IHZhbHVlO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlID09PSBtZXRob2QgJiYgdHlwZSAhPT0gXCJyYW5nZVwiKSB7XHJcblxyXG5cdFx0XHQvLyBleGNlcHRpb246IHRoZSBqcXVlcnkgdmFsaWRhdGUgJ3JhbmdlJyBtZXRob2RcclxuXHRcdFx0Ly8gZG9lcyBub3QgdGVzdCBmb3IgdGhlIGh0bWw1ICdyYW5nZScgdHlwZVxyXG5cdFx0XHRydWxlc1ttZXRob2RdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRhdHRyaWJ1dGVSdWxlczogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0dmFyIHJ1bGVzID0ge30sXHJcblx0XHRcdCRlbGVtZW50ID0gJChlbGVtZW50KSxcclxuXHRcdFx0dHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSxcclxuXHRcdFx0bWV0aG9kLCB2YWx1ZTtcclxuXHJcblx0XHRmb3IgKG1ldGhvZCBpbiAkLnZhbGlkYXRvci5tZXRob2RzKSB7XHJcblxyXG5cdFx0XHQvLyBzdXBwb3J0IGZvciA8aW5wdXQgcmVxdWlyZWQ+IGluIGJvdGggaHRtbDUgYW5kIG9sZGVyIGJyb3dzZXJzXHJcblx0XHRcdGlmIChtZXRob2QgPT09IFwicmVxdWlyZWRcIikge1xyXG5cdFx0XHRcdHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobWV0aG9kKTtcclxuXHJcblx0XHRcdFx0Ly8gU29tZSBicm93c2VycyByZXR1cm4gYW4gZW1wdHkgc3RyaW5nIGZvciB0aGUgcmVxdWlyZWQgYXR0cmlidXRlXHJcblx0XHRcdFx0Ly8gYW5kIG5vbi1IVE1MNSBicm93c2VycyBtaWdodCBoYXZlIHJlcXVpcmVkPVwiXCIgbWFya3VwXHJcblx0XHRcdFx0aWYgKHZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBmb3JjZSBub24tSFRNTDUgYnJvd3NlcnMgdG8gcmV0dXJuIGJvb2xcclxuXHRcdFx0XHR2YWx1ZSA9ICEhdmFsdWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFsdWUgPSAkZWxlbWVudC5hdHRyKG1ldGhvZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWF4bGVuZ3RoIG1heSBiZSByZXR1cm5lZCBhcyAtMSwgMjE0NzQ4MzY0NyAoSUUpIGFuZCA1MjQyODggKHNhZmFyaSkgZm9yIHRleHQgaW5wdXRzXHJcblx0XHRpZiAocnVsZXMubWF4bGVuZ3RoICYmIC8tMXwyMTQ3NDgzNjQ3fDUyNDI4OC8udGVzdChydWxlcy5tYXhsZW5ndGgpKSB7XHJcblx0XHRcdGRlbGV0ZSBydWxlcy5tYXhsZW5ndGg7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdGRhdGFSdWxlczogZnVuY3Rpb24oZWxlbWVudCkge1xyXG5cdFx0dmFyIHJ1bGVzID0ge30sXHJcblx0XHRcdCRlbGVtZW50ID0gJChlbGVtZW50KSxcclxuXHRcdFx0dHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSxcclxuXHRcdFx0bWV0aG9kLCB2YWx1ZTtcclxuXHJcblx0XHRmb3IgKG1ldGhvZCBpbiAkLnZhbGlkYXRvci5tZXRob2RzKSB7XHJcblx0XHRcdHZhbHVlID0gJGVsZW1lbnQuZGF0YShcInJ1bGVcIiArIG1ldGhvZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1ldGhvZC5zdWJzdHJpbmcoMSkudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRcdHRoaXMubm9ybWFsaXplQXR0cmlidXRlUnVsZShydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcnVsZXM7XHJcblx0fSxcclxuXHJcblx0c3RhdGljUnVsZXM6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuXHRcdC8vIFdlem9tRml4XHJcblx0XHRpZiAoZWxlbWVudC5mb3JtKSB7XHJcblx0XHRcdHZhbGlkYXRvciA9ICQuZGF0YShlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsaWRhdG9yID0gJC5kYXRhKCQoZWxlbWVudCkuY2xvc2VzdChcImRpdltkYXRhLWZvcm09J3RydWUnXVwiKS5nZXQoMCksIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBydWxlcyA9IHt9LFxyXG5cdFx0XHQvL3ZhbGlkYXRvciA9ICQuZGF0YShlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIpO1xyXG5cdFx0XHR2YWxpZGF0b3IgPSB2YWxpZGF0b3I7IC8vIFdlem9tRml4XHJcblxyXG5cdFx0aWYgKHZhbGlkYXRvci5zZXR0aW5ncy5ydWxlcykge1xyXG5cdFx0XHRydWxlcyA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUodmFsaWRhdG9yLnNldHRpbmdzLnJ1bGVzW2VsZW1lbnQubmFtZV0pIHx8IHt9O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJ1bGVzO1xyXG5cdH0sXHJcblxyXG5cdG5vcm1hbGl6ZVJ1bGVzOiBmdW5jdGlvbihydWxlcywgZWxlbWVudCkge1xyXG5cdFx0Ly8gaGFuZGxlIGRlcGVuZGVuY3kgY2hlY2tcclxuXHRcdCQuZWFjaChydWxlcywgZnVuY3Rpb24ocHJvcCwgdmFsKSB7XHJcblx0XHRcdC8vIGlnbm9yZSBydWxlIHdoZW4gcGFyYW0gaXMgZXhwbGljaXRseSBmYWxzZSwgZWcuIHJlcXVpcmVkOmZhbHNlXHJcblx0XHRcdGlmICh2YWwgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzW3Byb3BdO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodmFsLnBhcmFtIHx8IHZhbC5kZXBlbmRzKSB7XHJcblx0XHRcdFx0dmFyIGtlZXBSdWxlID0gdHJ1ZTtcclxuXHRcdFx0XHRzd2l0Y2ggKHR5cGVvZiB2YWwuZGVwZW5kcykge1xyXG5cdFx0XHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0XHRcdGtlZXBSdWxlID0gISEkKHZhbC5kZXBlbmRzLCBlbGVtZW50LmZvcm0pLmxlbmd0aDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJmdW5jdGlvblwiOlxyXG5cdFx0XHRcdFx0a2VlcFJ1bGUgPSB2YWwuZGVwZW5kcy5jYWxsKGVsZW1lbnQsIGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChrZWVwUnVsZSkge1xyXG5cdFx0XHRcdFx0cnVsZXNbcHJvcF0gPSB2YWwucGFyYW0gIT09IHVuZGVmaW5lZCA/IHZhbC5wYXJhbSA6IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRlbGV0ZSBydWxlc1twcm9wXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGV2YWx1YXRlIHBhcmFtZXRlcnNcclxuXHRcdCQuZWFjaChydWxlcywgZnVuY3Rpb24ocnVsZSwgcGFyYW1ldGVyKSB7XHJcblx0XHRcdHJ1bGVzW3J1bGVdID0gJC5pc0Z1bmN0aW9uKHBhcmFtZXRlcikgPyBwYXJhbWV0ZXIoZWxlbWVudCkgOiBwYXJhbWV0ZXI7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBjbGVhbiBudW1iZXIgcGFyYW1ldGVyc1xyXG5cdFx0JC5lYWNoKFtcIm1pbmxlbmd0aFwiLCBcIm1heGxlbmd0aFwiXSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmIChydWxlc1t0aGlzXSkge1xyXG5cdFx0XHRcdHJ1bGVzW3RoaXNdID0gTnVtYmVyKHJ1bGVzW3RoaXNdKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQkLmVhY2goW1wicmFuZ2VsZW5ndGhcIiwgXCJyYW5nZVwiXSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBwYXJ0cztcclxuXHRcdFx0aWYgKHJ1bGVzW3RoaXNdKSB7XHJcblx0XHRcdFx0aWYgKCQuaXNBcnJheShydWxlc1t0aGlzXSkpIHtcclxuXHRcdFx0XHRcdHJ1bGVzW3RoaXNdID0gW051bWJlcihydWxlc1t0aGlzXVswXSksIE51bWJlcihydWxlc1t0aGlzXVsxXSldO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHJ1bGVzW3RoaXNdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0XHRwYXJ0cyA9IHJ1bGVzW3RoaXNdLnJlcGxhY2UoL1tcXFtcXF1dL2csIFwiXCIpLnNwbGl0KC9bXFxzLF0rLyk7XHJcblx0XHRcdFx0XHRydWxlc1t0aGlzXSA9IFtOdW1iZXIocGFydHNbMF0pLCBOdW1iZXIocGFydHNbMV0pXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICgkLnZhbGlkYXRvci5hdXRvQ3JlYXRlUmFuZ2VzKSB7XHJcblx0XHRcdC8vIGF1dG8tY3JlYXRlIHJhbmdlc1xyXG5cdFx0XHRpZiAocnVsZXMubWluICE9IG51bGwgJiYgcnVsZXMubWF4ICE9IG51bGwpIHtcclxuXHRcdFx0XHRydWxlcy5yYW5nZSA9IFtydWxlcy5taW4sIHJ1bGVzLm1heF07XHJcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1pbjtcclxuXHRcdFx0XHRkZWxldGUgcnVsZXMubWF4O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChydWxlcy5taW5sZW5ndGggIT0gbnVsbCAmJiBydWxlcy5tYXhsZW5ndGggIT0gbnVsbCkge1xyXG5cdFx0XHRcdHJ1bGVzLnJhbmdlbGVuZ3RoID0gW3J1bGVzLm1pbmxlbmd0aCwgcnVsZXMubWF4bGVuZ3RoXTtcclxuXHRcdFx0XHRkZWxldGUgcnVsZXMubWlubGVuZ3RoO1xyXG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5tYXhsZW5ndGg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcnVsZXM7XHJcblx0fSxcclxuXHJcblx0Ly8gQ29udmVydHMgYSBzaW1wbGUgc3RyaW5nIHRvIGEge3N0cmluZzogdHJ1ZX0gcnVsZSwgZS5nLiwgXCJyZXF1aXJlZFwiIHRvIHtyZXF1aXJlZDp0cnVlfVxyXG5cdG5vcm1hbGl6ZVJ1bGU6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR2YXIgdHJhbnNmb3JtZWQgPSB7fTtcclxuXHRcdFx0JC5lYWNoKGRhdGEuc3BsaXQoL1xccy8pLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0cmFuc2Zvcm1lZFt0aGlzXSA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRkYXRhID0gdHJhbnNmb3JtZWQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGF0YTtcclxuXHR9LFxyXG5cclxuXHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvalF1ZXJ5LnZhbGlkYXRvci5hZGRNZXRob2QvXHJcblx0YWRkTWV0aG9kOiBmdW5jdGlvbihuYW1lLCBtZXRob2QsIG1lc3NhZ2UpIHtcclxuXHRcdCQudmFsaWRhdG9yLm1ldGhvZHNbbmFtZV0gPSBtZXRob2Q7XHJcblx0XHQkLnZhbGlkYXRvci5tZXNzYWdlc1tuYW1lXSA9IG1lc3NhZ2UgIT09IHVuZGVmaW5lZCA/IG1lc3NhZ2UgOiAkLnZhbGlkYXRvci5tZXNzYWdlc1tuYW1lXTtcclxuXHRcdGlmIChtZXRob2QubGVuZ3RoIDwgMykge1xyXG5cdFx0XHQkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKG5hbWUsICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUobmFtZSkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmVxdWlyZWQtbWV0aG9kL1xyXG5cdFx0cmVxdWlyZWQ6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHQvLyBjaGVjayBpZiBkZXBlbmRlbmN5IGlzIG1ldFxyXG5cdFx0XHRpZiAoIXRoaXMuZGVwZW5kKHBhcmFtLCBlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XHJcblx0XHRcdFx0Ly8gY291bGQgYmUgYW4gYXJyYXkgZm9yIHNlbGVjdC1tdWx0aXBsZSBvciBhIHN0cmluZywgYm90aCBhcmUgZmluZSB0aGlzIHdheVxyXG5cdFx0XHRcdHZhciB2YWwgPSAkKGVsZW1lbnQpLnZhbCgpO1xyXG5cdFx0XHRcdHJldHVybiB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuY2hlY2thYmxlKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0TGVuZ3RoKHZhbHVlLCBlbGVtZW50KSA+IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9lbWFpbC1tZXRob2QvXHJcblx0XHRlbWFpbDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0Ly8gRnJvbSBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI3ZhbGlkLWUtbWFpbC1hZGRyZXNzXHJcblx0XHRcdC8vIFJldHJpZXZlZCAyMDE0LTAxLTE0XHJcblx0XHRcdC8vIElmIHlvdSBoYXZlIGEgcHJvYmxlbSB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24sIHJlcG9ydCBhIGJ1ZyBhZ2FpbnN0IHRoZSBhYm92ZSBzcGVjXHJcblx0XHRcdC8vIE9yIHVzZSBjdXN0b20gbWV0aG9kcyB0byBpbXBsZW1lbnQgeW91ciBvd24gZW1haWwgdmFsaWRhdGlvblxyXG5cdFx0XHQvL3JldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvLnRlc3QodmFsdWUpO1xyXG5cclxuXHRcdFx0Ly8gV2V6b21GaXhcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oKFthLXpBLVowLTlcXCZcXCtcXC1cXD1cXF9dKSsoKFxcLihbYS16QS1aMC05XFwmXFwrXFwtXFw9XFxfXSl7MSx9KSspPyl7MSw2NH1cXEAoW2EtekEtWjAtOV0oW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSk/XFwuKStbYS16QS1aXXsyLDZ9JC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy91cmwtbWV0aG9kL1xyXG5cdFx0dXJsOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cclxuXHRcdFx0Ly8gQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgRGllZ28gUGVyaW5pLCBNSVQgbGljZW5zZWRcclxuXHRcdFx0Ly8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZHBlcmluaS83MjkyOTRcclxuXHRcdFx0Ly8gc2VlIGFsc28gaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL2RlbW8vdXJsLXJlZ2V4XHJcblx0XHRcdC8vIG1vZGlmaWVkIHRvIGFsbG93IHByb3RvY29sLXJlbGF0aXZlIFVSTHNcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZGF0ZS1tZXRob2QvXHJcblx0XHRkYXRlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAhL0ludmFsaWR8TmFOLy50ZXN0KG5ldyBEYXRlKHZhbHVlKS50b1N0cmluZygpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RhdGVJU08tbWV0aG9kL1xyXG5cdFx0ZGF0ZUlTTzogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15cXGR7NH1bXFwvXFwtXSgwP1sxLTldfDFbMDEyXSlbXFwvXFwtXSgwP1sxLTldfFsxMl1bMC05XXwzWzAxXSkkLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL251bWJlci1tZXRob2QvXHJcblx0XHRudW1iZXI6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eKD86LT9cXGQrfC0/XFxkezEsM30oPzosXFxkezN9KSspPyg/OlxcLlxcZCspPyQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZGlnaXRzLW1ldGhvZC9cclxuXHRcdGRpZ2l0czogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15cXGQrJC8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9jcmVkaXRjYXJkLW1ldGhvZC9cclxuXHRcdC8vIGJhc2VkIG9uIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTHVobl9hbGdvcml0aG1cclxuXHRcdGNyZWRpdGNhcmQ6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbmFsKGVsZW1lbnQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIFwiZGVwZW5kZW5jeS1taXNtYXRjaFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGFjY2VwdCBvbmx5IHNwYWNlcywgZGlnaXRzIGFuZCBkYXNoZXNcclxuXHRcdFx0aWYgKC9bXjAtOSBcXC1dKy8udGVzdCh2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIG5DaGVjayA9IDAsXHJcblx0XHRcdFx0bkRpZ2l0ID0gMCxcclxuXHRcdFx0XHRiRXZlbiA9IGZhbHNlLFxyXG5cdFx0XHRcdG4sIGNEaWdpdDtcclxuXHJcblx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG5cclxuXHRcdFx0Ly8gQmFzaW5nIG1pbiBhbmQgbWF4IGxlbmd0aCBvblxyXG5cdFx0XHQvLyBodHRwOi8vZGV2ZWxvcGVyLmVhbi5jb20vZ2VuZXJhbF9pbmZvL1ZhbGlkX0NyZWRpdF9DYXJkX1R5cGVzXHJcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPCAxMyB8fCB2YWx1ZS5sZW5ndGggPiAxOSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChuID0gdmFsdWUubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuXHRcdFx0XHRjRGlnaXQgPSB2YWx1ZS5jaGFyQXQobik7XHJcblx0XHRcdFx0bkRpZ2l0ID0gcGFyc2VJbnQoY0RpZ2l0LCAxMCk7XHJcblx0XHRcdFx0aWYgKGJFdmVuKSB7XHJcblx0XHRcdFx0XHRpZiAoKG5EaWdpdCAqPSAyKSA+IDkpIHtcclxuXHRcdFx0XHRcdFx0bkRpZ2l0IC09IDk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5DaGVjayArPSBuRGlnaXQ7XHJcblx0XHRcdFx0YkV2ZW4gPSAhYkV2ZW47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAobkNoZWNrICUgMTApID09PSAwO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBodHRwOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWlubGVuZ3RoLW1ldGhvZC9cclxuXHRcdG1pbmxlbmd0aDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgodmFsdWUsIGVsZW1lbnQpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCBsZW5ndGggPj0gcGFyYW07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9tYXhsZW5ndGgtbWV0aG9kL1xyXG5cdFx0bWF4bGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIGxlbmd0aCA9ICQuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCh2YWx1ZSwgZWxlbWVudCk7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IGxlbmd0aCA8PSBwYXJhbTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JhbmdlbGVuZ3RoLW1ldGhvZC9cclxuXHRcdHJhbmdlbGVuZ3RoOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0dmFyIGxlbmd0aCA9ICQuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCh2YWx1ZSwgZWxlbWVudCk7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IChsZW5ndGggPj0gcGFyYW1bMF0gJiYgbGVuZ3RoIDw9IHBhcmFtWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL21pbi1tZXRob2QvXHJcblx0XHRtaW46IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCB2YWx1ZSA+PSBwYXJhbTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL21heC1tZXRob2QvXHJcblx0XHRtYXg6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCB2YWx1ZSA8PSBwYXJhbTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JhbmdlLW1ldGhvZC9cclxuXHRcdHJhbmdlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgKHZhbHVlID49IHBhcmFtWzBdICYmIHZhbHVlIDw9IHBhcmFtWzFdKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gaHR0cDovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2VxdWFsVG8tbWV0aG9kL1xyXG5cdFx0ZXF1YWxUbzogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdC8vIGJpbmQgdG8gdGhlIGJsdXIgZXZlbnQgb2YgdGhlIHRhcmdldCBpbiBvcmRlciB0byByZXZhbGlkYXRlIHdoZW5ldmVyIHRoZSB0YXJnZXQgZmllbGQgaXMgdXBkYXRlZFxyXG5cdFx0XHQvLyBUT0RPIGZpbmQgYSB3YXkgdG8gYmluZCB0aGUgZXZlbnQganVzdCBvbmNlLCBhdm9pZGluZyB0aGUgdW5iaW5kLXJlYmluZCBvdmVyaGVhZFxyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChwYXJhbSk7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLm9uZm9jdXNvdXQpIHtcclxuXHRcdFx0XHR0YXJnZXQub2ZmKFwiLnZhbGlkYXRlLWVxdWFsVG9cIikub24oXCJibHVyLnZhbGlkYXRlLWVxdWFsVG9cIiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKGVsZW1lbnQpLnZhbGlkKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB0YXJnZXQudmFsKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIGh0dHA6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9yZW1vdGUtbWV0aG9kL1xyXG5cdFx0cmVtb3RlOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9uYWwoZWxlbWVudCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNWYWx1ZShlbGVtZW50KSxcclxuXHRcdFx0XHR2YWxpZGF0b3IsIGRhdGE7XHJcblxyXG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdHByZXZpb3VzLm9yaWdpbmFsTWVzc2FnZSA9IHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXS5yZW1vdGU7XHJcblx0XHRcdHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbZWxlbWVudC5uYW1lXS5yZW1vdGUgPSBwcmV2aW91cy5tZXNzYWdlO1xyXG5cclxuXHRcdFx0cGFyYW0gPSB0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIgJiYgeyB1cmw6IHBhcmFtIH0gfHwgcGFyYW07XHJcblxyXG5cdFx0XHRpZiAocHJldmlvdXMub2xkID09PSB2YWx1ZSkge1xyXG5cdFx0XHRcdHJldHVybiBwcmV2aW91cy52YWxpZDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cHJldmlvdXMub2xkID0gdmFsdWU7XHJcblx0XHRcdHZhbGlkYXRvciA9IHRoaXM7XHJcblx0XHRcdHRoaXMuc3RhcnRSZXF1ZXN0KGVsZW1lbnQpO1xyXG5cdFx0XHRkYXRhID0ge307XHJcblx0XHRcdGRhdGFbZWxlbWVudC5uYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHQkLmFqYXgoJC5leHRlbmQodHJ1ZSwge1xyXG5cdFx0XHRcdG1vZGU6IFwiYWJvcnRcIixcclxuXHRcdFx0XHRwb3J0OiBcInZhbGlkYXRlXCIgKyBlbGVtZW50Lm5hbWUsXHJcblx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0Y29udGV4dDogdmFsaWRhdG9yLmN1cnJlbnRGb3JtLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsaWQgPSByZXNwb25zZSA9PT0gdHJ1ZSB8fCByZXNwb25zZSA9PT0gXCJ0cnVlXCIsXHJcblx0XHRcdFx0XHRcdGVycm9ycywgbWVzc2FnZSwgc3VibWl0dGVkO1xyXG5cclxuXHRcdFx0XHRcdHZhbGlkYXRvci5zZXR0aW5ncy5tZXNzYWdlc1tlbGVtZW50Lm5hbWVdLnJlbW90ZSA9IHByZXZpb3VzLm9yaWdpbmFsTWVzc2FnZTtcclxuXHRcdFx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdFx0XHRzdWJtaXR0ZWQgPSB2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZDtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnByZXBhcmVFbGVtZW50KGVsZW1lbnQpO1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZCA9IHN1Ym1pdHRlZDtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnN1Y2Nlc3NMaXN0LnB1c2goZWxlbWVudCk7XHJcblx0XHRcdFx0XHRcdGRlbGV0ZSB2YWxpZGF0b3IuaW52YWxpZFtlbGVtZW50Lm5hbWVdO1xyXG5cdFx0XHRcdFx0XHR2YWxpZGF0b3Iuc2hvd0Vycm9ycygpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3JzID0ge307XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSByZXNwb25zZSB8fCB2YWxpZGF0b3IuZGVmYXVsdE1lc3NhZ2UoZWxlbWVudCwgXCJyZW1vdGVcIik7XHJcblx0XHRcdFx0XHRcdGVycm9yc1tlbGVtZW50Lm5hbWVdID0gcHJldmlvdXMubWVzc2FnZSA9ICQuaXNGdW5jdGlvbihtZXNzYWdlKSA/IG1lc3NhZ2UodmFsdWUpIDogbWVzc2FnZTtcclxuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLmludmFsaWRbZWxlbWVudC5uYW1lXSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5zaG93RXJyb3JzKGVycm9ycyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwcmV2aW91cy52YWxpZCA9IHZhbGlkO1xyXG5cdFx0XHRcdFx0dmFsaWRhdG9yLnN0b3BSZXF1ZXN0KGVsZW1lbnQsIHZhbGlkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHBhcmFtKSk7XHJcblx0XHRcdHJldHVybiBcInBlbmRpbmdcIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gYWRkaXRpb25hbC1tZXRoaG9kc1xyXG5cclxuXHRcdHBhdHRlcm46IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25hbChlbGVtZW50KSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRwYXJhbSA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBwYXJhbSArIFwiKSRcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHBhcmFtLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBXZXpvbVJ1bGVzXHJcblxyXG5cdFx0cGFzc3dvcmQ6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eXFxTLiokLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsZXNpemU6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIga2IgPSAwO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRrYiArPSBlbGVtZW50LmZpbGVzW2ldLnNpemU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgKGtiIC8gMTAyNCA8PSBwYXJhbSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGVzaXplRWFjaDogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciBmbGFnID0gdHJ1ZTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsZXNbaV0uc2l6ZSAvIDEwMjQgPiBwYXJhbSkge1xyXG5cdFx0XHRcdFx0ZmxhZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IChmbGFnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsZXR5cGU6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG5cdFx0XHR2YXIgcmVzdWx0O1xyXG5cdFx0XHRwYXJhbSA9IHR5cGVvZiBwYXJhbSA9PT0gXCJzdHJpbmdcIiA/IHBhcmFtLnJlcGxhY2UoLywvZywgXCJ8XCIpIDogXCJwbmd8anBlP2d8ZG9jfHBkZnxnaWZ8emlwfHJhcnx0YXJ8aHRtbHxzd2Z8dHh0fHhsc3xkb2N4fHhsc3h8b2R0XCI7XHJcblx0XHRcdGlmIChlbGVtZW50Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0dmFyIGZpbGVzID0gZWxlbWVudC5maWxlcztcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBmaWxlc1tpXS5uYW1lO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCB2YWx1ZS5tYXRjaChuZXcgUmVnRXhwKFwiLihcIiArIHBhcmFtICsgXCIpJFwiLCBcImlcIikpO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChcIi4oXCIgKyBwYXJhbSArIFwiKSRcIiwgXCJpXCIpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSxcclxuXHJcblx0XHRvcjogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQsIHBhcmFtKSB7XHJcblx0XHRcdHZhciAkbW9kdWxlID0gJChlbGVtZW50KS5wYXJlbnRzKCcuanMtZm9ybScpO1xyXG5cdFx0XHRyZXR1cm4gJG1vZHVsZS5maW5kKCcuJyArIHBhcmFtICsgJzpmaWxsZWQnKS5sZW5ndGg7XHJcblx0XHR9LFxyXG5cclxuXHRcdHdvcmQ6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50KSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKGVsZW1lbnQpIHx8IC9eW2EtekEtWtCwLdGP0JAt0K/RltCG0ZfQh9GU0ZHQgdCE0pHSkFxcJ1xcYFxcLSBdKiQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsb2dpbjogZnVuY3Rpb24odmFsdWUsIGVsZW1lbnQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL15bMC05YS16QS1a0LAt0Y/QkC3Qr9GW0IbRl9CH0ZTQhNGR0IHSkdKQXVswLTlhLXpBLVrQsC3Rj9CQLdCv0ZbQhtGX0IfRlNCE0pHSkFxcLVxcLl9dKyQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwaG9uZVVBOiBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCwgcGFyYW0pIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoZWxlbWVudCkgfHwgL14oKChcXCs/KSgzOCkpXFxzPyk/KChbMC05XXszfSl8KFxcKFswLTldezN9XFwpKSkoXFwtfFxccyk/KChbMC05XXszfSkoXFwtfFxccyk/KFswLTldezJ9KShcXC18XFxzKT8oWzAtOV17Mn0pfChbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezJ9KShcXC18XFxzKT8oWzAtOV17M30pfChbMC05XXsyfSkoXFwtfFxccyk/KFswLTldezN9KShcXC18XFxzKT8oWzAtOV17Mn0pKSQvLnRlc3QodmFsdWUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR2YWxpZFRydWU6IGZ1bmN0aW9uKHZhbHVlLCBlbGVtZW50LCBwYXJhbSkge1xyXG4gICAgICAgICAgICBpZiAoJChlbGVtZW50KS5kYXRhKCd2YWxpZCcpID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG59KTtcclxuXHJcbi8vIGFqYXggbW9kZTogYWJvcnRcclxuLy8gdXNhZ2U6ICQuYWpheCh7IG1vZGU6IFwiYWJvcnRcIlssIHBvcnQ6IFwidW5pcXVlcG9ydFwiXX0pO1xyXG4vLyBpZiBtb2RlOlwiYWJvcnRcIiBpcyB1c2VkLCB0aGUgcHJldmlvdXMgcmVxdWVzdCBvbiB0aGF0IHBvcnQgKHBvcnQgY2FuIGJlIHVuZGVmaW5lZCkgaXMgYWJvcnRlZCB2aWEgWE1MSHR0cFJlcXVlc3QuYWJvcnQoKVxyXG5cclxudmFyIHBlbmRpbmdSZXF1ZXN0cyA9IHt9LFxyXG5cdGFqYXg7XHJcbi8vIFVzZSBhIHByZWZpbHRlciBpZiBhdmFpbGFibGUgKDEuNSspXHJcbmlmICgkLmFqYXhQcmVmaWx0ZXIpIHtcclxuXHQkLmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24oc2V0dGluZ3MsIF8sIHhocikge1xyXG5cdFx0dmFyIHBvcnQgPSBzZXR0aW5ncy5wb3J0O1xyXG5cdFx0aWYgKHNldHRpbmdzLm1vZGUgPT09IFwiYWJvcnRcIikge1xyXG5cdFx0XHRpZiAocGVuZGluZ1JlcXVlc3RzW3BvcnRdKSB7XHJcblx0XHRcdFx0cGVuZGluZ1JlcXVlc3RzW3BvcnRdLmFib3J0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cGVuZGluZ1JlcXVlc3RzW3BvcnRdID0geGhyO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59IGVsc2Uge1xyXG5cdC8vIFByb3h5IGFqYXhcclxuXHRhamF4ID0gJC5hamF4O1xyXG5cdCQuYWpheCA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XHJcblx0XHR2YXIgbW9kZSA9IChcIm1vZGVcIiBpbiBzZXR0aW5ncyA/IHNldHRpbmdzIDogJC5hamF4U2V0dGluZ3MpLm1vZGUsXHJcblx0XHRcdHBvcnQgPSAoXCJwb3J0XCIgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncyA6ICQuYWpheFNldHRpbmdzKS5wb3J0O1xyXG5cdFx0aWYgKG1vZGUgPT09IFwiYWJvcnRcIikge1xyXG5cdFx0XHRpZiAocGVuZGluZ1JlcXVlc3RzW3BvcnRdKSB7XHJcblx0XHRcdFx0cGVuZGluZ1JlcXVlc3RzW3BvcnRdLmFib3J0KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cGVuZGluZ1JlcXVlc3RzW3BvcnRdID0gYWpheC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gcGVuZGluZ1JlcXVlc3RzW3BvcnRdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFqYXguYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHR9O1xyXG59XHJcblxyXG59KSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy92ZW5kb3IvanF1ZXJ5LXZhbGlkYXRlLmpzXG4gKiovIiwiLyohIGpRdWVyeSB2Mi4yLjQgfCAoYykgalF1ZXJ5IEZvdW5kYXRpb24gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cclxuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9Yy5zbGljZSxmPWMuY29uY2F0LGc9Yy5wdXNoLGg9Yy5pbmRleE9mLGk9e30saj1pLnRvU3RyaW5nLGs9aS5oYXNPd25Qcm9wZXJ0eSxsPXt9LG09XCIyLjIuNFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZS5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSl9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcigpfSxwdXNoOmcsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50b1N0cmluZygpO3JldHVybiFuLmlzQXJyYXkoYSkmJmItcGFyc2VGbG9hdChiKSsxPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2lmKFwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSkpcmV0dXJuITE7aWYoYS5jb25zdHJ1Y3RvciYmIWsuY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFrLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGV8fHt9LFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMTtmb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8ay5jYWxsKGEsYil9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aVtqLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9ZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGQuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZihzKGEpKXtmb3IoYz1hLmxlbmd0aDtjPmQ7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmcuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpoLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxnPTAsaD1bXTtpZihzKGEpKWZvcihkPWEubGVuZ3RoO2Q+ZztnKyspZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZyBpbiBhKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBmLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhkPWUuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZS5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6bH0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKG4uZm5bU3ltYm9sLml0ZXJhdG9yXT1jW1N5bWJvbC5pdGVyYXRvcl0pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aVtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj0hIWEmJlwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdhKCksej1nYSgpLEE9Z2EoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTStcIikpfClcIitMK1wiKlxcXFxdXCIsTz1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTitcIikqKXwuKilcXFxcKXwpXCIsUD1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFE9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxVPW5ldyBSZWdFeHAoTyksVj1uZXcgUmVnRXhwKFwiXlwiK00rXCIkXCIpLFc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK04pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK08pLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFk9L15oXFxkJC9pLFo9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywkPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLF89L1srfl0vLGFhPS8nfFxcXFwvZyxiYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxjYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxkYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdz1iJiZiLm93bmVyRG9jdW1lbnQseD1iP2Iubm9kZVR5cGU6OTtpZihkPWR8fFtdLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PXgmJjkhPT14JiYxMSE9PXgpcmV0dXJuIGQ7aWYoIWUmJigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixwKSl7aWYoMTEhPT14JiYobz0kLmV4ZWMoYSkpKWlmKGY9b1sxXSl7aWYoOT09PXgpe2lmKCEoaj1iLmdldEVsZW1lbnRCeUlkKGYpKSlyZXR1cm4gZDtpZihqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZSBpZih3JiYoaj13LmdldEVsZW1lbnRCeUlkKGYpKSYmdChiLGopJiZqLmlkPT09ZilyZXR1cm4gZC5wdXNoKGopLGR9ZWxzZXtpZihvWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoZj1vWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZikpLGR9aWYoYy5xc2EmJiFBW2ErXCIgXCJdJiYoIXF8fCFxLnRlc3QoYSkpKXtpZigxIT09eCl3PWIscz1hO2Vsc2UgaWYoXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7KGs9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/az1rLnJlcGxhY2UoYWEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGs9dSkscj1nKGEpLGg9ci5sZW5ndGgsbD1WLnRlc3Qoayk/XCIjXCIrazpcIltpZD0nXCIraytcIiddXCI7d2hpbGUoaC0tKXJbaF09bCtcIiBcIitxYShyW2hdKTtzPXIuam9pbihcIixcIiksdz1fLnRlc3QoYSkmJm9hKGIucGFyZW50Tm9kZSl8fGJ9aWYocyl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwocykpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7az09PXUmJmIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUSxcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBnYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGhhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gaWEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGphKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1jLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIGxhKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gaGEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaGEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1mYS5zdXBwb3J0PXt9LGY9ZmEuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89bi5kb2N1bWVudEVsZW1lbnQscD0hZihuKSwoZT1uLmRlZmF1bHRWaWV3KSYmZS50b3AhPT1lJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGRhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixkYSkpLGMuYXR0cmlidXRlcz1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChuLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Wi50ZXN0KG4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIW4uZ2V0RWxlbWVudHNCeU5hbWV8fCFuLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGM/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9Wi50ZXN0KG4ucXVlcnlTZWxlY3RvckFsbCkpJiYoaWEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxpYShmdW5jdGlvbihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPVoudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLE8pfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9Wi50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8Wi50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09bnx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1ufHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsZz1bYV0saD1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09bj8tMTpiPT09bj8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBrYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSlnLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTt3aGlsZShnW2RdPT09aFtkXSlkKys7cmV0dXJuIGQ/a2EoZ1tkXSxoW2RdKTpnW2RdPT09dj8tMTpoW2RdPT09dj8xOjB9LG4pOm59LGZhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZmEoYSxudWxsLG51bGwsYil9LGZhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShULFwiPSckMSddXCIpLGMubWF0Y2hlc1NlbGVjdG9yJiZwJiYhQVtiK1wiIFwiXSYmKCFyfHwhci50ZXN0KGIpKSYmKCFxfHwhcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmEoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmEuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmEuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhhLG1hdGNoOlcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoYmEsY2EpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoYmEsY2EpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBXLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVS50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGJhLGNhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWZhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUCxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShRLFwiJDFcIikpO3JldHVybiBkW3VdP2hhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBmYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShiYSxjYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGEoZnVuY3Rpb24oYSl7cmV0dXJuIFYudGVzdChhfHxcIlwiKXx8ZmEuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWEoYik7ZnVuY3Rpb24gcGEoKXt9cGEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYSxnPWZhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVIuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVMuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUSxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9V1tnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaixrPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaj1iW3VdfHwoYlt1XT17fSksaT1qW2IudW5pcXVlSURdfHwoaltiLnVuaXF1ZUlEXT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4ga1syXT1oWzJdO2lmKGlbZF09ayxrWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKGMmJiFjKGYsZCxlKXx8KGcucHVzaChmKSxqJiZiLnB1c2goaCkpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YShkKSksZSYmIWVbdV0mJihlPXZhKGUsZikpLGhhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXVhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2EoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYShzYShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmEoaT4xJiZzYShtKSxpPjEmJnFhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUSxcIiQxXCIpLGMsZT5pJiZ3YShhLnNsaWNlKGksZSkpLGY+ZSYmd2EoYT1hLnNsaWNlKGUpKSxmPmUmJnFhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNhKG0pfWZ1bmN0aW9uIHhhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG8scSxyPTAscz1cIjBcIix0PWYmJltdLHU9W10sdj1qLHg9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx5PXcrPW51bGw9PXY/MTpNYXRoLnJhbmRvbSgpfHwuMSx6PXgubGVuZ3RoO2ZvcihrJiYoaj1nPT09bnx8Z3x8ayk7cyE9PXomJm51bGwhPShsPXhbc10pO3MrKyl7aWYoZSYmbCl7bz0wLGd8fGwub3duZXJEb2N1bWVudD09PW58fChtKGwpLGg9IXApO3doaWxlKHE9YVtvKytdKWlmKHEobCxnfHxuLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9eSl9YyYmKChsPSFxJiZsKSYmci0tLGYmJnQucHVzaChsKSl9aWYocis9cyxjJiZzIT09cil7bz0wO3doaWxlKHE9YltvKytdKXEodCx1LGcsaCk7aWYoZil7aWYocj4wKXdoaWxlKHMtLSl0W3NdfHx1W3NdfHwodVtzXT1GLmNhbGwoaSkpO3U9dWEodSl9SC5hcHBseShpLHUpLGsmJiFmJiZ1Lmxlbmd0aD4wJiZyK2IubGVuZ3RoPjEmJmZhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXksaj12KSx0fTtyZXR1cm4gYz9oYShmKTpmfXJldHVybiBoPWZhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmEuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1XLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShiYSxjYSksXy50ZXN0KGpbMF0udHlwZSkmJm9hKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZxYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSwhYnx8Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWlhKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGphKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8amEoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGlhKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGphKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGZhfShhKTtuLmZpbmQ9dCxuLmV4cHI9dC5zZWxlY3RvcnMsbi5leHByW1wiOlwiXT1uLmV4cHIucHNldWRvcyxuLnVuaXF1ZVNvcnQ9bi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHY9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9LHc9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx4PS9ePChbXFx3LV0rKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx5PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB6KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoeS50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaC5jYWxsKGIsYSk+LTEhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeih0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ3LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBBLEI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQz1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBlLGY7aWYoIWEpcmV0dXJuIHRoaXM7aWYoYz1jfHxBLFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihlPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkIuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSkseC50ZXN0KGVbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gZj1kLmdldEVsZW1lbnRCeUlkKGVbMl0pLGYmJmYucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1mKSx0aGlzLmNvbnRleHQ9ZCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT92b2lkIDAhPT1jLnJlYWR5P2MucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07Qy5wcm90b3R5cGU9bi5mbixBPW4oZCk7dmFyIEQ9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRT17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXcudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlU29ydChmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/aC5jYWxsKG4oYSksdGhpc1swXSk6aC5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZVNvcnQobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRihhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB1KGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBGKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiB1KGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gdigoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRVthXXx8bi51bmlxdWVTb3J0KGUpLEQudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBHPS9cXFMrL2c7ZnVuY3Rpb24gSChhKXt2YXIgYj17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9IKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7bi5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09bi50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIG4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGg+PWMmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5wcm9ncmVzcyhjLm5vdGlmeSkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1lLmNhbGwoYXJndW1lbnRzKSxkPWMubGVuZ3RoLGY9MSE9PWR8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2Q6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZS5jYWxsKGFyZ3VtZW50cyk6ZCxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGQ+MSlmb3IoaT1uZXcgQXJyYXkoZCksaj1uZXcgQXJyYXkoZCksaz1uZXcgQXJyYXkoZCk7ZD5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5wcm9ncmVzcyhoKGIsaixpKSkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEk7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEkucmVzb2x2ZVdpdGgoZCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGQpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihkKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBKKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBJfHwoST1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsP2Euc2V0VGltZW91dChuLnJlYWR5KTooZC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEopLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixKKSkpLEkucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEs9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpSyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxMPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gTSgpe3RoaXMuZXhwYW5kbz1uLmV4cGFuZG8rTS51aWQrK31NLnVpZD0xLE0ucHJvdG90eXBlPXtyZWdpc3RlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fHt9O3JldHVybiBhLm5vZGVUeXBlP2FbdGhpcy5leHBhbmRvXT1jOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLHRoaXMuZXhwYW5kbyx7dmFsdWU6Yyx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxhW3RoaXMuZXhwYW5kb119LGNhY2hlOmZ1bmN0aW9uKGEpe2lmKCFMKGEpKXJldHVybnt9O3ZhciBiPWFbdGhpcy5leHBhbmRvXTtyZXR1cm4gYnx8KGI9e30sTChhKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPWI6T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsdGhpcy5leHBhbmRvLHt2YWx1ZTpiLGNvbmZpZ3VyYWJsZTohMH0pKSksYn0sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMuY2FjaGUoYSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZVtiXT1jO2Vsc2UgZm9yKGQgaW4gYillW2RdPWJbZF07cmV0dXJuIGV9LGdldDpmdW5jdGlvbihhLGIpe3JldHVybiB2b2lkIDA9PT1iP3RoaXMuY2FjaGUoYSk6YVt0aGlzLmV4cGFuZG9dJiZhW3RoaXMuZXhwYW5kb11bYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9YVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PWYpe2lmKHZvaWQgMD09PWIpdGhpcy5yZWdpc3RlcihhKTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBmP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZj9bZF06ZC5tYXRjaChHKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZltkW2NdXX0odm9pZCAwPT09Ynx8bi5pc0VtcHR5T2JqZWN0KGYpKSYmKGEubm9kZVR5cGU/YVt0aGlzLmV4cGFuZG9dPXZvaWQgMDpkZWxldGUgYVt0aGlzLmV4cGFuZG9dKX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiB2b2lkIDAhPT1iJiYhbi5pc0VtcHR5T2JqZWN0KGIpfX07dmFyIE49bmV3IE0sTz1uZXcgTSxQPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxRPS9bQS1aXS9nO2Z1bmN0aW9uIFIoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6UC50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmM7XHJcbn1jYXRjaChlKXt9Ty5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE8uaGFzRGF0YShhKXx8Ti5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBOLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ti5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU8uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTi5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFIoZixkLGVbZF0pKSk7Ti5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtPLnNldCh0aGlzLGEpfSk6Syh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1PLmdldChmLGEpfHxPLmdldChmLGEucmVwbGFjZShRLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCkpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoZD1uLmNhbWVsQ2FzZShhKSxjPU8uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVIoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIGQ9bi5jYW1lbENhc2UoYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9Ty5nZXQodGhpcyxkKTtPLnNldCh0aGlzLGQsYiksYS5pbmRleE9mKFwiLVwiKT4tMSYmdm9pZCAwIT09YyYmTy5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe08ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU4uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1OLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBOLmdldChhLGMpfHxOLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ti5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ti5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUz0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVD1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksVT1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sVj1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfTtmdW5jdGlvbiBXKGEsYixjLGQpe3ZhciBlLGY9MSxnPTIwLGg9ZD9mdW5jdGlvbigpe3JldHVybiBkLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBuLmNzcyhhLGIsXCJcIil9LGk9aCgpLGo9YyYmY1szXXx8KG4uY3NzTnVtYmVyW2JdP1wiXCI6XCJweFwiKSxrPShuLmNzc051bWJlcltiXXx8XCJweFwiIT09aiYmK2kpJiZULmV4ZWMobi5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixuLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBYPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFk9LzwoW1xcdzotXSspLyxaPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksJD17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19OyQub3B0Z3JvdXA9JC5vcHRpb24sJC50Ym9keT0kLnRmb290PSQuY29sZ3JvdXA9JC5jYXB0aW9uPSQudGhlYWQsJC50aD0kLnRkO2Z1bmN0aW9uIF8oYSxiKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIGFhKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU4uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE4uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX12YXIgYmE9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGcsaCxpLGosayxsPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLG09W10sbz0wLHA9YS5sZW5ndGg7cD5vO28rKylpZihmPWFbb10sZnx8MD09PWYpaWYoXCJvYmplY3RcIj09PW4udHlwZShmKSluLm1lcmdlKG0sZi5ub2RlVHlwZT9bZl06Zik7ZWxzZSBpZihiYS50ZXN0KGYpKXtnPWd8fGwuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxoPShZLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9JFtoXXx8JC5fZGVmYXVsdCxnLmlubmVySFRNTD1pWzFdK24uaHRtbFByZWZpbHRlcihmKStpWzJdLGs9aVswXTt3aGlsZShrLS0pZz1nLmxhc3RDaGlsZDtuLm1lcmdlKG0sZy5jaGlsZE5vZGVzKSxnPWwuZmlyc3RDaGlsZCxnLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBtLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShmKSk7bC50ZXh0Q29udGVudD1cIlwiLG89MDt3aGlsZShmPW1bbysrXSlpZihkJiZuLmluQXJyYXkoZixkKT4tMSllJiZlLnB1c2goZik7ZWxzZSBpZihqPW4uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGc9XyhsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJmFhKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlaLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBsfSFmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksbC5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGwubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgZGE9L15rZXkvLGVhPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxmYT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIGdhKCl7cmV0dXJuITB9ZnVuY3Rpb24gaGEoKXtyZXR1cm4hMX1mdW5jdGlvbiBpYSgpe3RyeXtyZXR1cm4gZC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYpe3ZhciBnLGg7aWYoXCJvYmplY3RcIj09dHlwZW9mIGIpe1wic3RyaW5nXCIhPXR5cGVvZiBjJiYoZD1kfHxjLGM9dm9pZCAwKTtmb3IoaCBpbiBiKWphKGEsaCxjLGQsYltoXSxmKTtyZXR1cm4gYX1pZihudWxsPT1kJiZudWxsPT1lPyhlPWMsZD1jPXZvaWQgMCk6bnVsbD09ZSYmKFwic3RyaW5nXCI9PXR5cGVvZiBjPyhlPWQsZD12b2lkIDApOihlPWQsZD1jLGM9dm9pZCAwKSksZT09PSExKWU9aGE7ZWxzZSBpZighZSlyZXR1cm4gYTtyZXR1cm4gMT09PWYmJihnPWUsZT1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5ndWlkPWcuZ3VpZHx8KGcuZ3VpZD1uLmd1aWQrKykpLGEuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYixlLGQsYyl9KX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU4uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgbiYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPWZhLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ti5oYXNEYXRhKGEpJiZOLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEcpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1mYS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJk4ucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGQsZixnLGg9W10saT1lLmNhbGwoYXJndW1lbnRzKSxqPShOLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKWEucm5hbWVzcGFjZSYmIWEucm5hbWVzcGFjZS50ZXN0KGcubmFtZXNwYWNlKXx8KGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxkPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1kJiYoYS5yZXN1bHQ9ZCk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxpc05hTihhLmJ1dHRvbil8fGEuYnV0dG9uPDEpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPi0xOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGQsZT1jLmRvY3VtZW50RWxlbWVudCxmPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZSYmZS5zY3JvbGxMZWZ0fHxmJiZmLnNjcm9sbExlZnR8fDApLShlJiZlLmNsaWVudExlZnR8fGYmJmYuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGUmJmUuc2Nyb2xsVG9wfHxmJiZmLnNjcm9sbFRvcHx8MCktKGUmJmUuY2xpZW50VG9wfHxmJiZmLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWd8fChhLndoaWNoPTEmZz8xOjImZz8zOjQmZz8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZSxmPWEudHlwZSxnPWEsaD10aGlzLmZpeEhvb2tzW2ZdO2h8fCh0aGlzLmZpeEhvb2tzW2ZdPWg9ZWEudGVzdChmKT90aGlzLm1vdXNlSG9va3M6ZGEudGVzdChmKT90aGlzLmtleUhvb2tzOnt9KSxlPWgucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoaC5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGcpLGI9ZS5sZW5ndGg7d2hpbGUoYi0tKWM9ZVtiXSxhW2NdPWdbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9ZCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksaC5maWx0ZXI/aC5maWx0ZXIoYSxnKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWlhKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWlhKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP2dhOmhhKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4uRXZlbnQsaXNEZWZhdWx0UHJldmVudGVkOmhhLGlzUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOmhhLGlzU2ltdWxhdGVkOiExLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWdhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1nYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4gZSYmKGU9PT1kfHxuLmNvbnRhaW5zKGQsZSkpfHwoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGphKHRoaXMsYSxiLGMsZCl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gamEodGhpcyxhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4gYiE9PSExJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBifHwoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPWhhKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfX0pO3ZhciBrYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Oi1dKylbXj5dKilcXC8+L2dpLGxhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLG1hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksbmE9L150cnVlXFwvKC4qKS8sb2E9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIHBhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHJhKGEpe3ZhciBiPW5hLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBzYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE4uaGFzRGF0YShhKSYmKGY9Ti5hY2Nlc3MoYSksZz1OLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9Ty5oYXNEYXRhKGEpJiYoaD1PLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE8uc2V0KGIsaSkpfX1mdW5jdGlvbiB0YShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZYLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOlwiaW5wdXRcIiE9PWMmJlwidGV4dGFyZWFcIiE9PWN8fChiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9ZnVuY3Rpb24gdWEoYSxiLGMsZCl7Yj1mLmFwcGx5KFtdLGIpO3ZhciBlLGcsaCxpLGosayxtPTAsbz1hLmxlbmd0aCxwPW8tMSxxPWJbMF0scj1uLmlzRnVuY3Rpb24ocSk7aWYocnx8bz4xJiZcInN0cmluZ1wiPT10eXBlb2YgcSYmIWwuY2hlY2tDbG9uZSYmbWEudGVzdChxKSlyZXR1cm4gYS5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBmPWEuZXEoZSk7ciYmKGJbMF09cS5jYWxsKHRoaXMsZSxmLmh0bWwoKSkpLHVhKGYsYixjLGQpfSk7aWYobyYmKGU9Y2EoYixhWzBdLm93bmVyRG9jdW1lbnQsITEsYSxkKSxnPWUuZmlyc3RDaGlsZCwxPT09ZS5jaGlsZE5vZGVzLmxlbmd0aCYmKGU9ZyksZ3x8ZCkpe2ZvcihoPW4ubWFwKF8oZSxcInNjcmlwdFwiKSxxYSksaT1oLmxlbmd0aDtvPm07bSsrKWo9ZSxtIT09cCYmKGo9bi5jbG9uZShqLCEwLCEwKSxpJiZuLm1lcmdlKGgsXyhqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbV0saixtKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChoLHJhKSxtPTA7aT5tO20rKylqPWhbbV0sWi50ZXN0KGoudHlwZXx8XCJcIikmJiFOLmFjY2VzcyhqLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhrLGopJiYoai5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChqLnNyYyk6bi5nbG9iYWxFdmFsKGoudGV4dENvbnRlbnQucmVwbGFjZShvYSxcIlwiKSkpfXJldHVybiBhfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQsZT1iP24uZmlsdGVyKGIsYSk6YSxmPTA7bnVsbCE9KGQ9ZVtmXSk7ZisrKWN8fDEhPT1kLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShfKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmYWEoXyhkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfW4uZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2Uoa2EsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEobC5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9XyhoKSxmPV8oYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyl0YShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxfKGEpLGc9Z3x8XyhoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXNhKGZbZF0sZ1tkXSk7ZWxzZSBzYShhLGgpO3JldHVybiBnPV8oaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZhYShnLCFpJiZfKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9bi5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoTChjKSl7aWYoYj1jW04uZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tOLmV4cGFuZG9dPXZvaWQgMH1jW08uZXhwYW5kb10mJihjW08uZXhwYW5kb109dm9pZCAwKX19fSksbi5mbi5leHRlbmQoe2RvbU1hbmlwOnVhLGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdmEodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiB2YSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBLKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHVhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1wYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXBhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdWEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKF8oYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWxhLnRlc3QoYSkmJiEkWyhZLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1uLmh0bWxQcmVmaWx0ZXIoYSk7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEoXyhiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiB1YSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihiKXt2YXIgYz10aGlzLnBhcmVudE5vZGU7bi5pbkFycmF5KHRoaXMsYSk8MCYmKG4uY2xlYW5EYXRhKF8odGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxmPWUubGVuZ3RoLTEsaD0wO2Y+PWg7aCsrKWM9aD09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGcuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHdhLHhhPXtIVE1MOlwiYmxvY2tcIixCT0RZOlwiYmxvY2tcIn07ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1uKGIuY3JlYXRlRWxlbWVudChhKSkuYXBwZW5kVG8oYi5ib2R5KSxkPW4uY3NzKGNbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBjLmRldGFjaCgpLGR9ZnVuY3Rpb24gemEoYSl7dmFyIGI9ZCxjPXhhW2FdO3JldHVybiBjfHwoYz15YShhLGIpLFwibm9uZVwiIT09YyYmY3x8KHdhPSh3YXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPXdhWzBdLmNvbnRlbnREb2N1bWVudCxiLndyaXRlKCksYi5jbG9zZSgpLGM9eWEoYSxiKSx3YS5kZXRhY2goKSkseGFbYV09YyksY312YXIgQWE9L15tYXJnaW4vLEJhPW5ldyBSZWdFeHAoXCJeKFwiK1MrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksQ2E9ZnVuY3Rpb24oYil7dmFyIGM9Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiBjJiZjLm9wZW5lcnx8KGM9YSksYy5nZXRDb21wdXRlZFN0eWxlKGIpfSxEYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX0sRWE9ZC5kb2N1bWVudEVsZW1lbnQ7IWZ1bmN0aW9uKCl7dmFyIGIsYyxlLGYsZz1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaC5zdHlsZSl7aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsaC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsbC5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09aC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxnLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDo4cHg7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O3BhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGcuYXBwZW5kQ2hpbGQoaCk7ZnVuY3Rpb24gaSgpe2guc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGguaW5uZXJIVE1MPVwiXCIsRWEuYXBwZW5kQ2hpbGQoZyk7dmFyIGQ9YS5nZXRDb21wdXRlZFN0eWxlKGgpO2I9XCIxJVwiIT09ZC50b3AsZj1cIjJweFwiPT09ZC5tYXJnaW5MZWZ0LGM9XCI0cHhcIj09PWQud2lkdGgsaC5zdHlsZS5tYXJnaW5SaWdodD1cIjUwJVwiLGU9XCI0cHhcIj09PWQubWFyZ2luUmlnaHQsRWEucmVtb3ZlQ2hpbGQoZyl9bi5leHRlbmQobCx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBpKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGN9LHBpeGVsTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmaSgpLGV9LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZpKCksZn0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9aC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9aC5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsaC5zdHlsZS53aWR0aD1cIjFweFwiLEVhLmFwcGVuZENoaWxkKGcpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMpLm1hcmdpblJpZ2h0KSxFYS5yZW1vdmVDaGlsZChnKSxoLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpO2Z1bmN0aW9uIEZhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8Q2EoYSksZz1jP2MuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXTp2b2lkIDAsXCJcIiE9PWcmJnZvaWQgMCE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLGMmJiFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmQmEudGVzdChnKSYmQWEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIEdhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fXZhciBIYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sSWE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEphPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sS2E9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdLExhPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZTtmdW5jdGlvbiBNYShhKXtpZihhIGluIExhKXJldHVybiBhO3ZhciBiPWFbMF0udG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9S2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPUthW2NdK2IsYSBpbiBMYSlyZXR1cm4gYX1mdW5jdGlvbiBOYShhLGIsYyl7dmFyIGQ9VC5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsyXS0oY3x8MCkpKyhkWzNdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gT2EoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1VbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrVVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrVVtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitVW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitVW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFBhKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPUNhKGEpLGc9XCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT1GYShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLEJhLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYobC5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK09hKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1mdW5jdGlvbiBRYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1OLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVihkKSYmKGZbZ109Ti5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix6YShkLm5vZGVOYW1lKSkpKTooZT1WKGQpLFwibm9uZVwiPT09YyYmZXx8Ti5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1GYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiEwLGNvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9VC5leGVjKGMpKSYmZVsxXSYmKGM9VyhhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1NYShoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT1GYShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIEphJiYoZT1KYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fGlzRmluaXRlKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/SGEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP0RhKGEsSWEsZnVuY3Rpb24oKXtyZXR1cm4gUGEoYSxiLGQpfSk6UGEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmPWQmJkNhKGEpLGc9ZCYmT2EoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZiksZik7cmV0dXJuIGcmJihlPVQuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9bi5jc3MoYSxiKSksTmEoYSxjLGcpfX19KSxuLmNzc0hvb2tzLm1hcmdpbkxlZnQ9R2EobC5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj8ocGFyc2VGbG9hdChGYShhLFwibWFyZ2luTGVmdFwiKSl8fGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdC1EYShhLHttYXJnaW5MZWZ0OjB9LGZ1bmN0aW9uKCl7cmV0dXJuIGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKStcInB4XCI6dm9pZCAwfSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD1HYShsLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9EYShhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LEZhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStVW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LEFhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PU5hKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9Q2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIFFhKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vih0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIFJhKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBSYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49UmEsUmEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpSYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxuLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9UmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOlJhLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPVJhLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6UmEucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sUmEucHJvdG90eXBlLmluaXQucHJvdG90eXBlPVJhLnByb3RvdHlwZSxSYS5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV0mJiFuLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sUmEucHJvcEhvb2tzLnNjcm9sbFRvcD1SYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sbi5meD1SYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIFNhLFRhLFVhPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxWYT0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIFdhKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe1NhPXZvaWQgMH0pLFNhPW4ubm93KCl9ZnVuY3Rpb24gWGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1VW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFlhKGEsYixjKXtmb3IodmFyIGQsZT0oX2EudHdlZW5lcnNbYl18fFtdKS5jb25jYXQoX2EudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBaYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZWKGEpLHE9Ti5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/Ti5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHphKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxVYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj96YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPU4uYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7Ti5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVlhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uICRhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBfYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1fYS5wcmVmaWx0ZXJzLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPVNhfHxXYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpuLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOlNhfHxXYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcigkYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9X2EucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIG4uaXNGdW5jdGlvbihkLnN0b3ApJiYobi5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPW4ucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiBuLm1hcChrLFlhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoX2Ese3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIFcoYy5lbGVtLGEsVC5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEcpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxfYS50d2VlbmVyc1tjXT1fYS50d2VlbmVyc1tjXXx8W10sX2EudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbWmFdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/X2EucHJlZmlsdGVycy51bnNoaWZ0KGEpOl9hLnByZWZpbHRlcnMucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoVikuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9X2EodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8Ti5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9Ti5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmVmEudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8bi5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1OLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKFhhKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjpYYShcInNob3dcIiksc2xpZGVVcDpYYShcImhpZGVcIiksc2xpZGVUb2dnbGU6WGEoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9bi50aW1lcnM7Zm9yKFNhPW4ubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8bi5meC5zdG9wKCksU2E9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7VGF8fChUYT1hLnNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJJbnRlcnZhbChUYSksVGE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPW4uZng/bi5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGwuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxsLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxsLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9ZC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGwucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGFiLGJiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKDMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuZ2V0QXR0cmlidXRlP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZT1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/YWI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIG4ucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWwucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRyk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfX0pLGFiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPWJiW2JdfHxuLmZpbmQuYXR0cjtiYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9YmJbYl0sYmJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLGJiW2JdPWYpLGV9fSk7dmFyIGNiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksZGI9L14oPzphfGFyZWEpJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEsodGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSxcclxudm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpjYi50ZXN0KGEubm9kZU5hbWUpfHxkYi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLGwub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO2ImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgZWI9L1tcXHRcXHJcXG5cXGZdL2c7ZnVuY3Rpb24gZmIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifW4uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLGZiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPWZiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKGViLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsZmIodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9ZmIoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoZWIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6bi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsZmIodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRyl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1mYih0aGlzKSxiJiZOLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGIpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYnx8YT09PSExP1wiXCI6Ti5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitmYihjKStcIiBcIikucmVwbGFjZShlYixcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgZ2I9L1xcci9nLGhiPS9bXFx4MjBcXHRcXHJcXG5cXGZdKy9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKS5yZXBsYWNlKGhiLFwiIFwiKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sKGMuc2VsZWN0ZWR8fGk9PT1lKSYmKGwub3B0RGlzYWJsZWQ/IWMuZGlzYWJsZWQ6bnVsbD09PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpJiYoIWMucGFyZW50Tm9kZS5kaXNhYmxlZHx8IW4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KG4udmFsSG9va3Mub3B0aW9uLmdldChkKSxmKT4tMSkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT4tMTp2b2lkIDB9fSxsLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pO3ZhciBpYj0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87bi5leHRlbmQobi5ldmVudCx7dHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixsLG0sbyxwPVtlfHxkXSxxPWsuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWsuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWk9ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIWliLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPi0xJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksbD1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGZ8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGUpKXtmb3Ioaj1vLmRlbGVnYXRlVHlwZXx8cSxpYi50ZXN0KGorcSl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlwLnB1c2goaCksaT1oO2k9PT0oZS5vd25lckRvY3VtZW50fHxkKSYmcC5wdXNoKGkuZGVmYXVsdFZpZXd8fGkucGFyZW50V2luZG93fHxhKX1nPTA7d2hpbGUoKGg9cFtnKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zz4xP2o6by5iaW5kVHlwZXx8cSxtPShOLmdldChoLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTi5nZXQoaCxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGgsYyksbT1sJiZoW2xdLG0mJm0uYXBwbHkmJkwoaCkmJihiLnJlc3VsdD1tLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZnx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFMKGUpfHxsJiZuLmlzRnVuY3Rpb24oZVtxXSkmJiFuLmlzV2luZG93KGUpJiYoaT1lW2xdLGkmJihlW2xdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZVtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxpJiYoZVtsXT1pKSksYi5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7bi5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKX19KSxuLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfX0pLGwuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gYSxsLmZvY3VzaW58fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU4uYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTi5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1OLmFjY2VzcyhkLGIpLTE7ZT9OLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLE4ucmVtb3ZlKGQsYikpfX19KTt2YXIgamI9YS5sb2NhdGlvbixrYj1uLm5vdygpLGxiPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYil7dmFyIGM7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXtjPShuZXcgYS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhiLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yz12b2lkIDB9cmV0dXJuIGMmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciBtYj0vIy4qJC8sbmI9LyhbPyZdKV89W14mXSovLG9iPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20scGI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8scWI9L14oPzpHRVR8SEVBRCkkLyxyYj0vXlxcL1xcLy8sc2I9e30sdGI9e30sdWI9XCIqL1wiLmNvbmNhdChcIipcIiksdmI9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt2Yi5ocmVmPWpiLmhyZWY7ZnVuY3Rpb24gd2IoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEcpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24geGIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09dGI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiB5YihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gemIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6amIuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpwYi50ZXN0KGpiLnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjp1Yix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3liKHliKGEsbi5hamF4U2V0dGluZ3MpLGIpOnliKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOndiKHNiKSxhamF4VHJhbnNwb3J0OndiKHRiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtPW4uYWpheFNldHVwKHt9LGMpLG89bS5jb250ZXh0fHxtLHA9bS5jb250ZXh0JiYoby5ub2RlVHlwZXx8by5qcXVlcnkpP24obyk6bi5ldmVudCxxPW4uRGVmZXJyZWQoKSxyPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscz1tLnN0YXR1c0NvZGV8fHt9LHQ9e30sdT17fSx2PTAsdz1cImNhbmNlbGVkXCIseD17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT12KXtpZighaCl7aD17fTt3aGlsZShiPW9iLmV4ZWMoZykpaFtiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1oW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXY/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB2fHwoYT11W2NdPXVbY118fGEsdFthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB2fHwobS5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj52KWZvcihiIGluIGEpc1tiXT1bc1tiXSxhW2JdXTtlbHNlIHguYWx3YXlzKGFbeC5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dztyZXR1cm4gZSYmZS5hYm9ydChiKSx6KDAsYiksdGhpc319O2lmKHEucHJvbWlzZSh4KS5jb21wbGV0ZT1yLmFkZCx4LnN1Y2Nlc3M9eC5kb25lLHguZXJyb3I9eC5mYWlsLG0udXJsPSgoYnx8bS51cmx8fGpiLmhyZWYpK1wiXCIpLnJlcGxhY2UobWIsXCJcIikucmVwbGFjZShyYixqYi5wcm90b2NvbCtcIi8vXCIpLG0udHlwZT1jLm1ldGhvZHx8Yy50eXBlfHxtLm1ldGhvZHx8bS50eXBlLG0uZGF0YVR5cGVzPW4udHJpbShtLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W1wiXCJdLG51bGw9PW0uY3Jvc3NEb21haW4pe2o9ZC5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ai5ocmVmPW0udXJsLGouaHJlZj1qLmhyZWYsbS5jcm9zc0RvbWFpbj12Yi5wcm90b2NvbCtcIi8vXCIrdmIuaG9zdCE9ai5wcm90b2NvbCtcIi8vXCIrai5ob3N0fWNhdGNoKHkpe20uY3Jvc3NEb21haW49ITB9fWlmKG0uZGF0YSYmbS5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIG0uZGF0YSYmKG0uZGF0YT1uLnBhcmFtKG0uZGF0YSxtLnRyYWRpdGlvbmFsKSkseGIoc2IsbSxjLHgpLDI9PT12KXJldHVybiB4O2s9bi5ldmVudCYmbS5nbG9iYWwsayYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxtLnR5cGU9bS50eXBlLnRvVXBwZXJDYXNlKCksbS5oYXNDb250ZW50PSFxYi50ZXN0KG0udHlwZSksZj1tLnVybCxtLmhhc0NvbnRlbnR8fChtLmRhdGEmJihmPW0udXJsKz0obGIudGVzdChmKT9cIiZcIjpcIj9cIikrbS5kYXRhLGRlbGV0ZSBtLmRhdGEpLG0uY2FjaGU9PT0hMSYmKG0udXJsPW5iLnRlc3QoZik/Zi5yZXBsYWNlKG5iLFwiJDFfPVwiK2tiKyspOmYrKGxiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitrYisrKSksbS5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZl0mJnguc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZl0pLG4uZXRhZ1tmXSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tmXSkpLChtLmRhdGEmJm0uaGFzQ29udGVudCYmbS5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsbS5jb250ZW50VHlwZSkseC5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsbS5kYXRhVHlwZXNbMF0mJm0uYWNjZXB0c1ttLmRhdGFUeXBlc1swXV0/bS5hY2NlcHRzW20uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1tLmRhdGFUeXBlc1swXT9cIiwgXCIrdWIrXCI7IHE9MC4wMVwiOlwiXCIpOm0uYWNjZXB0c1tcIipcIl0pO2ZvcihsIGluIG0uaGVhZGVycyl4LnNldFJlcXVlc3RIZWFkZXIobCxtLmhlYWRlcnNbbF0pO2lmKG0uYmVmb3JlU2VuZCYmKG0uYmVmb3JlU2VuZC5jYWxsKG8seCxtKT09PSExfHwyPT09dikpcmV0dXJuIHguYWJvcnQoKTt3PVwiYWJvcnRcIjtmb3IobCBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl4W2xdKG1bbF0pO2lmKGU9eGIodGIsbSxjLHgpKXtpZih4LnJlYWR5U3RhdGU9MSxrJiZwLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt4LG1dKSwyPT09dilyZXR1cm4geDttLmFzeW5jJiZtLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eC5hYm9ydChcInRpbWVvdXRcIil9LG0udGltZW91dCkpO3RyeXt2PTEsZS5zZW5kKHQseil9Y2F0Y2goeSl7aWYoISgyPnYpKXRocm93IHk7eigtMSx5KX19ZWxzZSB6KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHooYixjLGQsaCl7dmFyIGosbCx0LHUsdyx5PWM7MiE9PXYmJih2PTIsaSYmYS5jbGVhclRpbWVvdXQoaSksZT12b2lkIDAsZz1ofHxcIlwiLHgucmVhZHlTdGF0ZT1iPjA/NDowLGo9Yj49MjAwJiYzMDA+Ynx8MzA0PT09YixkJiYodT16YihtLHgsZCkpLHU9QWIobSx1LHgsaiksaj8obS5pZk1vZGlmaWVkJiYodz14LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZl09dyksdz14LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2ZdPXcpKSwyMDQ9PT1ifHxcIkhFQURcIj09PW0udHlwZT95PVwibm9jb250ZW50XCI6MzA0PT09Yj95PVwibm90bW9kaWZpZWRcIjooeT11LnN0YXRlLGw9dS5kYXRhLHQ9dS5lcnJvcixqPSF0KSk6KHQ9eSwhYiYmeXx8KHk9XCJlcnJvclwiLDA+YiYmKGI9MCkpKSx4LnN0YXR1cz1iLHguc3RhdHVzVGV4dD0oY3x8eSkrXCJcIixqP3EucmVzb2x2ZVdpdGgobyxbbCx5LHhdKTpxLnJlamVjdFdpdGgobyxbeCx5LHRdKSx4LnN0YXR1c0NvZGUocykscz12b2lkIDAsayYmcC50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3gsbSxqP2w6dF0pLHIuZmlyZVdpdGgobyxbeCx5XSksayYmKHAudHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt4LG1dKSwtLW4uYWN0aXZlfHxuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB4fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxuLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7bltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksbi5hamF4KG4uZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxuLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4hbi5leHByLmZpbHRlcnMudmlzaWJsZShhKX0sbi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aD4wfHxhLm9mZnNldEhlaWdodD4wfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPjB9O3ZhciBCYj0vJTIwL2csQ2I9L1xcW1xcXSQvLERiPS9cXHI/XFxuL2csRWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLEZiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBHYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxDYi50ZXN0KGEpP2QoYSxlKTpHYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZSYmbnVsbCE9ZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUdiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlHYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKEJiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZGYi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhRWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVgudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShEYixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKERiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IGEuWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYil7fX07dmFyIEhiPXswOjIwMCwxMjIzOjIwNH0sSWI9bi5hamF4U2V0dGluZ3MueGhyKCk7bC5jb3JzPSEhSWImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBJYixsLmFqYXg9SWI9ISFJYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYil7dmFyIGMsZDtyZXR1cm4gbC5jb3JzfHxJYiYmIWIuY3Jvc3NEb21haW4/e3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKEhiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19OnZvaWQgMH0pLG4uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBuLmdsb2JhbEV2YWwoYSksYX19fSksbi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxuLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1uKFwiPHNjcmlwdD5cIikucHJvcCh7Y2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZmKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxkLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIEpiPVtdLEtiPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9SmIucG9wKCl8fG4uZXhwYW5kbytcIl9cIitrYisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihLYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJjA9PT0oYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmS2IudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1uLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShLYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPShsYi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxuLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP24oYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssSmIucHVzaChlKSksZyYmbi5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxuLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fGQ7dmFyIGU9eC5leGVjKGEpLGY9IWMmJltdO3JldHVybiBlP1tiLmNyZWF0ZUVsZW1lbnQoZVsxXSldOihlPWNhKFthXSxiLGYpLGYmJmYubGVuZ3RoJiZuKGYpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9O3ZhciBMYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmTGIpcmV0dXJuIExiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD4tMSYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5hbHdheXMoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goZnVuY3Rpb24oKXtjLmFwcGx5KHRoaXMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSl9KSx0aGlzfSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbi5ncmVwKG4udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTtmdW5jdGlvbiBNYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxuLmV4dGVuZCh7fSxoKSkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXRoaXNbMF0sZT17dG9wOjAsbGVmdDowfSxmPWQmJmQub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixkKT8oZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGM9TWIoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoYSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxFYX0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1cInBhZ2VZT2Zmc2V0XCI9PT1iO24uZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIEsodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9TWIoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9mW2JdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9mLnBhZ2VYT2Zmc2V0OmUsYz9lOmYucGFnZVlPZmZzZXQpOmFbZF09ZSl9LGEsZCxhcmd1bWVudHMubGVuZ3RoKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT1HYShsLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1GYShhLGIpLEJhLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtuLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSyh0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbi5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9uLmNzcyhiLGMsZyk6bi5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxuLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfSxzaXplOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofX0pLG4uZm4uYW5kU2VsZj1uLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIE5iPWEualF1ZXJ5LE9iPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPU9iKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1OYiksbn0sYnx8KGEualF1ZXJ5PWEuJD1uKSxufSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy92ZW5kb3IvanF1ZXJ5LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgTWFnbmlmaWMgUG9wdXAgLSB2MS4xLjAgLSAyMDE2LTAyLTIwXHJcbiAqIGh0dHA6Ly9kaW1zZW1lbm92LmNvbS9wbHVnaW5zL21hZ25pZmljLXBvcHVwL1xyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRG1pdHJ5IFNlbWVub3Y7ICovXHJcbiFmdW5jdGlvbihhKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTphKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJqcXVlcnlcIik6d2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvKX0oZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJDbG9zZVwiLGk9XCJCZWZvcmVDbG9zZVwiLGo9XCJBZnRlckNsb3NlXCIsaz1cIkJlZm9yZUFwcGVuZFwiLGw9XCJNYXJrdXBQYXJzZVwiLG09XCJPcGVuXCIsbj1cIkNoYW5nZVwiLG89XCJtZnBcIixwPVwiLlwiK28scT1cIm1mcC1yZWFkeVwiLHI9XCJtZnAtcmVtb3ZpbmdcIixzPVwibWZwLXByZXZlbnQtY2xvc2VcIix0PWZ1bmN0aW9uKCl7fSx1PSEhd2luZG93LmpRdWVyeSx2PWEod2luZG93KSx3PWZ1bmN0aW9uKGEsIGMpe2IuZXYub24obythK3AsYyl9LHg9ZnVuY3Rpb24oYiwgYywgZCwgZSl7dmFyIGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZi5jbGFzc05hbWU9XCJtZnAtXCIrYixkJiYoZi5pbm5lckhUTUw9ZCksZT9jJiZjLmFwcGVuZENoaWxkKGYpOihmPWEoZiksYyYmZi5hcHBlbmRUbyhjKSksZn0seT1mdW5jdGlvbihjLGQpe2IuZXYudHJpZ2dlckhhbmRsZXIobytjLGQpLGIuc3QuY2FsbGJhY2tzJiYoYz1jLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpK2Muc2xpY2UoMSksYi5zdC5jYWxsYmFja3NbY10mJmIuc3QuY2FsbGJhY2tzW2NdLmFwcGx5KGIsYS5pc0FycmF5KGQpP2Q6W2RdKSl9LHo9ZnVuY3Rpb24oYyl7cmV0dXJuIGM9PT1nJiZiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bnx8KGIuY3VyclRlbXBsYXRlLmNsb3NlQnRuPWEoYi5zdC5jbG9zZU1hcmt1cC5yZXBsYWNlKFwiJXRpdGxlJVwiLGIuc3QudENsb3NlKSksZz1jKSxiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0bn0sQT1mdW5jdGlvbigpe2EubWFnbmlmaWNQb3B1cC5pbnN0YW5jZXx8KGI9bmV3IHQsYi5pbml0KCksYS5tYWduaWZpY1BvcHVwLmluc3RhbmNlPWIpfSxCPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIikuc3R5bGUsYj1bXCJtc1wiLFwiT1wiLFwiTW96XCIsXCJXZWJraXRcIl07aWYodm9pZCAwIT09YS50cmFuc2l0aW9uKXJldHVybiEwO2Zvcig7Yi5sZW5ndGg7KWlmKGIucG9wKCkrXCJUcmFuc2l0aW9uXCJpbiBhKXJldHVybiEwO3JldHVybiExfTt0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6dCxpbml0OmZ1bmN0aW9uKCl7dmFyIGM9bmF2aWdhdG9yLmFwcFZlcnNpb247Yi5pc0xvd0lFPWIuaXNJRTg9ZG9jdW1lbnQuYWxsJiYhZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcixiLmlzQW5kcm9pZD0vYW5kcm9pZC9naS50ZXN0KGMpLGIuaXNJT1M9L2lwaG9uZXxpcGFkfGlwb2QvZ2kudGVzdChjKSxiLnN1cHBvcnRzVHJhbnNpdGlvbj1CKCksYi5wcm9iYWJseU1vYmlsZT1iLmlzQW5kcm9pZHx8Yi5pc0lPU3x8LyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxkPWEoZG9jdW1lbnQpLGIucG9wdXBzQ2FjaGU9e319LG9wZW46ZnVuY3Rpb24oYyl7dmFyIGU7aWYoYy5pc09iaj09PSExKXtiLml0ZW1zPWMuaXRlbXMudG9BcnJheSgpLGIuaW5kZXg9MDt2YXIgZyxoPWMuaXRlbXM7Zm9yKGU9MDtlPGgubGVuZ3RoO2UrKylpZihnPWhbZV0sZy5wYXJzZWQmJihnPWcuZWxbMF0pLGc9PT1jLmVsWzBdKXtiLmluZGV4PWU7YnJlYWt9fWVsc2UgYi5pdGVtcz1hLmlzQXJyYXkoYy5pdGVtcyk/Yy5pdGVtczpbYy5pdGVtc10sYi5pbmRleD1jLmluZGV4fHwwO2lmKGIuaXNPcGVuKXJldHVybiB2b2lkIGIudXBkYXRlSXRlbUhUTUwoKTtiLnR5cGVzPVtdLGY9XCJcIixjLm1haW5FbCYmYy5tYWluRWwubGVuZ3RoP2IuZXY9Yy5tYWluRWwuZXEoMCk6Yi5ldj1kLGMua2V5PyhiLnBvcHVwc0NhY2hlW2Mua2V5XXx8KGIucG9wdXBzQ2FjaGVbYy5rZXldPXt9KSxiLmN1cnJUZW1wbGF0ZT1iLnBvcHVwc0NhY2hlW2Mua2V5XSk6Yi5jdXJyVGVtcGxhdGU9e30sYi5zdD1hLmV4dGVuZCghMCx7fSxhLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMsYyksYi5maXhlZENvbnRlbnRQb3M9XCJhdXRvXCI9PT1iLnN0LmZpeGVkQ29udGVudFBvcz8hYi5wcm9iYWJseU1vYmlsZTpiLnN0LmZpeGVkQ29udGVudFBvcyxiLnN0Lm1vZGFsJiYoYi5zdC5jbG9zZU9uQ29udGVudENsaWNrPSExLGIuc3QuY2xvc2VPbkJnQ2xpY2s9ITEsYi5zdC5zaG93Q2xvc2VCdG49ITEsYi5zdC5lbmFibGVFc2NhcGVLZXk9ITEpLGIuYmdPdmVybGF5fHwoYi5iZ092ZXJsYXk9eChcImJnXCIpLm9uKFwiY2xpY2tcIitwLGZ1bmN0aW9uKCl7Yi5jbG9zZSgpfSksYi53cmFwPXgoXCJ3cmFwXCIpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKS5vbihcImNsaWNrXCIrcCxmdW5jdGlvbihhKXtiLl9jaGVja0lmQ2xvc2UoYS50YXJnZXQpJiZiLmNsb3NlKCl9KSxiLmNvbnRhaW5lcj14KFwiY29udGFpbmVyXCIsYi53cmFwKSksYi5jb250ZW50Q29udGFpbmVyPXgoXCJjb250ZW50XCIpLGIuc3QucHJlbG9hZGVyJiYoYi5wcmVsb2FkZXI9eChcInByZWxvYWRlclwiLGIuY29udGFpbmVyLGIuc3QudExvYWRpbmcpKTt2YXIgaT1hLm1hZ25pZmljUG9wdXAubW9kdWxlcztmb3IoZT0wO2U8aS5sZW5ndGg7ZSsrKXt2YXIgaj1pW2VdO2o9ai5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStqLnNsaWNlKDEpLGJbXCJpbml0XCIral0uY2FsbChiKX15KFwiQmVmb3JlT3BlblwiKSxiLnN0LnNob3dDbG9zZUJ0biYmKGIuc3QuY2xvc2VCdG5JbnNpZGU/KHcobCxmdW5jdGlvbihhLGIsYyxkKXtjLmNsb3NlX3JlcGxhY2VXaXRoPXooZC50eXBlKX0pLGYrPVwiIG1mcC1jbG9zZS1idG4taW5cIik6Yi53cmFwLmFwcGVuZCh6KCkpKSxiLnN0LmFsaWduVG9wJiYoZis9XCIgbWZwLWFsaWduLXRvcFwiKSxiLmZpeGVkQ29udGVudFBvcz9iLndyYXAuY3NzKHtvdmVyZmxvdzpiLnN0Lm92ZXJmbG93WSxvdmVyZmxvd1g6XCJoaWRkZW5cIixvdmVyZmxvd1k6Yi5zdC5vdmVyZmxvd1l9KTpiLndyYXAuY3NzKHt0b3A6di5zY3JvbGxUb3AoKSxwb3NpdGlvbjpcImFic29sdXRlXCJ9KSwoYi5zdC5maXhlZEJnUG9zPT09ITF8fFwiYXV0b1wiPT09Yi5zdC5maXhlZEJnUG9zJiYhYi5maXhlZENvbnRlbnRQb3MpJiZiLmJnT3ZlcmxheS5jc3Moe2hlaWdodDpkLmhlaWdodCgpLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn0pLGIuc3QuZW5hYmxlRXNjYXBlS2V5JiZkLm9uKFwia2V5dXBcIitwLGZ1bmN0aW9uKGEpezI3PT09YS5rZXlDb2RlJiZiLmNsb3NlKCl9KSx2Lm9uKFwicmVzaXplXCIrcCxmdW5jdGlvbigpe2IudXBkYXRlU2l6ZSgpfSksYi5zdC5jbG9zZU9uQ29udGVudENsaWNrfHwoZis9XCIgbWZwLWF1dG8tY3Vyc29yXCIpLGYmJmIud3JhcC5hZGRDbGFzcyhmKTt2YXIgaz1iLndIPXYuaGVpZ2h0KCksbj17fTtpZihiLmZpeGVkQ29udGVudFBvcyYmYi5faGFzU2Nyb2xsQmFyKGspKXt2YXIgbz1iLl9nZXRTY3JvbGxiYXJTaXplKCk7byYmKG4ubWFyZ2luUmlnaHQ9byl9Yi5maXhlZENvbnRlbnRQb3MmJihiLmlzSUU3P2EoXCJib2R5LCBodG1sXCIpLmNzcyhcIm92ZXJmbG93XCIsXCJoaWRkZW5cIik6bi5vdmVyZmxvdz1cImhpZGRlblwiKTt2YXIgcj1iLnN0Lm1haW5DbGFzcztyZXR1cm4gYi5pc0lFNyYmKHIrPVwiIG1mcC1pZTdcIiksciYmYi5fYWRkQ2xhc3NUb01GUChyKSxiLnVwZGF0ZUl0ZW1IVE1MKCkseShcIkJ1aWxkQ29udHJvbHNcIiksYShcImh0bWxcIikuY3NzKG4pLGIuYmdPdmVybGF5LmFkZChiLndyYXApLnByZXBlbmRUbyhiLnN0LnByZXBlbmRUb3x8YShkb2N1bWVudC5ib2R5KSksYi5fbGFzdEZvY3VzZWRFbD1kb2N1bWVudC5hY3RpdmVFbGVtZW50LHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmNvbnRlbnQ/KGIuX2FkZENsYXNzVG9NRlAocSksYi5fc2V0Rm9jdXMoKSk6Yi5iZ092ZXJsYXkuYWRkQ2xhc3MocSksZC5vbihcImZvY3VzaW5cIitwLGIuX29uRm9jdXNJbil9LDE2KSxiLmlzT3Blbj0hMCxiLnVwZGF0ZVNpemUoaykseShtKSxjfSxjbG9zZTpmdW5jdGlvbigpe2IuaXNPcGVuJiYoeShpKSxiLmlzT3Blbj0hMSxiLnN0LnJlbW92YWxEZWxheSYmIWIuaXNMb3dJRSYmYi5zdXBwb3J0c1RyYW5zaXRpb24/KGIuX2FkZENsYXNzVG9NRlAociksc2V0VGltZW91dChmdW5jdGlvbigpe2IuX2Nsb3NlKCl9LGIuc3QucmVtb3ZhbERlbGF5KSk6Yi5fY2xvc2UoKSl9LF9jbG9zZTpmdW5jdGlvbigpe3koaCk7dmFyIGM9citcIiBcIitxK1wiIFwiO2lmKGIuYmdPdmVybGF5LmRldGFjaCgpLGIud3JhcC5kZXRhY2goKSxiLmNvbnRhaW5lci5lbXB0eSgpLGIuc3QubWFpbkNsYXNzJiYoYys9Yi5zdC5tYWluQ2xhc3MrXCIgXCIpLGIuX3JlbW92ZUNsYXNzRnJvbU1GUChjKSxiLmZpeGVkQ29udGVudFBvcyl7dmFyIGU9e21hcmdpblJpZ2h0OlwiXCJ9O2IuaXNJRTc/YShcImJvZHksIGh0bWxcIikuY3NzKFwib3ZlcmZsb3dcIixcIlwiKTplLm92ZXJmbG93PVwiXCIsYShcImh0bWxcIikuY3NzKGUpfWQub2ZmKFwia2V5dXBcIitwK1wiIGZvY3VzaW5cIitwKSxiLmV2Lm9mZihwKSxiLndyYXAuYXR0cihcImNsYXNzXCIsXCJtZnAtd3JhcFwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIiksYi5iZ092ZXJsYXkuYXR0cihcImNsYXNzXCIsXCJtZnAtYmdcIiksYi5jb250YWluZXIuYXR0cihcImNsYXNzXCIsXCJtZnAtY29udGFpbmVyXCIpLCFiLnN0LnNob3dDbG9zZUJ0bnx8Yi5zdC5jbG9zZUJ0bkluc2lkZSYmYi5jdXJyVGVtcGxhdGVbYi5jdXJySXRlbS50eXBlXSE9PSEwfHxiLmN1cnJUZW1wbGF0ZS5jbG9zZUJ0biYmYi5jdXJyVGVtcGxhdGUuY2xvc2VCdG4uZGV0YWNoKCksYi5zdC5hdXRvRm9jdXNMYXN0JiZiLl9sYXN0Rm9jdXNlZEVsJiZhKGIuX2xhc3RGb2N1c2VkRWwpLmZvY3VzKCksYi5jdXJySXRlbT1udWxsLGIuY29udGVudD1udWxsLGIuY3VyclRlbXBsYXRlPW51bGwsYi5wcmV2SGVpZ2h0PTAseShqKX0sdXBkYXRlU2l6ZTpmdW5jdGlvbihhKXtpZihiLmlzSU9TKXt2YXIgYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgvd2luZG93LmlubmVyV2lkdGgsZD13aW5kb3cuaW5uZXJIZWlnaHQqYztiLndyYXAuY3NzKFwiaGVpZ2h0XCIsZCksYi53SD1kfWVsc2UgYi53SD1hfHx2LmhlaWdodCgpO2IuZml4ZWRDb250ZW50UG9zfHxiLndyYXAuY3NzKFwiaGVpZ2h0XCIsYi53SCkseShcIlJlc2l6ZVwiKX0sdXBkYXRlSXRlbUhUTUw6ZnVuY3Rpb24oKXt2YXIgYz1iLml0ZW1zW2IuaW5kZXhdO2IuY29udGVudENvbnRhaW5lci5kZXRhY2goKSxiLmNvbnRlbnQmJmIuY29udGVudC5kZXRhY2goKSxjLnBhcnNlZHx8KGM9Yi5wYXJzZUVsKGIuaW5kZXgpKTt2YXIgZD1jLnR5cGU7aWYoeShcIkJlZm9yZUNoYW5nZVwiLFtiLmN1cnJJdGVtP2IuY3Vyckl0ZW0udHlwZTpcIlwiLGRdKSxiLmN1cnJJdGVtPWMsIWIuY3VyclRlbXBsYXRlW2RdKXt2YXIgZj1iLnN0W2RdP2Iuc3RbZF0ubWFya3VwOiExO3koXCJGaXJzdE1hcmt1cFBhcnNlXCIsZiksZj9iLmN1cnJUZW1wbGF0ZVtkXT1hKGYpOmIuY3VyclRlbXBsYXRlW2RdPSEwfWUmJmUhPT1jLnR5cGUmJmIuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwibWZwLVwiK2UrXCItaG9sZGVyXCIpO3ZhciBnPWJbXCJnZXRcIitkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Quc2xpY2UoMSldKGMsYi5jdXJyVGVtcGxhdGVbZF0pO2IuYXBwZW5kQ29udGVudChnLGQpLGMucHJlbG9hZGVkPSEwLHkobixjKSxlPWMudHlwZSxiLmNvbnRhaW5lci5wcmVwZW5kKGIuY29udGVudENvbnRhaW5lcikseShcIkFmdGVyQ2hhbmdlXCIpfSxhcHBlbmRDb250ZW50OmZ1bmN0aW9uKGEsYyl7Yi5jb250ZW50PWEsYT9iLnN0LnNob3dDbG9zZUJ0biYmYi5zdC5jbG9zZUJ0bkluc2lkZSYmYi5jdXJyVGVtcGxhdGVbY109PT0hMD9iLmNvbnRlbnQuZmluZChcIi5tZnAtY2xvc2VcIikubGVuZ3RofHxiLmNvbnRlbnQuYXBwZW5kKHooKSk6Yi5jb250ZW50PWE6Yi5jb250ZW50PVwiXCIseShrKSxiLmNvbnRhaW5lci5hZGRDbGFzcyhcIm1mcC1cIitjK1wiLWhvbGRlclwiKSxiLmNvbnRlbnRDb250YWluZXIuYXBwZW5kKGIuY29udGVudCl9LHBhcnNlRWw6ZnVuY3Rpb24oYyl7dmFyIGQsZT1iLml0ZW1zW2NdO2lmKGUudGFnTmFtZT9lPXtlbDphKGUpfTooZD1lLnR5cGUsZT17ZGF0YTplLHNyYzplLnNyY30pLGUuZWwpe2Zvcih2YXIgZj1iLnR5cGVzLGc9MDtnPGYubGVuZ3RoO2crKylpZihlLmVsLmhhc0NsYXNzKFwibWZwLVwiK2ZbZ10pKXtkPWZbZ107YnJlYWt9ZS5zcmM9ZS5lbC5hdHRyKFwiZGF0YS1tZnAtc3JjXCIpLGUuc3JjfHwoZS5zcmM9ZS5lbC5hdHRyKFwiaHJlZlwiKSl9cmV0dXJuIGUudHlwZT1kfHxiLnN0LnR5cGV8fFwiaW5saW5lXCIsZS5pbmRleD1jLGUucGFyc2VkPSEwLGIuaXRlbXNbY109ZSx5KFwiRWxlbWVudFBhcnNlXCIsZSksYi5pdGVtc1tjXX0sYWRkR3JvdXA6ZnVuY3Rpb24oYSxjKXt2YXIgZD1mdW5jdGlvbihkKXtkLm1mcEVsPXRoaXMsYi5fb3BlbkNsaWNrKGQsYSxjKX07Y3x8KGM9e30pO3ZhciBlPVwiY2xpY2subWFnbmlmaWNQb3B1cFwiO2MubWFpbkVsPWEsYy5pdGVtcz8oYy5pc09iaj0hMCxhLm9mZihlKS5vbihlLGQpKTooYy5pc09iaj0hMSxjLmRlbGVnYXRlP2Eub2ZmKGUpLm9uKGUsYy5kZWxlZ2F0ZSxkKTooYy5pdGVtcz1hLGEub2ZmKGUpLm9uKGUsZCkpKX0sX29wZW5DbGljazpmdW5jdGlvbihjLGQsZSl7dmFyIGY9dm9pZCAwIT09ZS5taWRDbGljaz9lLm1pZENsaWNrOmEubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztpZihmfHwhKDI9PT1jLndoaWNofHxjLmN0cmxLZXl8fGMubWV0YUtleXx8Yy5hbHRLZXl8fGMuc2hpZnRLZXkpKXt2YXIgZz12b2lkIDAhPT1lLmRpc2FibGVPbj9lLmRpc2FibGVPbjphLm1hZ25pZmljUG9wdXAuZGVmYXVsdHMuZGlzYWJsZU9uO2lmKGcpaWYoYS5pc0Z1bmN0aW9uKGcpKXtpZighZy5jYWxsKGIpKXJldHVybiEwfWVsc2UgaWYodi53aWR0aCgpPGcpcmV0dXJuITA7Yy50eXBlJiYoYy5wcmV2ZW50RGVmYXVsdCgpLGIuaXNPcGVuJiZjLnN0b3BQcm9wYWdhdGlvbigpKSxlLmVsPWEoYy5tZnBFbCksZS5kZWxlZ2F0ZSYmKGUuaXRlbXM9ZC5maW5kKGUuZGVsZWdhdGUpKSxiLm9wZW4oZSl9fSx1cGRhdGVTdGF0dXM6ZnVuY3Rpb24oYSxkKXtpZihiLnByZWxvYWRlcil7YyE9PWEmJmIuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwibWZwLXMtXCIrYyksZHx8XCJsb2FkaW5nXCIhPT1hfHwoZD1iLnN0LnRMb2FkaW5nKTt2YXIgZT17c3RhdHVzOmEsdGV4dDpkfTt5KFwiVXBkYXRlU3RhdHVzXCIsZSksYT1lLnN0YXR1cyxkPWUudGV4dCxiLnByZWxvYWRlci5odG1sKGQpLGIucHJlbG9hZGVyLmZpbmQoXCJhXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXthLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfSksYi5jb250YWluZXIuYWRkQ2xhc3MoXCJtZnAtcy1cIithKSxjPWF9fSxfY2hlY2tJZkNsb3NlOmZ1bmN0aW9uKGMpe2lmKCFhKGMpLmhhc0NsYXNzKHMpKXt2YXIgZD1iLnN0LmNsb3NlT25Db250ZW50Q2xpY2ssZT1iLnN0LmNsb3NlT25CZ0NsaWNrO2lmKGQmJmUpcmV0dXJuITA7aWYoIWIuY29udGVudHx8YShjKS5oYXNDbGFzcyhcIm1mcC1jbG9zZVwiKXx8Yi5wcmVsb2FkZXImJmM9PT1iLnByZWxvYWRlclswXSlyZXR1cm4hMDtpZihjPT09Yi5jb250ZW50WzBdfHxhLmNvbnRhaW5zKGIuY29udGVudFswXSxjKSl7aWYoZClyZXR1cm4hMH1lbHNlIGlmKGUmJmEuY29udGFpbnMoZG9jdW1lbnQsYykpcmV0dXJuITA7cmV0dXJuITF9fSxfYWRkQ2xhc3NUb01GUDpmdW5jdGlvbihhKXtiLmJnT3ZlcmxheS5hZGRDbGFzcyhhKSxiLndyYXAuYWRkQ2xhc3MoYSl9LF9yZW1vdmVDbGFzc0Zyb21NRlA6ZnVuY3Rpb24oYSl7dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoYSksYi53cmFwLnJlbW92ZUNsYXNzKGEpfSxfaGFzU2Nyb2xsQmFyOmZ1bmN0aW9uKGEpe3JldHVybihiLmlzSUU3P2QuaGVpZ2h0KCk6ZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpPihhfHx2LmhlaWdodCgpKX0sX3NldEZvY3VzOmZ1bmN0aW9uKCl7KGIuc3QuZm9jdXM/Yi5jb250ZW50LmZpbmQoYi5zdC5mb2N1cykuZXEoMCk6Yi53cmFwKS5mb2N1cygpfSxfb25Gb2N1c0luOmZ1bmN0aW9uKGMpe3JldHVybiBjLnRhcmdldD09PWIud3JhcFswXXx8YS5jb250YWlucyhiLndyYXBbMF0sYy50YXJnZXQpP3ZvaWQgMDooYi5fc2V0Rm9jdXMoKSwhMSl9LF9wYXJzZU1hcmt1cDpmdW5jdGlvbihiLGMsZCl7dmFyIGU7ZC5kYXRhJiYoYz1hLmV4dGVuZChkLmRhdGEsYykpLHkobCxbYixjLGRdKSxhLmVhY2goYyxmdW5jdGlvbihjLGQpe2lmKHZvaWQgMD09PWR8fGQ9PT0hMSlyZXR1cm4hMDtpZihlPWMuc3BsaXQoXCJfXCIpLGUubGVuZ3RoPjEpe3ZhciBmPWIuZmluZChwK1wiLVwiK2VbMF0pO2lmKGYubGVuZ3RoPjApe3ZhciBnPWVbMV07XCJyZXBsYWNlV2l0aFwiPT09Zz9mWzBdIT09ZFswXSYmZi5yZXBsYWNlV2l0aChkKTpcImltZ1wiPT09Zz9mLmlzKFwiaW1nXCIpP2YuYXR0cihcInNyY1wiLGQpOmYucmVwbGFjZVdpdGgoYShcIjxpbWc+XCIpLmF0dHIoXCJzcmNcIixkKS5hdHRyKFwiY2xhc3NcIixmLmF0dHIoXCJjbGFzc1wiKSkpOmYuYXR0cihlWzFdLGQpfX1lbHNlIGIuZmluZChwK1wiLVwiK2MpLmh0bWwoZCl9KX0sX2dldFNjcm9sbGJhclNpemU6ZnVuY3Rpb24oKXtpZih2b2lkIDA9PT1iLnNjcm9sbGJhclNpemUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5zdHlsZS5jc3NUZXh0PVwid2lkdGg6IDk5cHg7IGhlaWdodDogOTlweDsgb3ZlcmZsb3c6IHNjcm9sbDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IC05OTk5cHg7XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKSxiLnNjcm9sbGJhclNpemU9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSl9cmV0dXJuIGIuc2Nyb2xsYmFyU2l6ZX19LGEubWFnbmlmaWNQb3B1cD17aW5zdGFuY2U6bnVsbCxwcm90bzp0LnByb3RvdHlwZSxtb2R1bGVzOltdLG9wZW46ZnVuY3Rpb24oYixjKXtyZXR1cm4gQSgpLGI9Yj9hLmV4dGVuZCghMCx7fSxiKTp7fSxiLmlzT2JqPSEwLGIuaW5kZXg9Y3x8MCx0aGlzLmluc3RhbmNlLm9wZW4oYil9LGNsb3NlOmZ1bmN0aW9uKCl7cmV0dXJuIGEubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSYmYS5tYWduaWZpY1BvcHVwLmluc3RhbmNlLmNsb3NlKCl9LHJlZ2lzdGVyTW9kdWxlOmZ1bmN0aW9uKGIsYyl7Yy5vcHRpb25zJiYoYS5tYWduaWZpY1BvcHVwLmRlZmF1bHRzW2JdPWMub3B0aW9ucyksYS5leHRlbmQodGhpcy5wcm90byxjLnByb3RvKSx0aGlzLm1vZHVsZXMucHVzaChiKX0sZGVmYXVsdHM6e2Rpc2FibGVPbjowLGtleTpudWxsLG1pZENsaWNrOiExLG1haW5DbGFzczpcIlwiLHByZWxvYWRlcjohMCxmb2N1czpcIlwiLGNsb3NlT25Db250ZW50Q2xpY2s6ITEsY2xvc2VPbkJnQ2xpY2s6ITAsY2xvc2VCdG5JbnNpZGU6ITAsc2hvd0Nsb3NlQnRuOiEwLGVuYWJsZUVzY2FwZUtleTohMCxtb2RhbDohMSxhbGlnblRvcDohMSxyZW1vdmFsRGVsYXk6MCxwcmVwZW5kVG86bnVsbCxmaXhlZENvbnRlbnRQb3M6XCJhdXRvXCIsZml4ZWRCZ1BvczpcImF1dG9cIixvdmVyZmxvd1k6XCJhdXRvXCIsY2xvc2VNYXJrdXA6JzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JiMyMTU7PC9idXR0b24+Jyx0Q2xvc2U6XCJDbG9zZSAoRXNjKVwiLHRMb2FkaW5nOlwiTG9hZGluZy4uLlwiLGF1dG9Gb2N1c0xhc3Q6ITB9fSxhLmZuLm1hZ25pZmljUG9wdXA9ZnVuY3Rpb24oYyl7QSgpO3ZhciBkPWEodGhpcyk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMpaWYoXCJvcGVuXCI9PT1jKXt2YXIgZSxmPXU/ZC5kYXRhKFwibWFnbmlmaWNQb3B1cFwiKTpkWzBdLm1hZ25pZmljUG9wdXAsZz1wYXJzZUludChhcmd1bWVudHNbMV0sMTApfHwwO2YuaXRlbXM/ZT1mLml0ZW1zW2ddOihlPWQsZi5kZWxlZ2F0ZSYmKGU9ZS5maW5kKGYuZGVsZWdhdGUpKSxlPWUuZXEoZykpLGIuX29wZW5DbGljayh7bWZwRWw6ZX0sZCxmKX1lbHNlIGIuaXNPcGVuJiZiW2NdLmFwcGx5KGIsQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpKTtlbHNlIGM9YS5leHRlbmQoITAse30sYyksdT9kLmRhdGEoXCJtYWduaWZpY1BvcHVwXCIsYyk6ZFswXS5tYWduaWZpY1BvcHVwPWMsYi5hZGRHcm91cChkLGMpO3JldHVybiBkfTt2YXIgQyxELEUsRj1cImlubGluZVwiLEc9ZnVuY3Rpb24oKXtFJiYoRC5hZnRlcihFLmFkZENsYXNzKEMpKS5kZXRhY2goKSxFPW51bGwpfTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoRix7b3B0aW9uczp7aGlkZGVuQ2xhc3M6XCJoaWRlXCIsbWFya3VwOlwiXCIsdE5vdEZvdW5kOlwiQ29udGVudCBub3QgZm91bmRcIn0scHJvdG86e2luaXRJbmxpbmU6ZnVuY3Rpb24oKXtiLnR5cGVzLnB1c2goRiksdyhoK1wiLlwiK0YsZnVuY3Rpb24oKXtHKCl9KX0sZ2V0SW5saW5lOmZ1bmN0aW9uKGMsZCl7aWYoRygpLGMuc3JjKXt2YXIgZT1iLnN0LmlubGluZSxmPWEoYy5zcmMpO2lmKGYubGVuZ3RoKXt2YXIgZz1mWzBdLnBhcmVudE5vZGU7ZyYmZy50YWdOYW1lJiYoRHx8KEM9ZS5oaWRkZW5DbGFzcyxEPXgoQyksQz1cIm1mcC1cIitDKSxFPWYuYWZ0ZXIoRCkuZGV0YWNoKCkucmVtb3ZlQ2xhc3MoQykpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIil9ZWxzZSBiLnVwZGF0ZVN0YXR1cyhcImVycm9yXCIsZS50Tm90Rm91bmQpLGY9YShcIjxkaXY+XCIpO3JldHVybiBjLmlubGluZUVsZW1lbnQ9ZixmfXJldHVybiBiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpLGIuX3BhcnNlTWFya3VwKGQse30sYyksZH19fSk7dmFyIEgsST1cImFqYXhcIixKPWZ1bmN0aW9uKCl7SCYmYShkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhIKX0sSz1mdW5jdGlvbigpe0ooKSxiLnJlcSYmYi5yZXEuYWJvcnQoKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKEkse29wdGlvbnM6e3NldHRpbmdzOm51bGwsY3Vyc29yOlwibWZwLWFqYXgtY3VyXCIsdEVycm9yOic8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nfSxwcm90bzp7aW5pdEFqYXg6ZnVuY3Rpb24oKXtiLnR5cGVzLnB1c2goSSksSD1iLnN0LmFqYXguY3Vyc29yLHcoaCtcIi5cIitJLEspLHcoXCJCZWZvcmVDaGFuZ2UuXCIrSSxLKX0sZ2V0QWpheDpmdW5jdGlvbihjKXtIJiZhKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKEgpLGIudXBkYXRlU3RhdHVzKFwibG9hZGluZ1wiKTt2YXIgZD1hLmV4dGVuZCh7dXJsOmMuc3JjLHN1Y2Nlc3M6ZnVuY3Rpb24oZCxlLGYpe3ZhciBnPXtkYXRhOmQseGhyOmZ9O3koXCJQYXJzZUFqYXhcIixnKSxiLmFwcGVuZENvbnRlbnQoYShnLmRhdGEpLEkpLGMuZmluaXNoZWQ9ITAsSigpLGIuX3NldEZvY3VzKCksc2V0VGltZW91dChmdW5jdGlvbigpe2Iud3JhcC5hZGRDbGFzcyhxKX0sMTYpLGIudXBkYXRlU3RhdHVzKFwicmVhZHlcIikseShcIkFqYXhDb250ZW50QWRkZWRcIil9LGVycm9yOmZ1bmN0aW9uKCl7SigpLGMuZmluaXNoZWQ9Yy5sb2FkRXJyb3I9ITAsYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGIuc3QuYWpheC50RXJyb3IucmVwbGFjZShcIiV1cmwlXCIsYy5zcmMpKX19LGIuc3QuYWpheC5zZXR0aW5ncyk7cmV0dXJuIGIucmVxPWEuYWpheChkKSxcIlwifX19KTt2YXIgTCxNPWZ1bmN0aW9uKGMpe2lmKGMuZGF0YSYmdm9pZCAwIT09Yy5kYXRhLnRpdGxlKXJldHVybiBjLmRhdGEudGl0bGU7dmFyIGQ9Yi5zdC5pbWFnZS50aXRsZVNyYztpZihkKXtpZihhLmlzRnVuY3Rpb24oZCkpcmV0dXJuIGQuY2FsbChiLGMpO2lmKGMuZWwpcmV0dXJuIGMuZWwuYXR0cihkKXx8XCJcIn1yZXR1cm5cIlwifTthLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoXCJpbWFnZVwiLHtvcHRpb25zOnttYXJrdXA6JzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+PGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PjxmaWd1cmU+PGRpdiBjbGFzcz1cIm1mcC1pbWdcIj48L2Rpdj48ZmlnY2FwdGlvbj48ZGl2IGNsYXNzPVwibWZwLWJvdHRvbS1iYXJcIj48ZGl2IGNsYXNzPVwibWZwLXRpdGxlXCI+PC9kaXY+PGRpdiBjbGFzcz1cIm1mcC1jb3VudGVyXCI+PC9kaXY+PC9kaXY+PC9maWdjYXB0aW9uPjwvZmlndXJlPjwvZGl2PicsY3Vyc29yOlwibWZwLXpvb20tb3V0LWN1clwiLHRpdGxlU3JjOlwidGl0bGVcIix2ZXJ0aWNhbEZpdDohMCx0RXJyb3I6JzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nfSxwcm90bzp7aW5pdEltYWdlOmZ1bmN0aW9uKCl7dmFyIGM9Yi5zdC5pbWFnZSxkPVwiLmltYWdlXCI7Yi50eXBlcy5wdXNoKFwiaW1hZ2VcIiksdyhtK2QsZnVuY3Rpb24oKXtcImltYWdlXCI9PT1iLmN1cnJJdGVtLnR5cGUmJmMuY3Vyc29yJiZhKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKGMuY3Vyc29yKX0pLHcoaCtkLGZ1bmN0aW9uKCl7Yy5jdXJzb3ImJmEoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoYy5jdXJzb3IpLHYub2ZmKFwicmVzaXplXCIrcCl9KSx3KFwiUmVzaXplXCIrZCxiLnJlc2l6ZUltYWdlKSxiLmlzTG93SUUmJncoXCJBZnRlckNoYW5nZVwiLGIucmVzaXplSW1hZ2UpfSxyZXNpemVJbWFnZTpmdW5jdGlvbigpe3ZhciBhPWIuY3Vyckl0ZW07aWYoYSYmYS5pbWcmJmIuc3QuaW1hZ2UudmVydGljYWxGaXQpe3ZhciBjPTA7Yi5pc0xvd0lFJiYoYz1wYXJzZUludChhLmltZy5jc3MoXCJwYWRkaW5nLXRvcFwiKSwxMCkrcGFyc2VJbnQoYS5pbWcuY3NzKFwicGFkZGluZy1ib3R0b21cIiksMTApKSxhLmltZy5jc3MoXCJtYXgtaGVpZ2h0XCIsYi53SC1jKX19LF9vbkltYWdlSGFzU2l6ZTpmdW5jdGlvbihhKXthLmltZyYmKGEuaGFzU2l6ZT0hMCxMJiZjbGVhckludGVydmFsKEwpLGEuaXNDaGVja2luZ0ltZ1NpemU9ITEseShcIkltYWdlSGFzU2l6ZVwiLGEpLGEuaW1nSGlkZGVuJiYoYi5jb250ZW50JiZiLmNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxhLmltZ0hpZGRlbj0hMSkpfSxmaW5kSW1hZ2VTaXplOmZ1bmN0aW9uKGEpe3ZhciBjPTAsZD1hLmltZ1swXSxlPWZ1bmN0aW9uKGYpe0wmJmNsZWFySW50ZXJ2YWwoTCksTD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3JldHVybiBkLm5hdHVyYWxXaWR0aD4wP3ZvaWQgYi5fb25JbWFnZUhhc1NpemUoYSk6KGM+MjAwJiZjbGVhckludGVydmFsKEwpLGMrKyx2b2lkKDM9PT1jP2UoMTApOjQwPT09Yz9lKDUwKToxMDA9PT1jJiZlKDUwMCkpKX0sZil9O2UoMSl9LGdldEltYWdlOmZ1bmN0aW9uKGMsZCl7dmFyIGU9MCxmPWZ1bmN0aW9uKCl7YyYmKGMuaW1nWzBdLmNvbXBsZXRlPyhjLmltZy5vZmYoXCIubWZwbG9hZGVyXCIpLGM9PT1iLmN1cnJJdGVtJiYoYi5fb25JbWFnZUhhc1NpemUoYyksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSksYy5oYXNTaXplPSEwLGMubG9hZGVkPSEwLHkoXCJJbWFnZUxvYWRDb21wbGV0ZVwiKSk6KGUrKywyMDA+ZT9zZXRUaW1lb3V0KGYsMTAwKTpnKCkpKX0sZz1mdW5jdGlvbigpe2MmJihjLmltZy5vZmYoXCIubWZwbG9hZGVyXCIpLGM9PT1iLmN1cnJJdGVtJiYoYi5fb25JbWFnZUhhc1NpemUoYyksYi51cGRhdGVTdGF0dXMoXCJlcnJvclwiLGgudEVycm9yLnJlcGxhY2UoXCIldXJsJVwiLGMuc3JjKSkpLGMuaGFzU2l6ZT0hMCxjLmxvYWRlZD0hMCxjLmxvYWRFcnJvcj0hMCl9LGg9Yi5zdC5pbWFnZSxpPWQuZmluZChcIi5tZnAtaW1nXCIpO2lmKGkubGVuZ3RoKXt2YXIgaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO2ouY2xhc3NOYW1lPVwibWZwLWltZ1wiLGMuZWwmJmMuZWwuZmluZChcImltZ1wiKS5sZW5ndGgmJihqLmFsdD1jLmVsLmZpbmQoXCJpbWdcIikuYXR0cihcImFsdFwiKSksYy5pbWc9YShqKS5vbihcImxvYWQubWZwbG9hZGVyXCIsZikub24oXCJlcnJvci5tZnBsb2FkZXJcIixnKSxqLnNyYz1jLnNyYyxpLmlzKFwiaW1nXCIpJiYoYy5pbWc9Yy5pbWcuY2xvbmUoKSksaj1jLmltZ1swXSxqLm5hdHVyYWxXaWR0aD4wP2MuaGFzU2l6ZT0hMDpqLndpZHRofHwoYy5oYXNTaXplPSExKX1yZXR1cm4gYi5fcGFyc2VNYXJrdXAoZCx7dGl0bGU6TShjKSxpbWdfcmVwbGFjZVdpdGg6Yy5pbWd9LGMpLGIucmVzaXplSW1hZ2UoKSxjLmhhc1NpemU/KEwmJmNsZWFySW50ZXJ2YWwoTCksYy5sb2FkRXJyb3I/KGQuYWRkQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxiLnVwZGF0ZVN0YXR1cyhcImVycm9yXCIsaC50RXJyb3IucmVwbGFjZShcIiV1cmwlXCIsYy5zcmMpKSk6KGQucmVtb3ZlQ2xhc3MoXCJtZnAtbG9hZGluZ1wiKSxiLnVwZGF0ZVN0YXR1cyhcInJlYWR5XCIpKSxkKTooYi51cGRhdGVTdGF0dXMoXCJsb2FkaW5nXCIpLGMubG9hZGluZz0hMCxjLmhhc1NpemV8fChjLmltZ0hpZGRlbj0hMCxkLmFkZENsYXNzKFwibWZwLWxvYWRpbmdcIiksYi5maW5kSW1hZ2VTaXplKGMpKSxkKX19fSk7dmFyIE4sTz1mdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1OJiYoTj12b2lkIDAhPT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKS5zdHlsZS5Nb3pUcmFuc2Zvcm0pLE59O2EubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZShcInpvb21cIix7b3B0aW9uczp7ZW5hYmxlZDohMSxlYXNpbmc6XCJlYXNlLWluLW91dFwiLGR1cmF0aW9uOjMwMCxvcGVuZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaXMoXCJpbWdcIik/YTphLmZpbmQoXCJpbWdcIil9fSxwcm90bzp7aW5pdFpvb206ZnVuY3Rpb24oKXt2YXIgYSxjPWIuc3Quem9vbSxkPVwiLnpvb21cIjtpZihjLmVuYWJsZWQmJmIuc3VwcG9ydHNUcmFuc2l0aW9uKXt2YXIgZSxmLGc9Yy5kdXJhdGlvbixqPWZ1bmN0aW9uKGEpe3ZhciBiPWEuY2xvbmUoKS5yZW1vdmVBdHRyKFwic3R5bGVcIikucmVtb3ZlQXR0cihcImNsYXNzXCIpLmFkZENsYXNzKFwibWZwLWFuaW1hdGVkLWltYWdlXCIpLGQ9XCJhbGwgXCIrYy5kdXJhdGlvbi8xZTMrXCJzIFwiK2MuZWFzaW5nLGU9e3Bvc2l0aW9uOlwiZml4ZWRcIix6SW5kZXg6OTk5OSxsZWZ0OjAsdG9wOjAsXCItd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHlcIjpcImhpZGRlblwifSxmPVwidHJhbnNpdGlvblwiO3JldHVybiBlW1wiLXdlYmtpdC1cIitmXT1lW1wiLW1vei1cIitmXT1lW1wiLW8tXCIrZl09ZVtmXT1kLGIuY3NzKGUpLGJ9LGs9ZnVuY3Rpb24oKXtiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwidmlzaWJsZVwiKX07dyhcIkJ1aWxkQ29udHJvbHNcIitkLGZ1bmN0aW9uKCl7aWYoYi5fYWxsb3dab29tKCkpe2lmKGNsZWFyVGltZW91dChlKSxiLmNvbnRlbnQuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLGE9Yi5fZ2V0SXRlbVRvWm9vbSgpLCFhKXJldHVybiB2b2lkIGsoKTtmPWooYSksZi5jc3MoYi5fZ2V0T2Zmc2V0KCkpLGIud3JhcC5hcHBlbmQoZiksZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zi5jc3MoYi5fZ2V0T2Zmc2V0KCEwKSksZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aygpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtmLnJlbW92ZSgpLGE9Zj1udWxsLHkoXCJab29tQW5pbWF0aW9uRW5kZWRcIil9LDE2KX0sZyl9LDE2KX19KSx3KGkrZCxmdW5jdGlvbigpe2lmKGIuX2FsbG93Wm9vbSgpKXtpZihjbGVhclRpbWVvdXQoZSksYi5zdC5yZW1vdmFsRGVsYXk9ZywhYSl7aWYoYT1iLl9nZXRJdGVtVG9ab29tKCksIWEpcmV0dXJuO2Y9aihhKX1mLmNzcyhiLl9nZXRPZmZzZXQoITApKSxiLndyYXAuYXBwZW5kKGYpLGIuY29udGVudC5jc3MoXCJ2aXNpYmlsaXR5XCIsXCJoaWRkZW5cIiksc2V0VGltZW91dChmdW5jdGlvbigpe2YuY3NzKGIuX2dldE9mZnNldCgpKX0sMTYpfX0pLHcoaCtkLGZ1bmN0aW9uKCl7Yi5fYWxsb3dab29tKCkmJihrKCksZiYmZi5yZW1vdmUoKSxhPW51bGwpfSl9fSxfYWxsb3dab29tOmZ1bmN0aW9uKCl7cmV0dXJuXCJpbWFnZVwiPT09Yi5jdXJySXRlbS50eXBlfSxfZ2V0SXRlbVRvWm9vbTpmdW5jdGlvbigpe3JldHVybiBiLmN1cnJJdGVtLmhhc1NpemU/Yi5jdXJySXRlbS5pbWc6ITF9LF9nZXRPZmZzZXQ6ZnVuY3Rpb24oYyl7dmFyIGQ7ZD1jP2IuY3Vyckl0ZW0uaW1nOmIuc3Quem9vbS5vcGVuZXIoYi5jdXJySXRlbS5lbHx8Yi5jdXJySXRlbSk7dmFyIGU9ZC5vZmZzZXQoKSxmPXBhcnNlSW50KGQuY3NzKFwicGFkZGluZy10b3BcIiksMTApLGc9cGFyc2VJbnQoZC5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCk7ZS50b3AtPWEod2luZG93KS5zY3JvbGxUb3AoKS1mO3ZhciBoPXt3aWR0aDpkLndpZHRoKCksaGVpZ2h0Oih1P2QuaW5uZXJIZWlnaHQoKTpkWzBdLm9mZnNldEhlaWdodCktZy1mfTtyZXR1cm4gTygpP2hbXCItbW96LXRyYW5zZm9ybVwiXT1oLnRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIitlLmxlZnQrXCJweCxcIitlLnRvcCtcInB4KVwiOihoLmxlZnQ9ZS5sZWZ0LGgudG9wPWUudG9wKSxofX19KTt2YXIgUD1cImlmcmFtZVwiLFE9XCIvL2Fib3V0OmJsYW5rXCIsUj1mdW5jdGlvbihhKXtpZihiLmN1cnJUZW1wbGF0ZVtQXSl7dmFyIGM9Yi5jdXJyVGVtcGxhdGVbUF0uZmluZChcImlmcmFtZVwiKTtjLmxlbmd0aCYmKGF8fChjWzBdLnNyYz1RKSxiLmlzSUU4JiZjLmNzcyhcImRpc3BsYXlcIixhP1wiYmxvY2tcIjpcIm5vbmVcIikpfX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFAse29wdGlvbnM6e21hcmt1cDonPGRpdiBjbGFzcz1cIm1mcC1pZnJhbWUtc2NhbGVyXCI+PGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PjxpZnJhbWUgY2xhc3M9XCJtZnAtaWZyYW1lXCIgc3JjPVwiLy9hYm91dDpibGFua1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L2Rpdj4nLHNyY0FjdGlvbjpcImlmcmFtZV9zcmNcIixwYXR0ZXJuczp7eW91dHViZTp7aW5kZXg6XCJ5b3V0dWJlLmNvbVwiLGlkOlwidj1cIixzcmM6XCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8laWQlP2F1dG9wbGF5PTFcIn0sdmltZW86e2luZGV4OlwidmltZW8uY29tL1wiLGlkOlwiL1wiLHNyYzpcIi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTFcIn0sZ21hcHM6e2luZGV4OlwiLy9tYXBzLmdvb2dsZS5cIixzcmM6XCIlaWQlJm91dHB1dD1lbWJlZFwifX19LHByb3RvOntpbml0SWZyYW1lOmZ1bmN0aW9uKCl7Yi50eXBlcy5wdXNoKFApLHcoXCJCZWZvcmVDaGFuZ2VcIixmdW5jdGlvbihhLGIsYyl7YiE9PWMmJihiPT09UD9SKCk6Yz09PVAmJlIoITApKX0pLHcoaCtcIi5cIitQLGZ1bmN0aW9uKCl7UigpfSl9LGdldElmcmFtZTpmdW5jdGlvbihjLGQpe3ZhciBlPWMuc3JjLGY9Yi5zdC5pZnJhbWU7YS5lYWNoKGYucGF0dGVybnMsZnVuY3Rpb24oKXtyZXR1cm4gZS5pbmRleE9mKHRoaXMuaW5kZXgpPi0xPyh0aGlzLmlkJiYoZT1cInN0cmluZ1wiPT10eXBlb2YgdGhpcy5pZD9lLnN1YnN0cihlLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLGUubGVuZ3RoKTp0aGlzLmlkLmNhbGwodGhpcyxlKSksZT10aGlzLnNyYy5yZXBsYWNlKFwiJWlkJVwiLGUpLCExKTp2b2lkIDB9KTt2YXIgZz17fTtyZXR1cm4gZi5zcmNBY3Rpb24mJihnW2Yuc3JjQWN0aW9uXT1lKSxiLl9wYXJzZU1hcmt1cChkLGcsYyksYi51cGRhdGVTdGF0dXMoXCJyZWFkeVwiKSxkfX19KTt2YXIgUz1mdW5jdGlvbihhKXt2YXIgYz1iLml0ZW1zLmxlbmd0aDtyZXR1cm4gYT5jLTE/YS1jOjA+YT9jK2E6YX0sVD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGEucmVwbGFjZSgvJWN1cnIlL2dpLGIrMSkucmVwbGFjZSgvJXRvdGFsJS9naSxjKX07YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFwiZ2FsbGVyeVwiLHtvcHRpb25zOntlbmFibGVkOiExLGFycm93TWFya3VwOic8YnV0dG9uIHRpdGxlPVwiJXRpdGxlJVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1mcC1hcnJvdyBtZnAtYXJyb3ctJWRpciVcIj48L2J1dHRvbj4nLHByZWxvYWQ6WzAsMl0sbmF2aWdhdGVCeUltZ0NsaWNrOiEwLGFycm93czohMCx0UHJldjpcIlByZXZpb3VzIChMZWZ0IGFycm93IGtleSlcIix0TmV4dDpcIk5leHQgKFJpZ2h0IGFycm93IGtleSlcIix0Q291bnRlcjpcIiVjdXJyJSBvZiAldG90YWwlXCJ9LHByb3RvOntpbml0R2FsbGVyeTpmdW5jdGlvbigpe3ZhciBjPWIuc3QuZ2FsbGVyeSxlPVwiLm1mcC1nYWxsZXJ5XCI7cmV0dXJuIGIuZGlyZWN0aW9uPSEwLGMmJmMuZW5hYmxlZD8oZis9XCIgbWZwLWdhbGxlcnlcIix3KG0rZSxmdW5jdGlvbigpe2MubmF2aWdhdGVCeUltZ0NsaWNrJiZiLndyYXAub24oXCJjbGlja1wiK2UsXCIubWZwLWltZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGIuaXRlbXMubGVuZ3RoPjE/KGIubmV4dCgpLCExKTp2b2lkIDB9KSxkLm9uKFwia2V5ZG93blwiK2UsZnVuY3Rpb24oYSl7Mzc9PT1hLmtleUNvZGU/Yi5wcmV2KCk6Mzk9PT1hLmtleUNvZGUmJmIubmV4dCgpfSl9KSx3KFwiVXBkYXRlU3RhdHVzXCIrZSxmdW5jdGlvbihhLGMpe2MudGV4dCYmKGMudGV4dD1UKGMudGV4dCxiLmN1cnJJdGVtLmluZGV4LGIuaXRlbXMubGVuZ3RoKSl9KSx3KGwrZSxmdW5jdGlvbihhLGQsZSxmKXt2YXIgZz1iLml0ZW1zLmxlbmd0aDtlLmNvdW50ZXI9Zz4xP1QoYy50Q291bnRlcixmLmluZGV4LGcpOlwiXCJ9KSx3KFwiQnVpbGRDb250cm9sc1wiK2UsZnVuY3Rpb24oKXtpZihiLml0ZW1zLmxlbmd0aD4xJiZjLmFycm93cyYmIWIuYXJyb3dMZWZ0KXt2YXIgZD1jLmFycm93TWFya3VwLGU9Yi5hcnJvd0xlZnQ9YShkLnJlcGxhY2UoLyV0aXRsZSUvZ2ksYy50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksXCJsZWZ0XCIpKS5hZGRDbGFzcyhzKSxmPWIuYXJyb3dSaWdodD1hKGQucmVwbGFjZSgvJXRpdGxlJS9naSxjLnROZXh0KS5yZXBsYWNlKC8lZGlyJS9naSxcInJpZ2h0XCIpKS5hZGRDbGFzcyhzKTtlLmNsaWNrKGZ1bmN0aW9uKCl7Yi5wcmV2KCl9KSxmLmNsaWNrKGZ1bmN0aW9uKCl7Yi5uZXh0KCl9KSxiLmNvbnRhaW5lci5hcHBlbmQoZS5hZGQoZikpfX0pLHcobitlLGZ1bmN0aW9uKCl7Yi5fcHJlbG9hZFRpbWVvdXQmJmNsZWFyVGltZW91dChiLl9wcmVsb2FkVGltZW91dCksYi5fcHJlbG9hZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2IucHJlbG9hZE5lYXJieUltYWdlcygpLGIuX3ByZWxvYWRUaW1lb3V0PW51bGx9LDE2KX0pLHZvaWQgdyhoK2UsZnVuY3Rpb24oKXtkLm9mZihlKSxiLndyYXAub2ZmKFwiY2xpY2tcIitlKSxiLmFycm93UmlnaHQ9Yi5hcnJvd0xlZnQ9bnVsbH0pKTohMX0sbmV4dDpmdW5jdGlvbigpe2IuZGlyZWN0aW9uPSEwLGIuaW5kZXg9UyhiLmluZGV4KzEpLGIudXBkYXRlSXRlbUhUTUwoKX0scHJldjpmdW5jdGlvbigpe2IuZGlyZWN0aW9uPSExLGIuaW5kZXg9UyhiLmluZGV4LTEpLGIudXBkYXRlSXRlbUhUTUwoKX0sZ29UbzpmdW5jdGlvbihhKXtiLmRpcmVjdGlvbj1hPj1iLmluZGV4LGIuaW5kZXg9YSxiLnVwZGF0ZUl0ZW1IVE1MKCl9LHByZWxvYWROZWFyYnlJbWFnZXM6ZnVuY3Rpb24oKXt2YXIgYSxjPWIuc3QuZ2FsbGVyeS5wcmVsb2FkLGQ9TWF0aC5taW4oY1swXSxiLml0ZW1zLmxlbmd0aCksZT1NYXRoLm1pbihjWzFdLGIuaXRlbXMubGVuZ3RoKTtmb3IoYT0xO2E8PShiLmRpcmVjdGlvbj9lOmQpO2ErKyliLl9wcmVsb2FkSXRlbShiLmluZGV4K2EpO2ZvcihhPTE7YTw9KGIuZGlyZWN0aW9uP2Q6ZSk7YSsrKWIuX3ByZWxvYWRJdGVtKGIuaW5kZXgtYSl9LF9wcmVsb2FkSXRlbTpmdW5jdGlvbihjKXtpZihjPVMoYyksIWIuaXRlbXNbY10ucHJlbG9hZGVkKXt2YXIgZD1iLml0ZW1zW2NdO2QucGFyc2VkfHwoZD1iLnBhcnNlRWwoYykpLHkoXCJMYXp5TG9hZFwiLGQpLFwiaW1hZ2VcIj09PWQudHlwZSYmKGQuaW1nPWEoJzxpbWcgY2xhc3M9XCJtZnAtaW1nXCIgLz4nKS5vbihcImxvYWQubWZwbG9hZGVyXCIsZnVuY3Rpb24oKXtkLmhhc1NpemU9ITB9KS5vbihcImVycm9yLm1mcGxvYWRlclwiLGZ1bmN0aW9uKCl7ZC5oYXNTaXplPSEwLGQubG9hZEVycm9yPSEwLHkoXCJMYXp5TG9hZEVycm9yXCIsZCl9KS5hdHRyKFwic3JjXCIsZC5zcmMpKSxkLnByZWxvYWRlZD0hMH19fX0pO3ZhciBVPVwicmV0aW5hXCI7YS5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFUse29wdGlvbnM6e3JlcGxhY2VTcmM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3JjLnJlcGxhY2UoL1xcLlxcdyskLyxmdW5jdGlvbihhKXtyZXR1cm5cIkAyeFwiK2F9KX0scmF0aW86MX0scHJvdG86e2luaXRSZXRpbmE6ZnVuY3Rpb24oKXtpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xKXt2YXIgYT1iLnN0LnJldGluYSxjPWEucmF0aW87Yz1pc05hTihjKT9jKCk6YyxjPjEmJih3KFwiSW1hZ2VIYXNTaXplLlwiK1UsZnVuY3Rpb24oYSxiKXtiLmltZy5jc3Moe1wibWF4LXdpZHRoXCI6Yi5pbWdbMF0ubmF0dXJhbFdpZHRoL2Msd2lkdGg6XCIxMDAlXCJ9KX0pLHcoXCJFbGVtZW50UGFyc2UuXCIrVSxmdW5jdGlvbihiLGQpe2Quc3JjPWEucmVwbGFjZVNyYyhkLGMpfSkpfX19fSksQSgpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2pzL3ZlbmRvci9tYWduaWZpYy1wb3B1cC5qc1xuICoqLyIsIi8qKlxyXG4gKiBDbGFzcyB0b2dnbGVyIG9uIHBhcmVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYWN0aXZlQ2xhc3M9J2lzLWFjdGl2ZSddXHJcbiAqIEBwYXJhbSB7c3RyaW5nfGpxdWVyeX0gW29wdGlvbnMudGFyZ2V0U2VsZWN0b3I9Jy5qcy1kcm9wZG93bi10b2dnbGUnXVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRvZ2dsZU9uQmx1cj1mYWxzZV1cclxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWJ1Zz1mYWxzZV0gLSBFbmFibGVzIHJldHVybmVzXHJcbiAqL1xyXG4kLmZuLnd6bUNsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG5cdHZhclxyXG5cdFx0YWN0aXZlQ2xhc3NOYW1lID0gb3B0aW9ucy5hY3RpdmVDbGFzcyB8fCAnaXMtYWN0aXZlJyxcclxuXHRcdHRvZ2dsZVNlbGVjdG9yID0gb3B0aW9ucy50b2dnbGVTZWxlY3RvciB8fCAnLmpzLWNsYXNzLXRvZ2dsZScsXHJcblx0XHR0b2dnbGVPbkJsdXIgPSBvcHRpb25zLnRvZ2dsZU9uQmx1ciB8fCBmYWxzZSxcclxuXHRcdGNvbGxlY3Rpb25TZWxlY3RvciA9ICdbZGF0YS10b2dnbGU9XCJpbml0aWFsaXplZFwiXScsXHJcblx0XHRkZWJ1ZyA9IG9wdGlvbnMuZGVidWcgfHwgZmFsc2U7XHJcblxyXG5cdGlmIChkZWJ1Zykge1xyXG5cdFx0Y29uc29sZS5sb2coXCJhY3RpdmVDbGFzc05hbWU6XCIsIGFjdGl2ZUNsYXNzTmFtZSk7XHJcblx0XHRjb25zb2xlLmxvZyhcInRvZ2dsZVNlbGVjdG9yOlwiLCB0b2dnbGVTZWxlY3Rvcik7XHJcblx0XHRjb25zb2xlLmxvZyhcInRvZ2dsZU9uQmx1cjpcIiwgdG9nZ2xlT25CbHVyKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiY29sbGVjdGlvblNlbGVjdG9yOlwiLCBjb2xsZWN0aW9uU2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoZGVidWcpIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhOicsICEhJCh0aGlzKS5kYXRhKCd3em1DbGFzc1RvZ2dsZScpKTtcclxuXHRcdH1cclxuXHRcdGlmICghISQodGhpcykuZGF0YSgnd3ptQ2xhc3NUb2dnbGUnKSA9PSBmYWxzZSkge1xyXG5cdFx0XHR2YXIgdGFyZ2V0O1xyXG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2RhdGEtdG9nZ2xlJywnaW5pdGlhbGl6ZWQnKTtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCB0b2dnbGVTZWxlY3RvciwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGFyZ2V0ID0gZS5kZWxlZ2F0ZVRhcmdldDtcclxuXHRcdFx0XHRpZiAoZGVidWcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2xpY2s6dGFyZ2V0OlwiLCB0YXJnZXQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICAodG9nZ2xlT25CbHVyKSB7XHJcblx0XHRcdFx0XHQkKGNvbGxlY3Rpb25TZWxlY3Rvcikubm90KGUuZGVsZWdhdGVUYXJnZXQpLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzTmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCQoZS5kZWxlZ2F0ZVRhcmdldCkudG9nZ2xlQ2xhc3MoYWN0aXZlQ2xhc3NOYW1lKTtcclxuXHJcblx0XHRcdFx0aWYgKHRvZ2dsZU9uQmx1cikge1xyXG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrLm9uQmx1ciB0b3VjaHN0YXJ0Lm9uQmx1cicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcdGlmICghJChlLnRhcmdldCkuY2xvc2VzdChjb2xsZWN0aW9uU2VsZWN0b3IpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGFyZ2V0KS5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzc05hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignY2xpY2sub25CbHVyIHRvdWNoc3RhcnQub25CbHVyJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdCQodGhpcykuZGF0YSgnd3ptQ2xhc3NUb2dnbGUnLCB0cnVlKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvanMvbW9kdWxlcy93ZXpvbV9jbGFzc190b2dnbGVyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWpCQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFqQkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBTEE7QUFpQ0E7QUFDQTtBQUtBOzs7Ozs7O0FDclFBOzs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdk5BO0FBQ0E7QUF5TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkZBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBbm5CQTtBQUNBO0FBcW5CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpSQTtBQUNBO0FBMTdCQTtBQUNBO0FBc3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQ2psREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0ZBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNIQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=