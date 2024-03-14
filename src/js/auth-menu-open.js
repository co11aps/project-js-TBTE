import refs from './refs';
import './auth.js';
import { handleSignUp } from './auth.js';
import { toggleSignIn } from './auth.js';
// const headerSignInBtn = document.querySelector('.header-sign-in-btn');
const closeBtn = document.querySelector('.auth-pop-up-close-btn');
// const authMenu = document.querySelector('.backdrop-auth-pop-up');
const signUpModeBtn = document.querySelector('.pop-up-sign-up-btn');
const signUpModeFields = document.querySelector('.auth-pop-up');
const popUpControls = document.querySelector('.controls-container');

refs.headerSignInBtn.addEventListener('click', openMenu);

function openMenu() {
  refs.authMenu.classList.toggle('is-hidden');
  closeBtn.addEventListener('click', closeMenu);
  signUpModeBtn.addEventListener('click', switchToSignUpMode);
  refs.signInButton.addEventListener('click', toggleSignIn, false);
}

export function closeMenu() {
  refs.authMenu.classList.toggle('is-hidden');
  closeBtn.removeEventListener('click', closeMenu);
  signUpModeBtn.removeEventListener('click', switchToSignUpMode);
  signUpModeFields.classList.remove('sign-up-mode');
  signUpModeBtn.textContent = 'SIGN UP';
  refs.signInButton.textContent = 'SIGN IN';
  refs.signUpButton.removeEventListener('click', handleSignUp, false);
  popUpControls.classList.remove('is-hidden');
  refs.signInButton.removeEventListener('click', toggleSignIn, false);
}

function switchToSignUpMode() {
  signUpModeFields.classList.add('sign-up-mode');
  signUpModeBtn.textContent = 'SIGN IN';
  refs.signInButton.textContent = 'SIGN UP';
  popUpControls.classList.add('is-hidden');
  refs.signUpButton.addEventListener('click', handleSignUp, false);
}
