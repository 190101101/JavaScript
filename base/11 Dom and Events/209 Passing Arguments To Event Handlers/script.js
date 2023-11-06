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

//? 209 Passing Arguments To Event Handlers

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__link");

const navLinksHoverAnimation = function (e) {
  e.preventDefault();

  if (!e.target.classList.contains("nav__link")) return;

  const linkOver = e.target;

  const siblingLinks = linkOver
    .closest(".nav__links")
    .querySelectorAll(".nav__link");

  const logo = linkOver.closest(".nav").querySelector("img");

  const navText = linkOver.closest(".nav").querySelector(".nav__text");

  siblingLinks.forEach((el) => {
    if (el !== linkOver) el.style.opacity = this;
  });
  logo.style.opacity = this;
  navText.style.opacity = this;
};

//? bind komekliyi ile argumentlerle calishmaq bind() / this
nav.addEventListener("mouseover", navLinksHoverAnimation.bind(0.4));
nav.addEventListener("mouseout", navLinksHoverAnimation.bind(1));

