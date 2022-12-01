const toggleClass = () => {

    const menuList = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__btn');
    const menuBurger = document.querySelector('.menu__burger');

    menuList.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu__btn--open');
    menuBurger.classList.toggle('menu__burger--open');
}
