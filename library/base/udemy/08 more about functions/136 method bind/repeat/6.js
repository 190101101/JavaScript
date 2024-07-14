// partial application
const getPercentage = (totalValue, value) => (value / totalValue) * 100;
console.log(getPercentage(13, 100));

const getPercentage23789 = getPercentage.bind(null, 23789);
console.log(getPercentage23789(1000));