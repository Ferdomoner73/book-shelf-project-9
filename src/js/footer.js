
const openModal = document.getElementById('our-team-btn')
const ourTeamModal = document.getElementById('our-team')
const closeModal = document.querySelector('.teem-icon')
const bodyEl = document.querySelector('body')
const modalEl = document.querySelector('.footer-modal')

openModal.addEventListener('click', openBtn)
closeModal.addEventListener('click', openBtn)


function openBtn(){
    console.log('hello')
    // modalEl.showModal()
    ourTeamModal.classList.toggle("footer-modal-hiden")
    // bodyEl.classList.toggle('no-scroll')

}