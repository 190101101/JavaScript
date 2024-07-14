const jane = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const julia = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = (catAges) => {
  return catAges
    .map((catAge) => (catAge <= 2 ? catAge * 10 : catAge * 7))
    .filter((humanAge) => humanAge >= 18)
    .reduce((acc, catAge, index, arr) => acc + catAge / arr.length, 0);
};

console.log(getAverageHumanAge(jane));
