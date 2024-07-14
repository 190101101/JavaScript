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

window.addEventListener("load", function () {
  const loadingIndicator = document.getElementById("loading-indicator");
  loadingIndicator.style.width = "105%";
  setTimeout(() => {
    loadingIndicator.classList.add("loading-color");
    loadingIndicator.style.transition = "width 2s, left 2s";
    loadingIndicator.style.left = "105%";
  }, 2000);
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

//tabs
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContents = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", (e) => {
  e.preventDefault();

  const clickedButton = e.target.closest(".operations__tab");

  if (!clickedButton) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));

  clickedButton.classList.add("operations__tab--active");

  tabContents.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clickedButton.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Passing Arguments To Event Handlers
const nav = document.querySelector(".nav");
const navItem = document.querySelector(".nav__item");

const navLinksHoverAnimation = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const linkOver = e.target;
    const siblingLinks = linkOver
      .closest(".nav__links")
      .querySelectorAll(".nav__link");

    const logo = linkOver.closest(".nav").querySelector("img");
    const logoText = linkOver.closest(".nav").querySelector(".nav__text");

    siblingLinks.forEach((element) => {
      if (element !== linkOver) element.style.opacity = this;
    });

    logo.style.opacity = this;
    logoText.style.opacity = this;
  }
};

//работа  аргументами при помощи bind() / this
nav.addEventListener("mouseover", navLinksHoverAnimation.bind(0.4));
nav.addEventListener("mouseout", navLinksHoverAnimation.bind(1));

//Sticky navigation

const section1Coords = section1.getBoundingClientRect();

const getStickyNav = (entries) => {
  entries[0].isIntersecting
    ? nav.classList.remove("sticky")
    : nav.classList.add("sticky");
};

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////

const allSections = document.querySelectorAll(".section");

const appearanceSection = (entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

//? implementation lazy loading for img

const lazyImages = document.querySelectorAll("img[data-src]");

const loadImages = (entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.5,
  rootMargin: "200px",
});

lazyImages.forEach((image) => {
  lazyImagesObserver.observe(image);
});

// slider

const slider = document.querySelector(".slider");

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".dots");

const createDots = () => {
  slides.forEach((_, index) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("dots__dot");
    buttonElement.setAttribute("data-slide", index);
    dotContainer.insertAdjacentElement("beforeend", buttonElement);
  });
};

createDots();

const activateCurrentBot = (slide) => {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

activateCurrentBot(0);

let currentSlide = 0;
let slidesnumber = slides.length;

const moveToSlide = (slide) => {
  slides.forEach((s, index) => {
    return (s.style.transform = `translateX(${(index - slide) * 100}%)`);
  });
};

moveToSlide(0);

const nextSlide = () => {
  if (currentSlide === slidesnumber - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  activateCurrentBot(currentSlide);
  moveToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);

const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slidesnumber - 1;
  } else {
    currentSlide--;
  }
  activateCurrentBot(currentSlide);
  moveToSlide(currentSlide);
};

btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") previousSlide();
});

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    activateCurrentBot(slide);
    moveToSlide(slide);
  }
});
