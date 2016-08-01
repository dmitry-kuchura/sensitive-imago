/*>>wHTML.mfpInline*/
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
/*>>wHTML.mfpInlinemfpInline*/
