const MENU_CLASS = 'header__nav';
const BUTTON_CLASS = 'header__menu-toggle';
const MODIFIER_OPENED = '--is-opened';
const MODIFIER_CLOSED = '--is-closed';

const menu = document.querySelector(`.${MENU_CLASS}`);
const menuButton = document.querySelector(`.${BUTTON_CLASS}`);

const setAnimation = () => {
  menuButton.style.setProperty('--animation-top-strip', 'top-to-burger');
  menuButton.style.setProperty('--animation-bottom-strip', 'bottom-to-burger');
};

const toggleMenu = () => {
  menu.classList.toggle(`${MENU_CLASS}${MODIFIER_OPENED}`);
  menu.classList.toggle(`${MENU_CLASS}${MODIFIER_CLOSED}`);
  menuButton.classList.toggle(`${BUTTON_CLASS}${MODIFIER_OPENED}`);
  menuButton.classList.toggle(`${BUTTON_CLASS}${MODIFIER_CLOSED}`);
};

const init = () => {
  menu.classList.add(`${MENU_CLASS}${MODIFIER_CLOSED}`);
  menuButton.classList.add(`${BUTTON_CLASS}${MODIFIER_CLOSED}`);
  menuButton.addEventListener('click', setAnimation, {once: true});
  menuButton.addEventListener('click', toggleMenu);
};

export {init};