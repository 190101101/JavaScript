// const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const transactions = [500, 250, -300, 5000, -850, -110, -170, 1100];

const balance = transactions.reduce((acc, item) => acc + item, 0);

console.log(balance);

//*-----------------------

let sum = 0;

for (const trans of transactions) {
  sum += trans;
}

console.log(sum);

const getMin = transactions.reduce((acc, trans) => {
  return acc < trans ? acc : trans;
}, transactions[0]);

console.log(getMin);
