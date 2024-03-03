(() => {
  const refsModal = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refsModal.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });
  refsModal.closeModalBtn.addEventListener("click", toggleModal);

  //* Закривання по кліку на бекдроп

  refsModal.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refsModal.modal.classList.add("is-hidden");
      document.body.classList.remove("no-scroll"); 
    }
  }

  function toggleModal() {
    refsModal.modal.classList.toggle("is-hidden");
    refsModal.modal.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll"); 
  }
})();
