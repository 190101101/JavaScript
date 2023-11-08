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

//? 212 Show Elements When Scrolling

// section--hidden
const allSections = document.querySelectorAll("section");

const appearanceSection = (entries, observer) => {
  console.log(entries[0]);
  if (!entries[0].isIntersecting) return;
  entries[0].target.classList.remove("section--hidden");
  observer.unobserve(entries[0].target);
};

const observer = new IntersectionObserver(appearanceSection, {
  root: null,
  treshhold: 0.2,
});

allSections.forEach((section) => {
  observer.observe(section);
  section.classList.add("section--hidden");
});

