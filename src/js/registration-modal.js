const signUpButton = document.querySelector('[data-sign="up"]');
const signInButton = document.querySelector('[data-sign="in"]');

signUpButton.addEventListener('click', () => {
  signUpButton.classList.add('is-active');
  signInButton.classList.remove('is-active');
});

signInButton.addEventListener('click', () => {
  signInButton.classList.add('is-active');
  signUpButton.classList.remove('is-active');
});
