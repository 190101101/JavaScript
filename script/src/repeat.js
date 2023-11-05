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
console.log(document.body);
console.log(document.head);

//
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `do you want save a cookie? <button class="btn btn--close-cookie">ok</button>`

//
header.prepend(message);

// header.append(message.cloneNode(true));
// header.after(message);
// header.before(message);

//
document.querySelector('.btn--close-cookie')
  .addEventListener('click', (e) => {
    //? old // message.parentElement.removeChild(message);
    message.remove();
})

//

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).padding);
console.log(parseFloat(getComputedStyle(message).padding));

message.style.padding = parseFloat(getComputedStyle(message).padding) + 5 + 'px';
console.log(getComputedStyle(message).padding);
console.log(parseFloat(getComputedStyle(message).padding));

//
document.documentElement.style.setProperty('--color-first', 'pink');

// attribute
const logo = document.querySelector('.nav__logo');
console.log(logo);

console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));

console.log(logo.dataset);
console.log(logo.dataset.id);
console.log(logo.dataset.versionNumber);
console.log(logo.dataset.developer); // undefined
console.log(logo.getAttribute('developer'));
console.log(logo.setAttribute('code', 'js'));
console.log(logo.dataset.code); // undefined
console.log(logo.getAttribute('code'));

// class
logo.classList.add('a', 'b', 'c');
logo.classList.remove('a');
logo.classList.toggle('a');
console.log(logo.classList.contains('b'));
console.log(logo.classList.contains('b', 'c'));

console.log(logo.classList);