'use strict';

const burgerElem = document.querySelector('.burger');
const burgerMenuClose = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');
const modalBG = document.querySelector('.modal-bg');

burgerElem.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_closed');
  modalBG.style.display = 'block';
});

burgerMenuClose.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_closed');
  modalBG.style.display = 'none';
});
