const categoriesListEl = document.querySelector('.categories-list');

async function getCategoriesList() {
    try {
        const url = 'https://books-backend.p.goit.global/books/category-list';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        return data.hits;
    } catch (error) {
        console.log(error);
    }
}

getCategoriesList().then(response => renderCategoriesList(response));

function renderCategoriesList(data) {
    console.log(data);
    const listOfCategories = data.map(() => {
        return `
    <li>
        <a>
            <p>${data.list_name}</p>
        </a>
    </li>
    `}).join('');

    categoriesListEl.insertAdjacentHTML('beforeend', listOfCategories);
}