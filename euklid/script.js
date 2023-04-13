let swiper = new Swiper('.swiper', {
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  autoplay: {
    delay: 5000,
  },

  clickable: true,
})

let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.header__nav');
let menuLinks = menu.querySelectorAll ('.nav__link');

burger.addEventListener ('click',

function () {

burger.classList.toggle('burger--active');

menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  }) 
})

let searchForm = document.querySelector('#search-form'),
    searchBtnOpen = document.querySelector('.section-header__search'),
    searchBtn = document.querySelector('#search-form__search'),
    searchBtnClose = document.querySelector('#search-form__close');
searchBtnOpen.addEventListener('click', function(el) {
  searchForm.classList.add('section-header__search-form-active');
  searchBtnOpen.classList.add('section-header__search-close')
});
searchBtnClose.addEventListener('click', function() {
  searchForm.classList.remove('section-header__search-form-active');
  searchBtnOpen.classList.remove('section-header__search-close')
});



  let tabLink = document.querySelectorAll ('.work__link')
  let workTab = document.querySelectorAll ('.work__tab')

  tabLink.forEach(function(element){  

    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      tabLink.forEach(function(btn) { btn.classList.remove('.work__link--active')});
      e.currentTarget.classList.add('.work__link--active');

      workTab.forEach(function(element){ element.classList.remove('tab-content-active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });

  new Accordion('.faq__acordion-list', {
    ariaEnabled: true,
  });