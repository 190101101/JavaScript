// partial application
const getPercentace = (totalValue, value) => value / totalValue * 100;

// console.log(getPercentace(20, 220));

const getPercentace23789 = getPercentace.bind(null, 23789);
console.log(getPercentace23789(10000));