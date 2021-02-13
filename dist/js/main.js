const navBtn = document.querySelector('.nav-btn');
const hamburger = document.querySelector('.nav-btn__burger');
const nav = document.querySelector('.nav');
const navItemsElement = document.querySelector('.nav__items');
const navItemsArray = document.querySelectorAll('.nav__item');
const header = document.querySelector('header');

const articlesArray = document.querySelectorAll('.article');
const aboutsArray = document.querySelectorAll('div.about__item')

let showMenu = false;
const articlesPositions = [];
const aboutsPositions = [];
const initialize = () =>{
    
    articlesArray.forEach((article)=>{
        articlesPositions.push(article.getBoundingClientRect().top - 500);
        
      });
      aboutsArray.forEach((about)=>{
        aboutsPositions.push(about.getBoundingClientRect().top - 600);
        
      });
      console.log(aboutsPositions); 
}
const handleScroll = () => {
    
    if ( document.documentElement.scrollTop > 80) {
        header.classList.add('transparent');
        
      } else {
        header.classList.remove('transparent');
      }   
      for( let i = 0; i < articlesPositions.length; i++ ){
        if(document.documentElement.scrollTop > articlesPositions[i] ){
            articlesArray[i].classList.add('open');
        } else {
          articlesArray[i].classList.remove('open');
        }
      }
      for( let i = 0; i < aboutsPositions.length; i++ ){
        if(document.documentElement.scrollTop > aboutsPositions[i] ){
            aboutsArray[i].classList.add('open');
        } else {
            aboutsArray[i].classList.remove('open');
        }
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
window.onload = initialize;
