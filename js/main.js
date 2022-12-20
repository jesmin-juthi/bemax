$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});
