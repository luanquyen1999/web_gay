// Main
console.log('FullStack Vietnam!')

// slide show
$('.home_slide_khoang .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    // nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.home_cop .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    dots: false,
    autoplayTimeout: 2000,
    items: 1,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});