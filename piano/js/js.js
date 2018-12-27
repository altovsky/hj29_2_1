'use strict'

const urls = {
  'lower': [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3',
  ],
  'middle': [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3',
  ],
  'higher': [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3',
  ],
}


const piano = document.getElementsByClassName('set')[0];
const buttons = piano.getElementsByTagName('li');

function playSound(event) {
  const tone = Array.from(buttons).indexOf(this);
  const audio = this.getElementsByTagName('audio')[0];

  if (event.shiftKey) {
    audio.src = urls.lower[tone];
  } else if (event.altKey) {
    audio.src = urls.higher[tone];
  } else {
    audio.src = urls.middle[tone];
  }

  audio.play();
  
}

for (const button of buttons) {
  button.addEventListener('click', playSound);
}
