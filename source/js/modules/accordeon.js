document.querySelector('.footer__nav').classList.remove('accordeon--open');

document.querySelectorAll('.accordeon__trigger').forEach((accordeonTrigger) => {
  accordeonTrigger.addEventListener('click', () => {
    const accordeonParent = accordeonTrigger.parentNode;

    if (accordeonParent.classList.contains('accordeon--open')) {
      accordeonParent.classList.remove('accordeon--open');
    } else {
      document.querySelectorAll('.accordeon').forEach((accordeon) => accordeon.classList.remove('accordeon--open'));
      accordeonParent.classList.add('accordeon--open');
    }
  });
});
