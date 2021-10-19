'use strict';

let burgerElem = document.querySelector('.burger-nav');
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


/* const menuLinks = document.querySelectorAll('.loading__link');
const loadingScreen = document.querySelector('.loading');


menuLinks.forEach((menuLink, index) => {
  menuLink.addEventListener('click', (e) => {
    e.preventDefault();
    loadingScreen.classList.add('loading_start');
    let changeLocation = () => {
      window.location = menuLink.getAttribute('href');
    };
    setTimeout(changeLocation, 1600);
  });
}); */

/* window.onload = function() {
  let deleteLoader = () => {
    loadingScreen.classList.remove('loading_done');
  };

  setTimeout(deleteLoader, 1600);

}; */


// Comments on work.html

const writeCommentBtn = document.querySelector('.controls__item_write-comment');


if(writeCommentBtn) {
  const commentsCount = document.querySelectorAll('.comments__item').length;


  const newCommentBlock = document.querySelector('.comments__item_new');

  writeCommentBtn.addEventListener('click', () => {
    writeCommentBtn.classList.toggle('controls__item_active-white');
    newCommentBlock.classList.toggle('comments__item_new-nodisplay');
    newCommentBlock.scrollIntoView(true);
  });
}



// Tabs on works.hmtl

const sliderButtons = document.querySelectorAll('.controls__item_slide-container');

if(sliderButtons) {
  const sliderButtonsName = document.querySelectorAll('.controls__item_slide-name');
const worksTabs = document.querySelectorAll('.bones__container_works');
const worksCountElement = document.querySelector('.controls__number');

let worksItemsCount = 0;

worksTabs[0].style.opacity = '0';
worksTabs[1].style.opacity = '1';
worksCountElement.textContent = worksTabs[1].querySelectorAll('.bones__item_work').length;





sliderButtons.forEach((sliderButton, index) => {
  sliderButton.addEventListener('click', (e) => {
    for(let i = 0; i < sliderButtons.length; i++) {
      if(i == index) {
        worksItemsCount = worksTabs[index].querySelectorAll('.bones__item_work').length;
        worksCountElement.textContent = worksItemsCount;

        sliderButtons[i].classList.add('controls__item_active');

        worksTabs[i].style.opacity = '1';
        worksTabs[i].classList.add('bones__container_works_showUpTab');
        worksTabs[i].classList.add('bones__container_works_hideDownTab');

        // For fix opacity behaviour
        worksTabs[i].style.display = 'grid';

      } else {
        sliderButtons[i].classList.remove('controls__item_active');

        worksTabs[i].style.opacity = '0';


        worksTabs[i].classList.remove('bones__container_works_showUpTab');
        worksTabs[i].classList.add('bones__container_works_hideDownTab');

        // For fix opacity behaviour
        worksTabs[i].style.display = 'none';
      }
    }
  });
});
}




/* var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px",
  "width": activeWidth + "px"
});

$(".tabs").on("mouseover","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px",
    "width": activeWidth + "px"
  });
});


$(document).ready(function() {
  $( "a.menu__links" ).each(function(elem, index) {

    if($( this ).hasClass( "active" ) == true) {
      $(".selector").css({
        "left": (tabs.width() / 6) * elem + "px",
        "width": activeWidth + "px"
      });
    }
  });
}); */



var tabs = $('.menu__list');
var selector = $('.menu__list').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".menu__selector").css({
  "left": activeItem.position.left + "px",
  "width": activeWidth + "px"
});

$(".menu__list").on("mouseover","a",function(e){
  e.preventDefault();
  $('.menu__list a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".menu__selector").css({
    "left":itemPos.left + "px",
    "width": activeWidth + "px"
  });
});


$(document).ready(function() {
  $( "a.menu__links" ).each(function(elem, index) {

    if($( this ).hasClass( "active" ) == true) {
      $(".menu__selector").css({
        "left": (tabs.width() / 6) * elem + "px",
        "width": activeWidth + "px"
      });
    }
  });
});
