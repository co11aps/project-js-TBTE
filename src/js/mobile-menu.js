
const openBtn = document.querySelector(".burger-menu-btn");
const closeBtn = document.querySelector(".x-cross-menu-btn");
const menu = document.querySelector(".backdrop-menu");


openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

 function openMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
   menu.classList.toggle("is-open");
   openBtn.classList.toggle("is-close");
   closeBtn.classList.toggle("is-open");
}
  
function closeMenu() {
  menu.classList.toggle("is-open");
   openBtn.classList.toggle("is-close");
   closeBtn.classList.toggle("is-open");
}
