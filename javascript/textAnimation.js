/**
 * Function that gives text animation
 */
function textAnimation() {

const observer = new IntersectionObserver((enteries) => {
    console.log("observer active");
    
    enteries.forEach((entry) => {
        console.log(entry)
        
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})


    console.log("texAnimation active");
    const hiddenTextElements = document.querySelectorAll('.hidden');
    hiddenTextElements.forEach((element) => observer.observe(element));
}