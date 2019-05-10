'use strict';

let count = 0;
const rate = 1000;
let lastClick = Date.now() - rate;

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
plusButton.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    countUp(1);
    lastClick = Date.now();
  }
});

countUp(0);
