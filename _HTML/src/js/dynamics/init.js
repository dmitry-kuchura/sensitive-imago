jQuery(document).ready(function($) {
	console.log($('html').attr('class').split(' ').length);

	if (Modernizr.chrome) {
	  // supported
	} else {
	  // not-supported
	}

});
