const galleryRef = document.querySelector('.five-books-cards-wrapper')
const galleryListRef = document.querySelector('.gallery-list') 
function createMainPageCard(book) {
    return `<li class="gallery-list-item">
    <div class="gallery-list-item-wrapper" data-book-id="${book._id}">
      <div class="overlay-card-wrapper">
      <img
        src="${book.book_image}"
        alt=""
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
  fetchingTopBooks().then( response =>renderingHomePage(response))
function renderingHomePage() {
    galleryRef.innerHTML = '';
    if (document.documentElement.clientWidth < 768) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          '<h2 class="gallery-title">Best Sellers <span class="blue-title-color">Books</span></h2>'
        );
        fetchingTopBooks().then(response => {
          for (let elem of response) {
            galleryRef.insertAdjacentHTML(
              'beforeend',
              `<h3 class="gallery-category">${elem.books[0].list_name}</h3>`
            );
            galleryRef.insertAdjacentHTML(
              'beforeend',
              createMainPageCard(elem.books[0])
            );
            galleryRef.insertAdjacentHTML(
              'beforeend',
              `<button class="see-more-button" data-category="${elem.books[0].list_name}">See more</button>`
            );
          }
        });
      } else if (document.documentElement.clientWidth < 1440) {
        galleryRef.insertAdjacentHTML(
          'beforeend',
          '<h2 class="gallery-title">Best Sellers <span class="blue-title-color">Books</span></h2>'
        );
        fetchingTopBooks().then(response => {
          for (let elem of response) {
            galleryRef.insertAdjacentHTML(
              'beforeend',
              `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
              <div class="gallery-list"></div>`
            );
            let mainPageCategories = document.querySelectorAll('.gallery-list');
            const galleryListRef = mainPageCategories[mainPageCategories.length - 1];
            for (let i = 0; i < 3; i++) {
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
        });
      } else {
      fetchingTopBooks().then(response => {
        galleryRef.insertAdjacentHTML(
            'beforeend',
            '<h2 class="gallery-title">Best Sellers <span class="blue-title-color">Books</span></h2>'
          );
        for (let elem of response) {
          galleryRef.insertAdjacentHTML(
            'beforeend',
            `<h3 class="gallery-category">${elem.books[0].list_name}</h3>
            <div class="gallery-list"></div>`
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
      });
    }
}

window.addEventListener(
  "resize",
  _.debounce((e) => {
    checkViewPort(e);
  }, 100)
);

function checkViewPort(e) {
  // console.log(e);
  // console.log(e.currentTarget.innerWidth);
  if (document.documentElement.clientWidth < 768) {
    fetchingTopBooks().then((response) => renderingHomePage(response));
  } else if (document.documentElement.clientWidth < 1440) {
    fetchingTopBooks().then((response) => renderingHomePage(response));
  } else {
    fetchingTopBooks().then((response) => renderingHomePage(response));
  }
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
    .map(() => {
      const markup = `<li class="gallery-list-item">
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
    .join("");

  return bookCard;
}

