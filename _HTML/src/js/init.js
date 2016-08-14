import wHTML from 'wHTML';

jQuery(document).ready(function ($) {
    svg4everybody({});

    let $multiLevelMenu = $('.js-multiLevelMenu');
    if ($multiLevelMenu.length){
        require.ensure([],function(){
            let initAsideMenu = require('asideMenu');
            initAsideMenu($multiLevelMenu);
        })

    }
    let $magnificSelectors  = $('.mfi-gallery');
    if($magnificSelectors.length){
        require.ensure([],function () {
            console.log('before');
            require('magnific-popup');
            console.log('after');
            $('.mfi-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                }

            });
        })

    }
});
