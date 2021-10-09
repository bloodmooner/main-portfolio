'use strict';

const burgerElem = document.querySelector('.burger');
const burgerMenuClose = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');
const modalBG = document.querySelector('.modal-bg');

/* burgerElem.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu_closed');
  modalBG.style.display = 'block';
});

burgerMenuClose.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu_closed');
  modalBG.style.display = 'none';
});
 */

const selectCategory = document.querySelector('.controls__item_category');
const selectTriangle = selectCategory.querySelectorAll('.controls__triangle-line');
const selectContainer = selectCategory.querySelector('.controls__select-container');


selectCategory.addEventListener('click', () => {
  selectCategory.classList.toggle('controls__item_active');
  selectTriangle.forEach((triangle) => {
    triangle.classList.toggle('controls__triangle-line_down');
  });
  selectContainer.classList.toggle('controls__select-container_active')
})
