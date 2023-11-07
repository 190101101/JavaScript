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
// Todo: 209 Passing Arguments To Event Handlers
//? 1 target olunmushu yoxla nav__link classini
//? 2 umumi variable teyin et ve qonshu elementleri ondan cixart
//? 3 opacity 0.4 teyin et
//? 4 function yarat 2 dene over ve out onlari yaratdigin tek funca birleshdir.

const nav = document.querySelector(".nav");

const navLinksHoverAnimation = function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav__link")) return;

  console.log(e.target);

  e.target
    .closest(".nav__links")
    .querySelectorAll(".nav__link")
    .forEach((el) => {
      if (el !== e.target) el.style.opacity = this;
    });

  e.target.closest(".nav").querySelector(".nav__text").style.opacity = this;
  e.target.closest(".nav").querySelector(".nav__logo").style.opacity = this;
};

nav.addEventListener("mouseover", navLinksHoverAnimation.bind(0.4));
nav.addEventListener("mouseout", navLinksHoverAnimation.bind(1));
