$(document).ready(function(){
    $('.img-slider').slick({
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    var swiper = new Swiper(".clients__swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,   
    });
});