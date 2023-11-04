// оператор остаток

console.log(7 % 3); // 7 = 3 * 2 + 1
console.log(7 % 4); // 7 = 4 * 1 + 3

console.log(13 % 2); // odd
console.log(20 % 2); // even

const isNumberOdd = (x) => x % 2 !== 0;

console.log(isNumberOdd(10));
console.log(isNumberOdd(11));