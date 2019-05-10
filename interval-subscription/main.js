'use strict';

const { interval, operators } = rxjs;
const { scan } = operators;

const interval1 = document.getElementById('interval1');
const interval2 = document.getElementById('interval2');


const observable1 = interval(500);
const observable2 = interval(250);

const subscription =
  observable1
    .pipe(
      scan(c => c + 10)
    )
    .subscribe(c => {
      interval1.innerHTML = c;
    });

const childSubscription =
  observable2
  .pipe(
    scan(c => c + 20)
  )
  .subscribe(c => {
    interval2.innerHTML = c;
  });

subscription.add(childSubscription);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);