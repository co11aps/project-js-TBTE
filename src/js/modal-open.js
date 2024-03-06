import { getBookInfo } from './books-api';
import { showError } from './block-home-books';
import { modalClose } from './modal';
import amazonLogo from '../images/amazon-logo.png';
import appleBooksLogo from '../images/apple-books-logo.png';
import { checkInLocalStorage, upDateModalMarkup } from './storage';
import refs from './refs';

let modalBookEl;
refs.booksContainer.addEventListener('click', onBooksContainerClick);

async function onBooksContainerClick(e) {
  modalBookEl = e.target.closest('.book-item');
  refs.modalWindowContent.innerHTML = '';
  if (modalBookEl) {
    refs.modalWindow.classList.remove('is-hidden');
    modalClose();
    try {
      refs.body.classList.add("no-scroll");
      let modalBookId = modalBookEl.id;
      let bookInfo = await getBookInfo(modalBookId);
      renderBookInfoModal(bookInfo);
    } catch (err) {
      showError(err);
    }
  }
}

function templateBookInfoModal({
  book_image,
  contributor,
  description,
  _id,
  title,
  author,
  buy_links,
}) {
  return `<img class="modal-img" src="${book_image}" alt="${title} ${contributor}" id="${_id}" width="278" height="408">
            <div class="modal-img-description">
                <h2 class="modal-book-title">${title}</h2>
                <h3 class="modal-book-author">${author}</h3>
                <p class="modal-book-desc">${description}</p>
                <ul class="modal-shops">
                    <li class="modal-shop">
                        <a href="${buy_links[0].url}" target="_blank" class="modal-shop-link">
                            <img class="amazon" src="${amazonLogo}" alt="Shop Logo">
                        </a>

                    <li class="modal-shop">
                        <a href="${buy_links[1].url}" target="_blank" class="modal-shop-link">
                            <img class="book-shop" src="${appleBooksLogo}" alt="Shop Logo">
                        </a>
                </ul>
            </div>`;
}
function renderBookInfoModal(data) {
  upDateModalMarkup(!checkInLocalStorage(data._id));
  const markup = templateBookInfoModal(data);
  refs.modalWindowContent.insertAdjacentHTML('afterbegin', markup);
}
