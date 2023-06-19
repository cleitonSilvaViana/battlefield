const menu_button_open = document.querySelector('.menu__button--open');
const menu_button_close = document.querySelector('.menu__button--close');
const menu_mobile = document.querySelector('.menu__list--mobile');
const menu_top = document.querySelector('.menu-top');
const menu = document.querySelector('.menu');
const aside = document.querySelector('.aside');
const aside_button_open = document.querySelector('.side-bar__icon');
const aside_button_close = document.querySelector('.aside__button');

menu_button_open.addEventListener('click', () => {
   (menu_mobile.classList.contains('hidden')) ? menu_mobile.classList.remove('hidden') : menu_mobile.classList.add('hidden')
})

menu_button_close.addEventListener('click', () => {
   (menu_mobile.classList.contains('hidden')) ? menu_mobile.classList.remove('hidden') : menu_mobile.classList.add('hidden')
})

aside_button_open.addEventListener('click', () => {
   aside.classList.remove('hidden');
   aside.classList.add('aside--grid');
   menu_top.classList.add('menu-top--position')
   menu.classList.remove('menu--display');
   menu.classList.add('hidden');
})

aside_button_close.addEventListener('click', () => {
   aside.classList.add('hidden');
   aside.classList.remove('aside--grid');
   menu_top.classList.remove('menu-top--position');
   menu.classList.remove('hidden');
   menu.classList.add('menu--display');
})










