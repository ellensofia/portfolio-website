window.document.addEventListener('DOMContentLoaded', main)
let currentLang = 'sv';


function main() {
    
    getElementsFromHTML();
    addEventListeners();
}

function getElementsFromHTML() {

}

function addEventListeners() {
    getElementsFromHTML();
    console.log("eventlisteners active")
    const darkmodeBtn = document.querySelector('#darkmode');
    darkmodeBtn.addEventListener('click', darkmode);
    langBtn = document.querySelector('.language-button');
    burgerBtn = document.querySelector('.menu__btn');
    burgerBtn.addEventListener('click', toggleClass);
    const menuList = document.querySelector('.menu__list');
    menuList.addEventListener('click', toggleClass);


    // When you click on translate language of the site
    langBtn.onclick = translate;
}

