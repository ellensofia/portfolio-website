window.document.addEventListener('DOMContentLoaded', main)
let currentLang = 'sv';


function main() {
    
    addEventListeners();
}

function addEventListeners() {
    const darkmodeBtn = document.querySelector('#darkmode');
    darkmodeBtn.addEventListener('click', darkmode);
    langBtn = document.querySelector('.language-button');

    burgerBtn = document.querySelector('.menu__btn');
    burgerBtn.addEventListener('click', toggleClass);

    const menuList = document.querySelector('.menu__list');
    menuList.addEventListener('click', toggleClass);

    const projects = document.querySelectorAll('.project');
    const projectCopys = document.querySelectorAll('.project__copy');

    for (const project of projects) {
        project.onclick = toggleProjectDescription;        
    }

    for (const projectCopy of projectCopys) {
        projectCopy.onclick = toggleProjectDescription;        
    }


    // When you click on translate language of the site
    langBtn.onclick = translate;
}

