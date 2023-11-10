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
//Todo: 214 Creating a Slider Part 1
//? 1 .slide classlari sec
//? 2 .btn right left classlari sec slider__btn--left, slider__btn--right
//? 3 slide neceden bashlamalidi?
//? 4 countSlides slide saylari teyin et
//? 5 moveToSlide
//? 6 moveToSlide icinde slide leri listed et
//? 7 nece hereket edecek deye style ver.
//? 9 slide ni bashlat
//? 10 sag sol eventleri yarat
//? 11 event icinde ternari yol ile currentSlide... hell et
//? 12 next, prev slide func yarat
//? 13 btn events lerin icinde cagir
//? 14 arrow larla slide ni cevirmek
//? 15 dotContainer .dots sec createDots func yarat 
//? 16 icinde dots__dot button elave et ve attribute data-slide.
//? 17 activeCurrentDot yarat ve icinde dots__dot lari dots__dot--active remove
//? 18 activeCurrentDot icinde slide ni dots__dot--active et
//? 19 activeCurrentDot bashqa hereketlerdede cagir
//? 20 dotContainer event yarat

const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");

let currentSlide = 0;
let countSlides = slides.length;

const createDots = () => {
  slides.forEach((_, index) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("dots__dot");
    buttonElement.setAttribute("data-slide", index);
    dotContainer.insertAdjacentElement("beforeend", buttonElement);
  });
};

createDots();

const activateCurrentDot = (slide) => {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

activateCurrentDot(0)

const moveToSlide = (currentSlide) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
};

moveToSlide(0);

const nextSlide = function () {
  currentSlide === countSlides - 1 ? (currentSlide = 0) : currentSlide++;
  activateCurrentDot(currentSlide);
  moveToSlide(currentSlide);
};
const prevSlide = function () {
  currentSlide === 0 ? (currentSlide = countSlides - 1) : currentSlide--;
  activateCurrentDot(currentSlide);
  moveToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

dotContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dots__dot")) return;
  moveToSlide(e.target.dataset.slide);
  activateCurrentDot(e.target.dataset.slide);
});
