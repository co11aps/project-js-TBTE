import refs from './refs';
// const headerSignInBtn = document.querySelector('.header-sign-in-btn');
const closeBtn = document.querySelector('.auth-pop-up-close-btn');
const menu = document.querySelector('.backdrop-auth-pop-up');

refs.headerSignInBtn.addEventListener('click', openMenu);

function openMenu() {
  menu.classList.toggle('is-hidden');
  closeBtn.addEventListener('click', closeMenu);
}

function closeMenu() {
  menu.classList.toggle('is-hidden');
  closeBtn.removeEventListener('click', closeMenu);
}
