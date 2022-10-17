$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="carousel-prev"><img src="icons/right.svg"></button>',
        nextArrow: '<button type="button" class="carousel-next"><img src="icons/right.svg"></button>',
    });
});