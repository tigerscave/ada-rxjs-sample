'use strict';

const plusButton3 = document.getElementById('plusButton3');
const minusButton3 = document.getElementById('minusButton3');

const countDisplay3 = document.getElementById('countDisplay3');

const plusObservable =
  fromEvent(plusButton3, 'click')
  .pipe(scan(count => count + 1));
  
const minusObservable =
  fromEvent(minusButton3, 'click');

const subscription =
  plusObservable.subscribe(x => console.log('first: ' + x));
const childSubscription =
  minusObservable.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);