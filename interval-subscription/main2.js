'use strict';

const { merge, fromEvent } = rxjs;
const { mergeMap } = rxjs.operators;

const button = document.getElementById('button');

const clickObservable = fromEvent(button, 'click');

const observable3 = interval(500);
const observable4 = interval(250);

clickObservable
.pipe()
.subscribe((x) => console.log("x: ", x))