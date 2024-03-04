import refs from './js/refs.js';
import './js/active-page-link.js';
import createSwitch, { deleteSwitch } from 'switch-button';
import 'switch-button/dist/index.css';
import Pagination from 'tui-pagination';
import Swiper from 'swiper';
import 'swiper/css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import './js/supporters.js';
import './js/scroll-up.js';
import { getCategories } from './js/books-api.js';
import { getPopularBooks } from './js/books-api.js';
import { getBooksByCategory } from './js/books-api.js';
import { getBookInfo } from './js/books-api.js';
import { loaderOn } from './js/preloader.js';
import { loaderOff } from './js/preloader.js';

import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/buttom-switch.js';
import './js/dark-theme.js';
import { renderHomeBooksMarkup } from './js/block-home-books.js';
import { showError } from './js/block-home-books.js';
import { createCategoriesList } from './js/category_home.js';
import './js/selected_category.js';
import { categoriesList } from './js/category_home.js';
import { onCategoryClick } from './js/selected_category.js';
import './js/dark-theme.js';

import { onSeeMoreClick } from './js/selected_category.js';
import { mainContainer } from './js/block-home-books.js';

import './js/modal-open.js';

async function renderMainPageBookList() {
  loaderOn();
  try {
    const data = await getPopularBooks();
    renderHomeBooksMarkup(data);
  } catch (err) {
    showError(err);
  }
  loaderOff();
}

async function renderMainCategoriesList() {
  loaderOn();
  try {
    const data = await getCategories();
    createCategoriesList(data);
  } catch (err) {
    showError(err);
  }
  loaderOff();
}

categoriesList.addEventListener('click', onCategoryClick);

renderMainCategoriesList();

renderMainPageBookList();
