let bannerLeftAnimation = document.querySelectorAll('.banner-left-animation')
let coupleImage = document.querySelector('.couple-img')
let cards = document.querySelectorAll('.card')
let brands = document.querySelectorAll('.brand')
let aboutUsLeftAnimation = document.querySelectorAll('.about-us-left-animation')



export function init(){


    let countBannerLeftElements = 0
    let countAboutUsLeftElements = 0
    
    bannerLeftAnimation.forEach(element=>{
        handleScrollWindowLeft(element)
        element.style.animationDelay = "0." + countBannerLeftElements + "s";
        countBannerLeftElements += 3;
    })

    aboutUsLeftAnimation.forEach(element=>{
        handleScrollWindowLeft(element)
        // element.style.animationDelay = "0." + countAboutUsLeftElements + "s";
        // countAboutUsLeftElements += 3;
    })

    cards.forEach(element=>{
        handleScrollWindowUp(element)     
    })

    brands.forEach(element=>{
        handleScrollWindowUp(element)     
    })


     handleScrollWindowRight(coupleImage)

    window.addEventListener('scroll', () => {

        let countBannerLeftElements = 0
        let countAboutUsLeftElements = 0

        bannerLeftAnimation.forEach(element=>{
            handleScrollWindowLeft(element)
            // element.style.animationDelay = "0." + countBannerLeftElements + "s";
            // countBannerLeftElements += 3;
        })

        aboutUsLeftAnimation.forEach(element=>{
            handleScrollWindowLeft(element)
        })

        cards.forEach(element=>{
            handleScrollWindowUp(element)
        })
        
        handleScrollWindowRight(coupleImage)

        brands.forEach(element=>{
            handleScrollWindowUp(element)     
        })
    });
}

function handleScrollWindowUp(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-up');
    }
  }
  
  function handleScrollWindowDown(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-down');
    }
  }
  
  function handleScrollWindowLeft(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-left');
    }
  }
  
  function handleScrollWindowRight(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-right');
    }
  }