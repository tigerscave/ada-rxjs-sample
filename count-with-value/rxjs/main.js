'use strict';

const { fromEvent, operators } = rxjs;
const { scan, throttleTime, map } = operators;

const countDisplay = document.getElementById('countDisplay');

const plusButton = document.getElementById('plusButton');
fromEvent(plusButton, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => {
    countDisplay.innerHTML = count;
  });