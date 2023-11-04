const cats = [
  { catWeight: 3, foodWeight: 25, owners: ["Наташа"] },
  { catWeight: 6, foodWeight: 90, owners: ["Марина", "Алиса"] },
  { catWeight: 4, foodWeight: 45, owners: ["Алекс", "Ирина"] },
  { catWeight: 7, foodWeight: 80, owners: ["Борис"] },
];

// 1
cats.map((cat) => {
  cat.recomendedPortion = cat.catWeight * 0.75 * 12;
});

console.log(cats);

// 2
const alexCat = cats.find((cat) => cat.owners.includes("Алекс"));
console.log(alexCat);

// 3
const catsEatTooMuchOwners = cats
  .filter((cat) => cat.foodWeight > cat.recomendedPortion)
  .flatMap((cat) => cat.owners)
  .join(", ");

console.log(catsEatTooMuchOwners);

const catsEatTooLittleOwners = cats
  .filter((cat) => cat.foodWeight < cat.recomendedPortion)
  .flatMap((cat) => cat.owners);

console.log(catsEatTooLittleOwners);

// 4
console.log(
  `${catsEatTooMuchOwners} - хозяева кошек, которые едят слишком много!`
);
console.log(
  `${catsEatTooLittleOwners} - хозяева кошек, которые едят слишком мало!`
);

// 5
console.log(cats.some((cat) => cat.foodWeight == cat.recomendedPortion));

// 6
const isFoodWeightNormal = (cat) => {
  cat.foodWeight > cat.recomendedPortion * 0.9 &&
    cat.foodWeight < cat.recomendedPortion * 1.1;
};

console.log(cats.some(isFoodWeightNormal));

// 7
console.log(cats.filter(isFoodWeightNormal));

// 8
console.log(
  `это кошка ест слишком ${
    alexCat.foodWeight > alexCat.recomendedPortion ? "много" : "мало"
  }`
);
