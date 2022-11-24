function translate() {
    langBtn = document.querySelector('.language-button');

    if (currentLang == 'swe') {

        translateToEng();
        const svBtn = document.querySelector('.sv-btn');
        svBtn.classList.toggle('enBtn--active');
        currentLang = 'eng';
    } 

    else if (currentLang == 'eng'){
        
        translateToSwe();
        const enBtn = document.querySelector('.en-btn');
        enBtn.classList.toggle('enBtn--active');
        currentLang = 'swe';

    }
}

function translateToEng() {
    console.log('translateToEng active');
    getTextElementsFromHTML();
    const translatedToEng = textContentInEng()
    
    const link1 = document.querySelector('.link1');
    const link2 = document.querySelector('.link2');
    const link3 = document.querySelector('.link3');
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroBtn = document.querySelector('.hero__btn');
    const aboutTitle = document.querySelector('.about__title');
    const aboutText = document.querySelector('.about__text');
    const langTitle = document.querySelector('.language__title');
    const svTitle = document.querySelector('.language__sv');
    const sv = document.querySelector('.sv');
    const enTitle = document.querySelector('.language__en');
    const en = document.querySelector('.en');
    
    link1.textContent = translatedToEng[0];
    link2.textContent = translatedToEng[1];
    link3.textContent = translatedToEng[2];
    heroTitle.textContent = translatedToEng[3];
    heroSubtitle.textContent = translatedToEng[4];
    heroBtn.textContent = translatedToEng[5];
    aboutTitle.textContent = translatedToEng[6];
    aboutText.textContent = translatedToEng[7];
    langTitle.textContent = translatedToEng[8];
    svTitle.textContent = translatedToEng[9];
    sv.textContent = translatedToEng[10];
    enTitle.textContent = translatedToEng[11];
    en.textContent = translatedToEng[12];
    
}



function translateToSwe() {
    console.log('translateToSwe active');
    const translatedToSwe = textContentInSwe()

    const link1 = document.querySelector('.link1');
    const link2 = document.querySelector('.link2');
    const link3 = document.querySelector('.link3');
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroBtn = document.querySelector('.hero__btn');
    const aboutTitle = document.querySelector('.about__title');
    const aboutText = document.querySelector('.about__text');
    const langTitle = document.querySelector('.language__title');
    const svTitle = document.querySelector('.language__sv');
    const sv = document.querySelector('.sv');
    const enTitle = document.querySelector('.language__en');
    const en = document.querySelector('.en');

    link1.textContent = translatedToSwe[0];
    link2.textContent = translatedToSwe[1];
    link3.textContent = translatedToSwe[2];
    heroTitle.textContent = translatedToSwe[3];
    heroSubtitle.textContent = translatedToSwe[4];
    heroBtn.textContent = translatedToSwe[5];
    aboutTitle.textContent = translatedToSwe[6];
    aboutText.textContent = translatedToSwe[7];
    langTitle.textContent = translatedToSwe[8];
    svTitle.textContent = translatedToSwe[9];
    sv.textContent = translatedToSwe[10];
    enTitle.textContent = translatedToSwe[11];
    en.textContent = translatedToSwe[12];

    console.log('i functionen swe ' + currentLang)

}




function getTextElementsFromHTML() {
    // heroSubtitle = document.querySelector('.hero__subtitle');
    // aboutTitle = document.querySelector('.about__title');
    // aboutText = document.querySelector('.about__text');
    // langTitle = document.querySelector('.language');
    // svTitle = document.querySelector('.language__sv');
    // sv = document.querySelector('.sv');
    // enTitle = document.querySelector('.language__en');
    // en = document.querySelector('.en');
}

function textContentInEng() {
    return [
        link1 = 'About me',
        link2 = 'My projects',
        link3 = 'Contact',
        heroTitle = 'Hello, my name is Ellen Dahlgren',
        heroDubtitle = 'Front end developer student',
        heroBtn = 'Contact me',
        aboutTitle = 'About me',
        aboutText = "Frontend student with a passion for UI design. When I found web design a few years ago, I was instantly hooked. I am now studying my first year as a front end developer at the media institute. Since then, I have a one-year education in web design and web development at Karlskoga folk university.In the past, I have mainly worked in care, both in nursing homes and as a personal assistant. In addition to that, I have worked as a gardener.",
        langTitle = 'Languages',
        svTitle = 'Swedish',
        sv = 'Native speaker',
        enTitle = 'English',
        en = 'Fluent',
    ]
}

function textContentInSwe() {
    return [
        link1 = 'Om mig',
        link2 = 'Mina projekt',
        link3 = 'Kontakt',
        heroTitle = 'Hej, jag heter Ellen Dahlgren',
        heroDubtitle = 'Front end developer student',
        heroBtn = 'Kontakta mig',
        aboutTitle = 'Om mig',
        aboutText = 'Front end student med passion för UI-design. När jag för några år sedan fann webbdesign fastnade jag direkt. Nu läser jag mitt första år på front end developer på medieinstitutet. Sedan innan har jag en ettårig utbildning i webbdesign och webbutveckling. Jag är en nyfiken och driven student som ständigt vill utvecklas. När jag inte sitter och kodar gillar jag att träna, resa och skulptera.',
        langTitle = 'Språk',
        svTitle = 'Svenska',
        sv = 'Modersmål',
        enTitle = 'Engelska',
        en = 'Flytande',
    ]
}
