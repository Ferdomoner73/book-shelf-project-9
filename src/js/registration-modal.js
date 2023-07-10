const signUpButton = document.querySelector('[data-sign="up"]');
const signInButton = document.querySelector('[data-sign="in"]');

signUpButton.addEventListener('click', event => {
  event.stopPropagation();
  signUpButton.classList.add('is-active');
  signInButton.classList.remove('is-active');
  openModal();
});

signInButton.addEventListener('click', event => {
  event.stopPropagation();
  signInButton.classList.add('is-active');
  signUpButton.classList.remove('is-active');
  openModal();
});

const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('login-modal');
const closeButton = document.querySelector('.modal-close-btn');

// Функція для відкриття модального вікна
function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

// Додати обробник події для кнопки закриття
closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

// Додати обробник події для відкриття модального вікна
// Наприклад, при кліку на кнопку "Sign up"
// const signUpButton = document.querySelector('[data-sign="up"]');
// signUpButton.addEventListener('click', openModal);

const form = document.querySelector('.modal-form');
const submitBtn = document.querySelector('.modal-submit-up-btn');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  form.reportValidity(); // Перевірка валідності форми

  if (form.checkValidity()) {
    form.reset(); // Очищення полів форми
    closeModal(); // Закриття модального вікна
  }
});

const escapeKeyListener = event => {
  if (event.key === 'Escape') {
    closeModal(); // Закриття модального вікна при натисканні ESC
  }
};

document.addEventListener('keydown', escapeKeyListener);

// Для зняття слухача події використовуйте removeEventListener:
document.removeEventListener('keydown', escapeKeyListener);
