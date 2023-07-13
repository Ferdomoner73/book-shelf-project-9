// modal burger
const backdropMobile = document.querySelector('.js-backdrop-mobile');
const openButtonMobile = document.querySelector('.js-open-menu');
const svgOpenEl = openButtonMobile.firstElementChild;
const closeButtonMobile = document.querySelector('.js-close-menu');

const btnHeaderEls = document.querySelector('.header__togglers')
btnHeaderEls.addEventListener('click', (e) => {
    
    if (e.target.nodeName !== "svg" && e.target.nodeName !== "use") {
        return
    }

    if (svgOpenEl.classList.contains('icon-burger')) {
        backdropMobile.classList.add('is-open');
        closeButtonMobile.classList.remove('visually-hidden');
        openButtonMobile.classList.add('visually-hidden');
        svgOpenEl.classList.remove('icon-burger');
        return
    }

    backdropMobile.classList.remove('is-open');
    closeButtonMobile.classList.add('visually-hidden');
    openButtonMobile.classList.remove('visually-hidden');
    svgOpenEl.classList.add('icon-burger');
} )

