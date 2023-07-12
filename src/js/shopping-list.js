// імпортуємо розмітку для картки, відображення порожнього сховища та клас для роботи із сховищем
import cardTemplate from '../templates/sl-book-card.js';
import nothingToShowMarkup from '../templates/sl-book-nothing-to-show.js';
import LocalStorage from './classes/local-storage.js';
const local = new LocalStorage();

const shopListBtnRef = document.querySelector('.js-shopping-list-btn');
const categoriesListSecRef = document.querySelector('.categories-list-section');
const galleryRef = document.querySelector('.five-books-cards-wrapper');
const supportSectionRef = document.querySelector('.section_supportUkraine');

shopListBtnRef.addEventListener('click', onShoppingListBtnClick);

// працює при переході на shopping list
function onShoppingListBtnClick() {
  local.init();
  chooseWhatToRender();
}

// відозмінює сторінку перед самим рендером
function prepareToRender() {
  categoriesListSecRef.classList.add('visually-hidden');
  const userScreenWidth = window.innerWidth;
  if (userScreenWidth < 1440) {
    supportSectionRef.classList.add('visually-hidden');
  }
  galleryRef.innerHTML =
    '<h2 class="sl-title">Shopping <span class="sl-blue-title">List</span></h2>';
}

// перевіряє чи є що відображати зі сховища
function chooseWhatToRender() {
  const savedList = local.getBooks();
  if (!savedList.length) {
    renderNothingToShow();
    return;
  }
  renderBooksCards(savedList);
}

// якщо нема що відобразити
function renderNothingToShow() {
  prepareToRender();
  galleryRef.insertAdjacentHTML('beforeend', nothingToShowMarkup());
}

// функція, що приймає масив об'єктів і рендерить картки
function renderShopListBookCards(data) {
  prepareToRender();
  const markup = data.map(cardTemplate).join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
}

// відмальовує збережені в сховищі об'єкти та додає слухач на видалення
function renderBooksCards(data) {
  renderShopListBookCards(data);
  galleryRef.addEventListener('click', onDeleteBtnClick);
}

// видаляє картку з сховища по кліку на кнопці видалення
function onDeleteBtnClick({ target }) {
  console.dir(target);
  if (target.classList.contains('sl-card-delete-icon')) {
    local.deleteBookById(target.parentElement.parentElement.parentElement.id);
    chooseWhatToRender();
    return;
  }
  if (target.classList.contains('sl-card-delete-btn')) {
    local.deleteBookById(target.parentElement.id);
    chooseWhatToRender();
    return;
  }
  if (target.classList.contains('sl-card-icon')) {
    local.deleteBookById(target.parentElement.parentElement.id);
    chooseWhatToRender();
    return;
  }
}