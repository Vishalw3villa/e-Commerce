
$(".hero_sub1_carousel").owlCarousel({
    loop: true,
    margin: 10,
    touchDrag: false,
    touchDragThreshold: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        992: {
            items: 1,
        }
    }
})


$(".about1_sub2_sub2").owlCarousel({
    loop: true,
    margin: 20,
    touchDrag: false,
    touchDragThreshold: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        },
        1440: {
            items: 5,
        }
    }
})



function aboutThreeCrowsel(){$(".about3_sub2_sub2").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        992: {
            items: 2,
        },
        1272: {
            items: 4,
        }
    }
})}


$("#shop").owlCarousel({
    loop: true,
    margin: 10,
    touchDrag: false,
    touchDragThreshold: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,

        },
        600: {
            items: 4,

        },
        992: {
            items: 6,
        },
        1272: {
            items: 9,
        }
    }
})


$("#about_6_card").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: false,
    touchDragThreshold: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        992: {
            items: 2,
        },
        1272: {
            items: 3,
        },
    }
})


$("#about_7_carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: false,
    touchDragThreshold: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        992: {
            items: 2,
        },
        1272: {
            items: 3,
        }
    }
})

$(".about8_sub2").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    touchDrag: false,
    touchDragThreshold: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        992: {
            items: 3,
        },
        1272: {
            items: 4,
        },
    }
})

function aboutTwoCrowsel() {
    $(".about2_sub2_sub2").owlCarousel({
        loop: true,
        nav: false,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            992: {
                items: 3,
            },
            1272: {
                items: 3,
            },
            1500: {
                items: 4
            }
        }
    })
}

export {aboutTwoCrowsel, aboutThreeCrowsel}