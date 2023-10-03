/**
 * Function checks the current language and
 * removes the active class from current language button
 * and sets active on the other language button.
 * It also changes the value of the currentLang variable
 * Finaly it calls the translateTo function with the argument of currentLang
 */
function translate() {
  langBtn = document.querySelector(".language-button");

  if (currentLang == "sv") {
    currentLang = "en";
  } else if (currentLang == "en") {
    currentLang = "sv";
  }
  localStorage.setItem("lang", currentLang);

  setBtnLang();
  translateTo(currentLang);
}

function setBtnLang() {
  // update the active class on the language buttons
  const svBtn = document.querySelector(".sv-btn");
  const enBtn = document.querySelector(".en-btn");

  // Remove the active class from both buttons
  svBtn.classList.remove("lang--active");
  enBtn.classList.remove("lang--active");

  // Add the active class to the current language button
  if (currentLang === "sv") {
    svBtn.classList.add("lang--active");
  } else {
    enBtn.classList.add("lang--active");
  }
}

function getLangFromLocalStorage() {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) {
    currentLang = storedLang;
    setBtnLang();
    translateTo(currentLang);
  }
}

/**
 * Function checks what the current language is.
 * Gets all text elements from HTML document
 * and changes the inner text of all elements
 * @param {string} locale either "sv" or "en"
 */
function translateTo(lang) {
  lang = localStorage.getItem("lang");

  const translations = lang === "sv" ? innerTextInSwe() : innerTextInEng();

  const link1 = document.querySelector(".link1");
  const link2 = document.querySelector(".link2");
  const link3 = document.querySelector(".link3");
  const heroTitle = document.querySelector(".hero__title");
  const heroSubtitle = document.querySelector(".hero__subtitle");
  const heroBtn = document.querySelector(".hero__btn");
  const aboutTitle = document.querySelector(".about__title");
  const aboutText = document.querySelector(".about__text");
  const aboutTitle2 = document.querySelector(".about__work");
  const aboutText2 = document.querySelector(".about__work-text");
  const programmingTitle = document.querySelector(".programming__title");
  const projectsTitle = document.querySelector(".projects__title");
  const projectSubtitle = document.querySelector(".projects__subtitle");
  const contactTitle = document.querySelector(".contact__title");
  const projectTitle1 = document.querySelector(".project__title1");
  const projectText1 = document.querySelector(".project__text1");
  const projectTitle2 = document.querySelector(".project__title2");
  const projectText2 = document.querySelector(".project__text2");
  const projectTitle3 = document.querySelector(".project__title3");
  const projectText3 = document.querySelector(".project__text3");
  const projectTitle4 = document.querySelector(".project__title4");
  const projectText4 = document.querySelector(".project__text4");
  const projectSeeAllLink1 = document.querySelector(".project__link1");
  const projectSeeAllLink2 = document.querySelector(".project__link2");
  const projectSeeAllLink3 = document.querySelector(".project__link3");
  const projectSeeAllLink4 = document.querySelector(".project__link4");
  const projectSeeAllLink5 = document.querySelector(".project__link5");
  const projectTitle5 = document.querySelector(".project__title5");
  const projectText5 = document.querySelector(".project__text5");
  const projectTitle6 = document.querySelector(".project__title6");
  const projectText6 = document.querySelector(".project__text6");
  const projectTitle7 = document.querySelector(".project__title7");
  const projectText7 = document.querySelector(".project__text7");
  const projectText8 = document.querySelector(".project__text8");

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
  programmingTitle.innerText = translations[10];
  projectsTitle.innerText = translations[11];
  projectSubtitle.innerText = translations[12];
  contactTitle.innerText = translations[13];
  projectTitle1.innerText = translations[14];
  projectText1.innerText = translations[15];
  projectTitle2.innerText = translations[16];
  projectText2.innerText = translations[17];
  projectTitle3.innerText = translations[18];
  projectText3.innerText = translations[19];
  projectTitle4.innerText = translations[20];
  projectText4.innerText = translations[21];
  projectSeeAllLink1.innerText = translations[22];
  projectSeeAllLink2.innerText = translations[22];
  projectSeeAllLink3.innerText = translations[22];
  projectSeeAllLink4.innerText = translations[22];
  projectSeeAllLink5.innerText = translations[22];
  projectTitle5.innerText = translations[23];
  projectText5.innerText = translations[24];
  projectTitle6.innerText = translations[25];
  projectText6.innerText = translations[26];
  projectTitle7.innerText = translations[27];
  projectText7.innerText = translations[28];
  projectText8.innerText = translations[29];
}

/**
 * Function returns the sites text
 * @returns {Array} text in english
 */
function innerTextInEng() {
  return [
    (link1 = "About me"),
    (link2 = "My projects"),
    (link3 = "Contact"),
    (heroTitle = "Hello, I'm"),
    (heroSubtitle = "Front end developer student"),
    (heroBtn = "Contact me"),
    (aboutTitle = "About me"),
    (aboutText =
      "Front end student with a passion for UI design. I am now studying my first year as a front end developer at Mediainstitute and will be finished by spring 2024. During my time at Mediainstitute, I will have two LIA periods (learning on the job), which I am really looking forward to. Last year I got a one-year education in web design and web development at Karlskoga folk university. I am a curious and driven student who constantly wants to develop. When I'm not coding, I like to exercise, travel and sculpt. I have always been creative and have previously made art and had a few exhibitions. Since finding web design I have found a new creative outlet that I find incredibly rewarding."),
    (aboutTitle2 = "Work experience"),
    (aboutText2 =
      "I have previously worked in nursing homes and as a personal assistant. During this time I have developed my collaboration skills and the ability to work under pressure. I love working with people but I have missed the opportunity to be creative at work. Once I found web development a couple of years ago, it felt like an obvious choice."),
    (programmingTitle = "Programming & design tools"),
    (projectsTitle = "My projects"),
    (projectSubtitle = "Click on the project to see more"),
    (contactTitle = "Get in contact"),
    (projectTitle1 = "Apple"),
    (projectText1 =
      "This was a group project. We had the task of recreating the start page of an existing website using HTML and CSS. We chose to recreate apple's website."),
    (projectTitle2 = "The Raven's craft shop"),
    (projectText2 =
      "In this project, we worked as a group to modernize an existing website. We chose to remodel Raven's craft shop. We made this using HTML, CSS & Javascript."),
    (projectTitle3 = "Text-based adventure"),
    (projectText3 = "This is a text-based interactive story."),
    (projectTitle4 = "Yogibear"),
    (projectText4 =
      "I have made this page according to an existing XD design. The goal was to get it pixel perfect."),
    (projectSeeAllLink = "Demo"),
    (projectTitle5 = "Calendar"),
    (projectText5 =
      "This was a group project where we made a calendar where you can add todos."),
    (projectTitle6 = "Take 'n bake"),
    (projectText6 =
      "This is a game created with p5 and Javascript and the code is structured in an object oriented way. We worked as a group and came up with the design and idea together. Unfortunately, the game can only display in full screen on the desktop."),
    (projectTitle7 = "Food finder"),
    (projectText7 =
      "This is a React-app that was created as a group assignment. The app is called Food-finder and helps users find recipes based on what ingredients they have at home."),
    (projectText8 =
      "This is a webshop that I built with two classmates. Vi used React, Typescript and MUI to create an interface for both user and admin. Demo will be up soon."),
  ];
}

/**
 * Function returns the sites text
 * @returns {Array} text in swedish
 */
function innerTextInSwe() {
  return [
    (link1 = "Om mig"),
    (link2 = "Mina projekt"),
    (link3 = "Kontakt"),
    (heroTitle = "Hej, mitt namn är"),
    (heroDubtitle = "Front end developer student"),
    (heroBtn = "Kontakta mig"),
    (aboutTitle = "Om mig"),
    (aboutText =
      "Front end student med passion för UI-design. Nu läser jag mitt första år på front end developer på medieinstitutet och kommer vara klar till våren 2024. Under min tid på medieinstitutet kommer jag ha två LIA-perioder (lärande i arbete) vilket jag verkligen ser fram emot. Sedan innan har jag en ettårig utbildning i webbdesign och webbutveckling på Karlskoga folkhögskola. Jag är en nyfiken och driven student som ständigt vill utvecklas. När jag inte sitter och kodar gillar jag att träna, resa och skulptera. Jag har alltid varit kreativt lagd och har tidigare sysslat mycket med konst och haft några utställningar. Sedan jag funnit webbdesign har jag hittat ett nytt kreativt utlopp som jag tycker är otroligt givande."),
    (aboutTitle = "Arbetserfarenhet"),
    (aboutText2 =
      "Jag har tidigare arbetat inom vården på äldreboenden och som personlig assistent. Det har gett mig vana att samarbeta med människor och att hantera stress. Jag älskar att arbeta med människor men jag har saknat möjligheten att vara kreativ på arbetstid. När jag väl hittade webbutveckling för ett par år sedan kändes det som ett självklart val."),
    (programmingTitle = "Programmering & designverktyg"),
    (projectsTitle = "Mina projekt"),
    (projectSubtitle = "Klicka på projekten för att se mer"),
    (contactTitle = "Kontakta mig"),
    (projectTitle1 = "Apple"),
    (projectText1 =
      "I detta projekt arbetade vi i grupp och hade som uppgift att återskapa startsidan av en befintlig hemsida med hjälp av html och css. Vi valde att koda upp apples hemsida."),
    (projectTitle2 = "Korpens hantverksbutik"),
    (projectText2 =
      "I det här projektet arbetade vi i grupp med att modernisera en befintlig hemsida. Vi valde att göra om Korpens hantverksbutik. Vi gjorde denna med hjälp av HTML, CSS & Javascript."),
    (projectTitle3 = "Textbaserat spel"),
    (projectText3 =
      "Det här är en texbaserad interaktiv historia gjort med främst javascript."),
    (projectTitle4 = "Yogibear"),
    (projectText4 =
      "Denna sida har jag kodat upp efter en befintlig XD design. Målet var att få den pixel perfekt."),
    (projectSeeAllLink = "Demo"),
    (projectTitle5 = "Kalender"),
    (projectText5 =
      "Ett grupprojekt där vi skapade en kalender där användaren kan lägga till todos."),
    (projectTitle6 = "Take 'n bake"),
    (projectText6 =
      "Detta är ett spel som är skapat med p5 och Javascript och koden är strukturerad på ett objektorienterat sätt. Vi arbetade i grupp och tog fram design och idé tillsammans. Spelet kan tyvärr bara visas i fullscreen på desktop."),
    (projectTitle6 = "Food finder"),
    (projectText6 =
      "Detta är en React-app som skapats i grupp. Appen heter Food-finder och hjälper användaren att hitta recept baserat på vilka ingredienser de har hemma."),
    (projectText8 =
      "Detta är en webshop som jag byggt tillsammans med två klasskamrater. Vi använde oss av React, Typescript och MUI för att skapa gränssnitt för användare och admin. Demo kommer snart."),
  ];
}
