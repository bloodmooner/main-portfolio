'use strict';

const burgerElem = document.querySelector('.burger');
const burgerMenuClose = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');

burgerElem.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_closed');
});

burgerMenuClose.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_closed');
});
