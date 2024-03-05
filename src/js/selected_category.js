import { mainContainer } from './block-home-books';
import { loaderOn } from './preloader';
import { loaderOff } from './preloader';
import { getBooksByCategory } from './books-api';
import { getPopularBooks } from './books-api';
import { renderHomeBooksMarkup } from './block-home-books';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showError } from './block-home-books.js';
import { scrollToStart } from './scroll-up.js';

export async function currentCategoryTogle(value) {
  await document
    .querySelector('.js-current-category')
    .classList.remove(`js-current-category`);
  document
    .querySelector(`li[data-category="${value}"]`)
    .classList.add(`js-current-category`);
}

export async function onCategoryClick(el) {
  el.preventDefault();

  if (el.target.classList.contains('category-item')) {
    mainContainer.innerHTML = '';
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
        mainContainer.innerHTML = await makeCategoryPage(
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
}) {
  return `<li class="book-item" id=${_id} >  
    <div class="books_wrapper"> 
    <img loading="lazy" class="books_image" src="${book_image}"  alt="${description}" loading="lazy"  /> 
    <div class="books_overlay"> 
    <p class="books_overlay-text">QUICK VIEW</p> 
    </div> 
    </div> 
    <div class="books_info">  
    <p class="books_info-title">${title}</p>  
    <p class="books_info-author">${author}</p>  
    </div>  
    </li>`;
}

export async function onSeeMoreClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('see-more-btn')) {
    scrollToStart();
    const requestedCategory = event.target.dataset.js;
    mainContainer.innerHTML = '';
    loaderOn();
    try {
      const data = await getBooksByCategory(`${requestedCategory}`);
      mainContainer.insertAdjacentHTML(
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
    mainContainer.innerHTML = '';
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
