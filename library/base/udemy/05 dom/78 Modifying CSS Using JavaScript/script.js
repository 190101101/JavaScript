"use strict";

const button = document.querySelector(".check");
const question = document.querySelector(".question");
const guessMessage = document.querySelector(".guess-message");

const secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 5;

question.textContent = secretNumber;

button.addEventListener("click", (e) => {
  e.preventDefault();

  const guessingNumber = Number(document.querySelector(".number-input").value);

  //no input
  if (!guessingNumber) {
    guessMessage.textContent = "введите число";
    //player won
  } else if (guessingNumber === secretNumber) {
    question.style.background = 'green';
    question.style.color = 'white';
    guessMessage.textContent = "правильно !";

    //to high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком много!";
    } else {
      guessMessage.textContent = "вы проиграли !";
    }

    // to low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком мало !";
    } else {
      guessMessage.textContent = "вы проиграли !";
    }
  }
});
