let mobileMenuBtn = document.querySelector('.hamburguer-icon')
let navMobile = document.querySelector('.header-nav-mobile')
let topLine = document.querySelector('.top-line')
let bottomLine = document.querySelector('.bottom-line')
let middleLine = document.querySelector('.middle-line')

mobileMenuBtn.addEventListener('click', ()=>{
    navMobile.classList.toggle('show')
    middleLine.classList.toggle('middle-line-close')
    bottomLine.classList.toggle('top-line-close')
    topLine.classList.toggle('bottom-line-close')
})