import refs from './js/refs';

document.addEventListener('DOMContentLoaded', function () {
  const shoppingListContainer = document.getElementById(
    'shopping-list-container'
  );
  if (!shoppingListContainer) {
    console.error('Shopping list container not found.');
    return;
  }

  const STORAGE_KEY = 'storage-of-books';
  const storedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; // Отримуємо дані з localStorage || створюємо порожній масив, якщо дані відсутні

  //Перевірка наявності книг
  if (storedBooks.length > 0) {
    renderBooksList(storedBooks);
  } else {
    showNoBooksMessage();
  }

  // перетворення масиву книг у рядок
  function renderBooksList(books) {
    refs.shoppingListContainer.innerHTML = books
      .map(book => `<div>${book.title}</div>`)
      .join('');
  }

  //повідомлення про відображення книг в Local Storage
  function showNoBooksMessage() {
    const emptyMessageContainer = document.createElement('div');
    emptyMessageContainer.classList.add('empty-message');
    emptyMessageContainer.innerHTML = `
    <p>This page is empty, add some books and proceed to order.</p>
    <img src="images/books-stack-mobile.png" alt="Empty Book Stack" />
  `;

    refs.shoppingListContainer.prepend(emptyMessageContainer);
  }
});
