const iconUse = document.querySelector('.header-use-logo');

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

document.getElementById('slider').addEventListener('change', toggleTheme);

function checkboxCheck() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
    document.getElementById('slider').checked = true;
  } else {
    setTheme('light');
    document.getElementById('slider').checked = false;
  }
}

function applyTheme() {
  const theme = localStorage.getItem('theme');
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isDarkMode = darkModeMediaQuery.matches;

  switch (theme) {
    case 'dark':
      setTheme('dark');
      break;
    case 'light':
      setTheme('light');
      break;
    default:
      if (isDarkMode) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
  }
}

applyTheme();
