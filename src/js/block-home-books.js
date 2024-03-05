import iziToast from 'izitoast';
import { loaderOn } from './preloader.js';
import { loaderOff } from './preloader.js';
import { getPopularBooks } from './books-api.js';
let bookCategory;
export const mainContainer = document.querySelector('.main-content');

function templateBookCard({
  _id,
  author,
  contributor,
  title,
  book_image,
  list_name,
}) {
  bookCategory = list_name;
  return `<li class="book-item" id="${_id}">
                <div class="book-wrapper">
                <img class="book-img" src="${book_image}" alt="${title} ${contributor}" width="335" height="485">
                <div class="book-overlay">
                <p class="book-overlay-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-info">
                <p class="book-info-title">${title}</p>
                <p class="book-info-author">${author}</p>
                </div>
            </li>`;
}

export function templateBookCategoryEl({ books }) {
  const bookCards = books.map(templateBookCard).join('');
  const result =
    `<li class="book-item-home">
                    <h3 class="book-category-title">${bookCategory}</h3>
                    <ul class="books-category-list">` +
    bookCards +
    `</ul>
                    <button class="button see-more-btn" data-js="${bookCategory}">SEE MORE</button>
                </li>`;
  return result;
}

function templateHomeBookMarkup(dataPopularBooks) {
  const markup = dataPopularBooks.map(templateBookCategoryEl).join('');
  const result =
    `<h2 class="books-home-title">Best Sellers <span class="books-home-title-span">Books</span></h2>` +
    `<ul class="books-home-list">` +
    markup +
    `</ul>`;

  return result;
}

export function renderHomeBooksMarkup(dataPopularBooks) {
  const markup = templateHomeBookMarkup(dataPopularBooks);
  mainContainer.innerHTML = markup;
}

export function showError(msg) {
  iziToast.error({
    title: 'Error',
    message: msg,
  });
}
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
renderMainPageBookList();
