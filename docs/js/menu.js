'use strict';

(function () {
  const subMenu = document.querySelectorAll('.submenu');  
  const btn = document.querySelectorAll('.submenu-btn');  
  const active = 'submenu--active';

  function openSub(e) {
    const target = e.target;

    for (let i = 0; i < subMenu.length; i++) {
      const div = btn[i].querySelectorAll('div');
      if (target === btn[i] || target === div[0] || target === div[1] || target === div[2] || target === subMenu[i]) {
        subMenu[i].classList.add(active);
      } else {
        subMenu[i].classList.remove(active);
      }      
    }
  }  

  btn.forEach(function(item , i, subMenu) {    
    subMenu[i].addEventListener('click', openSub);    
  });  
})();