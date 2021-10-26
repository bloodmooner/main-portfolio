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
let selectTag = document.querySelector('.controls__item_tag');

if(selectCategory) {
  let selectTriangle = selectCategory.querySelectorAll('.controls__triangle-line');
  let selectContainer = selectCategory.querySelector('.controls__select-container');

  selectCategory.addEventListener('click', () => {
    selectCategory.classList.toggle('controls__item_active');
    selectTriangle.forEach((triangle) => {
      triangle.classList.toggle('controls__triangle-line_down');
    });
    selectContainer.classList.toggle('controls__select-container_active');
  });
}



if(selectTag) {
  let selectTriangle = selectTag.querySelectorAll('.controls__triangle-line');
  let selectContainer = selectTag.querySelector('.controls__select-container');

  selectTag.addEventListener('click', () => {
    selectTag.classList.toggle('controls__item_active');
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
  const commentsContainer = document.querySelector('.comments__container');
  const commentsCount = document.querySelectorAll('.comments__item').length;






  writeCommentBtn.addEventListener('click', () => {
    writeCommentBtn.classList.toggle('controls__item_active-white');



    // Creating Form to add new comment
    let commentsItem = document.createElement('div');
    commentsItem.classList.add('comments__item',  'comments__item_new', 'comments__item_active');

    let commentsForm = document.createElement('form');
    commentsForm.classList.add('comments__form');
    commentsForm.setAttribute('action', '#');
    commentsItem.append(commentsForm);

    let commentsInfo = document.createElement('div');
    commentsInfo.classList.add('comments__info');
    commentsForm.append(commentsInfo);

    let inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input__wrapper');
    commentsInfo.append(inputWrapper);

    let inputFile = document.createElement('input');
    inputFile.classList.add('input', 'input__file');
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('name', 'file');
    inputFile.setAttribute('id', 'input__file');
    inputWrapper.append(inputFile);

    let inputFileButton = document.createElement('label');
    inputFileButton.classList.add('input__file-button');
    inputFileButton.setAttribute('for', 'input__file');
    inputWrapper.append(inputFileButton);

    let inputFileContent = document.createElement('div');
    inputFileContent.classList.add('input__file-content');
    inputFileButton.append(inputFileContent);

    let inputFileLineHorizontal = document.createElement('span');
    let inputFileLineVertical = document.createElement('span');
    inputFileLineHorizontal.classList.add('input__file-line_horizontal');
    inputFileLineVertical.classList.add('input__file-line_vertical');
    inputFileContent.append(inputFileLineHorizontal);
    inputFileContent.append(inputFileLineVertical);

    let commentsDescription = document.createElement('div');
    commentsDescription.classList.add('comments__description');
    commentsInfo.append(commentsDescription);

    let commentsRole = document.createElement('span');
    commentsRole.classList.add('comments__role');
    commentsRole.textContent = 'Гость';
    commentsDescription.append(commentsRole);

    let commentsInputs = document.createElement('div');
    commentsInputs.classList.add('comments__inputs');
    commentsDescription.append(commentsInputs);

    let commentsInputsFieldName = document.createElement('input');
    commentsInputsFieldName.classList.add('comments__inputs-field');
    commentsInputsFieldName.setAttribute('type', 'text');
    commentsInputsFieldName.setAttribute('placeholder', 'Имя');
    commentsInputsFieldName.setAttribute('name', 'comments_name');
    commentsInputs.append(commentsInputsFieldName);

    let commentsInputsFieldSername = document.createElement('input');
    commentsInputsFieldSername.classList.add('comments__inputs-field');
    commentsInputsFieldSername.setAttribute('type', 'text');
    commentsInputsFieldSername.setAttribute('placeholder', 'Фамилия');
    commentsInputsFieldSername.setAttribute('name', 'comments_sername');
    commentsInputs.append(commentsInputsFieldSername);

    let commentsSeparator = document.createElement('div');
    commentsSeparator.classList.add('comments__separator');
    commentsForm.append(commentsSeparator);

    let commentsRatingContainer = document.createElement('div');
    commentsRatingContainer.classList.add('comments__rating-container');
    commentsSeparator.append(commentsRatingContainer);

    let commentsRatingItem = document.createElementNS('http://www.w3.org/2000/svg','svg');
    commentsRatingItem.classList.add('comments__rating-item');
    commentsRatingItem.setAttribute('viewBox', '0 0 18 17');
    commentsRatingItem.setAttribute('fill', 'none');
    commentsRatingItem.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    commentsRatingContainer.append(commentsRatingItem);

    let commentsRatingItemPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    commentsRatingItemPath.setAttribute(
      'd',
      'M8.52447 0.463281C8.67415 0.00262594 9.32585 0.00262594 9.47553 0.463281L11.1329 5.56409C11.1998 5.77011 11.3918 5.90959 11.6084 5.90959H16.9717C17.4561 5.90959 17.6575 6.52939 17.2656 6.81409L12.9266 9.96657C12.7514 10.0939 12.678 10.3196 12.745 10.5256L14.4023 15.6264C14.552 16.0871 14.0248 16.4701 13.6329 16.1854L9.29389 13.0329C9.11865 12.9056 8.88135 12.9056 8.70611 13.0329L4.3671 16.1854C3.97524 16.4701 3.448 16.0871 3.59768 15.6264L5.25503 10.5256C5.32197 10.3196 5.24864 10.0939 5.07339 9.96657L0.734384 6.81409C0.342527 6.52939 0.543915 5.90959 1.02828 5.90959H6.39159C6.6082 5.90959 6.80018 5.77011 6.86712 5.56409L8.52447 0.463281Z'
      );
    commentsRatingItem.append(commentsRatingItemPath);

    for(let i = 0; i < 4; i++) {
      commentsRatingContainer.append(commentsRatingItem.cloneNode(true));
    }

    let commentsRatingNumber = document.createElement('input');
    commentsRatingNumber.classList.add('comments_rating-nummber');
    commentsRatingNumber.setAttribute('type', 'text');
    commentsRatingNumber.setAttribute('name', 'comments_rating');
    commentsRatingNumber.setAttribute('value', '0');
    commentsRatingNumber.setAttribute('hidden', 'hidden');
    commentsSeparator.append(commentsRatingNumber);

    let commentsLine = document.createElement('div');
    commentsLine.classList.add('comments__line');
    commentsSeparator.append(commentsLine);

    let commentsText = document.createElement('div');
    commentsText.classList.add('comments__text');
    commentsForm.append(commentsText);

    let commentsTextarea = document.createElement('textarea');
    commentsTextarea.classList.add('comments__textarea');
    commentsTextarea.setAttribute('placeholder', 'Ваш комментарий');
    commentsTextarea.setAttribute('name', 'comments_text');
    commentsText.append(commentsTextarea);

    let commentsButton = document.createElement('button');
    commentsButton.classList.add('comments__button', 'comments__button_active', 'comments__button_active-mt20');
    commentsForm.append(commentsButton);

    let commentsButtonText = document.createElement('span');
    commentsButtonText.textContent = 'Отправить';
    commentsButton.append(commentsButtonText);




    let commentsContainerCount = document.querySelectorAll('.comments__item').length;

    if(commentsContainerCount > commentsCount) {
      const deletedCommentsItem = document.querySelector('.comments__item_new')
      deletedCommentsItem.remove();
      console.log('deleted');
    } else {
      commentsContainer.prepend(commentsItem);

      const ratingContainer = document.querySelector('.comments__rating-container');
      const ratingStars = ratingContainer.querySelectorAll('.comments__rating-item');
      const ratingNumber = document.querySelector('.comments_rating-nummber');

      ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
          ratingNumber.value = index + 1;
          for(let i = 0; i < ratingStars.length; i++) {
            if(i <= index) {
              ratingStars[i].classList.add('comments__rating-item_active');
            } else {
              ratingStars[i].classList.remove('comments__rating-item_active');
            }
          }
        });
      });

      const fileInput = document.querySelector('.input__file');

      if(fileInput) {
        const fileInputLineHorizontal = document.querySelector('.input__file-line_horizontal');
        const fileInputLineVertical = document.querySelector('.input__file-line_vertical');


        fileInput.addEventListener('change', function (e) {
          let countFiles = '';
          if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

          if (countFiles) {
            fileInputLineHorizontal.classList.add('input__file-line_horizontal_animated');
            fileInputLineVertical.classList.add('input__file-line_vertical_animated');
          }
        });
      }
    }



    //newCommentBlock.classList.toggle('comments__item_new-nodisplay');
    commentsItem.scrollIntoView(true);
  });
}



// Tabs on works.hmtl

let sliderButtons = document.querySelectorAll('.controls__item_slide-container');

if(sliderButtons.length != 0) {
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

var burgerMenus = $('.burger-nav');
var burgerLines = $('.burger__line')

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

  if($(window).width() > 900 && $('.burger-nav').hasClass('active')) {
    $(".burger__line").css('background-color', '#151515');
  } else {
    $(".burger__line").css('background-color', '#FFFFFF');
  }



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



/* const workArticle = document.querySelector('.work-article');

const paragraphContainer = document.querySelector('.work-article__description');
const paragraphImagesContainer = document.querySelector('.work-information__images');

const paragrapList = paragraphContainer.querySelectorAll('.work-article__image-lode');
const paragraphImagesList = paragraphImagesContainer.querySelectorAll('img');


console.log(paragraphImagesList);

paragrapList.forEach((paragraph) => {
  console.log(paragraph.offsetTop);
}) */


const orderTabs = document.querySelectorAll('.order__radio');


if(orderTabs.length > 0) {
  const orderPrices = document.querySelectorAll('.order__radio-price');
  const orderPriceElem = document.querySelector('.order__price');

  orderPriceElem.textContent = orderPrices[0].value;


  orderTabs.forEach((orderTab, index) => {
    orderTab.addEventListener('click', () => {
      orderPriceElem.textContent = orderPrices[index].value;
    });
  });
}




/* let commentsRating = document.querySelector('.comments__rating');

if(commentsRating) {
  let commentsRatingWidth = commentsRating.clientWidth;

  commentsRating.addEventListener('click', () =>{
    commentsRating.style = '--rating: 1';
  });
} */











