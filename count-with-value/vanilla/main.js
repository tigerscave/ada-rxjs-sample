'use strict';

let count = 0;
const rate = 1000;
let lastClick = Date.now() - rate;
const countDisplay = document.getElementById('countDisplay');

const plusButton = document.getElementById('plusButton');
plusButton.addEventListener('click', (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    lastClick = Date.now();
    countDisplay.innerHTML = count;
  }
})