const hamburger = document.querySelector(
  '.hamburger[aria-controls="nav-list"]'
);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  document.documentElement.classList.toggle('showing-mobile-nav');
  document
    .querySelector('.header__nav-list')
    .classList.toggle('header__nav-list--expanded');
});
