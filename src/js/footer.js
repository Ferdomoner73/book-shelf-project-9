const footerModalEl = document.getElementById('our-team')
const openBtnEl = document.getElementById('our-team-btn')
const closeBtnEl = document.querySelector('.teem-icon-close')

openBtnEl.addEventListener('click', openModal)
closeBtnEl.addEventListener('click', closeModal)

function openModal(){
    footerModalEl.classList.add('footer-open')
}

function closeModal(){
    footerModalEl.classList.remove('footer-open')
}

window.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        closeModal()
    }
})

footerModalEl.addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove('footer-open')
})

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//   }