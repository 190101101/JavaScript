const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120];

//? return < 0 -> x, y
//? return > 0 -> y, x

//*Ascending order
const ascending = transactions.sort((x, y) => {
    if(x > y){
        return 1;
    }
    if(x < y){
        return -1;
    }
});

console.log(ascending);

//*Descending order
const descending = transactions.sort((x, y) => {
    if(x > y){
        return -1;
    }
    if(x < y){
        return 1;
    }
});

console.log(descending);



//*Ascending order
console.log(transactions.sort((x, y) => x - y));

//*Descending order
console.log(transactions.sort((x, y) => y - x));