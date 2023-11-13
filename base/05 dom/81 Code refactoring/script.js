"use strict";

const input = document.querySelector(".number-input");
const scoreText = document.querySelector(".score");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const question = document.querySelector(".question");
const guessMessage = document.querySelector(".guess-message");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = (message) => {
  document.querySelector(".guess-message").textContent = message;
};

console.log(secretNumber);

check.addEventListener("click", (e) => {
  e.preventDefault();

  const guessingNumber = Number(document.querySelector(".number-input").value);

  //no input
  if (!guessingNumber) {
    guessMessage.textContent = "введите число";
    //player won
  } else if (guessingNumber === secretNumber) {
    question.style.background = "green";
    question.style.color = "white";
    guessMessage.textContent = "правильно !";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    } else {
      document.querySelector(".highscore").textContent = highscore;
    }

    // number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayGuessMessage(
        guessingNumber > secretNumber ? "слишком много!" : "слишком мало !"
      );
    } else {
      document.querySelector(".score").textContent = 0;
      displayGuessMessage("вы проиграли !");
      question.style.background = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

again.addEventListener("click", (e) => {
  e.preventDefault();
  displayGuessMessage("Начни угадывать");
  question.style.background = "white";
  question.style.color = "black";
  question.textContent = "???";
  input.value = "";
  score = 20;
  scoreText.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
