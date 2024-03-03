export const STORAGE_KEY = 'storage-of-books';


const temporaryShoppingList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const shoppingList =


export function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shoppingList));
}

export function handleBookInStorage(data) {
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );

  if (isBookId) {
    const dataBookID = document.querySelector('.modal-pop-up-btn').getAttribute('data_id_of_book');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === dataBookID
    );

    shoppingList.splice(bookIndex, 1);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(temporaryShoppingList));
    refs.addBtnEL.textContent = 'Add to shopping list';

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(shoppingList)
    );
    document.querySelector('.modal-pop-up-btn').textContent = 'Add to shopping list';

    modalMessage.remove();
    return;
  }

  addToStorage(data);

  refs.addBtnEL.textContent = 'Remove from the shopping list';
  refs.addBtnEL.after(modalMessage);


  document.querySelector('.modal-pop-up-btn').textContent = 'Remove from the shopping list';
  document.querySelector('.modal-pop-up-btn').after(modalMessage);
}  

