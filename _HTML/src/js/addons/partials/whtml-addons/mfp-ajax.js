/*>>wHTML.mfpInline*/
	var _mfpInlineBaseConfig = {
		type: 'inline',
		closeBtnInside: true,
		removalDelay: 300,
		mainClass: 'zoom-in'
	};

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
