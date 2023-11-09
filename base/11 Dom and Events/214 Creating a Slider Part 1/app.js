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
//? cookie
const message = document.createElement("div");
message.classList.add("cookie-message");
message.style.backgroundColor = "#076785";
message.style.width = "120%";

message.innerHTML =
  'do you want save a cookies <button class="btn btn--close-cookie">ok</button>';
const header = document.querySelector(".header");
header.prepend(message);

document.querySelector(".btn--close-cookie").addEventListener("click", (e) => {
  message.remove();
});

//? scroll
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  e.preventDefault();
  section1.scrollIntoView({behavior: 'smooth'});
});

//? Event Delegation
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  
  //? 3. eget target olunmush element nav__link deyilse false
  if (!e.target.classList.contains("nav__link")) return;
  
  //? 3. target olunmush elementi mueyyen et
  document
    .querySelector(e.target.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});

//? tabs
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabContents = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", (e) => {
  const clickedButton = e.target.closest(".operations__tab");

  if (!clickedButton) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));

  clickedButton.classList.add("operations__tab--active");

  tabContents.forEach((content) => {
    content.classList.remove("operations__content--active");
  });

  document.querySelector(
    `.operations__content--${clickedButton.dataset.tab}`
  ).classList.add("operations__content--active");
});


//? 211 inter section observer API 2
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


//? 213 Lazy Loading

const lazyImages = document.querySelectorAll("img[data-src]");

const loadImages = (entries, observer) => {
  if (!entries[0].isIntersecting) return;

  entries[0].target.src = entries[0].target.dataset.src;
  entries[0].target.addEventListener("load", () => {
    entries[0].target.classList.remove("lazy-img");
  });

  observer.unobserve(entries[0].target);
};

const lazyImagesObserver = new IntersectionObserver(loadImages, {
  root: null,
  threshold: 0.5,
  rootMargin: '200px',
});

lazyImages.forEach((image) => {
  lazyImagesObserver.observe(image);
});
