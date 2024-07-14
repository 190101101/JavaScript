const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const array2 = [
  [1, [2, 3]],
  [[4, 5], 6],
  [7, 8, 9],
];

console.log(array.flat());
console.log(array2.flat(2));

const account1 = {
  userName: "Cecil Ireland",
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
};

const account2 = {
  userName: "Amani Salt",
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
};

const account3 = {
  userName: "Corey Martinez",
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
};

const account4 = {
  userName: "Kamile Searle",
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
};

const account5 = {
  userName: "Oliver Avila",
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

const allTransactionsArray = accounts.map((account) => account.transactions);

console.log(allTransactionsArray);

console.log("--");
const allTransaction = allTransactionsArray.flat();

const balance = allTransaction.reduce((acc, trans) => acc + trans, 0);
console.log(balance);

console.log(
  accounts
    .map((account) => account.transactions)
    .flat()
    .reduce((acc, trans) => acc + trans, 0)
);


console.log(
  accounts
    .flatMap((account) => account.transactions)
    .reduce((acc, trans) => acc + trans, 0)
);


