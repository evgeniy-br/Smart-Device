const anchor = document.querySelector('.preview__link');

if (anchor) {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};
