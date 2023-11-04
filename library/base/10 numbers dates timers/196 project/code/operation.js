const futureDate = new Date(2222, 1, 13, 11, 28, 59);

console.log(futureDate);
console.log(Number(futureDate));

console.log(new Date(Number(futureDate)));

const getDaysBetween2Dates = (date1, date2) =>
    Math.abs((date1 - date2) / (1000 * 60 * 60 * 24));

const getDate = getDaysBetween2Dates(
  new Date(1991, 7, 19),
  new Date(2023, 10, 30),
);

console.log(getDate);


const days = (p1, p2) => {
  var date1 = new Date(p1);
  var date2 = new Date(p2);
  var date = new Date(date1);

  while (date <= date2) {
    console.log(date.toDateString());
    date.setDate(date.getDate() + 1);
  }
}


const p1 = '2022-09-19';
const p2 = '2023-10-31';

days(p1, p2);