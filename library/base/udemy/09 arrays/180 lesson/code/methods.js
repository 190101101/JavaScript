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

// ex.1
const bankDepositTotal = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans > 0)
  .reduce((acc, deposite) => acc + deposite, 0);

console.log(bankDepositTotal);

// ex.2
const withdrawalsOver300 = accounts
  .flatMap((account) => account.transactions)
  .filter((trans) => trans <= -300).length;

console.log(withdrawalsOver300);

// ex.3
const withdrawalsOver400 = accounts
  .flatMap((account) => account.transactions)
  .reduce((counter, trans) => (trans <= -400 ? counter + 1 : counter), 0);

console.log(withdrawalsOver400);

// ex.4
const { depositesTotal, withdrawalsTotal } = accounts
  .flatMap((account) => account.transactions)
  .reduce(
    (acc, trans) => {
      //? 1
      trans > 0
        ? (acc.depositesTotal += trans)
        : (acc.withdrawalsTotal += trans);

      //? 2
      acc[trans > 0 ? "depositesTotal" : "withdrawalsTotal"] += trans;
      return acc;
    },
    { depositesTotal: 0, withdrawalsTotal: 0 }
  );

console.log(depositesTotal, withdrawalsTotal);

//5
//работа с массивами в javascript -> Работа с Массивами в Javascritp

const text1 = "работа с массивами в javascript";
const text2 = "работа с массивами в javascript ПРОСТЫМ языком для новичков";
const text3 = "работа с массивами и строками в javascript";
const text4 = "для чего нужны массивы в javascript";

const newText1 = text1
  .split(" ")
  .map((word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  })
  .join(" ");

// console.log(newText1);

const textToTitleCase = (text) => {
  const extensions = ["с", "в", "и", "для", "и", "по", "на", "о"];

  const capitalizeString = (word) => word[0].toUpperCase() + word.slice(1);

  const titleCase = text
    .toLowerCase()
    .split(" ")
    .map((word) => (extensions.includes(word) ? word : capitalizeString(word)))
    .join(" ");
  return capitalizeString(titleCase);
};

console.log(textToTitleCase(text1));
console.log(textToTitleCase(text2));
console.log(textToTitleCase(text3));
console.log(textToTitleCase(text4));
