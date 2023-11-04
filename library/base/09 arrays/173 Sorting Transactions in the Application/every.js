const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

console.log(transactions.every(trans => trans > 0));
console.log(transactions.every(trans => trans > -5000));
console.log(transactions.every(trans => Math.abs(trans) > 49));

