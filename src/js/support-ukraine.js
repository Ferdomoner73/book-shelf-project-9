

const supUkrList = [
{
title: 'Save the Children',
url:
'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
img: new URL('/src/images/logo_SAVE_CHILDREN.png', import.meta.url),
//img: '../images/logo_SAVE_CHILDREN.png',
},
{
title: 'Project HOPE',
url: 'https://www.projecthope.org/country/ukraine/',
img: new URL('/src/images/logo_HOPE.png', import.meta.url),
//img: '../images/logo_HOPE.png',
},
{
title: 'UNITED24',
url: 'https://u24.gov.ua/uk',
//img: new URL('/src/images/logo_UNITED24.png', import.meta.url),
img: '../images/logo_UNITED24.png',
},
{
title: 'International Medical Corps',
url: 'https://internationalmedicalcorps.org/country/ukraine/',
img: new URL('/src/images/logo_IMC.png', import.meta.url),
//img: '../images/logo_IMC.png',
},
{
title: 'Medicins Sans Frontieres',
url: 'https://www.msf.org/ukraine',
img: new URL('/src/images/logo_MSF.png', import.meta.url),
//img: './src/images/logo_MSF.png',
},
{
title: 'RAZOM',
url: 'https://www.razomforukraine.org/',
img: new URL('/src/images/logo_RAZOM.png', import.meta.url),
//img: '../images/logo_RAZOM.png',
},
{
title: 'Action against hunger',
url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
img: new URL('/src/images/logo_AAH.png', import.meta.url),
//img: '../images/logo_AAH.png',
},
{
title: 'World vision',
url: 'https://www.wvi.org/emergencies/ukraine',
img: new URL('/src/images/logo_WORLD_VISION.png', import.meta.url),
//img: '/src/images/logo_WORLD_VISION.png',
},
{
title: 'Serhiy Prytula Charity Foundation',
url: 'https://prytulafoundation.org/en',
//img: new URL('/src/images/logo_PRYTULA.png', import.meta.url),
img: '../images/logo_PRYTULA.png',
},
]

const supportUkraineList = document.querySelector('.supportUkraine__list');
const btnNextPage = document.querySelector('.supportUkraine__button-button');

let MAX_ROW = 0;
const TOTAL_ROW = supUkrList.length;

btnNextPage.addEventListener('click', onClickBtn);
window.addEventListener('resize', onAdaptiveView);


createListOrg(supUkrList);

function onAdaptiveView() { 
    if (document.documentElement.clientWidth < 768 && window.innerWidth <768) {
        MAX_ROW = 4;
        createListOrg(supUkrList);
    } else {
        MAX_ROW = 6;
    createListOrg(supUkrList);
    }
}
function onClickBtn() {
    console.log(TOTAL_ROW);
 }

function createListOrg(supUkrList) {
    clearListOrg();
    const createCardOrg = supUkrList.map(
        ({
            title,
            url,
            img,
        }, index) => {
            const listNumber = "0"+ (index + 1);
            return `<div class="supportUkraine__list-card">
        <p>${listNumber.slice(-2)}</p>
    <a href="${url}" target ="_blank">
      <img class="photo-img" src="${img}" alt="${title}"/>
    </a>
    </div>`;
        }
    )
    .join(''); 
    supportUkraineList.insertAdjacentHTML('beforeend', createCardOrg);
}

function clearListOrg() { 
    supportUkraineList.innerHTML = '';
}