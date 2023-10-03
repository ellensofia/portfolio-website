window.document.addEventListener("DOMContentLoaded", main);

/**
 * @type {string} Global variable that stores the current language
 */
let currentLang = "sv";

/**
 * Start of javascript file
 */
function main() {
  addEventListeners();
  textAnimation();
  getLangFromLocalStorage();
}

/**
 * Function that adds all eventlisteners
 */
function addEventListeners() {
  const darkmodeBtn = document.querySelector("#darkmode");
  darkmodeBtn.addEventListener("click", darkmode);
  langBtn = document.querySelector(".language-button");

  burgerBtn = document.querySelector(".menu__btn");
  burgerBtn.addEventListener("click", toggleMenuOpenClass);

  const menuList = document.querySelector(".menu__list");
  menuList.addEventListener("click", toggleMenuOpenClass);

  const projects = document.querySelectorAll(".project");
  const projectCopys = document.querySelectorAll(".project__copy");

  // Show or hide the product description when user clicks on project
  for (const project of projects) {
    project.onclick = toggleProjectDescription;
  }

  for (const projectCopy of projectCopys) {
    projectCopy.onclick = toggleProjectDescription;
  }

  // When you click on SV / EN button the funtion translate is called
  langBtn.onclick = translate;
}
