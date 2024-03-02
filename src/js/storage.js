const STORAGE_KEY = 'storage-of-books';

const shoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}

function handleBookInStorage(data) {
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );

  if (isBookId) {
    const dataBookID = refs.addBtnEL.getAttribute('data_id_of_book');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === dataBookID
    );

    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
    refs.addBtnEL.textContent = 'Add to shopping list';
    modalMessage.remove();
    return;
  }

  addToStorage(data);
  refs.addBtnEL.textContent = 'Remove from the shopping list';
  refs.addBtnEL.after(modalMessage);
}
