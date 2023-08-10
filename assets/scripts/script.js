// Swiper

var swiper = new Swiper(".swiper-hero", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// Tabs

let tabsBtn = document.querySelectorAll('.nav-description__link')
let tabsItem = document.querySelectorAll('.nav-description__item')

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('nav-description__link--active')
    })
    e.currentTarget.classList.add('nav-description__link--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('nav-description__item--active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('nav-description__item--active');
  })
})

// Accordion

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

//  Burger menu

let burgerMenu = document.querySelector('.bars__link')
let closeMenu = document.querySelector('.close__link')
let menu = document.querySelector('.menu__laptop')
let menuLinks = menu.querySelectorAll('.menu__item')

burgerMenu.addEventListener('click', function() {
   menu.classList.toggle('menu__laptop--active')
  document.body.classList.add('stop-scroll')
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function () {
     menu.classList.remove('menu__laptop--active')
    document.body.classList.remove('stop-scroll')
  })
})
closeMenu.addEventListener('click', function() {
     menu.classList.remove('menu__laptop--active')
    document.body.classList.remove('stop-scroll')
})


// Implement opening and closing of the search field

let searchIcon = document.querySelector('.nav__link--search')
let searchAction = document.querySelector('.search__action')
let searchClose = document.querySelector('.nav__search--close')
let searchField = document.querySelector('.search__field')


searchIcon.addEventListener('click', function() {
  searchIcon.classList.toggle('nav__link--search-active')
 searchAction.classList.toggle('search__action--active')
 searchClose.classList.toggle('nav__search--close--active')
 searchField.classList.toggle('search__field--active')
})

searchClose.addEventListener('click', function() {
  searchIcon.classList.remove('nav__link--search-active')
  searchAction.classList.remove('search__action--active')
 searchClose.classList.remove('nav__search--close--active')
 searchField.classList.remove('search__field--active')
})


 

 
