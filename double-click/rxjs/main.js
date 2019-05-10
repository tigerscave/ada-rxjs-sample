'use strict';

const { fromEvent, asyncScheduler, operators } = rxjs;
const { throttleTime, withLatestFrom } = operators;

const plusButton = document.getElementById('plusButton');
const countDisplay = document.getElementById('countDisplay');

// default throttle config is leading: true, trailing: false
const throttleConfig = {
  leading: false,
  trailing: true
};

// Observable
const click = fromEvent(plusButton, 'click');

const doubleClick =
  click.pipe(
    throttleTime(1000, asyncScheduler, throttleConfig)
  );

doubleClick.subscribe((throttleValue) => {
  console.log(`Double-clicked! Timestamp: ${throttleValue.timeStamp}`);
})