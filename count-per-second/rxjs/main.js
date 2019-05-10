'use strict';

const { fromEvent, operators } = rxjs;
const { throttleTime, scan } = operators;

const countDisplay = document.getElementById('countDisplay');

const plusButton = document.getElementById('plusButton');
fromEvent(plusButton, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => {
    countDisplay.innerHTML = count;
  });