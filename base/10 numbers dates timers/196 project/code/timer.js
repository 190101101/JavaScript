const ingridients = ["tuna", "salmon"];

const sushiTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`your sushi has been delivered. ingredients: ${ing1}, ${ing2}`);
  },
  3000,
  ...ingridients
);

console.log("waiting...");

if (ingridients.includes("tuna")) {
  clearTimeout(sushiTimer);
  console.log("timer killed...");
}

let counter = 0;

const timeCounter = setInterval(() => {
  counter += 1;
  console.log(counter);

  if (counter == 5) {
    clearInterval(timeCounter);
  }
}, 1000);
