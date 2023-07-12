import _ from 'lodash';
import { loaderShow, loaderHidden } from './loader';

// // CODE FOR RENDERING MAINPAGE

const galleryRef = document.querySelector('.five-books-cards-wrapper');
const galleryListRef = document.querySelector('.gallery-list');

function createMainPageCard(book) {
  return `<li class="gallery-list-item">
    <div class="gallery-list-item-wrapper" data-book-id="${book._id}">
      <div class="overlay-card-wrapper">
      <img
        src="${book.book_image}"
        alt="Book"
        width="100%"
        height="100%"
        class="gallery-book-img"
        loading="lazy"

      />
      <p class="cards-quick-view-wrapper">quick view</p>
    </div>
      <div class="card-subtitle-and-description-wrapper">
        <p class="gallery-list-item-subtitle">${book.title}</p>
        <p class="gallery-list-item-description">${book.author}n</p>
      </div>
    </div>
  </li>`;
}
async function fetchingTopBooks() {
  try {
    const url = 'https://books-backend.p.goit.global/books/top-books';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

renderingHomePage()
function renderingHomePage() {
  galleryRef.innerHTML = '';
  fetchingTopBooks().then(response => {
    galleryRef.insertAdjacentHTML(
      'beforeend',
      '<h2 class="gallery-title">Best Sellers <span class="blue-title-color">Books</span></h2>'
    );
    for (let elem of response) {
      galleryRef.insertAdjacentHTML(
        'beforeend',
        `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
            <ul class="gallery-list"></ul>`
      );
      let mainPageCategories = document.querySelectorAll('.gallery-list');
      const galleryListRef = mainPageCategories[mainPageCategories.length - 1];
      for (let i = 0; i < 5; i++) {
        galleryListRef.insertAdjacentHTML(
          'beforeend',
          createMainPageCard(elem.books[i])
        );
      }
      galleryRef.insertAdjacentHTML(
        'beforeend',
        `<button class="see-more-button" data-category="${elem.books[0].list_name}">See more</button>`
      );
    }
    loaderHidden();
  });
}

// Render Cards by Category CODE

export async function fetchByCategory(category) {
  try {
    const url = `https://books-backend.p.goit.global/books/category?category=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function createMoreBooks(booksArr) {
  const bookCard = booksArr
    .map(book => {
      const markup = `<li class="gallery-list-item-each-category">
            <div class="gallery-list-item-wrapper" data-book-id="${book._id}">
               <div class="overlay-card-wrapper">
               <img
                 src="${book.book_image}"
                 alt="Book"
                 width="100%"
                 height="100%"
                 class="gallery-book-img"
                 loading="lazy"
                 id="${book._id}"
              />
              <p class="cards-quick-view-wrapper">quick view</p>
             </div>
               <div class="card-subtitle-and-description-wrapper">
                 <p class="gallery-list-item-subtitle">${book.title}</p>
                 <p class="gallery-list-item-description">${book.author}n</p>
               </div>
             </div>
           </li>`;

      return markup;
    })
    .join('');

  return bookCard
}

galleryRef.addEventListener('click', handleCategoryOnButton)

function handleCategoryOnButton(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
  console.dir(e.target.nodeName)

  galleryRef.innerHTML = '';
  const categoryNameByButton = e.target.dataset.category
  galleryRef.innerHTML = `<h2>${categoryNameByButton}</h2>`;
  galleryRef.insertAdjacentHTML('beforeend', `<ul class="gallery-list-each-category container"></ul>`)
  
  const galleryListUl = galleryRef.lastElementChild;
  fetchByCategory(categoryNameByButton).then(response => {
        galleryListUl.insertAdjacentHTML('beforeend', createMoreBooks(response));
    })
}
