(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// console.log(document.querySelector(".header-page").getBoundingClientRect().height);


const { height: headerPageHeight } = document
  .querySelector('.header-page')
  .getBoundingClientRect();
document.body.style.paddingTop = `${headerPageHeight}px`;
  