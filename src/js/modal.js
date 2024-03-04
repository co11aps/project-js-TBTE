(() => {
  const refsModal = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refsModal.openModalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  refsModal.closeModalBtn.addEventListener('click', closeAndEnableScroll);

  refsModal.modal.addEventListener('click', removeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAndEnableScroll();
    }
  });

  function removeModal(e) {
    if (e.target === e.currentTarget) {
      closeAndEnableScroll();
      removeEventListeners();
    }
  }

  function toggleModal() {
    refsModal.modal.classList.toggle('is-hidden');
    refsModal.modal.classList.toggle('is-open');

    if (refsModal.modal.classList.contains('is-open')) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }

  function disableBodyScroll() {
    document.body.classList.add('no-scroll');
  }

  function enableBodyScroll() {
    document.body.classList.remove('no-scroll');
  }

  function closeAndEnableScroll() {
    refsModal.modal.classList.add('is-hidden');
    enableBodyScroll();
    removeEventListeners();
  }

  function removeEventListeners() {
    refsModal.openModalBtn.forEach(element => {
      element.removeEventListener('click', toggleModal);
    });

    refsModal.closeModalBtn.removeEventListener('click', closeAndEnableScroll);
    refsModal.modal.removeEventListener('click', removeModal);
    document.removeEventListener('keydown', onEscapeKey);
  }

  function onEscapeKey(e) {
    if (e.key === 'Escape') {
      closeAndEnableScroll();
      removeEventListeners();
    }
  }
})();
