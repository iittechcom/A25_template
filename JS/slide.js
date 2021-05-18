$('.owl-banner').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    navText: ["<img src='Image/left.png'>", "<img src='Image/right.png'>"],
})
$('.owl-review').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    navText: ["<i class ='fa fa-angle-left'> </i> ", "<i class='fa fa-angle-right'></i>"],
})
$('.gallery__body').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ["<i class ='fa fa-angle-left'> </i> ", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$('.owl-review').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    navText: ["<i class ='fa fa-angle-left'> </i> ", "<i class='fa fa-angle-right'></i>"],
})

$('.hotels-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: ["<i class ='fa fa-angle-left'> </i> ", "<i class='fa fa-angle-right'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-list-hotel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: ["<i class ='fa fa-angle-left'> </i> ", "<i class='fa fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.owl-detail-rooms').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    dots: false,
    margin: 10,
    callbacks: true,
    autoplay: true,
    nav: true,
    navText: [
        "&#8249;",
        "&#x203A;",
    ],
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});



/* ----- detail-hotel-page / slider-mobile ------*/
$('.slider-mobile').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    dots: false,
    items: 1,
});


/* detail hotel  */
$('.hotel-gallery-right').owlCarousel({
    items: 1,
    loop: true,

    autoplay: true,

    nav: false,
    dots: false,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'hotel-gallery-bottom'
});

$('.hotel-gallery-bottom').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: ['<span class="fas fa-chevron-left fa-2x"></span>', '<span class="fas fa-chevron-right fa-2x"></span>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }

    })
    // detail hotel modal
$('.hotel__list-img').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
    dots: false,
    items: 1,
});