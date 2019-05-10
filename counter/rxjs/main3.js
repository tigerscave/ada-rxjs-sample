'use strict';

const { merge } = rxjs;
const { map } = operators;

const plusButton3 = document.getElementById('plusButton3');
const minusButton3 = document.getElementById('minusButton3');
const resetButton3 = document.getElementById('resetButton3');
const countDisplay3 = document.getElementById('countDisplay3');

const plusObservable = fromEvent(plusButton3, 'click');
const minusObservable = fromEvent(minusButton3, 'click');
const resetObservable = fromEvent(resetButton3, 'click');

merge(
  plusObservable.pipe(map(() => 'plus')),
  minusObservable.pipe(map(() => 'minus')),
  resetObservable.pipe(map(() => 'reset'))
)
.pipe(
  scan((a, e) => {
    switch(e) {
      case "plus": return a + 1;
      case "minus": return a - 1;
      case "reset": return 0;
    }
  }, 0)
)
.subscribe(val => {
  countDisplay3.innerHTML = val;
});