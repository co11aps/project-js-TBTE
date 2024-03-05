import { getBookInfo } from './books-api'; //імпорт функціі яка бере данні з сервера (api)
import { handleBookInStorage } from './storage'; /* ==імпорт функці== */
export const modalClose = () => {
  const refsModal = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalShopigListBtn: document.querySelector('.modal-pop-up-btn'),
  }; //знаходження дома//
  refsModal.modalShopigListBtn.addEventListener('click', onUpdateStorage); //вішаєм на кнопку слухача для додавання і видалення з локал сторедж//

  refsModal.openModalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  refsModal.closeModalBtn.addEventListener('click', closeModal);
  refsModal.modal.addEventListener('click', removeModal);
  document.addEventListener('keydown', onEscapeKey);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function toggleModal() {
    refsModal.modal.classList.toggle('is-hidden');
    refsModal.modal.classList.toggle('is-open');

    if (refsModal.modal.classList.contains('is-hidden')) {
      document.body.classList.add('no-scroll');
      document.addEventListener('keydown', onEscapeKey);
      refsModal.closeModalBtn.addEventListener('click', closeModal);
      refsModal.modal.addEventListener('click', removeModal);
    } else {
      enableBodyScroll();
      removeEventListeners();
    }
  }

  function closeModal() {
    refsModal.modal.classList.add('is-hidden');
    enableBodyScroll();
    removeEventListeners();
  }

  function onEscapeKey(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  function enableBodyScroll() {
    document.body.classList.remove('no-scroll');
  }

  function removeEventListeners() {
    refsModal.openModalBtn.forEach(element => {
      element.removeEventListener('click', toggleModal);
    });
    refsModal.closeModalBtn.removeEventListener('click', closeModal);
    refsModal.modal.removeEventListener('click', removeModal);
    document.removeEventListener('keydown', onEscapeKey);
  }
};

//змінюємо інформацію котра знаходиться в сторедж
async function onUpdateStorage(event) {
  const id = event.target.previousElementSibling.firstElementChild.id;
  console.log(id);
  const data = await getBookInfo(id);
  handleBookInStorage(data);
}
