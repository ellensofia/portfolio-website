window.document.addEventListener('DOMContentLoaded', main)

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


}

