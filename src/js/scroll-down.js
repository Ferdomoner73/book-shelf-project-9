const toDownBtn = document.querySelector('.btn-to-down');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1050) {
    toDownBtn.classList.add('btn-to-down--visible');
  } else {
    toDownBtn.classList.remove('btn-to-down--visible');
  }
});
