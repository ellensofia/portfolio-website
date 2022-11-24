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

    // When you click on translate language of the site
    langBtn.onclick = translate;
}

