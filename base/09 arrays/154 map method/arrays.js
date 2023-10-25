const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];
const usdToEuro = 0.86;

//* map
const exchange = transactions.map((trans) => {
    return trans * usdToEuro
})

const transBox = [];
for(const trans of transactions){
    transBox.push(trans * usdToEuro);
}

const transactionsEuro = transactions.map(trans => trans * usdToEuro);

const transactionDesctiptions = transactions.map((transaction, index ) => {
    return `Transaction number: ${index + 1}: ${Math.abs(transaction)} was ${transaction > 0 ? 'deposited' : 'withdrew'}`;
})

console.log(transactionDesctiptions);