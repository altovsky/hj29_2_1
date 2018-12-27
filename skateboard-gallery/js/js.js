'use strict'

const nav = document.getElementById('nav');
const hLinks = nav.getElementsByTagName('a');

const view = document.getElementById('view');

function showLargeImage(event) {

  event.preventDefault();

  for (const hLink of hLinks) {
    hLink.classList.remove('gallery-current');
  }

  this.classList.add('gallery-current');
  view.src = this.href;
  
}

for (const hLink of hLinks) {
  hLink.addEventListener('click', showLargeImage);
}
