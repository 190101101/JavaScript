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

window.addEventListener('load', function() {
  const loadingIndicator = document.getElementById('loading-indicator');
  loadingIndicator.style.width = '105%';
  setTimeout(() => {
    loadingIndicator.style.display = 'none'
  }, 2000)
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
  section.classList.add("section--hidden");
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
  rootMargin: '200px',
});

lazyImages.forEach((image) => {
  lazyImagesObserver.observe(image);
});

