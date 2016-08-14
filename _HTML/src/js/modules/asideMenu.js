module.exports = function ($multiLevelMenu) {
    function toggleMenuLevel(menuItem) {
        let $menuItem = $(menuItem);
        if ($menuItem.hasClass('has-subMenu')) {
            $menuItem
                .addClass('is-open')
                .children('ul').slideDown();
        }
    }

    $multiLevelMenu.find('.is-active').each(function (i, el) {
        toggleMenuLevel(el)
    });
    $multiLevelMenu.on('click', 'a', function (e) {
        toggleMenuLevel(this)
    });
}
