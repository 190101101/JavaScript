const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

const withdrawals = transactions.filter((trans) => trans < 0);
console.log(withdrawals);


//* 2
const withdrawals2 = [];

for (const trans of transactions) {
  if (trans < 0) {
    withdrawals2.push(trans);
  }
}

console.log(withdrawals2);
