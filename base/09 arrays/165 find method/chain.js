const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const usdToEuro = 0.86;

//? withdrawal of funds
//* see the result of the array when running
//! (trans, index, arr)

const balance = transactions
  .filter((trans) => trans < 0)
  .map((trans, index, arr) => {
    console.log(arr);
    return trans * usdToEuro;
  })
  .reduce((acc, trans) => acc + trans);

console.log(balance);
