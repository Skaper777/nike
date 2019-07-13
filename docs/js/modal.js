'use strict';

(function () {
  const modal = document.querySelector('.modal');
  const overlay = modal.querySelector('.modal-overlay');
  const closeBtn = modal.querySelector('.modal-header__close');
  const opened = 'modal--opened';

  const openBtn = document.querySelector('.page-footer__contact');

  function openModal() {
    modal.classList.add(opened);
    closeBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    modal.classList.remove(opened);
    closeBtn.removeEventListener('click', closeModal);
  }
 
  openBtn.addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
})();