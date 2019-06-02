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

  let slides = document.querySelectorAll('blog-slider__slide');

  let slidesArr = [];
  let currentSlide = 0;

  for (let i = 0; i < slides.length; i++) {
    slidesArr[i] = slides[i];  
  }

  buttonRight.addEventListener('click', function () {
    if (currentSlide < slidesArr.length - 1) {     
      slides[currentSlide].classList.remove('showing');
      currentSlide += 1;
      slides[currentSlide].classList.add('showing');
    }  
  });

  buttonLeft.addEventListener('click', function () {  
    if (currentSlide > 0) {    
      slidesArr[currentSlide].classList.remove('showing');
      currentSlide -= 1;
      slidesArr[currentSlide].classList.add('showing');
    }
  });
})();
