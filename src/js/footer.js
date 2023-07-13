const footerModalEl = document.getElementById('our-team')
const openBtnEl = document.getElementById('our-team-btn')
const closeBtnEl = document.querySelector('.teem-icon-close')
const bodyEl = document.querySelector("body")

openBtnEl.addEventListener('click', openModal)
closeBtnEl.addEventListener('click', closeModal)

function openModal(){
    footerModalEl.classList.add('footer-open')
    bodyEl.classList.add('no-scroll')
    window.addEventListener('keydown', downEsc)
}

function closeModal(){
    footerModalEl.classList.remove('footer-open')
    bodyEl.classList.remove('no-scroll')
    window.removeEventListener('keydown', downEsc)

}

footerModalEl.addEventListener('click', (e) => {
    if(e.currentTarget === e.target)
    closeModal()})

function downEsc(e){
    if (e.key === 'Escape') 
    closeModal()
}