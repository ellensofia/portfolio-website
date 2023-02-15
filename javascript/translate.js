/**
 * Function checks the current language and
 * removes the active class from current language button 
 * and sets active on the other language button.
 * It also changes the value of the currentLang variable
 * Finaly it calls the translateTo function with the argument of currentLang
 */
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

/**
 * Function checks what the current language is. 
 * Gets all text elements from HTML document
 * and changes the inner text of all elements
 * @param {string} locale either "sv" or "en"
 */
function translateTo(locale) {
    // locale = "sv" | "en"
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
    const projectSeeAllLink5 = document.querySelector('.project__link5');
    const projectTitle5 = document.querySelector('.project__title5');
    const projectText5 = document.querySelector('.project__text5');
    
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
    projectSeeAllLink5.innerText = translations[27];
    projectTitle5.innerText = translations[28];
    projectText5.innerText = translations[29];
}

/**
 * Function returns the sites text 
 * @returns {Array} text in english
 */
function innerTextInEng() {
    return [
        link1 = 'About me',
        link2 = 'My projects',
        link3 = 'Contact',
        heroTitle = "Hello, I'm",
        heroSubtitle = 'Front end developer student based in Gothenburg',
        heroBtn = 'Contact me',
        aboutTitle = 'About me',
        aboutText = "Front end student with a passion for UI design. I am now studying my first year as a front end developer at Mediainstitute and will be finished by spring 2024. During my time at Mediainstitute, I will have two LIA periods (learning on the job), which I am really looking forward to. Last year I got a one-year education in web design and web development at Karlskoga folk university. I am a curious and driven student who constantly wants to develop. When I'm not coding, I like to exercise, travel and sculpt. I have always been creative and have previously made art and had a few exhibitions. Since finding web design I have found a new creative outlet that I find incredibly rewarding.",
        aboutTitle2 = 'Work experience',
        aboutText2 = "I have previously worked in nursing homes and as a personal assistant. During this time I have developed my collaboration skills and the ability to work under pressure. I love working with people but I have missed the opportunity to be creative at work. Once I found web development a couple of years ago, it felt like an obvious choice.",
        langTitle = 'Languages',
        svTitle = 'Swedish',
        sv = 'Native speaker',
        enTitle = 'English',
        en = 'Fluent',
        programmingTitle = 'Programming & design tools',
        projectsTitle = 'My projects',
        projectSubtitle = 'Click on the project to see more',
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
        projectTitle5 = 'Calendar',
        projectText5 = "This was a group project where we made a calendar where you can add todos.",
    ]
}

/**
 * Function returns the sites text
 * @returns {Array} text in swedish
 */
function innerTextInSwe() {
    return [
        link1 = 'Om mig',
        link2 = 'Mina projekt',
        link3 = 'Kontakt',
        heroTitle = 'Hej, mitt namn är',
        heroDubtitle = 'Front end developer student baserad i Göteborg',
        heroBtn = 'Kontakta mig',
        aboutTitle = 'Om mig',
        aboutText = 'Front end student med passion för UI-design. Nu läser jag mitt första år på front end developer på medieinstitutet och kommer vara klar till våren 2024. Under min tid på medieinstitutet kommer jag ha två LIA-perioder (lärande i arbete) vilket jag verkligen ser fram emot. Sedan innan har jag en ettårig utbildning i webbdesign och webbutveckling på Karlskoga folkhögskola. Jag är en nyfiken och driven student som ständigt vill utvecklas. När jag inte sitter och kodar gillar jag att träna, resa och skulptera. Jag har alltid varit kreativt lagd och har tidigare sysslat mycket med konst och haft några utställningar. Sedan jag funnit webbdesign har jag hittat ett nytt kreativt utlopp som jag tycker är otroligt givande.',
        aboutTitle = 'Arbetserfarenhet',
        aboutText2 = 'Jag har tidigare arbetat inom vården på äldreboenden och som personlig assistent. Det har gett mig vana att samarbeta med människor och att hantera stress. Jag älskar att arbeta med människor men jag har saknat möjligheten att vara kreativ på arbetstid. När jag väl hittade webbutveckling för ett par år sedan kändes det som ett självklart val.',
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
        projectTitle5 = 'Kalender',
        projectText5 = "Ett grupprojekt där vi skapade en kalender där användaren kan lägga till todos.",
    ]
}
