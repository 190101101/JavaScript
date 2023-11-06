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

//? 211 inter section observer API 2

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const getStickyNav = (entries) => {
  !entries[0].isIntersecting
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

const observer = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

observer.observe(header);

