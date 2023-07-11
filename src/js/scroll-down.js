const toDownBtn = document.querySelector('.btn-to-down');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1200) {
    toDownBtn.classList.add('btn-to-down--visible');
  } else {
    toDownBtn.classList.remove('btn-to-down--visible');
  }
});
