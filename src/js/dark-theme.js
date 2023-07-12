import SITE_LOGO_DARK from '../images/site-logo-dark.png'


const themeToggler = document.querySelector('[for="switch"]')
const headerLogoImage = document.querySelector('.header__logo')

themeToggler.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme')
    } else {
        localStorage.setItem('theme','dark')
    }
    addDarkClass()
    changeSiteLogo()
})
function addDarkClass() {
try {
    if (localStorage.getItem('theme') === 'dark') {
        document.querySelector('html').classList.add('dark');
        themeToggler.previousElementSibling.checked = true;
        paintElementsInDark()
    }
    else {
        document.querySelector('html').classList.remove('dark')
        themeToggler.previousElementSibling.checked = false;
    }
} catch (error) { console.log(error) }
}

addDarkClass()

function paintElementsInDark() {
    // console.log(headerLogoImage.firstElementChild.href)
    const headerDarkLogoMarkup = `<a href="/index.html" ><img src="${SITE_LOGO_DARK}" alt="site logo" height="28" width="109"></a>`;
    
    headerLogoImage.insertAdjacentHTML("beforebegin", headerDarkLogoMarkup)
    changeSiteLogo()
}
function changeSiteLogo() {
    
    if (localStorage.getItem('theme') === 'dark') {
        headerLogoImage.classList.add('popup-hidden')
    
        headerLogoImage.previousElementSibling.classList.remove('popup-hidden')
    } else {
        headerLogoImage.classList.remove('popup-hidden')
    
        headerLogoImage.previousElementSibling.classList.add('popup-hidden')
    }
}
