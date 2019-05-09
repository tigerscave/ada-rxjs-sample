'use strict';

const onButtonClicked = () => {
  alert("Hello World");
};

const buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', onButtonClicked);