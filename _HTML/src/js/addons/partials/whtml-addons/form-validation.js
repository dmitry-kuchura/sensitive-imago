/*>>wHTML.formValidation*/
	/**
	 * Инициализация плагина `jquery-validate`
	 *
	 * @sourcecode
	 * @tutorial 	workwith-jquery-validate
	 * @fires 		wHTML#formOnSubmit
	 *
	 * @param 		{string} 		[selector='.js-mfp-ajax'] пользовательский css селектор для поиска и инита
	 * @return 		{undefined}
	 */
		wHTML.prototype.formValidation = function(selector) {
			selector = selector || '.js-form';
			$(selector).each(function(index, el) {
				var $form = $(el);
				var validator = $form.data('validator');
				console.log(validator);
				if (typeof validator === 'undefined') {

					if ($form.is('form')) {
						$form.on('submit', function(event) {
							return false;
						});
					}

					$form.validate({
						showErrors: function(errorMap, errorList) {
							if (errorList.length) {
								var firstError = errorList.shift();
								var newErrorList = [];
								newErrorList.push(firstError);
								this.errorList = newErrorList;
							}
							this.defaultShowErrors();
						},
						invalidHandler: function(form, validator) {
							$(this)
								.addClass('no_valid')
								.data('validator').focusInvalid();
						},
						submitHandler: function(form) {
							var $currentForm = $(form);
							$currentForm.removeClass('no_valid').addClass('success');
							_self.formOnSubmit($currentForm);
						}
					});

	                if ($form.is('div')) {

		                $form.on('click', '.js-form-submit', function(event) {
		                    $form.submit();
		                });

		                $form.on('change', '.js-input-file', function(event) {
		                    $form.formGetFileValues(this);
		                });

		                $form.on('click', '.js-form-reset', function(event) {
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
		wHTML.prototype.formAfterSubmit = function($form) {};

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
		wHTML.prototype.formOnSubmit = function($form) {
			console.warn('HTML => Форма отправлена');
			_self.formAfterSubmit($form);
		};
/*>>wHTML.formValidation*/
