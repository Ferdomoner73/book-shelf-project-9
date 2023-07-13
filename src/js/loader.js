let loaderEl = document.querySelector('.loader');
let spinerEl = document.querySelector('.spiner');

function loaderShow() {
  spinerEl.classList.remove('load-hidden');
  loaderEl.classList.add('loader-container');
}
function loaderHidden() {
  spinerEl.classList.add('load-hidden');
  loaderEl.classList.remove('loader-container');
}

export { loaderShow, loaderHidden };