const navBtn = document.querySelector('.nav-btn');
const hamburger = document.querySelector('.nav-btn__burger');
const nav = document.querySelector('.nav');
const navItemsElement = document.querySelector('.nav__items');
const navItemsArray = document.querySelectorAll('.nav__item');

let showMenu = false;
const toggleMenu = () => {
    console.log('toggled');
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        navItemsElement.classList.add('open');
        navItemsArray.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navItemsElement.classList.remove('open');
        navItemsArray.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}
navBtn.addEventListener('click', toggleMenu);