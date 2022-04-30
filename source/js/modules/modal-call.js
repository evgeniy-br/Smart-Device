const orderButton = document.querySelector('.header__contacts-button-link');
const modalCall = document.querySelector('.modal-call');
const pageBody = document.querySelector('.page__body');
const buttonCloseModal = document.querySelector('.modal-call__button-close');
const nameInput = document.querySelector('#name-call');

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
  window.addEventListener('click', (evt) => { // при клике в любом месте окна браузера
    const target = evt.target; // находим элемент, на котором был клик
    if (!target.closest('.modal-call') && !target.closest('.header__contacts-button-link')) { // если этот элемент или его родительские элементы не модальное окно
      modalCall.classList.remove('modal-call--open'); // убираем класс открытой модалки
      pageBody.classList.remove('page__body--opened-modal'); // убираем оверлей
    }
  });
}
