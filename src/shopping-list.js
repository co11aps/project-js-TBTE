import refs from './refs';

// Витягуємо дані з Local Storage
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

// Функція для відображення повідомлення про відсутність книг
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
