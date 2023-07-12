import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';

import { fetchByCategory, createMoreBooks } from './gallery.js'


const categoriesContainer = document.querySelector('.categories-list-container');
const galleryRef = document.querySelector('.five-books-cards-wrapper');
new SimpleBar(categoriesContainer);



const categoriesListEl = document.querySelector('.categories-list');

async function getCategoriesList() {
    try {
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
    const listOfCategories = data.map((array) => {
        return `
    <li class='categories-list-item'>
            <p class='categories-list-text'>${array.list_name}</p>
    </li>
    `}).join('');

    categoriesListEl.insertAdjacentHTML('beforeend', listOfCategories);
}

categoriesListEl.addEventListener('click', handleClickOnList)

function handleClickOnList(e) {
    galleryRef.innerHTML = '';
    if (!e.target.classList.contains('categories-list-text')) {
        return
    }

    galleryRef.innerHTML = `<ul class="gallery-list-each-category container"></ul>`;
    const galleryListUl = galleryRef.children[0];
    console.log(galleryListUl)

    const categoryName = e.target.textContent;
    console.dir(categoryName)
    fetchByCategory(categoryName).then(response => {
        console.log(response)
        galleryListUl.insertAdjacentHTML('beforeend', createMoreBooks(response));
    })
}


