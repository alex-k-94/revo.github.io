window.addEventListener('DOMContentLoaded', function(){

    /* Slider */

    const line = document.querySelector('.coffee__carousel-line');
    const btn = document.querySelector('.coffee__carousel-arrow');

    btn.addEventListener('click', function(){
        line.classList.toggle('left');
    });

    /* giftset */

    const switchFirst = document.querySelector('.giftset__switch-1');
    const switchSecond = document.querySelector('.giftset__switch-2');
    const switchThird = document.querySelector('.giftset__switch-3');
    const numberOne = document.querySelector('.giftset__number-1');
    const numberTwo = document.querySelector('.giftset__number-2');
    const numberThree = document.querySelector('.giftset__number-3');

    numberOne.addEventListener('click', function(){
        switchFirst.classList.remove('switch__non-active');
        switchSecond.classList.add('switch__non-active');
        switchThird.classList.add('switch__non-active');
        numberOne.classList.remove('non__active');
        numberTwo.classList.add('non__active');
        numberThree.classList.add('non__active');
    });
    
    numberTwo.addEventListener('click', function(){
        switchSecond.classList.remove('switch__non-active');
        switchFirst.classList.add('switch__non-active');
        switchThird.classList.add('switch__non-active');
        numberTwo.classList.remove('non__active');
        numberOne.classList.add('non__active');
        numberThree.classList.add('non__active');
    });

    numberThree.addEventListener('click', function(){
        switchThird.classList.remove('switch__non-active');
        switchFirst.classList.add('switch__non-active');
        switchSecond.classList.add('switch__non-active');
        numberThree.classList.remove('non__active');
        numberOne.classList.add('non__active');
        numberTwo.classList.add('non__active');
    });
});