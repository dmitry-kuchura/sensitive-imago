jQuery(document).ready(function ($) {
    $('.pager_ajax').on('click', function () {
        var current = $(this);
        var pager = current.data('pager');
        var container;
        if (pager == 'reviews') {
            container = $('#reviews.content');
        } else {
            container = $('#video.content');
        }
        loaderReviews(container, current, pager);
    });

    function loaderReviews(container, current, pager) {
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
            var url;
            if (pager == 'reviews') {
                url = '/ajax/getMoreReviews';
            } else {
                url = '/ajax/getMoreVideoReviews';
            }

            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'JSON',
                data: {
                    page: page,
                    lang: lang
                },
                success: function (data) {
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
        if (current.data('page') != 'next' && current.data('page') != 'prev') {
            current.addClass('is-active').siblings().removeClass('is-active');
        }
    };

    $.wNoty.configGlobal({
        theme: 'default',
        position: 'bottom right',
        stack: 7
    });
    var generate = function( message, type, time ) {
        if(type == 'success') {
            type = 'succes';
        }
        if(time && time != 'undefined') {
            $.wNoty.alert({
                msg: message,
                status: type,
                livetime: time
            });
        } else {
            $.wNoty.alert({
                msg: message,
                status: type,
                immortal: true
            });
        }
    };
    var mark = '<div id="cssload-loader"><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div></div>';
    var preloader = function() {
        if($('.wpreloader_wraper').length && $('.wpreloader_wraper').is(':visible')) {
            wPreloader.hide();
        } else {
            wPreloader.show(false, {
                block: true,
                markup: mark
            });
        }
    };

    wHTML.formOnSubmit = function ($form) {
        var data = new FormData();
        var name;
        var val;
        var type;
        $form.find('input,textarea,select').each(function () {
            name = $(this).attr('data-name');
            val = $(this).val();
            type = $(this).attr('type');
            if ((type != 'checkbox' && name) || (type == 'checkbox' && $(this).prop('checked') && name)) {
                if (type == 'file') {
                    data.append(name, $(this)[0].files[0]);
                } else if (type == 'radio' && $(this).prop('checked')) {
                    data.append(name, val);
                } else if (type != 'radio') {
                    data.append(name, val);
                }
            }
        });
        var request = new XMLHttpRequest();
        request.open("POST", '/form/' + $form.data('ajax'));
        request.onreadystatechange = function () {
            var status;
            var resp;
            if (request.readyState == 4) {
                status = request.status;
                resp = request.response;
                resp = jQuery.parseJSON(resp);
                if (status == 200) {
                    if (resp.form == 'order') {
                        $form.closest('.stepWrapp').addClass('filled');
                    }

                    if (resp.success) {
                        if (!resp.noclear) {
                            $form.find('input').each(function () {
                                if ($(this).attr('type') != 'hidden' && $(this).attr('type') != 'checkbox') {
                                    $(this).val('');
                                }
                            });
                            $form.find('textarea').val('');
                        }
                        if (resp.clear) {
                            for (var i = 0; i < resp.clear.length; i++) {
                                $('input[name="' + resp.clear[i] + '"]').val('');
                                $('textarea[name="' + resp.clear[i] + '"]').val('');
                            }
                        }
                        if (resp.insert && resp.insert.selector && resp.insert.html) {
                            $(resp.insert.selector).html(resp.insert.html);
                        }
                        if (resp.response) {
                            generate(resp.response, 'success', 3500);
                            $.magnificPopup.close();
                        }
                    } else {
                        if (resp.response) {
                            generate(resp.response, 'warning', 3500);
                        }
                    }
                    if (resp.redirect) {
                        if (window.location.href == resp.redirect) {
                            window.location.reload();
                        } else {
                            window.location.href = resp.redirect;
                        }
                    }
                } else {
                    alert('Something went wrong.');
                }
            }
            if ($form.data('loader')) {
                loader($form.data('loader'), 0);
            }
        };
        request.send(data);
        return false;
    }

});