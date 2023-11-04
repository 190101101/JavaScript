"use strict";

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

const btnScrollTo1 = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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

const btnScrollTo = document.querySelector(".btn--scroll-to");
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});

/*
*слабый вариант 
document.querySelectorAll(".nav__link").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(element.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
*/

// делегирования событий
// 1. добавляем event listener для общего   родителя
// 2. определить target элемент

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.contains("nav__link") &&
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
});
