let loaderEl = document.querySelector('.loader');

function loaderShow() {
  loaderEl.classList.remove('hidden');
}
function loaderHidden() {
  loaderEl.classList.add('hidden');
}

export { loaderShow, loaderHidden };
