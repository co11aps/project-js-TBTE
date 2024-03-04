const iconUse = document.querySelector(".header-use-logo");

console.log(iconUse);

 // function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
            console.log(themeName);
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
              document.getElementById("slider").checked = true;
              iconUse.setAttribute('href', './images/icons.svg#icon-logo-dark');
              console.dir(iconUse.getAttribute('href'));
            } else {
                setTheme('light');
              document.getElementById("slider").checked = false;
              iconUse.setAttribute('href', './images/icons.svg#icon-logo');
            }
}
 checkboxCheck()

