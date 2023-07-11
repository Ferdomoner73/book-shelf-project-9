const toTopBtn = document.querySelector('.btn-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    toTopBtn.classList.add('btn-to-top--visible');
  } else {
    toTopBtn.classList.remove('btn-to-top--visible');
  }
});
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});
