// імпортуємо розмітку для картки та клас для роботи із сховищем
import cardTemplate from '../templates/sl-book-card.js';
import LocalStorage from '../js/classes/local-storage.js';
const local = new LocalStorage();

// const shopListBtnRef = document.querySelector('.js-shopping-list-btn');
const categoriesListSecRef = document.querySelector('.categories-list-section');
const galleryRef = document.querySelector('.five-books-cards-wrapper');

// shopListBtnRef.addEventListener('click', onShoppingListBtnClick);

// працює при переході на shopping list
function onShoppingListBtnClick() {
  local.init();
  chooseWhatToRender();
}

// відозмінює сторінку перед самим рендером
function prepareToRender() {
  console.log('We preparing now...');
  categoriesListSecRef.classList.add('visually-hidden');
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
    const markup =
        '<div class="sl-wrap"><p class="sl-text">This page is empty, add some books and proceed to order.</p > <div class="sl-img-container"><img src="/src/images/shopping-list/books-tower.png" alt="Books tower" width="322" height="241"></div></div > ';
  galleryRef.insertAdjacentHTML('beforeend', markup);
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
