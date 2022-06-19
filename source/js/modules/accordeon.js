document.querySelector('.footer__nav').classList.remove('accordeon--open');
document.querySelector('.footer__contacts-wrapper').classList.remove('accordeon--open');

document.querySelectorAll('.accordeon').forEach((accordeon) => {
  accordeon.addEventListener('click', () => {
    if (accordeon.classList.contains('accordeon--open')) {
      accordeon.classList.remove('accordeon--open');
    } else {
      document.querySelectorAll('.accordeon').forEach((accordeonItem) => accordeonItem.classList.remove('accordeon--open'));
      accordeon.classList.add('accordeon--open');
    }
  });
});
