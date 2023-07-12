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
  console.log('We preparing now...');
  categoriesListSecRef.classList.add('visually-hidden');
  const userScreenWidth = window.innerWidth;
  if (userScreenWidth < 1440) {
    supportSectionRef.classList.add('visually-hidden');
  }
  galleryRef.innerHTML =
    '<h2 class="gallery-title">Shopping <span class="blue-title-color">List</span></h2>';
}

// перевіряє чи є що відображати з сховища
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
  console.log('There is nothing to show');
  prepareToRender();
  galleryRef.insertAdjacentHTML('beforeend', nothingToShowMarkup());
}

// функція, що приймає масив об'єктів і рендерить картки
function renderShopListBookCards(data) {
  console.log('it is render function');
  console.log(data);
  prepareToRender();
  const markup = data.map(cardTemplate).join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
}

// відмальовує збережені в сховищі об'єкти та додає слухач на видалення
function renderBooksCards(data) {
  console.log('Let me show what we have?');
  renderShopListBookCards(data);
  galleryRef.addEventListener('click', onDeleteBtnClick);
}

// видаляє картку з сховища по кліку на кнопці видалення
function onDeleteBtnClick({ target }) {
  console.log(target);
  if (!target.classList.contains('sl-card-icon')) return;
  local.deleteBookById(target.parentElement.parentElement.id);
  chooseWhatToRender();
}

// // тимчасові елементи, що замінюють хедер і поп ап
// const btnAddRef = document.querySelector('.js-add-book-btn');
// btnAddRef.addEventListener('click', addBookToStorage);

// // тимчасова функція для отримання даних та їх завантаження у сховище
// let counter = 0;
// function addBookToStorage() {
//   fetch('https://books-backend.p.goit.global/books/top-books')
//     .then(r => r.json())
//     .then(data => {
//       const oneBook = data[0].books;

//       console.dir(oneBook[0]);
//       local.addBook(oneBook[counter]);
//       counter += 1;
//     });
// }
