"use strict";

/*
const eventHandler = () => {
    console.log(document.querySelector(".number-input").value);
};

document.querySelector(".check").addEventListener("click", eventHandler);
*/

const button = document.querySelector(".check");
const question = document.querySelector(".question");
const guessMessage = document.querySelector(".guess-message");

const secretNumber = Math.trunc(Math.random() * 5) + 1;
let score = 5;

question.textContent = secretNumber;

button.addEventListener("click", (e) => {
  e.preventDefault();

  const guessingNumber = Number(document.querySelector(".number-input").value);

  if (!guessingNumber) {
    guessMessage.textContent = "введите число";
  }

  else if (guessingNumber === secretNumber) {
    guessMessage.textContent = "правильно !";
  }

  else if (guessingNumber > secretNumber) {
    
    if(score > 1){
      score--;
      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком много!";
    }else{
      guessMessage.textContent = "вы проиграли !";
    }
  }
  
  else if (guessingNumber < secretNumber) {
    if(score > 1){
      score--;
      document.querySelector(".score").textContent = score;
      guessMessage.textContent = "слишком мало !";
    }else{
      guessMessage.textContent = "вы проиграли !";
    }
  }

});
