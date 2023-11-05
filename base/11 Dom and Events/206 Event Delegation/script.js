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
//? Event Delegation

//? bu method cox element olan nav ucun cox pisdi
/*
document.querySelectorAll(".nav__link").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(e.currentTarget.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
*/

//? делегирования событий

//? 1. ümumi parent ucun event listener elave et.
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();

  //? 3. eget target olunmush element nav__link deyilse false
  if (!e.target.classList.contains("nav__link")) return;

  //? 3. target olunmush elementi mueyyen et
  document
    .querySelector(e.target.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});

