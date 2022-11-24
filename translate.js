function translate() {
    langBtn = document.querySelector('.language-button');

    if (currentLang == 'sv') {
        const svBtn = document.querySelector('.sv-btn');
        svBtn.classList.toggle('enBtn--active');
        currentLang = 'en';
    } 
    else if (currentLang == 'en'){
        const enBtn = document.querySelector('.en-btn');
        enBtn.classList.toggle('enBtn--active');
        currentLang = 'sv';
    }
    
    translateTo(currentLang);
}

function translateTo(locale) {
    // locale = "sv" | "en"
    console.log('translateToEng active');
    const translations = locale === "sv" ? textContentInSwe() : textContentInEng()
    
    const link1 = document.querySelector('.link1');
    const link2 = document.querySelector('.link2');
    const link3 = document.querySelector('.link3');
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroBtn = document.querySelector('.hero__btn');
    const aboutTitle = document.querySelector('.about__title');
    const aboutText = document.querySelector('.about__text');
    const aboutTitle2 = document.querySelector('.about__work');
    const aboutText2 = document.querySelector('.about__work-text');
    const langTitle = document.querySelector('.language__title');
    const svTitle = document.querySelector('.language__sv');
    const sv = document.querySelector('.sv');
    const enTitle = document.querySelector('.language__en');
    const en = document.querySelector('.en');
    
    link1.textContent = translations[0];
    link2.textContent = translations[1];
    link3.textContent = translations[2];
    heroTitle.textContent = translations[3];
    heroSubtitle.textContent = translations[4];
    heroBtn.textContent = translations[5];
    aboutTitle.textContent = translations[6];
    aboutText.textContent = translations[7];
    aboutTitle2.textContent = translations[8];
    aboutText2.textContent = translations[9];
    langTitle.textContent = translations[10];
    svTitle.textContent = translations[11];
    sv.textContent = translations[12];
    enTitle.textContent = translations[13];
    en.textContent = translations[14];
    
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
        aboutTitle2 = 'Work experience',
        aboutText2 = "I have previously worked in nursing homes and as a personal assistant. I have also worked as a gardener and at a secondhand shop in Uppsala.",
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
        aboutTitle = 'Arbetserfarenhet',
        aboutText2 = 'Jag har tidigare arbetat inom vården på äldreboenden och som personlig assistent. Jag har även arbetat som trädgårdsarbetare och på en secondhand butik i Uppsala.',
        langTitle = 'Språk',
        svTitle = 'Svenska',
        sv = 'Modersmål',
        enTitle = 'Engelska',
        en = 'Flytande',
    ]
}
