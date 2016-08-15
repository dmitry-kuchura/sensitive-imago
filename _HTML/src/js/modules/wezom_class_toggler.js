/**
 * Class toggler on parent
 * @param {string} [options.activeClass='is-active']
 * @param {string|jquery} [options.targetSelector='.js-dropdown-toggle']
 * @param {boolean} [options.toggleOnBlur=false]
 * @param {boolean} [options.debug=false] - Enables returnes
 */
$.fn.wzmClassToggle = function (options) {

	options = options || {};

	var
		activeClassName = options.activeClass || 'is-active',
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
			$(this).attr('data-toggle','initialized');
			$(this).on('click', toggleSelector, function (e) {
				e.preventDefault();
				target = e.delegateTarget;
				if (debug) {
					console.log("click:target:", target)
				}
				if  (toggleOnBlur) {
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
			$(this).data('wzmClassToggle', true)
		}
	});
};
