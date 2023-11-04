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

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector(".header"));
console.log(document.querySelectorAll(".section"));

console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("btn"));
*/

const message = document.createElement("div");
message.classList.add("cookie-message");
message.style.backgroundColor = "#076785";
message.style.width = "120%";

message.innerHTML =
  'do you want save a cookies <button class="btn btn--close-cookie">ok</button>';
const header = document.querySelector(".header");
header.prepend(message);

// console.log(message);

document.querySelector(".btn--close-cookie").addEventListener("click", (e) => {
  message.remove();
});

console.log(getComputedStyle(message).padding);

message.style.padding =
  parseFloat(getComputedStyle(message).padding) + 5 + "px";

console.log(getComputedStyle(message).padding);

document.documentElement.style.setProperty("--color-first", "pink");

//attribute
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.developer);
console.log(logo.getAttribute("developer"));
console.log(logo.className);

logo.alt = "logo simple bank";
console.log(logo.alt);

logo.setAttribute("copyright", "190101101");
console.log(logo.getAttribute("copyright"));
console.log(logo.copyright);

console.log(logo.getAttribute("src"));
console.log(logo.src);

const link = document.querySelector(".google");
console.log(link.getAttribute("href"));
console.log(link.href);

const linkBtn = document.querySelector(".nav__link--btn");
console.log(linkBtn.getAttribute("href"));
console.log(linkBtn.href);

// data attribute
console.log(logo.dataset);
console.log(logo.dataset.versionNumber);
console.log(logo.dataset.id);

// classes

logo.classList.add("a", "b", "c");
logo.classList.remove('a','b', 'c');
logo.classList.toggle('a');
console.log(logo.classList.contains("a", "b", "c"));
console.log(logo.classList);
