
$(document).ready(function () {

    // ---------------------------------------------------------------
    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $(".animation").each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr("data-animation");
            let delay = $(this).attr("data-delay");

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css("animation-delay", delay);
            }
        });
    }

    $(window).scroll(function () {
        animation();
    });

    animation();
    // ---------------------------------------------------------------

    if($('.owl-carousel').length>0) {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true
        });
    }
    // ---------------------------------------------------------------
    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlegth: 20
                }
            },
            messages: {
                name: {
                    required: 'Neophodno polje',
                    minlength: 'Najmanje 3 karaktera'
                },
                subject: {
                    required: 'Neophodno polje',
                    minlength: 'Najmanje 4 karaktera'
                },
                email: {
                    required: 'Neophodno polje',
                    email: 'Unesite validan email'
                },
                message: {
                    required: 'Neophodno polje',
                    minlegth: 'Najmanje 20 karaktera'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }
        });
    }
    // ---------------------------------------------------------------

});

