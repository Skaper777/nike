'use strict';

(function () {
  let mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    allowTouchMove: false,
    followFinger: false,
    slideToClickedSlide: false,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000
    }
  });

  let buttonLeft = document.querySelector('.blog-controls__arrows-left');
  let buttonRight = document.querySelector('.blog-controls__arrows-right');

  let slides = document.querySelectorAll('.blog-slider__slide');

  let currentNum = document.querySelector('.blog-controls__pagination-current');
  let totalNum = document.querySelector('.blog-controls__pagination-total');

  let slidesArr = [];
  let currentSlide = 0;
  
  totalNum.textContent = '0' + slides.length;

  for (let i = 0; i < slides.length; i++) {
    slidesArr[i] = slides[i];  
  }  

  buttonRight.addEventListener('click', function () {
    if (currentSlide < slidesArr.length - 1) {     
      slides[currentSlide].classList.remove('showing');
      currentNum.textContent = '0' + ((currentSlide + 1) + 1);      
      currentSlide += 1;
      slides[currentSlide].classList.add('showing');
    }  

    if (currentSlide === (slides.length - 1)) {
      buttonRight.classList.add('disabled');
      buttonLeft.classList.remove('disabled');
    } else if (currentSlide > 0) {
      buttonLeft.classList.remove('disabled');
    }
  });

  buttonLeft.addEventListener('click', function () {  
    if (currentSlide > 0) {          
      slidesArr[currentSlide].classList.remove('showing');
      currentNum.textContent = '0' + ((currentSlide + 1) - 1);
      currentSlide -= 1;      
      slidesArr[currentSlide].classList.add('showing');
      buttonRight.classList.remove('disabled');     
    } else if (currentSlide === 0) {
      buttonLeft.classList.add('disabled');
    }    
  });
})();
