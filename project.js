function toggleProjectDescription(){

    const project = document.querySelector('.project')
    const projectCopys = document.querySelectorAll('.project__copy')

    for (const project of projectCopys) {
        
        project.classList.toggle('visible')
    }

}