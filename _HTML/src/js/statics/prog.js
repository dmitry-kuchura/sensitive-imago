(function(window, $) {
	wHTML.formOnSubmit = function($form) {
		console.log('prog.js');
		var formData = new FormData();
		$form.find('input,textarea,select').each(function(index, element){
			var $element = $(element);
			var elementName = $element.data('name');
			console.log($element);
			if (elementName !== undefined) {
				var elementType = element.type;
				var elementValue = element.value;
				var isChecked = $element.prop('checked');
				var isCheckbox = elementType == 'checkbox';
				var isRadio = elementType == 'radio';
				var isFile = elementType == 'file';
				if (isCheckbox && isChecked || !isCheckbox) {
					if(isFile) {
						formData.append(elementName, element.files[0]);
					} else if(isRadio && isChecked) {
						formData.append(elementName, elementValue);
					} else if(!isRadio) {
						formData.append(elementName, elementValue);
					}
				}
			}
		});
		wHTML.formAfterSubmit($form);
		return false;



		var request = new XMLHttpRequest();
		request.open("POST", '/form/' + formJQ.data('ajax'));
		request.onreadystatechange = function() {
			var status;
			var resp;
			if (request.readyState == 4) {
				status = request.status;
				resp = request.response;
				resp = jQuery.parseJSON(resp);
				if (status == 200) {
					if( resp.success ) {
						if (!resp.noclear) {
							formJQ.validReset();
						}
						if (resp.clear) {
							for(var i = 0; i < resp.clear.length; i++) {
								$('input[name="' + resp.clear[i] + '"]').val('');
								$('textarea[name="' + resp.clear[i] + '"]').val('');
							}
						}
						if (resp.insert && resp.insert.selector && resp.insert.html) {
							$(resp.insert.selector).html(resp.insert.html);
						}
						if ( resp.response ) {
							generate(resp.response, 'success', 3500);
						}
					} else {
						if ( resp.response ) {
							generate(resp.response, 'warning', 3500);
						}
					}
					if( resp.redirect ) {
						if(window.location.href == resp.redirect) {
							window.location.reload();
						} else {
							window.location.href = resp.redirect;
						}
					}
				} else {
					alert('Something went wrong,\nbut HTML fine ;)');
				}
			}
		};
		request.send(data);
	};
})(window, jQuery);
