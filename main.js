
//тема через смену таблиц стилей
/*
const botton = document.querySelector('.btn');
const linkThem = document.querySelector('#link-them');
 

botton.addEventListener('click', e => {
e.preventDefault();
if (localStorage.getItem('them') === 'dark-them') {
    localStorage.setItem('them', 'light-them');
    }else {
        localStorage.setItem('them', 'dark-them');
    }
addThemHTML();
});

function addThemHTML () {
    
    if (localStorage.getItem('them') === 'dark-them') {
    linkThem.href = 'dark-them.css';
    botton.firstChild.textContent ='brightness_4';
    }else {
        linkThem.href = 'light-them.css';
        botton.firstChild.textContent ='brightness_5';
    }
    

}
addThemHTML();
*/


const botton = document.querySelector('.btn');
const Them = document.querySelector('dark');
const body = document.querySelector('body');

botton.addEventListener('click', e => {
e.preventDefault();
if (localStorage.getItem('them') === 'dark') {
    localStorage.removeItem('them');
    }else {
        localStorage.setItem('them', 'dark');
    }
addThemHTML();
});

function addThemHTML () {
    
    if (localStorage.getItem('them') === 'dark') {
    body.classList.add('dark');
    botton.firstChild.textContent ='brightness_4';
    }else { 
        body.classList.remove('dark');
        botton.firstChild.textContent ='brightness_5';
    }
    

}
addThemHTML();