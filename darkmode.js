function darkmode() {

    console.log("darkmode active"); 
    const body = document.querySelector('body');
    const darkmodeBtn = document.querySelector('.darkmode');
    if (body.classList == 'darkmode-active') {
        darkmodeBtn.src = 'assets/icons/darkmode.svg';
    } else {
        darkmodeBtn.src = 'assets/icons/lightmode.svg';
    }
    body.classList.toggle('darkmode-active');

}