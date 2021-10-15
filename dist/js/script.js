'use strict';

let burgerElem = document.querySelector('.burger');
let burgerMenuClose = document.querySelector('.burger-menu__close');
let burgerMenu = document.querySelector('.burger-menu');
let modalBG = document.querySelector('.modal-bg');


if(burgerElem) {
  burgerElem.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu_closed');
    modalBG.style.display = 'block';
  });
}

if(burgerMenuClose) {
  burgerMenuClose.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu_closed');
    modalBG.style.display = 'none';
  });
}



let selectCategory = document.querySelector('.controls__item_category');

if(selectCategory) {
  let selectTriangle = selectCategory.querySelectorAll('.controls__triangle-line');
  let selectContainer = selectCategory.querySelector('.controls__select-container');

  selectCategory.addEventListener('click', () => {
    selectCategory.classList.toggle('controls__item_active');
    selectTriangle.forEach((triangle) => {
      triangle.classList.toggle('controls__triangle-line_down');
    });
    selectContainer.classList.toggle('controls__select-container_active')
  });
}



let reviewsItems = document.querySelectorAll('.comments__item');

if(reviewsItems) {
  reviewsItems.forEach((item) => {
    let reviewsButton = item.querySelector('.comments__button');
    item.addEventListener('mouseover', () => {
      reviewsButton.classList.add('comments__button_active');
    });
    item.addEventListener('mouseout', () => {
      reviewsButton.classList.remove('comments__button_active');
    });
  });
}




let commentsRating = document.querySelector('.comments__rating');

if(commentsRating) {
  let commentsRatingWidth = commentsRating.clientWidth;

  commentsRating.addEventListener('click', () =>{
    commentsRating.style = '--rating: 1';
  });
}




const pricesItems = document.querySelectorAll('.bones__item_prices-reason');

if(pricesItems) {
  const pricesBackground = document.querySelector('.header__background-img-prices');

  pricesItems.forEach((pricesItem, index) => {
    const pricesSubtitle = pricesItem.querySelector('.bones__subtitle');
    const pricesTitle = pricesItem.querySelector('.bones__title');
    const pricesCaption = pricesItem.querySelector('.bones__caption');
    const pricesButton = pricesItem.querySelector('.bones__button');

    pricesItem.addEventListener('mouseover', () =>{
      pricesBackground.style.backgroundImage = `url('assets/img/prices${index}-1920x1080.jpg')`;

      pricesItem.classList.add('bones__item_active');
      pricesSubtitle.classList.add('bones__subtitle_active');
      pricesTitle.classList.add('bones__title_black', 'bones__title_active');
      pricesCaption.classList.add('bones__caption_active');
      pricesButton.classList.add('bones__button_active');
    });
    pricesItem.addEventListener('mouseout', () =>{
      pricesBackground.style.backgroundImage = `none`;

      pricesItem.classList.remove('bones__item_active');
      pricesSubtitle.classList.remove('bones__subtitle_active');
      pricesTitle.classList.remove('bones__title_black', 'bones__title_active');
      pricesCaption.classList.remove('bones__caption_active');
      pricesButton.classList.remove('bones__button_active');
    });
  });
}





const bonesMainContainer = document.querySelector('.bones__container_full-height');

if(bonesMainContainer) {
  const bonesMainItems = document.querySelectorAll('.bones__button_show-card');
  const bonesAboutItems = document.querySelectorAll('.bones__item_more');

  let isMobile = false;
  let currentDeviceWidth = document.documentElement.clientWidth;

  if(currentDeviceWidth >= 0 && currentDeviceWidth <= 1199) {
    isMobile = true;
  }


  bonesMainItems.forEach((bonesMainItem, index) => {

    ['click', 'ontouchstart'].forEach( evt => {

      bonesMainItem.addEventListener(evt, () =>{

        for(let i = 0; i < bonesMainItems.length; i++) {

          if(i === index) {

            if(isMobile) bonesAboutItems[i].classList.add('bones__item_animate-show-right');

            bonesAboutItems[i].style.display = 'block';
            bonesMainItems[i].style.zIndex = '0';
          } else {
            bonesMainItems[i].style.zIndex = '100';
            bonesAboutItems[i].style.display = 'none';
          }
        }
      });
    });

  });

  bonesAboutItems.forEach((bonesAboutItem, index) => {

    bonesAboutItem.addEventListener('click', (e) =>{

      bonesAboutItems[index].style.display = 'none';
      bonesMainItems[index].style.zIndex = '100';

    });

  });
}





