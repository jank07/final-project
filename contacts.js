const svgPlus = document.querySelector('.svg-plus');
const topSideWrapper = document.querySelector('.top-side-wrapper');
const topSideCreate = document.querySelector('.top-side-create');
const svgExit = document.querySelector('.svg-exit');

svgPlus.addEventListener('click', () => {
    topSideWrapper.classList.add('disabled');
    topSideCreate.classList.remove('disabled');
})

svgExit.addEventListener('click', () => {
    topSideWrapper.classList.remove('disabled');
    topSideCreate.classList.add('disabled');
})