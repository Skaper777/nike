'use strict';

(function () {
  var mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    allowTouchMove: false,
    followFinger: false,
    slideToClickedSlide: false,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000
    }
  })
})();
