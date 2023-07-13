const signUpButton = document.querySelector('[data-sign="up"]');
const signInButton = document.querySelector('[data-sign="in"]');
const nameInput = document.querySelector('.username-input');
const submitButton = document.querySelector('.modal-submit-up-btn');
const submitButtonIn = document.querySelector('.modal-submit-in-btn')
const registrationButton = document.querySelector('.auth__modal-open-js');
const secondaryRegistrationButton = document.querySelector('.registration__btn');
const userButton = document.querySelector('.auth-btn__user-js');

const BtnRegEl = document.querySelector('.registration__btnMain');
const BtnUserEl = document.querySelector('.auth-btn__user');
const BtnHomeEl = document.querySelector('.nav__link_home');
const BtnShoplistEl = document.querySelector('.nav__link_shopping');
const BtnLogoutEl = document.querySelector('.auth-btn__logOut');

const BtnRegElM = document.querySelector('.registration__btnMain-js');
const BtnUserElM = document.querySelector('.auth-btnM__user-js');
const BtnHomeElM = document.querySelector('.nav__link_home-js');
const BtnShoplistElM = document.querySelector('.nav__link_shoppingMobile-js');
const BtnLogoutElM = document.querySelector('.auth-btn__logOut-js');

registrationButton.addEventListener('click', openModal);
secondaryRegistrationButton.addEventListener('click', openModal)

if (localStorage.getItem('usersData') !== null) {
  document.addEventListener('DOMContentLoaded', handleContentLoaded);
  console.dir(BtnLogoutElM);
}
// else if () {
//   document.removeEventListener('DOMContentLoaded', handleContentLoaded);
// }
      


signUpButton.addEventListener('click', () => {
  
  if (!signUpButton.classList.contains('is-active')) {
    signUpButton.classList.add('is-active');
    signInButton.classList.remove('is-active');
    nameInput.style.display = 'block';
    submitButton.textContent = 'SIGN UP';
    // submitButtonIn.classList.add('visually-hidden');
    userButton.classList.add('hidden');
    openModal();
  }
});

signInButton.addEventListener('click', () => {
  if (!signInButton.classList.contains('is-active')) {
    signInButton.classList.add('is-active');
    signUpButton.classList.remove('is-active');
    nameInput.style.display = 'none';
    submitButton.classList.add('visually-hidden');
    submitButtonIn.classList.remove('visually-hidden');
    // submitButton.textContent = 'Sign in';
    userButton.classList.remove('hidden');

    openModal();

    const userIdToModal = localStorage.getItem('usersData');
      if (userIdToModal === null) {
        return
    }

    const userParsedDataToModal = JSON.parse(userIdToModal);
    console.dir(userParsedDataToModal[0].password)
    document.querySelector(`.password-input`).value = userParsedDataToModal[0].password;
    document.querySelector(`.email-input`).value = userParsedDataToModal[0].email;
  }
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

const form = document.querySelector('.modal-form');
const submitBtn = document.querySelector('.modal-submit-up-btn');

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  

  const isUsernameValid = document
    .querySelector('.username-input')
    .checkValidity();
  const isEmailValid = document.querySelector('.email-input').checkValidity();
  const isPasswordValid = document
    .querySelector(`.password-input`)
    .checkValidity();

  if (isUsernameValid && isEmailValid && isPasswordValid) {
    const username = document.querySelector('.username-input').value;
    const email = document.querySelector('.email-input').value;
    const password = document.querySelector(`.password-input`).value;

    // Додати нового користувача до масиву
    const newUser = {
      username,
      email,
      password,
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

    renderAllButtons();

    
    
    // Виклик функції для перевірки облікових даних та авторизації
    loginUser(email, password);
      
    
  } else {
    // Виконати додаткові дії, якщо форма не пройшла валідацію
    // Наприклад, показати повідомлення про помилку або виділити невалідні поля
  }
});

function loginUser(email, password) {

  // Перевірити облікові дані користувача та встановити статус авторизації

  // Приклад реалізації:
  const usersDataString = localStorage.getItem('usersData');
  const usersData = JSON.parse(usersDataString);

  const user = usersData.find(
    userData => userData.email === email && userData.password === password
  );

  if (user) {
    // Зберегти статус авторизації в локальному сховищі
    const userData = {
      auth: true,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Зміна видимості кнопок після авторизації
    registrationButton.classList.add('hidden');
    userButton.classList.remove('hidden');
  }

  
}

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

// Перевірка авторизації при завантаженні сторінки
const isLoggedIn = checkAuthorizationStatus();

if (isLoggedIn) {
  registrationButton.classList.add('hidden');
  userButton.classList.remove('hidden');
} else {
  registrationButton.classList.remove('hidden');
  userButton.classList.add('hidden');
}

export function checkAuthorizationStatus() {
  // Перевірка, чи користувач авторизований
  // Повернення true, якщо користувач авторизований, або false в іншому випадку

  // Приклад реалізації:
  const userDataString = localStorage.getItem('userData');
  const userData = JSON.parse(userDataString);

  if (userData && userData.auth === true) {
    return true; // Користувач авторизований
  } else {
    return false; // Користувач не авторизований
  }
}

submitButtonIn.addEventListener('click', handleSingIn);

function handleSingIn(e) {
  e.preventDefault();

  closeModal();

  renderAllButtons();
}

function handleContentLoaded(e) {
      console.dir(e)
      const userId = localStorage.getItem('usersData');
      console.dir(userId)
      if (userId === null) {
        return
      }

    renderAllButtons();
  
    const userParsedData = JSON.parse(userId);
    console.dir(userParsedData)
}

function renderAllButtons() {
    BtnRegEl.classList.add('visually-hidden');
    BtnUserEl.classList.remove('visually-hidden');
    BtnHomeEl.classList.remove('visually-hidden');  
  BtnShoplistEl.classList.remove('visually-hidden');
  
  BtnLogoutEl.addEventListener('click', () => {
      
      BtnHomeEl.classList.add('visually-hidden'); 
      BtnShoplistEl.classList.add('visually-hidden');
      BtnUserEl.classList.add('visually-hidden');
      BtnLogoutEl.classList.add('visually-hidden');
    BtnRegEl.classList.remove('visually-hidden');
    
    document.removeEventListener('DOMContentLoaded', handleContentLoaded);
  })
  
  BtnUserEl.addEventListener('click', () => {
      if (!BtnLogoutEl.classList.contains('visually-hidden')) {
        BtnLogoutEl.classList.add('visually-hidden')
        return
      }
      BtnLogoutEl.classList.remove('visually-hidden')
    })

    BtnRegElM.classList.add('visually-hidden');
    BtnUserElM.classList.remove('visually-hidden');
    BtnHomeElM.classList.remove('visually-hidden');  
    BtnShoplistElM.classList.remove('visually-hidden');
    BtnLogoutElM.classList.remove('visually-hidden');
  
  BtnLogoutElM.addEventListener('click', () => {
      
      BtnHomeElM.classList.add('visually-hidden'); 
      BtnShoplistElM.classList.add('visually-hidden');
      BtnUserElM.classList.add('visually-hidden');
      BtnLogoutElM.classList.add('visually-hidden');
    BtnRegElM.classList.remove('visually-hidden');

    document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    })
}



