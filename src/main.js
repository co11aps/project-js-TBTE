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

import { renderHomeBooksMarkup } from './js/block-home-books.js';
import { createCategoriesList } from './js/category_home.js';

async function renderMainPageBookList() {
  loaderOn();
  const data = await getPopularBooks();
  loaderOff();
  renderHomeBooksMarkup(data);
}

async function renderMainCategoriesList() {
  loaderOn();
  const data = await getCategories();
  loaderOff();
  createCategoriesList(data);
}

renderMainCategoriesList();

renderMainPageBookList();
