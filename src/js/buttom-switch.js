const darkSvg = document.querySelector('.darksvg');
const lightSvg = document.querySelector('.lightsvg');

const headerDark = document.querySelector(".header-container");
const headerSvgBurgerDark = document.querySelector(".header-svg-burger");
const xCrossBtnSvgDark = document.querySelector(".x-cross-btn-svg");
const navMobilDark = document.querySelector(".nav-mobil");


const checkbox = document.querySelector('.checkbox');
lightSvg.style.display = 'block';
darkSvg.style.display = 'none';

checkbox.addEventListener("click", onSwitchClick);

function onSwitchClick() {
  lightSvg.classList.toggle("is-open");
  darkSvg.classList.toggle("is-open");


// if (lightSvg.style.display === 'block') {
//   switchToDarkTheme();
  

//   } else {
//     switchToLightTheme();
//   }
  
}

// function switchToDarkTheme() {
//   lightSvg.style.display = 'none';
//   darkSvg.style.display = 'block';
// }

// function switchToLightTheme() {
//   darkSvg.style.display = 'none';
//   lightSvg.style.display = 'block';
// }

// headerSvgBurgerDark.classList.add("dark-body");