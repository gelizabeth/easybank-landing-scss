const navBtn = document.querySelector('.nav-btn');
const hamburger = document.querySelector('.nav-btn__burger');
const nav = document.querySelector('.nav');
const navItemsElement = document.querySelector('.nav__items');
const navItemsArray = document.querySelectorAll('.nav__item');
const header = document.querySelector('header');

let showMenu = false;

 const handleScroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('transparent');
        
      } else {
        header.classList.remove('transparent');
      }
 }

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
window.onscroll = handleScroll;