import LocalStorage from './classes/local-storage';
const local = new LocalStorage();
const popUpBackdrop = document.querySelector('.popup-backdrop');

const popUpContent = document.querySelector('.popup__content')

const galleryEl = document.querySelector('.five-books-cards-wrapper')
const popUpImage = document.querySelector('[popupimage]');
const popUpBookName = document.querySelector('.popup__book_name')
const popUpBookAuthor = document.querySelector('.popup__book_author')
const popUpBookDescr = document.querySelector('.book__descr')



popUpBackdrop.addEventListener('click', onBackdropClick)

galleryEl.addEventListener("click", onPopUpOpen)

function onPopUpOpen(event) {
    renderPopUp(event)
    event.preventDefault()
    if (event.target.classList.contains("gallery-list-item-wrapper") || event.target.classList.contains("gallery-book-img") || event.target.nodeName === "P" ) {
        document.body.classList.add('show-popup')
    window.addEventListener('keydown', onEscClick)
    }
    
}
function onBackdropClick(event) {
    

    if (event.target.parentNode === event.currentTarget) {
    onPopUpClose()
    }
    
    
}
function onPopUpClose () {
document.body.classList.remove('show-popup')
    window.removeEventListener('keydown', onEscClick)
}
function onPopUpCloseBtnClick() {
    document.body.classList.remove('show-popup')
    window.removeEventListener('keydown', onEscClick)
}
function onEscClick(event) {
 
    if (!event.code === "Escape") {
        return 
    }
    onPopUpClose()
}

async function renderPopUp(event) {
    const bookId = event.target.closest('.gallery-list-item-wrapper').dataset.bookId;
    const book = await fetch(`https://books-backend.p.goit.global/books/${bookId}`).then(response => response.json());
    
    popUpContent.innerHTML = `<button type="button" class="popup-close-btn">
        <svg class="popup-close-icon">
          <use href="./images/icons.svg#icon-x-close"></use>
        </svg>
      </button>
      
        <div class="popup__image"><img src="${book.book_image}" alt="обкладинка книги" id="popupimage" loading="lazy" /></div>
        <div class="popup__book__info"><h3 class="popup__book_name">${book.title}</h3>
        <p class="popup__book_author">${book.author}</p>
      
      <p class="book__descr">${book.description}</p>
      <ul class="popup__market__list">
        <li class="popup__market__list__item">
          <a href="${book.buy_links[0].url}" target="_blank"
            ><img src="./images/shopping-list/amazon-logo.png" alt="amazon"
          /></a>
        </li>
        <li class="popup__market__list__item">
          <a href="${book.buy_links[1].url}" target="_blank"
            ><img
              src="./images/shopping-list/apple-books-logo.png"
              alt="apple books"
          /></a>
        </li>
        <li class="popup__market__list__item">
          <a href="${book.buy_links[4].url}" target="_blank"
            ><img
              src="./images/shopping-list/booksshop-logo.png"
              alt="bookshop"
          /></a>
        </li>
        
      </ul></div>
      <button type="button" class="popup-add-btn" data-book-id=${bookId}>
          add to shopping list
        </button>
        <p class="popup-add-text popup-text-hidden">
          Congratulations! You have added the book to the shopping list. To
          delete, press the button "Remove from the shopping list".
        </p>`;

    const popUpCloseBtn = document.querySelector('.popup-close-btn');
    popUpCloseBtn.addEventListener('click', onPopUpCloseBtnClick)
    
    const addBtn = document.querySelector('.popup-add-btn')
    addBtn.addEventListener('click', addBook)
}

async function addBook(event) {
    const bookId = event.target.dataset.bookId;
    const book = await fetch(`https://books-backend.p.goit.global/books/${bookId}`).then(response => response.json());
    local.addBook(book)
    
}