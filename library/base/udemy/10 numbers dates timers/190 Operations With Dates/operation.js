const futureDate = new Date(2222, 1, 13, 11, 28, 59);

console.log(futureDate);
console.log(Number(futureDate));

console.log(new Date(Number(futureDate)));

const getDaysBetween2Dates = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);

const getDate = getDaysBetween2Dates(
  new Date(1991, 7, 19),
  new Date(2023, 10, 30)
);

console.log(getDate);
