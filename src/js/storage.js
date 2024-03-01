const STORAGE_KEY = 'storage-of-books';

const shoppingList =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}