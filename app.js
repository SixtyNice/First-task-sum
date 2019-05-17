'use strict'

//Choose all dom elements
const firstNum = document.querySelector(".fieldset__input-1");
const secondNum = document.querySelector(".fieldset__input-2");
const buttonSum = document.querySelector(".fieldset__button");



function sum() {
    let result = +firstNum.value + (+secondNum.value);
    alert(+result.toFixed(10));
}

buttonSum.addEventListener('click',sum);