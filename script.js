const menu_button_open = document.querySelector('.menu__button--open');
const menu_button_close = document.querySelector('.menu__button--close');
const menu_mobile = document.querySelector('.menu__list--mobile');
const menu_top = document.querySelector('.menu-top');
const menu = document.querySelector('.menu');

menu_button_open.addEventListener('click', () => {
   (menu_mobile.classList.contains('hidden')) ? menu_mobile.classList.remove('hidden') : menu_mobile.classList.add('hidden')
})

menu_button_close.addEventListener('click', () => {
   (menu_mobile.classList.contains('hidden')) ? menu_mobile.classList.remove('hidden') : menu_mobile.classList.add('hidden')
})


const aside = document.querySelector('.aside');
const aside_button_open = document.querySelector('.side-bar__icon');
const aside_button_close = document.querySelector('.aside__button');


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


const input_checkbox = document.querySelector('#checkbox_creator');
const check_box = document.querySelector('.checkbox__icon');
const check_icon = document.querySelector('.checked__icon');
const btn_sub_form = document.querySelector('.submit_form');

check_box.addEventListener('click', () {
   isChecked = input_checkbox.checked;
   input_checkbox.checked = !isChecked;
   switch (isChecked) {
      case true:
         check_icon.classList.remove('checked--active');
         check_box.classList.add('checkbox__icon--disabled');
         break
      case false:
         check_icon.classList.add('checked--active')
         check_box.classList.remove('checkbox__icon--disabled');
   }
});












