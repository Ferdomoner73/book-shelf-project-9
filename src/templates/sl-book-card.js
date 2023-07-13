// імпортуємо зображення
import AMAZON_LOGO from "../images/shopping-list/amazon-logo.png";
import APPLE_BOOK_LOGO from "../images/shopping-list/apple-books-logo.png";
import BOOKSSHOP_LOGO from '../images/shopping-list/booksshop-logo.png';
import ICONS_SPRITE from "../images/icons.svg";

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
        <a href="${book.buy_links[0].url}" target="_blank"
            ><img class="sl-img"
          src="${AMAZON_LOGO}"
          alt="Amazon shop logo"
          width="48"
          height="15"
        /></a>
       </div>
      </li>
      <li class="sl-shop-item">
       <div class="sl-apple-logo-wrap">
       <a href="${book.buy_links[1].url}" target="_blank"
            ><img class="sl-img"
          src="${APPLE_BOOK_LOGO}"
          alt="Apple books shop logo"
          width="28"
          height="27"
        /></a>
       </div>
      </li>
      <li class="sl-shop-item">
        <div class="sl-bookshop-logo-wrap">
        <a href="${book.buy_links[4].url}" target="_blank"
            ><img class="sl-img"
          src="${BOOKSSHOP_LOGO}"
          alt="Booksshop logo"
          width="32"
          height="30"
        /></a>
        </div>
      </li>
    </ul>
  </div> 
</div>
 
  <button type="button" class="sl-card-delete-btn">
    <svg class="sl-card-icon" width="18" height="18">
      <use class="sl-card-delete-icon" href="${ICONS_SPRITE}#icon-trash-03"></use>
    </svg>
  </button>
</li>`;
}
