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
//? 207 Moving Through the DOM (Перемещение по DOM)

const h1 = document.querySelector('h1');

//? ashagi dogru hereket (child)
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
h1.firstElementChild.style.color = 'yellow';

//? yuxari dogru hereket (parent)
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header'));

//? yaxin parente catmaq
const h2 = document.querySelector('h2');
h2.closest('.section').style.backgroundColor = 'pink';
h2.closest('h2').style.color = 'green';
console.log(h2.closest('.section').querySelector('h2').children);
console.log(h2.closest('h2'));

//? yana doğru hərəkət
console.log(h2.previousElementSibling);
console.log(h2.nextElementSibling);

//? parentin childrenlerini getir
console.log(h1.parentElement.children);


