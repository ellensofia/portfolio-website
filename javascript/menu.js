const toggleClass = () => {

    const menuList = document.querySelector('.menu__list');
    const menuBtn = document.querySelector('.menu__btn');

    menuList.classList.toggle('menu__list--open');
    menuBtn.classList.toggle('menu__btn--open');
}
