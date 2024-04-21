$(function () {
    // $('.header__btn').on('click', function() {
    //     $('.rigthside-menu').removeClass('rigthside-menu--close');
    // })

    // $('.rigthside-menu--close').on('click', function() {
    //     $('.rigthside-menu').addClass('rigthside-menu--close');
    // })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        items: 10,
        dots: true,
        arrows: false,
        responsive: [

            {
              breakpoint: 1360,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
        ]
    });
    $('.article-slider__box').slick({
        arrows: false,
    });



    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        },
    });
});

