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

const btnScrollTo1 = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section3 = document.querySelector("#section--3");

const btnScrollTo = document.querySelector(".btn--scroll-to");
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");

/*
old school
h1.onmouseenter = () => {
  alert('onmouseenter');
}

h1.onclick = () => {
  alert('onclick');
}
*/

const alertMouseEnterH1 = (e) => {
  alert("events mouseenter");
  h1.removeEventListener("mouseenter", alertMouseEnterH1);
};

h1.addEventListener("mouseenter", alertMouseEnterH1);

/*
setTimeout(() => {
  h1.removeEventListener("mouseenter", alertMouseEnterH1);
}, 5000);
*/