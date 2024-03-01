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

import { getCategories } from './js/books-api.js';
import { getPopularBooks } from './js/books-api.js';
import { getBooksByCategory } from './js/books-api.js';
import { getBookInfo } from './js/books-api.js';

import { renderHomeBooksMarkup } from './js/block-home-books.js';

const popularBooks = getPopularBooks();

renderHomeBooksMarkup(popularBooks);
