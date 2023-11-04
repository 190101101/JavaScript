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

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.querySelector(".header"));
console.log(document.querySelectorAll(".section"));

console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("btn"));

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'do you want save a cookies <button class="btn btn--close-cookie">ok</button>';
const header = document.querySelector(".header");
header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);
// header.after(message);

console.log(message);

document.querySelector(".btn--close-cookie")
  .addEventListener("click", (e) => {
  message.remove();
});
