"use strict";

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

window.addEventListener("load", () => {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.width = "105%";
  setTimeout(() => {
    loadingIndicator.classList.add("loading-indicator");
  }, 1500);
});

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
//? Event Propagation

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomColor = () =>
  `rgb( ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
    0,
    255
  )}, ${getRandomIntInclusive(0, 255)} )`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log("nav__link", e.target, e.currentTarget);
  //?stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  this.style.backgroundColor = getRandomColor();
  console.log("nav__links", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    this.style.backgroundColor = getRandomColor();
    console.log("nav", e.target, e.currentTarget);
  }
  //! true
);

//? currentTarget zencir vari parente qeder gedir.
//? target yalniz click olana aiddir
//? Propagation dayandirmaq ucun e.stopPropagation()
//? currentTarget === this => true
//? EventListener - 3 cu param boolean qebul edir. eger true ise 1 ci faza da olur default olarak false olur. amma bu param artik kohnedir.
