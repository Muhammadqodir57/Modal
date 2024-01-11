'use strict';
let elOpenModal = document.querySelector('.show-modal');
let elModal = document.querySelector('.modal');
let elOverlay = document.querySelector('.overlay');
let elCloseModal = document.querySelector('.close-modal')

elOpenModal.addEventListener('click', () => {
    elModal.style.display = 'inline-block'
    elOverlay.style.display = 'inline-block'
})
elCloseModal.addEventListener('click', () => {
    elModal.style.display = 'none'
    elOverlay.style.display = 'none'
})