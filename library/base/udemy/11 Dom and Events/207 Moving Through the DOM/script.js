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

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.contains("nav__link") &&
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
});

// DOM traversing (перемещение по DOM)

const h1 = document.querySelector("h1");

// перемещение вниз (к потомкам)
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = "red";

// перемещение вверх (к родителям)
console.log("-----");

console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest(".header"));

//////

const h2 = document.querySelector("h2");
console.log(h2);

h2.closest(".section").style.backgroundColor = "blue";
console.log(h2.closest(".section"));

h2.closest("h2").style.backgroundColor = "green";

// перемещение в стороны
console.log("перемещение в стороны");
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);
console.log(h2.parentElement.children);
