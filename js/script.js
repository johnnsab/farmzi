$(document).ready(function(){
    $('.img-slider').slick();
    var swiper = new Swiper(".clients__swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,   
    });
});