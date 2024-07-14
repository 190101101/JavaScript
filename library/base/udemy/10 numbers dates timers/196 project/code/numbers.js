"use strict";

console.log(10 === 10.0);

// 10 - 0-9
// 10 - 0-9; 1 / 10 = 1.3; 10 / 3 = 3.333...
// 2 - 0, 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

console.log(typeof Number("11"));
console.log(typeof parseInt("11"));
console.log(typeof +"11");
console.log(typeof Number.parseInt("11%"));
console.log(typeof Number.parseInt("s11"));
console.log(typeof Number.parseInt("11%", 10));
console.log(typeof parseInt("000111001%", 2));
console.log(Number.parseInt("1011%", 2));

console.log(parseFloat("11.9kg", 2));
console.log(typeof parseFloat("11.9kg", 2));

// Other methods from number namespace
console.log(isNaN(111));
console.log(isNaN("text"));
console.log(isNaN(Number.parseInt("11%")));
console.log(11 / 0);

// check if the value is finite number

console.log(isFinite(111));
console.log(isFinite('111'));
console.log(isFinite('111%'));
console.log(isFinite(+'111$'));
console.log(isFinite(11 / 0));