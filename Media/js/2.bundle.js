webpackJsonp([2],{

/***/ 10:
/***/ function(module, exports) {

	'use strict';

	module.exports = function ($multiLevelMenu) {
		var LVL = 1;

		function addToggleButton() {
			$multiLevelMenu.find('.has-subMenu').each(function (i, el) {
				var a = $(el).children('a'),
				    $toggle = $('<div class="trigger"></div>').insertAfter(a);
				$toggle.on('click', function () {
					var $li = $toggle.parent('li');
					$li.toggleClass('is-open');
					$li.children('ul').slideToggle();
				});
			});
		}
		addToggleButton();
		checkLevel($multiLevelMenu);
		function checkLevel($multiLevelMenu) {

			var $activeItem = $multiLevelMenu.children('.is-active');
			if ($activeItem.length) {
				$activeItem.addClass('is-open');
				$activeItem.children('ul').slideDown();
			} else {
				$multiLevelMenu.children('.has-subMenu').each(function (i, el) {
					var $item = $(el);
					if ($item.find('.is-active').length) {
						$item.addClass('is-open');
						var $level = $item.children('ul').slideDown();
						checkLevel($level);
						return false;
					}
				});
			}
		}
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL21vZHVsZXMvYXNpZGVNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRtdWx0aUxldmVsTWVudSkge1xyXG5cdGxldCBMVkwgPSAxO1xyXG5cclxuXHRmdW5jdGlvbiBhZGRUb2dnbGVCdXR0b24oKXtcclxuXHRcdCRtdWx0aUxldmVsTWVudS5maW5kKCcuaGFzLXN1Yk1lbnUnKS5lYWNoKGZ1bmN0aW9uKGksZWwpe1xyXG5cdFx0XHR2YXIgYSA9ICQoZWwpLmNoaWxkcmVuKCdhJyksXHJcblx0XHRcdCR0b2dnbGUgPSAkKCc8ZGl2IGNsYXNzPVwidHJpZ2dlclwiPjwvZGl2PicpLmluc2VydEFmdGVyKGEpO1xyXG5cdFx0XHQkdG9nZ2xlLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgJGxpID0gJHRvZ2dsZS5wYXJlbnQoJ2xpJyk7XHJcblx0XHRcdFx0JGxpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0JGxpLmNoaWxkcmVuKCd1bCcpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGFkZFRvZ2dsZUJ1dHRvbigpO1xyXG5cdGNoZWNrTGV2ZWwoJG11bHRpTGV2ZWxNZW51KTtcclxuXHRmdW5jdGlvbiBjaGVja0xldmVsKCRtdWx0aUxldmVsTWVudSkge1xyXG5cclxuXHRcdGxldCAkYWN0aXZlSXRlbSA9ICRtdWx0aUxldmVsTWVudS5jaGlsZHJlbignLmlzLWFjdGl2ZScpO1xyXG5cdFx0aWYgKCRhY3RpdmVJdGVtLmxlbmd0aCkge1xyXG5cdFx0XHQkYWN0aXZlSXRlbS5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG5cdFx0XHQkYWN0aXZlSXRlbS5jaGlsZHJlbigndWwnKS5zbGlkZURvd24oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRtdWx0aUxldmVsTWVudS5jaGlsZHJlbignLmhhcy1zdWJNZW51JykuZWFjaChmdW5jdGlvbihpLGVsKXtcclxuXHRcdFx0XHRsZXQgJGl0ZW0gPSAkKGVsKTtcclxuXHRcdFx0XHRpZigkaXRlbS5maW5kKCcuaXMtYWN0aXZlJykubGVuZ3RoKXtcclxuXHRcdFx0XHRcdCRpdGVtLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcblx0XHRcdFx0XHRsZXQgJGxldmVsID0gICRpdGVtLmNoaWxkcmVuKCd1bCcpLnNsaWRlRG93bigpO1xyXG5cdFx0XHRcdFx0Y2hlY2tMZXZlbCgkbGV2ZWwpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qcy9tb2R1bGVzL2FzaWRlTWVudS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=