"use strict";

const input = document.querySelector(".number-input");
const scoreText = document.querySelector(".score");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const question = document.querySelector(".question");
const guessMessage = document.querySelector(".guess-message");
const highscore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 10;
let counterScore = 0;

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

    counterScore = 10 - score;
    if(counterScore <= score){
      highscore.textContent = counterScore;
    }
    //to high
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком много!";
    } else {
      guessMessage.textContent = "вы проиграли !";
      question.style.background = "red";
    }

    // to low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      score--;

      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком мало !";
    } else {
      guessMessage.textContent = "вы проиграли !";
      question.style.background = "red";
    }
  }
});

again.addEventListener("click", (e) => {
  e.preventDefault();
  guessMessage.textContent = "Начни угадывать";
  question.style.background = "white";
  question.style.color = "black";
  question.textContent = "???";
  input.value = "";
  score = 20;
  scoreText.textContent = score;
  secretNumber = Math.trunc(Math.random() * 5) + 1;
  console.log(secretNumber);
});
