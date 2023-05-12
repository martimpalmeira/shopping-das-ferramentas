import * as animations from '../js/animations.js'

let mobileMenuBtn = document.querySelector(".hamburguer-icon");
let navMobile = document.querySelector(".header-nav-mobile");
let topLine = document.querySelector(".top-line");
let bottomLine = document.querySelector(".bottom-line");
let middleLine = document.querySelector(".middle-line");

let aboutUsBtn = document.querySelector(".btn-about-us");
let contactUs = document.querySelector(".btn-contact-us");
let whatsAppBtn = document.querySelector(".whats-app-btn");
let logoBtn = document.querySelector(".logo");
let facebookIconDesktop = document.querySelector(".facebook-icon-desktop");
let instagramIconDesktop = document.querySelector(".instagram-icon-desktop");
let facebookIconMobile = document.querySelector(".facebook-icon-mobile");
let instagramIconMobile = document.querySelector(".instagram-icon-mobile");
let locationBtn = document.querySelector(".location-btn");
let sendEmailBtn = document.querySelector(".send-btn");

animations.init()

mobileMenuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("show");
  middleLine.classList.toggle("middle-line-close");
  bottomLine.classList.toggle("top-line-close");
  topLine.classList.toggle("bottom-line-close");
});

aboutUsBtn.addEventListener("click", () => {
  window.location.href = "#about-us";
});

logoBtn.addEventListener("click", () => {
  window.location.href = "#";
});

contactUs.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href =
    "https://api.whatsapp.com/send?phone=5575981598195&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20dispon%C3%ADveis!%20%F0%9F%98%8A";
  anchor.target = "_blank";
  anchor.click();
});

whatsAppBtn.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href =
    "https://api.whatsapp.com/send?phone=5575981598195&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20dispon%C3%ADveis!%20%F0%9F%98%8A";
  anchor.target = "_blank";
  anchor.click();
});

facebookIconDesktop.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.facebook.com/ShoppingDasFerramentas/?locale=pt_BR";
  anchor.target = "_blank";
  anchor.click();
});

facebookIconMobile.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.facebook.com/ShoppingDasFerramentas/?locale=pt_BR";
  anchor.target = "_blank";
  anchor.click();
});

instagramIconDesktop.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.instagram.com/shoppingferramentas_/";
  anchor.target = "_blank";
  anchor.click();
});

instagramIconMobile.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href = "https://www.instagram.com/shoppingferramentas_/";
  anchor.target = "_blank";
  anchor.click();
});

locationBtn.addEventListener("click", () => {
  let anchor = document.createElement("a");
  anchor.href =
    "https://www.google.com/maps/place/Shopping+das+Ferramentas/@-12.2541477,-38.9668127,17z/data=!3m1!4b1!4m6!3m5!1s0x71437ed352d1427:0xe10e234bdce3b270!8m2!3d-12.2541477!4d-38.9668127!16s%2Fg%2F11b7rtr76f";
  anchor.target = "_blank";
  anchor.click();
});

sendEmailBtn.addEventListener("click", (event) => {
  event.preventDefault();
  email = 's'
  subject = 'd'
  message = 'd'
  sendEmail(email, subject, message);
});

function sendEmail(email, subject, message){
  
}

window.onload = function () {
  window.scrollTo(0,0);
};
