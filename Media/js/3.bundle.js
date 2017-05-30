webpackJsonp([3],{

/***/ 11:
/***/ (function(module, exports) {

	'use strict';

	/*! RateIt | v1.0.24 / 06/14/2016
	 https://github.com/gjunge/rateit.js | Twitter: @gjunge
	 */
	(function ($) {
		$.rateit = {
			aria: {
				resetLabel: 'reset rating',
				ratingLabel: 'rating'
			}
		};

		$.fn.rateit = function (p1, p2) {
			//quick way out.
			var index = 1;
			var options = {};var mode = 'init';
			var capitaliseFirstLetter = function capitaliseFirstLetter(string) {
				return string.charAt(0).toUpperCase() + string.substr(1);
			};

			if (this.length === 0) {
				return this;
			}

			var tp1 = $.type(p1);
			if (tp1 == 'object' || p1 === undefined || p1 === null) {
				options = $.extend({}, $.fn.rateit.defaults, p1); //wants to init new rateit plugin(s).
			} else if (tp1 == 'string' && p1 !== 'reset' && p2 === undefined) {
				return this.data('rateit' + capitaliseFirstLetter(p1)); //wants to get a value.
			} else if (tp1 == 'string') {
				mode = 'setvalue';
			}

			return this.each(function () {
				var item = $(this);

				//shorten all the item.data('rateit-XXX'), will save space in closure compiler, will be like item.data('XXX') will become x('XXX')
				var itemdata = function itemdata(key, value) {

					if (value != null) {
						//update aria values
						var ariakey = 'aria-value' + (key == 'value' ? 'now' : key);
						var range = item.find('.rateit-range');
						if (range.attr(ariakey) != undefined) {
							range.attr(ariakey, value);
						}
					}

					arguments[0] = 'rateit' + capitaliseFirstLetter(key);
					return item.data.apply(item, arguments); ////Fix for WI: 523
				};

				//handle programmatic reset
				if (p1 == 'reset') {
					var setup = itemdata('init'); //get initial value
					for (var prop in setup) {
						item.data(prop, setup[prop]);
					}

					if (itemdata('backingfld')) {
						//reset also backingfield
						var fld = $(itemdata('backingfld'));
						fld.val(itemdata('value'));
						fld.trigger('change');
						if (fld[0].min) {
							fld[0].min = itemdata('min');
						}
						if (fld[0].max) {
							fld[0].max = itemdata('max');
						}
						if (fld[0].step) {
							fld[0].step = itemdata('step');
						}
					}
					item.trigger('reset');
				}

				//add the rate it class.
				if (!item.hasClass('rateit')) {
					item.addClass('rateit');
				}

				var ltr = item.css('direction') != 'rtl';

				// set value mode
				if (mode == 'setvalue') {
					if (!itemdata('init')) {
						throw 'Can\'t set value before init';
					}

					//if readonly now and it wasn't readonly, remove the eventhandlers.
					if (p1 == 'readonly' && p2 == true && !itemdata('readonly')) {
						item.find('.rateit-range').unbind();
						itemdata('wired', false);
					}
					//when we receive a null value, reset the score to its min value.
					if (p1 == 'value') {
						p2 = p2 == null ? itemdata('min') : Math.max(itemdata('min'), Math.min(itemdata('max'), p2));
					}
					if (itemdata('backingfld')) {
						//if we have a backing field, check which fields we should update.
						//In case of input[type=range], although we did read its attributes even in browsers that don't support it (using fld.attr())
						//we only update it in browser that support it (&& fld[0].min only works in supporting browsers), not only does it save us from checking if it is range input type, it also is unnecessary.
						var fld = $(itemdata('backingfld'));
						if (p1 == 'value') {
							fld.val(p2);
						}
						if (p1 == 'min' && fld[0].min) {
							fld[0].min = p2;
						}
						if (p1 == 'max' && fld[0].max) {
							fld[0].max = p2;
						}
						if (p1 == 'step' && fld[0].step) {
							fld[0].step = p2;
						}
					}

					itemdata(p1, p2);
				}

				//init rateit plugin
				if (!itemdata('init')) {

					//get our values, either from the data-* html5 attribute or from the options.
					itemdata('min', isNaN(itemdata('min')) ? options.min : itemdata('min'));
					itemdata('max', isNaN(itemdata('max')) ? options.max : itemdata('max'));
					itemdata('step', itemdata('step') || options.step);
					itemdata('readonly', itemdata('readonly') !== undefined ? itemdata('readonly') : options.readonly);
					itemdata('resetable', itemdata('resetable') !== undefined ? itemdata('resetable') : options.resetable);
					itemdata('backingfld', itemdata('backingfld') || options.backingfld);
					itemdata('starwidth', itemdata('starwidth') || options.starwidth);
					itemdata('starheight', itemdata('starheight') || options.starheight);
					itemdata('value', Math.max(itemdata('min'), Math.min(itemdata('max'), !isNaN(itemdata('value')) ? itemdata('value') : !isNaN(options.value) ? options.value : options.min)));
					itemdata('ispreset', itemdata('ispreset') !== undefined ? itemdata('ispreset') : options.ispreset);
					//are we LTR or RTL?

					if (itemdata('backingfld')) {
						//if we have a backing field, hide it, override defaults if range or select.
						var fld = $(itemdata('backingfld')).hide();

						if (fld.attr('disabled') || fld.attr('readonly')) {
							itemdata('readonly', true); //http://rateit.codeplex.com/discussions/362055 , if a backing field is disabled or readonly at instantiation, make rateit readonly.
						}

						if (fld[0].nodeName == 'INPUT') {
							if (fld[0].type == 'range' || fld[0].type == 'text') {
								//in browsers not support the range type, it defaults to text

								itemdata('min', parseInt(fld.attr('min')) || itemdata('min')); //if we would have done fld[0].min it wouldn't have worked in browsers not supporting the range type.
								itemdata('max', parseInt(fld.attr('max')) || itemdata('max'));
								itemdata('step', parseInt(fld.attr('step')) || itemdata('step'));
							}
						}
						if (fld[0].nodeName == 'SELECT' && fld[0].options.length > 1) {
							itemdata('min', !isNaN(itemdata('min')) ? itemdata('min') : Number(fld[0].options[0].value));
							itemdata('max', Number(fld[0].options[fld[0].length - 1].value));
							itemdata('step', Number(fld[0].options[1].value) - Number(fld[0].options[0].value));
							//see if we have a option that as explicity been selected
							var selectedOption = fld.find('option[selected]');
							if (selectedOption.length == 1) {
								itemdata('value', selectedOption.val());
							}
						} else {
							//if it is not a select box, we can get's it's value using the val function.
							//If it is a selectbox, we always get a value (the first one of the list), even if it was not explicity set.
							itemdata('value', fld.val());
						}
					}

					//Create the necessary tags. For ARIA purposes we need to give the items an ID. So we use an internal index to create unique ids
					var element = item[0].nodeName == 'DIV' ? 'div' : 'span';
					index++;
					var html = '<button id="rateit-reset-{{index}}" type="button" data-role="none" class="rateit-reset" aria-label="' + $.rateit.aria.resetLabel + '" aria-controls="rateit-range-{{index}}"></button><{{element}} id="rateit-range-{{index}}" class="rateit-range" tabindex="0" role="slider" aria-label="' + $.rateit.aria.ratingLabel + '" aria-owns="rateit-reset-{{index}}" aria-valuemin="' + itemdata('min') + '" aria-valuemax="' + itemdata('max') + '" aria-valuenow="' + itemdata('value') + '"><{{element}} class="rateit-selected" style="height:' + itemdata('starheight') + 'px"></{{element}}><{{element}} class="rateit-hover" style="height:' + itemdata('starheight') + 'px"></{{element}}></{{element}}>';
					item.append(html.replace(/{{index}}/gi, index).replace(/{{element}}/gi, element));

					//if we are in RTL mode, we have to change the float of the "reset button"
					if (!ltr) {
						item.find('.rateit-reset').css('float', 'right');
						item.find('.rateit-selected').addClass('rateit-selected-rtl');
						item.find('.rateit-hover').addClass('rateit-hover-rtl');
					}

					itemdata('init', JSON.parse(JSON.stringify(item.data()))); //cheap way to create a clone
				}
				//resize the height of all elements,
				item.find('.rateit-selected, .rateit-hover').height(itemdata('starheight'));

				//set the range element to fit all the stars.
				var range = item.find('.rateit-range');
				range.width(itemdata('starwidth') * (itemdata('max') - itemdata('min'))).height(itemdata('starheight'));

				//add/remove the preset class
				var presetclass = 'rateit-preset' + (ltr ? '' : '-rtl');
				if (itemdata('ispreset')) {
					item.find('.rateit-selected').addClass(presetclass);
				} else {
					item.find('.rateit-selected').removeClass(presetclass);
				}

				//set the value if we have it.
				if (itemdata('value') != null) {
					var score = (itemdata('value') - itemdata('min')) * itemdata('starwidth');
					item.find('.rateit-selected').width(score);
				}

				//setup the reset button
				var resetbtn = item.find('.rateit-reset');
				if (resetbtn.data('wired') !== true) {
					resetbtn.bind('click', function (e) {
						e.preventDefault();

						resetbtn.blur();

						var event = $.Event('beforereset');
						item.trigger(event);
						if (event.isDefaultPrevented()) {
							return false;
						}

						item.rateit('value', null);
						item.trigger('reset');
					}).data('wired', true);
				}

				//this function calculates the score based on the current position of the mouse.
				var calcRawScore = function calcRawScore(element, event) {
					var pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;

					var offsetx = pageX - $(element).offset().left;
					if (!ltr) {
						offsetx = range.width() - offsetx;
					};
					if (offsetx > range.width()) {
						offsetx = range.width();
					}
					if (offsetx < 0) {
						offsetx = 0;
					}

					return score = Math.ceil(offsetx / itemdata('starwidth') * (1 / itemdata('step')));
				};

				//sets the hover element based on the score.
				var setHover = function setHover(score) {
					var w = score * itemdata('starwidth') * itemdata('step');
					var h = range.find('.rateit-hover');
					if (h.data('width') != w) {
						range.find('.rateit-selected').hide();
						h.width(w).show().data('width', w);
						var data = [score * itemdata('step') + itemdata('min')];
						item.trigger('hover', data).trigger('over', data);
					}
				};

				var setSelection = function setSelection(value) {
					var event = $.Event('beforerated');
					item.trigger(event, [value]);
					if (event.isDefaultPrevented()) {
						return false;
					}

					itemdata('value', value);
					if (itemdata('backingfld')) {
						$(itemdata('backingfld')).val(value).trigger('change');
					}
					if (itemdata('ispreset')) {
						//if it was a preset value, unset that.
						range.find('.rateit-selected').removeClass(presetclass);
						itemdata('ispreset', false);
					}
					range.find('.rateit-hover').hide();
					range.find('.rateit-selected').width(value * itemdata('starwidth') - itemdata('min') * itemdata('starwidth')).show();
					item.trigger('hover', [null]).trigger('over', [null]).trigger('rated', [value]);
					return true;
				};

				if (!itemdata('readonly')) {
					//if we are not read only, add all the events

					//if we have a reset button, set the event handler.
					if (!itemdata('resetable')) {
						resetbtn.hide();
					}

					//when the mouse goes over the range element, we set the "hover" stars.
					if (!itemdata('wired')) {
						range.bind('touchmove touchend', touchHandler); //bind touch events
						range.mousemove(function (e) {
							var score = calcRawScore(this, e);
							setHover(score);
						});
						//when the mouse leaves the range, we have to hide the hover stars, and show the current value.
						range.mouseleave(function (e) {
							range.find('.rateit-hover').hide().width(0).data('width', '');
							item.trigger('hover', [null]).trigger('over', [null]);
							range.find('.rateit-selected').show();
						});
						//when we click on the range, we have to set the value, hide the hover.
						range.mouseup(function (e) {
							var score = calcRawScore(this, e);
							var value = score * itemdata('step') + itemdata('min');
							setSelection(value);
							range.blur();
						});

						//support key nav
						range.keyup(function (e) {
							if (e.which == 38 || e.which == (ltr ? 39 : 37)) {
								setSelection(Math.min(itemdata('value') + itemdata('step'), itemdata('max')));
							}
							if (e.which == 40 || e.which == (ltr ? 37 : 39)) {
								setSelection(Math.max(itemdata('value') - itemdata('step'), itemdata('min')));
							}
						});

						itemdata('wired', true);
					}
					if (itemdata('resetable')) {
						resetbtn.show();
					}
				} else {
					resetbtn.hide();
				}

				range.attr('aria-readonly', itemdata('readonly'));
			});
		};

		//touch converter http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript/
		function touchHandler(event) {

			var touches = event.originalEvent.changedTouches,
			    first = touches[0],
			    type = "";
			switch (event.type) {
				case "touchmove":
					type = "mousemove";break;
				case "touchend":
					type = "mouseup";break;
				default:
					return;
			}

			var simulatedEvent = document.createEvent("MouseEvent");
			simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);

			first.target.dispatchEvent(simulatedEvent);
			event.preventDefault();
		};

		//some default values.
		$.fn.rateit.defaults = { min: 0, max: 5, step: 0.5, starwidth: 16, starheight: 16, readonly: false, resetable: true, ispreset: false };

		//invoke it on all .rateit elements. This could be removed if not wanted.
		$(function () {
			$('div.rateit, span.rateit').rateit();
		});
		})(jQuery);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL3ZlbmRvci9yYXRlaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIFJhdGVJdCB8IHYxLjAuMjQgLyAwNi8xNC8yMDE2XHJcbiBodHRwczovL2dpdGh1Yi5jb20vZ2p1bmdlL3JhdGVpdC5qcyB8IFR3aXR0ZXI6IEBnanVuZ2VcclxuICovXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cdCQucmF0ZWl0ID0ge1xyXG5cdFx0YXJpYToge1xyXG5cdFx0XHRyZXNldExhYmVsOiAncmVzZXQgcmF0aW5nJyxcclxuXHRcdFx0cmF0aW5nTGFiZWw6ICdyYXRpbmcnXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0JC5mbi5yYXRlaXQgPSBmdW5jdGlvbiAocDEsIHAyKSB7XHJcblx0XHQvL3F1aWNrIHdheSBvdXQuXHJcblx0XHR2YXIgaW5kZXggPSAxO1xyXG5cdFx0dmFyIG9wdGlvbnMgPSB7fTsgdmFyIG1vZGUgPSAnaW5pdCc7XHJcblx0XHR2YXIgY2FwaXRhbGlzZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xyXG5cdFx0XHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cigxKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSAwKSB7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cclxuXHRcdHZhciB0cDEgPSAkLnR5cGUocDEpO1xyXG5cdFx0aWYgKHRwMSA9PSAnb2JqZWN0JyB8fCBwMSA9PT0gdW5kZWZpbmVkIHx8IHAxID09PSBudWxsKSB7XHJcblx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC5mbi5yYXRlaXQuZGVmYXVsdHMsIHAxKTsgLy93YW50cyB0byBpbml0IG5ldyByYXRlaXQgcGx1Z2luKHMpLlxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHAxID09ICdzdHJpbmcnICYmIHAxICE9PSAncmVzZXQnICYmIHAyID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGF0YSgncmF0ZWl0JyArIGNhcGl0YWxpc2VGaXJzdExldHRlcihwMSkpOyAvL3dhbnRzIHRvIGdldCBhIHZhbHVlLlxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHAxID09ICdzdHJpbmcnKSB7XHJcblx0XHRcdG1vZGUgPSAnc2V0dmFsdWUnO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR2YXIgaXRlbSA9ICQodGhpcyk7XHJcblxyXG5cclxuXHRcdFx0Ly9zaG9ydGVuIGFsbCB0aGUgaXRlbS5kYXRhKCdyYXRlaXQtWFhYJyksIHdpbGwgc2F2ZSBzcGFjZSBpbiBjbG9zdXJlIGNvbXBpbGVyLCB3aWxsIGJlIGxpa2UgaXRlbS5kYXRhKCdYWFgnKSB3aWxsIGJlY29tZSB4KCdYWFgnKVxyXG5cdFx0XHR2YXIgaXRlbWRhdGEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodmFsdWUgIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly91cGRhdGUgYXJpYSB2YWx1ZXNcclxuXHRcdFx0XHRcdHZhciBhcmlha2V5ID0gJ2FyaWEtdmFsdWUnICsgKChrZXkgPT0gJ3ZhbHVlJykgPyAnbm93JyA6IGtleSk7XHJcblx0XHRcdFx0XHR2YXIgcmFuZ2UgPSBpdGVtLmZpbmQoJy5yYXRlaXQtcmFuZ2UnKTtcclxuXHRcdFx0XHRcdGlmIChyYW5nZS5hdHRyKGFyaWFrZXkpICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRyYW5nZS5hdHRyKGFyaWFrZXksIHZhbHVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhcmd1bWVudHNbMF0gPSAncmF0ZWl0JyArIGNhcGl0YWxpc2VGaXJzdExldHRlcihrZXkpO1xyXG5cdFx0XHRcdHJldHVybiBpdGVtLmRhdGEuYXBwbHkoaXRlbSwgYXJndW1lbnRzKTsgLy8vL0ZpeCBmb3IgV0k6IDUyM1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly9oYW5kbGUgcHJvZ3JhbW1hdGljIHJlc2V0XHJcblx0XHRcdGlmIChwMSA9PSAncmVzZXQnKSB7XHJcblx0XHRcdFx0dmFyIHNldHVwID0gaXRlbWRhdGEoJ2luaXQnKTsgLy9nZXQgaW5pdGlhbCB2YWx1ZVxyXG5cdFx0XHRcdGZvciAodmFyIHByb3AgaW4gc2V0dXApIHtcclxuXHRcdFx0XHRcdGl0ZW0uZGF0YShwcm9wLCBzZXR1cFtwcm9wXSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbWRhdGEoJ2JhY2tpbmdmbGQnKSkgeyAvL3Jlc2V0IGFsc28gYmFja2luZ2ZpZWxkXHJcblx0XHRcdFx0XHR2YXIgZmxkID0gJChpdGVtZGF0YSgnYmFja2luZ2ZsZCcpKTtcclxuXHRcdFx0XHRcdGZsZC52YWwoaXRlbWRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHRcdFx0ZmxkLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0aWYgKGZsZFswXS5taW4pIHsgZmxkWzBdLm1pbiA9IGl0ZW1kYXRhKCdtaW4nKTsgfVxyXG5cdFx0XHRcdFx0aWYgKGZsZFswXS5tYXgpIHsgZmxkWzBdLm1heCA9IGl0ZW1kYXRhKCdtYXgnKTsgfVxyXG5cdFx0XHRcdFx0aWYgKGZsZFswXS5zdGVwKSB7IGZsZFswXS5zdGVwID0gaXRlbWRhdGEoJ3N0ZXAnKTsgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpdGVtLnRyaWdnZXIoJ3Jlc2V0Jyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vYWRkIHRoZSByYXRlIGl0IGNsYXNzLlxyXG5cdFx0XHRpZiAoIWl0ZW0uaGFzQ2xhc3MoJ3JhdGVpdCcpKSB7IGl0ZW0uYWRkQ2xhc3MoJ3JhdGVpdCcpOyB9XHJcblxyXG5cdFx0XHR2YXIgbHRyID0gaXRlbS5jc3MoJ2RpcmVjdGlvbicpICE9ICdydGwnO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHZhbHVlIG1vZGVcclxuXHRcdFx0aWYgKG1vZGUgPT0gJ3NldHZhbHVlJykge1xyXG5cdFx0XHRcdGlmICghaXRlbWRhdGEoJ2luaXQnKSkgeyB0aHJvdyAnQ2FuXFwndCBzZXQgdmFsdWUgYmVmb3JlIGluaXQnOyB9XHJcblxyXG5cclxuXHRcdFx0XHQvL2lmIHJlYWRvbmx5IG5vdyBhbmQgaXQgd2Fzbid0IHJlYWRvbmx5LCByZW1vdmUgdGhlIGV2ZW50aGFuZGxlcnMuXHJcblx0XHRcdFx0aWYgKHAxID09ICdyZWFkb25seScgJiYgcDIgPT0gdHJ1ZSAmJiAhaXRlbWRhdGEoJ3JlYWRvbmx5JykpIHtcclxuXHRcdFx0XHRcdGl0ZW0uZmluZCgnLnJhdGVpdC1yYW5nZScpLnVuYmluZCgpO1xyXG5cdFx0XHRcdFx0aXRlbWRhdGEoJ3dpcmVkJywgZmFsc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL3doZW4gd2UgcmVjZWl2ZSBhIG51bGwgdmFsdWUsIHJlc2V0IHRoZSBzY29yZSB0byBpdHMgbWluIHZhbHVlLlxyXG5cdFx0XHRcdGlmIChwMSA9PSAndmFsdWUnKSB7XHJcblx0XHRcdFx0XHRwMiA9IChwMiA9PSBudWxsKSA/IGl0ZW1kYXRhKCdtaW4nKSA6IE1hdGgubWF4KGl0ZW1kYXRhKCdtaW4nKSwgTWF0aC5taW4oaXRlbWRhdGEoJ21heCcpLCBwMikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaXRlbWRhdGEoJ2JhY2tpbmdmbGQnKSkge1xyXG5cdFx0XHRcdFx0Ly9pZiB3ZSBoYXZlIGEgYmFja2luZyBmaWVsZCwgY2hlY2sgd2hpY2ggZmllbGRzIHdlIHNob3VsZCB1cGRhdGUuXHJcblx0XHRcdFx0XHQvL0luIGNhc2Ugb2YgaW5wdXRbdHlwZT1yYW5nZV0sIGFsdGhvdWdoIHdlIGRpZCByZWFkIGl0cyBhdHRyaWJ1dGVzIGV2ZW4gaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGl0ICh1c2luZyBmbGQuYXR0cigpKVxyXG5cdFx0XHRcdFx0Ly93ZSBvbmx5IHVwZGF0ZSBpdCBpbiBicm93c2VyIHRoYXQgc3VwcG9ydCBpdCAoJiYgZmxkWzBdLm1pbiBvbmx5IHdvcmtzIGluIHN1cHBvcnRpbmcgYnJvd3NlcnMpLCBub3Qgb25seSBkb2VzIGl0IHNhdmUgdXMgZnJvbSBjaGVja2luZyBpZiBpdCBpcyByYW5nZSBpbnB1dCB0eXBlLCBpdCBhbHNvIGlzIHVubmVjZXNzYXJ5LlxyXG5cdFx0XHRcdFx0dmFyIGZsZCA9ICQoaXRlbWRhdGEoJ2JhY2tpbmdmbGQnKSk7XHJcblx0XHRcdFx0XHRpZiAocDEgPT0gJ3ZhbHVlJykgeyBmbGQudmFsKHAyKTsgfVxyXG5cdFx0XHRcdFx0aWYgKHAxID09ICdtaW4nICYmIGZsZFswXS5taW4pIHsgZmxkWzBdLm1pbiA9IHAyOyB9XHJcblx0XHRcdFx0XHRpZiAocDEgPT0gJ21heCcgJiYgZmxkWzBdLm1heCkgeyBmbGRbMF0ubWF4ID0gcDI7fVxyXG5cdFx0XHRcdFx0aWYgKHAxID09ICdzdGVwJyAmJiBmbGRbMF0uc3RlcCkgeyBmbGRbMF0uc3RlcCA9IHAyOyB9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpdGVtZGF0YShwMSwgcDIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL2luaXQgcmF0ZWl0IHBsdWdpblxyXG5cdFx0XHRpZiAoIWl0ZW1kYXRhKCdpbml0JykpIHtcclxuXHJcblx0XHRcdFx0Ly9nZXQgb3VyIHZhbHVlcywgZWl0aGVyIGZyb20gdGhlIGRhdGEtKiBodG1sNSBhdHRyaWJ1dGUgb3IgZnJvbSB0aGUgb3B0aW9ucy5cclxuXHRcdFx0XHRpdGVtZGF0YSgnbWluJywgaXNOYU4oaXRlbWRhdGEoJ21pbicpKSA/IG9wdGlvbnMubWluIDogaXRlbWRhdGEoJ21pbicpKTtcclxuXHRcdFx0XHRpdGVtZGF0YSgnbWF4JywgaXNOYU4oaXRlbWRhdGEoJ21heCcpKSA/IG9wdGlvbnMubWF4IDogaXRlbWRhdGEoJ21heCcpKTtcclxuXHRcdFx0XHRpdGVtZGF0YSgnc3RlcCcsIGl0ZW1kYXRhKCdzdGVwJykgfHwgb3B0aW9ucy5zdGVwKTtcclxuXHRcdFx0XHRpdGVtZGF0YSgncmVhZG9ubHknLCBpdGVtZGF0YSgncmVhZG9ubHknKSAhPT0gdW5kZWZpbmVkID8gaXRlbWRhdGEoJ3JlYWRvbmx5JykgOiBvcHRpb25zLnJlYWRvbmx5KTtcclxuXHRcdFx0XHRpdGVtZGF0YSgncmVzZXRhYmxlJywgaXRlbWRhdGEoJ3Jlc2V0YWJsZScpICE9PSB1bmRlZmluZWQgPyBpdGVtZGF0YSgncmVzZXRhYmxlJykgOiBvcHRpb25zLnJlc2V0YWJsZSk7XHJcblx0XHRcdFx0aXRlbWRhdGEoJ2JhY2tpbmdmbGQnLCBpdGVtZGF0YSgnYmFja2luZ2ZsZCcpIHx8IG9wdGlvbnMuYmFja2luZ2ZsZCk7XHJcblx0XHRcdFx0aXRlbWRhdGEoJ3N0YXJ3aWR0aCcsIGl0ZW1kYXRhKCdzdGFyd2lkdGgnKSB8fCBvcHRpb25zLnN0YXJ3aWR0aCk7XHJcblx0XHRcdFx0aXRlbWRhdGEoJ3N0YXJoZWlnaHQnLCBpdGVtZGF0YSgnc3RhcmhlaWdodCcpIHx8IG9wdGlvbnMuc3RhcmhlaWdodCk7XHJcblx0XHRcdFx0aXRlbWRhdGEoJ3ZhbHVlJywgTWF0aC5tYXgoaXRlbWRhdGEoJ21pbicpLCBNYXRoLm1pbihpdGVtZGF0YSgnbWF4JyksICghaXNOYU4oaXRlbWRhdGEoJ3ZhbHVlJykpID8gaXRlbWRhdGEoJ3ZhbHVlJykgOiAoIWlzTmFOKG9wdGlvbnMudmFsdWUpID8gb3B0aW9ucy52YWx1ZSA6IG9wdGlvbnMubWluKSkpKSk7XHJcblx0XHRcdFx0aXRlbWRhdGEoJ2lzcHJlc2V0JywgaXRlbWRhdGEoJ2lzcHJlc2V0JykgIT09IHVuZGVmaW5lZCA/IGl0ZW1kYXRhKCdpc3ByZXNldCcpIDogb3B0aW9ucy5pc3ByZXNldCk7XHJcblx0XHRcdFx0Ly9hcmUgd2UgTFRSIG9yIFJUTD9cclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1kYXRhKCdiYWNraW5nZmxkJykpIHtcclxuXHRcdFx0XHRcdC8vaWYgd2UgaGF2ZSBhIGJhY2tpbmcgZmllbGQsIGhpZGUgaXQsIG92ZXJyaWRlIGRlZmF1bHRzIGlmIHJhbmdlIG9yIHNlbGVjdC5cclxuXHRcdFx0XHRcdHZhciBmbGQgPSAkKGl0ZW1kYXRhKCdiYWNraW5nZmxkJykpLmhpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoZmxkLmF0dHIoJ2Rpc2FibGVkJykgfHwgZmxkLmF0dHIoJ3JlYWRvbmx5JykpIHtcclxuXHRcdFx0XHRcdFx0aXRlbWRhdGEoJ3JlYWRvbmx5JywgdHJ1ZSk7IC8vaHR0cDovL3JhdGVpdC5jb2RlcGxleC5jb20vZGlzY3Vzc2lvbnMvMzYyMDU1ICwgaWYgYSBiYWNraW5nIGZpZWxkIGlzIGRpc2FibGVkIG9yIHJlYWRvbmx5IGF0IGluc3RhbnRpYXRpb24sIG1ha2UgcmF0ZWl0IHJlYWRvbmx5LlxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChmbGRbMF0ubm9kZU5hbWUgPT0gJ0lOUFVUJykge1xyXG5cdFx0XHRcdFx0XHRpZiAoZmxkWzBdLnR5cGUgPT0gJ3JhbmdlJyB8fCBmbGRbMF0udHlwZSA9PSAndGV4dCcpIHsgLy9pbiBicm93c2VycyBub3Qgc3VwcG9ydCB0aGUgcmFuZ2UgdHlwZSwgaXQgZGVmYXVsdHMgdG8gdGV4dFxyXG5cclxuXHRcdFx0XHRcdFx0XHRpdGVtZGF0YSgnbWluJywgcGFyc2VJbnQoZmxkLmF0dHIoJ21pbicpKSB8fCBpdGVtZGF0YSgnbWluJykpOyAvL2lmIHdlIHdvdWxkIGhhdmUgZG9uZSBmbGRbMF0ubWluIGl0IHdvdWxkbid0IGhhdmUgd29ya2VkIGluIGJyb3dzZXJzIG5vdCBzdXBwb3J0aW5nIHRoZSByYW5nZSB0eXBlLlxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1kYXRhKCdtYXgnLCBwYXJzZUludChmbGQuYXR0cignbWF4JykpIHx8IGl0ZW1kYXRhKCdtYXgnKSk7XHJcblx0XHRcdFx0XHRcdFx0aXRlbWRhdGEoJ3N0ZXAnLCBwYXJzZUludChmbGQuYXR0cignc3RlcCcpKSB8fCBpdGVtZGF0YSgnc3RlcCcpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGZsZFswXS5ub2RlTmFtZSA9PSAnU0VMRUNUJyAmJiBmbGRbMF0ub3B0aW9ucy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdGl0ZW1kYXRhKCdtaW4nLCAoIWlzTmFOKGl0ZW1kYXRhKCdtaW4nKSkgPyBpdGVtZGF0YSgnbWluJykgOiBOdW1iZXIoZmxkWzBdLm9wdGlvbnNbMF0udmFsdWUpKSk7XHJcblx0XHRcdFx0XHRcdGl0ZW1kYXRhKCdtYXgnLCBOdW1iZXIoZmxkWzBdLm9wdGlvbnNbZmxkWzBdLmxlbmd0aCAtIDFdLnZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdGl0ZW1kYXRhKCdzdGVwJywgTnVtYmVyKGZsZFswXS5vcHRpb25zWzFdLnZhbHVlKSAtIE51bWJlcihmbGRbMF0ub3B0aW9uc1swXS52YWx1ZSkpO1xyXG5cdFx0XHRcdFx0XHQvL3NlZSBpZiB3ZSBoYXZlIGEgb3B0aW9uIHRoYXQgYXMgZXhwbGljaXR5IGJlZW4gc2VsZWN0ZWRcclxuXHRcdFx0XHRcdFx0dmFyIHNlbGVjdGVkT3B0aW9uID0gZmxkLmZpbmQoJ29wdGlvbltzZWxlY3RlZF0nKTtcclxuXHRcdFx0XHRcdFx0aWYgKHNlbGVjdGVkT3B0aW9uLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0aXRlbWRhdGEoJ3ZhbHVlJywgc2VsZWN0ZWRPcHRpb24udmFsKCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0Ly9pZiBpdCBpcyBub3QgYSBzZWxlY3QgYm94LCB3ZSBjYW4gZ2V0J3MgaXQncyB2YWx1ZSB1c2luZyB0aGUgdmFsIGZ1bmN0aW9uLlxyXG5cdFx0XHRcdFx0XHQvL0lmIGl0IGlzIGEgc2VsZWN0Ym94LCB3ZSBhbHdheXMgZ2V0IGEgdmFsdWUgKHRoZSBmaXJzdCBvbmUgb2YgdGhlIGxpc3QpLCBldmVuIGlmIGl0IHdhcyBub3QgZXhwbGljaXR5IHNldC5cclxuXHRcdFx0XHRcdFx0aXRlbWRhdGEoJ3ZhbHVlJywgZmxkLnZhbCgpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ3JlYXRlIHRoZSBuZWNlc3NhcnkgdGFncy4gRm9yIEFSSUEgcHVycG9zZXMgd2UgbmVlZCB0byBnaXZlIHRoZSBpdGVtcyBhbiBJRC4gU28gd2UgdXNlIGFuIGludGVybmFsIGluZGV4IHRvIGNyZWF0ZSB1bmlxdWUgaWRzXHJcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBpdGVtWzBdLm5vZGVOYW1lID09ICdESVYnID8gJ2RpdicgOiAnc3Bhbic7XHJcblx0XHRcdFx0aW5kZXgrKztcclxuXHRcdFx0XHR2YXIgaHRtbCA9ICc8YnV0dG9uIGlkPVwicmF0ZWl0LXJlc2V0LXt7aW5kZXh9fVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXJvbGU9XCJub25lXCIgY2xhc3M9XCJyYXRlaXQtcmVzZXRcIiBhcmlhLWxhYmVsPVwiJyArICQucmF0ZWl0LmFyaWEucmVzZXRMYWJlbCArICdcIiBhcmlhLWNvbnRyb2xzPVwicmF0ZWl0LXJhbmdlLXt7aW5kZXh9fVwiPjwvYnV0dG9uPjx7e2VsZW1lbnR9fSBpZD1cInJhdGVpdC1yYW5nZS17e2luZGV4fX1cIiBjbGFzcz1cInJhdGVpdC1yYW5nZVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJzbGlkZXJcIiBhcmlhLWxhYmVsPVwiJyArICQucmF0ZWl0LmFyaWEucmF0aW5nTGFiZWwgKyAnXCIgYXJpYS1vd25zPVwicmF0ZWl0LXJlc2V0LXt7aW5kZXh9fVwiIGFyaWEtdmFsdWVtaW49XCInICsgaXRlbWRhdGEoJ21pbicpICsgJ1wiIGFyaWEtdmFsdWVtYXg9XCInICsgaXRlbWRhdGEoJ21heCcpICsgJ1wiIGFyaWEtdmFsdWVub3c9XCInICsgaXRlbWRhdGEoJ3ZhbHVlJykgKyAnXCI+PHt7ZWxlbWVudH19IGNsYXNzPVwicmF0ZWl0LXNlbGVjdGVkXCIgc3R5bGU9XCJoZWlnaHQ6JyArIGl0ZW1kYXRhKCdzdGFyaGVpZ2h0JykgKyAncHhcIj48L3t7ZWxlbWVudH19Pjx7e2VsZW1lbnR9fSBjbGFzcz1cInJhdGVpdC1ob3ZlclwiIHN0eWxlPVwiaGVpZ2h0OicgKyBpdGVtZGF0YSgnc3RhcmhlaWdodCcpICsgJ3B4XCI+PC97e2VsZW1lbnR9fT48L3t7ZWxlbWVudH19Pic7XHJcblx0XHRcdFx0aXRlbS5hcHBlbmQoaHRtbC5yZXBsYWNlKC97e2luZGV4fX0vZ2ksIGluZGV4KS5yZXBsYWNlKC97e2VsZW1lbnR9fS9naSwgZWxlbWVudCkpO1xyXG5cclxuXHRcdFx0XHQvL2lmIHdlIGFyZSBpbiBSVEwgbW9kZSwgd2UgaGF2ZSB0byBjaGFuZ2UgdGhlIGZsb2F0IG9mIHRoZSBcInJlc2V0IGJ1dHRvblwiXHJcblx0XHRcdFx0aWYgKCFsdHIpIHtcclxuXHRcdFx0XHRcdGl0ZW0uZmluZCgnLnJhdGVpdC1yZXNldCcpLmNzcygnZmxvYXQnLCAncmlnaHQnKTtcclxuXHRcdFx0XHRcdGl0ZW0uZmluZCgnLnJhdGVpdC1zZWxlY3RlZCcpLmFkZENsYXNzKCdyYXRlaXQtc2VsZWN0ZWQtcnRsJyk7XHJcblx0XHRcdFx0XHRpdGVtLmZpbmQoJy5yYXRlaXQtaG92ZXInKS5hZGRDbGFzcygncmF0ZWl0LWhvdmVyLXJ0bCcpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbWRhdGEoJ2luaXQnLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0uZGF0YSgpKSkpOyAvL2NoZWFwIHdheSB0byBjcmVhdGUgYSBjbG9uZVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vcmVzaXplIHRoZSBoZWlnaHQgb2YgYWxsIGVsZW1lbnRzLFxyXG5cdFx0XHRpdGVtLmZpbmQoJy5yYXRlaXQtc2VsZWN0ZWQsIC5yYXRlaXQtaG92ZXInKS5oZWlnaHQoaXRlbWRhdGEoJ3N0YXJoZWlnaHQnKSk7XHJcblxyXG5cdFx0XHQvL3NldCB0aGUgcmFuZ2UgZWxlbWVudCB0byBmaXQgYWxsIHRoZSBzdGFycy5cclxuXHRcdFx0dmFyIHJhbmdlID0gaXRlbS5maW5kKCcucmF0ZWl0LXJhbmdlJyk7XHJcblx0XHRcdHJhbmdlLndpZHRoKGl0ZW1kYXRhKCdzdGFyd2lkdGgnKSAqIChpdGVtZGF0YSgnbWF4JykgLSBpdGVtZGF0YSgnbWluJykpKS5oZWlnaHQoaXRlbWRhdGEoJ3N0YXJoZWlnaHQnKSk7XHJcblxyXG5cclxuXHRcdFx0Ly9hZGQvcmVtb3ZlIHRoZSBwcmVzZXQgY2xhc3NcclxuXHRcdFx0dmFyIHByZXNldGNsYXNzID0gJ3JhdGVpdC1wcmVzZXQnICsgKChsdHIpID8gJycgOiAnLXJ0bCcpO1xyXG5cdFx0XHRpZiAoaXRlbWRhdGEoJ2lzcHJlc2V0JykpIHtcclxuXHRcdFx0XHRpdGVtLmZpbmQoJy5yYXRlaXQtc2VsZWN0ZWQnKS5hZGRDbGFzcyhwcmVzZXRjbGFzcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aXRlbS5maW5kKCcucmF0ZWl0LXNlbGVjdGVkJykucmVtb3ZlQ2xhc3MocHJlc2V0Y2xhc3MpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL3NldCB0aGUgdmFsdWUgaWYgd2UgaGF2ZSBpdC5cclxuXHRcdFx0aWYgKGl0ZW1kYXRhKCd2YWx1ZScpICE9IG51bGwpIHtcclxuXHRcdFx0XHR2YXIgc2NvcmUgPSAoaXRlbWRhdGEoJ3ZhbHVlJykgLSBpdGVtZGF0YSgnbWluJykpICogaXRlbWRhdGEoJ3N0YXJ3aWR0aCcpO1xyXG5cdFx0XHRcdGl0ZW0uZmluZCgnLnJhdGVpdC1zZWxlY3RlZCcpLndpZHRoKHNjb3JlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9zZXR1cCB0aGUgcmVzZXQgYnV0dG9uXHJcblx0XHRcdHZhciByZXNldGJ0biA9IGl0ZW0uZmluZCgnLnJhdGVpdC1yZXNldCcpO1xyXG5cdFx0XHRpZiAocmVzZXRidG4uZGF0YSgnd2lyZWQnKSAhPT0gdHJ1ZSkge1xyXG5cdFx0XHRcdHJlc2V0YnRuLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRyZXNldGJ0bi5ibHVyKCk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGV2ZW50ID0gJC5FdmVudCgnYmVmb3JlcmVzZXQnKTtcclxuXHRcdFx0XHRcdGl0ZW0udHJpZ2dlcihldmVudCk7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGl0ZW0ucmF0ZWl0KCd2YWx1ZScsIG51bGwpO1xyXG5cdFx0XHRcdFx0aXRlbS50cmlnZ2VyKCdyZXNldCcpO1xyXG5cdFx0XHRcdH0pLmRhdGEoJ3dpcmVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL3RoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgc2NvcmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIG1vdXNlLlxyXG5cdFx0XHR2YXIgY2FsY1Jhd1Njb3JlID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHBhZ2VYID0gKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQucGFnZVg7XHJcblxyXG5cdFx0XHRcdHZhciBvZmZzZXR4ID0gcGFnZVggLSAkKGVsZW1lbnQpLm9mZnNldCgpLmxlZnQ7XHJcblx0XHRcdFx0aWYgKCFsdHIpIHsgb2Zmc2V0eCA9IHJhbmdlLndpZHRoKCkgLSBvZmZzZXR4IH07XHJcblx0XHRcdFx0aWYgKG9mZnNldHggPiByYW5nZS53aWR0aCgpKSB7IG9mZnNldHggPSByYW5nZS53aWR0aCgpOyB9XHJcblx0XHRcdFx0aWYgKG9mZnNldHggPCAwKSB7IG9mZnNldHggPSAwOyB9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzY29yZSA9IE1hdGguY2VpbChvZmZzZXR4IC8gaXRlbWRhdGEoJ3N0YXJ3aWR0aCcpICogKDEgLyBpdGVtZGF0YSgnc3RlcCcpKSk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHQvL3NldHMgdGhlIGhvdmVyIGVsZW1lbnQgYmFzZWQgb24gdGhlIHNjb3JlLlxyXG5cdFx0XHR2YXIgc2V0SG92ZXIgPSBmdW5jdGlvbiAoc2NvcmUpIHtcclxuXHRcdFx0XHR2YXIgdyA9IHNjb3JlICogaXRlbWRhdGEoJ3N0YXJ3aWR0aCcpICogaXRlbWRhdGEoJ3N0ZXAnKTtcclxuXHRcdFx0XHR2YXIgaCA9IHJhbmdlLmZpbmQoJy5yYXRlaXQtaG92ZXInKTtcclxuXHRcdFx0XHRpZiAoaC5kYXRhKCd3aWR0aCcpICE9IHcpIHtcclxuXHRcdFx0XHRcdHJhbmdlLmZpbmQoJy5yYXRlaXQtc2VsZWN0ZWQnKS5oaWRlKCk7XHJcblx0XHRcdFx0XHRoLndpZHRoKHcpLnNob3coKS5kYXRhKCd3aWR0aCcsIHcpO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBbKHNjb3JlICogaXRlbWRhdGEoJ3N0ZXAnKSkgKyBpdGVtZGF0YSgnbWluJyldO1xyXG5cdFx0XHRcdFx0aXRlbS50cmlnZ2VyKCdob3ZlcicsIGRhdGEpLnRyaWdnZXIoJ292ZXInLCBkYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgc2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIGV2ZW50ID0gJC5FdmVudCgnYmVmb3JlcmF0ZWQnKTtcclxuXHRcdFx0XHRpdGVtLnRyaWdnZXIoZXZlbnQsIFt2YWx1ZV0pO1xyXG5cdFx0XHRcdGlmIChldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbWRhdGEoJ3ZhbHVlJywgdmFsdWUpO1xyXG5cdFx0XHRcdGlmIChpdGVtZGF0YSgnYmFja2luZ2ZsZCcpKSB7XHJcblx0XHRcdFx0XHQkKGl0ZW1kYXRhKCdiYWNraW5nZmxkJykpLnZhbCh2YWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChpdGVtZGF0YSgnaXNwcmVzZXQnKSkgeyAvL2lmIGl0IHdhcyBhIHByZXNldCB2YWx1ZSwgdW5zZXQgdGhhdC5cclxuXHRcdFx0XHRcdHJhbmdlLmZpbmQoJy5yYXRlaXQtc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcyhwcmVzZXRjbGFzcyk7XHJcblx0XHRcdFx0XHRpdGVtZGF0YSgnaXNwcmVzZXQnLCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJhbmdlLmZpbmQoJy5yYXRlaXQtaG92ZXInKS5oaWRlKCk7XHJcblx0XHRcdFx0cmFuZ2UuZmluZCgnLnJhdGVpdC1zZWxlY3RlZCcpLndpZHRoKHZhbHVlICogaXRlbWRhdGEoJ3N0YXJ3aWR0aCcpIC0gKGl0ZW1kYXRhKCdtaW4nKSAqIGl0ZW1kYXRhKCdzdGFyd2lkdGgnKSkpLnNob3coKTtcclxuXHRcdFx0XHRpdGVtLnRyaWdnZXIoJ2hvdmVyJywgW251bGxdKS50cmlnZ2VyKCdvdmVyJywgW251bGxdKS50cmlnZ2VyKCdyYXRlZCcsIFt2YWx1ZV0pO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKCFpdGVtZGF0YSgncmVhZG9ubHknKSkge1xyXG5cdFx0XHRcdC8vaWYgd2UgYXJlIG5vdCByZWFkIG9ubHksIGFkZCBhbGwgdGhlIGV2ZW50c1xyXG5cclxuXHRcdFx0XHQvL2lmIHdlIGhhdmUgYSByZXNldCBidXR0b24sIHNldCB0aGUgZXZlbnQgaGFuZGxlci5cclxuXHRcdFx0XHRpZiAoIWl0ZW1kYXRhKCdyZXNldGFibGUnKSkge1xyXG5cdFx0XHRcdFx0cmVzZXRidG4uaGlkZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly93aGVuIHRoZSBtb3VzZSBnb2VzIG92ZXIgdGhlIHJhbmdlIGVsZW1lbnQsIHdlIHNldCB0aGUgXCJob3ZlclwiIHN0YXJzLlxyXG5cdFx0XHRcdGlmICghaXRlbWRhdGEoJ3dpcmVkJykpIHtcclxuXHRcdFx0XHRcdHJhbmdlLmJpbmQoJ3RvdWNobW92ZSB0b3VjaGVuZCcsIHRvdWNoSGFuZGxlcik7IC8vYmluZCB0b3VjaCBldmVudHNcclxuXHRcdFx0XHRcdHJhbmdlLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2NvcmUgPSBjYWxjUmF3U2NvcmUodGhpcywgZSk7XHJcblx0XHRcdFx0XHRcdHNldEhvdmVyKHNjb3JlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly93aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHJhbmdlLCB3ZSBoYXZlIHRvIGhpZGUgdGhlIGhvdmVyIHN0YXJzLCBhbmQgc2hvdyB0aGUgY3VycmVudCB2YWx1ZS5cclxuXHRcdFx0XHRcdHJhbmdlLm1vdXNlbGVhdmUoZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdFx0cmFuZ2UuZmluZCgnLnJhdGVpdC1ob3ZlcicpLmhpZGUoKS53aWR0aCgwKS5kYXRhKCd3aWR0aCcsICcnKTtcclxuXHRcdFx0XHRcdFx0aXRlbS50cmlnZ2VyKCdob3ZlcicsIFtudWxsXSkudHJpZ2dlcignb3ZlcicsIFtudWxsXSk7XHJcblx0XHRcdFx0XHRcdHJhbmdlLmZpbmQoJy5yYXRlaXQtc2VsZWN0ZWQnKS5zaG93KCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdC8vd2hlbiB3ZSBjbGljayBvbiB0aGUgcmFuZ2UsIHdlIGhhdmUgdG8gc2V0IHRoZSB2YWx1ZSwgaGlkZSB0aGUgaG92ZXIuXHJcblx0XHRcdFx0XHRyYW5nZS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzY29yZSA9IGNhbGNSYXdTY29yZSh0aGlzLCBlKTtcclxuXHRcdFx0XHRcdFx0dmFyIHZhbHVlID0gKHNjb3JlICogaXRlbWRhdGEoJ3N0ZXAnKSkgKyBpdGVtZGF0YSgnbWluJyk7XHJcblx0XHRcdFx0XHRcdHNldFNlbGVjdGlvbih2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdHJhbmdlLmJsdXIoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdC8vc3VwcG9ydCBrZXkgbmF2XHJcblx0XHRcdFx0XHRyYW5nZS5rZXl1cChmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAzOCB8fCBlLndoaWNoID09IChsdHIgPyAzOSA6IDM3KSkge1xyXG5cdFx0XHRcdFx0XHRcdHNldFNlbGVjdGlvbihNYXRoLm1pbihpdGVtZGF0YSgndmFsdWUnKSArIGl0ZW1kYXRhKCdzdGVwJyksIGl0ZW1kYXRhKCdtYXgnKSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDQwIHx8IGUud2hpY2ggPT0gKGx0ciA/IDM3IDogMzkpKSB7XHJcblx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0aW9uKE1hdGgubWF4KGl0ZW1kYXRhKCd2YWx1ZScpIC0gaXRlbWRhdGEoJ3N0ZXAnKSwgaXRlbWRhdGEoJ21pbicpKSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdGl0ZW1kYXRhKCd3aXJlZCcsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoaXRlbWRhdGEoJ3Jlc2V0YWJsZScpKSB7XHJcblx0XHRcdFx0XHRyZXNldGJ0bi5zaG93KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHJlc2V0YnRuLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmFuZ2UuYXR0cignYXJpYS1yZWFkb25seScsIGl0ZW1kYXRhKCdyZWFkb25seScpKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vdG91Y2ggY29udmVydGVyIGh0dHA6Ly9yb3NzLnBvc3Rlcm91cy5jb20vMjAwOC8wOC8xOS9pcGhvbmUtdG91Y2gtZXZlbnRzLWluLWphdmFzY3JpcHQvXHJcblx0ZnVuY3Rpb24gdG91Y2hIYW5kbGVyKGV2ZW50KSB7XHJcblxyXG5cdFx0dmFyIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLFxyXG5cdFx0XHRmaXJzdCA9IHRvdWNoZXNbMF0sXHJcblx0XHRcdHR5cGUgPSBcIlwiO1xyXG5cdFx0c3dpdGNoIChldmVudC50eXBlKSB7XHJcblx0XHRcdGNhc2UgXCJ0b3VjaG1vdmVcIjogdHlwZSA9IFwibW91c2Vtb3ZlXCI7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwidG91Y2hlbmRcIjogdHlwZSA9IFwibW91c2V1cFwiOyBicmVhaztcclxuXHRcdFx0ZGVmYXVsdDogcmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBzaW11bGF0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKTtcclxuXHRcdHNpbXVsYXRlZEV2ZW50LmluaXRNb3VzZUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMSxcclxuXHRcdFx0Zmlyc3Quc2NyZWVuWCwgZmlyc3Quc2NyZWVuWSxcclxuXHRcdFx0Zmlyc3QuY2xpZW50WCwgZmlyc3QuY2xpZW50WSwgZmFsc2UsXHJcblx0XHRcdGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAvKmxlZnQqLywgbnVsbCk7XHJcblxyXG5cdFx0Zmlyc3QudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9O1xyXG5cclxuXHQvL3NvbWUgZGVmYXVsdCB2YWx1ZXMuXHJcblx0JC5mbi5yYXRlaXQuZGVmYXVsdHMgPSB7IG1pbjogMCwgbWF4OiA1LCBzdGVwOiAwLjUsIHN0YXJ3aWR0aDogMTYsIHN0YXJoZWlnaHQ6IDE2LCByZWFkb25seTogZmFsc2UsIHJlc2V0YWJsZTogdHJ1ZSwgaXNwcmVzZXQ6IGZhbHNlIH07XHJcblxyXG5cdC8vaW52b2tlIGl0IG9uIGFsbCAucmF0ZWl0IGVsZW1lbnRzLiBUaGlzIGNvdWxkIGJlIHJlbW92ZWQgaWYgbm90IHdhbnRlZC5cclxuXHQkKGZ1bmN0aW9uICgpIHsgJCgnZGl2LnJhdGVpdCwgc3Bhbi5yYXRlaXQnKS5yYXRlaXQoKTsgfSk7XHJcblxyXG59KShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvdmVuZG9yL3JhdGVpdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=