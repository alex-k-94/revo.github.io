window.addEventListener('DOMContentLoaded', function(){

    /* Slider */

    const line = document.querySelector('.coffee__carousel-line');
    const btn = document.querySelector('.coffee__carousel-arrow');

    btn.addEventListener('click', function(){
        line.classList.toggle('left');
    });
});