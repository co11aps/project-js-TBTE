import refs from './refs';

switch (window.location.href) {
  case refs.homeLink.href:
    refs.homeLink.classList.add('active-link');
    break;
  case refs.shoppingListLink.href:
    refs.shoppingListLink.classList.add('active-link');
    break;
}
