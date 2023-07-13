//import throttle from 'lodash';
//можливо правільніше винести массив в окремий файл
const array_supportUkraine = [
{
title: 'Save the Children',
url:
'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
img: new URL('/src/images/logo_SAVE_CHILDREN.png', import.meta.url), // варіант з window.location.origin чомусь не працює
img_x2: new URL('/src/images/logo_SAVE_CHILDREN_x2.png', import.meta.url),
},
{
title: 'Project HOPE',
url: 'https://www.projecthope.org/country/ukraine/',
img: new URL('/src/images/logo_HOPE.png', import.meta.url),
img_x2: new URL('/src/images/logo_HOPE_x2.png', import.meta.url),
},
{
title: 'UNITED24',
url: 'https://u24.gov.ua/uk',
img: new URL('/src/images/logo_UNITED24.png', import.meta.url),
img_x2: new URL('/src/images/logo_UNITED24_x2.png', import.meta.url),
},
{
title: 'International Medical Corps',
url: 'https://internationalmedicalcorps.org/country/ukraine/',
img: new URL('/src/images/logo_IMC.png', import.meta.url),
img_x2: new URL('/src/images/logo_IMC_x2.png', import.meta.url),
},
{
title: 'Medicins Sans Frontieres',
url: 'https://www.msf.org/ukraine',
img: new URL('/src/images/logo_MSF.png', import.meta.url),
img_x2: new URL('/src/images/logo_MSF_x2.png', import.meta.url),
},
{
title: 'RAZOM',
url: 'https://www.razomforukraine.org/',
img: new URL('/src/images/logo_RAZOM.png', import.meta.url),
img_x2: new URL('/src/images/logo_RAZOM_x2.png', import.meta.url),
},
{
title: 'Action against hunger',
url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
img: new URL('/src/images/logo_AAH.png', import.meta.url),
img_x2: new URL('/src/images/logo_AAH_x2.png', import.meta.url),
},
{
title: 'World vision',
url: 'https://www.wvi.org/emergencies/ukraine',
img: new URL('/src/images/logo_WORLD_VISION.png', import.meta.url),
img_x2: new URL('/src/images/logo_WORLD_VISION_x2.png', import.meta.url),
},
{
title: 'Serhiy Prytula Charity Foundation',
url: 'https://prytulafoundation.org/en',
img: new URL('/src/images/logo_PRYTULA.png', import.meta.url),
img_x2: new URL('/src/images/logo_PRYTULA_x2.png', import.meta.url),
},
]

const supportUkraineList = document.querySelector('.supportUkraine__list');
const btnNextPage = document.querySelector('.supportUkraine__button');

let MAX_ROW = 0;
let PAGE = 1;
let listNumber = null;

const TOTAL_ROW = array_supportUkraine.length;
const optimizedLoad = throttle(onAdaptiveView, 500);

btnNextPage.addEventListener('click', onClickBtn);
window.addEventListener('resize', optimizedLoad);


onAdaptiveView();

function onAdaptiveView() {

    let clientScreenWidth = document.documentElement.clientWidth;
    let userScreenWidth = window.innerWidth;
        if (userScreenWidth < 768 || clientScreenWidth < 768) {
            MAX_ROW = 4;
        } else {
            MAX_ROW = 6;
        }    
    createListOrg(array_supportUkraine, MAX_ROW);
}

function onClickBtn() {

    if (Math.ceil(TOTAL_ROW / MAX_ROW) === PAGE) {
        btnNextPage.classList.toggle('rotate');
        updateList(array_supportUkraine, MAX_ROW, PAGE, TOTAL_ROW);
        PAGE += 1;
       
    } else if (Math.ceil(TOTAL_ROW / MAX_ROW) < PAGE) {
        PAGE = 1;
        btnNextPage.classList.toggle('rotate');
        createListOrg(array_supportUkraine, MAX_ROW);
    } else { 
        updateList(array_supportUkraine, MAX_ROW, PAGE, TOTAL_ROW);
        PAGE += 1;
    }
} 

function updateList(array_supportUkraine, MAX_ROW, PAGE, TOTAL_ROW) {
    const updateCardOrg = array_supportUkraine
        .map(({ title, url, img, img_x2 }, index) =>
        {
            listNumber = "0" + (index + 1);
            {
                if ((TOTAL_ROW - MAX_ROW * (PAGE - 1)) > MAX_ROW && index + 1 > MAX_ROW && index < MAX_ROW * PAGE)
                {
                        return `<div class="supportUkraine__list-card">
                        <p>${listNumber.slice(-2)}</p>
                        <a href="${url}" target ="_blank">
                        <img class="photo-img" srcset="${img} 1x, ${img_x2} 2x" src="${img}" alt="${title}" height="32"/>

                        </a>
                        </div>`;
                } else if ((TOTAL_ROW - MAX_ROW * (PAGE - 1)) < MAX_ROW && (index + 1) > TOTAL_ROW - MAX_ROW)
                    {
                        return `<div class="supportUkraine__list-card">
                        <p>${listNumber.slice(-2)}</p>
                        <a href="${url}" target ="_blank">
                        <img class="photo-img" srcset="${img} 1x, ${img_x2} 2x" src="${img}" alt="${title}" height="32"/>


                        </a>
                        </div>`;
                    }
            }   
        })        
        .join(''); 
        supportUkraineList.innerHTML = updateCardOrg;
}    
    
function createListOrg(array_supportUkraine, MAX_ROW) {
    clearListOrg();
    PAGE += 1;
    const createCardOrg = array_supportUkraine.map(
        ({ title, url, img, img_x2 }, index) => {
            listNumber = "0" + (index + 1);
             {
                if ((index + 1) <= MAX_ROW) {
                    return `<div class="supportUkraine__list-card">
                    <p>${listNumber.slice(-2)}</p>
                    <a href="${url}" target ="_blank">
                    <img class="photo-img" srcset="${img} 1x, ${img_x2} 2x" src="${img}" alt="${title}" height="32"/>


                    </a>
                    </div>`;
                } 
            }
            })
    .join(''); 
    supportUkraineList.insertAdjacentHTML('beforeend', createCardOrg);
}

function clearListOrg() { 
    supportUkraineList.innerHTML = '';
}


function throttle(callee, timeout) {

    let timer = null

  return function perform(...args) {
    if (timer) return

    timer = setTimeout(() => {
      callee(...args)

      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}
