//slide page contact
$('.owl-banner-contact').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
})

$('.service-slide').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
})

$('.list__hotel-slide').owlCarousel({
    items: 3,
    margin: 20,
    loop: false,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
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