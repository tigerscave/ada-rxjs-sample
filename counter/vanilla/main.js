'use strict';

let count = 0;
const countDisplay = document.getElementById('countDisplay');

const countUp = num => {
  if (num === 0) {
    count = 0;
  } else {
    count = count + num;
  }
  countDisplay.innerHTML = count;
}

const plusButton = document.getElementById('plusButton');
plusButton.addEventListener('click', () => countUp(1));

const minusButton = document.getElementById('minusButton');
minusButton.addEventListener('click', () => countUp(-1));

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => countUp(0));

countUp(0);
