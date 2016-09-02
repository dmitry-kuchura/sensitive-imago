jQuery(document).ready(function ($) {
    $('.moreNews').on('click', function () {
        var container = $('.news_list');

        var lang = $('.lang').val();
        var page = parseInt($('.pageNews').val());

        $.ajax({
            url: '/ajax/getMoreNews',
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
                        $('.pageNews').val(page + 1);
                        container.append(data.html);
                        if (data.more < 4) {
                            $('.moreNews').hide();
                        }
                    } else {
                        $('.moreNews').hide();
                    }
                }
            }
        });
    });

    $('.moreProjects').on('click', function () {
        var container = $('.works_list');

        var lang = $('.lang').val();
        var page = parseInt($('.pageProjects').val());

        $.ajax({
            url: '/ajax/getMoreProjects',
            type: 'POST',
            dataType: 'JSON',
            data: {
                page: page,
                lang: lang
            },
            success: function (data) {
                if (data.success == true) {
                    if (data.html.length) {
                        $('.pageProjects').val(page + 1);
                        container.append(data.html);
                        if (data.more < 3) {
                            $('.moreProjects').hide();
                        }
                    } else {
                        $('.moreProjects').hide();
                    }
                }
            }
        });
    });
});