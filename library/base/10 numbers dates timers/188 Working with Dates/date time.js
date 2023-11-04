const now = new Date();
console.log(now);

const someDateString = "Oct 29 2023 15:37:30";

const someDate = new Date(someDateString);
console.log(someDate);

console.log("----------------");

//*

const account1 = {
  userName: "Cecil Ireland",
  transactions: [500.32, 250, -300.92, 5000, -850, -110.18, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    "2020-10-02T14:43:31.074Z",
    "2020-10-29T11:24:19.761Z",
    "2020-11-15T10:45:23.907Z",
    "2021-01-22T12:17:46.255Z",
    "2021-02-12T15:14:06.486Z",
    "2021-03-09T11:42:26.371Z",
    "2021-05-21T07:43:59.331Z",
    "2021-06-22T15:21:20.814Z",
  ],
  currency: "USD",
  locale: "en-US",
};

console.log(new Date(account1.transactionsDates[0]));
console.log(new Date(2222, 1, 13, 11, 28, 59));
console.log(new Date(2222, 1, 32, 11, 28, 59));

// unix time started jan 1970
console.log(new Date(0));
console.log(new Date(86400000));
console.log(new Date(1 * 24 * 60 * 60 * 1000));

console.log("----------------");

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(`getFullYear: ${futureDate.getFullYear()}`);
console.log(`getMonth: ${futureDate.getMonth()}`);
console.log(`getDate: ${futureDate.getDate()}`);
console.log(`getDay: ${futureDate.getDay()}`);
console.log(`getMinutes: ${futureDate.getMinutes()}`);
console.log(`getSeconds: ${futureDate.getSeconds()}`);
console.log(`toISOString: ${futureDate.toISOString()}`);
console.log(`timestamp: ${futureDate.getTime()}`);
console.log(new Date(7956084539000));
console.log(Date.now());
futureDate.setFullYear(2023);

console.log(futureDate);