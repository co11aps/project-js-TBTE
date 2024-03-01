const currentPath = window.location.pathname;
const homeLinkMob = document.querySelector(".home-link-mob"),
const shoppingListLinkMob = document.querySelector(".shopping-list-link-mob");

  // Визначаємо активне посилання для другої навігації
  if (currentPath.includes('index.html')) {
    homeLinkMob.classList.add('active-link');
  } else if (currentPath.includes('shopping-list.html')) {
    shoppingListLinkMob.classList.add('active-link');
  }