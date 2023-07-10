
const popUpBackdrop = document.querySelector('.popup-backdrop');
const popUpCloseBtn = document.querySelector('.popup-close-btn');

const popUpImage = document.querySelector('[popupimage]');
const popUpBookName = document.querySelector('.popup__book_name')
const popUpBookAuthor = document.querySelector('.popup__book_author')
const popUpBookDescr = document.querySelector('.book__descr')

popUpCloseBtn.addEventListener('click', onPopUpClose)

popUpBackdrop.addEventListener('click', onBackdropClick)

function onPopUpOpen(event) {
    event.preventDefault()
    document.body.classList.add('show-popup')
    window.addEventListener('keydown', onEscClick)
}
function onBackdropClick(event) {
    if (!event.target === event.currentTarget) {
    return
    }
    onPopUpClose()
}
function onPopUpClose () {
document.body.classList.remove('show-popup')
    window.removeEventListener('keydown', onEscClick)
}
function onEscClick(event) {
 
    if (!event.code === "Escape") {
        return 
    }
    onPopUpClose()
}

function getCurrentBook(e) {
    
}