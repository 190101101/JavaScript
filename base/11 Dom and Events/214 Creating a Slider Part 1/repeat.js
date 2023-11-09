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

//Todo: 211 inter section observer API 2
//? 1 document .header
//? 2 document .nav
//? 3 nav in hundurluyu js in oz func ile
//? 4 getStickyNav = (entries) => {}
//? 5 const observer = new IntersectionObserver
//? 6 tamamla

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const getStickyNav = (entries) => {
  !entries[0].isIntersecting
    ? nav.classList.add("sticky") 
    : nav.classList.remove("sticky");
};

const options = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(getStickyNav, options);

observer.observe(header);

//Todo: 213 Lazy Loading

//? own method
const images = document.querySelectorAll(".services__img");

window.addEventListener("load", (e) => {
  setTimeout(() => {
    images.forEach((image) => {
      if (!image.classList.contains("lazy-img")) return;
      image.setAttribute("src", image.dataset.src);
      image.classList.remove("lazy-img");
    });
  }, 2000);
});


//? 213 Lazy Loading (own method);
const sections = document.querySelectorAll(".section");

const appearanceSection = (entries, observer) => {
  if (!entries[0].isIntersecting) return;

  entries[0].target.querySelectorAll(".services__img").forEach((image) => {
    image.setAttribute("src", image.dataset.src);
    image.classList.remove("lazy-img");
    console.log(entries[0]);
  });

  observer.unobserve(entries[0].target);
};

const observer = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.1,
});

window.addEventListener("load", (e) => {
  setTimeout(() => {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, 1000);
});
