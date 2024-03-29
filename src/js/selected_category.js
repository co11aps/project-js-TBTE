import { loaderOn } from './preloader';
import { loaderOff } from './preloader';
import { getBooksByCategory } from './books-api';
import { getPopularBooks } from './books-api';
import { renderHomeBooksMarkup } from './block-home-books';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showError } from './block-home-books.js';
import { scrollToStart } from './scroll-up.js';
import refs from './refs';

export async function currentCategoryTogle(value) {
  await document
    .querySelector('.js-current-category')
    .classList.remove(`js-current-category`);
  document
    .querySelector(`button[data-category="${value}"]`)
    .classList.add(`js-current-category`);
}

export async function onCategoryClick(el) {
  el.preventDefault();

  if (el.target.classList.contains('category-button')) {
    refs.mainContainer.innerHTML = '';
    currentCategoryTogle(el.target.dataset.category);

    if (el.target.dataset.category === `all categories`) {
      try {
        const response = await getPopularBooks();
        loaderOn();
        renderHomeBooksMarkup(response);
        currentCategoryTogle(el.target.dataset.category);
        loaderOff();
      } catch (err) {
        showError(err);
      }
      return;
    } else {
      try {
        const data = await getBooksByCategory(`${el.target.dataset.category}`);
        refs.mainContainer.innerHTML = await makeCategoryPage(
          `${el.target.dataset.category}`,
          data
        );
        currentCategoryTogle(el.target.dataset.category);
        loaderOff();
      } catch (err) {
        showError(err);
      }
    }
  }
}

export async function makeCategoryPage(category, data) {
  const title = category.split(' ');
  return ` 
    <h2 class="block_books-title"
  >${title
    .splice(0, title.length / 2)
    .join(' ')} <span class="block_books-colortitle">${title
    .splice(title.length / 2, title.length)
    .join(' ')}</span></h2> 
          <ul class="block_books-list">${await makeListOfBooks(data)}</ul>
          <button class="button all-categories_btn" data-js="All Categories" aria-label="All categories">All Categories</button>`;
}

export async function makeListOfBooks(data) {
  return data.map(categoryBookCard).join('');
}

export function categoryBookCard({
  author,
  book_image,
  title,
  description,
  _id,
  contributor,
}) {
  return `<li class="book-li-item">
    <button type="button" class="book-item" id="${_id}" aria-label="${title} ${contributor}">  
    <div class="books_wrapper"> 
    <img class="books_image" src="${book_image}"  alt="${description}" loading="lazy" width="335" height="485" /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${title}</p>  
    <p class="books_info-author">${author}</p>  
    </div>
    </button>
    </li>`;
}

export async function onSeeMoreClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('see-more-btn')) {
    scrollToStart();
    const requestedCategory = event.target.dataset.js;
    refs.mainContainer.innerHTML = '';
    loaderOn();
    try {
      const data = await getBooksByCategory(`${requestedCategory}`);
      refs.mainContainer.insertAdjacentHTML(
        'beforeend',
        await makeCategoryPage(`${requestedCategory}`, data)
      );
      currentCategoryTogle(`${requestedCategory}`);
      loaderOff();
    } catch (err) {
      showError(err);
    }
  } else if (event.target.classList.contains('all-categories_btn')) {
    scrollToStart();
    refs.mainContainer.innerHTML = '';
    try {
      const response = await getPopularBooks();
      loaderOn();
      renderHomeBooksMarkup(response);
      currentCategoryTogle('all categories');
      loaderOff();
    } catch (err) {
      showError(err);
    }
  }
}
