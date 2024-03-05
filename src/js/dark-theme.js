const iconUse = document.querySelector(".header-use-logo");



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
    iconUse.setAttribute('href', './images/icons.svg#icon-logo');
  } else {
    setTheme('dark');
    iconUse.setAttribute('href', './images/icons.svg#icon-logo-dark');
  }
}



document.getElementById('slider').addEventListener('change', toggleTheme);



      function checkboxCheck() {
            if (localStorage.getItem('theme') === 'dark') {
                setTheme('dark');
              document.getElementById("slider").checked = true;
              
            } else {
                setTheme('light');
              document.getElementById("slider").checked = false;
              
            }
}

checkboxCheck();

