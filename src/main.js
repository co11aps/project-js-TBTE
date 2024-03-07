import refs from './js/refs.js';
import './js/active-page-link.js';
import createSwitch, { deleteSwitch } from 'switch-button';
import 'switch-button/dist/index.css';
import Pagination from 'tui-pagination';
import Swiper from 'swiper';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './js/supporters.js';
import './js/scroll-up.js';
import './js/block-home-books.js';
import { getCategories } from './js/books-api.js';
import { getPopularBooks } from './js/books-api.js';
import { getBooksByCategory } from './js/books-api.js';
import { getBookInfo } from './js/books-api.js';
import { loaderOn } from './js/preloader.js';
import { loaderOff } from './js/preloader.js';

import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/dark-theme.js';
import { showError } from './js/block-home-books.js';
import { createCategoriesList } from './js/category_home.js';
import './js/selected_category.js';
import { categoriesList } from './js/category_home.js';
import { onCategoryClick } from './js/selected_category.js';

import { onSeeMoreClick } from './js/selected_category.js';

import './js/modal-open.js';

async function renderMainCategoriesList() {
  loaderOn();
  try {
    const data = await getCategories();
    const res = data.map(obj => obj.list_name).toSorted();
    createCategoriesList(res);
  } catch (err) {
    showError(err);
  }
  loaderOff();
}

categoriesList.addEventListener('click', onCategoryClick);
refs.mainContainer.addEventListener('click', onSeeMoreClick);

renderMainCategoriesList();
