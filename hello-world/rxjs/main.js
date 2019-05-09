'use strict';

const { fromEvent } = rxjs;

const buttonEl = document.getElementById('button');
fromEvent(buttonEl, 'click')
  .subscribe(() => { alert("Hello World!") });