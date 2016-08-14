import wHTML from 'wHTML';
jQuery(document).ready(function ($) {
    svg4everybody({});

	/* Подключение скрипта левого меню */
    let $multiLevelMenu = $('.js-multiLevelMenu');
    if ($multiLevelMenu.length){
        require.ensure([],function(){
            let initAsideMenu = require('asideMenu');
            initAsideMenu($multiLevelMenu);
        })
    }
    /* Подключение магнифика при необходимости галлереи*/
    let $magnificSelectors  = $('.mfi-gallery').add('.videoLink');
    if($magnificSelectors.length){
        require.ensure([],function () {
            require('magnific-popup');
            $('.mfi-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
			$('a.videoLink').magnificPopup({
				type: 'iframe'
			});
		})
    }
});
