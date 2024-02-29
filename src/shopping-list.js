import refs from './refs';

// Витягуємо дані з Local Storage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Функція для відображення повідомлення про відсутність книги
function showEmptyMessage() {
  const mainList = document.querySelector('.main-list');
  const emptyMessageMarkup = `
    <div class="empty-message">
      <p>No books in the shopping list</p>
      <img src="images/books-stack-mobile.png" alt="Empty Book Stack" />
    </div>
  `;
  mainList.innerHTML = emptyMessageMarkup;
}
// Функція для відображення книг на сторінці
function renderShoppingList() {
  const mainList = document.querySelector('.main-list');

  // Перевіряємо, чи є книги у списку
  if (shoppingList.length === 0) {
    showEmptyMessage();
    return;
  }
}

renderShoppingList();
