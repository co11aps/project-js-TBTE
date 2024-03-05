export const STORAGE_KEY = 'storage-of-books';

export const shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export function removeBook(bookId) {
  const updatedShoppingList = shoppingList.filter(book => book._id !== bookId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedShoppingList));
  return updatedShoppingList;
}

export function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}
export function handleBookInStorage(book) {
  const isBookId = checkInLocalStorage(book._id);
  upDateModalMarkup(isBookId);
  if (isBookId) {
    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === book._id
    );

    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));

    return;
  }

  addToStorage(book);
}

//перевіряєм чи є книга в Локал сторедж
export function checkInLocalStorage(id) {
  const isBookId = shoppingList.find(bookInStorage => bookInStorage._id === id);
  return isBookId;
}

/* функція перемальовуєм кнопку в модалці. 
Знаходимо кнопки і зміню\мо текс в залежності наявності в локал сторедж. 
Знаходимо параграф з текстом під кнопкою видаляємо чи показуємо*/
export function upDateModalMarkup(isActive) {
  if (isActive) {
    document.querySelector('.modal-pop-up-btn').textContent =
      'Add to shopping list';
    document.querySelector('.modal-pop-up-message').classList.add('hidden');
  } else {
    document.querySelector('.modal-pop-up-btn').textContent =
      'Remove from the shopping list';
    document.querySelector('.modal-pop-up-message').classList.remove('hidden');
  }
}
