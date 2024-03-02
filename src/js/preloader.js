const loader = document.querySelector('.loader');

export function loaderOn() {
   loader.classList.remove('hidden');
  }
  
export function loaderOff() {
  loader.classList.add('hidden');
  }