"use strict";

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

window.addEventListener("DOMContentLoaded", () => {
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
//? 214 Creating a Slider Part 1

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const countSlides = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const moveToSlide = (currentSlide) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
};

moveToSlide(0);

// 1 - 0%, 2 - 100%, 3 - 200%, 4 - 300%,
btnRight.addEventListener("click", (e) => {
  currentSlide === countSlides - 1 ? (currentSlide = 0) : currentSlide++;
  moveToSlide(currentSlide);
});

// 1 - 0%, 2 - 100%, 3 - 200%, 4 - 300%,
btnLeft.addEventListener("click", (e) => {
  currentSlide === 0 ? (currentSlide = countSlides - 1) : currentSlide--;
  moveToSlide(currentSlide);
});
