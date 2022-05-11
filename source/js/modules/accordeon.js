document.querySelector('.footer__nav').classList.remove('accordeon--open');
document.querySelector('.footer__contacts-wrapper').classList.remove('accordeon--open');

document.querySelectorAll('.accordeon').forEach((accordeon) => {
  accordeon.addEventListener('click', () => {
    const accordeonParent = accordeon.parentNode;

    if (accordeonParent.classList.contains('accordeon--open')) {
      accordeonParent.classList.remove('accordeon--open');
    } else {
      document.querySelectorAll('.accordeon').forEach((accordeon) => accordeon.classList.remove('accordeon--open'));
      accordeonParent.classList.add('accordeon--open');
    }
  });
});
