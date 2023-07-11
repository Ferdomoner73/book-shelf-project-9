// // імпортуємо розмітку для картки та клас для роботи із сховищем
// import cardTemplate from '../templates/sl-book-card.js';
// import LocalStorage from './Classes/local-storage.js';
// const local = new LocalStorage();


// // функція, що приймає масив об'єктів і рендерить картки
// function renderShopListBookCards(data) {
//   console.log("it is render function")
//   const markup = data.map(cardTemplate).join('');
//   document.body.insertAdjacentHTML('afterbegin', markup)
// }

// const containerRef = document.querySelector('.sl-card-list');
// // тимчасові елементи, що замінюють хедер і поп ап
// const btnAddRef = document.querySelector('.js-shopping-add-book');
// const btnRef = document.querySelector('.js-shopping-list-btn');
// let counter = 0;

// btnRef.addEventListener('click', onShoppingListBtnClick);
// btnAddRef.addEventListener('click', addBookToStorage);

// // працює при переході на shopping list
// function onShoppingListBtnClick() {
//   prepareToRender();
//   local.init();
//   chooseWhatToRender();
// }

// // перевіряє чи є що відображати з сховища
// function chooseWhatToRender() {
//   const savedList = local.getBooks();
//   if (!savedList.length) {
//     renderNothingToShow();
//     return;
//   }
//   renderBooksCards(savedList);
// }

// // якщо нема що відобразити
// function renderNothingToShow() {
//   // вставити необхідне 
//   containerRef.innerHTML = '';
//   console.log('There is nothing to show');
// }

// // відмальовує збережені в сховищі об'єкти та додає слухач на видалення
// function renderBooksCards(data) {
//   console.log('Let me show what we have?');
//   renderShopListBookCards(data);
//   // вставити необхідне
//   containerRef.addEventListener('click', onDeleteBtnClick);
// }

// // видаляє картку з сховища по кліку на кнопці видалення
// function onDeleteBtnClick({ target }) {
//   // вставити необхідне
//   if (!target.classList.contains('sl-card-delete-btn')) return;
//   // вставити необхідне
//   local.deleteBookById(target.parentElement.id);
//   chooseWhatToRender();
// }

// // відозмінює сторінку перед самим рендером
// function prepareToRender() {
//   console.log('We preparing now...');
// }


// //тимчасова функція для отримання даних та їх завантаження у сховище
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
