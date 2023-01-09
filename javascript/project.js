/**
 * Function that toggles visibility of product description
 */
function toggleProjectDescription(){

    const projectText = document.querySelectorAll('.project__copy')

    for (const project of projectText) {
        project.classList.toggle('visible')
    }

}