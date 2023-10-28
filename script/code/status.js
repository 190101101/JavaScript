let status;
let sort = false;
let transactions =  [500, 250, -300, 5000, -850, -110, -170, 1100];

console.log(transactions);

sort = !sort;

status = sort ? transactions.sort((x, y) => x- y) : transactions;

console.log(status);