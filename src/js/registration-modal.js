// const signUpButton = document.querySelector('[data-sign="up"]');
// const signInButton = document.querySelector('[data-sign="in"]');

// signUpButton.addEventListener('click', () => {
//   if (!signUpButton.classList.contains('is-active')) {
//     signUpButton.classList.add('is-active');
//     signInButton.classList.remove('is-active');
//     openModal();
//   }
// });

// signInButton.addEventListener('click', () => {
//   if (!signInButton.classList.contains('is-active')) {
//     signInButton.classList.add('is-active');
//     signUpButton.classList.remove('is-active');
//     openModal();
//   }
// });

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
    // Збереження даних реєстрації у локальне сховище
    const username = document.querySelector('.username-input').value;
    const email = document.querySelector('.email-input').value;

    // Додати нового користувача до масиву
    const newUser = {
      username,
      email,
      auth: true,
    };

    // Отримати дані користувачів з локального сховища
    const usersDataString = localStorage.getItem('usersData');
    let usersData = [];

    if (usersDataString) {
      usersData = JSON.parse(usersDataString);
    }

    usersData.push(newUser);

    // Оновити дані користувачів у локальному сховищі
    localStorage.setItem('usersData', JSON.stringify(usersData));

    form.reset(); // Очищення полів форми
    closeModal(); // Закриття модального вікна
  }
});

const escapeKeyListener = event => {
  if (event.key === 'Escape') {
    closeModal(); // Закриття модального вікна при натисканні ESC
  }
};

// Додавання слухача з анонімною функцією обробника подій
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal(); // Закриття модального вікна при натисканні ESC
  }
});

// Зняття слухача події з анонімною функцією обробника подій
document.removeEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal(); // Закриття модального вікна при натисканні ESC
  }
});

const authModal = document.querySelector('.auth-modal');

authModal.addEventListener('click', event => {
  event.stopPropagation();
});

backdrop.addEventListener('click', () => {
  closeModal(); // Закриття модального вікна при кліку на бекдроп
});
/* <button
        type="button"
        class="registration__btn"
        data-action="registration"
        aria-label="Registration"
        style="display: flex"
      ></button> */
