import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';
import { loaderShow, loaderHidden } from './loader';

import { fetchByCategory, createMoreBooks } from './gallery.js';

const categoriesContainer = document.querySelector(
  '.categories-list-container'
);
const galleryRef = document.querySelector('.five-books-cards-wrapper');
new SimpleBar(categoriesContainer);

const categoriesListEl = document.querySelector('.categories-list');
const mainCategoryFromListEl = document.querySelector('.categories-list-text')

let currentCategory = mainCategoryFromListEl.classList;

async function getCategoriesList() {
  try {
    loaderShow();
    const url = 'https://books-backend.p.goit.global/books/category-list';
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

getCategoriesList().then(response => renderCategoriesList(response));

function renderCategoriesList(data) {
  const listOfCategories = data
    .map(array => {
      return `
    <li class='categories-list-item'>
            <p class='categories-list-text'>${array.list_name}</p>
    </li>
    `;
    })
    .join('');

  categoriesListEl.insertAdjacentHTML('beforeend', listOfCategories);
}

categoriesListEl.addEventListener('click', handleClickOnList);

function handleClickOnList(e) {
  if (!e.target.classList.contains('categories-list-text')) {
    return;
  }

  

  galleryRef.innerHTML = '';

  const categoryName = e.target.textContent;
  galleryRef.innerHTML = `<h2 class='each-category-header'>${categoryName}</h2>`;
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<ul class="gallery-list-each-category gallery-each-category-container">
    </ul>`
  );

  const galleryListUl = galleryRef.lastElementChild;

  fetchByCategory(categoryName).then(response => {
    galleryListUl.insertAdjacentHTML('beforeend', createMoreBooks(response));
  });

  if (e.target.classList.contains('active')) {
    return
  } else {
    currentCategory.remove('active');
    e.target.classList.add('active');
    currentCategory = e.target.classList;
  }
}
