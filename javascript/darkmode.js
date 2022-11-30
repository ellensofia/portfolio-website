function darkmode() {

    const body = document.querySelector('body');
    const darkmodeBtn = document.querySelector('.darkmode');

    const linkedinIcon = document.querySelector('.contact__linkedin');
    const mailIcon = document.querySelector('.contact__mail');
    const phoneIcon = document.querySelector('.contact__phone');

    if (body.classList == 'darkmode-active') {
        darkmodeBtn.src = 'assets/icons/darkmode.svg';
        linkedinIcon.src = 'assets/icons/linkedin.svg';
        mailIcon.src = 'assets/icons/mail.svg';
        phoneIcon.src = 'assets/icons/phone.svg';

    } else {
        darkmodeBtn.src = 'assets/icons/lightmode.svg';
        
        linkedinIcon.src = 'assets/icons/linkedin-white.svg';
        mailIcon.src = 'assets/icons/mail-white.svg';
        phoneIcon.src = 'assets/icons/phone-white.svg';
    }
    body.classList.toggle('darkmode-active');
    
}