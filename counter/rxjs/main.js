'use strict';

const { fromEvent } = rxjs;

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
const minusButton = document.getElementById('minusButton');
const resetButton = document.getElementById('resetButton');

fromEvent(plusButton, 'click')
  .subscribe(() => countUp(1));

fromEvent(minusButton, 'click')
  .subscribe(() => countUp(-1));

fromEvent(resetButton, 'click')
  .subscribe(() => countUp(0));

countUp(0);