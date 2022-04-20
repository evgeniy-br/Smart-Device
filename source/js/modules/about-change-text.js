const aboutButton = document.querySelector('.about__button');

aboutButton.addEventListener('click', () => {
  document.querySelector('.about__text-hidden-mobile').classList.toggle('about__text-hidden-mobile--active');
  document.querySelector('.about__hidden-text').classList.toggle('about__hidden-text--active');

  if (aboutButton.innerText.toLowerCase() === 'подробнее') {
    aboutButton.innerText = 'Свернуть';
  } else {
    aboutButton.innerText = 'Подробнее';
  }
});
