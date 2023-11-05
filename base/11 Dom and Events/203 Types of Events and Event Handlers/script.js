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
//?task
// 1. type event 
// *event elave etmek 
// *event yox etmek 
/////////////
// Types of Events and Event Handlers

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', (e) => {
    console.log(e);
});

//? old version
h1.onclick = (e) => console.log(e);

const alertMouseEnterH1 = (e) => {
  console.log('mouse entered');

  setTimeout(() => {
    h1.removeEventListener('mouseenter', alertMouseEnterH1);
  }, 3000)
}

h1.addEventListener('mouseenter', alertMouseEnterH1);
