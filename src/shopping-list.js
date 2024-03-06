import './js/active-page-link.js';
import './js/buttom-switch.js';
import './js/active-page-menu.js';
import './js/mobile-menu.js';
import './js/active-page-link.js';
import './js/buttom-switch.js';
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
let storedBooks = [];
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
// Функція для відображення списку книг
async function renderBooks() {
  try {
    const storedBooks = await getStoredBooks();
    shoppingListUl.innerHTML = '';
    if (Array.isArray(storedBooks) && storedBooks.length > 0) {
      storedBooks.forEach(book => {
        const li = document.createElement('li');
        li.appendChild(createBookCard(book));
        shoppingListUl.appendChild(li);
      });
    } else {
      // Якщо немає збережених книг, вивести повідомлення про відсутність
      shoppingListUl.appendChild(emptyMessageContainer);
    }
  } catch (error) {
    console.error('Error rendering books:', error);
  }
}
// Функція для створення карти книги
function createBookCard(book) {
  const { title, list_name, description, author, _id, buy_links, book_image } =
    book;
  const card = document.createElement('div');
  card.classList.add('book-card');

  card.innerHTML = `
    <div class="card-book">
  <img class="book-cover" src="${book_image}" alt="${title}" id="${_id}" />
  <div class="shopping-list-img-description">
    <h2 class="book-title">${title}</h2>
    <h3 class="book-category">${list_name}</h3>
    <p class="book-description">${description}</p>
    <p class="book-author">${author}</p>
    <ul class="storage-shops">
      <li class="list-shop">
        <a href="${buy_links[0].url}" target="_blank" aria-label="Buy on Amazon" class="storage-shop-link">
          <img class="amazon" width="32" height="11"  src="${amazonLogo}" alt="Shop Logo" />
        </a>
      </li>
      <li class="list-shop">
        <a href="${buy_links[1].url}" target="_blank" aria-label="Buy in Apple books" class="storage-shop-link">
          <img class="book-shop" width="16" height="16" src="${appleBooksLogo}" alt="Shop Logo" />
        </a>
      </li>
    </ul>
    <button aria-label="Delete book" type="button"class="remove-book-btn" data-book-id="${_id}">
      <svg width="38" height="38" class="remove-icon">
        <use xlink:href="${iconsDelete}#icon-dump"></use>
      </svg>
    </button>
  </div>
</div>
  `;
  return card;
}
// Функція для видалення елемента з localStorage за ID
async function removeBookFromLocalStorage(bookId) {
  try {
    const storedBooks = await getStoredBooks();
    const updatedBooks = storedBooks.filter(book => book._id != bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBooks));
    renderBooks(updatedBooks);
  } catch (error) {
    console.error('Error removing book from localStorage:', error);
  }
}
const container = document.querySelector('.shopping-list');
container.addEventListener('click', async event => {
  const removeButton = event.target.closest('.remove-book-btn');
  if (removeButton) {
    const bookId = removeButton.getAttribute('data-book-id');
    await removeBookFromLocalStorage(bookId);
  }
});
renderBooks();
