const homeLinkMob = document.querySelector(".home-link-mob");
const shoppingListLinkMob = document.querySelector(".shopping-list-link-mob");

switch (window.location.href) {
  case homeLinkMob.href:
    homeLinkMob.classList.add('active-link');
    break;
  case shoppingListLinkMob.href:
    shoppingListLinkMob.classList.add('active-link');
    break;
}

