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
footerModalEl.addEventListener('click', (e) => {
    if(e.currentTarget === e.target)
    closeModal()})