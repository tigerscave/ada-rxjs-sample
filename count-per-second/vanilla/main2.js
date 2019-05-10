'use strict';

let n = 0;

const countUpPerSec = num => {
  if(Date.now() - lastClick >= rate) {
    if (num === 0) {
      n = 0;
    } else {
      n = n + num;
    }
    countDisplay2.innerHTML = n;
    lastClick = Date.now();
  };
}

const countDisplay2 = document.getElementById('countDisplay2');
const plusButton2 = document.getElementById('plusButton2');
const minusButton2 = document.getElementById('minusButton2');
const resetButton2 = document.getElementById('resetButton2');

plusButton2.addEventListener('click', () => countUpPerSec(1));
minusButton2.addEventListener('click', () => countUpPerSec(-1));
resetButton2.addEventListener('click', () => countUpPerSec(0));

countUpPerSec(0);
