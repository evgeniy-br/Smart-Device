const orderButton = document.querySelector('.header__contacts-button-link');
const modalCall = document.querySelector('.modal-call');
const modalCallcontainer = document.querySelector('.modal-call__container');
const pageBody = document.querySelector('.page__body');
const buttonCloseModal = document.querySelector('.modal-call__button-close');
const nameInput = document.querySelector('#name-call');
const interectiveElements = document.querySelectorAll('a, textarea, input, button, [tabindex]');
const interectiveElementsList = [];

if (modalCall) {
  orderButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalCall.classList.toggle('modal-call--open');
    pageBody.classList.toggle('page__body--opened-modal');
    nameInput.focus();
    interectiveElements.forEach((interectiveElement) => {
      if (!modalCall.contains(interectiveElement)) {
        if (interectiveElement.getAttribute('tabindex') !== '-1') {
          interectiveElement.setAttribute('tabindex', '-1');
          interectiveElementsList.push(interectiveElement);
        }
      }
    });
  });
  buttonCloseModal.addEventListener('click', () => {
    modalCall.classList.toggle('modal-call--open');
    pageBody.classList.toggle('page__body--opened-modal');
    let element;
    while (interectiveElementsList.length !== 0) {
      element = interectiveElementsList.pop();
      element.setAttribute('tabindex', '0');
    }
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      if (modalCall.classList.contains('modal-call--open')) {
        modalCall.classList.remove('modal-call--open');
      }
      if (pageBody.classList.contains('page__body--opened-modal')) {
        pageBody.classList.remove('page__body--opened-modal');
      }
      let element;
      while (interectiveElementsList.length !== 0) {
        element = interectiveElementsList.pop();
        element.setAttribute('tabindex', '0');
      }
    }
  });
  modalCall.addEventListener('click', (evt) => { // при клике на оверлей
    const target = evt.target; // находим элемент, на котором был клик
    if (!target.closest('.modal-call__container')) { // если этот элемент или его родительские элементы не модальное окно
      modalCall.classList.remove('modal-call--open'); // убираем класс открытой модалки
      pageBody.classList.remove('page__body--opened-modal'); // убираем оверлей
      let element;
      while (interectiveElementsList.length !== 0) {
        element = interectiveElementsList.pop();
        element.setAttribute('tabindex', '0');
      }
    }
  });
}
