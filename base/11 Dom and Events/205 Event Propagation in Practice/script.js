"use strict";

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

const openModalWindow = (e) => {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModalWindow.forEach((button) => {
  button.addEventListener("click", openModalWindow);
});

btnCloseModalWindow.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModalWindow();
  }
});

/////////////

const btnScrollTo1 = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section3 = document.querySelector("#section--3");

const btnScrollTo = document.querySelector(".btn--scroll-to");
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

const alertMouseEnterH1 = (e) => {
  console.log("events mouseenter");
  h1.removeEventListener("mouseenter", alertMouseEnterH1);
};

h1.addEventListener("mouseenter", alertMouseEnterH1);

///////////////

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = () =>
  `rgb( ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255
  )})`;

/*
document.querySelector(".nav__link").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked .nav__link");
  this.style.backgroundColor = getRandomColor();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked .nav__links");
  this.style.backgroundColor = getRandomColor();
});

document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked .nav");
  this.style.backgroundColor = getRandomColor();
});

document.querySelector("body").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked body");
  this.style.backgroundColor = getRandomColor();
});

document.querySelector("html").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log('html', e.target, e.currentTarget);
});
*/

/*
document.querySelector(".nav__link").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log('.nav__link', e.target, e.currentTarget);
  console.log(this === e.target);
  console.log(this === e.currentTarget);
  e.stopPropagation();
});

document.querySelector("html").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log('html', e.target, e.currentTarget);
});
*/

document.querySelector(".nav__link").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log('.nav__link', e.target, e.currentTarget);
  console.log(this === e.target);
  console.log(this === e.currentTarget);
  e.stopPropagation();
}, true);