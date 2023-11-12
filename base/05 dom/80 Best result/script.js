"use strict";

const input = document.querySelector(".number-input");
const scoreText = document.querySelector(".score");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const question = document.querySelector(".question");
const guessMessage = document.querySelector(".guess-message");

let secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 10;
let highscore = 0;

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

    if(score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }else{
      document.querySelector(".highscore").textContent = highscore;
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
  score = 10;
  scoreText.textContent = score;
  secretNumber = Math.trunc(Math.random() * 5) + 1;
  console.log(secretNumber);
});
