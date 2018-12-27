'use strict'

const nav = document.getElementsByTagName('nav')[0];

function showHideNav(event) {
  if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
    nav.classList.toggle('visible');
  }
}

document.addEventListener('keydown', showHideNav);

const secret = document.getElementsByClassName('secret')[0];
const codeList = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];

let i = 0;
function testSequence(event) {
  if (event.code === codeList[i]) {
    i++;
    
    if (i > codeList.length - 1) {
      secret.classList.add('visible');
      i = 0;
    }
  } else {
    i = 0;
  }
}

document.addEventListener('keydown', testSequence);
