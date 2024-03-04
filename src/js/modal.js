export const modalClose = () => {
  const refsModal = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

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
