'use strict';

const { map, buffer, debounceTime, filter } = operators;

const plusButton2 = document.getElementById('plusButton2');
const countDisplay2 = document.getElementById('countDisplay2');

// Observable
const mouse = fromEvent(plusButton2, 'click');

const buff = mouse.pipe(
  debounceTime(250)
);

const click2 = mouse.pipe(
  buffer(buff),
  map(list => {
    return list.length;
  }),
  filter(x => x === 2)
);

click2.subscribe(() => {
  console.log('double click')
});