const toggleClass = () => {

    const menuList = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu__btn');

    menuList.classList.toggle('menu--open');
    menuBtn.classList.toggle('menu__btn--open');
}
