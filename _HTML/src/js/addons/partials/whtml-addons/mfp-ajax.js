/*>>wHTML.mfpAjax*/
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
						//wHTML.validation();
					}
				}
			});
		};
/*>>wHTML.mfpAjax*/
