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

// styles
message.style.backgroundColor = '#076785';
message.style.width = '120%';
console.log(message.style.width);
console.log(message.style.color);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
// message.style.height = getComputedStyle(message).height + 100 + 'px'
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

document.documentElement.style.setProperty('--color-first', 'yellow');

//atributes

const logo = document.querySelector('.nav__logo');

document.querySelector('.nav__logo').setAttribute('src', 'https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('developer'));
logo.setAttribute('program', 'js');
console.log(logo.getAttribute('program'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

// data
console.log(logo.dataset.versionNumber);
console.log(logo.dataset.id);

// classes
// logo.className = 'a';
logo.classList.add('a', 'b');
logo.classList.remove('a', 'b');
logo.classList.toggle('a');
logo.classList.contains('c');
