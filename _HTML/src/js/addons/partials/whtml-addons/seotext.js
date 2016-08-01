/*>>wHTML.seoText*/

	var _seoTextTimer = null;
	var _seoTextDelay = 10;
	var $seoText;
	var $seoIframe;
	var $seoClone;

	/**
	 * Создаем iframe
	 * @memberof 	wHTML
	 * @param 		{Element}		$seoText - элемент сео текста
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
/*>>wHTML.seoText*/
