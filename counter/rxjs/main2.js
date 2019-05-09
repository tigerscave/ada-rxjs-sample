'use strict';

const { operators } = rxjs;
const { scan } = operators;

let num = 0;
const countDisplay2 = document.getElementById('countDisplay2');

const displayCount = n => {
  countDisplay2.innerHTML = n;
}

const plusButton2 = document.getElementById('plusButton2');
const minusButton2 = document.getElementById('minusButton2');
const resetButton2 = document.getElementById('resetButton2');

fromEvent(plusButton2, 'click')
  .pipe(scan(count => count + 1, num))
  .subscribe((count) => displayCount(count));

fromEvent(minusButton2, 'click')
  .pipe(scan(count => count - 1, num))
  .subscribe((count) => displayCount(count));

fromEvent(resetButton2, 'click')
  .subscribe(() => displayCount(0));

displayCount(0);