const jane = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const julia = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = (catAges) => {
  const humanAges = catAges.map((catAge) =>
    catAge <= 2 ? catAge * 10 : catAge * 7
  );

  const adultCats = humanAges.filter((humanAge) => humanAge >= 18);

  const averageHumanAge =
    adultCats.reduce((acc, catAge) => acc + catAge, 0) / adultCats.length;

  return averageHumanAge;
};

console.log(getAverageHumanAge(jane));
console.log(getAverageHumanAge(julia));
