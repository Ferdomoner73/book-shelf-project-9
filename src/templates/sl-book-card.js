// експортує розмітку для створення картки книги в shopping list
export default 
function slBookCardMarkup(book) {
  return `<li class="sl-card-item" id="${book._id}">
  <div class="sl-img-wrap">
    <img
      class="sl-img"
      src="${book.book_image}"
      alt="Book front view"
      width="116"
      height="165"
    />
  </div>
  <div class="sl-card-info-wrap">
    <h2 class="sl-book-title">${book.title}</h2>
    <p class="sl-book-category">${book.list_name}</p>
    <p class="sl-book-desc">${book.description}</p>
 <div class="sl-card-footer">
    <p class="sl-book-author">${book.author}</p>
    <ul class="sl-book-card-shops">
      <li class="sl-shop-item">
       <div class="sl-amazon-logo-wrap">
         <img
          src="/src/images/shopping-list/amazon-logo.png"
          alt="Amazon shop logo"
          width="48"
          height="15"
        />
       </div>
      </li>
      <li class="sl-shop-item">
       <div class="sl-apple-logo-wrap">
         <img
          src="/src/images/shopping-list/apple-books-logo.png"
          alt="Apple books shop logo"
          width="28"
          height="27"
        />
       </div>
      </li>
      <li class="sl-shop-item">
        <div class="sl-bookshop-logo-wrap">
          <img
          src="/src/images/shopping-list/booksshop-logo.png"
          alt="Booksshop logo"
          width="32"
          height="30"
        />
        </div>
      </li>
    </ul>
  </div> 
</div>
 
  <button type="button" class="sl-card-delete-btn">
    <svg class="sl-card-icon" width="18" height="18">
      <use href="/src/images/icons.svg#icon-trash-03"></use>
    </svg>
  </button>
</li>`;
}
