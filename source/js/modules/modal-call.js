const orderButton = document.querySelector('.header__contacts-button-link');
const modalCall = document.querySelector('.modal-call');
const pageBody = document.querySelector('.page__body');
const buttonCloseModal = document.querySelector('.modal-call__button-close');
const nameInput = document.querySelector('#name-call');
const approvalInput = document.querySelector('#approval-call');
const inputFirst = document.querySelector('#modal-input-first');
const inputLast = document.querySelector('#modal-input-last');

if (modalCall) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalCall.classList.toggle('modal-call--open');
    pageBody.classList.toggle('page__body--opened-modal');
    nameInput.focus();
  });
  buttonCloseModal.addEventListener('click', () => {
    modalCall.classList.toggle('modal-call--open');
    pageBody.classList.toggle('page__body--opened-modal');
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (modalCall.classList.contains('modal-call--open')) {
        modalCall.classList.remove('modal-call--open');
      }
      if (pageBody.classList.contains('page__body--opened-modal')) {
        pageBody.classList.remove('page__body--opened-modal');
      }
    }
  });
  modalCall.addEventListener('click', (evt) => { // при клике на оверлей
    const target = evt.target; // находим элемент, на котором был клик
    if (!target.closest('.modal-call__container')) { // если этот элемент или его родительские элементы не модальное окно
      modalCall.classList.remove('modal-call--open'); // убираем класс открытой модалки
      pageBody.classList.remove('page__body--opened-modal'); // убираем оверлей
    }
  });
  inputLast.addEventListener('focus', () => {
    buttonCloseModal.focus();
  });
  inputFirst.addEventListener('focus', () => {
    approvalInput.focus();
  });
}
