import refs from './refs';

switch (window.location.href) {
  case refs.homeLinc.href:
    refs.homeLinc.classList.add('active-link');
    break;
  case refs.shoppingListLinc.href:
    refs.shoppingListLinc.classList.add('active-link');
    break;
}
