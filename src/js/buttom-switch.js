const darkSvg = document.querySelector('.darksvg');
const lightSvg = document.querySelector('.lightsvg');

const checkbox = document.querySelector('.checkbox');
lightSvg.style.display = 'block';
darkSvg.style.display = 'none';

checkbox.addEventListener("click", onSwitchClick);

function onSwitchClick(e) {
  
  
if (lightSvg.style.display === 'block') {
    switchToDarkTheme();
  } else {
    switchToLightTheme();
  }
  
}

function switchToDarkTheme() {
  lightSvg.style.display = 'none';
  darkSvg.style.display = 'block';
}

function switchToLightTheme() {
  darkSvg.style.display = 'none';
  lightSvg.style.display = 'block';
}

