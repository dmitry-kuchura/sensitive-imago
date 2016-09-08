jQuery(document).ready(function ($) {
    $('.pager_ajax').on('click', function () {
        var current = $(this);
        var container = $('#video.content');
        loaderReviews(container, current);
    });


    function loaderReviews(container, current) {
        if (current.hasClass('is-active')) {
            return false;
        }

        var paginator = current.parent();
        var active = paginator.children('.is-active');
        var page = parseInt(current.data('page'));

        if (isNaN(page)) {
            if (current.data('page') == 'next') {
                page = active.data('page') + 1;
                current = active.next();
            } else if (current.data('page') == 'prev') {
                page = active.data('page') - 1;
                current = active.prev();
            }
        }

        var currentReviews = container.children('[data-page="' + page + '"]');

        if (currentReviews.length) {
            container.children().slideUp();
            currentReviews.slideDown();
        } else {
            var lang = $('.lang').val();
            $.ajax({
                url: '/ajax/getMoreVideoReviews',
                type: 'POST',
                dataType: 'JSON',
                data: {
                    page: page,
                    lang: lang
                },
                success: function (data) {
                    console.log(data.html);
                    if (data.success == true) {
                        if (data.html.length) {
                            container.children().slideUp();
                            var markup = $(data.html);
                            markup.hide().appendTo(container).slideDown();

                        }
                    }
                }
            });
        }
        current.addClass('is-active').siblings().removeClass('is-active');
    }
});