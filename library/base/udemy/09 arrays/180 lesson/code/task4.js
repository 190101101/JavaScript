const cats = [
    { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
    { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
    { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
    { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
   ];


const getPercentage = (num, percent) => {
  return (num * percent) / 100;
};
// console.log(getPercentage(150, 4.7));

// 1
cats.map((cat) => {
  cat.recomendedPortion = cat.catWeight * 0.75 * 12;
})