// import PerfectScrollbar from 'perfect-scrollbar';
// import 'perfect-scrollbar/css/perfect-scrollbar.css';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.min.css';


const container = document.querySelector('.categories-list-container');
new SimpleBar(container);


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
    console.log(data);
    const listOfCategories = data.map((array) => {
        return `
    <li class='categories-list-item'>
        <a href>
            <p>${array.list_name}</p>
        </a>
    </li>
    `}).join('');

    categoriesListEl.insertAdjacentHTML('beforeend', listOfCategories);
}