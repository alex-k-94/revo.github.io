window.addEventListener('DOMContentLoaded', function(){

    /* Slider for coffee */

    const coffeeLine = document.querySelector('.coffee__carousel-line');
    const coffeeBtn = document.querySelector('.coffee__carousel-arrow');

    coffeeBtn.addEventListener('click', function(){
        coffeeLine.classList.toggle('left');
    });

    /* Slider for combo */

    const comboLine = document.querySelector('.combo__carousel-line');
    const comboBtn = document.querySelector('.combo__carousel-arrow');

    comboBtn.addEventListener('click', function(){
        comboLine.classList.toggle('c-left');
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