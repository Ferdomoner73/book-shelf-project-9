let loaderEl = document.querySelector('.loader');

function loaderShow() {
  loaderEl.classList.remove('load-hidden');
}
function loaderHidden() {
  loaderEl.classList.add('load-hidden');
}

export { loaderShow, loaderHidden };
