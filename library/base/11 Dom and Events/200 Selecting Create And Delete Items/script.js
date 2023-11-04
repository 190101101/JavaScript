"use strict";

///////////////////////////////////////
// Modal window

const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const btnCloseModalWindow = document.querySelector(".btn--close-modal-window");
const btnsOpenModalWindow = document.querySelectorAll(
  ".btn--show-modal-window"
);

const openModalWindow = (e) => {
  e.preventDefault();
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalWindow = () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModalWindow.length; i++)
// btnsOpenModalWindow[i].addEventListener('click', openModalWindow);

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

/////////////////////////////////////////////////////
//* выбор элемента

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector(".header"));
console.log(document.querySelectorAll(".section"));
console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button"));
console.log(document.getElementsByClassName("btn"));

// * создание и вставка элементов
// .insertAdjacentHTML()

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `мы используем на этом сайте cookie для улучшения функциональности 
<button class="btn btn--close-cookie">Ok!</button>`;

console.log(message);

const header = document.querySelector(".header");
header.prepend(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//удаления элементов
document.querySelector(".btn--close-cookie")
.addEventListener("click", () => {
  message.remove();
});
