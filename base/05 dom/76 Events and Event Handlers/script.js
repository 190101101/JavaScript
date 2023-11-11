"use strict";

/*
const eventHandler = () => {
    console.log(document.querySelector(".number-input").value);
};

document.querySelector(".check").addEventListener("click", eventHandler);
*/

// Math.floor(Math.random() * 20) + 1
const button = document.querySelector(".check");
const question = document.querySelector(".question");
const randomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener("click", (e) => {
  console.log(e);

  const guessingNumber = Number(document.querySelector(".number-input"));

  if (!guessingNumber) {
    document.querySelector(".guess-message").textContent = "введите число";
  }
});
