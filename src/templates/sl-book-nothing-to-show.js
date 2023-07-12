// імпортує зображення
import BOOKS_TOWER from "../images/shopping-list/books-tower.png";

// експортує розмітку для відображення при порожньому сховищі 
export default
    function nothingToShowMarkup() {
    return `<div class="sl-wrap"><p class="sl-text">This page is empty,
     add some books and proceed to order.</p > <div class="sl-img-container">
     <img src="${BOOKS_TOWER}" alt="Books tower"
     width="322" height="241"></div></div >`
}