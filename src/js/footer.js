
const openModal = document.getElementById('our-team-btn')
const ourTeamModal = document.getElementById('our-team')
const closeModal = document.querySelector('.teem-icon')
const bodyEl = document.querySelector('body')

openModal.addEventListener('click', openBtn)
closeModal.addEventListener('click', openBtn)


function openBtn(){
    console.log('hello')
    ourTeamModal.classList.toggle("footer-modal-hiden")
    bodyEl.classList.toggle('no-scroll')

}


// const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }

/*
<svg class="teem-icon" width="24" height="24">
    <use href="/src/images/icons.svg#icon-x-close"></use>
</svg>
<ul>
<li>
    <img src="" alt=""></img>
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
<li>
    <img src="" alt="">
    <p></p>
    <a href=""></a><a href=""></a></li>
</ul> */