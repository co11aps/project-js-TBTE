import './js/active-page-link.js';
import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/active-page-link.js';
import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/storage.js';
import './js/dark-theme.js';
import './js/supporters.js';
import bookStackImageMobile from './images/books-stack-mobile.png';
import bookStackImage from './images/books-stack.png';
import amazonLogo from './images/amazon-logo.png';
import appleBooksLogo from './images/apple-books-logo.png';
import iconsDelete from './images/icons.svg';

import Pagination from 'tui-pagination';
import refs from './js/refs.js';
const boxPagination = document.querySelector('#pagination');

const STORAGE_KEY = 'storage-of-books';
const shoppingListUl = document.querySelector('.shopping-list');

//повідомлення про відсутність книг
const emptyMessageContainer = document.createElement('div');
emptyMessageContainer.classList.add('empty-message');
emptyMessageContainer.innerHTML = `
  <p>This page is empty, add some books and proceed to order.</p>
  <img 
    class="book-stack-image"
    srcset="${bookStackImageMobile} 767w, 
            ${bookStackImage} 768w" 
    sizes="(max-width: 767px) 265px, 100vw" 
    src="${bookStackImage}" 
    alt="Empty Book Stack"  
  />
`;
// let storedBooks = [];
// отримання збережених книг з localStorage
async function getStoredBooks() {
  try {
    const storedBooks = await new Promise((resolve, reject) => {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        resolve(JSON.parse(data));
      } else {
        resolve([]);
      }
    });
    return storedBooks;
  } catch (error) {
    console.error('Error getting stored books:', error);
    throw error;
  }
}
// Функція для створення карти книги
function createBookCard(book) {
  const { title, category, list_name, author, _id, buy_links, book_image } =
    book;
  const card = document.createElement('div');
  card.classList.add('book-card');

  card.innerHTML = `
    <div class="card-book">
  <img class="book-cover" src="${book_image}" alt="${title}" id="${_id}" />
  <div class="shopping-list-img-description">
    <h2 class="book-title">${title}</h2>
    <h3 class="book-category">${category}</h3>
    <p class="book-description">${list_name}</p>
    <p class="book-author">${author}</p>
    <ul class="storage-shops">
      <li class="list-shop">
        <a href="${buy_links[0].url}" target="_blank" class="storage-shop-link">
          <img class="amazon" width="32" height="11"  src="${amazonLogo}" alt="Shop Logo" />
        </a>
      </li>
      <li class="list-shop">
        <a href="${buy_links[1].url}" target="_blank" class="storage-shop-link">
          <img class="book-shop" width="16" height="16" src="${appleBooksLogo}" alt="Shop Logo" />
        </a>
      </li>
    </ul>
    <button class="remove-book-btn" data-book-id="${_id}">
      <svg width="38" height="38" class="remove-icon">
        <use href="./images/icons.svg#icon-dump"></use>
      </svg>
    </button>
  </div>
</div>
  `;

  return card;
}


// ========= PAGINATION ===============


// Функція отримання кількості книжок у Shopping List
function shoppingListCalc() {
  const storedBooksString = localStorage.getItem(STORAGE_KEY);

  if (storedBooksString) {
    const arrayLength = JSON.parse(storedBooksString).length;
    return Number(arrayLength);
  } else {
    console.log("Значення відсутнє у локальному сховищі.");
    return 0;
  }
}


let totalResults = shoppingListCalc();
  console.log('Stored books length:', totalResults);

  // Визначення конфігурації пагінації
          // const itemsPerPage = 3;
  const currentPage = 1;

  const options = {
    totalItems: totalResults,
    itemsPerPage: 3,
    visiblePages: 3,
    page: currentPage,
  };

  // Створення екземпляру пагінації
  const pagination = new Pagination(boxPagination, options);
  console.log(pagination);

// -----

document.querySelector('.container-pagination').classList.add('is-hidden');
// Функція для відображення списку книг
async function renderBooks(totalResults, page) {
  try {
    const storedBooks = await getStoredBooks();
    shoppingListUl.innerHTML = '';

    if (Array.isArray(storedBooks) && storedBooks.length > 0) {
      console.log(storedBooks);

      const startIndex = (page - 1) * 3;
      const endIndex = startIndex + 3;
  
      const firstThreeBooks = storedBooks.slice(startIndex, endIndex);

      firstThreeBooks.forEach(book => {
        const li = document.createElement('li');
        li.appendChild(createBookCard(book));
        shoppingListUl.appendChild(li);
      });

      // Показати пагінацію, якщо кількість книг >= 3
      if (storedBooks.length >= 4) {
        document.querySelector('.container-pagination').classList.remove('is-hidden');
      } else {
        // Приховати пагінацію, якщо кількість книг < 3
        document.querySelector('.container-pagination').classList.add('is-hidden');
      }
    } else {
      // Якщо немає збережених книг, вивести повідомлення про відсутність
      shoppingListUl.appendChild(emptyMessageContainer);
      
      // Приховати пагінацію, якщо кількість книг < 3
      document.querySelector('.container-pagination').classList.add('is-hidden');
    }
  } catch (error) {
    console.error('Error rendering books:', error);
  }
}

renderBooks(totalResults, 1);


pagination.on('beforeMove', (event) => {
    const currentPage = event.page;
  renderBooks(totalResults, currentPage);
  console.log(currentPage);
});

let updatedBooks;
// Функція для видалення книг з LS
async function removeBookFromLocalStorage(bookId) {
  try {
    const storedBooks = await getStoredBooks();
    updatedBooks = storedBooks.filter(book => book._id !== bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));

    // Оновлюємо totalResults після видалення книги
    totalResults = updatedBooks.length;

    renderBooks(totalResults, 1);
  } catch (error) {
    console.error('Error removing book from localStorage:', error);
  }
}



const container = document.querySelector('.shopping-list');
container.addEventListener('click', async event => {
  const removeButton = event.target.closest('.remove-book-btn');
  if (removeButton) {
    const bookId = removeButton.getAttribute('data-book-id');
    console.log('Remove button clicked for book ID:', bookId);
    await removeBookFromLocalStorage(bookId);
    // Оновлення конфігурації пагінації
    pagination.reset();
  }
});

