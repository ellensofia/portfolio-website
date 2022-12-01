function translate() {
    langBtn = document.querySelector('.language-button');

    if (currentLang == 'sv') {
        const svBtn = document.querySelector('.sv-btn');
        const enBtn = document.querySelector('.en-btn');
        svBtn.classList.remove('lang--active');
        enBtn.classList.add('lang--active');
        currentLang = 'en';
    } 
    else if (currentLang == 'en'){
        const svBtn = document.querySelector('.sv-btn');
        const enBtn = document.querySelector('.en-btn');
        enBtn.classList.remove('lang--active');
        svBtn.classList.add('lang--active');
        currentLang = 'sv';
    }
    
    translateTo(currentLang);
}

function translateTo(locale) {
    // locale = "sv" | "en"
    console.log('translateToEng active');
    const translations = locale === "sv" ? innerTextInSwe() : innerTextInEng()
    
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
    const programmingTitle = document.querySelector('.programming__title');
    const projectsTitle = document.querySelector('.projects__title');
    const projectSubtitle = document.querySelector('.projects__subtitle');
    const contactTitle = document.querySelector('.contact__title');
    const projectTitle1 = document.querySelector('.project__title1');
    const projectText1 = document.querySelector('.project__text1');
    const projectTitle2 = document.querySelector('.project__title2');
    const projectText2 = document.querySelector('.project__text2');
    const projectTitle3 = document.querySelector('.project__title3');
    const projectText3 = document.querySelector('.project__text3');
    const projectTitle4 = document.querySelector('.project__title4');
    const projectText4 = document.querySelector('.project__text4');
    const projectSeeAllLink1 = document.querySelector('.project__link1');
    const projectSeeAllLink2 = document.querySelector('.project__link2');
    const projectSeeAllLink3 = document.querySelector('.project__link3');
    const projectSeeAllLink4 = document.querySelector('.project__link4');
    
    link1.innerText = translations[0];
    link2.innerText = translations[1];
    link3.innerText = translations[2];
    heroTitle.innerText = translations[3];
    heroSubtitle.innerText = translations[4];
    heroBtn.innerText = translations[5];
    aboutTitle.innerText = translations[6];
    aboutText.innerText = translations[7];
    aboutTitle2.innerText = translations[8];
    aboutText2.innerText = translations[9];
    langTitle.innerText = translations[10];
    svTitle.innerText = translations[11];
    sv.innerText = translations[12];
    enTitle.innerText = translations[13];
    en.innerText = translations[14];
    programmingTitle.innerText = translations[15];
    projectsTitle.innerText = translations[16];
    projectSubtitle.innerText = translations[17];
    contactTitle.innerText = translations[18];
    projectTitle1.innerText = translations[19];
    projectText1.innerText = translations[20];
    projectTitle2.innerText = translations[21];
    projectText2.innerText = translations[22];
    projectTitle3.innerText = translations[23];
    projectText3.innerText = translations[24];
    projectTitle4.innerText = translations[25];
    projectText4.innerText = translations[26];
    projectSeeAllLink1.innerText = translations[27];
    projectSeeAllLink2.innerText = translations[27];
    projectSeeAllLink3.innerText = translations[27];
    projectSeeAllLink4.innerText = translations[27];
    
}

function innerTextInEng() {
    return [
        link1 = 'About me',
        link2 = 'My projects',
        link3 = 'Contact',
        heroTitle = "Hello, I'm",
        heroSubtitle = 'Front end developer student',
        heroBtn = 'Contact me',
        aboutTitle = 'About me',
        aboutText = "Frontend student with a passion for UI design. When I found web design a few years ago, I was instantly hooked. I am now studying my first year as a front end developer at the media institute. Since then, I have a one-year education in web design and web development at Karlskoga folk university.",
        aboutTitle2 = 'Work experience',
        aboutText2 = "I have previously worked in nursing homes and as a personal assistant. I have also worked as a gardener and at a secondhand shop in Uppsala.",
        langTitle = 'Languages',
        svTitle = 'Swedish',
        sv = 'Native speaker',
        enTitle = 'English',
        en = 'Fluent',
        programmingTitle = 'Programming & design tools',
        projectsTitle = 'My projects',
        projectSubtitle = 'Click on the object to see more',
        contactTitle = 'Get in contact',
        projectTitle1 = 'Apple',
        projectText1 = "This was a group project. We had the task of recreating the start page of an existing website using HTML and CSS. We chose to recreate apple's website.",
        projectTitle2 = "The Raven's craft shop",
        projectText2 = "In this project, we worked as a group to modernize an existing website. We chose to remodel Raven's craft shop. We made this using HTML, CSS & Javascript.",
        projectTitle3 = 'Text-based adventure',
        projectText3 = 'This is a text-based interactive story.',
        projectTitle4 = 'Yogibear',
        projectText4 = "I have made this page according to an existing XD design. The goal was to get it pixel perfect.",
        projectSeeAllLink = "Look at a demo",

    ]
}

function innerTextInSwe() {
    return [
        link1 = 'Om mig',
        link2 = 'Mina projekt',
        link3 = 'Kontakt',
        heroTitle = 'Hej, mitt namn är',
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
        programmingTitle = 'Programmering & designverktyg',
        projectsTitle = 'Mina projekt',
        projectSubtitle = 'Klicka på projekten för att se mer',
        contactTitle = 'Kontakta mig',
        projectTitle1 = 'Apple',
        projectText1 = "I detta projekt arbetade vi i grupp och hade som uppgift att återskapa startsidan av en befintlig hemsida med hjälp av html och css. Vi valde att koda upp apples hemsida.",
        projectTitle2 = "Korpens hantverksbutik",
        projectText2 = "I det här projektet arbetade vi i grupp med att modernisera en befintlig hemsida. Vi valde att göra om Korpens hantverksbutik. Vi gjorde denna med hjälp av HTML, CSS & Javascript.",
        projectTitle3 = 'Textbaserat spel',
        projectText3 = 'Det här är en texbaserad interaktiv historia gjort med främst javascript.',
        projectTitle4 = 'Yogibear',
        projectText4 = "Denna sida har jag kodat upp efter en befintlig XD design. Målet var att få den pixel perfekt.",
        projectSeeAllLink = "Se en demo",

    ]
}
